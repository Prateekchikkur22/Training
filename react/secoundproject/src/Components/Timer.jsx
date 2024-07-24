import { useEffect, useState } from "react";

function Timer() {
    const [sec,setsec]=useState(0);

    useEffect(()=>
    {
        const interval=setInterval(()=>{
            setsec(prevTime=>prevTime+1)
 
 
        },1000);
        return ()=>clearInterval(interval)
    });
    
    return ( 
        <div>
            <h4>Secound:{sec}</h4>
        </div>
     );
}

export default Timer;