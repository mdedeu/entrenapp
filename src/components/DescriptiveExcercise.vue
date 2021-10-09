<template>
    <v-card
        class="mx-auto"
        max-width="500"
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
          <v-list-item-subtitle>Esta ejercicio tiene dificultad {{difficulty}}. </v-list-item-subtitle>
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
          Ir al Ejercicio
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>

  <script>
    export default {
      name: "DescriptiveExcercise",
      props: ['name','category','difficulty'],
      methods:{
        EjercicioDescripcion(){
          this.$router.push({name:"EjercicioDescripcion"})
        },
      }
    }

</script>

