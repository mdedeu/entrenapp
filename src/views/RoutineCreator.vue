<template>
  <div>
    <v-row>
      <HeaderApp/>
    </v-row>
    <v-row>
      <Back/>
    </v-row>
    <v-row>
      <RutinasCreador class="pt-16"/>
    </v-row>
    <v-row>
      <CarrouselParaCreacion/>
    </v-row>
  </div>
</template>

<script>
import RutinasCreador from '../components/RutinasCreador'
import HeaderApp from "../components/HeaderApp";
import Back from '../components/Back'
import CarrouselParaCreacion from '../components/CarrouselParaCreacion'


export default {
  name: "RoutineCreator",
  components:{
    HeaderApp,
    RutinasCreador,
    Back,
    CarrouselParaCreacion
  },
}
</script>

<style scoped>

</style>