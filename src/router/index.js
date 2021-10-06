import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyProfile from '../views/MyProfile.vue'
import RoutineSearcher from '../views/RoutineSearcher.vue'
import RoutineDescription from '../views/RoutineDescriptionPage.vue'
import RoutineLanding from '../views/RoutineLanding.vue'
import Login from "../views/Login";
import store from "../store/index"
import Register from "../views/Register";
import RoutineCreator from "../views/RoutineCreator"
import TusRutinas from "../views/TusRutinas"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
   },
  {
    path: '/myprofile',
    name: 'My Profile',
    component: MyProfile
  },
  {
    path: '/Routines',
    name: 'Routines',
    component: RoutineSearcher
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/RoutineDescription',
    name: 'RoutineDescription',
    component: RoutineDescription
  },
  {
    path: '/RoutineLanding',
    name: 'RoutineLanding',
    component: RoutineLanding,
    props:true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/RoutineCreator',
    name: 'RoutineCreator',
    component: RoutineCreator
  },
  {
    path: '/TusRutinas',
    name: 'TusRutinas',
    component: TusRutinas
  },

  {
    path: '/app',
    name: 'App',
    meta: { requiresAuth: true},
    component: Home
  }
]

const router = new VueRouter({
  mode : "history",
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
