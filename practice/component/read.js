let read = require('fs')

read.readFile('cal.js','utf8',function(err,data){
    console.log(data)
})