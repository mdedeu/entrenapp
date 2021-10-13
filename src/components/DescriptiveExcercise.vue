<template>
    <v-card
        class="mx-10"
        max-width="600"
        outlined
        onclick="EjercicioDescripcion()"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            <p>category</p>
          </div>
          <v-list-item-title class="text-h5 mb-1">
            {{exerciseDes.name}}
          </v-list-item-title>
          <v-list-item-subtitle>Este ejercicio esta orientado al {{exerciseDes.metadata.deportes}}. </v-list-item-subtitle>
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
      created() {
        if(!this.exerciseDes){
          this.exerciseDesData = ((JSON).parse(localStorage.getItem('vuex')))['propsData']['exerciseDes']
        }
        else{
          this.exerciseDesData = this.exerciseDes
          this.$store.dispatch('cache/setExerciseDes',this.exerciseDes)
        }
      },
      data () {
        return {
          exerciseDesData: null
        }
      }
    }

</script>

