<template>
<v-container fluid class="primary fill-height">
  <v-row>
    <v-col cols = 12><HeaderApp></HeaderApp></v-col>
  </v-row>

  <v-row class="pt-16">
    <carrousel :Section="{title:'Tus ejercicios',nameComponent:'Tus Ejercicios'}"></carrousel>
  </v-row>

  <v-row class="pt-16" >
    <carrousel :Section="{title:'Ejercicios Favoritos',nameComponent:'EjerciciosFavoritos'}"></carrousel>
  </v-row>

  <v-row class="pt-16">
    <carrousel :Section="{title:'Ejercicios Recomendados',nameComponent:'EjerciciosRecomendados'}" ></carrousel>
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
