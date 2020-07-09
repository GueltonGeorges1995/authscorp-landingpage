var SsrPlugin = require('vue-cli-plugin-pressr/src/prerender')
var request   = require('request-promise-native')
var { createBundleRenderer } = require('vue-server-renderer');
var minify    = require('html-minifier').minify;

// Replace api callers of vuejs instances
function $api(server, mixin) {
    // var bindRes = (res) => {

    // }

    return Object.assign(Object.assign({}, mixin), {
        uri(api) {
            if(api.indexOf('://') == -1)
                return server + (api.substr(0, 1) == '/' ? api : '/api/' + api)

            return api
        },
        // get(api, data) {
        //     return mixin.request('GET', api, data).then((o) => {

        //     }).catch((err) => {

        //     })
        // },
        // post(api, data) {
        //     return Vue.prototype.$api.request('POST', api, data)
        // },
        // put(api, data) {
        //     return Vue.prototype.$api.request('PUT', api, data)
        // },
        // delete(api, data) {
        //     return Vue.prototype.$api.request('DELETE', api, data)
        // },
    })
}

function on_http_bunlde(host, cb) {
    var has_error = false
    var etag = null

    var load = (ntag, template) => {
        console.log('load bundle')
        return request(host + '/.ssr/vue-ssr-server-bundle.json').then((res) => {
            cb(template, JSON.parse(res))
            etag = ntag
        })
    }

    var update = () => {
        request({
            uri: host + '/.ssr/template.html',
            headers: {
                'If-None-Match': etag,
            },
            resolveWithFullResponse: true,
        }).then((o) => {
            has_error = false
            if(o.headers.etag !== etag)
                return load(o.headers.etag, o.body)

            return etag
        }).catch((err) => {
            if(err.statusCode == 304)
                return true
            if(!has_error)
                console.error(err.message)

            has_error = true
        }).finally(() => setTimeout(update, 1000))
    }

    update()
}

function watch(ssr, host) {
    on_http_bunlde(host, (template, bundle) => {
        template = ssr.getTemplate(null, template)
        ssr.version = ssr.getVersion(template)

        ssr.renderer = createBundleRenderer(bundle, {
            //runInNewContext: false,
            template,
            //clientManifest,
        });

        ssr.caches = {}
        console.log('Bundle updated, version:', ssr.version)
    })
}

function clearCaches() {
    var from = ((new Date()).getTime()) - 300000
    for(var key in this.caches) {
        if(key.last_use < from)
            delete this.caches[key]
    }
}

// Setup vuejs server renderer
module.exports = function({ ssr_folder, http_bundle, watch_interval, api_server }) {
    var ssr = new SsrPlugin({
        sitemap: false,
        langRedirects: false,
        domain: '',
        minify: true
    })

    if(ssr_folder)
        ssr._setupRenderer(ssr_folder)
    else if(http_bundle)
        watch(ssr, http_bundle)

    setInterval(clearCaches.bind(ssr), watch_interval || 1500)

    // Return render function
    return function(context) {
        // Try getting from caches
        if(ssr.caches[context.url]) {
            var cache = ssr.caches[context.url]
            Object.assign(context, cache.ctx)
            cache.last_use = (new Date()).getTime()

            return new Promise((resolve) => {
                resolve(cache.html)
            })
        }

        // Generate html and save to caches
        context.$api = $api.bind(context, api_server)
        return ssr.renderer.renderToString(context).then((html) => {
            return minify(html, {
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: true,
                caseSensitive: true,
                minifyCSS: true,
                removeAttributeQuotes: true,
                removeOptionalTags: true,
                removeRedundantAttributes: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
                //removeComments: true,
            });
        }).then((html) => {
            ssr.caches[context.url] = {
                ctx: context,
                last_use: (new Date()).getTime(),
                html,
            }

            return html
        });
    }
}