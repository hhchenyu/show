<template>
<div id='home' >
    <!-- 导航 -->
    <nav-bar class="home-nav">
        <span slot="center">购物商城</span>
    </nav-bar>

    <!-- 隐藏 -->
    <tab-control 
    ref="tab"
    class="tab-control" 
    @tabcurrent="tabcurrentindex" 
    v-show="isTabControl" 
    :titles="['流行','新款','精选']">
    </tab-control>
    
    <!-- 滚动区域 -->
    <better-scroll 
    :probeType="3" :pullUpLoad="true" @pullingUp="loadMose"
    @betscroll="betscroll" ref="bscroll"
    class="home-scroll">

    <!-- 轮播 -->
    <home-swiper class="home-swiper" :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>

    <!-- 推荐 -->
    <home-recommends :recommends="recommends"></home-recommends>

    <!-- 本周流行 -->
    <div class="feature">
        <img src="~assets/img/home/recommend_bg.jpg" >
    </div>

    <!-- 标题导航栏 -->
    <tab-control 
    ref="control"
    class="tab-control" 
    @tabcurrent="tabcurrentindex" 
     v-show="!isTabControl"
    :titles="['流行','新款','精选']"></tab-control>
    
    <!-- 页面商品展示 -->
    <goods-list 
    :goodslist="currentfun"></goods-list>
    </better-scroll>

    <!-- 返回小图标 -->
   <back-top v-show="isBackTopOk" @click.native="getBackTop"/>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComp/HomeSwiper.vue'
import HomeRecommends from './childComp/HomeRecommends.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import BetterScroll from 'components/content/betterscroll/BetterScroll'

import {getHome,getHomeGoods} from 'network/home.js'
import {backTopMixin} from 'common/mixin.js'
import {debounce} from 'common/untils.js'

export default {
    name: "Home",
    data(){
        return{
            //保存图片连接数据
            banners:[],
            recommends:[],
            //小导航
            goods:{
                pop:{list:[],page:1},
                new:{list:[],page:1},
                sell:{list:[],page:1},
            },
            current:"pop",
            isTabControl:false, //是否显示标题导航栏
            tabControlDis:0,  //保存头部距离值
            listenerImg:"",
        }
    },
    computed: {
        currentfun(){
            return this.goods[this.current].list;
        }
    },
    components: {
        NavBar,
        HomeSwiper,
        HomeRecommends,
        TabControl,
        GoodsList,
        BetterScroll,
    },
    mixins: [backTopMixin],
    created(){
        this.getHome();
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
    
    },
    //监听总线事件
    activated(){
        //监听事件总线  自定义事件
        let listener =()=>{
            this.$refs.bscroll&&this.$refs.bscroll.refresh();
            console.log("图片加载完成");
        }
        this.listenerImg=debounce(listener,300)
        this.$bus.$on("goodsItemImgLoad",this.listenerImg);
    },
    //移除监听
    deactivated(){
        this.$bus.$off("goodsItemImgLoad",this.listenerImg);
    },
    methods: {
        //图片加载完  触发自定义事件
        swiperImgLoad(){
            //获取距离值
            this.tabControlDis=this.$refs.control.$el.offsetTop;
        },
        //
        getHome(){
            getHome().then(res=>{
            //获取存放图片数据
            this.banners=res.data.banner.list;
            // console.log(this.banners);
            this.recommends=res.data.recommend.list;
        })
        },
        //根据类别加载商品数据
        getHomeGoods(type){
            //网络请求
            getHomeGoods(type,this.goods[type].page).then(res=>{
            // 添加新的请求数据
            this.goods[type].list.push(...res.data.list);
            //页码++
            this.goods[type].page++
            })
        },
        //类别
        tabcurrentindex(index){
            switch(index) {
                case 0:
                    this.current='pop';
                    break;
                case 1:
                    this.current='new';
                    break;
                case 2:
                    this.current='sell';
                    break;
                // default:
                //     break;
            }
            this.$refs.control.currentindex=index;
            this.$refs.tab.currentindex=index;
        },
        loadMose(){
            //当前选中的类别
            this.getHomeGoods(this.current);
            //上拉加载更多
            this.$refs.bscroll&&this.$refs.bscroll.finishPullUp();
        },
        betscroll(position){
            //监听滚动事件
            this.isBackTopOk= position.y<=-1000;

            //  console.log(position)
            if(this.tabControlDis-44<= -position.y){
                this.isTabControl=true;
            }else{
                this.isTabControl=false;
            }
        },
    }
}
</script>

<style scoped>
#home{
    position: relative;
    height: 100vh;
}
.home-nav{
    /* 背景颜色 */
     background-color: var(--color-tint);
     /* 字体颜色 */
     color: white; 
     /* position: fixed;
     left: 0px;
     right: 0px;
     top: 0px; */
     z-index: 9;
}
.feature img{
    width: 100%;
}
/* .home-swiper{
    margin-top: 43px;
} */
.tab-control{
    top:43px;
    position:sticky;
    z-index: 9;
}
/* .home-scroll{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
} */
.home-scroll{
    height: calc(100% - 93px);
    overflow: hidden;
}
</style>