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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {

    let final = []

    if (!root){
        return []
    }

    function traverse(node,output,final){

        if(!node){
            return 
        }

        if(!node.left&&!node.right){
            output=output+`${node.val}`
            return final.push(output)
        }


    else{
        output=output+`${node.val}`

    }

        traverse(node.left,output+'->',final)
        traverse(node.right,output+'->',final)
    }

traverse(root,'',final)

return final


    }
