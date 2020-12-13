console.log("am i linked");

var toDay = moment().format('dddd,MMMM,Do');

$("#currentDay").append(toDay);
// changing the current time to one digit.
var now =  parseInt(moment().format('HH'));
    console.log(now);

// creating a variable for current time

var time9
$("input").each( function () { 
     var scheduleTime = parseInt($(this).attr("data-hour"));
        
     if (scheduleTime < now){
         $(this).addClass("past");
       
     }
     if (scheduleTime > now) {
         $(this).addClass("future")
     
     }
      if  (scheduleTime === now) {
          $(this).addClass("present")
    
      }
});
