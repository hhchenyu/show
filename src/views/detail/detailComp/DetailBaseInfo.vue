<template>
  <div v-if="Object.keys(goods).length!==0" class="base-info">
    <div class="title-info">
      <span>{{goods.title}}</span>
    </div>
    <div class="price-info">
      <span class="n-price">{{goods.price}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="other-info">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span> 
    </div>
    <div class="serve-info">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon"/>
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        goods:{
            type:Object
        }
    }
};
</script>

<style scoped>
    .base-info {
        margin-top: 15px;
        /* 填充 */
        padding: 0px 8px;
        color: #999;
        /* 底部边框 */
        border-bottom: 5px solid #f2f5f8;
    }
    .title-info {
        color: black;
    }
    .price-info {
        margin-top: 10px;
    }
    .price-info .n-price {
        font-size: 24px;
        color: var(--color-high-text);
    }
    .price-info .o-price {
        font-size: 13px;
        /* 中划线 */
        text-decoration: line-through;
        margin-left: 8px;
    }
    .price-info .discount {
        font-size: 12px;
        background-color: var(--color-high-text);
        /* 相对定位 */
        position: relative;
        top: -6px;
        padding: 2px 5px;
        color: white;
        margin-left: 8px;
        /* 圆角 */
        border-radius:8px;
    }
    .other-info {
        font-size: 13px;
        margin-top: 15px;
        /* 弹性布局 */
        display: flex;
        /* 均匀排列每个元素  首个元素放置于起点，末尾元素放置于终点 */
        justify-content: space-between;
        border-bottom: 1px solid rgba(100, 100, 100, 0.1);
        padding-bottom:10px;
    }
    .serve-info {
        line-height: 60px;
        display: flex;
        justify-content: space-between;
    }
    .serve-info img {
        width: 14px;
        height: 14px;
        position: relative;
        top: 3px;
    }
    .serve-info span {
        font-size: 14px;
        color: #333;
    }
</style>