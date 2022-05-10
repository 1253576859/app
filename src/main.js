import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

import router from '@/router'
import store from './store'
import '@/mock/mockServe'

Vue.config.productionTip = false
//引入swiper样式
import "swiper/css/swiper.css"

new Vue({
    render: h => h(App),
    //全局事件总线$bus的配置
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
    router,
    store
}).$mount('#app')
