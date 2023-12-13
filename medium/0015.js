/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res=[]
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        //we skip the numbers where the current and the previous are the same because the first line of the while loop will sum the first two numbers together, and we don't want repeat sets 
        if(i>0 && nums[i] == nums[i-1]){
            continue;
        }
        let left=i+1;
        let right = nums.length-1;

        while(left<right){
            let threesum = nums[i]+nums[left]+nums[right]
            if(threesum>0){
                right--;
            }else if(threesum<0){
                left++;
            }else{
                res.push([nums[i],nums[left],nums[right]])
                left++;

                // this line increments left because we dont want to capture the same issue as the comment under the for loop
                while(nums[left] == nums[left-1] && left<right){
                    left++;
                }
            }
        }
    }
    return res
};