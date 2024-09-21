const form = document.getElementById("TODO_form")
const list = document.querySelector(".list")
let index = 1

let taskArray = [];
let completedTask = [];

form.addEventListener('submit', event => {
    event.preventDefault()
    
    let newTask = document.getElementById(`userInput`).value.trim()

    if(newTask){
        userInputClarity(newTask)
        appendArray(newTask)

        displayArray()
        deleteTask()

        document.getElementById("userInput").value = ""
    }else{
        alert(`Text cannot be empty`)
    }
})

function userInputClarity(newTask){
    newTask = newTask.slice(0,1).toUpperCase() + newTask.slice(1).toLowerCase()
    return newTask
}

function appendArray(newTask){
    let tasks = userInputClarity(newTask)
    taskArray.unshift(tasks)
}

function displayArray(){

    let displayText = ''

    taskArray.forEach((task) => {
        
        displayText += 
        `
            <li class="item">
                    <input class="checkBox" id="${task}" type="checkbox">
                    <label class="check-btn" for="${task}">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="transparent"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                    </label>
                

                <label for="${task}" class="item-text">${task}</label>

                <button class="deleteBtn" data-task-id="${task}"id="delete_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>
            </li>
        `

        list.innerHTML = displayText
    })
}

function deleteTask(){
    const deleteBtns = document.querySelectorAll('.deleteBtn')  

    deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener('click', event =>{

            // Getting uniqueDataID from button
            let taskId = deleteBtn.dataset.taskId

            taskArray = taskArray.filter((task) => task !== taskId);

            let listItem = deleteBtn.closest('.item'); // Finds the closest parent <li> with the class "item"
            listItem.remove();
        })
    })
}
