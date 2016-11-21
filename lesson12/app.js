const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const color_logger = require('cli-color')
const exp_hbs      = require('express-handlebars')
const USERS_MOCK = require('./data/mocks/MOCK_USERS.json')
// const p = color_logger('app0.js')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))


const hbs_options = {
    extname    : '.hbs',
    layoutsDir     : 'views/layouts/',
    partialsDir     : 'views/partials/',
    defaultLayout    : 'main'
}
app.engine('hbs', exp_hbs(hbs_options));
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
  res.render('homepage')
})

app.get('/users', (req, res) => {
  res.render('users_list',{users_arr:USERS_MOCK.users})
})

app.listen(port, ()=>{
   console.log(color_logger.magenta(`Start on port: ${port}`))
})