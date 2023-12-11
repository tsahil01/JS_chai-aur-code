const coding = ["js", "ruby", "python"]

// coding.forEach( function(item){
// } )


coding.forEach( (item) => {
    // console.log(item);
} )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        langName : "JS",
        langFile : "js"
    },
    {
        langName : "CPP",
        langFile : "cpp"
    },
    {
        langName : "Python",
        langFile : "py"
    }
]

myCoding.forEach( (item) => {
    // console.log(`${item.langName} : ${item.langFile}`);
} )

