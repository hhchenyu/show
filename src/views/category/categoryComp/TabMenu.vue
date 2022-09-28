<template>
    <better-scroll ref="bscroll" class="tab-menu">
            <div v-for="(item,index) in category" :key="index"
                class="menu-list-item" :class="{'active':curIndex==index}"
                @click="itemClick(index)">
                {{item.title}}
            </div>
    </better-scroll>
</template>

<script>
import BetterScroll from 'components/content/betterscroll/BetterScroll'

export default {
    data(){
        return{
            curIndex:0
        }
    },
    props:{
        category:{
            type:Array
        }
    },
    components: {
        BetterScroll
        
    },
    updated () {
        this.$refs.bscroll&&this.$refs.bscroll.refresh();  
    },
    methods: {
        itemClick(index){
            this.curIndex=index;
            this.$emit("categoryItemClick",index);
        }
    }

}
</script>

<style scoped>
    .tab-menu{
        /* 背景色 宽度 高度	盒子尺寸*/
        background-color: #f6f6f6;
        width: 100px;
        height: 100%;
        box-sizing: border-box;  
        overflow: hidden;
    }
    .menu-list-item{
        /* 行高 高度 字体 水平居中*/
        line-height: 45px;
        height: 45px;
        font-size: 14px;
        text-align: center;
    }
    .active{
        /* 背景色 字体加粗 字体颜色 左边框	*/
        background-color: #fff;
        font-weight: 700;
        color: var(--color-high-text);
        margin-left: 3px solid var(--color-high-text);
    }


</style>