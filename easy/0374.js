/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n,start=1,end=n) {

    let low = 1
    let high = n
    
    
    while (low<=high){
        let half = Math.floor(low+(high-low)/2)
        if (guess(half)===0){
            return half
        }
        else if(guess(half)<0){
            high = half-1
        }
        else{
            low = half+1
        }
    }
    
    return false
    
    
    };