<template>
  <nav-bar class="detailnav">
      <img slot="left" @click="detailImg"
      src="~assets/img/common/back.svg"/>
      <ul class="titles" slot="center">
          <li @click="detailTitles(index)" 
          :class="{active:index==detailIndex}"
          v-for="(item,index) in titles" :key="index">{{item}}</li>
      </ul>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
    props:{
        detailIndex:{
            type:Number,
            default:0
        }
    },
    components: {
        NavBar  
    },
    data () {
        return {
            titles:["商品","参数","评论","推荐"],           
        }
    },
    methods: {
        detailTitles(i){
            //this.detailIndex=i;
            this.$emit("navClick",i);  
        },
        //点击事件 返回上一层
        detailImg(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
    img{
        margin-top: 10px;
    }
    .titles {
        list-style:none;
        margin:0;
        padding:0;
       
    }
    .titles li{
        display:inline-block;
        font-size: 17px;
        text-align: center;
        width: 22%;
        
    }
    .active{
    color: var(--color-high-text);  
    }
    .detailnav{
    background-color: white;
    }
</style>