/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if(!intervals.length){
    return [newInterval]
}

let i = 0
let j = 0
let low = newInterval[0]
let high = newInterval[1]

for (i; i < intervals.length; i++) {

    if (low >= intervals[i][0] && low <= intervals[i][1]) {
        break
    }
    else if (low < intervals[i][0]) {
        if(i===0){
            break
        }
        i--
        break
    }

    //only stop if the number falls within the interval's range 
    // if the first number of the interval is greater than the low, then break and set the index for low
}

//insert low into the index



for (j; j < intervals.length; j++) {
    
    if (high >= intervals[j][0] && high <= intervals[j][1]) {
        break
    }
    else if (high < intervals[j][0]) {

        j--
        break

    }

}


intervals[i].push(low)
intervals[j].push(high)

intervals[i].sort((a,b)=>a-b)
intervals[j].sort((a,b)=>a-b)


if (i === j) {
    intervals[i] = [intervals[i][0], intervals[i][intervals[i].length-1]]
    return intervals
}
else{
    intervals[i]=[intervals[i][0], intervals[j][intervals[i].length-1]]
    for(let y = 0 ;y<(j-i);y++){
        intervals.splice(i+1,1)
    }
    return intervals
}



};