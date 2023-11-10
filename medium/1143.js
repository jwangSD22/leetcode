/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {

    let stack = []
    let long

    if(text1.length>text2.length){
        long=text1
        stack=text2.split('')
    }
    else{
        long=text2
        stack=text1.split('')
    }

    let max = 0

    while(stack.length>0){
        let count = helper(stack,long)

        console.log(stack)
        console.log(count)
 
        if(count>max){
            max=count
        }



        stack.pop()
    }

    return max    
};


const helper = (stack,long) =>{
    let temp = [...stack]
    let maxIndex = temp.length-1
    let counter = 0

    for(let i = long.length-1;i>=0;i--){


        //logic here to go thru indices of the stack
        


          

    }

    return counter

}


console.log(longestCommonSubsequence('hofubmnylkra','pqhgxgdofcvmr'))