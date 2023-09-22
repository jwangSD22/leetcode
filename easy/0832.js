/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {

    for(let row of image){
        row.reverse()
        for(let index in row){
            if(row[index]===0){
                row[index]=1
            }else{
                row[index]=0
            }
        }
    }

return image

    
};

