/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let answer = Array(nums.length).fill(1)

    for(let i = 0;i<nums.length;i++){

        for(let j = 0;j<answer.length;j++){
            if(i!==j){
                answer[j]*=nums[i]
            }
        }


    }
    

    return answer

};


console.log(productExceptSelf([1,2,3,4]))

