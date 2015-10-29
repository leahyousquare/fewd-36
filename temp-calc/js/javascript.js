
var tempF = document.querySelector(".temp-f");
var tempC = document.querySelector(".temp-c");
var startOver = document.querySelector(".start-again");

// event handler function
tempF.addEventListener('keyup', calcFtoC);
tempC.addEventListener('keyup', calcCtoF);
startOver.addEventListener('click', redo);

function calcFtoC(event) {
  if (tempF.value.length > 0) {
    tempC.value = fToC(tempF.value)
  } else {
    tempC.value = '';
  }
}

function calcCtoF(event) {
  if (tempC.value.length > 0) {
    tempF.value = cToF(tempC.value)
  } else {
    tempF.value = '';
  }
}

 function cToF(tempC) {
        var tempF = tempC * (9/5) + 32;
        return tempF; 
      }
function fToC(tempF) {
          var tempC = (tempF-32) * (5/9);
          return tempC;
      } 

function redo(event) {
  tempF.value = '';
  tempC.value ='';

  }
