/**
 * 
 * http://www.cs.yale.edu/homes/aspnes/pinewiki/QuickSelect.html
 * 
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let randomIndex = Math.floor(Math.random()*nums.length)

    let pivot = nums[randomIndex]

    let A1 = [], A2 = []

    for( let i = 0 ; i<nums.length;i++){
        if(nums[i]<pivot){
            A1.push(nums[i])
        }
        else if(nums[i]>pivot){
            A2.push(nums[i])
        }        
    }

    if(k<=A2.length){
        return findKthLargest(A2,k)
    }
    else if (k > nums.length-A1.length){
        return findKthLargest(A1,k-(nums.length-A1.length))
    }
    else{
        return pivot
    }
    
};


/// can we do this in o(n) time? 

// i could create a new array that analyzes 