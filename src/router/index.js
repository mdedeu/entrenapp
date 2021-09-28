import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyProfile from '../views/MyProfile.vue'

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
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
