/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

    //edge cases where there's no head or only one node

    if(!head){
        return null
    }
    if(head.next===null||head.next===undefined){
        return null
    }


    let t = head
    let h = head



    //floyd loop detection algo

    while(true){

        t = t.next
        h = h.next.next

        if(h === null|| h.next===null|| h === undefined){
            return null
        }



        if(t===h){
            break
        }
    

    
    }


    // count the total number of nodes in the loop
    let loopDetectedAt = t
    let current = t

    let count = 1
    while(current.next){
        current = current.next
        if(current!==loopDetectedAt){
            count+=1
        }
        else{
            break
        }
    }


    // set one pointer to head and another pointer xyz number of nodes +head derived from prev step


    let start = head

    for(let i = 0;i<count;i++){
        start = start.next
    }



    let newHead = head


    //keep incrementing by 1 node and you will end up at the loop origin
    
    while(newHead!==start){
        newHead = newHead.next
        start = start.next
    
      
    }

    return newHead


    
    
};


//  function ListNode(val) {
//         this.val = val;
//         this.next = null;
//  }

//  let one = new ListNode(3)

//  let two = new ListNode(2)
 
//  let three = new ListNode(0)

//  let four = new ListNode(-4)

//  one.next = two

//  two.next = three
 
//  three.next = four

//  four.next = two

//  console.log(detectCycle(one))