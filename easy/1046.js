/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

    let quarry = new MakeStones

    for(let stone of stones){
        quarry.insert(stone)
    }

    
    while(quarry.heap.length>1){
        quarry.extractStones()
    }


    return quarry.heap.length===0?0:quarry.heap[0]
        
};

class MakeStones{
    constructor(){
        this.heap = []
    }

    insert(val){
        this.heap.push(val)

        let nodeIdx = this.heap.length-1
        let parentIdx = (nodeIdx-1)>>1

        while(this.heap[nodeIdx]>this.heap[parentIdx]){
            this.swap(nodeIdx,parentIdx)

            nodeIdx = parentIdx
            parentIdx = (nodeIdx-1)>>1
        }
    }

    extractStones(){

        let x = this.heap[0]
        this.heap[0]=this.heap.pop()

        this.heapify()

        let y = this.heap[0]

        if(this.heap.length===1){
            this.heap.pop()
        }
        else{
            this.heap[0]= this.heap.pop()
        }
        this.heapify()


        let smashedStone = Math.abs(x-y)


        if(smashedStone>0){
            this.insert(smashedStone)
            }



    }

    dq(){

        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }

        let returnVal = this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapify(0)
        return returnVal

    }

    heapify(i){
        let max = i
        let left = i*2+1
        let right = i*2+2
      

        if(left<=this.heap.length&&this.heap[left]>this.heap[max]){
            max = left
        }
        if(right<=this.heap.length&&this.heap[right]>this.heap[max]){
            max = right
        }

        if(i!==max){
            this.swap(i,max)
            this.heapify(max)
        }






        
    }

    swap(i,j){
        [[this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]]
    }
}


let booty = new MakeStones()
booty.insert(3)
booty.insert(7)
booty.insert(2)
console.log(booty.heap)
console.log(booty.dq())
console.log(booty.heap)
console.log(booty.dq())
console.log(booty.heap)
console.log(booty.dq())
console.log(booty.heap)

console.log(lastStoneWeight([3,7,2]))
