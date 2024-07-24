import { useEffect, useState } from "react";

function WidthUseCase() {
    const [width,setWidth]=useState(window.innerWidth)

    useEffect(()=>{
        const handleResize=()=>setWidth(window.innerWidth);
        window.addEventListener('resize',handleResize)
        return(()=>{
            window.removeEventListener('resize',handleResize);
        })
    })
    return ( 
        <div>
           <h1>window width:{width}</h1>
        </div>
     );
}

export default WidthUseCase;