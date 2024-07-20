function naiveSearch(long, short){
    let matchCount = 0
    
    for(let i=0; i<long.length;i++){
        for(let j=0; j<short.length; j++){
            if(long[i+j] === short[j]){
                if (j === short.length-1) matchCount++
            } else {
                break
            }
        }
    }
    return matchCount
}

console.log(naiveSearch('hamstringstrstsingstrtr', 'str'))
