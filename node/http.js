const http=require('http')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-Head":"text/html"})
res.write(`<h1>Hello people</h1>`);
res.end();
})

server.listen(5000,()=>console.log('server started'));