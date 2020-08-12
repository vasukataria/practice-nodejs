const express = require('express');
const work = require('express');

const app  = work();

app.get('/',function(req,res){
    res.send('working on express')
})

app.get('/next', function(req,res){
    const id = req.query.id


    res.send('vases ' + id)
})
app.get('/next/:id',function(req,res){
    const id = req.params.id
    if(id == 10){
        res.send("hello world")
    }
    else if(id == 20){
        res.send("hello");
    }
    else{
        res.send("nothing " + id)
    }
})

app.listen(8080, function(req,res){
    console.log("running....")
});