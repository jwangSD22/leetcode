/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    if(nums.length===0){
        return null
    }

    let l = 0 
    let h = nums.length-1
    let m = Math.floor(l+(h-l)/2)

    
    let head = new TreeNode(nums[m])

    head.left = sortedArrayToBST(nums.slice(l,m))

    head.right = sortedArrayToBST(nums.slice(m+1,h+1))

    return head



};
