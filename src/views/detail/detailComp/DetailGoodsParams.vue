<template>
  <div class="params-info" v-if="Object.keys(goodsParams).length!==0">
      <table>
          <tr v-for="(itemParams,indexParams) in goodsParams.ruleTables[0]" :key="indexParams">
              <td v-for="(item,index) in itemParams" :key="index">{{item}}</td>
          </tr>
      </table>
      <table>
          <tr v-for="(item,index) in goodsParams.infoSet" :key="index">
              <td class="item-key">{{item.key}}</td>
              <td class="item-value">{{item.value}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    props:{
        goodsParams:{
            type:Object
        }
    }

}
</script>

<style scoped>
    .params-info{
        padding: 20px 15px;		
        font-size: 14px;		
        border-bottom: 5px solid #f2f5f8;		
    }
     .params-info table{
        width: 100%;
        /* 行高 */
        line-height:42px;
        /* 边框重叠 */
        border-collapse: collapse;
     }
    .params-info table td{
        border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    }
    .item-key{
        width: 95px;
    }
    .item-value{
         color: #eb4868;
    }
</style>