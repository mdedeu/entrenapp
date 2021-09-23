<template>

  <v-sheet
      color="blue"
      elevation="1"
      height="50%"
      width="100%"
      class ="yellow--text"
  >
  <v-container fluid>

    <v-row justify="space-between">

        <v-col class="col-2" offset="0">


             <template>
               <div class="text-center">
                 <v-btn
                     rounded
                     color="transparent"
                     width="100%"
                     class="white--text"
                 >
                   <v-icon
                     large
                     color="white"
                 >
                   mdi-arrow-left
                 </v-icon>
                   Atrás
                 </v-btn>
               </div>
             </template>


        </v-col>

        <v-col class="col-3" offset="6" >
            <template>
                <v-btn
                    rounded
                    color="white"
                    width="100%"
                >
                  <v-icon
                      large
                  >
                    mdi-bookmark-outline
                  </v-icon>
                  Añadir a favoritas
                </v-btn>

            </template>
        </v-col>

    </v-row>


    <v-row justify="left" class="pt-10">
        <p class="text-h3">Pecho <br>
          Nivel de dificultad : Intermedio<br>
          Duracion: 45'</p>
    </v-row>



  </v-container>
  </v-sheet>

</template>



<script>
export default {
  name: 'RoutineDescription',
}
</script>
