/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    let h = new Map()

for(let i = 0 ; i<nums.length-1; i ++ ){

    if(i-h.get(nums[i])<=k){
        return true
    }
    
    h.set(nums[i],i)


}

    return false


};