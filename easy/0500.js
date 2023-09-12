//0500 keyboard row

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let top = "qwertyuiop"
    let mid = "asdfghjkl"
    let bot = "zxcvbnm"

    
   let first = {}
   let second = {}
   let third = {}

    let output = []

    for(let letter of top){
        first[letter] = true
    }
    for(let letter of mid){
        second[letter] = true
    }
    for(let letter of bot){
        third[letter] = true
    }
    

    for(let word of words){
        if(first[word[0].toLowerCase()]&&helper(word,first)){
            output.push(word)
        }
        else if(second[word[0].toLowerCase()]&&helper(word,second)){
            output.push(word)
        }
        else if(third[word[0].toLowerCase()]&&helper(word,third)){
            output.push(word)
        }
        
    }

    return output


    
};

let helper = function(word,dictionary){
    for (let letter of word){
     
        if(dictionary[letter.toLowerCase()]===undefined){
            return false
        }
    }
    return true
}

