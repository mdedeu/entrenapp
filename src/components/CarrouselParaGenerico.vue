<template>
  <v-container>
    <v-row>
      <v-col>
        <v-alert v-if="error" type="error" dismissible @click="error=false">{{this.message}}</v-alert>
      </v-col>
    </v-row>
    <v-row class="accent--text" justify="center">
      <h1 class="accent--text">Agrega información sobre los ciclos</h1>
    </v-row>
    <v-carousel height="650px" class="mt-2">

      <v-carousel-item order="1">
        <v-container fluid class="accent fill-height mt-6">

          <v-row justify="space-around">
            <v-col cols="3">
              <p class="text-h4  primary--text"> {{ calentamiento.name }}:</p>
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
          <v-container class="shrink">
            <v-row justify="center" v-for="calExec in calentamiento.metadata.ejercicios" :key="calExec.id">
              <v-col cols="6">
                <v-card min-width="500px"
                        rounded
                        v-if="calentamiento.metadata.ejercicios.includes(calExec)"
                        :color="descansoOrExercise(calExec)"
                        class="primary--text justify-center px-3  d-inline-flex lighten-1"
                >
                  <v-container>
                    {{ calExec.name }}
                  </v-container>
                  <v-divider></v-divider>

                  <v-container v-if="!isNaN(calExec.time) && calExec.time > 0">
                    Duración:
                    {{ calExec.time }}''
                  </v-container>
                  <v-container v-if="!isNaN(calExec.reps) &&calExec.reps >0">
                    Reps: {{calExec.reps}}
                  </v-container>
                  <v-icon
                      class="mr-3"
                    @click="eliminarEjercicio('Calentamiento',calExec.id)">
                    mdi-close
                  </v-icon>

                </v-card>
              </v-col>
            </v-row>
          </v-container>


          <v-row justify="center"  style="height: 11vh" class="grow" >
            <v-col cols="6" height="100%">
              <AgregarEjercicio stage="Calentamiento" v-on:add-exercise="addExercise" v-on:add-descanso="addDescanso"></AgregarEjercicio>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>



      <v-carousel-item order="2" :v-if="ejercitacion.length > 0" v-for="exercise in ejercitacion" :key="exercise.id">
        <v-container fluid class="accent fill-height mt-6">

          <v-row>
            <v-col>
              <v-text-field
                  label="Nombre"
                  v-model="exercise.name"
                  solo
                  background-color="white"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                  label="¿Cuántas vueltas de estos ejercicios?"
                  solo
                  background-color="white"
                  v-model="exercise.repetitions"
                  :rules="rulesNumber"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn
                  color="red white--text"
                  @click="removeCycle(exercise.name)"
              >
                Borrar Ciclo
              </v-btn>
            </v-col>
          </v-row>

          <v-container class="shrink"> <v-row justify="center"   style="height: 10vh" v-for="exerciseDescrip in exercise.metadata.ejercicios" :key="exerciseDescrip.id">
            <v-col cols="6"  >
              <v-card
                      min-width="500px"
                      rounded
                      v-if="exercise.metadata.ejercicios.includes(exerciseDescrip)"
                      :color="descansoOrExercise(exerciseDescrip)"
                      class="primary--text justify-center mt-n5 d-inline-flex lighten-1"
              >
                <v-container>
                  {{ exerciseDescrip.name }}
                </v-container>
                <v-container v-if="!isNaN(exerciseDescrip.time) && exerciseDescrip.time > 0">
                  Duración:
                  {{ exerciseDescrip.time }}''
                </v-container>
                <v-container v-if=" !isNaN(exerciseDescrip.reps) && exerciseDescrip.reps >0">
                  Reps: {{exerciseDescrip.reps}}
                </v-container>
                <v-icon
                    class="mr-3"
                    @click="eliminarEjercicio(exercise.name,exerciseDescrip.id)">
                  mdi-close
                </v-icon>
              </v-card>
            </v-col>
          </v-row>
          </v-container>

          <v-row justify="center"  style="height: 11vh" class="mt-3 mb-10">
            <v-col cols="6" height="100%">
              <AgregarEjercicio :stage="exercise.name" v-on:add-exercise="addExercise" v-on:add-descanso="addDescanso"></AgregarEjercicio>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>



      <v-carousel-item v-if="update">
        <v-container fluid class="accent fill-height mt-6">
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
        <v-container fluid class="accent fill-height mt-6">

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
                  :rules="rulesNumber"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-container class="shrink">
            <v-row justify="center"  style="height: 10vh" v-for="calExec in enfriamiento.metadata.ejercicios" :key="calExec.id">
              <v-col cols="6"  >
                <v-card min-width="500px"
                        v-if="enfriamiento.metadata.ejercicios.includes(calExec)"
                        rounded
                        :color="descansoOrExercise(calExec)"
                        class="primary--text justify-center px-3  d-inline-flex lighten-1"
                >
                  <v-container>
                    {{ calExec.name }}
                  </v-container>
                  <v-divider></v-divider>
                  <v-container v-if="!isNaN(calExec.time) && calExec.time > 0">
                    Duración:
                    {{ calExec.time }}''
                  </v-container>
                  <v-container v-if="!isNaN(calExec.reps) && calExec.reps >0">
                    Reps: {{calExec.reps}}
                  </v-container>
                  <v-icon
                      class="mr-3"
                      @click="eliminarEjercicio('Enfriamiento',calExec.id)">
                    mdi-close
                  </v-icon>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <v-row justify="center"  style="height: 11vh">
            <v-col cols="6" height="100%">
              <AgregarEjercicio stage="Enfriamiento" v-on:add-exercise="addExercise" v-on:add-descanso="addDescanso"></AgregarEjercicio>
            </v-col>
          </v-row>

        </v-container>
      </v-carousel-item>

    </v-carousel>
    <v-row class="primary ">
      <v-col>
        <v-btn rounded class="accent text--primary mt-3 mb-16" @click="SendInfo">Siguiente</v-btn>
      </v-col>
    </v-row>

    <v-dialog :value="popup" width="500px">
      <v-card>
        <v-card-title class="text-h5 green lighten-2">
          Éxito
        </v-card-title>
        <v-card-text>
          Rutina guardada con exito
        </v-card-text>
        <v-icon color="green" size="60">mdi-check</v-icon>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="closeAndSend(cycles)"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import AgregarEjercicio from "./AgregarEjercicio";


