// new Promise( (resolve, reject) => {} ) //syntax of Promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an async Task
    setTimeout( function(){
        console.log("Async task is complete.");
        resolve() // connecting resolve with .then()
    }, 1000)
})

// promiseOne.then( callBackFun() ) // // direct relation with resolve

promiseOne.then(function() {
    console.log("Promise consumed")
})


new Promise( function(resolve, reject) {
    setTimeout( function(){
        console.log("Async task 2");
    },1000)
    resolve()
} ).then( function(){
    console.log("Async 2 resolved")
    })

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@chaicode.com"}) // sending data to .then()
    },1000)
})

promiseThree.then(function(user){ // user -> data from resolve
    console.log(user)
})

const promiseFour = new Promise( (resolve, reject) => {
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve( {username:"Sahil", pw:123} )
        } else{
            reject('ERROR: Something went wrong') // gives error
        }
    },1000)
} )

// promiseFour.then() // for resolve data
// promiseFour.catch() // for reject data

promiseFour.then( (user) => {
    console.log(user);
    return user.username // this will return in next .then()
}).then( (username) => { // here, get got username value from above return satement. 
    console.log(username)
}).catch( (err) => {
    console.log(err)
}).finally( () => {
    console.log("The promise is either resolved or rejected!")
})



const promiseFive = new Promise( (resolve, reject)=> {
    setTimeout( () => {
        let error = true
        if(!error){
            resolve( {username:"JS", pw:123} )
        } else{
            reject('JS went wrong') // gives error
        }
    },1000)
});

// promiseFive.then 
// Another way => async, await

async function consumedPromiseFive(){ // this ignores the reject and only accepts the resolve, to avoid this use try-catch block
    try{
        const response = await promiseFive
        console.log(response);
    } catch(err){
        console.log(err)
    }
}

consumedPromiseFive()




// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() // why await here??? Beacuse it takes time!!
//         console.log(data);
//     } catch(err){
//         console.log("E: ", err);
//     }
// }
// getAllUsers()



// Above task using .then() and .catch() ====>>>>

fetch('https://jsonplaceholder.typicode.com/users').then( (response)=>{
    return response.json()
}).then( (data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})