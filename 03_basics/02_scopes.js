{} // this is scope.

if(true){
    let a = 10 // this will only work in this block only.
    const b = 20 // this will only work in this block only.
    var c = 30  // will work outside this block. which is bad!!!! isliye hum `var` use nhi karte hai!
}

// impt => let and const is block scope and var is global scope

// console.log(a); // error
// console.log(b); // error
// console.log(c); // 30

function one(){
    const username = "Sahil"

    function two(){
        const website = "youtube"
        console.log(username); // inside function can access data of outside function!!
    }
    // console.log(website); // outside function cannot access data of inside function.

    two()
}

// one()



// ******************************* intresting **********************************

const addTwoNum = function(num){
    return num + 2
}

console.log(addTwoNum(5));