export default {
  name: "CarrouselParaGenerico",
  components : {AgregarEjercicio},
  props:{
    routinesCycle:{
      type:[],
      required:false
    }
  },

  created(){

    if(this.routinesCycle == null){
      this.calentamiento={name:'Calentamiento',detail:'Calentamiento',type:'warmup',order:1,repetitions:null,metadata:{ejercicios:[]} },
          this.ejercitacion=[],
          this.enfriamiento={name:'Enfriamiento',detail:'Enfriamiento',type:'cooldown',order:2,repetitions:null,metadata:{ejercicios:[]} },
          this.cicleNumber=3
    }else{

      this.calentamiento=this.routinesCycle[0]
      let i;
      for( i = 1 ; i < this.routinesCycle.length;i++ ){
        if(this.routinesCycle[i].name==='Enfriamiento'){
          this.enfriamiento=this.routinesCycle[i]
        }
        else
          this.ejercitacion.push(this.routinesCycle[i])
      }
      let aux = this.ejercitacion.map( (item) => item.id)
      if(aux.length == 0 )
        this.cicleNumber=3
      else
        this.cicleNumber=Math.max.apply(null,)
    }
  },


  data: () => (
      {
        eliminando:false,
        calentamiento:null,
        ejercitacion:[],
        enfriamiento:null,
        cicleNumber:null,
        update:true,
        error:false,
        popup:false,
        cycles: false,
        message: "Error inesperado",
        rulesNumber: [v => (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) || 'Tiene que ser un numero entre 0 y 999 ']
      }),
  methods:{
    descansoOrExercise(calExec){
      if(calExec.name === 'Descanso')
        return 'grey'

    },
    removeCycle(name){
      this.update=false
      this.ejercitacion=this.ejercitacion.filter( (item) => (item.name!=name))
      setTimeout(()=>this.update=true,500)
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
      this.cicleNumber++;
      this.ejercitacion.push({name:'',detail:'Exercise',type:'exercise',order:this.cicleNumber,repetitions:null,metadata:{ejercicios:[]} })
      setTimeout(()=>this.update=true,500)

    },
    closeAndSend(cycles){
      this.popup= false
      this.$emit('Info-Exercise',cycles)
    },
    SendInfo(){
      if(this.ejercitacion.filter( (item) => ( item.name==null ) ).length > 0 ){
        this.error=true //todos los ciclos deben tener un nombre asociado
        this.message = "Todos los ciclos deben tener un nombre asociado"
        return
      }

      if(this.calentamiento.repetitions == null || this.enfriamiento.repetitions == null || this.ejercitacion.filter((item)=>item.repetitions == null).length > 0 ){
        this.error=true
        this.message = "Se debe especificar la cantidad de vueltas de cada ciclo"
        return
      }
      if(this.calentamiento.metadata.ejercicios.length === 0 || this.enfriamiento.metadata.ejercicios.length === 0 || this.ejercitacion.filter((item)=>item.metadata.ejercicios.length===0).length > 0){
        this.error=true
        this.message = "No puede crear un ciclo sin ejercicios"//no se puede agregar un ciclo sin ejercicios
        return
      }

      let cycles = []
      cycles.push(this.calentamiento)
      this.ejercitacion.forEach((item)=>cycles.push(item))
      cycles.push(this.enfriamiento)
      this.cycles = cycles
      this.popup=true

    },
    eliminarEjercicio(nombre,ejercicioID){
      console.log(this.calentamiento.metadata.ejercicios)
      console.log(this.enfriamiento.metadata.ejercicios)
      if(nombre==='Calentamiento'){
        this.calentamiento.metadata.ejercicios=this.calentamiento.metadata.ejercicios.filter((item) => item.id!= ejercicioID)
      }
      else if(nombre==='Enfriamiento')
        this.enfriamiento.metadata.ejercicios=this.enfriamiento.metadata.ejercicios.filter((item) => item.id!= ejercicioID)
      else
        for(let i = 0 ; i < this.ejercitacion.length ; i++)
          if(this.ejercitacion[i].name===nombre) {
            this.ejercitacion[i].metadata.ejercicios = this.ejercitacion[i].metadata.ejercicios.filter((item) => item.id != ejercicioID)
            break
          }
    },
    addExercise(event){
      if(event.stage==='Calentamiento'){
        this.calentamiento.metadata.ejercicios.push({
          time: event.time,
          reps: event.reps,
          name : event.exercise.name,
          id : this.calentamiento.metadata.ejercicios.length,
          equipacion : event.exercise.metadata.equipacion
        })
      }else if(event.stage === 'Enfriamiento'){
        this.enfriamiento.metadata.ejercicios.push({
          time: event.time,
          reps: event.reps,
          name : event.exercise.name,
          id : this.enfriamiento.metadata.ejercicios.length,
          equipacion : event.exercise.metadata.equipacion
        })
      }else{
        let i;
        for(i=0;i<this.ejercitacion.length;i++){
          if(this.ejercitacion[i].name === event.stage){
            this.ejercitacion[i].metadata.ejercicios.push({
              time: event.time,
              reps: event.reps,
              name : event.exercise.name,
              id : this.ejercitacion[i].metadata.ejercicios.length,
              equipacion : event.exercise.metadata.equipacion
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
          name : 'Descanso',
          id: this.calentamiento.metadata.ejercicios.length
        })
      }else if(event.stage === 'Enfriamiento'){
        this.enfriamiento.metadata.ejercicios.push({
          time: event.segundos,
          name : 'Descanso',
          id: this.enfriamiento.metadata.ejercicios.length
        })
      }else{
        let i;
        for(i=0;i<this.ejercitacion.length;i++){
          if(this.ejercitacion[i].name === event.stage){
            this.ejercitacion[i].metadata.ejercicios.push({
              time: event.segundos,
              name : 'Descanso',
              id: this.ejercitacion[i].metadata.ejercicios.length
            })
            break;
          }
        }
      }
    },
  }

}
</script>

<style scoped>

</style>