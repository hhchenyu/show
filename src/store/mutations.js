import * as types from './mutations_type'

const mutations={
    [types.ADD_NEW_PRODUCT](state,product){
        state.cartList.push(product);  
    },
    [types.INCREASE_COUNT](state,index){
        state.cartList[index].count++;
    }
}
export default mutations;