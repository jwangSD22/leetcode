function sameTree(a,b) {

    // if one is missing, and they're not BOTH missing, then return false
    // if one is missing, and they're BOTH msising, then return true
    if(!a||!b){return !a&&!b}


    // return false if the values of the current node are both not matching
    if(a.val!==b.val){return false}



    // traverse down both sides of the tree and make sure they both reach the end together without finding a false
    return sameTree(a.left,b.left)&&sameTree(a.right,b.right)
}