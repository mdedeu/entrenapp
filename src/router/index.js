import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TusRutinas from "../views/TusRutinas";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
   },
  {
    path: '/TusRutinas',
    name: 'TusRutinas',
    component: TusRutinas
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
