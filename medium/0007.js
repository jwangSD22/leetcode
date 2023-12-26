/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let final = 0 

    while(x>0){
        let a = x%10
        x = Math.trunc(x/10)
        final=final*10+a
    }

    
return final

    
};



console.log(reverse(123456))


