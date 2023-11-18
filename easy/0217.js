/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    // no matter what we have to visit everything in the array

    // lets start by trying to do this in o(n) time 

    // best way to keep tally of multiple values is using a hash table 

    // can make this faster with a set, so we dont need to make a tally, as soon as the same number is found in the set, we can return true

    let h = new Set()

    for(let i = 0; i < nums.length; i ++){
        
        if(h.has(nums[i])){
            return true
        }
        h.add(nums[i])

    
    }

    return false

    
};

console.log(containsDuplicate([1,2,3,4]))