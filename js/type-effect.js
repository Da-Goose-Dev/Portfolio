// variables targeting the elements to animate
const text = document.querySelector(".ani");
const mainHeading = document.querySelector(".main-heading");
const subHeading = document.querySelector(".sub-heading");
const scrlDown = document.querySelector(".scrl-down");

//Retrieving the plain text out of the parent element
const strHeadMain = mainHeading.textContent;
const strHeadSub = subHeading.textContent;
const strScrlDown = scrlDown.textContent;

//converting the captures strings into arrays 
const splitMain = strHeadMain.split("");
const splitSub = strHeadSub.split("");
const splitScroll = strScrlDown.split("");






// the function takes an array and element as arguments and cycles through each letter in the span to
function spanWrap(splitText, text) {
  text.textContent = "";
  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span class='letter'>" + splitText[i] + "</span>";
  }
}



//wraps all the individual characters in spans
spanWrap(splitMain, mainHeading);
spanWrap(splitSub, subHeading);
spanWrap(splitScroll, scrlDown);




//creating the interval
let char = 0;
let timer = setInterval(onTick, 100);
//serves and a stopper for the on tick function - is the concatenated array of all characters to animate
const total = splitMain + splitSub + splitScroll;


//selects each span and applies the fade class to each one with a delay of 50ms
function onTick() {
    const span = document.querySelectorAll(".letter")[char];
    //checks if span is defined before proceeding 
    if (span) { span.classList.add("fade");
    char++;
    // console.log(span);
    // console.log(span.classList);
    }
  //once the class has been applied to the whole string stop
  if (char === total.length) {
    complete();
    return;
  }
}



//stops the resets the timer and clears the interval
function complete() {
  clearInterval(timer);
  timer = null;
}




//TODO
//hide and after a delay reveal the line and 
// function supportAnime() { 


// }