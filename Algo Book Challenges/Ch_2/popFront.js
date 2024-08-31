function popFront(arr){
    let holder = arr[0]
    for(i=0;i<arr.length;i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = holder
    arr.length--

    console.log(arr)
    console.log(holder)
}

popFront([22,96,77])