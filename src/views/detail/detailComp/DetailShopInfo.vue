<template>
  <div class="shop-info" >
      <div class="info-top">
          <img :src="shop.shopLogo">
          <span class="title">{{shop.name}}</span>
      </div>
      <div class="info-middle">
          <div class="middle-left">
            <div class="sell-info">
                <div class="sell-number">{{shop.cSells|sellsFormat}}</div>
                <div class="sell-name">总销量</div>
            </div>
            <div class="goods-info">
               <div class="goods-number">{{shop.cGoods}}</div>
               <div class="goods-name">全部宝贝</div>
            </div>
          </div>
          <div class="middle-right">
              <table>
                 <tr v-for="(item,index) in shop.score" :key="index">
                     <td>{{item.name}}</td>
                     <td :class="['score',item.isBetter?'score-better':'']">{{item.score}}</td>
                     <td>
                         <span :class="['isBetter',item.isBetter?'is-Better':'']">{{item.isBetter?"高":"低"}}</span>
                     </td>
                 </tr>
              </table>
          </div>
      </div>
      <div class="info-bottom">
          <div class="end-bottom">进店逛逛</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        shop:{
            type:Object
        }
    },
    //过滤器 数字转换
    filters: {
        sellsFormat(v){
            if(v<10000){
                return v;
            }   
            else{
                let m=v/10000;
                return m.toFixed(1)+"万";
            }   
        }
    }
}
</script>

<style scoped>

    .shop-info{
        padding:25px 8px;
        border-bottom:5px solid #f2f5f8;
    }
    .title{
        margin-left: 6px;
    }
    .info-top{
        line-height:45px;			
        display:flex;			
        align-items:center;			
    }
    .info-top img{
        height:45px;  
        width:45px;  
        border-radius:50%;							
        border:1px solid  rgba(0, 0, 0, 0.1);
    }
    .info-middle{
        margin-top:15px;		
        display:flex;			
        align-items:center;	   		
    }
    .info-middle>div{
        flex: 1;
    }
    .middle-left{
        display:flex;
        justify-content: space-evenly;
        color: #333;
        text-align: center;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
    }
    .sell-number .goods-number{
        font-size: 18px;
    }
    .sell-name  .goods-name{
        font-size: 12px;
        margin-top: 10px;
    }
    .middle-right{
        width: 120px;
        margin-left: 10px;
    }
    .middle-right table{
        width: 120px;
        margin-left: 10px;
    }
    .middle-right table td{
        padding: 5px 0px;
    }
    .info-bottom{
        text-align: center;
        margin-top: 10px;
    }
    .end-bottom{
        display: inline-block;
        width: 150px;
        height: 30px;
        line-height:30px;
        font-size: 14px;
        background-color: #f2f5f8; 
        text-align: center;
        border-radius:10px;       
    }
    .score{
        color:  #5ea732;
    }
    .score-better{
        color: #f13e3a;
    }
    .isBetter{
        background-color:  #5ea732;
        color: white;
    }
    .is-Better{
        background-color: #f13e3a;
    }

</style>