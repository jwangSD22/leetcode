/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

    let i = 0 
    let j = 0 
    let final = ''



    while(i<word1.length&&j<word2.length){
        if(i<=j){
            final+=word1[i]
            i++
        }
        else{
            final+=word2[j]
            j++
        }
    }


    final+=word1.slice(i)
    final+=word2.slice(j)
    

    return final
};