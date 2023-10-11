/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count = 0
    for(let i = low;i<=high;i++){
        let string = i.toString()
        let stringlen = string.length
        if(stringlen%2==0){
            n = stringlen/2
            array = string.split('')
            let head = 0
            let tail = 0

            for(let j = 0;j<n;j++){
                let k = -1*j+(stringlen-1)
    
                head+=Number(array[j])
                tail+=Number(array[k])
            }
            if(head==tail){
                count+=1
            }
    
       }
        else{
            continue
        }
    }

    return count
};


var countSymmetricIntegers = function(low, high) {

    let count = 0
    for(let i = low;i<=high;i++){
        let istring = String(i)
        let ilen = istring.length

        if(ilen%2==0){
            iarray = istring.split('')
            let left = iarray.slice(0,ilen/2)
            let right = iarray.slice(ilen/2)

            let lsum = left.reduce((a,c)=>a+=Number(c))
            let rsum = right.reduce((a,c)=>a+=Number(c))

            if(lsum===rsum){
                count+=1
            }
        }
        
    }
    return count



}


