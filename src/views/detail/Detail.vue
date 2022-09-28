<template>
  <div id="detail">
      <!-- 导航栏 -->
      <detail-nav-bar class="detail-nav" @navClick="navClick" :detailIndex="detailIndexTheme"/>

      <better-scroll 
      :probeType="3"  
      @betscroll="betscroll" 
      ref="bscroll" 
      class="detail-scroll"

      >
      <!-- 图片轮播 -->
      <detail-swiper  class="detail-swiper" :topImages="topImages" ></detail-swiper>
      <!-- 商品基础信息 -->
      <detail-base-info :goods="baseGoods"/>
      <!-- 店铺详情 -->
      <detail-shop-info :shop="shopInfo"/>
      <!-- 商品详情介绍 -->
      <detail-goods-info :goodsInfo="detailInfo" />
      <!-- 商品参数介绍 -->
      <detail-goods-params :goodsParams="shopParams" ref="params"/>
      <!-- 商品评价 -->
      <detail-comment :comment="commentInfo" ref="comment"/>
      <!-- 推荐页面商品展示 -->
      <goods-list :goodslist="recommends" ref="recommends"></goods-list>
     
      </better-scroll>
       <!-- 底部 -->
      <detail-bottom-bar @addCartList="addCartList"/>
      <!-- 返回小图标 -->
      <back-top v-show="isBackTopOk" @click.native="getBackTop"/>
      <!-- 吐司 提示信息 -->
      <toast :message="message"  ref="toast" />
  </div>
</template>

<script>
import DetailNavBar from './detailComp/DetailNavBar.vue'
import DetailSwiper from './detailComp/DetailSwiper.vue'
import DetailBaseInfo from './detailComp/DetailBaseInfo.vue'
import DetailShopInfo from './detailComp/DetailShopInfo.vue'
import DetailGoodsInfo from './detailComp/DetailGoodsInfo.vue'
import DetailGoodsParams from './detailComp/DetailGoodsParams.vue'
import DetailComment from './detailComp/DetailComment.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import DetailBottomBar from './detailComp/DetailBottomBar.vue'
import BetterScroll from 'components/content/betterscroll/BetterScroll'
import Toast from 'components/content/toast/Toast.vue'

import {getDetail,getRecommends} from 'network/detail.js'
import {Goods,Shop,shopParams} from 'common/models.js'
import {backTopMixin} from 'common/mixin.js'
import {debounce} from 'common/untils.js'

import {mapActions} from 'vuex'

export default {
    name:"Detail",
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo ,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailGoodsParams,
        DetailComment,
        GoodsList,
        DetailBottomBar,
        BetterScroll,
        Toast,
    },
    data () {
        return {
            //保存图片
            topImages:[],
            //定义
            iid:null,
            //商品情况
            baseGoods:{},
            //店铺情况
            shopInfo:{},
            //商品参数
            shopParams:{},
            //商品评价
            commentInfo:{},
            //推荐
            detailInfo:{},
            //保存图片连接数据
            recommends:[],
            listenerItemImgLoad:"",
            //导航值
            themeTops:[],
            //序号
            detailIndexTheme:0,
            //提示信息文字
            message:"",
        }
    },
    mixins: [backTopMixin],
    created(){
        //获取保存iid值
        this.iid=this.$route.query.iid;
        //api请求详细数据 
        getDetail(this.iid).then(res=>{
            //  console.log(res);
            let result=res.result;
            //取数据 图片
            this.topImages=result.itemInfo.topImages;
            //根据请求的api，解析需要的数据 并封装为Goods对象
            this.baseGoods=new Goods(result.itemInfo,result.columns,result.shopInfo)
            //店铺详情
            this.shopInfo=new Shop(result.shopInfo);
            //商品参数
            this.shopParams=new shopParams(result.itemParams.info,result.itemParams.rule)
            // console.log(this.shopParams);
            //商品评价
            this.commentInfo=result.rate.list?result.rate.list[0]:{};
            // console.log(this.commentInfo)
            //推荐
            this.detailInfo=result.detailInfo;
         })
         //根据类别加载商品数据
        getRecommends().then(res=>{
        // console.log(res)
        this.recommends=res.data.list;
        })

        //监听事件总线  自定义事件
        let listener=()=>{
            this.$refs.bscroll&&this.$refs.bscroll.refresh();
             //清空
            this.themeTops=[];
            //获取每个offsetTop
            this.themeTops.push(0);
            this.themeTops.push(-this.$refs.params.$el.offsetTop+44);
            this.themeTops.push(-this.$refs.comment.$el.offsetTop+44);
            this.themeTops.push(-this.$refs.recommends.$el.offsetTop+44);

             this.themeTops.push(-Number.MAX_VALUE);
            //   console.log(this.themeTops);
            console.log("图片加载完成")
        }
        this.listenerItemImgLoad=debounce(listener,300)
        this.$bus.$on("goodsItemImgLoad",this.listenerItemImgLoad); 
    },
    //移除监听
    destroyed(){
        this.$bus.$off("goodsItemImgLoad",this.listenerItemImgLoad)
    },
    computed: {
        currentfun(){
            return this.goods[this.current].list;
        }
    },
    methods:{
         ...mapActions({
            addCart:"addCartList"
        }),
        betscroll(position){
            //监听滚动事件
            this.isBackTopOk= position.y<=-1000;
            //获取组件到头部的距离
            let iPos=position.y;
            //循环themeTops 获取区间范围
            for(let i=0;i<this.themeTops.length;i++){
                //开始位置
                let star=this.themeTops[i];
                //结束位置
                let end=this.themeTops[i+1];
                //判断区间位置
                if(iPos<=star&&iPos>end){
                    this.detailIndexTheme=i;
                    break;
                }
            }
        },
        navClick(index){
            let pos=this.themeTops[index];
            //返回对应的导航栏
            this.$refs.bscroll&&this.$refs.bscroll.scrollTo(0,pos);
        },
        //加入购物车按钮
        addCartList(){
            //创建商品对象
            let product={
                iid:this.baseGoods.iid,
                title:this.baseGoods.title,
                realPrice:this.baseGoods.lowNowPrice,
                desc:this.baseGoods.desc,
                image:this.topImages[0]
            }
            //添加购物车
            // this.$store.dispatch('addCartList', product);
            this.addCart(product).then(res=>{
                this.message=res;
                this.$refs.toast.closedTime();
            })
        },
       
    }
}
</script>

<style scoped>
#detail{
    position: relative;
    height: 100vh;
    /* z-index: 9; */
}
.detail-swiper{
    height: 300px; 
    /* margin-top: 43px;  */
}
.detail-scroll{
    height: calc(100% - 102px);
    overflow: hidden;
}
</style>