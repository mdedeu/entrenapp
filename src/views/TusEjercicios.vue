<template>
  <v-container fluid class="primary fill-height">
    <v-row> <HeaderApp></HeaderApp> </v-row>
    <v-row class="pt-10">
      <Back/>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <h1 class="accent--text text-h3">Tus ejercicios</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
        <v-col cols="3">
          <CrearEjercicioButton v-on:load-exercise="loadExercise"></CrearEjercicioButton>
        </v-col>
    </v-row>
    <v-row style="height: 90vh">
      <v-col>
        <TusEj :slug="'no_favoritas'" ref="tusEj"></TusEj>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import HeaderApp from '../components/HeaderApp'
import Back from '../components/Back'
import TusEj from '../components/TusejerciciosComponent'
import CrearEjercicioButton from "../components/CrearEjercicioButton";

export default {
  name: "TusEjercicios",
  components:{
    CrearEjercicioButton,
    HeaderApp,
    Back,
    TusEj
  },
  props : ['title'],
  methods:{
    async loadExercise(){
      this.$refs.tusEj.loadExercises()
    }
  },
  data(){
    return {
      titleData: null
    }
  },
  created() {
    if(!this.title){
      this.title = ((JSON).parse(localStorage.getItem('vuex')))['propsData']['title']
    }
    else{
      this.titleData = this.title
      this.$store.dispatch('cache/setTitle',this.title)
    }
  }
}
</script>