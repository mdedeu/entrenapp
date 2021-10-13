import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyProfile from '../views/MyProfile.vue'
import RoutineSearcher from '../views/RoutineSearcher.vue'
import RoutineDescription from '../views/RoutineDescriptionPage.vue'
import RoutineLanding from '../views/RoutineLanding.vue'
import Login from "../views/Login";
// import store from "../store/index"
import Register from "../views/Register";
import TusRutinas from "../views/TusRutinas"
//import RutinasRecomendadas from "../views/RutinasRecomendadas"
import EjercicioDescripcion from "../views/EjercicioDescripcionPage"
import SeleccCateg from "../views/SeleccCategPage"
import NotFound from "../views/NotFound";
import TusEjercicios from "../views/TusEjercicios"
import EjerciciosLanding from  "../views/EjerciciosLanding"
import RutinasFavoritas from "../views/RutinasFavoritas";
import EjerciciosRecomendados from "../views/EjerciciosRecomendados";
import EjerciciosFavoritos from "../views/EjerciciosFavoritos";
import codeChecking from "../views/CodeChecking"
import Verification from "../views/Verification"
import RoutineCreadorInfo from "../views/RoutineCreatorInfo"
import RoutineCreatorExercise from "../views/RoutineCreatorExercise"
import ModifyRoutineInfo from "../views/ModifyRoutineInfo"
import ModifyRoutineExercise from "../views/ModifyRoutineExercise"
import {mapGetters} from 'vuex'


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
    component: MyProfile
  },
  {
    path: '/EjerciciosRecomendados',
    name: 'EjerciciosRecomendados',
    component: EjerciciosRecomendados,
    props: true
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
    component: TusEjercicios,
    props: true
  },
  {
    path: '/Verification',
    name: 'Verification',
    component: Verification
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
    path: '/codeChecking',
    name: 'codeChecking',
    component: codeChecking,
    props: true
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
    component: EjercicioDescripcion,
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
    component: RutinasFavoritas,
    props: true
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
  routes,
  scrollBehavior () {
      return { x: 0, y: 0 }
  }
})

// eslint-disable-next-line no-unused-vars
router.beforeEach((to,from,next) =>{
  let noAuthRoutes = ['Home','Login','Register','Verificacion','codeChecking']
  if(!noAuthRoutes.includes(to.name)){
    if (!mapGetters('security',['isLoggedIn'])) {
      next({name: 'Login'})
      return;
    } else {
      next()
      return;
    }
  }
  next()


});
export default router
