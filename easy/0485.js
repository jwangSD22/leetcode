/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {

let max = 0
let counter = 0
let active = false



for (let i = 0 ;i<nums.length;i++){

if(nums[i]===1){
    active = true
    counter+=1
    if(counter>max){
        max=counter
    }
}


else if(nums[i]===0&&active){
    active=false
    counter = 0

}




}

return max


    
};