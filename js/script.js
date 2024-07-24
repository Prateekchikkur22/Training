let todos=[]
document.getElementById('btn').addEventListener('click',function (){
    const taskInput=document.getElementById('task');
    
    todos.push({id:DataTransfer.now(),task:taskInput.value,completed:false})
    taskInput.value='';
    console.log('Task Added',todos)
    displayData();
 
   
})
function displayData(){
    const tasklist=documen.getElementById('tasks')
    if(todos.lenght==0){
        tasklist.innerHTML=`<li class ='list-group-item'>List is empty</li>`
    }else{
        let html=''
        for(let t of todos){
            html+=`<li class='list-group-item'>'$(t) </li><button class='btn btn-danger'></button> `
        }
        tasklist.innerHTML=html;
    }
}
function deleteTask(task){
   for(let i=0;i<todos.length;i++){
    if(todos[i]==task){
        foundIndex=i;
        break;
    }
 
   }
   if(foundIndex!=undefined){
    todos.splice(foundIndex,1);
    alert('task deleted')
    displayData();
 
   }
 
}
displayData()
