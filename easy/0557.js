//557 reverse words in a string 3

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let array = s.split(' ')
    for(let index in array){
        array[index] = array[index].split('').reverse().join('')
        
    }


    return array.join(' ')



    
};