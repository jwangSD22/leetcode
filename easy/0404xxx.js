/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {

    const total = 0 

    const helper = (node,total) => {
        if(!node){
            return 
        }
        if(node.left!== undefined){
            total+=node.left
        }

        helper(node.left,total)
        helper(node.right,total)




    }

    helper(root,total)

    return total
    
};