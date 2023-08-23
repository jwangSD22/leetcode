//144. BINARY TREE PREORDER TRAVERSAL

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
var preorderTraversal = function(root) {

    
    preorderTraversal(this.left)
    console.log(this.val)
    preorderTraversal(this.right)
    
    
};

console.log(Number.isInteger(5))

console.log(Math.min(5,3))
