import {reqAddOrUpdataShopCart, reqGoodsInfo,} from "@/api";

const state = {
    goodInfo: {}
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const actions = {
    //获取产品信息的action
    async getGoodInfo({commit}, skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    },
    //将产品它添加到购物车中
    async addOrUpdataShopCart({commit}, {skuId, skuNum}) {
        //加入购物车返回的解构
        //加入购物车以后（发请求），前台将参数带给服务器
        //服务器写入数据成功，并没有返回其他的数据，值是返回code=200，代表这次操作成功
        //因为服务器没有返回其他的数据，因此不需要三连环存储数据
        let result = await reqAddOrUpdataShopCart(skuId, skuNum)
        //代表服务器加入购物车成功
        if (result.code == 200) {
            return "ok"
        } else {
            //代表加入购物车失败
            return Promise.reject(new Error("faile"))
        }
    }
}
const getters = {
    categoryView(state) {
        //state.goodInfo初始状态是空对象，空对象的categoryView属性值undefined
        //当前计算出来的 categoryView属性值至少是一个空对象，假的报错就不会有了
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}

