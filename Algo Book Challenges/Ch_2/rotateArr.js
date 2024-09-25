const rotateArr = (arr, shiftBy) => {
    let i = 0
    let shiftedArr = []

    while(i <= arr.length-1){
        shiftedArr.push(arr[(i + shiftBy) % arr.length])

        i++
    }

    return shiftedArr
}

console.log(rotateArr([1,2,3,4,5],2))