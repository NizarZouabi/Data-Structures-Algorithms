//Countdown
const countDown = (num) =>{
    let newArr = []
    for(i=num;i>=0;i--){
        newArr.push(i)
    }
    console.log(newArr.length)
    return newArr
}

console.log(countDown(5))

//Print and Return
const printAndReturn = (arr) => {
    console.log(arr[0])
    return arr[1]
}

console.log(printAndReturn([3,8]))

//First Plus Length
const firstPlusLength = () => {
    let arr = [5,9,4,3,1]
    sum = 0
    for(i=1;i<=arr[0];i++) {
        incVal = i
        sum += incVal
    }
    return sum+arr.length
}

console.log(firstPlusLength())

//Values Greater than Second
const greaterThanSec = () => {
    let ary = [1,3,5,7,9,13]
    count = 0
    for(i=0; i<ary.length;i++){
        if (ary[i] > ary[1]){
        count++
        console.log(ary[i])
    }
}
return count
}

console.log(greaterThanSec())

//Values Greater than Second, Generalized
const greaterGeneralized = (arr) => {
    let newArr = []
    count = 0
    for(i=0; i<arr.length;i++){
        if(arr[i]>arr[1]){
            count++
            newArr.push(arr[i])
        }
    }
    console.log(count)
    return newArr
}

console.log(greaterGeneralized([2,5,8,7,9,4]))

//This Length, That Value

const thisLenThatVal = (num1,num2) => {
    let arr = []
    for(var i=1;i<=num1;i++){
        arr.push(num2)
    }
    if(num1 === num2){
        console.log("Jinx!")
    }
    return arr
}

console.log(thisLenThatVal(9,6))

//Fit the First Value

const fitFirst = (arr) => {
    if (arr[0] > arr.length){
        console.log("Too big!")
    } else if (arr[0] < arr.length) {
        console.log("Too small!")
    } else {
        console.log("Just right!")
    }
}

fitFirst([5,2,3,8,4])


//Fahrenheit to Celsius

const toCelsius = (fDegrees) => {
    let celsius = (5/9) * (fDegrees - 32)
    return `${celsius.toFixed(0)}°C`
}

console.log(toCelsius(70))

//Celsius to Fahrenheit

const toFahrenheit = (cDegrees) => {
    let fahrenheit = (cDegrees * 9/5) + 32
    return `${fahrenheit.toFixed(0)}°F`
}

console.log(toFahrenheit(21))