function sayMyName(){
    console.log("Hellooo");
}


// sayMyName()

// const a  = sayMyName
// a() // we can also do this!!!!!


function addTwoNum(num1, num2){ // num1, num2 => parameters
    return (num1 + num2)
}
// console.log(addTwoNum(6, 5)); // 6,5 => arguments


function calculateCarPrice(...num1){ // impt. this is rest operator. it acts as array.
    return num1
}
// console.log(calculateCarPrice(200, 400, 500));

const user = {
    username : "sahil",
    price: 200
}
function handleObj(anyobj){
    console.log(`User name is ${anyobj.username} amd price is ${anyobj.price}`);
}
// handleObj(user)

handleObj({
    username:"Sam",
    price:399
})


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 100, 600]));