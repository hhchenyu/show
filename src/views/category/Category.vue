<template>
	<div class="category">
	 <!-- 导航 -->
		<nav-bar class="category-nav">
			<span slot="center">商品分类</span>
		</nav-bar>
		<div class="category-center">
			<tab-menu :category="categories" @categoryItemClick="categoryItemClick"></tab-menu>
			 
			<better-scroll ref="bscroll" class="center-right">
			<tab-child-category :childCategory="childCategory"></tab-child-category>
			
			<!-- 标题导航栏 -->
			<tab-control 
			@tabcurrent="getGoodsList" ref="control"
			:titles="['流行','新款','销量']"></tab-control>
			
			<!-- 页面商品展示 -->
			<goods-list 
			:goodslist="currentfun"></goods-list>
			</better-scroll>
		</div>
			
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabMenu from './categoryComp/TabMenu.vue'
import TabChildCategory from './categoryComp/TabChildCategory.vue'
import BetterScroll from 'components/content/betterscroll/BetterScroll'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'

import {getCategory,getSubCategory,getTypeCategory} from 'network/category.js'
export default {
	components: {
		NavBar,
		TabMenu,
		TabChildCategory,
		BetterScroll,
		TabControl,
		GoodsList
	},
	data () {
		return {
			//商品类别 一级类别
			categories:[],
			//二级类别
			childCategory:[],
			//
			current:'pop',
			//小导航
            goods:{
                pop:[],
                new:[],
                sell:[],
            },
		}
	},
	updated () {
		this.$refs.bscroll&&this.$refs.bscroll.refresh();
	},
	created () {
		//请求商品类别数据
		getCategory().then(res=>{
			this.categories = res.data.category.list;
			this.categoryItemClick(0);
		})
	},
	computed: {
        currentfun(){
            return this.goods[this.current];
        }
    },
	methods: {
		categoryItemClick(index){
			//获取菜单maitKey
			let key=this.categories[index].maitKey;
			//通过maitWallkey值找对应数据
			let miniWallkey=this.categories[index].miniWallkey;
			getSubCategory(key).then(res=>{
				this.childCategory=res.data.list;
			})
			//查询所有商品类别（）
			this.getTypeCategory(miniWallkey,"pop");
			this.getTypeCategory(miniWallkey,"new");
			this.getTypeCategory(miniWallkey,"sell");
		},
		getTypeCategory(miniWallkey,type){
			//查询所有商品类别（）
			getTypeCategory(miniWallkey,type).then(res=>{
				console.log(res)
				//数据保存 修改
				this.goods[type]=res;	
			})
		},
		getGoodsList(index){
			switch(index) {
                case 0:
                    this.current='pop';
                    break;
                case 1:
                    this.current='new';
                    break;
                case 2:
                    this.current='sell';
                    break;
                default:
					this.current='pop';
                    break;
            }
			this.$refs.control.currentindex=index;
		}
	},
}
</script>

<style scoped>
	.category{
		height: 100vh;
		/* position: relative; */
	}
	.category-nav{
		z-index: 999;
		/* 背景颜色 */
		background-color: var(--color-tint);
		/* 字体颜色 */
		color: white; 
		/* 字体粗细 */
		font-weight: 700;
	}
	.category-center{
		/* 绝对定位：左右0 顶部44 底部49 弹性布局 */	
		position:absolute;
		left: 0px;
		right: 0px;
		bottom: 49px;
		display: flex;
		top: 49px;
	} 
	.center-right{
		/* 高度：100% flex:1 	 */
		height: 100%;
		flex: 1;
		overflow: hidden;
	}
</style>