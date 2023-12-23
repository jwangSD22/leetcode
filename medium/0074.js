/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    // since this is all ordered , then we could pretend that this is a long array , and we would just have to calculate the index [x][y] using modulo and math.floor

    let lo = 0 
    let hi = matrix[0].length*matrix.length - 1
    let rowLen = matrix[0].length


        while(lo<=hi){
            let mid = (lo+hi)>>1
            // lo = 0 , mid = 0 , hi = 1 

            let mid0 = Math.floor(mid/rowLen)
            let mid1 = mid%rowLen
            

            if(matrix[mid0][mid1]===target){
                return true
            }
    
            if(target<matrix[mid0][mid1]){
                hi = mid -1
            }
            else{
                lo = mid + 1
            }
    
            //because of the way that this is structured- in the end, after the while loop, lo will represent the upper bound, and hi will represent the lower bound
    
    
        }
    
    
    
        return false
    






}


matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]

console.log(searchMatrix(matrix,11))