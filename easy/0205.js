/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let hash = new Map()
    let set = new Set()
    for(let idx in s){
        if(!hash.has(s[idx])){
            hash.set(s[idx],t[idx])
            if(set.has(t[idx])){
                return false
            }
            set.add(t[idx])
        }
        else{
            // if hash has the current letter
            // we want to check if the same index in t is what we get from the hashmap
            if(hash.get(s[idx])===t[idx]){
                
            }
            else{
                return false
            }
            
        }
    }

    return true


};