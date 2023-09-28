const inputVal = document.getElementsByClassName('inputVal') [0]; //input 

const addTaskBtn = document.getElementsByClassName('btn') [0]; //btn 


addTaskBtn.addEventListener('click', function(){ 
 
if(inputVal.value.trim()!=0){
      let localItems = JSON.parse( localStorage.getItem('localItem'))
   if(localItems === null){
        taskList = [];

   }else{
       taskList = localItems;
   }
   taskList.push(inputVal.value)
   localStorage.setItem('localItem', JSON.stringify(taskList)); //in localStorage
}

   showItem()
   
})


function showItem(){
   let localItems = JSON.parse( localStorage.getItem('localItem'))
   if(localItems === null){
        taskList = []
   }else{
       taskList = localItems;
   }


let html = '';
let itemShow = document.querySelector('.todoLists');  //show in browser
taskList.forEach((data, index )=> {
   


   html += `
   <div class="todoList">
   <p class="pText">${data}</p>
   <button class="deleteTask" onClick="deleteItem(${index})">-</button> </div>` //delete btn use and pass id
})
itemShow.innerHTML = html;
inputVal.value=""; //clear input after use text
}
showItem()

// delete function
function deleteItem(index){
    JSON.parse( localStorage.getItem('localItem'))
   taskList.splice(index, 1)
   localStorage.setItem('localItem', JSON.stringify(taskList));
   showItem()
}
