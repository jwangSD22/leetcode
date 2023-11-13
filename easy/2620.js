/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {

    return () => n++
};


let counter = createCounter(6)

console.log(counter())

console.log(counter())