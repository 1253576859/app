import Vue from 'vue';
//引入大仓库vuex
import Vuex from 'vuex'

Vue.use(Vuex);
//引入home|search|detail模块的仓库
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'

//需要暴露Vuex.store类的实例，如果不暴露，外部不能使用
export default new Vuex.Store({
    //模块：把小仓库进行合并成大仓库
    modules: {
        home,
        search,
        detail,
        shopcart
    }
})
