// singleton
// Object.create



// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Hitesh", // key : value
    age : 18,
    location : "Nagpur",
    email : "h@h.h",
    isLoggedIn: false,
    [mySym] : "mykey1" // syntax to use a symbol as key

} // object

// console.log(JsUser);

// console.log(JsUser.name); 
// console.log(JsUser["name"]);

// console.log(typeof JsUser[mySym]);

JsUser.email = "s@s.s" // to change values

// Object.freeze(JsUser) // now we cant change values of JsUser object

JsUser.greeting = function(){ // custome functions
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

