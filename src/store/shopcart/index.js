import {reqCartList} from "@/api";
import {re} from "@babel/core/lib/vendor/import-meta-resolve";

const state = {}
const mutations = {}
const actions = {
    //获取购物车列表
    async gatCartList({commit}) {
        let result = await reqCartList();
        console.log(result)
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}


