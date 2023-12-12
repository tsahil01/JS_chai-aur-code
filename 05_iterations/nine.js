const myNums = [1, 2, 3]

// See .reduce() documentation on MDN

const myTotal = myNums.reduce( (acc, curval) => {
    console.log(`acc: ${acc}, and currval: ${curval}`);
    return acc + curval
}, 0) // here 0 is acc initial value

console.log(myTotal);