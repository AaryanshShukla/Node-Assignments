const http = require('http')
const url = require('url')

const sserver = http.createServer((req,res) => {
    res.writeHead(400 , "text/plain")
    res.write("hello ji")
    res.end();
})

server.listen(7000 , () =>{
    const a = 5;
    const b = 19;
    console.log(a+b , "happy buthfsy")
})