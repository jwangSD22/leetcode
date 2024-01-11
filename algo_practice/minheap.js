class Heap{
    constructor(){
        this.heap=[]
    }

    //trickle up
    insert (val){
        this.heap.push(val)
        let nodeIdx = this.heap.length-1
        let parentIdx = Math.floor((nodeIdx-1)/2)

        while(this.heap[nodeIdx]<this.heap[parentIdx]){
            this.swap(nodeIdx,parentIdx)
            nodeIdx=parentIdx
            parentIdx = Math.floor((nodeIdx-1)/2)
        }

    }


    //trickle down
    extract(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }

        let returnVal = this.heap[0]
        this.heap[0]=this.heap.pop()

        this.trickleDown(0)

        return returnVal
    }

    trickleDown(nodeIdx){
        let min = nodeIdx
        let left = nodeIdx*2 + 1
        let right = nodeIdx*2 + 2

        if(left<=this.heap.length&&this.heap[left]<this.heap[min]){
            min=left
        }
        if(right<=this.heap.length&&this.heap[right]<this.heap[min]){
            min=right
        }

        if(nodeIdx!==min){
            this.swap(nodeIdx,min)
            this.trickleDown(min)
        }




    }

    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }

}

let booty = new Heap

booty.insert(5)
booty.insert(4)
booty.insert(3)
booty.insert(10)
booty.insert(6)

console.log(booty.heap)

console.log(booty.extract())
console.log(booty.heap)

console.log(booty.extract())
console.log(booty.heap)

console.log(booty.extract())
console.log(booty.heap)
console.log(booty.extract())
console.log(booty.heap)
console.log(booty.extract())
console.log(booty.heap)
console.log(booty.extract())
console.log(booty.heap)
console.log(booty.extract())
console.log(booty.heap)
console.log(booty.extract())
console.log(booty.heap)
console.log(booty.extract())
console.log(booty.heap)
