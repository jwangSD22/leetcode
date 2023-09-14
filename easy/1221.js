/**
 * @param {string} s
 * @return {number}
 */

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.


var balancedStringSplit = function(s) {

    //originally used a stack but took it away because it used too much memory -- so just using a counter now 
    
    let stackCount = 0
    let current = null
    let finalCount = 0


    for (let i = 0;i<s.length;i++){
        if(stackCount===0){
            stackCount+=1
            current = s[i]
        }
        else{
            if(current){
                if(s[i]===current){
                    stackCount+=1
                }
                else{
                    stackCount-=1

                    if(stackCount===0){
                        current = null
                        finalCount +=1
                    }
                }
            }
        }

    }


    return finalCount

    //we should be able to do this in o(n) because we can just parse the string to find out each substring and reset the criteria after each is found
    //we could use a stack as the ds to handle 



};

