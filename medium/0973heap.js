/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {

    let answer = new PointHeap(points,k)

    return answer.output()


};

class PointHeap{
    constructor(points,k){
        this.heap=[]
        this.k = k
        this.final = []

        for(let point of points){
            this.add(point)
        
        }
  
    }

    add(arr){
        this.heap.push(arr)
        let nodeIdx = this.heap.length-1
        let parentIdx = Math.floor((nodeIdx-1))

        if(nodeIdx>0&&parentIdx>0){

            
            while(calculate(this.heap[nodeIdx])<calculate(this.heap[parentIdx])){
                
                this.swap(nodeIdx,parentIdx)
                
                nodeIdx = parentIdx
                
                parentIdx = Math.floor((nodeIdx-1)/2)
                
    
    
            }
        }

        
        
    }

    swap(i,j){
 
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
        
    }

    extract(){
        
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        let returnArr = this.heap[0]
        

        this.heap[0]=this.heap[this.heap.length-1]
        this.heap.pop()


        this.dq(0)

        
        return returnArr


    }

    dq(i){

        let min = i
        let left = i*2 + 1
        let right = i*2 + 2

 
        if(left<=this.heap.length&&calculate(this.heap[left])<calculate(this.heap[min])){
            min=left
        }
        if(right<=this.heap.length&&calculate(this.heap[right])<calculate(this.heap[min])){
            min=right
        }

        if(i!==min){
            this.swap(i,min)
            
            this.dq(min)
        }

    }



    output(){
        for(let i = 0 ; i<this.k; i++){
            let temp = this.extract()
            this.final.push(temp)
        }

        return this.final
    }


}

function  calculate(arr){
    if(!arr){
        return -1
    }
    let x = arr[0]
    let y = arr[1]
    let answer = (x**2+y**2)**0.5

    return answer
}


let points = [[3,3],[2,-2]]
let k = 2




console.log(kClosest(points,k))

