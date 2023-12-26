/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let string = x.toString()
    let negative = false


    if(string[0]==='-'){
        negative = true
    }

    if(negative){
        string=string.slice(1)
    }

    let number = string.split('')

    if(number.length>31){
        return 0
    }

    while(number[number.length-1]==='0'){
        number.pop()
    }



    if(negative){
        number.push('-')
    }

    let final = number.reverse().join('')


    return final>(2**31)-1||final<(-1*2**31)?0:final



    
};

console.log(reverse(1534236469))