import requests from "@/api/request";
import mockRequests from "@/api/mockAjax";

export const reqCategoryList = () => {
    return requests({url: '/api/product/getBaseCategoryList', method: 'get'})
}

export const reqGetBannerList = () => {
    return mockRequests.get('/banner')
}
export const reqFloorList = () => mockRequests.get('/floor')
//获取请求的地址：/api/list 请求方式：post 参数：需要携带参数
//当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params) => {
    return requests({
        url: '/api/list',
        method: 'post',
        data: params
    })
}
//获取产品详情信息的接口  /api/item/{ skuId }  请求方式：get
export const reqGoodsInfo = (skuId) => requests({url: `/api/item/${skuId}`, method: 'GET'})
//将产品添加到购物车中（获取更新某一个产品的个数）
//  url:/api/cart/addToCart/{ skuId }/{ skuNum }   method:post{
export const reqAddOrUpdataShopCart = (skuId, skuNum) => requests({
    url: `/api/cart/addToCart/${skuId}/${skuNum}`, method: 'post'
})
//获取购物车列表的接口  URL：/api/cart/cartList   method：get
export const reqCartList = () => requests({url: "/api/cart/cartList", method: 'get'})

