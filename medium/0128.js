/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

let ans = new Set(nums)
console.log(ans)

let count = 0 
let max = 0

for(let num of nums){
    count=1
    temp = num
    while(ans.has(temp+1)){
        count++
        temp++
    }
    if(count>max){
        max=count
    }

    
}

return Math.max(count,max)
    
    
};


console.log(longestConsecutive(nums))