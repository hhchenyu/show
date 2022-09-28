<template>
  <div class="ison-selector" :class="{'selector-active':ischecked}" @click="checkedClick">
      <img src="~assets/img/shopcart/tick.svg">
  </div>
</template>

<script>
export default {
    props:{
        ischecked:{
            type:Boolean,
            default:true
        }
    },
    methods: {
        checkedClick(){
            this.$emit("checkedClick");
        }
    }

}
</script>

<style scoped>
    .ison-selector{
        position: relative;
        margin: 0;
        width: 18px;
        line-height: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid #ccc;
        cursor: pointer;
    }
    .selector-active{
        background-color: #ff8198;
        border-color: #ff8198;
    }
</style>