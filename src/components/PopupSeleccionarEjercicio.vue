<template>

  <v-container fluid>
    <v-row class="accent--text" justify="space-around" >
      <v-col cols="6" >
        <v-row class="text-h4 pl-16" justify="space-around">Grupo Muscular:</v-row>
        <v-row class="pt-6" justify="space-around" v-for="muscle in muscles" :key="muscle.name">
          <template>
            <v-btn
                rounded
                color="white"
                width="60%"
            >{{ muscle.name }}
            </v-btn>
          </template>
        </v-row>


        <v-row justify="space-around" class="pt-6">
          <v-checkbox
              v-model="ex4"
              label="Equipación extra"
              color="accent"
              value="accent"
              hide-details
              class="accent--text"
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
        <v-row class="pt-6 pl-6" justify="space-around" v-for="exercise in exercises" :key="exercise.name">
          <template>
            <v-btn
                rounded
                color="white"
                width="60%"
                @click="EjercicioDescripcion()"
            >{{ exercise.name }}
            </v-btn>
          </template>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>


export default {
  name: 'PopupSeleccionarEjercicio',
  data(){
    return {
      muscles:[{name:"Piernas"},{name:"Pecho"},{name:"Brazos"},{name:"Abdominales"},{name:"Espalda"}],
      exercises:[{name:"Flexiones de brazo"},{name:"Abdominales bolita"},{name:"Salto con soga"},{name:"Estirar piernas"},{name:"Espalda en colchoneta"}],
    }
  },
  methods:{
    EjercicioDescripcion(){
      this.$router.push({name:"EjercicioDescripcion"})
    }
  }

}

</script>