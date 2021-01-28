/*
  WRITE YOUR SOLUTION HERE
*/

function Clock(){
  const dClock = document.querySelector("#clock");

  function getInfo() {
    let hour = new Date();
    let minutes = new Date();
    let seconds = new Date();
    
    hour = hour.getHours(); 
    minutes = minutes.getMinutes(); 
    seconds = seconds.getSeconds(); 
    return `${hour}:${minutes}:${seconds}`;
  };


  setInterval(function(){
    console.log(getInfo()); 
  },
   1000);

};


Clock();