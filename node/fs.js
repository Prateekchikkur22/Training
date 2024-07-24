const fs=require('fs');

const message='Test from myt another file'

// fs.writeFile(`./files/hello.txt`,message,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Data written successfully');
//     }
// // })
// fs.appendFile(`./files/hello.txt`,message,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Data written successfully');
//     }
// })
fs.mkdir('./hello',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(' successfully');
    }
})