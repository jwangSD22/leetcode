/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {

    let hash = {}
    
    for(let word of s1.split(' ')){
    
        if(!hash[word]){
            hash[word] = 1 
        }
        else{
            hash[word]+=1
        }
    
    }

    for(let word of s2.split(' ')){
    
        if(!hash[word]){
            hash[word] = 1 
        }
        else{
            hash[word]+=1
        }
    
    }


    console.log(hash)
    
    let final = []
    
    for(let key in hash){
        
        if(hash[key]===1){
            final.push(key)
        }
    }
    
    return final
    
        
    };

    s1 =
"this apple is sweet"

s2 =
"this apple is sour"

console.log(uncommonFromSentences(s1,s2))