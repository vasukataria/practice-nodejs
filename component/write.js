let write =require('fs')

write.writeFile('new.js','console.log("done")',function(err){
    console.log("new file")
})