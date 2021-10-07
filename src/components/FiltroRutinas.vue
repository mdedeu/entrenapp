<template>


    <v-container fluid>
      <v-row class="accent--text" justify="space-around" >
          <v-col cols="6" >
              <v-row class="text-h4 pl-16" justify="space-around">Nivel de dificultad:</v-row>
              <v-row class="pt-6" justify="space-around" v-for="difficult in difficulty" :key="difficult.level">
                <template>
                  <v-btn
                    rounded
                    color="white"
                    width="60%"
                  >{{ difficult.level }}
                  </v-btn>
              </template>
              </v-row>

              <v-row class="text-h4 pt-6" justify="space-around">Duración:</v-row>
              <v-row class="pt-6" justify="space-around" v-for="durationE in duration" :key="durationE.range">
                <template>
                  <v-btn
                      rounded
                      color="white"
                      width="60%"
                  >{{ durationE.range }}
                  </v-btn>
                </template>
              </v-row>

            <v-row justify="space-around" class="pt-6">
                <v-checkbox
                    v-model="ex4"
                    label="Equipación extra"
                    color="accent"
                    value="accent"
                    hide-details
                    class="accent--text"
                ></v-checkbox>
            </v-row>

            <v-row justify="space-around" class="pt-6" >
              <v-col cols="4">
                <v-text-field
                    label="Deportes relacionados"
                    solo
                    background-color="white"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>


        <v-divider
            vertical
        ></v-divider>

        <v-col cols="6">
          <v-row class="pt-6 pl-6" justify="space-around" v-for="routine in routines" :key="routine.name">
            <template>
              <v-btn
                  rounded
                  color="white"
                  width="60%"
                  @click="RoutineDescription()"
              >{{ routine.name }}
              </v-btn>
            </template>
          </v-row>
         </v-col>
      </v-row>
    </v-container>
</template>


<script>


export default {
  name: 'FiltroRutinas',
  data(){
    return {
      routines:[{name:"Pecho"},{name:"Piernas"},{name:"Brazo"},{name:"Hombros"},{name:"Espalda"}],
      difficulty: [{level:"Principiante"},{level:"Intermedio"},{level:"Avanzado"}],
      duration: [{range:"15-30"},{range:"30-45"},{range:"45-60"}]
    }
  },
  methods:{
    RoutineDescription(){
     this.$router.push({name:"RoutineDescription"})
    }
  }

}

</script>