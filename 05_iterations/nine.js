// const myNums = [1, 2, 3]

// // See .reduce() documentation on MDN

// const myTotal = myNums.reduce( (acc, curval) => {
//     console.log(`acc: ${acc}, and currval: ${curval}`);
//     return acc + curval
// }, 0) // here 0 is acc initial value

// console.log(myTotal);


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce( 
    (accumulator, currentValue) => accumulator + currentValue, initialValue,
);

// console.log(sumWithInitial);
// Expected output: 10
