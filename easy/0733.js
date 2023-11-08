/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 * 
 * 
 */


var floodFill = function(image, sr, sc, color) {

    let queue = []
    let current = image[sr][sc]
    let rowlen = image.length
    let collen = image[0].length


    if(current===color){
        return image
    }

    let directions = [[1,0],[-1,0],[0,1],[0,-1]]


    queue.push([sr,sc])

    while(queue.length>0){

        let [qr,qc] = queue.shift()

    for(let key of directions){
        let nr = qr+key[0]
        let nc = qc+key[1]


        if(nr<0||nc<0||nr>=rowlen||nc>=collen)
        {

            continue
        }

        if(image[nr][nc]===current){
            queue.push([nr,nc])
        }
            

    }

    image[qr][qc] = color



    }

    return image



    
};





