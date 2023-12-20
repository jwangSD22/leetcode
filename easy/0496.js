//needs to be solved with a monotonic stack!!!! brute force is o(n^2)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    
    let m = new Map()
    let stack = []

    for(let i = 0 ; i < nums2.length ; i ++){
        while(stack.length&&nums2[i]>stack[stack.length-1]){
            // set the next highest value in the hashmap [value in nums1, next highest value after same value in nums2]
            m.set(stack[stack.length-1],nums2[i])
            // since this is a monotonic stack, get rid of the value when you're done with it because we're done evaluating it
            stack.pop()
        }
        stack.push(nums2[i])
    }
    
    // anything left over in the stack found no higher value 
    for(let remainder of stack){
        m.set(remainder,-1)
    }
    
    // retrieve the next highest value for each of the values of nums1 from the map
    // map over the values of nums1 to save memory, instead of another output array
    return  nums1.map(a=>m.get(a))
};




nums1 = [4,1,2]
nums2 = [1,3,4,2]

console.log(nextGreaterElement(nums1,nums2))