<template>
        <v-container fluid class="primary fill-height" style="height: 100vh">
            <Close/>
            <v-row >
                <v-col align="center">
                    <p class="text-h3 text-center accent--text">Seleccionar la categoria</p>
                </v-col>
            </v-row>
            <v-row style="height: 10%" v-for="category in categories" :key="category.cat">
                <v-col cols="12" align="center">
                    <v-btn
                        width="50%"
                        height="90%"
                        rounded
                        class="text-h4"
                        @click="PopupSeleccionarEjercicio"
                    >
                      {{ category.cat }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
    import Close from './Close'
    export default {
    name: "SeleccCateg",
    components:{
        Close
    },
      data(){
        return {
          categories:[{cat:"Ejercicios recomendados"},{cat:"Tus ejercicios"},{cat:"Ejercicios favoritos"}],
        }
      },
      methods:{
        PopupSeleccionarEjercicio(){
          this.$router.push({name:"SeleccionarEjercicioPopup"})
        }
      }
}
</script>
