const http = require('http');
const fs = require('fs');
const port = 8000;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    let fileName = '';
    console.log(req.url);
    switch(req.url){
        case '/':
            fileName = './index.html';
            break;
        case '/about':
            fileName = './about.html';
            break;
        case '/blog':
            fileName = './blog.html';
            break;
        case '/contact':
            fileName = './contact.html';
            break;
        case '/team':
            fileName = './team.html'
            break;
        default:
            fileName = './404.html';
            break;
    }

    fs.readFile(fileName,(err,data)=>err?console.log(err):res.end(data));
}).listen(port,(err)=>err?console.log(err):console.log("server is running successfully"))


