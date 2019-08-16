const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
    dotenv.load()
}

const app = express()
if (process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
        res.append('X-XSS-Protection', '1; mode=block')
        res.append('X-Content-Type-Options', 'nosniff')
        res.append('X-Permitted-Cross-Domain-Policies', 'master-only')
        res.append('X-Frame-Options', 'SAMEORIGIN')
        res.append('Strict-Transport-Security', 'max-age=63072000; includeSubDomains')
        res.append(
            'Content-Security-Policy',
            "upgrade-insecure-requests; block-all-mixed-content; base-uri 'none'; form-action 'self'; frame-ancestors 'self';",
        )
        res.append('Referrer-Policy', 'strict-origin-when-cross-origin')
        res.append('X-Powered-By', 'A server')
        next()
    })

    app.use(express.static(path.join(__dirname, '/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(`${__dirname}/build/index.html`))
    })
}

const PORT = process.env.port || 8081

app.listen(PORT)
// , () => {
// console.log('port', PORT);
// });
