//导入vue
import  Vue from 'vue';
//导入路由配置
import VueRouter from 'vue-router';
//导入组件 懒加载
const Home= ()=> import ('views/home/Home.vue');
const Category= ()=> import ('views/category/Category.vue');
const ShopCart= ()=> import ('views/shopcart/ShopCart.vue');
const Profile= ()=> import ('views/profile/Profile.vue');
const Detail= ()=> import ('views/detail/Detail.vue');

Vue.use(VueRouter);

const routes=[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/shopcart',
        component:ShopCart
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/detail',
        component:Detail
    }

];

const router=new VueRouter({
    //映射
    routes,
    //去掉#
    mode:'history',
});

//导出路由
export default router;