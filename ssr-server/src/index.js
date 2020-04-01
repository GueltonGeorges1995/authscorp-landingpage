const Renderer = require('./renderer')
const render   = Renderer({
    // ssr_folder: path.resolve(process.cwd(), './dist/.ssr'),
    http_bundle: 'http://10.3.177.83',
    api_server:  'http://10.3.177.83'
})

// async function main() {
//     const context = { url: '/docs/getting-started/how-it-works' }
//     const html = await render(context)

//     console.log(html.indexOf('est first tutorial'))
// }

// main().catch(console.error)

// Start http server
require('http').createServer((req, res) => {
    console.log(req.url)

    const context = { url: req.url }
    render(context).then((html) => {
        res.end(html)
    }).catch((err) => {
        res.writeHead(500)
        res.end(JSON.stringify(err))
    });

}).listen("3030")

console.log('Started http server on port 3030')