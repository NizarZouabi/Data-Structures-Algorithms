function removeNegatives(arr){
    let idx = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            arr[idx] = arr[i]
            idx++
        }
    }
    
    arr.length = idx

    return arr
}

console.log(removeNegatives([-2,7,-1,2,-5])) // [7,2]