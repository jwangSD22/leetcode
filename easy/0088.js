/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

//                [0,0,0,3,2,1]
//nums1 = [1], m = 1, nums2=[], n= 0

var merge = function(nums1, m, nums2, n) {

    let i = 0
    let j = nums1.length-1

    while(i<j){
        [nums1[i],nums1[j]]=[nums1[j],nums1[i]]
        i++;j--
    }

    if(n===0){
        return
    }

    if(m===0){
        nums1[0]=nums2[0]
        return
    }

    i=nums1.length-1
    j=0

    let idx=0
    while(i>n-1&&j<n){
        if(nums1[i]>nums2[j]){
            nums1[idx] = nums2[j]
            console.log(nums1)
            j++
            idx++
        }
        else{
            nums1[idx] = nums1[i]
            i--
            idx++
        }
    }

    while(i>n){
     
        nums1[idx] = nums1[i]
        console.log(nums1)

        i--
        idx++
    }
    while(j<n){
        nums1[idx] = nums2[j]
        j++
        idx++
    }

    return nums1




    
};

nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3

console.log(merge(nums1,m,nums2,n))