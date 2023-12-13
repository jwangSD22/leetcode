/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

let ans = new Set(nums)
let max = 0

for(let num of nums){
    let count=1
    while(ans.has(++num)){
        count++
    }
    max = Math.max(max,count)
   
}

return max
    
    
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let longestStreak = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentStreak = 1;
            while (set.has(++num)) currentStreak++;
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
};