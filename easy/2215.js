var findDifference = function(nums1, nums2) {
    let num1Set = new Set(nums1);
    let num2Set = new Set(nums2)
    let result=[[],[]];
    
    for(const num of num1Set){
        if(!(num2Set.has(num))){
            result[0].push(num)
        }
    }
    for(const num of num2Set){
        if(!(num1Set.has(num))){
            result[1].push(num)
        }
    }
    return result;
}

nums1 =
[-80,-15,-81,-28,-61,63,14,-45,-35,-10]

nums2 =
[-1,-40,-44,41,10,-43,69,10,2]

let y = findDifference(nums1,nums2)
console.log(y)


