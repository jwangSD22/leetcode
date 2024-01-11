/**
 *
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
   let test = new KthLargest(k,nums)

   return test.heap[0]
    
};

class KthLargest{
    constructor(k,nums){
        this.heap = []
        this.k = k

        for(let num of nums){
            this.add(num)
        }
    }

    add(val){
        this.heap.push(val)
        let nodeIdx = this.heap.length-1
        let parentIdx = (nodeIdx-1)>>1

        while(this.heap[nodeIdx]<this.heap[parentIdx]){
            this.swap(nodeIdx,parentIdx)
            nodeIdx = parentIdx
            parentIdx = Math.floor((nodeIdx-1)/2)
        }
        if(this.heap.length>this.k){
            this.extract()
        }
        return this.heap[0]
    }

    extract(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            this.heap.pop()
        }

        this.heap[0]=this.heap.pop()     
        this.dq(0)
    }


    dq(i){
        let min = i
        let left = i*2 + 1
        let right = i*2 + 2

        if(left<=this.heap.length&&this.heap[left]<this.heap[min]){
            min=left
        }
        if(right<=this.heap.length&&this.heap[right]<this.heap[min]){
            min=right
        }

        if(i!==min){
            this.swap(i,min)
            this.dq(min)
        }

    }



    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }


}







