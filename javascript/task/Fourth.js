//a
(function displayHiWithDelay() {
  "use strict";

  function delay(duration) {
    return new Promise(resolve => {
      setTimeout(resolve, duration);
    });
  }
  function logHi() {
    console.log("hi");
  }
  delay(2000).then(logHi);
})();
//b
(function promiseChaining() {
  "use strict";

  return new Promise(resolve => {
    setTimeout(resolve, 3000, 10);
  })
    .then(result => {
      console.log(result);
      return result + 2;
    })
    .then(result => {
      console.log(result);
      return new Promise(resolve => {
        setTimeout(resolve, 2000, result + 2);
      });
    })
    .then(result => {
      console.log(result);
    });
})();
//в
(function returnPromise() {
  "use strict";

  let min = 1;
  let max = 4;
  let time = Math.round(Math.random() * (max - min) + 1);

  return new Promise((resolve, reject) =>
    time <= 2 ? resolve(time) : reject(time)
  )
    .then(result => console.log(result))
    .catch(error => console.error(error));
})();
//г
(function executeRandomNumberOfFunction() {
  "use strict";

  function generateRandomValue(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  function createFunctionArray() {
    let numberOfFunctions = generateRandomValue(1, 10);
    return new Array(numberOfFunctions);
  }
  function print(functionNumber) {
    let randomTime = generateRandomValue(1, 10);

    return new Promise(resolve => {
      setTimeout(
        () => {
          console.log(
            `My number - ${functionNumber}; I was printed after ${randomTime} seconds`
          );
          resolve();
        },
        randomTime * 1000,
        functionNumber
      );
    });
  }
  let arrayOfFunctions = createFunctionArray();
  arrayOfFunctions.fill(0, 0, arrayOfFunctions.length);
  let start = performance.now();

  Promise.all(arrayOfFunctions.map((x, i) => print(i))).then(
    functionsAmount => {
      let end = performance.now();
      console.log(`All functions - ${functionsAmount.length} successfully finished; Total time - ${Math.round((end - start) / 1000)} seconds`);
    }
  );
})();
