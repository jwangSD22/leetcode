var solution = function (n){
    let lower = 1
    let upper = n
    
    while(true){
        if(!isBadVersion(lower)){
            lower*=2
        }
        else{
            break
        }
    }
    
    while(true){
        if(isBadVersion(upper)){
            upper/=2
        }
        else{
            break
        }
    }
    
    for(let i = lower;i<upper;i++){
        if(isBadVersion(i)){
            return i
        }
    }
    
    
    
    
    }
