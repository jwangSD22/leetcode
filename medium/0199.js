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
 * @return {number[]}
 */
var rightSideView = function(root,output=[]) {

    if(!root){
        return output
    }

    output.push(root.val)

    return root.right?rightSideView(root.right,output):rightSideView(root.left,output)
    
};