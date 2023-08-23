//232. IMPLEMENT QUEUE USING STACKS




class MyQueue {
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    peek(){
        return this.stack1[0]
    }
    empty(){
        return this.stack1.length==0??false
    }
    push(x){
        this.stack1.push(x)
    }
    pop(){
        let final 
        while(this.stack1.length){
            let popped = this.stack1.pop()
            this.stack2.push(popped)
            
        }
        final = this.stack2.pop()
        while(this.stack2.length){
            let popped = this.stack2.pop()
            this.stack1.push(popped)
        }
        return final
    }

}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

