/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
var removeElements = function(head, val) {

    //in the case the first element is target
    // we need to evaluate if and what the next element is 
    // if there is no next element
        //then we return head but change it to undefined
    //otherwise - we have to snip off this value, and basically make
    // the next head, the current head
    //head.next = head 


    //if the number is not the target, we simply move on

    // head = head.next

    let currentNode = head

    while(currentNode){
        if(currentNode.val === val){
            if(currentNode.next === null){
                currentNode = null
            }
            else{
                currentNode.next = currentNode
            }
        }
        else{
            currentNode = currentNode.next
        }
    }





    return head
};

let bootyHead = new ListNode(2)

bootyHead.next = new ListNode(3)

// bootyHead.next.next = new ListNode(3)

console.log(bootyHead)

console.log(removeElements(bootyHead,3))

