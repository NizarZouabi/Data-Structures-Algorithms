// Biggie Size

function makeItBig(arr) {
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i] > 0){
            arr[i] = "Big"
        }
    }
    console.log(arr)
    return arr
}

makeItBig([-1,3,5,-5])

// Print Low, Return High

function printLowReturnHigh(numArr){
    let low = numArr[0]
    let high = numArr[0]
    for(let i=0;i<numArr.length;i++){
        if(numArr[i] < low){
            low = numArr[i]
        }
        if(numArr[i] > high){
            high = numArr[i]
        }
    }

    console.log(low)
    return high
}

printLowReturnHigh([5,1,4,8,6])

// Print One, Return Another

function printOneReturnAnother(numArr){
    let oddVal = 0
    for(let i=0;i<=numArr.length-1;i++){
        if(numArr[i] %2 !== 0){
            oddVal = numArr[i]
            break
        }
    }

    console.log(numArr[numArr.length-2])
    return oddVal
}

printOneReturnAnother([2,7,5,1,9])

// Double Vision

function doubleVision(arr){
    let newArr = []
    for(let i=0;i<=arr.length-1;i++){
        newArr.push(arr[i] += arr[i])
    }
    return newArr
}

doubleVision([1,2,3])

// Count Positives

function countPositives(arr){
    let positives = 0
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i] > 0){
            positives += 1
        }
    }
    arr[arr.length-1] = positives
    return arr
}

countPositives([-1,1,1,1])

// Evens and Odds

function evensAndOdds(arr){
    let evens = 0
    let odds = 0

    for(let i=0;i<=arr.length-1;i++){
        if(arr[i] %2 === 0){
            evens++
            odds = 0
        } else {
            odds++
            evens = 0
        }

        if(evens === 3){
            console.log("Even more so!")
            evens = 0
        }
        
        if(odds === 3){
            console.log("That's odd!")
            odds = 0
        }
    }
}

evensAndOdds([2,4,1,2,4,8,9,7,6,9,7,3])


// Increment the Seconds

function incTheSec(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] %2 !== 0){
            arr[i] += 1
            console.log(arr[i])
        }
    }
    return arr
}

incTheSec([1,2,3,4,5,6])

// Previous Lengths

function prevLen(arr){
    let prevlen = arr[0].length
    for(i=1;i<arr.length;i++){
        let temp = arr[i]
        arr[i] = prevlen
        prevlen = temp.length
    }
    console.log(arr)
}

prevLen(["string","number","object","boolean","variable"])

// Add Seven to Most

function sevenToMost(arr){
    newArr = []
    let newArrIdx = 0

    for(let i=1;i<arr.length;i++){
        newArr[newArrIdx++] = arr[i]
        newArr[newArrIdx++] = 7
    }
    console.log(newArr)
}

sevenToMost(['cats','lives','charCodes','kaiju'])

// Reverse Array

function reverseArr(arr){
    let endIdx = arr.length-1

    for(let i=0;i<arr.length/2;i++){
        let temp = arr[i]
        arr[i] = arr[endIdx]
        arr[endIdx] = temp
        endIdx--
    }
    console.log(arr)
}

reverseArr([1,2,3,4,5])

// Outlook: Negative

function outlookNegative(arr){
    newArr = []

    for(let i=0;i<arr.length;i++){
        if(arr[i] > 0){
            arr[i] = arr[i] - arr[i] * 2
        }
        newArr.push(arr[i])
    }
    console.log(newArr)
}

outlookNegative([-6,2,-3,7])

// Always Hungry

function alwaysHungry(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === "food"){
            console.log("yummy")
        }
    }
    if (!arr.includes("food")){
        console.log("i'm hungry")
    }
}

alwaysHungry(["no food","no food","food"])

// Swap Toward the Center

function swap(arr){
    let lastIdx = arr.length-1

    for(let i=0;i<arr.length/2;i+=2){
        let temp = arr[i]
        arr[i] = arr[lastIdx]
        arr[lastIdx] = temp

        lastIdx-=2
    }
    console.log(arr)
}

swap([1,2,3,4,5,6])

// Scale the Array

function scaleArr(arr, num){
    for(i=0;i<arr.length;i++){
        arr[i] *= num
    }

    return console.log(arr)
}

scaleArr([2,4,8,16], 2)
