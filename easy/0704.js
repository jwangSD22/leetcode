//704 binary search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

let start = 0
let end = nums.length-1


while(start<=end){
    let half = Math.floor(start+(end-start)/2)
    if(nums[half]===target){
        return half
    }
    else{
        if(nums[half]>target){
            end = half-1
        }
        else{
            start = half+1
        }
    }
}
return -1


    
};

let nums = [-1,0,3,5,9,12]

console.log(search(nums,3))
