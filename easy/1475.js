/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {

    let answer =  [...prices]
    let stack = []

    for(let i = 0 ; i<prices.length;i ++){

        while(stack.length&&prices[i]<=prices[stack.at(-1)]){
            answer[stack.at(-1)] = prices[stack.at(-1)]-prices[i]
            stack.pop()
        }



        stack.push(i)
    }

    return answer
    
};