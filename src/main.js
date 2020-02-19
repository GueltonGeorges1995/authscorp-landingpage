import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
    data () {
    return {
      menu: [
        { icon: 'home', title: 'Link A' },
        { icon: 'info', title: 'Link B' },
        { icon: 'warning', title: 'Link C' }
      ]
    }
  },
  
  methods: {
    menuItems () {
      return this.menu
    }
  },
  vuetify,
  render: h => h(App)
}).$mount('#app')
