<template>
  <div>
      <grid-view :cols="3" :lineSpace="15" :v-margin="20">
      <div class="item" v-for="(item,index) in childCategory" :key="index">
          <a :href="item.link">
              <img class="item-img" :src="item.image" @load="imgLoad">
              <div class="item-title">{{item.title}}</div>
          </a>
      </div>
      </grid-view>
  </div>
</template>

<script>
import GridView from 'components/common/gridView/GridView.vue'
export default {
    props:{
        childCategory:{
            type:Array
        }
    },
    components: {
        GridView
    },
    methods: {
        //自定义事件
        imgLoad(){
            this.$emit("tabChildImgLoad");
        }
    }
}
</script>

<style scoped>
    .item{
        font-size: 12px;
        text-align: center;
    }
    .item-img{
        width: 80%;
    }
    .item-title{
        margin-top:15px;
    }
</style>