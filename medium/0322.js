//322 . coin change

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) { 
    let result = countCoinChange(coins, amount)
    return result === Infinity ? -1 : result
};

const countCoinChange = (coins, amount) => {
    if(amount === 0) return 0
    if(amount < 0) return Infinity

    let min = Infinity 

    for(let coin of coins) {
        const restAmount = amount - coin 
        min = Math.min(countCoinChange(coins, restAmount) + 1, min) 
    }

  
    return min
}

console.log(coinChange([1,2,5],10))

// so this is a dynamic programming problem

// the total number of coins used before the last coin is added

//we just need to figure out what coin totals to the final amount, that used the least number of coins

// the function that woudl be used would return a calculation of the combinatinos until the final step 