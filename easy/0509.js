//509 fibonacci number

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n,memo = {}) {
    if(n===0){
        return 0 
    }

    if(n===1){
        return 1
    }

    if(memo[n]===undefined){
        memo[n] = fib(n-1,memo)+fib(n-2,memo)
    }

    return memo[n]

   
    


};

