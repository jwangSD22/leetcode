/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {

    let lo = 0
    let hi = nums.length - 1



    while (lo<hi) {

        let mid = (lo + hi) >> 1

        // if mid is greater than hi, then the lowest value is in right half

        if (nums[mid] > nums[hi]) {
            lo = mid+1
        }
        else {
            hi = mid

        }
        // if lo is greater than mid, then the lowest value is in the left half
        // but you must check and include mid 

    }

    return nums[lo]




};

console.log(findMin([2,3,4,5,6,7,8,9]))