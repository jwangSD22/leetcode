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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {

    function sameTree(a,b) {

        // if one is missing, and they're not BOTH missing, then return false
        // if one is missing, and they're BOTH msising, then return true
        if(!a||!b){return !a&&!b}
    
    
        // return false if the values of the current node are both not matching
        if(a.val!==b.val){return false}
    
    
    
        // traverse down both sides of the tree and make sure they both reach the end together without finding a false
        return sameTree(a.left,b.left)&&sameTree(a.right,b.right)
    }

    // we could use this function if we wanted to use DFS
    function dfs(root){
        if(!root){return false}

        // have to include this because we need to consider the case where there's multiple values where the node the subroot start with the same val
        // but adding root.val===subRoot.val reduces extra unnecessary start of the function sameTree when the current node.val does not equal subRoot.val
        if(root.val===subRoot.val&&sameTree(root,subRoot)){
 
            return true
        }

        return dfs(root.left)||dfs(root.right)
    }

    let stack = [root]

    while(stack.length){
        let node = stack.pop()

        if(!node){
            continue
        }
        
        if(node.val===subRoot.val&&sameTree(node,subRoot)){
            return true
        }

        stack.push(node.left,node.right)

    }

    return false
    

    // return dfs(root)
};