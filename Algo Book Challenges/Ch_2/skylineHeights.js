function skylineHeights(arr){

    let idx = 0
    let lastHighest = 0;

    for(i=0; i < arr.length; i++){

        if(arr[i] > lastHighest){
            lastHighest = arr[i]
            arr[idx] = lastHighest
            idx++
        }
    }

    arr.length = idx

    return arr
}

console.log(skylineHeights([0,-1,1,7,2,4,9,-1])) // [1,7,9]