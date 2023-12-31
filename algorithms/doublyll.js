class ListNode{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class doubleLL {

    constructor(){
        this.head = null
        this.end = null

    }

    push(val){
        let node = new ListNode(val)
        if(!this.head){
            this.head = node
            this.end = node
        }else{
            node.prev = this.end
            this.end.next = node
            this.end = node
        }
    }

    pop(){
        if(this.end===this.head){
            let node = this.head
            this.head=null
            this.end=null
            return node
        }
        let returnNode = this.end
        this.end = this.end.prev
        this.end.next = null
        returnNode.prev = null
        return returnNode
    }



    log(){
        if(!this.head){
            return null
        }
        else{
            let current = this.head
            let array = []
            while(current){
                array.push(current.val)
                current=current.next
            }

            return array
        }
    }

    enqueue(val){
        let node = new ListNode(val)
        if(!this.head){
            this.head=node
            this.end = node
        }
        else{
            let temp = this.head
            this.head = node
            node.next = temp
            temp.prev = node
        }
    }

    dequeue(){
        if(!this.head){
            return null
        }
        let node = this.head

        if(!this.head.next){
            this.head=null
            return node
        }

        this.head = node.next

        return node
        
    }

    get(){
        return this.head??null
    }

    build(array){
        this.head = null
        for(let i = 0 ; i < array.length ; i++){
            this.push(array[i])
        }
    }

    convert(head){
        this.head = head

        let current = this.head

        let previous = null
        while(current){
            current.prev = previous
            previous=current
            current=current.next
        }

        return this.head
    }


}

let m = new doubleLL()




