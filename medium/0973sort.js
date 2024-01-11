/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    


};

class PointHeap{
    constructor(points,k){
        this.heap=[]
        this.k = k
        this.final = []

        for(let point of points){
            let p = this.calculate(point)
            
        }


    }

    add(arr){

    }

    swap(i,j){

    }

    extract(){

    }

    dq(){

    }

    calculate(arr){
        let x = arr[0]
        let y = arr[1]

        let distance = (x**2+y**2)**0.5

        arr.push(distance)

        return arr
    }


}

let test = new PointHeap([[2,1],[3,3],[4,2],[-2,-1]],4)

console.log(test)
