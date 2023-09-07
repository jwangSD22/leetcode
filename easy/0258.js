//258 add digits


/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num.toString().length===1){
        return num
    }
    let array = num.toString().split('')
    let reducer = array.reduce((acc,curr)=>acc+Number(curr),0)

    return addDigits(reducer)
};

let booty = 123


console.log(addDigits(booty))
