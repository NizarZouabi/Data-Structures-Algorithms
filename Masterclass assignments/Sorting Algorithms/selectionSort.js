function selectionSort(arr){
    
    for(let i=0; i<arr.length; i++){

        let min = i;

        for(let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }

        if(min !== i){
            let holder = arr[min]
            arr[min] = arr[i]
            arr[i] = holder
        }
    }

    return arr
}

console.log(selectionSort([5,3,4,1,2]))