/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    
    // we can keep a map of all of the tasks and their frequencies, which can help us create a maxheap priority queue.
    // it'll look like {a:10,b:5,c:1,d:1} etc.
    // then we will create our maxpriority queue such that it references back to to the hash table such that [a,b,c,d]
    // we will also create another map that contains the information of whether the task is being delayed... this would only occur if when we 
    // refernce the original hash and we see that it has a count of greater than 1, then we put this task into the delay hash to keep track of each tick 

    // initialize a timecounter to 1
    // run a while loop continues while there is a size for the freq table

        // step - increase every counter in delay hash by 1
        // if the counter is equal to n
        // we move it back into the priority queue referencing its freq from freq table

    // 1. dequeue max priority 
        //a comes out so [b,c,d]
        // 2. check freq map and since this item is greater than 1, we decrement by 1 such that a:9
        // 2.5. to reduce prolonging delay, if this item's frequency is 1, we delete this from the frequency map , and skip inserting it into the delay hash
        // 3. we insert this into the delay hash such that {a:0}

        // if the max priority q is empty, it'll return null, in this case we just go straight to increasing the counter by 1, because null would happen during this time tick

    // 4. incremement counter by 1


    // we can write our priority queue in a class, intialize it by creating freq hash, creating a start function that starts the steps, and returns the time counter

    let answer = new Interval(tasks,n)

    return answer.start()
};

class Interval {
    constructor(tasks,n){
        this.tasks = tasks
        this.n = n
        this.counter = 0 
        this.heap = []
        this.freq = new Map()
        this.queue = []

        this.intialize()
    }
    // creating frequency map
    intialize(){
        for(let task of this.tasks){
            this.freq.set(task,(this.freq.get(task)||0)+1)
        }
        for(let [k,v] of this.freq){
            this.add(v)
        }
    }
    // max priority q 
    add(val){
        this.heap.push(val)
        let nodeIdx = this.heap.length-1
        let parentIdx = (nodeIdx-1)>>1 
        if(parentIdx===-1){
            parentIdx=0
        }       
        while(this.heap[nodeIdx]>this.heap[parentIdx]){
            this.swap(nodeIdx,parentIdx)
            nodeIdx=parentIdx
            parentIdx = (nodeIdx-1)>>1 - 1
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

        this.heapify(0)
        return returnVal
    }
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
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]

    }
    // main function for running the problem
    start(){

        while(this.heap.length||this.queue.length){

            // handle delay hash
            if(this.queue.length){
                let curr = this.queue[0][1]
                if(curr===this.counter){
                    let returnVal = this.queue.shift()[0]
                    this.add(returnVal)
                }
            }



            //handle max heap
            let extracted = this.extract()
            if(!extracted){
       
            }else{
                extracted-=1
                if(extracted!=0){
                    this.queue.push([extracted,this.counter+this.n+1])
                }
                
            }

            this.counter++


        }

        return this.counter



    }

}

let tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"]

let booty = new Interval(tasks,2)

console.log(booty.start())
