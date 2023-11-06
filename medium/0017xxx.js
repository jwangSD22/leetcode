/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if(!digits){
        return []
    }
    
let hash = 
{
    '2':'abc',
    '3':'def',
    '4':'ghi',
    '5':'jkl',
    '6':'mno',
    '7':'pqrs',
    '8':'tuv',
    '9':'wxyz'
}

let final = ['']

for (let digit of digits){
    let newCombos = []
    for(let combo of final){
    
        for(let letter of hash[digit]){
            newCombos.push(combo+letter)
        }

    }

    final = newCombos
}

return final



};

//this is iterative approach, can you do backtracking approach?

