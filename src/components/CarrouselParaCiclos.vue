<template>
  <v-carousel>
    <v-carousel-item v-for="routine in routines" :key="routine.step">
      <v-container fluid class="accent fill-height">
        <v-row justify="center" >
          <p class="text-h3  black--text pt-5 pl-16"> {{ routine.step }}: {{routine.repetitions}} vueltas</p>
        </v-row>
        <v-row justify="center"  style="height: 10vh" v-for="exercise in routine.exercise" :key="exercise.name">
          <v-col cols="6" height="100%">
            <v-btn width="100%"
                   rounded
                   color="white"
                   class="primary--text justify-center text-h5"
                   height="100%">
              {{ exercise.name }}
              <v-icon
                  x-large
                  color="primary"
                  class="pl-10 pr-5"
              >
                mdi-timer
              </v-icon>
              {{ exercise.time }}''
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: "CarrouselParaCiclos",
  data: () => (
      {
        routines: [{step:'Calentamiento',repetitions:3,exercise:[{name:'Salto con soga',time:30},{name:'Salto',time:35}]},{step:'Ejercitacion',repetitions:3,exercise:[{name:'Flexiones de brazo',time:60},{name:'Abdominales',time:60}]}]
      }),
}
</script>