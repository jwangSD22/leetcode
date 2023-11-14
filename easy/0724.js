/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    let total = nums.reduce((a,c)=>a+c,0)

    let sum = 0

    for(let i = 0 ;i<nums.length;i++){
        if((total-sum-nums[i])===sum){
            return i
        }
        sum+=nums[i]

    }

    return -1




};

console.log(pivotIndex([-1,-1,1,1,0,0]))