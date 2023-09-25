/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    if(x===0||x===1){
        return x
    }
    
    let i = 1
    let j = x

    //binary search (i, j, target)

function bs(i,j,target) {
    if(i>=j){
        return i
    }
    else{
    let mid = i+((j-i)/2)
    console.log(mid)
    let square = mid*mid
    console.log(square)

    if(Math.floor(square)>target){
         
        return bs(i,mid,target)
    }
    else if(Math.floor(square)<target){
        
        return bs(mid,j,target)
    }
    else if(Math.floor(square)===target){
        return mid
    }

    }
}


    return Math.floor(bs(i,j,x))
    
    

  


};

