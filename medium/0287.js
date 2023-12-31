/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {


    // we can do cycle detection and assume this array will forever just keep looping 
    // this actually doesn't work. we already know that there's a cycle 

    let slow = 0 
    let fast = 0

    slow = nums[slow]
    fast = nums[nums[fast]]

    while(slow!==fast){
        slow = nums[slow]
        fast = nums[nums[fast]]
    }

    //slow and fast are both on a node within the loop

    slow = 0 

    while(slow!==fast){
        console.log(slow)
        slow=nums[slow]
        fast=nums[fast]
    }

    return slow




    
    
};

let array = [1,3,4,2,2]

console.log(findDuplicate(array))