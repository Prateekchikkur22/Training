async function fetchdata(){
    try {
        const resp= await fetch('https://mindsprint.darwinbox.in/attendance/index/index/view/list');
        const json= await resp.json();
        console.log(json)
    } catch (error) {
        console.log("error")
    }
}