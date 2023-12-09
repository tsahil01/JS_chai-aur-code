
const user = {
    username: "Sahil",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // this means current context. here current context is user.
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); // op=> {} ||| as we are in node environment. try this in console in browser, the op will be different as global object in browser will be window object


// function chai(){
//     console.log(this.username); // cant use as it is only used in objects
// }
// chai()



// const chai = function(){
//     console.log("chai pilo");
// }


const chai = () => { // arrow function

    console.log("Chai piyoooo n");
    console.log(this); // op => {}
}
// chai()


// () => {} // basic arrow func

// const addTwo = (n1, n2) =>{
//     return n1 + n2 // explicit return method
// }

// const addTwo = (n1, n2) => (n1 + n2) // implicit return method

// console.log(addTwo(5, 5));
