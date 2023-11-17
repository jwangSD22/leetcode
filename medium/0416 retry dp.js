/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

 

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

var canPartition = function (nums) {
    const totalSum = nums.reduce((acc, item) => acc + item, 0);
    if (totalSum % 2) return false;
    const target = totalSum / 2;
    const dp = new Array(nums.length).fill(-1).map(() => new Array(target + 1).fill(-1));

    console.log(dp)

    function dfs(idx, target) {
        if (target === 0) return true;
        if (target < 0) return false;
        if (dp[idx][target] !== -1) return dp[idx][target];

        for (let i = idx + 1; i < nums.length; i++) {
            if (dfs(i, target - nums[idx]) || dfs(i, target)) return true;
        }
        return dp[idx][target] = false;
    }

    
    return dfs(0, target);

};

console.log(canPartition([1,2,3]))