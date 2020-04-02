import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '../node_modules/material-design-icons-iconfont/dist/material-design-icons.css'

import Error from '@pages/error/index.vue'

Vue.use(VueRouter);
Vue.use(VueMeta)

const router = new VueRouter({
    mode: 'history',
    routes: Error.routes(Error).concat([
    {
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ '@pages/home/index.vue')
    },{
        path: '/welcome',
        component: () => import(/* webpackChunkName: "home" */ './components/WelcomePage.vue')
    },{
        path: '/signin',
        component: () => import(/* webpackChunkName: "openid" */ '@pages/signin/index.vue')
    },{
        path: '/signup',
        component: () => import(/* webpackChunkName: "openid" */ '@pages/signup/index.vue')
    },{
        path: '/forgotpassword',
        component: () => import(/* webpackChunkName: "openid" */ '@pages/forgotpassword/index.vue')
    },{
        path: '/about-us',
        component: () => import(/* webpackChunkName: "home" */ '@pages/about-us/index.vue')
    },{
        path: '/docs',
        component: () => import(/* webpackChunkName: "docs" */ '@pages/docs/index.vue')
    },{
        path: '/docs/:section/:uri', // ToDo use SSR generator
        props: true,
        component: () => import(/* webpackChunkName: "docs" */ '@pages/docs/article/index.vue')
    },{
        path: '/pricing',
        component: () => import(/* webpackChunkName: "home" */ '@pages/pricing/index.vue')
    },{
        path: '/support',
        component: () => import(/* webpackChunkName: "home" */ '@pages/support/index.vue')
    },{
        path: '/article/add/:section/:sub/:title',
        props: true,
        component: () => import(/* webpackChunkName: "docs" */ '@pages/docs/article/add-article/index.vue')
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

    // context.meta = app.$meta()
    // return app
    return new Promise((resolve, reject) => {
        // wait until router has resolved possible async components and hooks
        router.onReady(() => {
            context.meta = app.$meta()
            resolve(app)
        }, reject)
    })
}
  
if(typeof(window) !== "undefined")
    router.onReady(() => {
        app.$mount('#app')
    })