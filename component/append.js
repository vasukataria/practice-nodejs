let write =require('fs')

write.appendFile('cal.js','console.log("done")',function(err){
    console.log("new file")
})