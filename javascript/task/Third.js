//a
(function displayToConsoleWithDelay5000() {
  "use strict";

  let btn = document.querySelector("button");
  let timerId;
  let done = true;

  function print() {
    console.log("Hello world");
    done = true;
  }
  function waiter() {
    done = false;
    timerId = setTimeout(print, 5000);
  }
  function onClick() {
    if (done) {
      waiter();
    } 
    else {
      clearTimeout(timerId);
      waiter();
    }
  }

  btn.addEventListener("click", onClick);
})();

//б
(function displayToConsoleEvery3Seconds() {
  "use strict";

  let button = document.querySelector("button");
  let firstClick = true;
  let intervalId;

  function printToConsole() {
    console.log("You are welcome!");
  }

  function Onclick() {
    if (firstClick) {
      intervalId = setInterval(printToConsole, 3000);
      firstClick = false;
    } 
    else {
      clearInterval(intervalId);
      firstClick = true;
    }
  }

  button.addEventListener("click", Onclick);
})();

//в
(function displaySecondsBeforeStart() {
  "use strict";

  let button = document.querySelector("button");
  let firstClick = true;
  let timerId;
  let min = 1;
  let max = 4;

  function printSecondBeforeStart() {
    let seconds = Math.round(Math.random() * (max - min) + min);
    let ms = seconds * 1000;
    console.log(`Seconds - ${seconds}`);
    timerId = setTimeout(printSecondBeforeStart, ms);
  }

  function onClick() {
    if (firstClick) {
      firstClick = false;
      printSecondBeforeStart();
    } 
    else {
      clearTimeout(timerId);
      firstClick = true;
    }
  }

  button.addEventListener("click", onClick);
})();

//г
(function displayToConsoleAfterUserFinishInput() {
  "use strict";
  
  let input = document.querySelector("input");
  let timerId;

  function onStopTyping() {
    clearTimeout(timerId);
    timerId = setTimeout(printInputValue, 1000);
  }

  function printInputValue() {
    console.log(input.value);
  }

  input.addEventListener("keydown", onStopTyping);
})();
