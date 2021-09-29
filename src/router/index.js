import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { requiresAuth: false},
    component: Home
   },
  {
    path: '/login',
    name: 'Login',
    meta: { requiresAuth: false},
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
  if(to.meta.requiresAuth){
    if(!store.user){
      next({name: 'Login'});
    }
    else{
      next();
    }
    //login
  }
  else{
    next()
  }
});
export default router
