function insertAt(arr, idx, val) {

    if(idx === arr.length || idx > arr.length){
        arr[arr.length] = val
        return arr
    }

    let holder = arr[arr.length-1]
    for(let i=arr.length-1; i>=0; i--){
        arr[i] = arr[i-1]
        if(i === idx){
            arr[i] = val
            break;
        }
    }
    arr[arr.length] = holder

    return arr
}

console.log(insertAt([54,31,7], 2, 24))