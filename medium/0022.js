var generateParenthesis = function(n) {
    const result = [];
    helper(result, '', n);
    return result;
  };
  
const helper = function (result,string,n) {
    
    if(string.length===2*n){
        
        if(validateString(string)){
            result.push(string)
        }

        return
    }

    //generate every possible combo 
    helper(result,string+"(",n)
    helper(result,string+")",n)
}

const validateString = (string) => {

    let stack = []

    for(let i = 0 ; i < string.length; i ++){
      
        let top = stack[stack.length-1]
        if(string[i]===")"&&top==="("){
            stack.pop()
           
        }
        else{
            stack.push(string[i])
        }
    }


    return stack.length?false:true


}





  console.log(generateParenthesis(3))