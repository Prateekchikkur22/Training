const express=require('express');
const app=express();
app.use(express.json());
let arry=[];

app.get('/api/user',(req,res)=>{
    // res.status(200).send('hello from prateek')
    res.send(arry);
})
app.post('/api/user',(req,res)=>{
    console.log(req.body);
    arry.push(req.body);
    res.status(200).send('hello from prateek')
})
app.get('/api/user/:id',(req,res)=>{
    const id=req.params.id;
    let find=arry.find(val=>val.id==id);
   if(find){
    res.send(find)
   }else{
    res.send('not successfully')
   }
})
app.delete('/api/user/:id',(req,res)=>{
    const id=req.params.id;
    arry=arry.filter(val=>val.id=!id);
    res.status(200).send('hello from prateek')
})
app.put('/api/user',(req,res)=>{
    res.status(200).send('hello from prateek')
})

app.listen(5001,()=> console.log('server started'))