const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    res.status(200).send('hello from prateek')
})
app.get('/news',(req,ress)=>{
res.status(200).send({message:'hello',news:'system are not working'})
})

app.listen(5001,()=> console.log('server started'))