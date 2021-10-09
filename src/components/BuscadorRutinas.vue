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
                    append-icon="mdi-magnify"
                ></v-text-field>

            </v-col>
        </v-row>
      <v-container class="routines">
        <v-row v-for="routine in routines" :key="routine.id">
          <v-col cols="12" align="center">
            <DescriptiveRoutine :name="routine.name" category="Pecho" difficulty="Intermedia" :sample-exercises="['Pecho Plano','Saltar de un balcon']">
            </DescriptiveRoutine>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
</template>

<script>
    import Back from './Back'
    import DescriptiveRoutine from "./DescriptiveRoutine";
    export default {
    name: "BuscadorRutinas",
    components:{
      DescriptiveRoutine,
        Back
    },
    data(){
      return {
        routines : [ {id:0,name:"Pecho",level:"1"} , {id:1,name:"Espalda",level:"1"} , {id:2, name:"Abdominales",level:"1"}, {id:3, name:"Brazos",level:"1"} ],
        }
    },
      methods:{
      RoutineDescription(){
        this.$router.push({name:"RoutineDescription"});
      }
      }
}
</script>

<style scoped>
.routines{
  max-height: 600px;
  overflow: auto;
}
</style>
