<template>
  <div class="tab-bar-item" @click="itemclick">
    <div>
      <slot name="tab-bar-img" v-if="!isok"></slot>
      <slot name="tab-bar-newimg" v-else></slot>
    </div>
    <div :style="isok?{color:textcolor}:{}">
      <slot name="tab-bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path:{
      type:String,
      required:true
    },
    textcolor:{
        type:String,
        default:'red'
    }
  },
  computed:{
        isok(){
            return this.$route.path.indexOf(this.path)>=0
        }
    },
  methods: {
    itemclick(){
      this.$router.replace(this.path)
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  font-size: 14px;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 24;
  height: 24px;
  margin-bottom: 2px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>