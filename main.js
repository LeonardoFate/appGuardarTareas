let idCounter =0;
const input = document.querySelector('input[type="text"]');

userInput.addEventListener('submit',(event)=>{
    event.preventDefault();
    addTask();
});

let addTask = ()=> {
idCounter++;

let newvalue = input.value;
    list.innerHTML += `
    <div class="task-container" id="${idCounter}">
    <label>
        <input type="checkbox"> 
        ${newvalue}</label>
        <img src="./img/trash-can.png" class="closeBtn">
</div>`

input.value = '';

updateStats();
};

list.addEventListener('click',(event)=>{
    if(event.srcElement.nodeName == 'INPUT'){
        updateStats();
    } else if(event.srcElement.nodeName == 'IMG'){
        deletTask(event.srcElement.parentNode.id);
        /*console.log(event.srcElement.parentNode.id);*/
    };
    /*console.log(event.srcElement.nodeName);*/
})

let updateStats = ()=>{
    let element =list.querySelectorAll('div');
    let checkbox =list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `<p>tareas pendientes: ${element.length} completadas: ${checkbox.length} </p>`
}

let deletTask =(id)=>{
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
};
