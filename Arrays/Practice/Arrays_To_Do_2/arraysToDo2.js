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
            console.log(i)
            console.log(arr)
        }
    } else if (shiftBy > 0) {
        for(let i=0;i<arr.length;i++){
            let temp = arr[i]
            arr[i] = last
            last = temp
            console.log(i)
            console.log(arr)
        }
    }
    return arr
}

console.log(rotateArr([1,2,3,4,5],1))

//Filter Range

//Concat
