//0917 reverse only letters

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let regex = /[a-zA-Z]/g

    let t = s.split('')

  let i = 0
  let j = t.length-1


  while(i<j){
    if(t[i].match(regex)===null){
        i++
    }
    
    else if(t[j].match(regex)===null){
        j--
    }
    else{
        [t[i],t[j]]=[t[j],t[i]]
        i++
        j--

    }

    
       

    }

  

  return t.join('')




};

s = "ab-cd"
console.log(reverseOnlyLetters(s))
