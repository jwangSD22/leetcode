/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {

    //the difference / 2 will be the goal number for both of them to be equal
    let asum = aliceSizes.reduce((a,c)=>a+c,0)
    let bsum = bobSizes.reduce((a,c)=>a+c,0)

    let goal = (asum+bsum)/2



    //iterate thru alice's list such that goal - the index number and see if it's in bob's list

    for(let i = 0;i<aliceSizes.length;i++){

        let sumWithout = asum - aliceSizes[i]

        let newGoal = goal - sumWithout

        let complement = bobSizes.indexOf(newGoal)

   

        if(complement>=0){
            return [aliceSizes[i],bobSizes[complement]]
        }
    }

    
};

console.log(fairCandySwap([1,2],[2,3]))