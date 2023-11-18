/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

let result = Array(nums.length).fill(1)


let current = 1
for(let i = 0;i<nums.length;i++){
result[i]*=current
current*=nums[i]
}

current = 1

for(let i = nums.length-1;i>=0;i--){
    result[i]*=current
    current*=nums[i]
}



return result


};


console.log(productExceptSelf([1,2,3,4]))

