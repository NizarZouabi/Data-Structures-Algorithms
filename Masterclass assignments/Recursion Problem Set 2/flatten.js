const flatten = (arr) => {
    let newArr = []
    var idx = 0

    if(arr.length === 0) return []
    
    while(idx < arr.length){
        if(Array.isArray(arr[idx])){
            newArr.push(...flatten(arr[idx]))
        } else {
            newArr.push(arr[idx])
        }
        idx++
    }
    return newArr
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
