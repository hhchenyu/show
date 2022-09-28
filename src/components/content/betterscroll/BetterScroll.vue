<template>
<!--将scroll封装起来，以后需要用到滚动的就可以直接依赖这个封装 ,通过ref来拿取更加准确-->
  <div class="wrapper" ref="wrapper">
      <div>
<!--slot插槽就是为其他组件要直接依赖这个封装使用而留的位置-->
          <slot></slot>
      </div>
  </div>
</template>
 
<script>
import BScroll from 'better-scroll'
 
export default {
    name:'scroll',
    data(){
      return{
          scroll:null
      }
    },
    props: {
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
/*better-scroll 初始化的时候，必须在 mounted() 函数中。
vue的生命周期中，到了mounted阶段才有真实的DOM，我们才可以获取到 wrapper */

mounted(){
  this.initbscroll();
},
methods: {
  initbscroll(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      /*probeType表示监测，0、1表示不侦测实时位置，
      2表示手指滑动的过程中侦测、由于惯性滑动不侦测，
      3表示只要滑动就进行侦测
      */
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      click:true
    })
      //监听滚动位置
      if(this.probeType>=2){
         this.scroll.on('scroll',(ps) =>{
         this.$emit("betscroll",ps);
       })
      }
      
      if(this.pullUpLoad==true){
        //监听上拉
       this.scroll.on('pullingUp',() =>{
        //  this.scroll.finishPullUp();
        this.$emit("pullingUp");
       })
      } 
  },
  //加载更多
  finishPullUp(){
    this.scroll&&this.scroll.finishPullUp();
  },
  //返回顶部
  scrollTo(x,y,dalay=300){
    this.scroll&&this.scroll.scrollTo(x,y,dalay);
  },
  //刷新
  refresh(){
    this.scroll&&this.scroll.refresh();
  }
}
}
</script>
 
<style scoped>
 
</style>