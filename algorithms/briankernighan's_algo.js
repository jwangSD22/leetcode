function bitcount(n){
    let count = 0 
    while(n>0){
        count++
        n=n&(n-1)
    }
    return count
}

// A - 1:

// When you subtract 1 from  A, the rightmost set bit (rightmost 1) and all the bits to its right will flip. The rightmost 1 becomes 0, and all the 0s to its right become 1s. The bits to the left of the rightmost 1 remain unchanged.
// if A = 0b 1000
//then A-1 = 0b 0111

//thus when we do A & (A-1)
// 1000
// 0111

// we will get 0000

// thus clearing the RIGHTMOST SET BIT (rightmost 1)


//in brian kernighan's algo, we just keep removing the rightmost 1 until the number enventually becomes 0 

// thus providing the hamming weight of the number