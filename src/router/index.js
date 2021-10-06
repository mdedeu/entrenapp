import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import store from "../store/store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
   },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/app',
    name: 'App',
    meta: { requiresAuth: true},
    component: Home
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) =>{
    if (to.matched.some(route => route.meta.requiresAuth)) {
      if (!store.user) {
        next({ name: "Login", query: { redirect: to.fullPath } });
      } else {
        next();
      }
    } else {
      next();
    }
});
export default router
