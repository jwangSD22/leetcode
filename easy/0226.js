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
var maxDepth = function(root) {

    diameter = 0 

    function dfs(root){
        if(!root){
            return
        }
        let left = dfs(root.left)
        let right = dfs(root.right)

        diameter = Math.max(diameter, left+right)

        return Math.max(left,right) + 1
    }

    
    return diameter
};