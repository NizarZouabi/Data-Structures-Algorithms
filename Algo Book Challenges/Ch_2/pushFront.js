function pushFront(arr, val){
    for(let i=arr.length; i>0 ; i--){
        let swapper = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = swapper
    }
    arr[0] = val
    console.log(arr)
}

pushFront([2,1], 3)