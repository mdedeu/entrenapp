<template>
  <v-carousel v-model="model">

      <v-sheet
          color="yellow"
          height="100%"
          tile
      >
        <v-container>
            <v-row style="height: 100px">
              <p class="text-h3 text-center black--text pt-5 pl-16"> Calentamiento 3 Vueltas</p>
            </v-row>
            <v-row style="height: 100px">
              <template>
                <div class="text-center">
                  <v-btn width="900px"
                      rounded
                      color="white"
                      class="black--text"
                         height="80%"
                  >
                    Salto con soga
                  </v-btn>
                </div>
              </template>
            </v-row>
            <v-row style="height: 100px">
            <template>
              <div class="text-center">
                <v-btn width="900px"
                       rounded
                       color="white"
                       class="black--text"
                       height="80%"

                >
                  Descanso
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