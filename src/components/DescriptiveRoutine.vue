<template>
  <v-card
      class="mx-auto"
      max-width="600"
      outlined
      onclick="RoutineDescription"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{category}}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{name}}
        </v-list-item-title>
        <v-list-item-subtitle>Esta rutina tiene dificultad {{difficulty}}. Incluye ejercicios como {{sampleExercises[0]}} y {{sampleExercises[1]}} </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions class="justify-center">
      <v-btn
          outlined
          rounded
          text
          @click="RoutineDescription"
          class="accent"
      >
        Ir a la Rutina
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "DescriptiveRoutine",
  props: ['name','category','difficulty','sampleExercises'],
  methods:{
  RoutineDescription(){
    this.$router.push({name:"RoutineDescription"})
  }
}
}
</script>

<style scoped>

</style>