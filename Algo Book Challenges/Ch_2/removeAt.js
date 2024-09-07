function removeAt(arr, idx){

    if(idx < 0 || idx >= arr.length) return arr

    let removedElm = arr[idx]

    for(let i=idx; i<arr.length; i++){
        arr[i] = arr[i+1]
    }
    
    arr.length--

    return {
        arr,
        removedElm
    }
}

console.log(removeAt([1,2,3,4], 1)) // 2