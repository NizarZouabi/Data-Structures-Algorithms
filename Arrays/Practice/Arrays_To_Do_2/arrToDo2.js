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

console.log(rotateArr([1,2,3],1))

//Filter Range

const filterRange = (arr, min, max) => {
    for(i=0;i<=arr.length-1;i++){
        if(arr[i] < min || arr[i] > max){
            for(let j=i;j<arr.length-1;j++){
                arr[j] = arr[j+1]
            }
            arr.length--
            i--
        }
    }
    return arr
}


console.log(filterRange([24,11,65,32,88,14,90], 11, 32))

//Concat

const concat = (arr1, arr2) => {
    let newArr = []
    for(i=0;i<=arr1.length-1;i++){
        newArr.push(arr1[i])
    }
    for(j=0;j<=arr2.length-1;j++){
        newArr.push(arr2[j])
    }
    return newArr
}

console.log(concat(["hello","world,",20],[24,"is","the","year!"]))
