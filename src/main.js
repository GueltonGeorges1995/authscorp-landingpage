import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import LandingPage from './components/LandingPage.vue';
import WelcomePage from './components/WelcomePage.vue';
import SignIn from './components/SignIn.vue';
import SignUp from './components/SignUp.vue';
import ForgotPassword from './components/ForgotPassword.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
        path: '/',
        component: LandingPage
    },
        {
        path: '/welcome',
        component: WelcomePage
    },{
        path: '/signin',
        component: SignIn
    },{
        path: '/signup',
        component: SignUp
    },{
        path: '/forgotpassword',
        component: ForgotPassword
    },
    ]
})

Vue.config.productionTip = false

new Vue({
  vuetify,
 router,
  render: h => h(App)
}).$mount('#app')
