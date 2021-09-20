import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#2C2E43',
                accent : '#FFD523',
                secondary: '#212121',
                error: '#f81919'
            },

        },
    },
});
