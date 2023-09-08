//495 teemo attacking:

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {

    let current = null
    let final = []

    for(let i = 0 ;i<timeSeries.length;i++){
        if(!current){
            current = [timeSeries[i],(timeSeries[i]+duration-1)]
            
        }
        else{
            if(timeSeries[i]>=current[0]&&timeSeries[i]<=current[1]){
                current[1] = timeSeries[i]+duration-1
            }
            else{
                final.push(current)
                current = [timeSeries[i],(timeSeries[i]+duration-1)]
            }
            

        }
    }
    final.push(current)


    let timeCounter = 0

    for(let array of final){
        let timeSum = array[1]-array[0]+1
        timeCounter+=timeSum
    }

    return timeCounter

    

    
};

// space complexity is too high - need to make better
