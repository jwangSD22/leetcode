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

class ListNode{
    constructor(val){
        this.val = val
        this.next = null
    }
}

// var isPalindrome = function(head, string = '') {
//     if (head) {
//         string += head.val;
//     } else {
//         return string === string.split('').reverse().join('');
//     }
    
//     return isPalindrome(head.next, string);
// };

var isPalindrome = function (head){

}



let myList =  new ListNode(1)
let nextNode = new ListNode(2)
let thirdNode = new ListNode(3)

myList.next = nextNode
nextNode.next = thirdNode




