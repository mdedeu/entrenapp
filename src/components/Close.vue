<template>
    <v-container>
    <v-row>
        <v-col cols="12" align="right">
            <v-btn
                color="transparent"
                @click="goBack"
            >
                <v-icon
                    x-large
                    color="white"
                >
                    mdi-alpha-x
                </v-icon>
            </v-btn>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
    export default {
    name: 'Close' ,
    methods:{
      goBack(){
        return this.$router.go(-1);
      }
    }
    }
</script>


