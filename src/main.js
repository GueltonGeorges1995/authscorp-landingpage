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
import AboutUs from '@pages/about-us/index.vue';
import Docs from '@pages/docs/index.vue';
import DocsLayout from '@pages/docs/article/index.vue';
import Pricing from '@pages/pricing/index.vue';
import Support from '@pages/support/index.vue';
import Error from '@pages/error/index.vue';
import AddArticle from '@pages/docs/article/add-article/index.vue';

Vue.use(VueRouter);
Vue.use(VueMeta)

const router = new VueRouter({
    mode: 'history',
    routes: Error.routes(Error).concat([
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
        path: '/about-us',
        component: AboutUs
    },{
        path: '/docs',
        component: Docs
    },{
        path: '/docs/:section/:uri', // ToDo use SSR generator
        props: true,
        component: DocsLayout
    },{
        path: '/pricing',
        component: Pricing
    },{
        path: '/support',
        component: Support
    },{
        path: '/article/add',
        component: AddArticle
    },{
        path: '*',
        component: Error
    }])
})

Vue.config.productionTip = false

//------------------------------------

import Forms from './authscorp-lib/forms'
Vue.prototype.$api = {
    catch(err) {
        var error = (err.response && err.response.data) || err.error || err.message || err
        error = error.error || error
        throw({ error, result: err })
    },
    uri(api) {
        if(api.indexOf('://') !== -1 || api.substr(0,1) == '/')
            return api
        return '/api/' + api
    },
    request(method, api, data) {
        api = Vue.prototype.$api.uri(api)
        return Forms.request(method, api, data).then((e) => e.data).catch(Vue.prototype.$api.catch)
    },
    get(api, data) {
        return Vue.prototype.$api.request('GET', api, data)
    },
    post(api, data) {
        return Vue.prototype.$api.request('POST', api, data)
    },
    put(api, data) {
        return Vue.prototype.$api.request('PUT', api, data)
    },
    delete(api, data) {
        return Vue.prototype.$api.request('DELETE', api, data)
    }
}

//------------------------------------

const app = new Vue(Object.assign(App, {
    vuetify,
    router,
}))

export default (context) => {
    if(context.$api)
        Vue.prototype.$api = context.$api(Vue.prototype.$api)

    app.$router.push(context.url)
    context.$router = app.$router
    context.meta = app.$meta() // and here

    return app
}
  
if(typeof(window) !== "undefined")
    app.$mount('#app');