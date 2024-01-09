/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    //the assertion that we need to make is that each node of preorder is going to be the next "middle" that we need to locate in the inorder tree.
    
    
    let hash = new Map()
    
    for(let i = 0 ; i<inorder.length; i ++){
        hash.set(inorder[i],i)
    }
    
    return builder(preorder,0,0,inorder.length-1)
    
    
    function builder(preorder,preindex,lo,hi){
        let newNode = new TreeNode(preorder[preindex])
    
        let mid = hash.get(preorder[preindex])
    
        if(lo<mid){
    
            newNode.left = builder(preorder,preindex+1,lo,mid-1)
    // build left
        }
    
        if(mid<hi){
    //build right
            newNode.right = builder(preorder,(mid-lo)+preindex+1,mid+1,hi)
        }
      
        return newNode
    }
    
    
    
    
    };