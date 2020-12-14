console.log("am i linked");

var toDay = moment().format('dddd,MMMM,Do');

$("#currentDay").append(toDay);
// changing the current time to one digit.
var now =  parseInt(moment().format('HH'));
    console.log(now);

// creating a variable for input text tags

    var time09Am = $("#hour9Am");
    var time10Am = $("#hour10Am");
    var time11Am = $("#hour11Am");
    var time12Pm = $("#hour12Pm");
    var time01Pm = $("#hour1Pm");
    var time02Pm = $("#hour2Pm");
    var time03Pm = $("#hour3Pm");
    var time04Pm = $("#hour4Pm");
    var time05Pm = $("#hour5Pm");

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
//  storing the input text to local storage.
$("button").on("click", function () { 
    
    localStorage.setItem("9Am", (time09Am.val()))
    localStorage.setItem("10Am", (time10Am.val()))
    localStorage.setItem("11Am", (time11Am.val()))
    localStorage.setItem("12Am", (time12Pm.val()))
    localStorage.setItem("13Pm", (time01Pm.val()))
    localStorage.setItem("14Pm", (time02Pm.val()))
    localStorage.setItem("15Pm", (time03Pm.val()))
    localStorage.setItem("16Pm", (time04Pm.val()))
    localStorage.setItem("17Pm", (time05Pm.val()))
        

});
// get the stored text input from a user and texting it back to the screen even though the page is refreshed.

$("#hour9Am").append(localStorage.getItem("9Am"));
$("#hour10Am").append(localStorage.getItem("10Am"));
$("#hour11Am").append(localStorage.getItem("11Am"));
$("#hour12Pm").append(localStorage.getItem("12Am"));
$("#hour1Pm").append(localStorage.getItem("13Pm"));
$("#hour2Pm").append(localStorage.getItem("14Pm"));
$("#hour3Pm").append(localStorage.getItem("15Pm"));
$("#hour4Pm").append(localStorage.getItem("16Pm"));
$("#hour5Pm").append(localStorage.getItem("17Pm"));
