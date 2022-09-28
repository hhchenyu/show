<template>
  <div class="shopcart">
    <!-- 导航 -->
    <nav-bar class="shopcart-nav">
        <span slot="center">购物车({{cartLength}})</span>
    </nav-bar>

    <!-- 滚动效果 -->
     <better-scroll  
      ref="bscroll" 
      class="detail-scroll">

    <!-- 购物车列表 -->
    <shop-cart-list :productList="cartList"/>

    </better-scroll>

    <!-- 计算商品价格 -->
    <shop-button-bar/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import NavBar from 'components/common/navbar/NavBar.vue'
import ShopCartList from './shopComp/ShopCartList.vue'
import ShopButtonBar from './shopComp/ShopButtonBar.vue'
import BetterScroll from 'components/content/betterscroll/BetterScroll'

export default {
  data(){
        return{
        }
    },
   components: {
        NavBar,
        ShopCartList,
        ShopButtonBar,
        BetterScroll
    },
    //解构
    computed: {
      ...mapGetters(["cartLength","cartList"])
    },
    mounted () {
        this.$refs.bscroll&&this.$refs.bscroll.refresh();  
    },
}
</script>

<style scoped>
  .shopcart{
      position: relative;
      height: 100vh;
  }
  .shopcart-nav{
     /* 背景颜色 */
     background-color: var(--color-tint);
     /* 字体颜色 */
     color: white; 
     /* 字体粗细 */
     font-weight: 700;
  }
  .detail-scroll{
    height: calc(100% - 137px);
    overflow: hidden;
  }
</style>