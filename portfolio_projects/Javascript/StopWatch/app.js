const Display = document.getElementById("Display");
const startButton = document.getElementById("Start");
let startTime = 0;
let elapsedTime = 0;


function Start(){
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update,10)
}

function update(){
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minute = Math.floor(elapsedTime / (1000 * 60) %60 );
    let seconds = Math.floor((elapsedTime / 1000) % 60)
    let milliseconds = Math.floor((elapsedTime % 1000 / 10));

   hours = String(hours).padStart(2,0);
   minute = String(minute).padStart(2,0);
   seconds = String(seconds).padStart(2,0);
   milliseconds = String(milliseconds).padStart(2,0);

    let timeStamp = `${hours}: ${minute}: ${seconds}: ${milliseconds}`
   
    Display.textContent = timeStamp
}

function Stop(){
    clearInterval(timer)
}

function Reset(){
    clearInterval(timer)
    startTime = 0;
    elapsedTime = 0;
    Display.textContent = "00:00:00:00"
}



// function sayHello (callback,x,y){
//     let result = x+y
//     callback(result)
// }

// function Display(result){
//     console.log(result)
// }

// sayHello(Display,5,10)

// function func1 (callback){
//     console.log("Task 1")
//     callback()
// }

// function func2(){
//     console.log( "Task 2")
//     console.log( "Task 3")
//     console.log( "Task 4")
// }

// func1(func2)

    



       
