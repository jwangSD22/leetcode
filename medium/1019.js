/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {


    let stack = []

    let current = head

    while(current){
        //run while loop if conditions meet criteria

        while(stack.length&&current.val>stack[stack.length-1][0]){
            stack[stack.length-1][1].nextGreatest = current.val
            stack.pop()
        }

        stack.push([current.val,current])
        current=current.next
    }

    let output = []
    current = head

    while(current){
        
        if(!!current.nextGreatest){
            output.push(current.nextGreatest)
        }
        else{
            output.push(0)
        }

        current = current.next
    }

    return output


};