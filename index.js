let breakdDecrementButton = document.getElementById("break-decrement");
let breakdIncrementButton = document.getElementById("break-increment");
let sessiondDecrementButton = document.getElementById("session-decrement");
let sessiondIncrementButton = document.getElementById("session-increment");
let startStopButton = document.getElementById("start_stop");
let resetButton = document.getElementById("reset");

let timeLeft = document.getElementById("time-left")

let timer;
let timerStatus = "begin";

function breakPlusElement() {
  let breakLength = document.getElementById('break-length');
 
      breakLength.innerText = parseFloat(breakLength.innerText) + 1;
  }

function breakMinusElement() {
  let breakLength = document.getElementById('break-length');
    if(parseFloat(breakLength.innerText) > 0){
  breakLength.innerText = parseFloat(breakLength.innerText) - 1;
    }

}

function sessionPlusElement () {
  let sessionLength = document.getElementById('session-length');
      sessionLength.innerText = parseFloat(sessionLength.innerText) + 1;

}

function sessionMinusElement () {
  let sessionLength = document.getElementById('session-length');
  if(parseFloat(sessionLength.innerText) > 0){
  sessionLength.innerText = parseFloat(sessionLength.innerText) - 1;
    
  
  }
}


startStopButton.addEventListener('click', () =>{
  if(timerStatus === "begin" || timerStatus === "stopped"){
    
  console.log('start the timer')
    timerStatus = "counting";
    timer = setInterval(() =>{timeLeft.innerText = decrementTime(timeLeft.innerText);
}, 1000);
      
  } else if (timerStatus === "counting"){
    console.log("stop the timer")
    timerStatus = "stopped";
    clearInterval(timer);
  } 
})

resetButton.addEventListener("click", () =>{
  console.log('reset btn clicked')
  clearInterval(timer);
  timeLeft.innerText = "25:00"
});

function decrementTime(timeString) {
  let timeDisplay = timeString.split(":")
  let minutesDisplay = parseInt(timeDisplay[0]);
  let secondDisplay = parseInt(timeDisplay[1]);
  
  secondDisplay -= 1;
  
  if(secondDisplay === -1){
    secondDisplay = 59;
    minutesDisplay -= 1;
  }
  
  if(secondDisplay <= 9 ){
    secondDisplay = "0" + secondDisplay
  }
  return minutesDisplay + ":" + secondDisplay;
  
}

