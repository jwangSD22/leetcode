/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    let h = new Map()

    for(let i = 0 ; i<nums.length;i++){

        if(!h.has(nums[i])){
            h.set(nums[i],[i])
        }
        else{
            h.set(nums[i],[...h.get(nums[i]),i])
        }



    }

    for(let [key,v] of h){

        if(v.length>1){

            let low = v[0]

            let diff =  0
    
            for(let i = 1 ;i<v.length;i++){
    
                diff = v[i]-low
    
                if(diff>k){
                    low=v[i]
                }
                else if(diff<=k){
                    return true
                }
        
            }
        }



    }




    return false


};

let nums = [1,2,3,1]

console.log(containsNearbyDuplicate(nums,3))

