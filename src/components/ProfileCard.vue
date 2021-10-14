<template>
  <v-container fluid class="mx-10 fill-height mb-7" >
    <Loading v-if="loading"></Loading>
    <v-container v-else>
      <v-row justify="center">
        <v-card width="100%">
          <v-card-title class="ma-6">
            <v-row justify="center">
              <v-avatar
                  size="200"
                  color="black"
                  class="primary--text">
                <v-img  lazy-src="../assets/no-avatar.png" :src="this.user.avatarUrl"></v-img>
              </v-avatar>
            </v-row>
          </v-card-title>
          <v-card-subtitle>
            <v-row justify="center">
              <h1 class="primary--text pa-6">{{ user.username }}</h1>
            </v-row>
          </v-card-subtitle>



          <v-card-text>
            <v-list>
              <v-list-item v-if="user.email">
                <v-list-item-icon>
                  <v-icon color="primary"
                          x-large
                  >
                    mdi-email
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content >
                  <v-list-item-title class="text-h5">{{ user.email }}</v-list-item-title>
                  <v-list-item-subtitle class="text-h6">Correo electrónico</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>

          <v-container fluid>
            <v-row justify="space-around">
              <v-card-actions>
                <v-btn class="primary--text" @click="editar=true">Editar foto de perfil</v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-btn class="white--text error" @click="borrar=true">Borrar Usuario</v-btn>
              </v-card-actions>
            </v-row>
          </v-container>
        </v-card>
        <v-dialog :value="borrar" width="600px">
          <v-card>
            <v-card-title class="primary--text accent justify-center">
              ¿Estás seguro de que quieres borrar tu perfil?
            </v-card-title>
            <v-card-text class="mt-6">
              Esta accion es irrevertible
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                  @click="borrar=false">
                Cancelar
              </v-btn>
              <v-btn color="error"
                     @click="deleteUser()">
                Borrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog :value="editar" width="600px">
          <v-card class="primary">
            <v-card-title class="primary--text accent justify-center">
              Edita la foto de perfil
            </v-card-title>
            <v-card-text class="mt-6">
              <v-row>
                <v-col>
                  <h2 class="accent--text">Ingresá el link a la foto nueva</h2>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field  v-model="url" solo color="primary" label="e.g= https://imgur.com/gallery/4ZgjEXg">
                  </v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                  @click="editar=false">
                Cancelar
              </v-btn>
              <v-btn color="accent primary--text"
                     @click="updatePhoto">
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-row>

    </v-container>
  </v-container>

</template>

<script>
import {mapGetters} from 'vuex'
import Loading from "./Loading";

export default {
  name: "ProfileCard.vue",
  components: {Loading},
  data(){
    return {
      loading:false,
      //profile:{prof_im:require('../assets/sinFoto.jpeg'), back_im:require('../assets/psg_header.jpg')},
      borrar : false,
      editar : false,
      url: "",
      rules: {
        email:[ val => new RegExp("^(.+)@(.+)$").test(val) || 'Formato de email inválido' ]
      }
    }
  },
  computed:{
    ...mapGetters('security',{
      user: 'getUser'
    })
  },
  methods: {
   async updatePhoto(){
        this.loading = true
        await this.$store.dispatch('security/updateUser',{ avatarUrl : this.url})
        this.loading = false
        this.url = ''
        this.editar= false
   },
    async deleteUser(){
     this.loading = true
     await this.$store.dispatch('security/removeUser')
     this.borrar= false
     await this.$router.push({name: 'Home'})
    this.loading = false
    }
  },
  async beforeCreate() {
    this.loading = true;
    await this.$store.dispatch("security/getCurrentUser")
    this.loading = false;
  }
}
</script>