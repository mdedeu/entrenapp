<template>
  <img v-if="loading" :src="require('@/assets/ajax-loader.gif')">

  <v-container v-else-if="!mine">
  <v-row justify="space-between">

    <Back v-if="this.$router"></Back>


    <v-col v-if="favourite" class="col-3" offset="6" >
      <template>
        <div class="text-center">
          <v-dialog
              v-model="dialog"
              width="500"
              transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="lighten-2"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="removeFromFavourite"
                  :loading="loadingButton"
                  :disabled="loadingButton"

              >
                <v-icon left>
                  mdi-bookmark-outline
                </v-icon>
                Eliminar de favoritas

              </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h5 green lighten-2">
                Éxito
              </v-card-title>

              <v-card-text>
                Rutina agregada a tus favoritas
              </v-card-text>
              <v-icon color="green" size="60">mdi-check</v-icon>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="dialog = false"
                    :loading="loadingButton"
                    :disabled="loadingButton"
                >
                  OK
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template>
    </v-col>


    <v-col v-else class="col-3" offset="6" >
          <template>
            <div class="text-center">
              <v-dialog
                  v-model="dialog"
                  width="500"
                  transition="dialog-bottom-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      color="lighten-2"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      @click="addTofavourite"

                  >
                    <v-icon left>
                      mdi-bookmark-outline
                    </v-icon>
                    Agregar a favoritas

                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="text-h5 green lighten-2">
                    Éxito
                  </v-card-title>

                  <v-card-text>
                    ¡Rutina eliminada de favoritas!
                  </v-card-text>
                  <v-icon color="green" size="60">mdi-check</v-icon>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                    >
                      OK
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>



          </template>
        </v-col>



  </v-row>
  </v-container>

  <v-container v-else>
    <v-row>
      <Back></Back>
      <v-col></v-col>
      <v-col>
        <v-btn
            color="red light white--text"
            @click="eliminada=true"
        >
          <v-icon left>
            mdi-delete-outline
          </v-icon>
          Eliminar rutina
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
            color="accent primary--text"

            @click="editRoutine"
        >
          <v-icon left>
            mdi-pencil-outline
          </v-icon>
          Editar rutina

        </v-btn>
      </v-col>
    </v-row>
    <v-dialog
        v-model="eliminada"
        width="500"
        transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-title class="text-h5 red lighten-2">
          Eliminar  rutina
        </v-card-title>

        <v-card-text>
          Seguro que desea eliminar esta rutina?
        </v-card-text>
        <v-icon color="red" size="60">mdi-delete</v-icon>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="removeRoutine"
          >
            Eliminar
          </v-btn>
          <v-btn
              color="primary"
              text
              @click="eliminada = false"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>


</template>

<script>
import Back from './Back'
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'BackAndButton',
  components:{
    Back
  },
  data(){
    return {
      dialog:false,
      loading : true,
      loadingButton:false,
      eliminada: false,
    }
  },
  methods:{
    async mine(){
      console.log(this.routine)
      console.log(this.getUser)
      await this.$store.dispatch("security/getCurrentUser")
      return this.routine.user.id === this.getUser.id
    },
    async addTofavourite(){
      this.loadingButton=true
      await this.create(this.routineID)
      await this.$store.dispatch("favouriteRoutine/getAll")
      this.loadingButton=false
    },
    ...mapActions( 'favouriteRoutine',['create'] ),
    ...mapActions( 'favouriteRoutine',['delete'] ),

    async removeRoutine(){
       await this.$store.dispatch('routine/delete',this.routine)
       this.redirect()
    },
    redirect(){
      this.$router.push({name:'RoutineLanding'})
    },
    async editRoutine(){
      await this.$store.dispatch('routineCycle/getAll',this.routine)
      let routineCycleL = this.getRoutineCycle;
      this.$router.push({name:"modifyRoutineInfo",params:{routine:this.routine,routineCycle:routineCycleL}})
    },


    async removeFromFavourite(){
      this.loadingButton=true
      await this.delete(this.routineIDdata)
      await this.$store.dispatch("favouriteRoutine/getAll")
      this.loadingButton=false
    }

  },
  props:{
    routineID:{
      type:Number,
      required:true
    },
    routine:{type:Object , required:true}
  },

  computed:{
    ...mapGetters('security',['getUser']),
    ...mapGetters('routineCycle',['getRoutineCycle']),
    ...mapGetters('favouriteRoutine',{
      isFavouriteFunction:'isFavourite'
    }),



    favourite(){
      return  this.isFavouriteFunction.includes(this.routineID)
    }

  },
  async created() {
    this.loading = true;
    await this.$store.dispatch("security/getCurrentUser")
    await this.$store.dispatch("favouriteRoutine/getAll")
    this.loading = false;
  }

}

</script>