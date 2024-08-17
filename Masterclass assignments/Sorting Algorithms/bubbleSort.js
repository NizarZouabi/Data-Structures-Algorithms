function bubbleSort(arr){
    for(i=arr.length-1; i>=0; i--){
        for(j=0; j<=i-1; j++){
            if(arr[j] > arr[j+1]){
                let swapper = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = swapper
            }
        }
    }

    return arr
}

console.log(bubbleSort([12,5,44,300,0]))