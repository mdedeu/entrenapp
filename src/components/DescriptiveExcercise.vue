<template>
    <v-card
        class="mx-10"
        max-width="600"
        outlined
        onclick="EjercicioDescripcion()"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            {{exerciseDes.name}}
          </v-list-item-title>
          <v-list-item-subtitle>Este ejercicio está orientado al {{exerciseDes.metadata.deportes}}. </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions class="justify-center">
        <v-btn
            outlined
            rounded
            text
            @click="EjercicioDescripcion()"
            class="accent"
        >
          Ir al ejercicio
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>

  <script>
    export default {
      name: "DescriptiveExercise",
      //props: ['name','category','difficulty'],
      props: {
        exerciseDes: {
          type: Object,
          required: true
        }
      },
      methods:{
        EjercicioDescripcion: function () {
          this.$router.push({name: 'EjercicioDescripcion', params: {exercise: this.exerciseDes}})
        },
      },

    }

</script>

