<template>
        <v-container fluid class="primary fill-height" style="height: 100vh">
            <Close/>
            <v-row >
                <v-col align="center">
                    <p class="text-h3 text-center accent--text">Ejercicios recomendados</p>
                </v-col>
            </v-row>
            <v-row style="height: 10%">
                <v-col cols="12" align="center">
                    <v-btn
                        width="50%"
                        height="90%"
                        rounded
                        class="text-h4"
                    >
                        Ejercicios recomendados
                    </v-btn>
                </v-col>
            </v-row>
            <v-row style="height: 10%">
                <v-col cols="12" align="center">
                    <v-btn
                    rounded
                    width="50%"
                    height="90%"
                    class="text-h4"

                    >
                        Tus ejercicios
                    </v-btn>
                </v-col>
            </v-row>
            <v-row style="height: 10%">
                <v-col cols="12"  align="center">
                    <v-btn
                        rounded
                        width="50%"
                        height="90%"
                        class="text-h4"

                    >
                        Ejercicios favoritos
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
}
}
</script>
