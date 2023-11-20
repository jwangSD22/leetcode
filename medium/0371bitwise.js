/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {

    // find the carry and shift left 1 space



    let carry = (a&b)<<1
    let reg = a^b

    if(carry&reg){
        return getSum(reg,carry)
    }


    return carry|reg
    
};

var getSum = function(a, b) {
    while (b !== 0) {
        const carry = a & b;
        a ^= b;
        b = carry << 1;
        if (b === 0 && carry === 0) break;
    }
    return a;
};