import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = () => import("@/views/home/Home")
const category = () => import("@/views/category/Category")
const cart = () => import("@/views/cart/Cart")
const user = () => import("@/views/user/User")


const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: home
  },
  {
    path: "/category",
    component: category
  },
  {
    path: "/cart",
    component: cart
  },
  {
    path: "/user",
    component: user
  },
]

export default new Router({
  routes,
  mode: "history"
})
