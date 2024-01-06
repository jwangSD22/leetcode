/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {

let m = new Map()

for(let num of nums){
    m.set(num,(m.get(num)||0)+1)
}

let h = new Map()
h.set(1,Infinity)
h.set(2,1)
h.set(3,1)


let counter = 0

for(let [k,v] of m){
    if(v === 1){
        return -1
    }

    counter+=fib(v)

}

function fib (num) {

    if(!h.has(num)){
        h.set(num,Math.min(fib(num-2),fib(num-3))+1)
    }

    

    return h.get(num)

}

return counter
    

};

let h = new Map()
h.set(1,Infinity)
h.set(2,1)
h.set(3,1)


function fib (num) {

    if(!h.has(num)){
        h.set(num,Math.min(fib(num-2),fib(num-3))+1)
    }

    

    return h.get(num)

}

