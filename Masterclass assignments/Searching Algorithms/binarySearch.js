function binarySearch(arr, val){
    let left = 0
    let right = arr.length-1
    while(arr[mid] !== val && left <= right){
        var mid = Math.floor((left + right)/2)
        if(val < arr[mid]){
            right = mid-1
        } else {
            left = mid+1
        }
    }

    if(arr[mid] === val){
        return console.log(mid)
    } else {
        return console.log(-1)
    }
}

binarySearch([10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], 17)
