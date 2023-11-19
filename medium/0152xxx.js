/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let max = nums[0]
    let maxNeg = 1
    
    for(let i = 1;i<nums.length;i++){

     nums[i] = Math.max(nums[i-1]*nums[i],nums[i],maxNeg*nums[i])


     maxNeg = Math.min(nums[i-1],nums[i-1]*nums[i])
        


    }



    return maxSum

};



