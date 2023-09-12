//reverse linked list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
// end case if we reached the tail

    if(!head){
        return null
    }
    if(!head.next){
        return head
    }

    // need a function that would essentially make the current node the next of the next node

    return reverseList(head.next).next = head

    
};