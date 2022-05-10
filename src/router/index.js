//配置路有的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter)

import routes from '@/router/routes'

//先把push方法保存一份备份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push|replace
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => {
        }, () => {
        })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        orinigReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {
        }, () => {
        })
    }
}
//配置路由
export default new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return y：0 代表滚动到最上方
        return {y: 0}
    }
})
