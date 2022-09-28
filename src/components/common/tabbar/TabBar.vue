<template>
<div class='tab-bar'>
<slot></slot>
</div>

</template>

<script>
// import tabBarItem from "components/common/tabbar/tabBarItem.vue";


export default {
  components: {
    // tabBarItem 
  },

};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.tab-bar {
  background-color: white;
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>