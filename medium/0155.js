class MinStack {
    constructor(){
        this.min = Infinity
        this.stack = []
    }

    push(val){
        if(val<this.min){
            this.min=val
        }
        this.stack.push([val,this.min])
    }

    pop(){
        let popped = this.stack.pop()[0]
        if(this.stack.length===0){
            this.min= Infinity
        }else{
            this.min = this.getMin()
        }
    }

    top(){
        return this.stack[this.stack.length-1][0]
    }

    getMin(){
        return this.stack[this.stack.length-1][1]

    }
}

let t = new MinStack



