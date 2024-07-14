function betterThreesFives(start, end) {
    let sum = 0
    for(let i=start; i<=end; i++){
        if(i %3 === 0 || i %5 === 0){
            sum += i
        }
    }
    return sum
}

console.log(betterThreesFives(100, 4000000))