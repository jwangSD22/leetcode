class SolveQueens{
    constructor(n){
        this.finalArray = []
        this.n = n
        this.board 
        this.moves = []
        this.usedStartLocations = new Set()
        this.openSpaces = new Set()
    }

    constructMoves = () => {
        for (let i = -this.n; i<=this.n;i++){
            if(i!==0){
            this.moves.push([i,0])
            this.moves.push([0,i])
            this.moves.push([i,i])
            }
            }

    }

    genOpenSpaces = () => {
        for(let i = 0;i<this.n;i++){
            for(let j = 0;j<this.n;j++){
                this.openSpaces.add(`${i} ${j}`)
            }
        }
    }
    

    solve = () => { 
        this.constructMoves()
        this.genOpenSpaces()

        for(let i = 0;i<this.n;i++){
            for(let j = 0;j<this.n;j++){


                if(!this.usedStartLocations.has(`${i} ${j}`)){
                    let queen = new Queen(i,j,this, new Set(this.openSpaces) )
                    queen.traverse()
                }

            }
        }

    }






}



// the parent object will invariably have to consider every position on the board as a starting position
// in the parent object - when running DFS -- it needs to know where other queens have been so it doesn't instantiate the first queen in a position that has already been used 


class Queen{
    constructor(x,y,parent,openSpaces,otherQueens=[]){
        this.x = x
        this.y = y
        this.openSpaces = openSpaces
        this.otherQueens = otherQueens
        this.parent = parent
        this.validMoves = []

    }

    getValidMoves = () => {
 
        let n = this.parent.n

        for(let move of this.parent.moves){
            if(this.x+move[0]>=0&&this.x+move[0]<n&&this.y+move[1]>=0&&this.y+move[1]<n){
                this.validMoves.push([this.x+move[0],this.y+move[1]])
            }
        }
    }

    traverse = () => {
        this.getValidMoves()


        for(let move of this.validMoves){
            let x = move[0]
            let y = move[1]

            this.openSpaces.delete(`${x} ${y}`)
            }
        this.openSpaces.delete(`${this.x} ${this.y}`)
        this.otherQueens.push([this.x,this.y])

        if(this.otherQueens.length === this.parent.n){
            //solution has been found
            let array = new Array(this.parent.n).fill(new Array(this.parent.n).fill('.'))

            for(let queenPos of this.otherQueens){
                let x = queenPos[0]
                let y = queenPos[1]

                array[x][y] = 'Q'

                this.parent.usedStartLocations.add(`${x} ${y}`)


            }

          return  this.parent.finalArray.push(array)
        }


        if(this.openSpaces.size>0){
            for(let space of this.openSpaces){
                let pos = space.split(' ')
                let x = Number(pos[0])
                let y = Number(pos[1])
                
                let queen = new Queen(x,y,this.parent,new Set(this.openSpaces),this.otherQueens)
                queen.traverse()
            }
        }

        



        

        // check if all of its valid movies conflict with any of the openSpaces .. 

        // if it does then RETURN

            // else we remove all valid moves from availSpaces ###
            // remove this current coord from availSpaces ###
            // add this queen to array of other queens ###
                // if array length is now === to the board size, the solution has been found ###
                // make a copy of the final board, and loop thru the array of other queen locations to fill it with 'Q'  ###
                // push this to the parent board as a solution ###
                // loop thru the otherqueens and add to the usedStartSpaces to stop the parent loop    ###
            
            // recursively traverse every other available space 
    }

}



//need to do dfs and consider starting positions for the whole board  ###

//the global needs of all the individual queens will require          ###
    //a movelist, 
    //an array template to use to fill in the final answer, 
    //a final array to push the final answer

//individual queen needs to be constructed with                       ###
    // starting position
    // indvidual hash table with spaces that have been occupied 
    // an array of other queen locations that have been placed
    

        // if it is valid such that
            // does not conflict with any other used space


                    //how do i check if a space is used?? do i need to carry a baord with the queen , or can i do this on a hash table carried with the queen
                    // wouldn't a hash table make more sense? because then it wouldn't have to be looped thru every single time... 
            
            //this queen can be put into the array of other queens
            
            // if this array's length is === to the boardsize(n) -- then the solution has been found
            // make a copy of the final board, and loop thru the array of other queen locations to fill it with 'Q' 
            // push this to the parent board as a solution
            


let booty = new SolveQueens(4)

booty.solve()
