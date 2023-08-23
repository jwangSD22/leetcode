//9. PALINDROME NUMBER

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let myString = x.toString()
    let stringSplit = myString.split('')
    let reversed = ''

    for (let i = 0;i<myString.length;i++){
        let popped = stringSplit.pop()
        reversed+=popped
    }



    return myString===reversed



    
};


// It is also to use string methods to just use split, reverse, join and just compare the before and after for equality
