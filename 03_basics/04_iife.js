// Immediately Invoked Function Expressions (IIFE)

// ()(); IIFE

(function chai(){ // named IIFE
    console.log(`DB CONNECTED`);
})(); // this is IIFE. Semicolon is imp as the code will not know that it has to stop. if we do not use semicolon then we cannot execute the next function `aurcode`

( function aurcode() {
    console.log('CHAI')
}  )();

( (name) => { // unnamed IIFE
    console.log(`CHAI PIYO N, ${name}`);
} )("Sahil"); // passing name
