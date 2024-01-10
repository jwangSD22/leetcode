
class Trie{
    constructor(){
        this.root = new Map()
    }

    insert(word){
        let current = this.root

        for(let l of word){
            if(!current.has(l)){
                current.set(l,new Map())
                current=current.get(l)

            }
            else{
                current=current.get(l)
                
            }
        }
        current.set('*',true)      
    }

    search(word){
        let current = this.root
        for(let l of word){
            if(!current.has(l)){
                return false
            }
            current=current.get(l)
            
        }
        if(current.has('*')){
            return true
        }
        return false
    }

    startsWith(prefix){
        let current=this.root
        for(let l of prefix){
            if(!current.has(l)){
                return false
            }
            current=current.get(l)
        }
        return true
    }



}

let test = new Trie

test.insert('booty')
test.insert('boos')
console.log(test.search('booty'))
console.log(test.startsWith('boo'))
