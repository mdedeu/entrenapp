<template>

  <v-sheet
      color="yellow"
      elevation="1"
      height="50%"
      width="100%"
      class ="black--text"
  >

    <v-container>

      <Close/>
      <v-row>
        <v-col class="text-h3">Información del ejercicio</v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-text-field
              label="Nombre"
              solo
              background-color="white"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="text-h3">Grupo muscular</v-col>
      </v-row>

      <v-row>
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
      <v-row>
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
      </v-row><v-row>
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

      <v-row>
        <v-col height="100%">
          <v-checkbox
              v-model="ex4"
              label="Equipamiento extra"
              color="black"
              value="black"
              hide-details
          ></v-checkbox>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="text-h3">Deportes relacionados</v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-text-field
              label=""
              solo
              background-color="white"
          ></v-text-field>
        </v-col>
      </v-row>


    </v-container>

</v-sheet>
</template>


<script>
import Close from './Close'
export default {
  name: 'RoutineDescription',
  components:{
    Close
  }
}

</script>