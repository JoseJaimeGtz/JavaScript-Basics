// Array of animals
var animals = [
    {name: 'Kira', species: 'Dog'},
    {name: 'Tugi', species: 'Turtle'},
    {name: 'Nemo', species: 'Fish'},
    {name: 'Donatello', species: 'Turtle'},
    {name: 'Sapito', species: 'Frog'},
    {name: 'Sierra', species: 'Dog'},
    {name: 'Tuga', species: 'Turtle'},
    {name: 'King Kong', species: 'Monkey'},
    {name: 'Godzilla', species: 'Lizard'},
    {name: 'Hunter', species: 'Dog'},
];

// TODO: Make an array with all the animal names

/*// solved by a for loop
const names = [];
for (var i = 0; i < animals.length; i++) {
    names.push(animals[i].name);
}
// sort names in ascending order. reverse change to descending order
console.log('Names: ', names.sort().reverse());*/

// solved by map function with normal func
const names = animals.map(function(a){
    return a.name + " is a " + a.species;
});
console.log("names: ", names);

// solved by map function with arrow func
const names2 = animals.map(a => a.name);
console.log("names2: ", names2);
