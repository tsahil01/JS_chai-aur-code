//  Primitive =>
    //  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// Reference (Non primitive) =>
    // Array, Objects, Functions

// Primitive values are stored in Stack and Non primitive values are stored in Heap.


let name1 = "Sahil"
let name2 = name1 // name2 will only create a copy of name1 value
name2 = "Jitesh"

console.log(name1);
console.log(name2);

let user1 = {
    id:123456,
    age:20
};

let user2 = user1 // user1 data will be stored in heap and will be accesed by user1 and user2 variable. 
user2.id = 34567 // this will change the value in user1 as well as both are accessing the same data stored in heap