function fib(num){
    if(num <= 1) return num
    
    return fib(num-1) + fib(num-2)
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465
