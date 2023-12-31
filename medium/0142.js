
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = head => {
    let p1 = head;
    let p2 = head;
    
    while (p2 && p2.next && p2.next.next) {
      p1 = p1.next;
      p2 = p2.next.next;
      if (p1 === p2) {

        return detectCyclePos(head, p2);
      }
    }
    return null;
  };
  
  //phase 2 helper function to determine the actual cycle point (not just where the pointers intersected)
  const detectCyclePos = (head, intersection) => {
    let p1 = head;
    let p2 = intersection;
    while (p1 !== p2) {
      p1 = p1.next;
      p2 = p2.next;
    }
    return p1;
  };
let test3 = new ListNode(3)
let test2 = new ListNode(2)
let test0 = new ListNode(0)
let test4 = new ListNode (4)

test3.next = test2
test2.next= test0
test0.next = test4
test4.next = test2

console.log(detectCycle(test3))