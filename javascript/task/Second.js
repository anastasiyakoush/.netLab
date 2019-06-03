(function display() {
  "use strict";

  let Robot = function(name) {
    this.name = name;
  };
  function add(op1, op2) {
    this.name = this.name || "Human";
    return `${this.name} can count to ${op1 + op2}`;
  }
  let voltron = new Robot("Voltron");

  (function displaySum() {
    "use strict";

    let result = add(0, 1);
    console.log("1 : " + result);
  })();

  (function displaySumUsingCall() {
    "use strict";

    let result = add.call(voltron, 1, 2);
    console.log("2 : " + result);
  })();

  (function displaySumUsingApply() {
    "use strict";

    let result = add.apply(voltron, [20, 30]);
    console.log("3 : " + result);
  })();

  (function displayConcatenationUsingBind() {
    "use strict";
    
    let result = add.bind(voltron, "drinking", "beer");
    console.log("4 : " + result);
  })();

  let showName = function() {
    let self = this;
    //1
    setTimeout(() => console.log(self.name), 1000);
    //2
    setTimeout(() => console.log(this.name), 1000);
    //3
    function display() {
      console.log(this.name);
    }
    setTimeout(() => display.call(this), 1000);
    //4
    setTimeout(() => display.apply(this), 1000);
    //5
    let bindedDisplay = display.bind(this);
    setTimeout(() => bindedDisplay(), 1000);
  }.bind(voltron);
  showName();
})();
