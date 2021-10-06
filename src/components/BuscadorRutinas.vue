<template>
    <v-container style="height: 90vh">
      <v-row>
        <v-col>
          <Back/>
        </v-col>
      </v-row>
        <v-row>
            <v-col align="center">
                <p class="text-h3 accent--text">Tus rutinas</p>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="4" >
                <v-text-field
                    label="Nombre"
                    filled
                    dense
                    rounded
                    background-color="white"
                    width="50%"
                    append-icon="mdi-card-search"
                ></v-text-field>

            </v-col>
        </v-row>
        <v-row v-for="routine in routines" :key="routine.id">
          <v-col cols="12" align="center">
            <v-btn
                rounded
                width="50%"
            >
              {{ routine.name }}
            </v-btn>
          </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Back from './Back'
    export default {
    name: "BuscadorRutinas",
    components:{
        Back
    },
    data(){
      return {
        routines : [ {id:0,name:"Pecho",level:"1"} , {id:1,name:"Espalda",level:"1"} , {id:2, name:"Abdominales",level:"1"}, {id:3, name:"Brazos",level:"1"} ],
        }
    }
}
</script>

