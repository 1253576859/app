//路由配置信息
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Detail from '@/pages/Detail'
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from '@/pages/ShopCart'

export default [{
    path: "/home",
    component: Home,
    meta: {show: true}
}, {
    path: "/Search/:keyword?",
    component: Search,
    meta: {show: true},
    name: "search"
}, {
    path: "/register",
    component: Register,
    meta: {show: false}
}, {
    path: "/login",
    component: Login,
    meta: {show: false}
}, {
    path: "/detail/:skuid",
    component: Detail,
    meta: {show: true}
}, {
    //路由的路径一定是小写
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: AddCartSuccess,
    meta: {show: true}
}, {
    path: "/shopcart",
    component: ShopCart,
    meta: {show: true}
},
    //重定向
    {
        path: "*",
        redirect: "/home"
    }]