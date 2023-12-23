/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {

    let test = (rate) => {
        let totalHours = piles.reduce((acc,cur)=>acc+ Math.ceil(cur/rate),0)
        return totalHours
    }
    
    
    let hi = Math.max(...piles)
    let lo = 1
    let best = hi

    while(lo<=hi){
    let mid = (hi+lo)>>1
    console.log(lo,mid,hi)

    if(test(mid)<=h){
        best = mid
        hi = mid - 1
    }
    else{
        lo = mid + 1
    }
    
  }

  return lo


  
    
};


let array = []





let piles = [3,6,7,11]
let h = 8

for(let i = 1 ; i< 11 ; i ++){
    array.push(piles.reduce((acc,cur)=>acc+ Math.ceil(cur/i),0))
}

console.log(array)


console.log(minEatingSpeed(piles,h))



