import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyProfile from '../views/MyProfile.vue'
import RoutineSearcher from '../views/RoutineSearcher.vue'
import RoutineDescription from '../views/RoutineDescriptionPage.vue'
import RoutineLanding from '../views/RoutineLanding.vue'

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
    path: '/RoutineDescription',
    name: 'RoutineDescription',
    component: RoutineDescription
  },
  {
    path: '/RoutineLanding',
    name: 'RoutineLanding',
    component: RoutineLanding
  }

]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
