 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
 }
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root){
        return []
    }

    let output = []

    let queue = [root]

    while(queue.length){
        let trackerArray = []
        let curLength = queue.length
        
        for(let i = 0 ;i<curLength; i++){
            console.log(queue.length)
            let node = queue.shift()
            trackerArray.push(node.val)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }

        console.log(trackerArray)
        output.push(trackerArray.at(-1))
    }

    return output
    
};

let booty = new TreeNode(1)
booty.left = new TreeNode(2)
booty.right= new TreeNode(3)
console.log(rightSideView(booty))