<template>
  <v-carousel v-model="model">

      <v-sheet
          color="yellow"
          height="100%"
          tile
      >
        <v-container>
            <v-row style="height: 100px" justify="center">
              <p class="text-h3 text-center black--text pt-5 pl-16"> Calentamiento: 3 Vueltas</p>
            </v-row>
             <v-row style="height: 100px" justify="center">
            <template>
              <div>
                <v-btn width="900px"
                       rounded
                       color="white"
                       class="black--text justify-center text-h5"
                       height="80%"

                >
                  Salto con soga <v-icon
                    x-large
                    color="black"
                    class="pl-10 pr-5"
                >
                  mdi-timer
                </v-icon> 30''
                </v-btn>
              </div>
            </template>
          </v-row>
            <v-row style="height: 100px" justify="center">
            <template>
              <div>
                <v-btn width="900px"
                       rounded
                       color="white"
                       class="black--text justify-center text-h5"
                       height="80%"

                >
                 Descanso <v-icon
                    large
                    color="black"
                    class="pl-10 pr-5"
                >
                  mdi-timer
                </v-icon> 30''
                </v-btn>
              </div>
            </template>
          </v-row>
        </v-container>
      </v-sheet>
  </v-carousel>
</template>
<script>
export default {
  name: "CarrouselParaCiclos",
  data: () => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
  }),
}
</script>