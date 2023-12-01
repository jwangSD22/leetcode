/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals.length){
        return []
    }

    intervals.sort(((a,b)=>a[0]-b[0]))

    console.log(intervals)

    for (let i = 1;i<intervals.length;i++){
        let last = intervals[i-1][1]
        let current = intervals[i][0]

        if(current<=last){
            //merge intervals
            intervals[i-1]=[intervals[i-1][0],intervals[i][1]]
            intervals.splice(i,1)
            i--

        }

    }

    return intervals
    
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]],))