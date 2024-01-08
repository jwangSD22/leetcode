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
var goodNodes = function(root) {
    
    // a maximum value should be carried down to each node . 
    let count = 0

    function dfs(root,msf=root.val){
        if(!root){
            return
        }

        if(root.val>=msf){
            count+=1
        }

        if(root.val>msf){
            msf=root.val
        }

        dfs(root.left,msf)
        dfs(root.right,msf)
    }

dfs(root)

return count

    
};