<template>
  <div class="toast" v-show="isOK">
      {{message}}
  </div>
</template>

<script>
export default {
    data () {
        return {
            isOK:false
        }
    },
    props:{
        message:{
            type:String
        },
        waitTime:{
            type:Number,
            default:1000
        }  
    },
    methods: {
        closedTime(){
            this.isOK=true
              setTimeout(() => {
                this.isOK=false;
            }, this.waitTime);
        }
    }

}
</script>

<style scoped>
    .toast{
        position: fixed;
        left: 50%;
        top:50%;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        transform: translate(-50%,-50%);
        padding: 8px 10px;
        border-radius: 5px;
    }
</style>