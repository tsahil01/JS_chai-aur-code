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

// const anotherNameOne = "        Sahil       "
// let strArray = anotherNameOne.trim().toLowerCase().split("").sort().join("")
// console.log(strArray)

// const myArr = [10, 4, 5, 6, 7 ,8]
// const myar2 = [10, 20, 534, 64, 24]
// anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// console.log(anotherArray.flat(Infinity));

// const user = {
//     name: "Sahil",
//     id: 123456,
// }

// Object.freeze(user)
// user.email = "s@s.s"
// console.log(user);

// const obj1 = {1 : "a", 2 : "b"}
// const obj2 = {3 : "a", 4 : "b"}

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// const map = new Map()

// map.set('IN', "India")
// map.set('IN', "India") // no duplicates
// map.set('USA', "United States of America")

// const prog = ["js", "rb", "cpp", "java"]

// for (const i in prog) { // i gives the array keys(position)
//     console.log(i);
//     console.log(prog[i]);
// }





// PROMISE =>

new Promise( (resolve, reject)=>{
    setTimeout( ()=> {
        user = {username:"Sahil", id:1234}
        let err = false;
        if(!err){
            resolve(user)
        } else{
            reject()
        }
    }, 1000)
})
    .then( (user)=> console.log(user) )
    .catch( ()=> console.log("Error occured!") )
    .finally( ()=> console.log("Finally done!") )


fetch('https://jsonplaceholder.typicode.com/users').then( (response) =>{
    return response.json()
} ).then( (data)=>{
    console.log(data)
} ).catch( (err)=>{
    console.log("Error Occured!!!!")
    console.log(err)
})