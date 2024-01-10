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

        this.trickleDown()

        return returnVal
    }

    trickleDown(){
        let nodeIdx = 0 
        let left = nodeIdx*2 + 1
        let right = nodeIdx*2 + 2

        while(this.heap[nodeIdx]>this.heap[left]||this.heap[nodeIdx]>this.heap[right]){

            let min
            if(this.heap[left]<this.heap[right]){
                min = left
            }
            else{
                min = right
            }

            this.swap(nodeIdx,min)

            nodeIdx = min
            left = nodeIdx*2 + 1
            right = nodeIdx*2 + 2

            if(left>this.heap.length||right>this.heap.length){
                break
            }


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
