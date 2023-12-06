//322 . coin change

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) { 
    if (amount <= 0) {
        return 0;
      }
    let max = amount+1
    let dp = Array(amount+1).fill(max)
    

    dp[0]=0

    for(let i = 1;i<amount+1;i++){
        for(let coin of coins){
            if(coin<=i){
                dp[i]=Math.min(dp[i],dp[i-coin]+1)
            }
            }
        }
    

    
    return dp[amount]===max?-1:dp[amount]
    



}

console.log(coinChange([1,2,5],11))

// so this is a dynamic programming problem

// the total number of coins used before the last coin is added

//we just need to figure out what coin totals to the final amount, that used the least number of coins

// the function that woudl be used would return a calculation of the combinatinos until the final step 