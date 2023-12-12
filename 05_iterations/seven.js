let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums = myNums.map( (num) => num+10 )
// const newNums = myNums.map( (num) => num+10 )
// console.log(newNums);

const newNums = myNums
                .map( (num) => num*10 ) // [10, 20, 30, ....]
                .map( (num) => ++num )  // [11, 21, 31, ....]
                .filter( (num) => num>40 ) // // [  41, 51,  61, 71, ....]

// console.log(newNums);

