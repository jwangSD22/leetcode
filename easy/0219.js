/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {


    let max = 0
    let set = new Set()
    let pointer = 0

    for (let i = 0; i < s.length; i++) {

        if (set.has(s[i])) {
            while (set.has(s[i])) {
                set.delete(s[pointer])
                pointer++
            }
        }

        set.add(s[i])

        max = Math.max(max, set.size)
    }

    return max


};


console.log(lengthOfLongestSubstring('pwkwer'))
