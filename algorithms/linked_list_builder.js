 function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
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

let booty = new LinkedListBuilder([1,2,3,4,5,6])
booty.construct()

let m = booty.getList()

