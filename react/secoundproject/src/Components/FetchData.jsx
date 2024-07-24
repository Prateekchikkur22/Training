import { useEffect, useState } from "react";

function FetchData() {
    const [data,setData]=useState(null);
    const getData=async()=>{
        try {
            const resp=await fetch('');
            const json=await resp.json();
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{getData()},[])
    return ( 
        <div>
         {data ?<h3>{data.title}</h3> :<p>loading</p>}
        </div>
     );
}

export default FetchData;