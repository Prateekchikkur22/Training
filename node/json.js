const http=require('http');
const fs=require('fs');
const product=require('./product.json')
const server=http.createServer((req,res)=>{
if (req.url == '/product'){
    res.write(json.strringfy(product));
    res.end();
}else if(req.url){

}
})