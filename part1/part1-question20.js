function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
function printSecond(printTime){
    setInterval(printTime, 1000);
}

printSecond(printTime);

