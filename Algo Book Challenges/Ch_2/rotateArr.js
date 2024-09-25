const rotateArr = (arr, shiftBy) => {
    let i = 0
    let rotatedArr = []

    while(i <= arr.length-1){
        rotatedArr.push(arr[(i + shiftBy) % arr.length])

        i++
    }

    return rotatedArr
}

console.log(rotateArr([1,2,3,4,5],2))