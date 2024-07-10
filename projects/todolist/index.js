
class todoTask {
    constructor(taaskname, duedate) {
        this.taaskname = taaskname;
        this.duedate = duedate;
    }

}
const todoList=[];
let displaylist=document.querySelector('#displayList')
  

function addTask(){
    let edittext=document.querySelector('#todoinput');
    let editdate=document.querySelector('#dateselector');

    let temptask= new todoTask(edittext.value,editdate.value)
    todoList.push(temptask);
    console.log(todoList)
    renderToDoList()

    
}
function renderToDoList(){
    let htmldiv= document.querySelector("#displayList")
    htmldiv.innerHTML=''
   todoList.forEach((todo)=>{
       let taskItem = document.createElement('div');
       taskItem.textContent = `Task: ${todo.taaskname}, Due Date: ${todo.duedate}`;
       htmldiv.appendChild(taskItem);

    })
    
    
    
}