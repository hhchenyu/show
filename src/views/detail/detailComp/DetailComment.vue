<template>
  <div class="comment-info" v-if="Object.keys(comment).length!==0">
      <div class="comment-header">
          <div>用户评价</div>
          <span>更多</span>
      </div>
      <div class="comment-user">
          <img :src="comment.user.avatar">
          <p>{{comment.user.uname}}</p>
      </div>
      <div class="comment-other">
          <div class="comment">{{comment.content}}</div>
          <div class="comment-date">
              <span>{{comment.created|dateFormatter}}</span>
              <span class="cstyle">{{comment.style}}</span>
          </div>
          <div class="comment-img">
              <img :src="item" v-for="(item,index) in comment.images" :key="index">
          </div>
      </div>
  </div>
</template>

<script>
import {transDate} from 'common/untils.js'
export default {
    props:{
        comment:{
            type:Object
        }
    },
    //时间转换
    filters: {
        dateFormatter(d){
            return transDate("YYYY-MM-DD hh:mm:ss",d);
        }
    }
}
</script>

<style scoped>
    .comment-info{
        /* 内间距 字体颜色 下边框*/
        padding:5px 12px;
        color: #333;
        border-bottom: 5px solid  #f2f5f8;
    }
    .comment-header{						
        height: 50px;
        line-height:50px;
        border-bottom:1px solid rgba(0,0,0,.1);   
    }
    .comment-header>div{						
        float: left;
        font-size: 15px;
    }
    .comment-header span{						
        float: right;
        font-size: 13px;  
        margin-right: 10px;
    }
    .comment-user{
        display: flex;
        line-height:45px;
        align-items:center;
    }
    .comment-user img{
        height:45px;  
        width:45px;  
        border-radius:50%;							
    }
    .comment-user p{					
        font-size: 15px;
        margin-left: 10px;
    }
    .comment-other{
        padding: 5px 0px 15px;
    }		
    .comment{
        font-size: 14px;
        color: #777;
        line-height:1.5;
    }
    .comment-date{
        font-size: 12px;
        color: #999;
        margin: 5px;
    }
    .comment-date .cstyle{
        margin-left: 10px;
    }
    .comment-img img{
        height:45px;  
        width:45px;
        margin-right: 5px;
    }
</style>