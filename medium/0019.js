/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
 
    let fast = head
    let slow = head

    //move fast pointer n spaces ahead 

    for(let i = 0 ; i < n ; i ++){
        fast = fast.next     
    }
    
    //in the case where n = the length of the list 
    if(!fast){
        return head.next
    }

    while(fast.next){
        slow=slow.next
        fast=fast.next
    }

    // this works if n is 1, because you're stitching together the node right before the last node, with the last node's next = null
    // thus the node before the last has a next of null
    // 1 -> 2 -> 3 -> 4 -> 5 -> null
    // 1 -> 2 -> 3 -> 4 -> null

    // and it is guaranteed that n is at least 1 

    
    slow.next = slow.next.next

    return head




    

    // we could create a map of all the indexes and which node it refers to

    //  we could inject prev markers for each node, traverse to the end, and then go back the number of times needed for n 

    // what edge cases should we consider? ... n will at least be 1 
};

class ListNode {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class LinkedListBuilder {
    constructor(array){
        this.head = null
        this.array = array
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

let booty = new LinkedListBuilder([1,2,3,4,5])
booty.construct()
let m = booty.getList()

console.log(removeNthFromEnd(m,1))