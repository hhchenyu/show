<template>
  <div class="goods-list">
      <goods-item
      :goodsinfo="list"
      v-for="(list,index) in goodslist" :key="index" >
      </goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'

export default {
    props:{
        goodslist:{
            type:Array
        }
    },
    components: {
        GoodsItem
    },
    methods: {
      
    }
}
</script>

<style scoped>
    .goods-list{
        /* 弹性布局 */
        display: flex;
        /* 弹性布局中 一行不够 子元素自动换行 */
        flex-wrap:wrap;
        padding:5px;
        /* 弹性布局中 子元素均匀分配 两端距离为元素之间距离的一半 */
        justify-content: space-around;
    }
    .goods-list .goods-item{
        /* 每个元素的宽度 不要设置flex 要能自动换行 */
        width:48%;
    }
</style>