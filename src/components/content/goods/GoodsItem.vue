<template>
<!-- 点击事件 传递参数-->
  <div class="goods-item" @click="detailItem(goodsinfo.iid)">
      <!-- 获取图片 load事件 -->
      <img v-lazy="showImg" @load="imgLoad">
      <div class="goods-info">
          <p>{{goodsinfo.title}}</p>
          <span class="price">{{goodsinfo.price}}</span>
          <span class="collect">{{goodsinfo.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        goodsinfo:{
            type:Object
        }
    },
    methods: {
        imgLoad(){
            //图片加载完  触发事件总线自定义事件 
            this.$bus.$emit("goodsItemImgLoad");
        },
        detailItem(iid){
            //路由传递参数
            this.$router.push({
                path:"/detail",
                query:{
                    iid
                    }
                })
        }
    },
    computed: {
        showImg(){
            return  this.goodsinfo.img||this.goodsinfo.image||this.goodsinfo.show.img
        }
    }
}
</script>

<style scoped>
    .goods-item{
        position: relative;
        padding-bottom: 40px;
    }
    .goods-item img{
        width:100%;
        border-radius: 5px;
    }
    .goods-info{
        font-size: 14px;
        position: absolute;
        bottom: 6px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }
    .goods-info p{
        /* 超过宽度自动裁剪 */
        overflow: hidden;
        /* 多余部分使用省略号 */
        text-overflow: ellipsis;
        /* 文字不换行 */
        white-space: nowrap;
        margin-bottom: 3px;
    }
    .goods-info .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }
    .goods-info .collect {
        position: relative;
    }
    /* 票数标签的第一个伪子元素 */
    .goods-info .collect::before {
        content: '';
        position: absolute;
        left: -14px;
        /* top: -1px; */
        width: 14px;
        height: 14px;
        /* 0 0/14px 表示   background-position/background-size的形式 */
        background: url("~assets/img/common/collect.svg") 0 0/14px;
    }
</style>