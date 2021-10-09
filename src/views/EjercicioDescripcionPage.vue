<template>
  <v-container fluid class="primary fill-height">
    <v-row>
      <v-col>
        <EjercicioDescripcion/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EjercicioDescripcion from '../components/EjercicioDescripcion'

export default {
  name: "EjercicioDescripcionPage",
  components:{
    EjercicioDescripcion
  }
}
</script>

<style scoped>

</style>