class KthLargest{
    constructor(k,nums){
        this.heap = []
        this.k = k

        for(let num of nums){
            this.insert(num)
        }
    }

    add(val){
        this.insert(val)
        let tempArray = []
        let counter = 0
        while(counter!==this.k){
            let dq = this.extract()
            if(dq===0){
                console.log('triggered')
            }
            tempArray.push(dq)
            counter++
        }

        for(let x of tempArray){
            this.insert(x)
        }
        
        return tempArray[tempArray.length-1]
    }
    

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

    extract(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }

        let returnVal = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.dequeue()

        return returnVal
    }

    dequeue(){
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
        

        
    }



    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }



}

let booty = new KthLargest(1,[])

console.log(booty.add(-3))
console.log(booty.add(-2))
console.log(booty.add(-4))
console.log(booty.add(0))
console.log(booty.add(4))
