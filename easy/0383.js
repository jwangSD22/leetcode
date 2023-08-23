//383 RANSOM NOTE

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    let hash = {}

//setup hash table with magazine letters and the counts of each letter
    for(let i = 0 ;i<magazine.length; i++){
        if (hash[magazine[i]]===undefined){
            hash[magazine[i]]=1
        }
        else{
            hash[magazine[i]]+=1
        }
    }

    for(let i = 0; i<ransomNote.length;i++){
        if(hash[ransomNote[i]]==undefined){
            return false
        }
        else{
            hash[ransomNote[i]]--
            if(hash[ransomNote[i]]<0){
                return false
            }

        }
    }


    return true
};
