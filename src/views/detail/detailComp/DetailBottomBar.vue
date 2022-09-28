<template>
  <div class="bottom-bar">
      <div class="bar-item bar-left">
              <div>
                  <i class="icon service"></i>
                  <span class="text">客服</span>
              </div>
              <div>
                  <i class="icon shop"></i>
                  <span class="text">店铺</span>
              </div>
              <div >
                  <i class="icon select"></i>
                  <span class="text">收藏</span>
              </div>
      </div>
      <div class="bar-item bar-right">
          <div class="right-shop" @click="addCartList">加入购物车</div>
          <div class="right-buy">购买</div>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        //加入购物车按钮传给父组件
        addCartList(){
            this.$emit("addCartList");
            
        }
    }

}
</script>

<style>
.bottom-bar{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;       
        background-color: white;
        height: 58px;
        text-align: center;
        z-index: 10;
    }
    .bar-item{
       display: flex;
       flex: 1; 
    }
    .bar-item>div{
        flex: 1;
    }
    .bar-left .text{
        font-size: 13px;
    }
    .bar-left .icon{
        display: block;
        width: 22px;
        height: 22px;
        margin: 10px auto 3px;
        background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
    }
    .bar-left .service{
        background-position: 0 -52px;
    }
    .bar-left .shop{
        background-position: 0 -99px;
    }
    .bar-right{
        font-size: 15px;
        color: white;
        line-height: 58px;
    }
    .bar-right .right-shop{
        background-color: yellow;
        color:#333 ;
    }
    .bar-right .right-buy{
        background-color: #f69;
    }
</style>