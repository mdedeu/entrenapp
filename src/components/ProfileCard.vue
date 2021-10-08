<template>
  <img v-if="loading" :src="require('@/assets/ajax-loader.gif')">

  <v-container v-else>
        <v-card>
          <v-img height="25vh" :src="profile.back_im">
            <v-container>
              <v-row align="center">
                <v-col>
                  <v-app-bar class="mt-12" flat color="rgba(0, 0, 0, 0)">
                    <v-avatar size="150">
                      <img alt="user" :src="profile.prof_im">
                    </v-avatar>
                    <v-spacer></v-spacer>
                  </v-app-bar>
                </v-col>
                <v-col>

                </v-col>
              </v-row>
            </v-container>
          </v-img>


          <v-card-text>

            <v-card-title  class="white--text">
              <h1 class="black--text">{{ user.username }}</h1>
            </v-card-title>

            <div class="font-weight-bold ml-4 mb-2"> Detalles </div>

            <v-list two-line>
              <v-list-item href="https://edu.fedorae.com">
                <v-list-item-icon>
                  <v-icon color="indigo">
                    mdi-phone
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ user.phone }}</v-list-item-title>
                  <v-list-item-subtitle>Teléfono</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-icon>
                  <v-icon>mdi-message-text</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item href="https://edu.fedorae.com">
                <v-list-item-icon>
                  <v-icon color="indigo">
                    mdi-email
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ user.email }}</v-list-item-title>
                  <v-list-item-subtitle>Trabajo</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-icon>
                  <v-icon>mdi-message-text</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item href="https://edu.fedorae.com">
                <v-list-item-icon>
                  <v-icon color="indigo">
                    mdi-map-marker
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ profile.location }}</v-list-item-title>
                  <v-list-item-subtitle>Online</v-list-item-subtitle>
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
                  </v-card-actions>                </v-col>
                <v-col>
                  <v-card-actions>
                    <v-button class="grey--text  mr-16 ml-16">Cambiar foto de portada</v-button>
                  </v-card-actions>                </v-col>
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
      profile:{prof_im:require('../assets/messi.jpg'), back_im:require('../assets/psg_header.jpg'), location:"Paris Saint-Germain"},
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
    console.log(this.user)
  }
}
</script>

<style scoped>

</style>