<template>
<v-container fluid class="primary fill-height">
  <v-row>
    <v-col cols = 12><HeaderApp></HeaderApp></v-col>
  </v-row>

  <v-row class="pt-16">
    <carrousel :Section="{title:'Tus ejercicios',path:'/TusEjercicios'}"></carrousel>
  </v-row>

  <v-row class="pt-16" >
    <carrousel :Section="{title:'Ejercicios favoritos',path:'/EjerciciosFavoritos'}"></carrousel>
  </v-row>

  <v-row class="pt-16">
    <carrousel :Section="{title:'Ejercicios recomendados',path:'/EjerciciosRecomendados'}" ></carrousel>
  </v-row>
</v-container>


</template>

<script>
import HeaderApp from '../components/HeaderApp'
import Carrousel from "../components/carrousel";


export default {
  name: "EjerciciosLanding",
  components:{
    Carrousel,
    HeaderApp
  }
}
</script>
