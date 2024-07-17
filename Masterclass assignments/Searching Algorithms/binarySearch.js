function binarySearch(arr, val){
    let left = 0
    let right = arr.length-1
    while(left < right){
        var mid = arr.length/2 -0.5
        if(left < mid){
            if(arr[left] === val){
                return console.log(left)
        }  else if (right > mid){
            if(arr[right] === val){
                return console.log(right)
            } else if (arr[mid] === val){
                return console.log(mid)
            }
            right--
        }
        left++
    }
}
    return console.log(-1)
}

binarySearch([10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], 17)
