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
    while(current){
        m.set(current,new ListNode(current.val))
        current = current.next
    }

    //new nodes are all set into map 
    
    current = head
    while(current){
        let node = m.get(current)
        node.next = m.get(current.next)

        let attach = m.get(current.random)

        node.random=attach

        current=current.next
    }

    return m.get(head)




};

let a = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(3)

a.random = c
b.random = a
c.random = null
a.next = b
b.next = c

console.log(copyRandomList(a))
