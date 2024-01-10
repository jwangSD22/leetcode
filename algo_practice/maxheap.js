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


    //trickle down
    dequeue(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        let returnVal = this.heap[0]
        this.heap[0] = this.heap.pop()


        let nodeIdx = 0
        let left = (nodeIdx*2)+1
        let right = (nodeIdx*2)+2
        let maxIdx
        while(this.heap[nodeIdx]<this.heap[left]||this.heap[nodeIdx]<this.heap[right]){
            
            if(this.heap[left]>this.heap[right]){
                maxIdx = left
                
            }else{
                maxIdx = right
                
            }
            this.swap(nodeIdx,maxIdx)

            nodeIdx = maxIdx
            left = (nodeIdx*2)+1
            right = (nodeIdx*2)+2
            

            if (left >= this.heap.length || right >= this.heap.length) {
                break;
              }
        }
        

        
        return returnVal
    }

    superdq(){
        let array = []
        while(this.heap.length){
            array.push(this.dequeue())
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
booty.insert(1)

console.log(booty.superdq())