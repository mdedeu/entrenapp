<template>

    <v-container fluid>
      <v-row class="accent--text" justify="space-around" >
          <v-col cols="6" >
            <v-row justify="center">
              <h2 class="font-weight-medium">Filtra por nivel de dificultad, duración y más</h2>
            </v-row>
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
            <v-row justify="space-around" class="mt-6 mb-n5">
              ¿Vas a necesitar alguna máquina o equipación extra?
            </v-row>
            <v-row justify="space-around" class="pt-6">
                <v-checkbox
                    label="Equipación extra"
                    color="accent"
                    hide-details
                    dark
                ></v-checkbox>
            </v-row>

            <v-row justify="space-around" class="pt-6" >
              <v-col cols="4">
                <v-select
                    :items="sports"
                    label="Deporte Relacionado"
                    solo
                    full-width
                ></v-select>
              </v-col>
            </v-row>
            <v-row justify="space-around">
              <v-btn class="accent text--primary" rounded width="200px"> Filtrar
              </v-btn>
            </v-row>
          </v-col>
        <v-divider
            vertical class="accent"
        ></v-divider>

        <v-col cols="6" >
          <h2 class="mb-3">Todos los resultados</h2>
          <v-container class="routine" >
            <v-row class="pt-6 pl-6" justify="space-around" v-for="routine in routines" :key="routine.name">
              <DescriptiveRoutine :name = "routine.name" difficulty = "Intermedia" category = "Pecho" :sample-exercises="['Flexiones Abiertas', 'Press Plano']" ></DescriptiveRoutine>
            </v-row>
          </v-container>

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
       routines: [{name:"Pecho"},{name:"Piernas"},{name:"Brazo"},{name:"Hombros"},{name:"Espalda"}],
      //routines: false,
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
.routine{
  max-height: 45em;
  overflow: auto;
}
</style>