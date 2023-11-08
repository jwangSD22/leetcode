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
var addTwoNumbers = function(l1, l2) {
    

    function traverse(node,string=''){
        
        if(!node){
            return string
        }
        return traverse(node.next,string+node.val.toString())
    }
    
    let list1 = traverse(l1)
    let list2 = traverse(l2)


    list1 = list1.split('').reverse().join('')
    list2 = list2.split('').reverse().join('')


    let sum = BigInt(list1)+BigInt(list2)

    sum = sum.toString().split('')

    let finalLL = new ListNode(Number(sum.pop()))

    let current = finalLL

    while(sum.length>0){

        current.next = new ListNode(Number(sum.pop()))

        current = current.next
        
    }



    return finalLL



};
