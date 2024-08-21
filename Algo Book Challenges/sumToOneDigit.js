function sumToOne(n) {

    let sum = 0

    if (n < 0) n = Math.abs(n)

    if(n > 9){
        
        let num = n.toString()
        let arr = []

        for(let i=0; i<num.length; i++){

            arr.push(num[i])

            arr[i] = parseInt(arr[i])
            
            sum += arr[i]
        }

        return sumToOne(sum)
    }
    
    return n
}

console.log(sumToOne(198)) // 9
