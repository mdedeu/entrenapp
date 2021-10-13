<template>
  <img v-if="loading" :src="require('@/assets/ajax-loader.gif')">

  <v-container fluid v-else>

    <v-row>

      <Back></Back>
      <v-spacer></v-spacer>

      <v-col v-if="favourite" offset="5">
        <template>
          <div class="text-right">
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
                  Eliminar de favoritos

                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 green lighten-2">
                  Éxito
                </v-card-title>

                <v-card-text>
                  Ejercicio agregado a tus favoritos
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


      <v-col v-else offset="5">
        <template>
          <div class="text-right">
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
                  Agregar a favoritos

                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 green lighten-2">
                  Éxito
                </v-card-title>

                <v-card-text>
                  ¡Ejercicio eliminado de favoritos!
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


      <v-col>
        <ModificarEjercicio v-on:guardar-ejercicio="guardarAuxiliar" :slug="exercise"></ModificarEjercicio>
      </v-col>

      <v-col>
        <template>
          <div class="text-right">
            <v-dialog
                v-model="dialog_delete"
                width="500"
                transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="red"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-icon left>
                    mdi-delete-outline
                  </v-icon>
                  Eliminar Ejercicio

                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 red lighten-2">
                  Eliminar este ejercicio
                </v-card-title>

                <v-card-text>
                  Seguro que desea eliminar este ejercicio?
                </v-card-text>
                <v-icon color="red" size="60">mdi-delete</v-icon>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="primary"
                      text
                      @click="deleteHandler"
                  >
                    Eliminar
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="dialog_delete = false"
                    >
                    Cancelar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </template>
      </v-col>


    </v-row>
  </v-container>
</template>

<script>
import Back from './Back'
import {mapGetters,mapActions} from 'vuex'
import ModificarEjercicio from "./ModificarEjercicioButton";

export default {
  name: 'ExerciseBackAndButton',
  components:{
    ModificarEjercicio,
    Back
  },
  data(){
    return {
      dialog_delete:false,
      dialog:false,
      loading : true,
      loadingButton:false
    }
  },
  methods:{
    ...mapActions('exercise', {
      $modifyExercise: 'modify',
      $deleteExercise: 'delete'
    }),
    async addTofavourite(){
      const result = this.exercise
      result.metadata.favorito=true
      await this.$store.dispatch('exercise/getAll')
      await this.$store.dispatch('exercise/modify', result)
    },

    async removeFromFavourite(){
      const result = this.exercise
      result.metadata.favorito=false
      await this.$store.dispatch('exercise/getAll')
      await this.$store.dispatch('exercise/modify', result)
    },
    async deleteHandler(){
      this.dialog_delete = false
      await this.$store.dispatch('exercise/getAll')
      await this.$store.dispatch('exercise/delete', this.exercise)
      return this.$router.go(-1);
    },
    guardarAuxiliar(){
      this.$emit('guardar-ejercicio')
    }
  },
  props:{
    exercise:{
      type:Object,
      required:true
    },
    exerciseId:{
      type:Number,
      required:true
    },
  },

  computed:{
    ...mapGetters('security',{
      user:'getUser'
    }),

    favourite(){
      return  this.exercise.metadata.favorito
    }

  },
  async created() {
    this.loading = true;
    await this.$store.dispatch("exercise/getAll")
    this.loading = false;
  }
}

</script>