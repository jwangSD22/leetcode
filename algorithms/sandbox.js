class ListNode{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null

    }
}

class LinkedListBuilder {
    constructor(array){
        this.head = null
        this.array = array
    }
    
     ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
     }
    
     construct(){
        this.head = new ListNode(this.array[0])
        let current = this.head
        for(let i = 1 ; i<this.array.length;i ++){
            let newNode = new ListNode(this.array[i])
            current.next = newNode
            current = newNode
        }
     }
    
     getList(){
        return this.head
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
        if(!this.end){
            return null
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
        this.end=previous

        return this.head
    }


}

let booty = new LinkedListBuilder([1,2,3,4,5,6])
booty.construct()
booty = booty.getList()


function reverserecur(head){

    // we add !head here because we want to capture an initial issue where there is no head

    //but otherwise the base case off the recursion needs to capture the node right before the end// we dont want to work on a null 
    if(!head.next||!head){
        return head
    }

    
    // lets go all the way to the end of the list

    let seg = reverserecur(head.next)

    let q = head.next
    head.next = null
    q.next = head 

    return seg





    

}

console.log(reverserecur(booty))

