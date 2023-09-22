
 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {

    let acc = []
    let stack = []
    if(!root){
        return []
    }
    stack.push(root)
    while(stack.length>0){

    let current = stack.pop()


    if(current.left){
        stack.push(current.left)
        current.left=null
    }
    if(current.right){
        stack.push(current.right)
        current.right=null
    }

        acc.push(current.val)
    
    }


return acc
    
};

let one = new TreeNode(1)

one.right = new TreeNode(2)

one.right.left = new TreeNode(3)

console.log(postorderTraversal(one))