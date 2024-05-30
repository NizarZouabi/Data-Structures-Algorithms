const countUniqueVals = (sortedArr) => {
    let valCount = 0
    for(let i=0;i<sortedArr.length;i++){
        if(sortedArr[i] !== sortedArr[i-1]){
            valCount++
        }
    }
    return console.log(valCount)
}

countUniqueVals([1,1,1,2]) //2
countUniqueVals([3,4,4,4,5]) //3
countUniqueVals([]) //0
countUniqueVals([-2,-1,-1,0,1,2]) //5


const countUniqueVals2 = (sortedArr) => {
    let i = 0
    for(let j=1;j<sortedArr.length;j++){
        if(sortedArr[i] !== sortedArr[j]){
            i++
            sortedArr[i] = sortedArr[j]
        }
    }

    if(i+1 === 1){
        console.log(0)
    } else {
        console.log(i+1)
    }
}

countUniqueVals2([1,1,1,2]) //2
countUniqueVals2([3,4,4,4,5]) //3
countUniqueVals2([]) //0
countUniqueVals2([-2,-1,-1,0,1,2]) //5
