<template>
  <div class="recommends">
        <div class="recommends-item" v-for="(item,index) in recommends" :key="index">
            <a :href="item.link">
                <img :src="item.image" >
            </a>
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>

export default {
 props:{
       recommends:{
        type:Array,
        default(){
           return []
        }
       }
   }
}
</script>

<style scoped>
.recommends{
    display: flex;
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
    border-bottom: 10px solid #ebebeb;
}
.recommends-item{
    flex: 1;
}
.recommends-item img{
    width: 70px;
    height: 70px;
}
</style>