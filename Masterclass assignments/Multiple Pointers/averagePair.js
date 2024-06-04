function averagePair(arr, num){
    if(arr.length<2){
        return false
    }

    let i = 0
    let j = i+1
    while(i < arr.length){
        if((arr[i] + arr[j])/2 === num) {
            return true
        } else if(j<arr.length) {
            j++
        } else {
            i++
            j = i+1
        }
    }

    return false
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false
