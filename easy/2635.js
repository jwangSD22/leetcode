    /**
     * @param {number[]} arr
     * @param {Function} fn
     * @return {number[]}
     */
    var map = function(arr, fn) {
        
        for (let i in arr){
            i = Number(i)
            arr[i]=fn(arr[i],i)
        }

        return arr
    };