const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["flash", "batman"]

const allHeros = marvelHeros.concat(dcHeros) // returns a new array
// console.log(allHeros);

// marvelHeros.push(dcHeros) // creates doubly array in the same array
// console.log(marvelHeros);


// Spread operator -->

const allnewHeros = [...marvelHeros, ...dcHeros] // same as concate but more easy
// console.log(allnewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity) // Impt!!!
// console.log(realAnotherArray);


// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh")); // creates into array

let score1 = 100
let score2 = 200
let socre3 = 300

console.log(Array.of(score1, score2, socre3)); // creates new array from set of elements