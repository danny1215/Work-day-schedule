console.log("am i linked");

// display of time using moment js using time interval in one full day
//  (1 day = 8.64e+7 milliseconds)

var currentDayNew =document.getElementById("currentDay");
setInterval(function(){
    var now = moment();
    var visibleTime = now.format('dddd,MMMM,Do');
    
   
  currentDayNew.textContent = visibleTime;

},8.64e+7)
