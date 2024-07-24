import { useEffect, useState } from "react";

function Comments({postid}) {
    const [data,Setdata]=useState([])
    const getData=async()=>{
        try {
            const resp=await fetch('https://jsonplaceholder.typicode.com/comments?postId='+postid);
            const json=await resp.json();
            Setdata(json)
        } catch (error) {
            console.log(error);
        }
    
    }
    useEffect(()=>{getData()},[])

    return ( 
       <>
       {
        data.map(item =>(
            <div key={item.id}>
             <h5>user:{item.name}</h5>
             <p>Message:{item.body}</p>
            </div>
        ))
       }
       </>
     );
}

export default Comments;