//a
(function displayWithDelay() {
  "use strict";

  let timerId;

  function print() {
    console.log("Hello world");
  }
  function waiter() {    
    clearTimeout(timerId);
    timerId = setTimeout(print, 5000);
  }
  function onClick() {
    waiter();
  }
  document.getElementById("button").addEventListener("click", onClick);
})();
//б
(function displayWithInterval() {
  "use strict";

  let isInitial = true;
  let intervalId;

  function printToConsole() {
    console.log("You are welcome!");
  }
  function onClick() {
    if (isInitial) {
      intervalId = setInterval(printToConsole, 3000);
      isInitial = false;
    } else {
      clearInterval(intervalId);
      isInitial = true;
    }
  }
  document.getElementById("button").addEventListener("click", onClick);
})();

//в
(function displayBefore() {
  "use strict";

  let isInitial = true;
  let timerId;
  let min = 1;
  let max = 4;

  function print() {
    let seconds = Math.round(Math.random() * (max - min) + min);
    let ms = seconds * 1000;
    console.log(`Seconds - ${seconds}`);
    timerId = setTimeout(print, ms);
  }
  function onClick() {
    if (isInitial) {
      isInitial = false;
      print();
    } else {
      clearTimeout(timerId);
      isInitial = true;
    }
  }
  document.getElementById("button").addEventListener("click", onClick);
})();

//г
(function displayAfter() {
  "use strict";
  
  let timerId;

  function onStopTyping() {
    clearTimeout(timerId);
    timerId = setTimeout(printInputValue, 1000);s
  }
  function printInputValue() {
    console.log(input.value);
  }
  document.getElementById("input").addEventListener("keydown", onStopTyping);
})();
