function sigma(num) {
    let sum = 0

    for(i=0; i<=num; i++){
        sum += i
    }
    
    return sum
}

console.log(sigma(2.5)) //3
console.log(sigma(6)) //21