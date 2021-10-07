<template>
  <v-container fluid class="primary fill-height">

    <v-row>
      <v-col>
        <Back/>
      </v-col>
      <v-col>
        <close/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <EjercicioDescripcion/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import close from '../components/Close'
import EjercicioDescripcion from '../components/EjercicioDescripcion'
import Back from '../components/Back'

export default {
  name: "EjercicioDescripcionPage",
  components:{
    close,
    EjercicioDescripcion,
    Back
  }
}
</script>

<style scoped>

</style>