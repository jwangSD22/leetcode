/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let maxSum = nums[0]

    
    for(let i = 1;i<nums.length;i++){

        if(i===nums.length-1){
            console.log(nums[i])
            if(nums[i]>0&&nums[i-1]<0){
                nums[i]=nums[i]
            }
        }
        else{
            if(nums[i-1]!==0){
                nums[i] = nums[i]*nums[i-1]
            }
            else{
                nums[i]= nums[i]
            }
        }



        if(nums[i]> maxSum){
            maxSum = nums[i]
        }



    }

    return maxSum

};

nums =
[3,-1,4]

console.log(maxProduct(nums))