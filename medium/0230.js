const tree = {
    val: 5,
    left: {
      val: 3,
      left: {
        val: 2,
        left: {
          val: 1,
          left: null,
          right: null
        },
        right: null
      },
      right: {
        val: 4,
        left: null,
        right: null
      }
    },
    right: {
      val: 6,
      left: null,
      right: null
    }
  };

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    let count = 0
    let curr = 0 

    function dfs(root){


        if(!root){
            return 
        }




        dfs(root.left)
        count+=1
        if(count===k){
            curr = root.val
        }
        dfs(root.right)


    }

    dfs(root)
    return curr
    
};

console.log(kthSmallest(tree,3))