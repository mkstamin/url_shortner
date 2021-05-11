const path = require('path')
const express = require('express')
const createUrlRouter = require('./routers/createUrlRouters')

const app = express();

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json({limit: '10kb'}))
app.use(express.urlencoded({extended:false}))

app.use('/', createUrlRouter)

app.all('*', (req, res, next) => {
    next(`Can not find ${req.originalUrl} on this server`);
});

module.exports = app