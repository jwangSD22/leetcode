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

let booty = new LinkedListBuilder([1,2,3,4,5])
booty.construct()

let m = booty.getList()

//it seems like in this case we need to use a better implementation of an array where we can take off from both ends at a better time complexity

// i could use a linked list to better implement this to clip off the head and tail 

// however, the linked list would need references to the segment before it if going from the reverse direction 

// probably should go through the list once to make inject the data into each node


/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {



   let second = getMid(head)

   let first = cutFirst(head,second)
   

   second = reverseSecond(second)


    return mergeLists(first,second)


function getMid(head) {
    let [slow,fast] = [head,head]

    while(fast){
        slow=slow.next
        if(fast.next===null){
            break
        }
        fast=fast.next.next
            }

    return slow
}

function cutFirst(head,node){
    let current = head
    while(current){
        if(current.next===node){
            current.next=null
            break
        }
        current=current.next
    }
    return head
}

function reverseSecond(head){

    if(!head||!head.next){
        return head
    }

    let part = reverseSecond(head.next)

    head.next.next = head
    head.next=null

    return part
}


function mergeLists(list1,list2){

    let dummy = new ListNode(-1)
    let start = dummy
    let toggle = false
    while(list1&&list2){
        if(!toggle){
            dummy.next=list1
            list1=list1.next
            dummy=dummy.next
            toggle=!toggle
        }
        else{
            dummy.next=list2
            list2=list2.next
            dummy=dummy.next
            toggle=!toggle
        }
    }

    if(list1||list2){
        dummy.next=list1||list2
    }

    return start.next
}
   

    



};

let newList = reorderList(m)

let current = newList

while(current){
    console.log(current.val)
    current=current.next
}
