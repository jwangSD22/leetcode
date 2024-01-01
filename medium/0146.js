
class LRUCache {
    constructor(capacity){
        this.hash = new Map()
        this.capacity = capacity
    }

    put(key,val){
            this.hash.delete(key)
            this.hash.set(key,val)

        if(this.hash.size>this.capacity){
            this.hash.delete(this.hash.keys().next().value)
        }

    }


    get(key){
        let val = this.hash.get(key)
        if(!val){return -1}

        this.hash.delete(key)
        this.hash.set(key,val)

        return val

    }

    
}
