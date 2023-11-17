
// DELETE AND EARN

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {

    let h = Array(Math.max(...nums)+1).fill(0)

    //use index to track the count of the number

    let dp = Array(Math.max(...nums)+1).fill(0)
    // dynamic programming into this array

    for(let num of nums){
        h[num] = (0||h[num])+1
    }

    // tally up the number of times each num repeats itself

    dp[1]=h[1]

    // establish the first case

    for(let i = 2;i<dp.length;i++){

        let value = h[i]*i
    
        dp[i]=Math.max(dp[i-2]+value,dp[i-1])


    }

   return dp[dp.length-1]
    
};


nums =
[3,4,2]

deleteAndEarn(nums)
