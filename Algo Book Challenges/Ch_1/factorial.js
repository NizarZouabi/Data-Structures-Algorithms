function factorial(num) {
    let fnum = 1
    
    for(i=1; i<=num; i++){
        fnum *= i
    }

    return fnum
}

console.log(factorial(3)) //6
console.log(factorial(6.5)) //720
