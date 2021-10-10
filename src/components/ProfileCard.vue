<template>
  <img v-if="loading" :src="require('@/assets/ajax-loader.gif')">

  <v-container fluid class="accent fill-height" v-else>
    <p class="text-h3 primary--text">Información personal:</p>
    <v-card width="100%">
          <v-container>
              <v-row>
                <v-col>
                  <v-app-bar class="mt-12" flat color="rgba(0, 0, 0, 0)">
                    <v-avatar size="150">
                      <img alt="user" v-if="user.avatarUrl" :src="user.avatarUrl">
                      <img alt="user" v-else  :src="profile.prof_im">
                    </v-avatar>
                    <v-spacer></v-spacer>
                  </v-app-bar>
                </v-col>
                <v-col>

                </v-col>
              </v-row>
            </v-container>


          <v-card-text>

            <v-card-title >
              <h1 class="primary--text">{{ user.username }}</h1>
            </v-card-title>

            <v-list two-line>
              <v-list-item v-if="user.phone">
                <v-list-item-icon>
                  <v-icon color="primary"
                          x-large
                  >
                    mdi-phone
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="text-h4">{{ user.phone }}</v-list-item-title>
                  <v-list-item-subtitle class="text-h6">Teléfono</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item v-if="user.email">
                <v-list-item-icon>
                  <v-icon color="primary"
                          x-large
                  >
                    mdi-email
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content >
                  <v-list-item-title class="text-h4">{{ user.email }}</v-list-item-title>
                  <v-list-item-subtitle class="text-h6">Correo electrónico</v-list-item-subtitle>
                </v-list-item-content>

              </v-list-item>


            </v-list>
          </v-card-text>

            <v-container>
              <v-row>
                <v-col>
                  <v-card-actions>
                    <v-button class="grey--text  mr-16 ml-16">Cambiar contraseña</v-button>
                  </v-card-actions>
                </v-col>
                <v-col>
                  <v-card-actions>
                    <v-button class="grey--text  mr-16 ml-16">Cambiar foto de perfil</v-button>
                  </v-card-actions>
                </v-col>
                <v-col>
                  <v-card-actions>
                    <v-button class="grey--text  mr-16 ml-16">Cambiar foto de portada</v-button>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-container>

        </v-card>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "ProfileCard.vue",
  data(){
    return {
      loading:false,
      profile:{prof_im:require('../assets/sinFoto.jpeg'), back_im:require('../assets/psg_header.jpg')},
    }
  },
  computed:{
    ...mapGetters('security',{
      user: 'getUser'
    })
  },
  async created() {
    this.loading = true;
    await this.$store.dispatch("security/getCurrentUser")
    this.loading = false;
  }
}
</script>

<style scoped>

</style>