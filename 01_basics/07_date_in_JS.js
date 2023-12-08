// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

let mycreatedDate = new Date(2023, 11, 23);
let mycreatedDateTwo = new Date(2023, 11, 23, 5, 10);
let mycreatedDateThree = new Date("01-14-2024")

// console.log(mycreatedDate.toDateString());
// console.log(mycreatedDateTwo.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp); // in miliseconds
// console.log(mycreatedDate.getTime()); // in miliseconds

// console.log(Math.floor(Date.now()/1000)); // in seconds

console.log(myDate.getMonth());

myDate.toLocaleString('default',{
    weekday :"long",
});
