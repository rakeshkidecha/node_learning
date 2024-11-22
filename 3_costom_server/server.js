const http = require('http')
const fs = require('fs')
const port = 9000;

const server = http.createServer((req,res)=>{
    fs.readFile('./index.html',(err,data)=>err?console.log(err):res.end(data))
}).listen(port,err=>err?console.log(err):console.log("Server start successfully on port: "+port))