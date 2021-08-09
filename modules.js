const http = require('http')

console.log(http);

// ----------------------------------------------
const url = require('url')
console.log(url);
console.log("-----------------------------------------------------------------------------------")
// ----------------------------------------------
const os = require('os');
const { Console } = require('console');
console.log(os.hostname())
console.log(os.uptime());
console.log(os.version());
console.log(os.platform());
console.log(os.arch());


// -----------------------------------------------
// const fs = require('fs')
// console.log(fs.open('myfirstserver.js'));
var name = "Aaryansh";
var noname = "akshat"
const server = http.createServer((req , res) => {
    

    console.log(req.method )

    // -----------------------------------
    path = req.url
   if(path == "/"){
    res.writeHead(300 , 'text/html')
    res.write(`<h1><i>this server is created by html n js</h1></i><br><h2> i am ${name} </h2> `)
    res.end();
   }
   else if(path =="/hello" && req.method == "POST"){
    res.writeHead(200 , 'text/html')
    res.write(`<h1><i>this server is created by html n js</h1></i><br><h2> i am ${noname} </h2> `)
    res.end();
   }
   else if(path =="/hellofrnd" && req.method == "DELETE"){
    res.writeHead(200 , 'text/html')
    res.write(`<h1><i>this server is for delete</h1></i><br><h2> i am ${noname} </h2> `)
    res.end();
   }
   else if(path =="/helloboi" && req.method == "PUT"){
    res.writeHead(400 , 'text/html')
    res.write(`<h1><i>put/h1></i><br><h2> i am ${noname} </h2> `)
    res.end();
   }
   else{
    res.writeHead(200 , 'text/html')
    res.write(`<h1><i>wrong path bruv</h1></i>`)
    res.end();
   }
//    Console.length(req)
})


server.listen(3000 , ()=>{
    console.log("hola");
})