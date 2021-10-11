<template>
  <v-container>
    <v-row>
      <v-col>
        <p v-if="error" class="red--text text-h3">Error </p>
      </v-col>
    </v-row>

  <v-carousel >

    <v-carousel-item order="1">
      <v-container fluid class="accent fill-height">

        <v-row justify="space-around">
          <v-col cols="3">
            <p class="text-h3  primary--text"> {{ calentamiento.name }}:</p>
          </v-col>
          <v-col cols="3">
            <v-text-field
                label="¿Cuántas vueltas de calentamiento?"
                v-model="calentamiento.repetitions"
                solo
                background-color="white"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center"  style="height: 10vh" v-for="calExec in calentamiento.metadata.ejercicios" :key="calExec.name">
          <v-col cols="6"  >
            <v-btn width="100%"
                   rounded
                   color="white"
                   class="primary--text justify-center text-h5 mt-n5"
                   height="100%"
                   @click="EjercicioDescripcion"
            >
              {{ calExec.name }}
              <v-icon
                  x-large
                  color="primary"
                  class="pl-10 pr-5"
              >
                mdi-timer
              </v-icon>
              {{ calExec.time }}''
            </v-btn>
          </v-col>
        </v-row>

        <v-row justify="center"  style="height: 11vh">
          <v-col cols="6" height="100%">
            <AgregarEjercicio :stage="Calentamiento" v-on:add-exercise="addExercise" ></AgregarEjercicio>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>



    <v-carousel-item order="2" :v-if="ejercitacion.length > 0" v-for="exercise in ejercitacion" :key="exercise.id">
      <v-container fluid class="accent fill-height">

        <v-row justify="space-around">
          <v-col cols="3">
            <v-text-field
                label="Nombre"
                v-model="exercise.name"
                solo
                background-color="white"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
                label="¿Cuántas vueltas de estos ejercicios?"
                solo
                background-color="white"
                v-model="exercise.repetitions"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center"   style="height: 10vh" v-for="exerciseDescrip in exercise.metadata.ejercicios" :key="exerciseDescrip.name">
          <v-col cols="6"  >
            <v-btn width="100%"
                   rounded
                   color="white"
                   class="primary--text justify-center text-h5 mt-n5"
                   height="100%"
                   @click="EjercicioDescripcion"
            >
              {{ exerciseDescrip.name }}
              <v-icon
                  x-large
                  color="primary"
                  class="pl-10 pr-5"
              >
                mdi-timer
              </v-icon>
              {{ exerciseDescrip.time }}''
            </v-btn>
          </v-col>
        </v-row>

        <v-row justify="center"  style="height: 11vh">
          <v-col cols="6" height="100%">
            <AgregarEjercicio :stage="exercise.name" v-on:add-exercise="addExercise" ></AgregarEjercicio>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>



    <v-carousel-item v-if="update">
      <v-container fluid class="accent fill-height">

        <v-btn width="50%"
               rounded
               color="white"
               class="primary--text justify-center text-h3 mt-n5"
               height="20%"
               @click="addExerciseCycle"
        >Agregar ciclo de ejercitacion
        </v-btn>

      </v-container>
    </v-carousel-item>


    <v-carousel-item v-if="update">
      <v-container fluid class="accent fill-height">

        <v-row justify="space-around">
          <v-col cols="3">
            <p class="text-h3  primary--text"> {{ enfriamiento.name }}:</p>
          </v-col>
          <v-col cols="3">
            <v-text-field
                label="¿Cuántas vueltas de enfriamiento?"
                solo
                v-model="enfriamiento.repetitions"
                background-color="white"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center"  style="height: 10vh" v-for="calExec in enfriamiento.metadata.ejercicios" :key="calExec.name">
          <v-col cols="6"  >
            <v-btn width="100%"
                   rounded
                   color="white"
                   class="primary--text justify-center text-h5 mt-n5"
                   height="100%"
                   @click="EjercicioDescripcion"
            >
              {{ calExec.name }}
              <v-icon
                  x-large
                  color="primary"
                  class="pl-10 pr-5"
              >
                mdi-timer
              </v-icon>
              {{ calExec.time }}''
            </v-btn>
          </v-col>
        </v-row>

        <v-row justify="center"  style="height: 11vh">
          <v-col cols="6" height="100%">
            <AgregarEjercicio :stage="Enfriamiento" v-on:add-exercise="addExercise" ></AgregarEjercicio>
          </v-col>
        </v-row>



      </v-container>
    </v-carousel-item>

  </v-carousel>
  <v-row class="primary ">
    <v-col>
      <v-btn rounded class="accent text--primary mt-10 mb-16" @click="SendInfo">Siguiente</v-btn>
    </v-col>
  </v-row>
  </v-container>
