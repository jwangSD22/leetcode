/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {

    let answer = new Scheduler(tasks,n)

    return answer.start()

    
    
};

class Scheduler {
    constructor(tasks,n){
        this.n = n
        this.heap = []
        this.tracker = new Map()
        this.queue = []
        this.time = 0
        
        this.initialize(tasks)

    }

    initialize(tasks){
        for(let task of tasks){
            this.tracker.set(task,(this.tracker.get(task)||0)+1)
        }


        // add everything from tasks into priority queue
        for(let [k,v] of this.tracker){
            this.add(k)
        }

    }

    add(task){
        let value = this.tracker.get(task)
        this.heap.push(task)

        let nodeIdx = this.heap.length-1
        let parentIdx = (nodeIdx-1)>>1
        if(parentIdx>0){
            parentIdx===0
        }

        while(parentIdx!==nodeIdx&&this.tracker.get(this.heap[nodeIdx])>this.tracker.get(this.heap[parentIdx])){
            this.swap(nodeIdx,parentIdx)
            nodeIdx = parentIdx
            parentIdx = (nodeIdx-1)>>1

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
        this.heap[0]=this.heap.pop()

        this.heapify(0)


        return returnVal
    }

    heapify(i){
        let max = i
        let length = this.heap.length
        let left = i*2+1
        let right = i*2+2

        if(left<=length&&this.tracker.get(this.heap[left])>this.tracker.get(this.heap[max])){
            max=left
        }
        if(right<=length&&this.tracker.get(this.heap[right])>this.tracker.get(this.heap[max])){
            max = right
        }

        if(i!==max){
            this.swap(i,max)

            this.heapify(max)
        }



    }

    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }



    start(){

        // while this.tracker has a size (stuff still needs to be done)
        while(this.tracker.size){

        this.time+=1

        // check if any items become available again at this time
        if(this.queue.length&&this.queue[0][0]===this.time){
            let dequeued = this.queue.shift()[1]
            // add back on to heap
            this.add(dequeued)
        }


        // dequeue from priority heap 
        let item = this.extract()

        if(item!==null){
        // reduce value in tracker for item 
            // if value is 0 , we can remove from tracker and dont have to push on queue either
            if(this.tracker.get(item)===1){
                this.tracker.delete(item)
            }
                // if value is not 0 , we decrement value by 1, and add [time+this.n,item] to queue
            else{
                this.tracker.set(item,this.tracker.get(item)-1)
                this.queue.push([this.time+this.n+1,item])
            }
        }


        
        }
        return this.time
    }




}


tasks = ["A","A","A","B","B","B"]

let booty = new Scheduler(tasks,2)

console.log(booty.heap)

console.log(booty.start())