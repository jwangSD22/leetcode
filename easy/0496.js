//needs to be solved with a monotonic stack

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    
    let m = new Map()

    let stack = []

    //can map over the original numbers of nums1


    for(let i = 0 ; i < nums2.length ; i ++){

        while(stack.length&&nums2[i]>stack[stack.length-1]){
            // set the next highest value in the hashmap [value in nums1, next highest value after same value in nums2]

            m.set(stack[stack.length-1],nums2[i])
            // since this is a monotonic stack, get rid of the value when you're done with it because we're done evaluating it
            stack.pop()
        }

        stack.push(nums2[i])
    }
    

    for(let remainder of stack){
        m.set(remainder,-1)
    }
    

    let final = nums1.map(a=>m.get(a))

    return final



};

nums1 = [4,1,2]
nums2 = [1,3,4,2]

console.log(nextGreaterElement(nums1,nums2))