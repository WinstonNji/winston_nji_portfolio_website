function Time(){

    const now = new Date ();
    let hour = now.getHours().toString().padStart(2,0)
    const timeofDay = hour >= 12 ? "PM" : "AM"
    const minute = now.getMinutes().toString().padStart(2,0)
    const seconds = now.getSeconds().toString().padStart(2,0)
    let timeStamp = `${hour}:${minute}:${seconds} ${timeofDay}`
    document.getElementById("Clock").textContent = timeStamp

}

Time()
setInterval(Time,1000)

console.log(Date.now())