/*// Normal function
function triple(t) {
    return t * 3;
}
console.log(triple(30));

// Create an anonymous function and assign it to a variable (const)

var double = function(d){
    return d * 2;
}
console.log(double(30));

var double_var = double;

console.log(double(30));
*/
// Composition functions are little functions into bigger functions
var animals = [
    {name: 'Kira', species: 'Dog'},
    {name: 'Sierra', species: 'Dog'},
    {name: 'Nemo', species: 'Fish'},
    {name: 'Sapito', species: 'Frog'},
    {name: 'Tugi', species: 'Turtle'},
    {name: 'Tuga', species: 'Turtle'},
];

// push functions
/*var dogs = [];
for(var i = 0; i < animals.length; i++){
    if(animals[i].species === 'Dog'){
        dogs.push(animals[i]);
    }
}

for(var i = 0; i < dogs.length; i++){
    console.log(dogs[i]);
}

console.log("\nDogs names: ")
for(var i = 0; i < dogs.length; i++){
    console.log(dogs[i].name);
}*/

// Filter - return an array of turtles
var turtle = animals.filter(function(animal) {
    return animal.species === 'Turtle';
})
// print all turtles
for(var i = 0; i < turtle.length; i++){
    console.log("name: ",turtle[i].name, "| spiecie: ",turtle[i].species);
}

/*
    Arrow function
    short way example of line 46
*/

// Filter - return an array of dogs
var dogs = animals.filter(hola = animal => animal.species === 'Dog');
console.log("Arrow function: ", dogs);

// Filter - generic func that says if the object is a dog (bigger func)
var isDog = function(animal) {
    return animal.species === 'Dog';
}

// return an array with only dogs that call isDog func
var dog = animals.filter(isDog);
console.log("dog filter: ",dog);

/*
    Arrow function
    short way example of line 64
*/
var isTurtle = (animal) => animal.species === 'Turtle';

var turtle = animals.filter(isTurtle);
console.log("turtle filter: ",turtle);
