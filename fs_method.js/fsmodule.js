// READFILE
var fs = require('fs')
fs.readFile('textfile.txt',"utf8",(err,data)=>{
    if(err) throw err;
    console.log(data)
})

// APPEND
var fs = require('fs')
fs.appendFile("textfile.txt" , "i am appended", (err) =>{
    if(err) throw err;
    else console.log("hello i am the appended file");
})

// WRITEFILE
var fs = require('fs')
fs.writeFile("textfile.txt","HELLO this is writefile",(err,data)=>{
    if(err) throw err;
    else console.log("file saved")
})
// CREATE
var fs = require('fs')
fs.open("new.txt" , "w" ,(err)=>{
    if(err) throw err;
    else console.log("file is created");  
})

//DELETE
var fs = require('fs')
fs.unlink("new.txt" , (err) =>{
    if(err) throw err;
    else console.log("i am new.txt and i am deleted");
})

