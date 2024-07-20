function naiveSearch(long, short){
    let matchCount = 0
    let len = 0
    
    for(let i=0; i<long.length;i++){
        for(let j=0; j<short.length; j++){
            if(long[i+j] !== short[j]){
                break
            }
            if (j === short.length-1){
                matchCount++
            }
        }
    }
    return matchCount
}

console.log(naiveSearch('hamstringstrstsingstrtr', 'str'))
