// const tinderUser = new Object() // singleton obj
const tinderUser = {} // non singleton obj

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName: {
        userfullname: {
            firstname : "Sahil",
            lastname : "Tiwaskar"
        }
    }
}

// console.log(regularUser.fullName.userfullname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // here {} is optional but always use it

const obj3 = {...obj1, ...obj2} // Spread operator

// console.log(obj3);

// console.log(Object.keys(tinderUser)); // gives op in Array
// console.log(Object.values(tinderUser)); // gives op in Array
// console.log(Object.entries(tinderUser)); // [[key, value]]
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));