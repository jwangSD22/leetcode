/**
 * @param {number[]} cost
 * @return {number}
 */

//you can solve this in place
var minCostClimbingStairs = function(cost) {

    let n = cost.length
    //the base cases that are fixed are position 0 and position 1 --> the places whwere you can start
    //thus you start the loop from 2

    for(let i = 2; i < n ; i ++){
        cost[i]=Math.min(cost[i-2],cost[i-1])+cost[i]
    }


    return Math.min(cost[n-1],cost[n-2])
    
};



console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))