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
          v-model="segundos"
          :rules="rulesNumber"
      ></v-text-field>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
            rounded color=" primary accent--text" @click="$emit('close-popup')">Cancelar
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
        rounded color=" accent primary--text" @click="exito=true">Guardar
        </v-btn>
      </v-col>
    </v-row>
    <v-dialog :value="exito" width="500px">
      <v-card>
        <v-card-title class="text-h5 green lighten-2">
          Éxito
        </v-card-title>
        <v-card-text>
          Descanso agregado al ciclo de la rutina
        </v-card-text>
        <v-icon color="green" size="60">mdi-check</v-icon>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="closePopup"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "PopupDescanso",
  props: ['stage'],
  data() {
    return {
      rulesNumber: [v => (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) || 'Tiene que ser un numero entre 0 y 999 '],
      exito: false,
      segundos : null,
    }

  },
  methods: {
    closePopup() {
      this.exito=false
      this.$emit('add-descanso',
          {
            segundos:this.segundos,
            stage:  this.stage}
      )
      this.segundos = null
      this.$emit('close-popup');

    }
  },

}
</script>

<style scoped>

</style>