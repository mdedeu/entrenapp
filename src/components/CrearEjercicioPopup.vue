<template>
   <v-container fluid class="accent fill-height">

      <v-row justify="space-between">
        <v-col cols="6" class="text-h3">Información del ejercicio</v-col>
        <v-col cols="3">
          <Close/>
        </v-col>
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
        <v-col class="text-h3">Grupo múscular</v-col>
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
</template>


<script>
import Close from './Close'
export default {
  name: 'RoutineDescription',
  components:{
    Close
  },
  data(){
    return {
      muscle:[{name:"Piernas"},{name:"Espalda"},{name:"Pecho"},{name:"Abdominales"},{name:"Brazos"},{name:"Hombros"}]
    }
  }

}

</script>