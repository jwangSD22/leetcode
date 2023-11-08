/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {

    let set1 = {}

    let set2 = {}

    for(let i = 0;i<s1.length;i+=2){

        set1[s1[i]] = (set1[s1[i]] || 0) + 1

        set2[s1[i+1]] = (set2[s1[i+1]] || 0) + 1

    }



    for(let i = 0;i<s1.length;i+=2){

        if(set1[s2[i]]>0){
            set1[s2[i]]-=1
        }
        if(set2[s2[i+1]]>0){
            set2[s2[i+1]]-=1
        }
        
    }


    for(let k in set1){

        let v = set1[k]
        if(v != 0 ){
            return false
        }
    }
    for(let [k,v] in set2){
        let v = set2[k]

        if(v != 0 ){
            return false
        }
    }

    return true
    
};

console.log(canBeEqual('abcd','cdab'))