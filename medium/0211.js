class WordDictionary{
    constructor(){
        this.root = new Map()
    }

    addWord(word){
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

        

    }


}

let test = new WordDictionary

console.log(test.addWord('ate'))
console.log(test.addWord('and'))
console.log(test.addWord('ans'))
console.log(test.addWord('add'))
console.log(test.search('a'))
console.log(test.search('.at'))
console.log(test.search('bat'))
console.log(test.search('.at'))
console.log(test.search('an.'))
console.log(test.search('a.'))
console.log(test.search('b.'))
console.log(test.search('a.d'))
console.log(test.search('.'))



