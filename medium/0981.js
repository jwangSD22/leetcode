

class TimeMap {
    constructor() {
        this.hash = new Map()
    }

    set(key, value, timestamp) {
        if (!this.hash.has(key)) {
            this.hash.set(key, [[timestamp, value]])
        }
        else {
            // this stops repeat values being inputted within the same timestamp range
            // this will reduce memory usage
            let previousValue = this.hash.get(key)[this.hash.get(key).length - 1][1]
            if (previousValue === value) {
                return
            }
            this.hash.get(key).push([timestamp, value])
        }
    }

    get(key, timestamp) {
        if (!this.hash.has(key)) {
            return ""
        }
        else {
            let lowest = this.hash.get(key)[0][0]
            if (timestamp < lowest) {
                return ""
            }
            return this.binarySearch(this.hash.get(key), timestamp)
        }
    }

    binarySearch(array, timestamp) {
        let lo = 0
        let hi = array.length - 1
        while (lo <= hi) {
            let mid = (lo + hi) >> 1

            if (array[mid][0] === timestamp) {
                return array[mid][1]
            }

            if (array[mid][0] < timestamp) {
                lo = mid + 1
            }
            else {
                hi = mid - 1
            }
        }
        return array[hi][1]
    }
}

let m = new TimeMap
m.set('booty', 'cheeks', 2)
m.set('booty', 'ass', 4)

console.log(m.get('booty', 3))


//if this has to be binary search, then we definitely want a sorted array of times 

// 

let f = new Map()

f.set(3, [4])

console.log(f.get(3).push(5))
console.log(f)