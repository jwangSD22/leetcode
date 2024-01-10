/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
  
    if(k<=1){
        return 0
    }

    nums.sort((a,b)=>a-b)

    let i = 0 
    let j = i+k-1

    let min = Infinity

    while(j<nums.length){
        min = Math.min(min,nums[j]-nums[i])
        i++
        j++
    }


    return min

 



};

let nums = [6,5,4,3,1,2]
console.log(minimumDifference(nums,5))

