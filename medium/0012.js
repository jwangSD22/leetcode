// 0012 integer to roman

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

    //divide by 1000 to find out how many Ms there need to be -- max num is 3999

    // set current to the remainder -- in the hundreds

    // divide by 100 to see if 4 or 9  , math .floor to check if u need to put a C in front

    // take remainder and do this again

    let final = ''

    let current = num

    let findM = Math.floor(current/1000)
    for(let i = 0 ;i<findM; i++){
        final+='M'
    }
    
    current = num%1000

    let hundreds = Math.floor(current/100)

    if(hundreds>=5){
        final+='D'
        hundreds-=5
    }
    for(let i = 0; i<hundreds;i++){
        final+='C'
    }

    current = current%100

    let tens = Math.floor(current/10)

    if(tens>=5){
        final+='L'
        tens-=5
    }
    for(let i = 0; i<tens;i++){
        final+='X'
    }


    current = current%10

    let ones = Math.floor(current/1)

    if(ones>=5){
        final+='V'
        tens-=5
    }
    for(let i = 0; i<ones;i++){
        final+='I'
    }






    console.log(final)

    
    
};

intToRoman(2999)

let array = [1,2,3,4,5]

console.log(array[Math.floor(3/2)])