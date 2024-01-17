/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {



    function build(array){
        if(!array.length){
            return null
        }
        let [index,count] = [0,0]
        for(let i = 0;i<array.length;i++){
            if(array[i]>count){
                count=array[i]
                index = i
            }
        }

        let main = new TreeNode(count)
        main.left = build(array.slice(0,index))
        main.right = build(array.slice(index+1))

        return main
    }



    return build(nums)
    
};

var constructMaximumBinaryTree = function(nums) {
    const tree = []
    nums.forEach(val => {
        const current = new TreeNode(val)

        while (tree.length && tree[tree.length - 1].val < val){
            current.left = tree.pop()
        }
        
        if (tree.length > 0) {
            tree[tree.length - 1].right = current
        }

        tree.push(current)
    })

    return tree[0];
};