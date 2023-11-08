/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

    let hash = {}
    for(let l of s){
        hash[l] = (hash[l] || 0) + 1
    }

    for (let le of t){
        if(!hash[le]){
            return le
        }
        else{
            hash[le]-=1
        }
    }

    for(let k in hash){
        if(hash[k]>=0){
            return k
        }
    }




    
};

