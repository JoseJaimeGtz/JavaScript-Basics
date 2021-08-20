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

// Counter function
/*function makeCounter() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () { return changeBy(1) },
        decrement: function () { return changeBy(-1) },
        value: function () { return privateCounter }
    }
};
var counter1 = makeCounter();

counter1.increment();
counter1.increment();
console.log("Counter1: ", counter1.value());
counter1.increment();
console.log("Counter1: ", counter1.value());
counter1.decrement();
counter1.decrement();
counter1.decrement();
console.log("Counter1: ", counter1.value());
*/

function makeCounter() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: i = () => changeBy(1),
        decrement: d = () => changeBy(-1),
        value: function () { return privateCounter}
    }
};

var counter2 = makeCounter();

counter2.increment();
counter2.increment();
counter2.increment();
console.log("makeCounter: ", counter2.value());
counter2.increment();
console.log("makeCounter: ", counter2.value());
counter2.decrement();
counter2.decrement();
counter2.decrement();
console.log("makeCounter: ", counter2.value());
