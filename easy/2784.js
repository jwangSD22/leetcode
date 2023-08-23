/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let sorted = nums.sort((a,b)=>a-b)
    let length = sorted.length
    let high = sorted[sorted.length-1]

    if(length!==high+1){
        return false
    }
    if(sorted[sorted.length-1]!==sorted[sorted.length-2]){
        return false
    }

    sorted.pop()
    for(let i = 1;i<sorted.length;i++){
        if (sorted[i-1]!==i)
        return false
    }
    return true



    
};
