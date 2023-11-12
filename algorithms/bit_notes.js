// FINDING POWER OF TWO

// n & (n-1) - Check if 

// n is a power of two:

// n&(n-1) is a common trick to check if n is a power of two 

// if n is a power of two, it has exactly one bit set in its binary representation

// remember each bit is a representation of 2**n



// FINDING POWER OF FOUR

// (n & 0x55555555) - Check the 1-bit location:

// The expression 0x55555555 checks whether the set bit in n is at an odd position.

// 0x55555555 has alternating bits set to 1 and 0 in binary where the rightmost is 1:

// like 101010101010101

// if you notice, all the 1s are in the odd positions 

// if n should have a set bit at any odd position it is thus a power of four, so you can combine with the previous algo

// // if (!n&(n-1)) && (n&0x55555555)

// // the ! means the result of n&(n-1) is === 0 or a falsy statement

// // the second statemenet evaluates an AND statemenet of the single set bit matches one of the odd positions
// // because otherwise the expression would be falsy and return just 000000000000


// https://leetcode.com/problems/sum-of-two-integers/solutions/84278/a-summary-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently/