const express = require('express');
const mongoose = require('mongoose')
const url =  'mongodb://localhost/VasuDBex'

const app = express();

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () =>{
    console.log('connected..')
})
const dataRouter = require('./routers/data')
app.use('/data',dataRouter)
app.listen(8080, () =>{
    console.log('server started')
})