<template>
  <v-card
      class="mx-10"
      max-width="600"
      outlined
      onclick="RoutineDescription"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
            <p>category</p>
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{routineDes.name}}
        </v-list-item-title>
        <v-list-item-subtitle>Esta rutina tiene dificultad {{routineDes.difficulty}}. Incluye ejercicios como ... </v-list-item-subtitle>
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
        Ir a la rutina
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "DescriptiveRoutine",
  props: {
    routineDes: {
      type:Object,
      required : true
    }
  },
  methods:{
  RoutineDescription(){
    this.$router.push({name:"RoutineDescription",params:{ routine:this.routineDes } })
  }
  },

}
</script>

<style scoped>

</style>