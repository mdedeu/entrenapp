<template>
  <v-container  class="primary" width="200px">
    <v-row>
      <h3 class="accent--text  ma-3">Duración del Descanso en segundos</h3>
    </v-row>
    <v-row>
      <v-text-field
          label="Duracion"
          color="accent"
          class="accent--text mr-12 ml-12"
          solo
          clearable
      ></v-text-field>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
        rounded color=" accent primary--text">Guardar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PopupDescanso"
}
</script>

<style scoped>

</style>