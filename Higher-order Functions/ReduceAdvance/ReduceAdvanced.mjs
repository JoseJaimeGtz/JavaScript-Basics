import { readFileSync } from 'fs'

// You need to execute 'node --experimental-modules ReduceAdvanced.mjs' the first time to run this script. After that, you can use only 'node ReduceAdvanced.mjs'

// TODO: make an JSON print like the example below using reduce function
// Take data from data.txt

const output = readFileSync('data.txt', 'utf-8')
    .trim() // remove any line breaks or spaces at the end of the file.
    .split('\n') // The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The ('\n') separator delete all the \n characters from the string/file and create a new array element.
    .map(line => line.split('\t')) // return an array for each line converting an element for each \t character.
    .reduce((costumers, line) => { // reduce receives two arguments, "constumers" is the objet that we're constructing. The second argument is the line that we're iterating.
        costumers[line[0]] = costumers[line[0]] || []; // takes the array with the elements and added the next one without rewrite the element.
        costumers[line[0]].push({ // adds the properties with values in each iteration in the array.
            name: line[1], // assign values to the properties
            price: line[2],
            quantity: line[3]
        });
        return costumers // returns the entire object
    }
    , {}) // {} means that return an object.

console.log(JSON.stringify(output, null, 2));
