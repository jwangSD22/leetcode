class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }

}


class BST {
    
    constructor(){
        this.root = null
    }

    insert(val){
        if(!this.root){
        return this.root = new Node(val)
        }

        let current = this.root
        let newNode = new Node(val)

        while(current){
            if(val<current.val){
                if(!current.left){
                    return current.left = newNode
                }
                else{
                    current = current.left
                }
            }
            else{
                if(!current.right){
                    return current.right = newNode
                }
                else{
                    current = current.right
                }
            }
        }
    }

    find(target){
        let current = this.root
        while(current){
            if(current.val == target ) {
                return current
            }
            else{
                if(target > current.val){
                    current = current.right
                }
                else{
                    current = current.left
                }
                
            }
        }
        return 'Value not in tree'
    }

    levelOrder(node = this.root){
        if(!node){
            return []
        }
        let queue = []
        let final = []
        queue.push(node)
        while(queue.length>0){
        let current = queue.shift()
            if(current.left!==null){
                queue.push(current.left)
            }
            if(current.right!==null){
                queue.push(current.right)
            }

            if(current){
                final.push(current.val)

            }

        }


        return final
    }

    levelOrderRecursive(node = this.root,array=[]){
        if(!node){
            return []
        }
        array.push(node.val)
        this.levelOrderRecursive(node.left,array)
        this.levelOrderRecursive(node.right,array)


        return array
    }


 
}

let booty = new BST

let array = [4,2,6,1,3,5,7]

for(let num of array){
    booty.insert(num)
}




const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.val}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

prettyPrint(booty.root)

console.log(booty.levelOrder())

console.log(booty.levelOrderRecursive())