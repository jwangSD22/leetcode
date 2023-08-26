// pascal's triangle II

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    if(rowIndex == 0 ){
        return [1]
    }
    if(rowIndex == 1){
        return [1,1]
    }


    let array = [1]
    let lastArray = getRow(rowIndex-1)

    for (let i = 0 ; i<lastArray.length-1; i++){

        array.push(lastArray[i]+lastArray[i+1])
    }

    array.push(1)

    return array
    
};


//can you do with o(rowIndex) space?

