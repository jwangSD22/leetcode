/**
 * @param {character[][]} board
 * @return {boolean}
 */

// need to think about traversing the entire board, and collecting data on the way
// need to collect each item of data and put into their appropriate category 
// row1 row2 row3, col1, col2, col3, box1, box2, box3

// if when traversing any of the new additions violate the rules of sudoku, you can return false



var isValidSudoku = function(board) {



    
};







const check = (arr) => {
 const h = new Map()
 for(let num of arr){
     if(!h.get(num)&&Number(num)) {
         h.set(num,true)
     }
     else if (Number(num)){
         return false
     }
 }   
 return true
}

