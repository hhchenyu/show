<template>
  <div class="shop-info">
      <checked-box @click.native="cheClick" 
      class="checked-button" :ischecked="isSelectedAll"/>
      <span>全选</span>
      <div class="shop-total">合计:￥{{totalPrice}}</div>
      <div class="shop-count">去计算({{selectedCount}})</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CheckedBox from './CheckedBox.vue'

export default {
    components: {
        CheckedBox
    },
    //解构
    computed: {
      ...mapGetters(["cartLength","cartList"]),
      //合计
      totalPrice(){
          //根据选中商品 计算合计值 保留两位数
          let totalMoney=this.cartList.filter(p=>p.checked).reduce((total,product)=>{
            return total+product.count*product.realPrice;
          },0).toFixed(2)
          return totalMoney;
      },
      //全选
      isSelectedAll(){
          //判断选中 找到一个没选中 返回undefined
          return this.cartList.find(p=>p.checked==false)==undefined;
      },
      //计数 支付商品
      selectedCount(){
          let totalMoney=this.cartList.filter(p=>p.checked).reduce((total,product)=>{
            return total+product.count;
          },0)
          return totalMoney;
      }
    },
    methods: {
        cheClick(){
            
        }
    }
}
</script>

<style scoped>
    .shop-info{
        /* 宽度 高度与行高	固定定位 背景色：#eee  阴影 字体颜色 字体大小*/
        width: 100%;
        height: 44px;
        line-height: 44px;
        bottom:49px;  
        left:0px ;
        right:0px;
        background-color: #eee;
        color: #888;
        font-size: 14px;
        display: flex;
        position:fixed;
        padding-left: 35px;
        /* 阴影 */
        box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    }
    .checked-button{
        position: absolute;
        left: 12px;
        top:13px;  
    }
    .shop-total{
        /* 颜色  字体 左侧外间距*/
        color: #666;
        font-size: 16px;
        margin-left: 15px;
    }
    .shop-count{
        /* 字体颜色 宽度  高和行高 文字居中 背景色*/
        color: #fff;
        width: 100px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        background-color:orangered;
        position: absolute;
        right: 0px;
    }
</style>