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
 * @return {number[][]}
 */
var levelOrder = function(root) {


    let output = []

    if(!root){
        return output
    }

    let queue = [root]

    while(queue.length){
        let container = []
        let tempQ = []
        while(queue.length){
            let node = stack.shift()
            container.push(node.val)

            if(node.left){
                tempStack.push(node.left)
            }
            if(node.right){
                tempStack.push(node.right)
            }
        }
        queue=tempQ
        output.push(container)
    }

    return output
    
};