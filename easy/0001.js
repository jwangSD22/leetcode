// 1. TWO SUM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {}
    
    for(let i = 0 ; i<nums.length;i++){
        if (hash[nums[i]]!==undefined){
            return [i,hash[nums[i]]]
            
        }
        else if (hash[target-nums[i]]===undefined){
            hash[target-nums[i]]=i

        }

    }    
};

