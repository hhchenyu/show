const getters={
    cartLength(state){
        //返回添加到购物车商品数量
        return state.cartList.length;
    },
    cartList(state){
        return state.cartList;
    }
}
export default getters;