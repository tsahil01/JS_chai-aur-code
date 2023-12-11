// for of

const arr = [1, 2, 3, 4, 5]

// for (const iterator of object) { 
// }

for (const i of arr) {
    // console.log(i);
}

const greet = "Hello World!"
for (const g of greet) {
    // console.log(g);
}



// Maps

const map = new Map()
map.set('IN', "India")
map.set('IN', "India") // no duplicates
map.set('USA', "United States of America")

// console.log(map);

for (const [key,value] of map) {
    // console.log(`${key} : ${value}`);
}

const myObj = {
    game1 : "NFS",
    game2 : "GTA 5"
}

// for (const [key, value] of object) { // error. Object is not iteratable
//     console.log(`${key} : ${value}`);
// }













