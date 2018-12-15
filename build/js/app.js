'use strict';

//the AnotherTest Module is a namespaced function to what feature of the site this function powers
var AnotherTest = function () {
  var aTestVariable = 'console log test in AnotherTest module';

  //another function private to Module
  var privateFunction = function privateFunction() {
    //this can log the 'aTestVariable' because it is defined outside of this Module function, but aTestVariable is kept private to this Module
    if (aTestVariable) {
      console.log(aTestVariable);
    }
  };

  //this init function initializes the functions ran
  var init = function init() {
    privateFunction();
  };

  //return the init function, assign it to init so it can be used outside of this Module as Test.init();
  return {
    init: init
  };
}(); //self invoke the Module so it can be called later

//how we call the Test Module to execute its functions
AnotherTest.init();
'use strict';

//the Test Module is a namespaced function to what feature of the site this function powers
var Test = function () {
  var aTestVariable = 'console log test in Test module';

  //another function private to Module
  var privateFunction = function privateFunction() {
    //this can log the 'aTestVariable' because it is defined outside of this Module function, but aTestVariable is kept private to this Module
    if (aTestVariable) {
      console.log(aTestVariable);
    }
  };

  //this init function initializes the functions ran
  var init = function init() {
    privateFunction();
  };

  //return the init function, assign it to init so it can be used outside of this Module as Test.init();
  return {
    init: init
  };
}(); //self invoke the Module so it can be called later

//how we call the Test Module to execute its functions
Test.init();