</template>
<script>
import AgregarEjercicio from "./AgregarEjercicio";

export default {
  name: "CarrouselParaModificacion",
  components : {AgregarEjercicio},
  data: () => (
      {
        calentamiento:null,
        ejercitacion:[],
        enfriamiento:null,
        cicleNumber:null,
        update:true,
        error:false


      }),
  created(){
    this.calentamiento=this.routinesCycle[0]
    let i;
    for( i = 1 ; i < this.routinesCycle.length;i++ ){
      if(this.routinesCycle[i].name==='Enfriamiento'){
        this.enfriamiento=this.routinesCycle[i]
      }
      else
        this.ejercitacion.push(this.routinesCycle[i])
    }
    this.cicleNumber=this.enfriamiento.order

  },
  props:{
    routinesCycle:{
      type:[],
      required:true
    }
    },

  methods:{
    SeleccCateg(){
      this.$router.push({name:"SeleccCateg"})
    },
    EjercicioDescripcion(){
      this.$router.push({name:"EjercicioDescripcion"})
    },
    tusRutinas(){
      this.$router.push({name:"Tus rutinas"});
    },
    addExerciseCycle(){
      this.update=false
      this.cicleNumber++;
      this.ejercitacion.push({name:'',detail:'Exercise',type:'exercise',order:this.cicleNumber,repetitions:null,metadata:{ejercicios:[]} })
      setTimeout(()=>this.update=true,500)

  },
    SendInfo(){

      if(this.ejercitacion.filter( (item) => ( item.name==null ) ).length > 0 ){
        this.error=true //todos los ciclos deben tener un nombre asociado
        return
      }

      if(this.calentamiento.repetitions == null || this.enfriamiento.repetitions == null || this.ejercitacion.filter((item)=>item.repetitions == null).length > 0 ){
        this.error=true //se debe especificar la cantidad de vueltas en todos los ejercicios
        return
      }
      // if(this.calentamiento.ejercicios.length == 0 || this.enfriamiento.ejercicios.length == 0 || this.ejercitacion.filter((item)=>item.metadata.ejercicios.length==0).length > 0){
      //   this.error=true //no se puede agregar un ciclo sin ejercicios
      //   return
      // }

      let cycles = []
      cycles.push(this.calentamiento)
      this.ejercitacion.forEach((item)=>cycles.push(item))
      cycles.push(this.enfriamiento)
      this.$emit('Info-Exercise',cycles)

    },
    addExercise(event){
      if(event.stage==='Calentamiento'){
        this.calentamiento.metadata.ejercicios.push({
          time: event.time,
          reps: event.reps,
          name : event.exercise.name
        })
      }else if(event.stage === 'Enfriamiento'){
        this.enfriamiento.metadata.ejercicios.push({
          time: event.time,
          reps: event.reps,
          name : event.exercise.name
        })
      }else{
        let i;
        for(i=0;i<this.ejercitacion.length;i++){
          if(this.ejercitacion[i].name === event.stage){
            this.ejercitacion[i].metadata.ejercicios.push({
              time: event.time,
              reps: event.reps,
              name : event.exercise.name
            })
            break;
          }
        }
      }
      console.log(event) //Aca nos llega { exercise: ObjectEjercicio, time: tiempo del ej, reps: reps}
    },
  }
}
</script>