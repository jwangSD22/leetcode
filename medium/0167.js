/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    let i = 0
    let j = numbers.length-1

    while(i<j){

        let current = numbers[i]+numbers[j]

        if(current===target){
            return [i+1,j+1]
        }
        if(current>target){
            j--
        }
        else{
            i++
        }



    }

    


    
};

console.log(twoSum([2,3,4,5,7],6))