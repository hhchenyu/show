<template>
  <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" @load="imgLoad">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
   props:{
       banners:{
        type:Array,
        default(){
           return []
        }
       }
   },
 components: {
        Swiper, 
        SwiperItem
    },
    methods: {
        //自定义事件
        imgLoad(){
            this.$emit("swiperImgLoad");
        }
    }
}
</script>

<style>

</style>