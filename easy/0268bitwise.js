
var missingNumberSlow = function(nums) {
    let hash = {}
    for (let i = 0;i<nums.length+1;i++){
        hash[i]=false
    }

    for(let value of nums){
        if(hash[value]===false){
            hash[value]=true
        }
    }

    for(let key in hash){
        if(hash[key]===false){
            return key
        }
    }


}; 


var missingNumber = function(nums) {



}; 