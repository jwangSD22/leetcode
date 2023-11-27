/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0){
      return false
  }
  let temp = x
  let flipped = 0

  while(temp>=1){
      let remainder = temp%10
      temp = Math.floor(temp/10)
      flipped*=10
      flipped+=remainder
  }


return flipped===x




};
console.log(isPalindrome(123))