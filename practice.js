let a = 10;
let b = 20;
const s = "Sahil"
// console.table([a, b, s])

// console.log(typeof (String(a)));
a = String(a)
// console.log(typeof a );

// console.log(s.charAt(3));


// let str1 = "abcba"

// // length = 5
// // i=> 0 1 2
//     // 0 ---> a ==   

// for (let i = 0; i < str1.length/2; i++) {
//     if(str1[i] === str1.charAt(str1.length-i-1))
//     console.log(`${str1[i]}, ${str1.charAt(str1.length-i-1)}`);    
// }

const anotherNameOne = "        Sahil       "
let strArray = anotherNameOne.trim().toLowerCase().split("").sort().join("")
console.log(strArray)
