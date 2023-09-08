//441 arranging coins

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {

    let num = n
    
    for(let i = 1;i<Infinity;i++){
    
    if(num-i>=0){
    num-=i
        if(num===0){
            return i
        }
        continue
    
    
    }
    else{
        
        return i-1
    }
    
    }
    
    
    
        
    };
