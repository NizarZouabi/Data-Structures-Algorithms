function reverseArr(arr){

    let i = 0
    let j = arr.length-1
    let swapper;

    while(i<= arr.length/2 && j>= arr.length/2){
        swapper = arr[i]
        arr[i] = arr[j]
        arr[j] = swapper
        i++
        j--
    }

    return arr
}

console.log(reverseArr([1,2,3,4,5,6]))