<template>
<div>
      <shop-cart-item :product="item"
      v-for="(item,index) in productList" :key="index"/>
</div>
</template>

<script>
import ShopCartItem from './ShopCartItem.vue'
export default {
    components: {
        ShopCartItem
    },
    props:{
        productList:{
            type:Array
        }
    },

}
</script>

<style>

</style>