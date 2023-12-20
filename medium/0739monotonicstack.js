/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {

    let stack = []
    let final = new Array(temperatures.length).fill(0)

    for(let i = 0 ; i < temperatures.length; i ++){

        

        while(stack.length&&temperatures[i]>temperatures[stack[stack.length-1]]){
            final[stack[stack.length-1]] = i-stack[stack.length-1]
            stack.pop()
        }

        stack.push(i)


    }




    return final



    
};



temperatures = [73,74,75,71,69,72,76,73]
console.log(dailyTemperatures(temperatures))