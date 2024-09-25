function binarySearch(arr, val){
    let left = 0
    let right = arr.length-1
    
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        
        if(arr[mid] === val){
            return mid
        } else if(arr[left] < val){
            left = mid +1
        } else {
            right = mid -1
        }
    }

    return -1
}

let orderedArr = [1,2,3,4,5,6,7,8,9]
console.log(binarySearch(orderedArr, 7))