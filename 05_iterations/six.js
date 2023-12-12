// const coding = ["js", "ruby", "java"]

// const values = coding.forEach( (item) => { // forEach doesnt return values
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const values = myNums.filter( (num) => num > 4) // filter returns values(array)
// const values = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(values);


const newNums = []
myNums.forEach( (nums) => {
    if(nums > 4){
        newNums.push(nums)
    }
} )
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter( (bk) => bk.genre === "History")
console.log(userBooks);






