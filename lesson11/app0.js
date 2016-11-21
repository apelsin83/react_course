const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const color_logger = require('cli-color')

// const p = color_logger('app0.js')

const app = express()
const port = process.env.PORT || 3000
logger = morgan('tiny')

function log(req,res,next){
    console.log(color_logger.magenta(`url: ${req.url}`))
    next()
}

app.use(logger)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.send('Hello world')
})

app.get('/json', (req,res)=>{
    res.json({out:'Hello world'})
})

app.get('/html', (req,res)=>{
    let data = "fucking"
    res.send(`<h1>Hello ${data} world</h1>`)
})

app.get('/param/:name', (req,res)=>{
    res.send(`<h1>Hello world, ${req.params.name}</h1>`)
})

app.post('/shows', (req,res)=>{
    res.send(`<h1>Hello world, ${req.body.showName}</h1>`)
})


app.listen(port, ()=>{
   console.log(color_logger.magenta(`Start on port: ${port}`))
})