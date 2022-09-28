<template>
   <div class="product-info" v-if="Object.keys(product).length!==0">
      <div class="item-info">
        <checked-box @checkedClick="checkedClick" :ischecked="product.checked"/>
      </div>

      <div class="item-img">
        <img :src="product.image">
      </div>

      <div class="item-bottom">
          <div class="bottom-title">{{product.title}}</div>
          <div class="bottom-desc">{{product.desc}}</div>
          <div class="bottom-info">
              <div class="price left">￥{{product.realPrice}}</div>
              <div class="number right">x{{product.count}}</div>
          </div>
      </div>

   </div>
</template>

<script>
import CheckedBox from './CheckedBox.vue'
export default {
  props:{
    product:{
      type:Object
    },
  },
  components: {
    CheckedBox
  },
  methods: {
    checkedClick(){
      this.product.checked=!this.product.checked;
    },
  }

}
</script>

<style scoped>
  .product-info{
    padding: 5px;	
    display: flex;
    width: 100%;
    border-bottom: 1px solid #ccc;
  }
  .item-info{
    /* 弹性布局			垂直方向中轴线对齐			水平方向居中*/
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
  }
  .item-img{
    padding:5px;
  }
  .item-img img{
    /* 宽80px   高100px   圆角5px */
    width: 80px;
    height: 100px;
    border-radius:5px;
  }
 .item-bottom{
   font-size: 17px;
   color: #333;
   padding: 5px 10px;
   overflow: hidden;
   position:relative;
 }
 .bottom-desc{
   font-size: 14px;
   color: #666;
   margin-top: 15px;
 }
 .bottom-title ,.bottom-desc{
   /*	裁剪 不换行 省略号结束	*/
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
 }
 /* 绝对定位			
左右 底部距离都是10			
 */
 .bottom-info{
   left: 10px;
   right: 10px;
   bottom: 10px;
   position:absolute;
 }
  .bottom-info .price{
    color: orangered;
  }
  .bottom-info .number{
    text-align: right;
  }
</style>