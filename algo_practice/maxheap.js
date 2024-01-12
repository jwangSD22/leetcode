class Heap {
    constructor(){
        this.heap = []
    }

    //trickle up
    insert(val){
        this.heap.push(val)
        let nodeIdx = this.heap.length-1
        let parentIdx = (nodeIdx-1)>>1

        while(this.heap[nodeIdx]>this.heap[parentIdx]){
            this.swap(nodeIdx,parentIdx)
            nodeIdx = parentIdx
            parentIdx = Math.floor((nodeIdx-1)/2)
        }

    }


    extract() {
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
        
  
            return this.heap.pop()
        }
        let returnVal = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapify(0)

        return returnVal
    }


    //trickle down
    heapify(i){
        let max = i
        let left = (i*2)+1
        let right = (i*2)+2
   
        if(left<=this.heap.length&&this.heap[left]>this.heap[max]){
            max=left
        }
        if(right<=this.heap.length&&this.heap[right]>this.heap[max]){
            max=right
        }

        if(i!==max){
            this.swap(i,max)
            this.heapify(max)
        } 
    }

    superdq(){
        let array = []
        while(this.heap.length){
            array.push(this.extract())
        }

        return array
    }

    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }


}

let booty = new Heap()

booty.insert(3)
booty.insert(2)
booty.insert(8)
booty.insert(10)
booty.insert(4)
booty.insert(-4)
booty.insert(0)
booty.insert(1)

console.log(booty.superdq())