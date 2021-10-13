<template>
  <v-container>
    <v-row>
      <v-col>
        <v-alert v-if="error" type="error" dismissible @click="error=false">{{this.message}}</v-alert>
      </v-col>
    </v-row>
    <v-carousel class="mt-11">

      <v-carousel-item order="1">
        <v-container fluid class="accent fill-height">

          <v-row justify="space-around">
            <v-col cols="3">
              <p class="text-h4  primary--text"> {{ calentamiento.name }}:</p>
            </v-col>

            <v-col cols="3" v-if="calentamiento.metadata.ejercicios.length > 0 && !eliminando">
              <v-btn
                  color="red"
                  dark
                  @click="eliminando=true"
              >
                <v-icon left>
                  mdi-delete-outline
                </v-icon>
                Eliminar Ejercicio

              </v-btn>
            </v-col>

            <v-col cols="3" v-if="eliminando">
              <v-btn
                  color="green"
                  dark
                  @click="eliminando=false"
              >
                <v-icon left>
                  mdi-check
                </v-icon>
                Continuar
              </v-btn>
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

          <v-row justify="center"  style="height: 10vh" v-for="calExec in calentamiento.metadata.ejercicios" :key="calExec.name">
            <v-col cols="6"  >
              <v-btn width="100%"
                     rounded
                     color="white"
                     class="primary--text justify-center text-h5 mt-n5"
                     height="100%"
                     @click="eliminando?eliminarEjercicio('Calentamiento',calExec.name):EjercicioDescripcion"
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

          <v-row>
            <v-col>

            </v-col>
            <v-col>

            </v-col>
            <v-col>
              <v-btn
                  color="transparent"
                  @click="removeCycle(exercise.name)"

              >
                <v-icon
                    x-large
                    color="primary"
                >
                  mdi-alpha-x
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-row justify="space-around">
            <v-col cols="3">
              <v-text-field
                  label="Nombre"
                  v-model="exercise.name"
                  solo
                  background-color="white"
              ></v-text-field>
            </v-col>

            <v-col cols="3" v-if="exercise.metadata.ejercicios.length > 0 && !eliminando">
              <v-btn
                  color="red"
                  dark
                  @click="eliminando=true"

              >
                <v-icon left>
                  mdi-delete-outline
                </v-icon>
                Eliminar Ejercicio

              </v-btn>
            </v-col>
            <v-col cols="3" v-if="eliminando">
              <v-btn
                  color="green"
                  dark
                  @click="eliminando=false"
              >
                <v-icon left>
                  mdi-check
                </v-icon>
                Continuar
              </v-btn>
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

          <v-row justify="center"   style="height: 10vh" v-for="exerciseDescrip in exercise.metadata.ejercicios" :key="exerciseDescrip.name">
            <v-col cols="6"  >
              <v-btn width="100%"
                     rounded
                     color="white"
                     class="primary--text justify-center text-h5 mt-n5"
                     height="100%"
                     @click="eliminando?eliminarEjercicio(exercise.name,exerciseDescrip.name):EjercicioDescripcion"
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
              <p class="text-h3  primary--text"> {{ enfriamiento.name }}:</p>
            </v-col>

            <v-col cols="3" v-if="enfriamiento.metadata.ejercicios.length > 0 && !eliminando">
              <v-btn
                  color="red"
                  dark
                  @click="eliminando=true"
              >
                <v-icon left>
                  mdi-delete-outline
                </v-icon>
                Eliminar Ejercicio

              </v-btn>
            </v-col>
            <v-col cols="3" v-if="eliminando">
              <v-btn
                  color="green"
                  dark
                  @click="eliminando=false"
              >
                <v-icon left>
                  mdi-check
                </v-icon>
                Continuar
              </v-btn>
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
                     @click="eliminando?eliminarEjercicio('Enfriamiento',calExec.name):EjercicioDescripcion"
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
              <AgregarEjercicio stage="Enfriamiento" v-on:add-exercise="addExercise" v-on:add-descanso="addDescanso"></AgregarEjercicio>
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
    eliminarEjercicio(nombre,ejercicio){
      if(nombre==='Calentamiento'){
        this.calentamiento.metadata.ejercicios=this.calentamiento.metadata.ejercicios.filter((item) => item.name!=ejercicio)
      }
      else if(nombre==='Enfriamiento')
        this.enfriamiento.metadata.ejercicios=this.enfriamiento.metadata.ejercicios.filter((item) => item.name!=ejercicio)
      else
        for(let i = 0 ; i < this.ejercitacion.length ; i++)
          if(this.ejercitacion[i].name===nombre) {
            this.ejercitacion[i].metadata.ejercicios = this.ejercitacion[i].metadata.ejercicios.filter((item) => item.name != ejercicio)
            break
          }
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
  }

}
</script>

<style scoped>

</style>