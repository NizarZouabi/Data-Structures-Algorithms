function sigma(num) {
    let sum = 0
    for(i=num; i>0; i--){
        sum += i
    }
    return sum
}

console.log(sigma(3)) //6
console.log(sigma(6)) //21