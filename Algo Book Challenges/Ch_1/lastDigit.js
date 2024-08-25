function lastDigitAtoB(a, b){

    let exp = a**b

    if(exp > 9){
        let sNum = exp.toString()

        return sNum[sNum.length-1]
    }

    return exp
}

console.log(lastDigitAtoB(22, 2)) // 484, 4
console.log(lastDigitAtoB(3, 4)) // 81, 1
console.log(lastDigitAtoB(12, 5)) // 248832, 2
