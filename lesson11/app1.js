const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const color_logger = require('cli-color')
const webRouter = require('./routes/web')
const apiRouter = require('./routes/api')

// const p = color_logger('app0.js')

const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use('/api', apiRouter)
app.use('/', webRouter)

app.listen(port, ()=>{
   console.log(color_logger.magenta(`Start on port: ${port}`))
})