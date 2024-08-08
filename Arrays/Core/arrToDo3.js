// Remove Negatives

function removeNegatives(arr){
    let negativeNum = 0

    for(let i=0;i<arr.length;i++){
        if(arr[i] >= 0){
            [arr[negativeNum], arr[i]] = [arr[i], arr[negativeNum]]
            negativeNum++
        }
    }

    arr.length = negativeNum

    console.log(arr)
}

removeNegatives([-2,-1,15,-8,6])

// Second-to-Last

function SecondToLast(arr){
    if(arr.length < 2) return null
    return console.log(arr[arr.length-2])
}

SecondToLast([42,true,4,"Kate",7])

// Second-Largest

function secondLargest(arr){
    let secLargest = 0
    let max = 0
    let i = 0
    
    if(arr.length < 2) return null

    while(i<arr.length){
        if(arr[i] > max){
            max = arr[i]
        } else if(arr[i] > secLargest && arr[i] < max && arr[i] != max){
            secLargest = arr[i]
        }
        i++
    }

    return console.log(secLargest)
}

secondLargest([42,1,4,Math.PI,7])

// Nth-to-Last

function nthToLast(){

}

// Nth-Largest

function nthLargest(){

}

// Skyline Heights

function skyLineHeights(){

}
