<template>
  <div class="goods-info" v-if="Object.keys(goodsInfo).length!==0">
      <div class="info-desc">
        <div class="star"></div>
        <div class="desc">{{goodsInfo.desc}}</div>
        <div class="end"></div>
      </div>
      <div class="info-key">{{goodsInfo.detailImage[0].key}}</div>
      <div class="info-list">
        <img v-for="(item,index) in goodsInfo.detailImage[0].list" :key="index"
        :src="item" @load="imgLoad"></div>
  </div>
</template>

<script>
export default {
  props:{
    goodsInfo:{
      type:Object
    }
  },
  methods: {
        imgLoad(){
            //图片加载完  触发事件总线自定义事件 
            this.$bus.$emit("goodsItemImgLoad");
        }
  }
}
</script>

<style scoped>
  .goods-info{
    /*   上下内间距20px 左右0px  下边框：5px solid #f2f5f8	*/									
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-desc{
    padding:0 15px;
    font-size: 14px;
  }
  .info-desc .desc{
    padding:10px;
    font-size: 14px;
  }
  .info-desc .star ,.info-desc .end{
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .info-desc .star{
    float: left;
  }
  .info-desc .end{
    float: right;
  }
  .info-desc .star::before ,.info-desc .end::after{
    /* 宽高5px 背景色：#333	底部对齐：bottom:0px	绝对定位*/
    content:"";
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0px;
    position:absolute;
  }
  .info-desc .end::after{
    right: 0;
  }
  .info-key{
    margin:10px 0px 10px 15px;				
    font-size:15px;				
    color:#333;				
  }
  .info-list img{
    width: 100%;
  }
</style>