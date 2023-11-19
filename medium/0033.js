var search = function(nums, target) {
    let start = 0, end = nums.length - 1;

    let mid = Math.floor((start + end) / 2);

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (target === nums[mid]) {
            return mid;
        }
        //this is the case of a sorted left subarray because the start, is less than the mid
        if (nums[start] <= nums[mid]) {
            //do regular binary search into the left subarray because the target falls into its boundaries
            if (nums[start] <= target && nums[mid] >= target) {
                end = mid - 1;
                // you don't care how messed up the right array is, you just know it's there 
            } else {
                start = mid + 1;
            }
        }
        
        
        // this is assumming the right array is sorted , because the initial test failed on the left subrarray  
        else {
            // this is checking if the number falls into the sorted right subarray
            if (nums[end] >= target && nums[mid] <= target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}

let test = [0,1,2,3,4,5,6,7,8,9,10]

let normal = function (nums,target){

    let start = 0
    let end = nums.length-1 

    while(start<=end){
        let mid = Math.floor((start+end)/2)
        let midcheck = nums[mid]

        if(midcheck===target){
            return [true,midcheck]
        }

        if(target>midcheck){
            start = mid +1
        }
        else{
            end = mid -1
        }
    }

    return -1
}

console.log(normal(test,14))
