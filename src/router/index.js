import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RoutineSearcher from '../views/RoutineSearcher.vue'
import RoutineDescription from '../views/RoutineDescriptionPage.vue'
import RoutineLanding from '../views/RoutineLanding.vue'
import Login from "../views/Login";
// import store from "../store/index"
import TusRutinas from "../views/TusRutinas"
//import RutinasRecomendadas from "../views/RutinasRecomendadas"
import SeleccCateg from "../views/SeleccCategPage"
import EjerciciosLanding from  "../views/EjerciciosLanding"
import EjerciciosFavoritos from "../views/EjerciciosFavoritos";
import RoutineCreadorInfo from "../views/RoutineCreatorInfo"
import RoutineCreatorExercise from "../views/RoutineCreatorExercise"
import ModifyRoutineInfo from "../views/ModifyRoutineInfo"
import ModifyRoutineExercise from "../views/ModifyRoutineExercise"
import {Api} from "../../API/api";
import ApiFill from "../views/sampleview"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
   },
  {
    path: '/RoutineCreadorInfo',
    name: 'RoutineCreadorInfo',
    component: RoutineCreadorInfo,
    props: true
  },
  {
    path: '/ModifyRoutineExercise',
    name: 'ModifyRoutineExercise',
    component: ModifyRoutineExercise,
    props: true
  },
  {
    path: '/ModifyRoutineInfo',
    name: 'modifyRoutineInfo',
    component: ModifyRoutineInfo,
    props: true
  },
  {
    path: '/RoutineCreatorExercise',
    name: 'RoutineCreatorExercise',
    component: RoutineCreatorExercise,
    props: true
  },

  {
    path: '/myprofile',
    name: 'My Profile',
    component: () =>
        import(
            /* webpackChunkName: "my-profile" */ "../views/MyProfile.vue"
            ),
  },
  {
    path: '/EjerciciosFavoritos',
    name: 'EjerciciosFavoritos',
    component: EjerciciosFavoritos,
    props: true
  },
  {
    path: '/EjerciciosLanding',
    name: 'EjerciciosLanding',
    component: EjerciciosLanding,
    props: true
  },
  {
    path: '/TusEjercicios',
    name: 'Tus Ejercicios',
    component: () =>
        import(
            /* webpackChunkName: "tus-ejercicios" */ "../views/TusEjercicios.vue"
            ),
    props: true
  },
  {
    path: '/Verification',
    name: 'Verification',
    component: () =>
        import(
            /* webpackChunkName: "verification" */ "../views/Verification.vue"
            ),
  },
  {
    path: '/Routines',
    name: 'Routines',
    component: RoutineSearcher
  },
  {
    path: '/Register',
    name: 'Register',
    component: () =>
        import(
            /* webpackChunkName: "register" */ "../views/Register.vue"
            ),
  },
  {
    path: '/codeChecking',
    name: 'codeChecking',
    component: () =>
        import(
            /* webpackChunkName: "code-checking" */ "../views/CodeChecking.vue"
            ),
    props: true
  },
  {
    path: '/apifill',
    name: 'ApiFill',
    component: ApiFill,
  },

  {
    path: '/RoutineDescription',
    name: 'RoutineDescription',
    component: RoutineDescription,
    props: true
  },
  {
    path: '/EjercicioDescripcion',
    name: 'EjercicioDescripcion',
    component: () =>
        import(
            /* webpackChunkName: "ejercicio-descripcion-page" */ "../views/EjercicioDescripcionPage.vue"
            ),
    props:true
  },
  {
    path: '/RoutineLanding',
    name: 'RoutineLanding',
    component: RoutineLanding,
    props:true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/TusRutinas',
    name: 'Tus rutinas',
    component: TusRutinas
  },

  {
    path: '/SeleccCateg',
    name: 'SeleccCateg',
    component: SeleccCateg
  },
  {
    path: '/Rutinas/:slug',
    name: 'Rutinas',
    component: () =>
        import(
            /* webpackChunkName: "rutinas-favoritas" */ "../views/RutinasFavoritas.vue"
            ),
    props: true
  },
  {
    path: '*',
    name: "NotFound",
    component: () =>
        import(
            /* webpackChunkName: "not-found" */ "../views/NotFound.vue"
            ),
  }
]

const router = new VueRouter({
  mode : "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
      return { x: 0, y: 0 }
  }
})

// eslint-disable-next-line no-unused-vars
router.beforeEach((to,from,next) =>{
  let noAuthRoutes = ['Home','Login','Register','Verificacion','codeChecking']
  if(noAuthRoutes.includes(to.name)){
    next()
    return;
  } else {
      if (Api.token === null) {
        next({name: 'Login'})
      return;
    }
    next()
    return;
  }
});
export default router
