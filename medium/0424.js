    /**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let set = new Set()

    for(let i = 0 ; i <s.length; i ++){
            set.add(s[i])
    }
    
    let max = 0 

    for(let v of set){

        for(let i = 0 ; i<s.length;i++){
            if(s[i]===v){
                let counter = 0
                let tolerance = k
                for (let j = i;j<s.length;j++){
                    if(s[j]===v){
                        counter++
                    }
                    else if(s[j]!==v&&tolerance){
                        tolerance--
                        counter++
                    }
                    else{
                        max = Math.max(max,counter)
                        break
                    }
                }

                max = Math.max(max,counter,Math.min(counter+tolerance,s.length))


                //run the code from this point of i 
            }
            else{
                continue
                }

        }
    }

    return max
    
};

console.log(characterReplacement("ABBB",2))
// Input: s = "AABABBA", k = 1
//IMNJJTRMJEGMSOLSCCQICIHLQIOGBJAEHQOCRAJQMBIBATGLJDTBNCPIFRDLRIJHRABBJGQAOLIKRLHDRIGERENNMJSDSSMESSTR
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

// can i implement a set, to check which letters i need to check for, worst case scenario would be 26
// this can be done in o(n) time in one pass

// now to go thru each letter and check the longest streak i can get, while allowing k chances 