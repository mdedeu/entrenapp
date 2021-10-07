<template>
<v-container fluid class="primary fill-height">
  <v-row>
    <v-col cols = 12><HeaderApp></HeaderApp></v-col>
  </v-row>

  <v-row class="pt-16">
    <CarrouselParaEjercicios :Section="{title:'Tus ejercicios',nameComponent:'Tus Ejercicios'}"></CarrouselParaEjercicios>
  </v-row>

  <v-row class="pt-16" >
    <CarrouselParaEjercicios :Section="{title:'Tus rutinas',nameComponent:'Tus rutinas'}"></CarrouselParaEjercicios>
  </v-row>

  <v-row class="pt-16">
    <CarrouselParaEjercicios :Section="{title:'Rutinas recomendadas',nameComponent:'RutinasRecomendadas'}" ></CarrouselParaEjercicios>
  </v-row>


</v-container>


</template>

<script>
import HeaderApp from '../components/HeaderApp'
import CarrouselParaEjercicios from '../components/CarrouselParaEjercicios'


export default {
  name: "EjerciciosLanding",
  components:{
    HeaderApp,
    CarrouselParaEjercicios
  }
}
</script>
