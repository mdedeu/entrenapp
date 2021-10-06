<template>

    <v-sheet
        color="blue"
        elevation="1"
        height="50%"
        width="100%"
        class="yellow--text"
    >
        <v-container fluid>
            <Close/>
            <v-row >
                <v-col align="center">
                    <p class="text-h3 text-center ">Ejercicios recomendados</p>
                </v-col>
            </v-row>
            <v-row class="pb-8">
                <v-col cols="12" align="center">
                    <v-btn
                        width="50%"
                        rounded
                    >
                        Ejercicios recomendados
                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="pb-8">
                <v-col cols="12" align="center">
                    <v-btn
                    rounded
                    width="50%"
                    >
                        Tus ejercicios
                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="pb-8">
                <v-col cols="12"  align="center">
                    <v-btn
                        rounded
                        width="50%"
                    >
                        Ejercicios favoritos
                    </v-btn>
                </v-col>
            </v-row>



        </v-container>



    </v-sheet>



</template>

<script>
    import Close from './Close'
    export default {
    name: "SeleccCateg",
    components:{
        Close
}
}
</script>
