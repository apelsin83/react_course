const express = require('express')
const morgan = require('morgan')
const color_logger = require('cli-color')
const router = express.Router()


const paymentVerify = (req, res, next)=> {
    console.log(color_logger.green(`Check payed`))
    next()
}

const myLog = (req, res, next)=> {
    console.log(color_logger.red(`REquest was called  ${req.url}`))
    next()
}

router.get('/', (req, res)=>{
    res.json({msg:'main route'})
})

router.get('/pop', (req, res)=>{
    res.json({msg:'pop route'})
})

router.get('/payedOnly', myLog, paymentVerify, (req, res)=>{
    res.json({msg:'payed route'})
})

module.exports = router