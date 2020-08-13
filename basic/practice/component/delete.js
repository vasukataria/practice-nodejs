let fs = require('fs')
fs.unlink('new.js',function(err){
    console.log("file deleted")
})