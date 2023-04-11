const { returns } = require("chai-spies");

function warning(){
    return "WARNING!";
}
function receivesAFunction(warning){
    return warning();
}


function returnsANamedFunction(){
    return function named(){
        console.log("HI");
    }
}

function returnsAnAnonymousFunction(){
    return function() {
        console.log("hello");
    }
}


