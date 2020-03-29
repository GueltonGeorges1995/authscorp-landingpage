import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '../node_modules/material-design-icons-iconfont/dist/material-design-icons.css'

import LandingPage from '@pages/home/index.vue';
import WelcomePage from './components/WelcomePage.vue';
import SignIn from '@pages/signin/index.vue';
import SignUp from '@pages/signup/index.vue';
import ForgotPassword from '@pages/forgotpassword/index.vue';
import Error from '@pages/error/index.vue';

Vue.use(VueRouter);
Vue.use(VueMeta)

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
    },{
        path: '*',
        component: Error
    }
    ]
})

Vue.config.productionTip = false

const app = new Vue(Object.assign(App, {
    vuetify,
    router,
}))

export default (context) => {
    app.$router.push(context.url)
    context.$router = app.$router
    context.meta = app.$meta() // and here

    return app
}
  
if(typeof(window) !== "undefined")
    app.$mount('#app');