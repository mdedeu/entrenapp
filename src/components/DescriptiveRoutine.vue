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
            <p>{{routineDes.metadata.sport}}</p>
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{routineDes.name}}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{routineDes.detail}}
        </v-list-item-subtitle>

      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          Dificultad: {{difficulty}}
        </v-list-item-title>

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
  computed:{
    difficulty(){
      if(this.routineDes.difficulty == 'rookie')
        return 'Principiante'
      if(this.routineDes.difficulty == 'intermediate')
        return 'Intermedio'
      return 'Avanzado'
    }
  },
}
</script>

<style scoped>

</style>