import * as types from './mutations_type'

const actions={
    addCartList(content,product){
        return new Promise((resolve,reject)=>{
            //判断是否存在商品
            let pro=content.state.cartList.find(p=>p.iid==product.iid);
            if(pro){
                //根据商品找到编号
                let index=content.state.cartList.indexOf(pro);
                content.commit(types.INCREASE_COUNT,index);
                resolve("添加到购物车");
            }
            else{
                product.count=1;
                product.checked=true;
                content.commit(types.ADD_NEW_PRODUCT,product);
                resolve("新增到购物车");
            }
        }) 
    }
}
export default actions;