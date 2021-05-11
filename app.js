const path = require('path')
const express = require('express')

const app = express();

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json({limit: '10kb'}))
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.status(200).json({
        status:'success',
        message: 'Hello from home'
    })
})

module.exports = app