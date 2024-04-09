function minToFront(arr) {
    var minVal = arr[0]
    var minIdx = 0 
    for(i=1;i<arr.length;i++){
        if(arr[i] < minVal){
            minVal = arr[i]
            minIdx = i
        }
    }
    for(i = minIdx; i>0;i--){
        arr[i] = arr[i-1]
    }
    arr[0] = minVal;
    return arr
}

console.log(minToFront([4,2,1,3,5]))
