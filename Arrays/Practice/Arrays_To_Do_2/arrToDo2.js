//Reverse

const reverse = (arr) => {
    for(i=0;i<arr.length/2;i++){
        let temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}

console.log(reverse([5,8,9,2,4,3]))

//Rotate

const rotateArr = (arr, shiftBy) => {
    let first = arr[0]
    let last = arr[arr.length-1]
    if(shiftBy <= 0) {
        for(let i=arr.length-1;i>=0;i--){
            let temp = arr[i]
            arr[i] = first
            first = temp
        }
    } else if (shiftBy > 0) {
        for(let i=0;i<arr.length;i++){
            let temp = arr[i]
            arr[i] = last
            last = temp
        }
    }
    return arr
}

// const rotateArr = (arr, shiftBy) => {
//     const n = arr.length;
 // Normalize shiftBy to positive equivalent within array length
//     shiftBy = ((shiftBy % n) + n) % n;
    
 // No need to rotate if shiftBy is 0 or array length is 0 or 1
//     if (shiftBy === 0 || n <= 1) return arr;

 // Temporary array to hold rotated elements
//     const rotated = [];

 // Perform rotation by shifting elements manually
//     for (let i = 0; i < n; i++) {
//         const newIndex = (i + shiftBy) % n;
//         rotated[newIndex] = arr[i];
//     }

//     return rotated;
// }

console.log(rotateArr([1,2,3],1))

//Filter Range

const filterRange = (arr, min, max) => {
    let idx = 0
    for (let i=0;i<=arr.length-1;i++){
        if(arr[i] >= min && arr[i] <= max){
            arr[idx] = arr[i]
            idx++
        }
    }
    arr.length = idx
    return arr
}


console.log(filterRange([24,11,65,32,88,14,90], 11, 88))


//Concat
