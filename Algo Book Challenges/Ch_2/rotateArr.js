const rotateArr = (arr, shiftBy) => {
    if(shiftBy === 0) return arr
    let rotatedArr = []

    if(shiftBy < 0){
        let i = arr.length-1

        while(i >= 0){
            rotatedArr.push(arr[(i- shiftBy) % arr.length])
    
            i--
        }
    } else {
        let i = 0

        while(i <= arr.length-1){
            rotatedArr.push(arr[(i+ shiftBy) % arr.length])
    
            i++
        }
    }

    return rotatedArr
}

console.log(rotateArr([1,2,3,4,5],2))
