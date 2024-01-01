function diameter(root){
    
    let globalDiameter = 0

    function findMaxBranchLength(root){

        if(!root){
            return 0
        }

        //standard traversal to bottom of tree
        let left = findMaxBranchLength(root.left)
        let right = findMaxBranchLength(root.right)

        // calculate diameter at each node (including the node) and compare to global

        globalDiameter = Math.max(globalDiameter,left+right)

        // for the return value of this specific node, return which ever leg is longer to help the node above to calculate its best diameter option
        
        // must include + 1 here because we want to include this node in the calculation of the longest leg the next node can choose from
        return Math.max(left,right) + 1
    }


    // use our DFS function
    findMaxBranchLength(root)

    //global diameter will be updated to the best possible option
    return globalDiameter
    


}