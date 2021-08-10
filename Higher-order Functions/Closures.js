// Closure example
var me = "Bruce Wayne";
function greeMe(){
    console.log("Hello " + me + "!");
}
greeMe();

// Arrow function
var yo = "Jaime";
const gMe = () => console.log("Hello " + yo + "!");
gMe();

/**
 * more closure examples
 */

function init(){
    var name = "Mozilla"; // logical variable created by init
    function displayName(){ // displayName is the inner function (a closure)
        console.log(name); // displays the variable declared in the parent function
    }
    displayName();
}
init();

// Arrow function
const inicialize = () => {
    var name = "Arrow";
    const dName = () => console.log(name);
    dName();
}
inicialize();
/*
// Counter function
function makeCounter() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
        return {
            increment: function() { return changeBy(1) },
            decrement: function() { return changeBy(-1) },
            value: function() { return privateCounter; }
        }
    }
};

var counter1 = makeCounter();

counter1.increment();
counter1.increment();
counter1.increment();

console.log("Counter1: ", counter1.value());
*/

var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

// You can also write without anonymous functions:

// global scope
var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var sum2 = sum(1);
var sum3 = sum2(2);
var sum4 = sum3(3);
var result = sum4(4);
console.log(result) //log 20
