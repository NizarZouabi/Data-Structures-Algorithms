function areThereDuplicates(...args) {
    let freqCounter = {}
    
    for(var val of args){
        freqCounter[val] = (freqCounter[val] || 0) +1
        if(freqCounter[val] == 2){
            console.log(true)
            return true
        }
    }

    console.log(false)
    return false
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
