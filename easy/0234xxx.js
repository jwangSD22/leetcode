//234 PALINDROME LINKED LIST

////TODO --> CAN YOU DO THIS IN o(n) time and o(1) SPACE?!

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    if(!head){
        return null
    }

    let a = []

    let current = head
    while(current){

        a.push(current.val)
        current = current.next
    }

    

    let i = a.join('')
    let j = a.reverse().join('')

    return i===j

    
    

    
};