/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let ans = new Array(nums.length).fill(1)

    let curr = 1
    for(let i = 0 ; i<nums.length;i++){

        ans[i]=curr
        curr*=nums[i]

    }

    curr = 1
    for(let i = nums.length-1 ; i>=0;i--){

        ans[i]*=curr
        curr*=nums[i]

    }

return ans
    
};

// Example 1:

 nums = [1,2,3,4]
// Output: [24,12,8,6]

console.log(productExceptSelf(nums))