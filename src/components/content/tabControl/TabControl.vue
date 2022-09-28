<template>
  <div class="tab-control">
    <div @click="activeclick(index)" class="tab-control-item" 
    v-for="(titles,index) in titles" :key="index" :class="{active:index==currentindex}">
      <span>{{titles}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
        titles:{
          type:Array,
          default(){
            return []
          }
        }
    },
   data () {
     return {
       currentindex:0
     }
   },
   methods: {
     activeclick(i){
       this.currentindex=i;
       //传序号
       this.$emit("tabcurrent", i);
     }
   }

}
</script>

<style>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  background-color: white;
}
.tab-control-item{
  flex: 1;
}
.active{
  color: var(--color-high-text);  
}
.active span{
  padding:5px;
  border-bottom: 3px solid var(--color-tint);
}
</style>