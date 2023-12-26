/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) {
        return []
    }
    let final = []
    let h = { 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz' }
    helper(final, '', digits)

    return final


    function helper(array, current, digits) {
        if (digits.length === 0) {
            array.push(current)
            return
        }
        if (digits[0] > 1) {
            for (let letter of h[digits[0]]) {
                helper(array, current + letter, digits.slice(1))
            }
        }
        else {
            helper(array, current, digits.slice(1))
        }
    }

};

console.log(letterCombinations('23'))