import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#264EEE',
                secondary: '#0F1F2B',
                blue: {
                    base: '#4B6FFF',
                    // darken1: '#183B56',
                    // darken2: '#0A1A5A'
                },
                gray: '#7C7D8D',
                // accent: '',
                error: '#E21E1E',
                // info: '',
                success: '#36B37E',
                warning: '#FF9C36',
            },
        },
    },
});
