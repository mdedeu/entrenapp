<template>
  <v-carousel v-model="model">
    <v-carousel-item>
      <v-sheet
          color="yellow"
          height="350px"
          tile

      >
        <v-container fluid>
                <v-row>
                  <v-col style="height: 50px" >
                    <p class="text-center text-h3"> Rutinas recomendadas</p>
                  </v-col>
                </v-row>
                <v-row style="height: 300px">
                  <v-col align-self="center">
                    <template>
                      <v-card
                          class="mx-auto"
                          max-width="344"
                      >
                        <v-card-text>
                          <div>Rutina de Pecho</div>
                          <p class="text-h4 text--primary">
                            Rutina de Pecho
                          </p>
                          <div class="text--primary">
                            Nivel de dificultad : 5<br>
                          </div>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn
                              text
                              color="teal accent-4"
                              @click="reveal = true"
                          >
                            Leer más
                          </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                          <v-card
                              v-if="reveal"
                              class="transition-fast-in-fast-out v-card--reveal"
                              style="height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              <p class="text-h4 text--primary">
                                Origin
                              </p>
                              <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
                            </v-card-text>
                            <v-card-actions class="pt-0">
                              <v-btn
                                  text
                                  color="teal accent-4"
                                  @click="reveal = false"
                              >
                                Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-expand-transition>
                      </v-card>
                    </template>
                  </v-col>
                  <v-col align-self="center">
                    <template>
                      <v-card
                          class="mx-auto"
                          max-width="344"
                      >
                        <v-card-text>
                          <div>Rutina de Pecho</div>
                          <p class="text-h4 text--primary">
                            Rutina de Pecho
                          </p>
                          <div class="text--primary">
                            Nivel de dificultad : 5<br>
                          </div>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn
                              text
                              color="teal accent-4"
                              @click="reveal = true"
                          >
                            Leer más
                          </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                          <v-card
                              v-if="reveal"
                              class="transition-fast-in-fast-out v-card--reveal"
                              style="height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              <p class="text-h4 text--primary">
                                Origin
                              </p>
                              <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
                            </v-card-text>
                            <v-card-actions class="pt-0">
                              <v-btn
                                  text
                                  color="teal accent-4"
                                  @click="reveal = false"
                              >
                                Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-expand-transition>
                      </v-card>
                    </template>
                  </v-col>
                  <v-col align-self="center">
                    <template>
                      <v-card
                          class="mx-auto"
                          max-width="344"
                      >
                        <v-card-text>
                          <div>Rutina de Pecho</div>
                          <p class="text-h4 text--primary">
                            Rutina de Pecho
                          </p>
                          <div class="text--primary">
                            Nivel de dificultad : 5<br>
                          </div>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn
                              text
                              color="teal accent-4"
                              @click="reveal = true"
                          >
                            Leer más
                          </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                          <v-card
                              v-if="reveal"
                              class="transition-fast-in-fast-out v-card--reveal"
                              style="height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              <p class="text-h4 text--primary">
                                Origin
                              </p>
                              <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
                            </v-card-text>
                            <v-card-actions class="pt-0">
                              <v-btn
                                  text
                                  color="teal accent-4"
                                  @click="reveal = false"
                              >
                                Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-expand-transition>
                      </v-card>
                    </template>
                  </v-col>
                </v-row>
        </v-container>

      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    name: "carrousel",
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

