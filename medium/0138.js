function ListNode(val, next, random) {
       this.val = val;
       this.next = next;
      this.random = random;
    }

//  * @param {Node} head
//  * @return {Node}
//  */
var copyRandomList = function(head) {

    let m = new Map()

    let current = head
    let indexCounter = 0
    while(current){
        m.set(current,indexCounter)
        indexCounter++
        current = current.next
    }

    
    current = head

    while(current){

        if(current.random===null){
            current.index=null
        }
        else{
            current.index = m.get(current.random)
        }
        current=current.next
    }

    let dummy = new ListNode(-1,null,null)
    let start = dummy
    let array = []


    current = head
    while(current){
        let newNode = new ListNode(current.val)
        array.push(newNode)
        dummy.next = newNode
        dummy.next.index = current.index
        dummy = dummy.next
        current=current.next
    }

    current=start.next
    while(current){
        if(current.index===null){
            current.random=null
        }
        else{
            current.random=array[current.index]
        }
        current=current.next

    }




    return start.next


};

let a = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(3)

a.random = c
b.random = a
c.random = null
a.next = b
b.next = c

copyRandomList(a)
