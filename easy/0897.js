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
 * @return {TreeNode}
 */
var increasingBST = function(root) {

    let arr = []
    
    const getTree =(root) => {
        if(!root){
            return null
        }
        if(root.left){
            if(getTree(root.left)){
                arr.push(getTree(root.left))
            }
        }
        arr.push(root.val)

        
        if(root.right){
                       if(getTree(root.right)){
                arr.push(getTree(root.right))
            }
        
}
    }

    getTree(root)

console.log(arr)
    //the array will now have all the nodes in order traversla 

    let head = null
    let start

 while(arr.length){
        if(!head){
            head = new TreeNode(arr.shift())
            start = head
        }
        else{
            head.right = new TreeNode(arr.shift())
            head.left = null
            head = head.right
        }




    }

    return start
 }
        



    
