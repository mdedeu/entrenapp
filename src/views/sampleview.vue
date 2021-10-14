<template>
  <v-container  fluid class="primary fill-height">

    <v-row justify="center">
      <h1>Rellenador de API</h1>
    </v-row>

    <v-row>
      <v-col>
        <v-btn
            rounded
            width="50%"
            @click="fillApi()"
        >
          Presiona para rellenar la API
        </v-btn>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
import {Credentials} from "../../API/user";


export default {
  name: "RoutineCreatorInfo",
  components: {},
  methods: {
    async fillApi() {
      await this.login(this.sampleUser, this.sampleUser)
      this.sampleSport.forEach( await ((sport)=>{this.createSport({name:sport, detail:sport})}))
      this.sampleExercise.forEach( await((exercise)=>{ this.createExercise({name:exercise, detail:exercise, type:'exercise', metadata:{
          musculos:["Piernas"],
          equipacion: true,
          deportes: "Tenis",
          favorito: false
        }})}))
      let i = 0
      while(i<3) {
        await this.createRoutine(this.sampleRoutines[i]);
        await this.createCycle(this.createdRoutine.id, this.sampleCycleWarmup)
        await this.createCycle(this.createdRoutine.id, this.sampleCycleCooldown)
        i++
      }

  },
  async register(uname) {
    this.$store.dispatch('security/add', {username: uname, email: uname + "@email.com", password: uname})
  },
  async login(uname, password) {
    const credentials = new Credentials(uname, password)
    await this.$store.dispatch("security/login", {credentials, rememberMe: true});
    this.$router.push({name: "Home"})
  },
  async createRoutine(routine) {
    this.createdRoutine = await this.$store.dispatch("routine/create", routine);
    this.exito = true
  },
  async createSport(sport) {
    await this.$store.dispatch("sport/create", sport);
  },
  async createExercise(exercise) {
    await this.$store.dispatch("exercise/create", exercise);
  },
    async createCycle(id, cycle) {
      await this.$store.dispatch("routineCycle/create", {id:id, routineCycle:cycle});
    }
  },
  data() {
    return {
      step: 1,
      exito: false,
      createdRoutine: null,
      currentRoutine: null,
      sampleUser: "messi",
      sampleRoutines: [
        {name:"Messi Rutina PSG",detail:"Hola esto es una prueba",isPublic:true,difficulty:"rookie",metadata:{sport:"Tenis", duracion:"60", equipacion:true}},
        {name:"Meditacion Messi",detail:"Prueba descripcion",isPublic:true,difficulty:"rookie",metadata:{sport:"Futbol", duracion:"60", equipacion:true}},
        {name:"Entrada en calor",detail:"Hola",isPublic:true,difficulty:"rookie",metadata:{sport:"Jockey", duracion:"60", equipacion:true}},
      ],
      sampleSport: [ 'Tenis', 'Bowling', 'Futbol', 'Jockey', 'Atletismo', 'Ninguno'],
      sampleExercise: [ 'Abdominales Duki', 'Super Burpees', 'Flexiones superman'],
      sampleCycleCooldown: {
        name: "Enfriamiento",
        detail: "Enfriamiento",
        type: "cooldown",
        order: 2,
        repetitions: 11,
        metadata: {
          ejercicios: [
            {
              time: "60",
              name: "Descanso"
            }
          ]
        }
      },
      sampleCycleWarmup: {
        name: "Calentamiento",
        detail: "Calentamiento",
        type: "warmup",
        order: 1,
        repetitions: 11,
        metadata: {
          ejercicios: [
            {
              time: "60",
              name: "Descanso"
            }
          ]
        }
      }
    }
  },
  async created() {
    await this.$store.dispatch('security/getCurrentUser')
  },
  computed : {
    ...mapGetters(
        'security',
        ['getUser']
    ),
  }
}
</script>


<style scoped>

</style>