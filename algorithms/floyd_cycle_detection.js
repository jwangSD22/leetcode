// the aim of cycle detection is to detect of there is a cycle within the linked list and then subsequently determine the point at which the cycle begins

function detectCycle(head){
    if(!head){return null}
    if(!head.next){return null}


    let slow = head
    let fast = head

    while(fast&&fast.next){
        slow=slow.next
        fast=fast.next.next
        // (slow===fast) can not be on the first line because otherwise slow/fast are both already initialized to head so it will automatically fall out of the while loop
        if(slow===fast)break

    }

    // if slow does not equal fast, then that means that fast fell off the linked list and there is no cycle
    if(slow!==fast){
        return null
    }

    // at this point, slow and fast will both be on a node within the cycle

    // based on complicated math, we know that fast's position is 2 x slow


    // now, we need to determine the beginning of the cycle which is easily done by resetting one node back to the beginning and then keep incrementing both by one until they meet

    slow=head

    while(slow!==fast){
        slow=slow.next
        fast=fast.next
    }

    //slow and fast will have met at the beginning of where thhe cycle started, return either


    return slow


}