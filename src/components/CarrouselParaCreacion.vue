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
            <h1 class=" text-h4 primary--text"> {{ calentamiento.name }}:</h1>
          </v-col>
          <v-col cols="3">
            <v-text-field
                label="¿Cuántas vueltas de calentamiento?"
                v-model="calentamiento.repetitions"
                solo
                background-color="white"
                :rules="rulesNumber"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" v-for="calExec in calentamiento.metadata.ejercicios" :key="calExec.name">
          <v-col cols="6"  >
            <v-btn width="100%"
                   rounded
                   color="white"
                   class="primary--text justify-center text-h5 mt-n5"
                   height="100%"
                   @click="EjercicioDescripcion()"
            >
              {{ calExec.name }}
              <v-icon
                  x-large
                  color="primary"
                  class="pl-10 pr-5"
              >
                mdi-timer
              </v-icon>
              {{ calExec.time }}''||
              {{calExec.reps}}
            </v-btn>
          </v-col>
        </v-row>

        <v-row justify="center"  style="height: 11vh">
          <v-col cols="6" height="100%">
            <AgregarEjercicio stage="Calentamiento" v-on:add-exercise="addExercise" v-on:add-descanso="addDescanso"></AgregarEjercicio>
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
                :rules="rulesNumber"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" style="height: 10vh" v-for="exerciseDescrip in exercise.metadata.ejercicios" :key="exerciseDescrip.name">
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
              {{ exerciseDescrip.time }}'' ||
              {{exerciseDescrip.reps}}
            </v-btn>
          </v-col>
        </v-row>

        <v-row justify="center"  style="height: 11vh">
          <v-col cols="6" height="100%">
            <AgregarEjercicio :stage="exercise.name" v-on:add-exercise="addExercise" v-on:add-descanso="addDescanso"></AgregarEjercicio>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>



    <v-carousel-item v-if="update">
      <v-container fluid class="accent fill-height">
        <v-row justify="center">
          <v-btn width="50%"
                 rounded
                 color="white"
                 class="primary--text justify-center mt-n5"
                 @click="addExerciseCycle"
          >Agregar ciclo de ejercitacion
          </v-btn>
        </v-row>
      </v-container>
    </v-carousel-item>


    <v-carousel-item v-if="update">
      <v-container fluid class="accent fill-height">

        <v-row justify="space-around">
          <v-col cols="3">
            <h1 class="text-h4  primary--text"> {{ enfriamiento.name }}:</h1>
          </v-col>
          <v-col cols="3">
            <v-text-field
                label="¿Cuántas vueltas de enfriamiento?"
                solo
                v-model="enfriamiento.repetitions"
                background-color="white"
                :rules="rulesNumber"
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
              {{ calExec.time }}'' ||
              {{calExec.reps}}
            </v-btn>
          </v-col>
        </v-row>

        <v-row justify="center"  style="height: 11vh">
          <v-col cols="6" height="100%">
            <AgregarEjercicio stage='Enfriamiento' v-on:add-exercise="addExercise" v-on:add-descanso="addDescanso" ></AgregarEjercicio>
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
  name: "CarrouselParaCreacion",
  components : {AgregarEjercicio},
  data: () => (
      {
        calentamiento:{name:'Calentamiento',detail:'Calentamiento',type:'warmup',order:1,repetitions:null,metadata:{ejercicios:[]} },
        ejercitacion:[],
        enfriamiento:{name:'Enfriamiento',detail:'Enfriamiento',type:'cooldown',order:null,repetitions:null,metadata:{ejercicios:[]} },
        cicleNumber:2,
        update:true,
        error:false,
        rulesNumber: [v => (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) || 'Tiene que ser un numero entre 0 y 999 ']
      }),
  methods:{
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
    },
    addDescanso(event){
      if(event.stage==='Calentamiento'){
        this.calentamiento.metadata.ejercicios.push({
          time: event.segundos,
          name : 'Descanso'
        })
      }else if(event.stage === 'Enfriamiento'){
        this.enfriamiento.metadata.ejercicios.push({
          time: event.segundos,
          name : 'Descanso'
        })
      }else{
        let i;
        for(i=0;i<this.ejercitacion.length;i++){
          if(this.ejercitacion[i].name === event.stage){
            this.ejercitacion[i].metadata.ejercicios.push({
              time: event.segundos,
              name : 'Descanso'
            })
            break;
          }
        }
      }
    },
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
      this.ejercitacion.push({name:'',detail:'Exercise',type:'exercise',order:this.cicleNumber,repetitions:null,metadata:{ejercicios:[]} })
      this.cicleNumber++;
      setTimeout(()=>this.update=true,500)

  },
    SendInfo(){
      this.enfriamiento.order=this.cicleNumber

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

    }
  }
}
</script>