/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {}
    for(let i = 0; i <nums.length;i ++){
        if(!hash[nums[i]]){
            hash[nums[i]]=1
        }
        else{
            hash[nums[i]]++
        }
    }

    let array = []
    for(let key in hash){
        if(array[hash[key]]===undefined){
        array[hash[key]]=[key]
        }
        else{
            array[hash[key]].push(key)
        }
    }

    console.log(array)

    let answer = []
    for(let i = array.length-1;i>0;i--){
        if(array[i]!==undefined){
            for(let num of array[i]){
                answer.push(num)
            }
            if(answer.length===k){
                return answer
            }
        }
    }




};

console.log(topKFrequent([-1,-1],1))