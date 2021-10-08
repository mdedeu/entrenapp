<template>

    <v-container fluid>
      <v-row class="accent--text" justify="space-around" >
          <v-col cols="6" >
              <v-row justify="space-around">Nivel de dificultad:</v-row>
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

              <v-row class=" pt-6" justify="space-around">Duración:</v-row>
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

            <v-row justify="space-around" class="pt-6 text--white">
                <v-checkbox
                    v-model="ex4"
                    label="Equipación extra"
                    color="accent"
                    value="accent"
                    hide-details
                ></v-checkbox>
            </v-row>

            <v-row justify="space-around" class="pt-6" >
              <v-col cols="4">
                <v-select
                    :items="sports"
                    label="Deporte"
                    solo
                    full-width
                ></v-select>
              </v-col>
            </v-row>
            <v-row justify="space-around">
              <v-btn class="accent text--primary" rounded width="200px"> Buscar
              </v-btn>
            </v-row>
          </v-col>
        <v-divider
            vertical
        ></v-divider>

        <v-col cols="6">
          <v-card-text justify="space-around" class="waiting-api" v-if="!routines" > Filtra tus {{objects}}!</v-card-text>
          <v-row class="pt-6 pl-6" justify="space-around" v-for="routine in routines" :key="routine.name">
           <DescriptiveRoutine :name = "routine.name" difficulty = "Intermedia" category = "Pecho" :sample-exercises="['Flexiones Abiertas', 'Press Plano']" ></DescriptiveRoutine>
          </v-row>
         </v-col>
      </v-row>
    </v-container>
</template>


<script>


import DescriptiveRoutine from "./DescriptiveRoutine";
export default {
  name: 'FiltroRutinas',
  components: {DescriptiveRoutine},
  props: ['objects'],
  data(){
    return {
      // routines: [{name:"Pecho"},{name:"Piernas"},{name:"Brazo"},{name:"Hombros"},{name:"Espalda"}],
      routines: false,
      difficulty: [{level:"Principiante"},{level:"Intermedio"},{level:"Avanzado"}],
      duration: [{range:"15-30"},{range:"30-45"},{range:"45-60"}],
      sports: ['Futbol','Hockey','Tenis','Otro']
    }
  }

}

</script>

<style scoped>
.waiting-api{
  font-size: 1.5em;
  margin-top: 25%;
}
</style>