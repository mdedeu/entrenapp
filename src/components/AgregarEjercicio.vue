<template>
<v-container>
  <v-dialog
      width="500"
      :value="popup"
  >

    <template v-slot:activator="{ on, attrs }" >
      <v-btn
          width="100%"
          rounded
          color="white"
          class="primary--text justify-center text-h5 mt-n10"
          height="100%"
          v-bind="attrs"
          v-on="on"
          @click="popup=true"
      >
        <v-icon
            x-large
            color="primary"
            class="pl-10 pr-5"
        >
          mdi-plus-box-outline
        </v-icon>
      </v-btn>
    </template>
    <v-card class="primary"
    rounded>
      <SeleccCateg :stage="stage" v-on:close-popup="popup=false" v-on:add-exercise="addExercise" v-on:add-descanso="addDescanso"></SeleccCateg>
    </v-card>

  </v-dialog>


</v-container>
</template>

    <script>
    import SeleccCateg from "./SeleccCateg";
    export default {
      name: "AgregarEjercicio",
      components: {SeleccCateg},
      props: ['stage'],
      data(){
        return {
          popup: false
        }
      },
      methods :{
        addExercise(event){
          this.$emit('add-exercise',event)
        },
        addDescanso(segundos){
          this.$emit('add-descanso',segundos)
        }
      }
    }
    </script>

    <style scoped>

    </style>