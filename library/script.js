console.log("am i linked");

// display of time using moment js using time interval.

// var currentDayNew =document.getElementById("currentDay");
// setInterval(function(){
//     var now = moment();
//     var visibleTime = now.format('dddd,MMMM,Do');
    
   
//   currentDayNew.textContent = visibleTime;
  
// },1000)
// // var now = moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log(currentDayNew);

var toDay = moment().format('dddd,MMMM,Do');

$("#currentDay").append(toDay);
// changing the current time to one digit.
var now =  parseInt(moment().format('HH'));
console.log(now);

// creating a variable for current time



$("input").each( function () { 
     var scheduleTime = parseInt($(this).attr("data-hour"));
     if (scheduleTime < now){
         $(this).addClass("past");
     }
      else if (scheduleTime > now) {
         $(this).addClass("future")
     }
      else $(this).addClass("present")
     
})
