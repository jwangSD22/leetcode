/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    //check letters of other string, must be the same set of letters
    for(let letter of s1){
        if(s2.indexOf(letter)==-1){
            return false
        }
    }

    //the letters being worked with must be the same in each 'set"
    set1 = [[s1[0],s1[2]],[s2[0],s2[2]]]
    set2 = [[s1[1],s1[3]],[s2[1],s2[3]]]

    function checkset(set){
        for(let item of set[0]){
            if(set[1].indexOf(item)==-1){
                return false
            }
        }
    }

    if(!checkset(set1)||!checkset(set2)){
        return false
    }



    let split1 = s1.split('')
    let split2 = s2.split('')

    if(split2[0]==split1[0]&&split2[2]!==split1[2]){
        return false
    }
    if(split2[2]==split1[2]&&split2[0]!==split1[0]){
        return false
    }
    if(split2[0]==split1[2]&&split2[2]!==split1[0]){
        return false
    }
    if(split2[2]==split1[0]&&split2[0]!==split1[2]){
        return false
    }
    if(split2[1]==split1[1]&&split2[3]!==split1[3]){
        return false
    }
    if(split2[3]==split1[3]&&split2[1]!==split1[1]){
        return false
    }
    if(split2[1]==split1[3]&&split2[3]!==split1[1]){
        return false
    }
    if(split2[3]==split1[1]&&split2[1]!==split1[3]){
        return false
    }
    
    return true
    


};