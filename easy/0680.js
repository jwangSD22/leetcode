/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

    let i =  0
    let j = s.length-1

    while(i<j){
        if(s[i]===s[j]){
            i++
            j--
        }
        else{
            
            return scan(s,i-1,j)||scan(s,i,j-1)
        }
    }

    return true

    function scan(s,i,j){
        while(i<j){
            if(s[i]===s[j]){
                i++
                j--
            }
            else{
                return false
            }
        }
        return true
    }
    
};