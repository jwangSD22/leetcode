//finds the greatest common divisor

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

//   function gcd(a, b) {: This line declares a JavaScript function named gcd that takes two parameters, a and b. These parameters represent the two numbers for which we want to find the greatest common divisor (GCD).

//     return b === 0 ? a : gcd(b, a % b);: This line is a concise way of expressing a conditional (ternary) statement. It calculates the GCD recursively using the Euclidean algorithm.
    
//     b === 0: This part checks if b is equal to 0, which is the base case of the algorithm. If b is 0, it means we have found the GCD, and the function returns a.
    
//     a % b: This calculates the remainder when a is divided by b. This remainder becomes the new b in the next recursive call.
    
//     gcd(b, a % b): If b is not 0, the function calls itself recursively with the arguments b and a % b. This recursive call continues until b becomes 0.
    
//     The entire expression is a shorthand way of writing an if-else statement. If b is 0, it returns a; otherwise, it makes a recursive call.





// ##### The algorithm is based on the principle that the GCD of two numbers is the same as the GCD of the smaller number and the remainder when the larger number is divided by the smaller number.


