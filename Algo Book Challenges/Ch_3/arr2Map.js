function arr2Map(arr1, arr2){
    let res = {}

    for(i in arr1){
        res[arr1[i]] = arr2[i]
    }

    return res
}

console.log(arr2Map(["keyOne","keyTwo","keyThree"],[1,2,3]))