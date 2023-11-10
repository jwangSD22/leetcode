//49 group anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const hasher = (string) => {



    return string.split('').sort().join('')
}

var groupAnagrams = function(strs) {

    let hm = new Map()

    for(let str of strs){
        let value = hasher(str)

        if(!hm.get(value)){
            hm.set(value,[str])
        }else{
            arr = hm.get(value)
            arr.push(str)

            hm.set(value,arr)
        }
        
    }




    let final = []

    for(let [k,v] of hm){
        final.push(v)
    }

    return final


    
};

