const userEmail = -4

if(userEmail){
    console.log("Got user email");
} else{
    console.log("Dont have user email");
}

// falsy values=>
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truty values=>
// true, 1, 1>,  "0", 'false', " ", [], {}, function(){}, 

//  Nullish Coalescing Operator(??): null undefined

let val1;
val1 = 5 ?? 10 
val1 = null ?? 2 // checks safety... agar value nhi hai toh null assign kar do
console.log(val1);

val1 = undefined ?? 10
console.log(val1);

val1 = null ?? 10 ?? 20
console.log(val1);
