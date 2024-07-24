const fs=require('fs');




function readfile(path){
    fs.access(path,(err)=>{
        if(err){
            console.log('file not presnt');
        }else{
            fs.readFile(path,(err,data)=>{
                if(err){
                    console.log("error");
                }else{
                console.log(data.toString());
                }
            })
        }
    })
}
readfile('./hello/text.txt');

function writefile(path,message){
    fs.access(path,(err)=>{
        if(err){
            fs.writeFile(path,message,(err)=>{
                if(err){
                    console.log("error");
                }else{
                console.log('successfull');
                } 
            })
        }else{
            fs.unlink(path,(err)=>{
                if(err){
                    console.log('not able to delete');
                }else{
                    fs.writeFile(path,message,(err)=>{
                        if(err){
                            console.log("error");
                        }else{
                        console.log('successfull');
                        } 
                    })  
                }
            })
        }
    })
}

writefile('./files/hello.txt','hi i am the god')