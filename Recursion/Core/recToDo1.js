// Recursive Sigma

function rSigma(n){
    if(n <= 0) return 0;
    
    return Math.floor(n) + rSigma(Math.floor(n-1))
}

console.log(rSigma(5)) // 15
console.log(rSigma(2.5)) // 3
console.log(rSigma(0)) // 0

//Recursive Factorial

function rFactorial(n){
    if(n <= 0) return 1

    return  Math.floor(n) * rFactorial(Math.floor(n-1))
}

console.log(rFactorial(3)) // 6
console.log(rFactorial(6.5)) // 720

//Flood Fill

function floodFill(canvas2D,startXY,newColor){

}

console.log(floodFill(
    [[3,2,3,4,3],
     [2,3,3,4,0],
     [7,3,3,5,3],
     [6,5,3,4,1],
     [1,2,3,3,3]],
     [2,2],
     1
    ))