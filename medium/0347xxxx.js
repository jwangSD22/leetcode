/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {


    let h = new Map()
    for (let num of nums){
        h.set(num,(h.get(num)||0)+1)
    }

    let heap = new MaxHeap(h)

    for(let [k,v] of h){

        heap.add(k)
    }

    let final = []
    for(let i = 0 ;i<k;i++){
        final.push(heap.extract())
    }


    return final

};



class MaxHeap {
    constructor(map){
        this.heap = []
        this.map = map
    }

    add(val){
        this.heap.push(val)
        let nodeIdx = this.heap.length-1
        let parent = (nodeIdx-1)>>1



        while(this.convert(nodeIdx)>this.convert(parent)){
            this.swap(nodeIdx,parent)
            nodeIdx = parent
            parent=(nodeIdx-1)>>1
        }


    }

    convert(idx){
        return this.map.get(this.heap[idx])
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

        let length = this.heap.length
        let max = i
        let left = i*2+1
        let right = i*2+2

        if(left<=length&&this.convert(left)>this.convert(max)){
            max = left
        }
        if(right<=length&&this.convert(right)>this.convert(max)){
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


}


console.log(topKFrequent([5,-3,9,1,7,7,9,10,2,2,10,10,3,-1,3,7,-9,-1,3,3],3))


