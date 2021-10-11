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
      <SeleccCateg v-on:close-popup="popup=false" v-on:add-exercise="addExercise"></SeleccCateg>
    </v-card>

  </v-dialog>


</v-container>
</template>

    <script>
    import SeleccCateg from "./SeleccCateg";
    export default {
      name: "AgregarEjercicio",
      components: {SeleccCateg},
      data(){
        return {
          popup: false
        }
      },
      methods :{
        addExercise(exercise){
          this.$emit('add-exercise',exercise)
          console.log('AgregarEjercicio')

        }
      }
    }
    </script>

    <style scoped>

    </style>