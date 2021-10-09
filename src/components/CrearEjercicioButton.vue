<template>
  <v-container>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="green"
            dark
            v-bind="attrs"
            v-on="on"
            rounded
            class="primary--text"
        >
          Crea tu Ejercicio
        </v-btn>
      </template>
      <v-card class="accent">
        <v-card-title>
          <span class="text-h4">Creá tu ejercicio</span>
        </v-card-title>
        <v-card-text>
            <v-row justify="center">
              <v-col cols="6">
                <h4 class="primary--text" >Nombre</h4>
                <v-text-field
                    label="Nombre"
                    solo
                    background-color="white"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <h4 class="primary--text mt-n6">Grupo múscular</h4>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="3">
                <template>
                  <v-btn
                      rounded
                      color="white"
                      width="100%"
                  >Piernas
                  </v-btn>
                </template>
              </v-col>
              <v-col cols="3">
                <template>
                  <v-btn
                      rounded
                      color="white"
                      width="100%"
                  >Pecho
                  </v-btn>
                </template>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="3">
                <template>
                  <v-btn
                      rounded
                      color="white"
                      width="100%"
                  >Piernas
                  </v-btn>
                </template>
              </v-col>
              <v-col cols="3">
                <template>
                  <v-btn
                      rounded
                      color="white"
                      width="100%"
                  >Abdominales
                  </v-btn>
                </template>
              </v-col>
            </v-row>
          <v-row justify="center">
            <v-col cols="3">
              <template>
                <v-btn
                    rounded
                    color="white"
                    width="100%"
                >Brazos
                </v-btn>
              </template>
            </v-col>
            <v-col cols="3">
              <template>
                <v-btn
                    rounded
                    color="white"
                    width="100%"
                >Espalda
                </v-btn>
              </template>
            </v-col>
          </v-row>
            <v-row justify="center">
              <h4 class="primary--text mt-6"> ¿Vas a necesitar algún elemento adicional? </h4>
            </v-row>
            <v-row justify="center">
                <v-checkbox
                    label="Equipamiento extra"
                    color="primary"
                    hide-details
                    class="checkbox"
                ></v-checkbox>
            </v-row>

            <v-row justify="center">
                <h4 class="primary--text mt-6">Deportes relacionados</h4>
            </v-row>

            <v-row justify="center">
              <v-col cols="6">
                <v-select
                    :items="sports"
                    label="Deporte"
                    solo
                    full-width
                ></v-select>
              </v-col>

            </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary darken-1"
              text
              @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
              color="primary darken-1"
              text
              @click="dialog = false"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CrearEjercicio",
  data() {
    return {
      dialog:false,
      sports: ['Fútbol', 'Voley', 'Tenis', 'Paddle']
    }
  }
}
</script>

<style scoped>
.checkbox{
  margin: auto;
}
</style>