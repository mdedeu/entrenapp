<template>

  <v-sheet
      color="blue"
      elevation="1"
      height="50%"
      width="100%"
  >
    <v-container fluid>
      <v-row class="yellow--text" justify="space-around" >
          <v-col cols="6" >
              <v-row class="text-h4 pl-16" justify="space-around">Nivel de dificultad:</v-row>
              <v-row class="pt-6" justify="space-around">
                <template>
                  <v-btn
                    rounded
                    color="white"
                    width="60%"
                  >Principiante
                  </v-btn>
              </template>
              </v-row>
            <v-row class="pt-6" justify="space-around">
              <template>
                <v-btn
                    rounded
                    color="white"
                    width="60%"
                >Intermedio
                </v-btn>
              </template>
            </v-row>

            <v-row class="pt-6" justify="space-around">
              <template>
                <v-btn
                    rounded
                    color="white"
                    width="60%"
                >Avanzado
                </v-btn>
              </template>
            </v-row>

              <v-row class="text-h4 pt-6" justify="space-around">Duración:</v-row>
              <v-row class="pt-6" justify="space-around">
                <template>
                  <v-btn
                      rounded
                      color="white"
                      width="60%"
                  >15-30
                  </v-btn>
                </template>
              </v-row>
              <v-row class="pt-6" justify="space-around">
                <template>
                  <v-btn
                      rounded
                      color="white"
                      width="60%"
                  >30-45
                  </v-btn>
                </template>
              </v-row>

              <v-row class="pt-6" justify="space-around">
                <template>
                  <v-btn
                      rounded
                      color="white"
                      width="60%"
                  >45-60
                  </v-btn>
                </template>
              </v-row>
            <v-row justify="space-around" class="pt-6">
                <v-checkbox
                    v-model="ex4"
                    label="Equipación extra"
                    color="yellow"
                    value="yellow"
                    hide-details
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
          <v-row class="pt-6 pl-6" justify="space-around">
            <template>
              <v-btn
                  rounded
                  color="white"
                  width="60%"
              >Pecho
              </v-btn>
            </template>
          </v-row>
          <v-row class="pt-6 pl-6" justify="space-around">
            <template>
              <v-btn
                  rounded
                  color="white"
                  width="60%"
              >Piernas
              </v-btn>
            </template>
          </v-row>
          <v-row class="pt-6 pl-6" justify="space-around">
            <template>
              <v-btn
                  rounded
                  color="white"
                  width="60%"
              >Brazos
              </v-btn>
            </template>
          </v-row>
          <v-row class="pt-6 pl-6" justify="space-around">
            <template>
              <v-btn
                  rounded
                  color="white"
                  width="60%"
              >Hombros
              </v-btn>
            </template>
          </v-row>
          <v-row class="pt-6 pl-6" justify="space-around" >
          <template>
            <v-btn
                rounded
                color="white"
                width="60%"
            >Espalda
            </v-btn>
          </template>
        </v-row>


        </v-col>

      </v-row>
    </v-container>
  </v-sheet>


</template>


<script>


export default {
  name: 'FiltroRutinas',
}

</script>