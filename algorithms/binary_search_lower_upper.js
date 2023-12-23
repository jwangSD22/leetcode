const bs = (nums,target) => {

    let lo = 0 
    let hi = nums.length - 1 
   //think about [1,3]
    while(lo<=hi){
        let mid = (lo+hi)>>1
        // lo = 0 , mid = 0 , hi = 1 
        console.log(lo,mid,hi)

        if(nums[mid]===target){
            return mid
        }

        if(target<nums[mid]){
            hi = mid -1
        }
        else{
            lo = mid + 1
        }

        //because of the way that this is structured- in the end, after the while loop, lo will represent the upper bound, and hi will represent the lower bound


    }



    return lo

}



let nums = [0,1,4,5,6,7,8,9,10]

console.log(bs(nums,2))

// if return lo, this will find the UPPER BOUND -- as you see here, searching for 2 in array:nums will result in index 2, which is 4. since 2 falls inbetween 1 and 4 in this array.

//if return hi, this will find the LOWER BOUND -- searching for2 in array:nums will result in index 1, which is 1. since 2 falls inbetween 1 and 4 in this array.

