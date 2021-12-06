import Vue from "vue"
import Vuex from "vuex"

import mutations from "./mutations.js"
import actions from "./actions.js"
import getters from "./getters.js"
//1.安装插件
Vue.use(Vuex)

const state = {
    //数组里面放很多商品
    cartList: []
}
//2。创建Store对象
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

//3.挂载Vue实例上
export default store