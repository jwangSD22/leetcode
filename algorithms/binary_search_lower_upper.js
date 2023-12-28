const bs = (nums,target) => {

    let lo = 0 
    let hi = nums.length - 1 

   //think about [1,3]

    while(lo<=hi){

        // it's okay to use bit manipulation to divide and find the middle lower in this case because we are using pointers on the array (which will always be positive) 
        // so we don't have to deal with a signed integer
        let mid = (lo+hi)>>1


        if(nums[mid]===target){
            return nums[mid]
        }

        if(target<nums[mid]){
            hi = mid - 1
        }
        else{
            lo = mid + 1
        }

        //because of the way that this is structured- in the end, after the while loop, lo will represent the upper bound, and hi will represent the lower bound


    }

    return nums[lo]

}





let nums = [0,1,4,5,6,7,8,9,10]




if(!bs(nums,-1)){
    console.log('booty')
}

// if return lo, this will find the UPPER BOUND -- as you see here, searching for 2 in array:nums will result in index 2, which is 4. since 2 falls inbetween 1 and 4 in this array.

//if return hi, this will find the LOWER BOUND -- searching for2 in array:nums will result in index 1, which is 1. since 2 falls inbetween 1 and 4 in this array.

