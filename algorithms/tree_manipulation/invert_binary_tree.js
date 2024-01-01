function invert(root){
    if(!root){return root}

    let left = invert(root.left)
    let right = invert(root.right)

    root.left = right
    root.right = left

    return root



}