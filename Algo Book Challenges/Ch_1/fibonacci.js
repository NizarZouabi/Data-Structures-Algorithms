function fibonacci(n){
    let fib = 1
    let f1 = 0
    let f2 = 1

    if(n === 0) return 0
    if(n === 1) return 1

    for(let i=2; i<=n; i++){
        fib = f1 + f2
        f1 = f2
        f2 = fib
    }

    return fib
}

console.log(fibonacci(2)) // 1
console.log(fibonacci(5)) // 5