//680 valid palindrome 2

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

    let main = s.split('')
    let reverse = [...main].reverse()


    for(let i = 0; i<main.length;i++){
        if(main[i]!==reverse[i]){

            if(checkBoth(            [...main].splice(i,1),            [...reverse].reverse().splice(i,1).reverse()))
            return true

            else{
                continue
            }
            
        }
    }


    return false
    




        
    };


    function checkBoth(arr1,arr2){
        let arr1 = main.join('')
        let arr2 = reverse.reverse().join('')
    
    
        return arr1===arr2
    }