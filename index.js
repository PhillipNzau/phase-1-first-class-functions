function receivesAFunction(aFunction) {
    return aFunction()
}
receivesAFunction(function() {console.log('Amazing')})

function returnsANamedFunction() {
    return function named() {console.log("A Named func")}
}

returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function() {console.log("An anonymous function")}
}
returnsAnAnonymousFunction()