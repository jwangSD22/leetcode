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

let booty = new LinkedListBuilder([1,3,7])
booty.construct()

let cheeks = new LinkedListBuilder([9,2])
cheeks.construct()

let m = booty.getList()

let n = cheeks.getList()
731
 29

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2,) {

    let carry = false
    let dummy = new ListNode(-1)
    let start = dummy
    while(l1||l2){
        let list1 = l1?l1.val:0
        let list2 = l2?l2.val:0
        let sum = list1+list2
        console.log(sum)
  
        let rem = sum%10

        if(carry)rem+=1
        carry=false

        
        if(sum>=10||rem>=10)carry=true

        dummy.next = new ListNode(rem===10?0:rem)

        dummy=dummy.next

        if(l1){
            l1=l1.next

        }
        if(l2){
            l2=l2.next

        }


    


    }


    if(carry){
        dummy.next = new ListNode(1)
    }


    
    return start.next



};

console.log(addTwoNumbers(m,n))

