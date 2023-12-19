/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {

    
    let final = []


    for(let i = 0 ; i < temperatures.length; i++){
        
        if(i===temperatures.length-1){
            final.push(0)
            break
        }
        if(temperatures[i]===temperatures[i-1]){
            if(final[i-1]===0){
                final.push(0)
                continue
            }
            else{
            final.push(final[i-1]-1)
            continue
            }

        }

        let stack = [temperatures[i]]

        for( let j = i+1 ; j<temperatures.length; j++){
            let current = stack[0]

            if(temperatures[j]>current){
                final.push(stack.length)
                break
            }
            else{
                stack.push(temperatures[j])
            }
            if(j===temperatures.length-1){
                final.push(0)
            }
        }
        
        
    }

    return final
    
};
