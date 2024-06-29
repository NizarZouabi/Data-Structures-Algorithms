function productOfArray(arr){
    if(arr.length === 0) return 1

    let res = arr[0]

    return res * productOfArray(arr.splice(1))
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60
