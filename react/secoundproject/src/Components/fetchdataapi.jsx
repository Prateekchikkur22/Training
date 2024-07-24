import { useEffect, useState } from "react";
import Comments from "./Comments";

function FetchData() {
    const [data,Setdata]=useState([])

    const getData=async()=>{
        try {
            const resp=await fetch('https://jsonplaceholder.typicode.com/posts');
            const json=await resp.json();
            Setdata(json)
        } catch (error) {
            console.log(error);
        }
    
    }
    useEffect(()=>{getData()},[])
    return ( 
        <div>
        
        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <Comments postid={item.id}/>
            <hr/>
         </div>
        ))
        }
    
        </div>
     );
}

export default FetchData;