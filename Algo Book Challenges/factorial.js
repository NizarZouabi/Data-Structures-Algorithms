function factorial(num) {
    let fnum = 1
    while(num > 0){
        fnum *= num--
    }
    return fnum
}

console.log(factorial(3)) //6
console.log(factorial(5)) //120
