/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {


    let visited = new Set()
    let init =  findIsland(grid)
    let stack = []
    stack.push(init)
    let perimeter = 0 

    while(stack.length){

        let current = stack.pop()
        if(!visited.has(`${current[0]},${current[1]}`)){
            visited.add(`${current[0]},${current[1]}`)


            for(let coord of surroundingCoords){
                let x = current[0]+coord[0]
                let y = current[1]+coord[1]
    
    
                if(grid[x]===undefined||grid[0][y]===undefined){
    
                    if(!visited.has(`${x},${y}`)){
                        visited.add(`${x},${y}`)
                        perimeter+=1
                    }
     
                }
    
                else if(grid[x][y]===0){
       
                        perimeter+=1
                    
                }
    
                else if(grid[x][y]===1&&!visited.has(`${x},${y}`)){
                    stack.push([x,y])
    
                }
    
                
            }
    

        }






    }

    return perimeter





    
};

let surroundingCoords = [[0,1],[0,-1],[1,0],[-1,0]]

let findIsland = (grid) => {
    for(let i = 0;i<grid.length;i++){
        for(let j = 0;j<grid[i].length;j++){
            if(grid[i][j]===1){
                return [i,j]
            }
        }
    }
}



let myGrid = [[1,1,0],[1,1,0]]


console.log(islandPerimeter(myGrid))

