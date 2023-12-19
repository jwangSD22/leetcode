/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    tokens = tokens.reverse()
    let stack = []

    let operands = new Set(['+','-','*','/'])
    
    
    
    while(tokens.length){


        let focus = tokens.pop()

        
        if(operands.has(focus)){
            let secondary = stack.pop()
            let primary = stack.pop()

            tokens.push(helper(primary,secondary,focus))
            if(tokens.length===1){
                return tokens[0]
            }

        }
        else{
            stack.push(focus)
        }
        

    
    }



    
            
    };


    function helper (primary,secondary,operand){
        primary = Number(primary)
        secondary = Number(secondary)
        if(operand==='+'){
            return primary+secondary
        }
        if(operand==='-'){
            return primary-secondary
        }
        if(operand==='*'){
                        if(primary*secondary<0){
                return Math.ceil(primary*secondary)
            }
            return Math.floor(primary*secondary)
        }
        if(operand==='/'){
            if(primary/secondary<0){
                return Math.ceil(primary/secondary)
            }
            return Math.floor(primary/secondary)
        }
    }

    tokens =
    ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

console.log(evalRPN(tokens))