// CAN YOU DO THIS IN A NON RECURSIVE WAY TO IMPROVE SPACE o(n) to o(1)
var removeElements = function(head, val) {

    if (!head){
        return null
    }


    if(head.val === val){
        head = head.next 
        head.next = removeElements(head.next,val)
    }
    else{
        head.next = removeElements(head.next,val)
    }
    return head


    
};