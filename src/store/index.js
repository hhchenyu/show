//导入
import Vue from 'vue';
import Vuex from 'vuex';


//注册
Vue.use(Vuex);

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const store=new Vuex.Store({
    //存放数据
    state,
    //计算
    getters,
    mutations,
    actions,
})

export default store;