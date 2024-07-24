import { useEffect } from "react";

function Welcome() {
    useEffect(()=>{
        console.log('components Monted');
        return(()=>{
            console.log('component will Unmount');
        })
    })
    return ( 
        <div>
            <h2>Welcome comopnents</h2>
        </div>
     );
}

export default Welcome;