<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="tab-bar-img" src="~assets/img/tabbar/home.svg" />
      <img slot="tab-bar-newimg" src="~assets/img/tabbar/home_active.svg" />
      <span slot="tab-bar-text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="tab-bar-img" src="~assets/img/tabbar/category.svg" />
      <img
        slot="tab-bar-newimg"
        src="~assets/img/tabbar/category_active.svg"
      />
      <span slot="tab-bar-text">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img slot="tab-bar-img" src="~assets/img/tabbar/shopcart.svg" />
      <img
        slot="tab-bar-newimg"
        src="~assets/img/tabbar/shopcart_active.svg"
      />
      <span slot="tab-bar-text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="tab-bar-img" src="~assets/img/tabbar/profile.svg" />
      <img
        slot="tab-bar-newimg"
        src="~assets/img/tabbar/profile_active.svg"
      />
      <span slot="tab-bar-text">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
 components: {
    TabBarItem,
    TabBar
  }
}
</script>

<style>
</style>