console.log("am i linked");

// display of time using moment js using time interval.

var currentDayNew =document.getElementById("currentDay");
setInterval(function(){
    var now = moment();
    var visibleTime = now.format('dddd,MMMM,Do');
    
   
  currentDayNew.textContent = visibleTime;

},1000)
