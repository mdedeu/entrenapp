<template>
    <v-container fluid class="primary fill-height">
        <v-row>
            <v-col cols = "12"><HeaderApp/></v-col>
        </v-row>
        <v-row class="pt-16">
            <carrousel :Section="{title:'Rutinas recomendadas',nameComponent:'RutinasRecomendadas'}"></carrousel>
        </v-row>

        <v-row class="pt-16" >
            <carrousel :Section="{title:'Tus rutinas',nameComponent:'Tus rutinas'}"></carrousel>
        </v-row>

        <v-row class="pt-16">
            <carrousel :Section="{title:'Rutinas favoritas',nameComponent:'RutinasFavoritas'}" ></carrousel>
        </v-row>

    </v-container>


</template>

<script>
    import carrousel from '../components/carrousel'
    import HeaderApp from '../components/HeaderApp'


    export default {
    name: "RoutineLanding",
    components:{
        carrousel,
        HeaderApp
    }
}
</script>
