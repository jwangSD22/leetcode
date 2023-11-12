/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    //temporary holder in result
    let result = 0b0;
    let current = n;

    for (let i = 0; i < 32; i++) {
        let lastBit = current & 0b1;
        //checks what the last bit is... is it 1 or 0
        result = result << 1;
        // shifts result over 1 space
        // so if result was 01
        // it is now 10

        result = result | lastBit;
        // if the last bit was 1 
        // result = 10 | 01
        // result = 11

        //if last bit was 0
        // result = 10 | 00
        // result = 10

        // using | basically checks if there's a 1 

        current = current >> 1;

        //this will shift the last bit off current, to work in the new one's place
    }

    return result >>> 0;

    //this last line basically converts whatever binary there was to an unsigned integer
}
console.log(reverseBits(0b00000010100101000001111010011100))

