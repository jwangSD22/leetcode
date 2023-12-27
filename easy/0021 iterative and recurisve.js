/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {


    
};



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

let a = new LinkedListBuilder([0,2,4,8,30])
a.construct()

let b = new LinkedListBuilder([1,3,5,10,15,20,25])
b.construct()

let list1 = a.getList()
let list2 = b.getList()


let list = mergeTwoLists(list1,list2)

let temp = list

while(temp)
{
console.log(temp.val)

temp = temp.next
}
