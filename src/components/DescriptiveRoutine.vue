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
        <v-list-item-subtitle>Esta rutina tiene dificultad {{difficulty}}divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
          tile
          size="80"
          color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
          outlined
          rounded
          text
          @click="RoutineDescription"
      >
        Ir a la Rutina
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "DescriptiveRoutine",
  props: ['name','category','difficulty'],
  methods:{
  RoutineDescription(){
    this.$router.push({name:"RoutineDescription"})
  }
}
}
</script>

<style scoped>

</style>