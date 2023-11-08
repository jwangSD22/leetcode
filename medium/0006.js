/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if(numRows===1){
        return s
    }

    let array = Array(numRows).fill('')
    let curr = -1
    let direction = 1

    
    for(let letter of s){

        //add letter to current row
        //increment current by the direction

        //if the current is ==== numrows
        //we need to reverse the direction

        //if the current is now 0 and directino is -1
        // we need to flip the direction back to positive
        curr+=direction

        array[curr]=array[curr]+letter

        if(curr===numRows-1){
            direction = -1
        }
        if(curr===0&&direction===-1){
            direction = 1
        }






    }
    


    return array.join('')
};

console.log(convert('PAYPALISHIRING',4))

