/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {

    let product = 1
    for(let i = 0 ; i<nums.length; i++) {
        if(nums[i]===0){
            return 0
        }
        product*=nums[i]
    }

    return product>0?1:-1
    
};