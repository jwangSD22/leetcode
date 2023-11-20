/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
let dfsVersion = function(node,map=new Map()){
  if(!node){return null}

  if(map.has(node)){
    return map.get(node)
  }

  let first = new Node(node.val)

  for( let n of node.neighbors){

    first.neighbors.push(dfsVersion(n,map))


  }

  return first

}


var cloneGraph = function(node,map = new Map(),visited = new Map()) {
    if(!node){return null}

    let queue = []

    queue.push(node)

    let firstClone = new Node(node.val)
    map.set(node,firstClone)
    
    
    while(queue.length>0){
    
    let currentNode = queue.shift()
    let currentClone = map.get(currentNode)
    visited.set(currentNode,true)
   
    for(let n of currentNode.neighbors){
      if(!visited.has(n)&&queue.indexOf(n)<0){
        queue.push(n)
      }

      if(!map.has(n)){
        let clone = new Node(n.val)
        currentClone.neighbors.push(clone)
        map.set(n,clone)
      }
      else{
        currentClone.neighbors.push(map.get(n))
      }

    }

    }
    return map.get(node)
    };