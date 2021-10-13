<template>
    <v-container fluid class="primary fill-height">
        <v-row style="height: 50px">
            <v-col cols = "12"><HeaderApp/></v-col>
        </v-row>

        <v-row>
            <RoutineDescription :routine="routine"></RoutineDescription>
        </v-row>

        <CarrouselParaCiclos :routine="routine"></CarrouselParaCiclos>

    </v-container>
</template>

<script>
    import RoutineDescription from '../components/RoutineDescription'
    import HeaderApp from '../components/HeaderApp'
    import CarrouselParaCiclos from '../components/CarrouselParaCiclos'

    export default {
    name: "RoutineDescriptionPage",
    components:{
        HeaderApp,
        RoutineDescription,
        CarrouselParaCiclos
    },
      props:{
        routine: {
          type: Object,
          required: true
        }
      },
      data(){
        return{
          routineData: null
        }
      },
      created() {
        if(!this.routine){
          this.routineData = ((JSON).parse(localStorage.getItem('vuex')))['propsData']['routine']
        }
        else{
          this.routineData = this.routine
          this.$store.dispatch('cache/setRoutine',this.routine)
        }
      }

    }
</script>
