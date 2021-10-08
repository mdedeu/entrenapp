<template>
  <div>
    <v-row>
      <HeaderApp/>
    </v-row>
    <v-row>
      <RutinasCreador class="pt-16"/>
    </v-row>
    <v-row>
      <CarrouselParaCreacion/>
    </v-row>
    <v-row class="primary ">
      <v-col>
        <v-btn rounded class="accent text--primary mt-10 mb-16">Guardá tu Rutina</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import RutinasCreador from '../components/RutinasCreador'
import HeaderApp from "../components/HeaderApp";
import CarrouselParaCreacion from '../components/CarrouselParaCreacion'


export default {
  name: "RoutineCreator",
  components:{
    HeaderApp,
    RutinasCreador,
    CarrouselParaCreacion
  },
}
</script>

<style scoped>

</style>