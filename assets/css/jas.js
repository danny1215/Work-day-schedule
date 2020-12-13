const colorcode = document.getElementsByClassName("colorcode");//<- switched to get elements with class corresponding to the given html
let currentHour = Date.now().getHours();//get current time hour

colorcode.forEach(function(colorcodedDiv){//just a syntax I use
    let colorcodeHour = parseInt(colorcodedDiv.id);
  if (colorcodeHour) {
    if (currentHour === colorcodeHour) {
      setColor(colorcodedDiv, "Red");//switched to reference the iterated element
    } else if ((currentHour < colorcodeHour) && (currentHour > colorcodeHour - 6)) {
      setColor(colorcodedDiv, "Green");
    } else if ((currentHour > colorcodeHour) && (currentHour < colorcodeHour + 6)) {
      setColor(colorcodedDiv, "LightGrey");
    } else {
      setColor(colorcodedDiv, "White");
    }
  }
});
function setColor(element, color) {
    element.style.backgroundColor = color;
}//added curly bracket since it was missing