

class TimeMap {
    constructor() {
        this.hash = new Map()
    }

    set(key,value,timestamp){
        if(!this.hash.has(key)){
            this.hash.set(key,[[timestamp,value]])
        }
        else{
            this.hash.set(key,this.hash.get(key).concat([[timestamp,value]]))
            console.log(this.hash)
        }
    }

    get(key,timestamp){
        if(!this.hash.has(key)){
            return ""
        }
        else{

            let lowest = this.hash.get(key)[0][0]

            if(timestamp<lowest){
                return ""
            }

            return this.binarySearch(this.hash.get(key),timestamp)
        }

    }

    binarySearch(array,timestamp){
        let lo = 0
        let hi = array.length -1

        while(lo<=hi){

            let mid = (lo+hi)>>1

            if(array[mid][0]===timestamp){
                return array[mid][1]
            }

            if(array[mid][0]<timestamp){
                lo = mid + 1
            }
            else{
                hi = mid -1
            }



        }

        return array[hi][1]
    }



}

let m = new TimeMap
m.set('booty','cheeks',2)
m.set('booty','ass',4)

console.log(m.get('booty',2))


//if this has to be binary search, then we definitely want a sorted array of times 

// 