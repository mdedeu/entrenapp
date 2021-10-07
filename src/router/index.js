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
import RutinasRecomendadas from "../views/RutinasRecomendadas"
import EjercicioDescripcion from "../views/EjercicioDescripcionPage"
import CrearEjercicio from "../views/CrearEjercicioPage"
import SeleccCateg from "../views/SeleccCategPage"
import NotFound from "../views/NotFound";
import SeleccionarEjercicioPopup from '../views/SeleccionarEjercicio'
import TusEjercicios from "../views/TusEjercicios"
import EjerciciosLanding from  "../views/EjerciciosLanding"

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
    path: '/EjerciciosLanding',
    name: 'EjerciciosLanding',
    component: EjerciciosLanding
  },
  {
    path: '/TusEjercicios',
    name: 'Tus Ejercicios',
    component: TusEjercicios
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
    path: '/CrearEjercicio',
    name: 'CrearEjercicio',
    component: CrearEjercicio
  },
  {
    path: '/EjercicioDescripcion',
    name: 'EjercicioDescripcion',
    component: EjercicioDescripcion
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
    name: 'Tus rutinas',
    component: TusRutinas
  },
  {
    path: '/RutinasRecomendadas',
    name: 'RutinasRecomendadas',
    component: RutinasRecomendadas
  },
  {
    path: '/SeleccCateg',
    name: 'SeleccCateg',
    component: SeleccCateg
  },
  {
    path: '/SeleccionarEjercicio',
    name: 'SeleccionarEjercicioPopup',
    component: SeleccionarEjercicioPopup
  },
  {
    path: '*',
    name: "NotFound",
    component: NotFound
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
