/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let low = Infinity


    let highIndex = 0

    let maxProfit = 0


    for(let i = 0 ;i<prices.length;i++){

        if(prices[i]<low){
            low = prices[i]
        }
        else if(prices[i]-low>maxProfit){
            maxProfit = prices[i]-low
            highIndex = i 
        }
        


    }

    return maxProfit
    
};

console.log(maxProfit([7,1,5,3,6,4]))
