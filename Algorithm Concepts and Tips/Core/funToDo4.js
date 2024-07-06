// Only Keep the Last Few

function keepLast(arr, num){
    for(i=arr.length-1;i>=arr.length-num;i--){
        let temp = arr[i]
        arr[i] = arr[arr.length-1]
        arr[arr.length-1] = temp
    }
    console.log(arr)
}

keepLast([2,4,6,8,10],3)

// Math Help

// Poor Kenny

// What Really Happened?

// Soaring IQ

// Letter Grade

// More Accurate Grades