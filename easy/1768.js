/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    word1 = word1.split('')
    word2 = word2.split('')

    let final = []


while(word1.length>0 || word2.length >0){
    
    let letter1 = word1.shift()
    let letter2 = word2.shift()

    if(letter1!==undefined){
        final.push(letter1)
    }
    if(letter2!==undefined){
        final.push(letter2)
    }


}

return final.join('')


        
    };

