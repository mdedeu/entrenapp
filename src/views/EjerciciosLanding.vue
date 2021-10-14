<template>
  <v-container fluid class="primary fill-height">
   <Loading v-if="loading"></Loading>
    <v-container v-else fluid class="primary fill-height" >
      <v-row>
        <v-col cols = 12><HeaderApp></HeaderApp></v-col>
      </v-row>

      <v-row>
        <ExerciseCarrousel class="mt-n6" :Section="{title:'Tus ejercicios',path:'/TusEjercicios'}" :exercises="mine"></ExerciseCarrousel>
      </v-row>

      <v-row class="pt-16" >
        <ExerciseCarrousel :Section="{title:'Ejercicios favoritos',path:'/EjerciciosFavoritos'}" :exercises="favourites"></ExerciseCarrousel>
      </v-row>
    </v-container>
  </v-container>



</template>

<script>
import HeaderApp from '../components/HeaderApp'
import {mapGetters} from "vuex";
import ExerciseCarrousel from "../components/ExerciseCarrousel";
import Loading from "../components/Loading";


export default {
  name: "EjerciciosLanding",
  components:{
    Loading,
    ExerciseCarrousel,
    HeaderApp
  },
  data(){
    return{
      loading : false,
    }
  },
  computed:{

    ...mapGetters('security',{
      user: 'getUser',
    }),
    ...mapGetters('exercise',['getMine']),
    ...mapGetters('exercise',['getOther']),
    ...mapGetters('exercise',['getFavourites']),

    mine(){
      return this.getMine
    },
    other(){
      return this.getOther
    },
    favourites(){
      return this.getFavourites
    }

  } ,

  async created() {
    this.loading = true;
    await this.$store.dispatch("exercise/getAll")
    this.loading = false;
  }
}
</script>
