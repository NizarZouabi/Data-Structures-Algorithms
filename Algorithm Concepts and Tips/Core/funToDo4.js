// Only Keep the Last Few

function keepLast(arr, num){
    for(i=arr.length-1;i>=arr.length-num;i--){
        let temp = arr[i]
        arr[i] = arr[arr.length-1]
        arr[arr.length-1] = temp
    }
    console.log(arr)
}

keepLast([2,4,6,8,10],3)

// Math Help

function interceptX(M, B){
    if(M === 0){
        throw new Error("'M can't be zero'")
    }
    let X = -B / M
    console.log(X)
}

interceptX(12, 6)

// Poor Kenny

function whatHappensToday(){
    const disasters = ['volcanos', 'tsunami', 'earthquakes', 'blizzards', 'meteorites']
    const probability = [0.1, 0.15, 0.2, 0.25, 0.3]

    for(let i=0; i<=disasters.length-1; i++){
        if(Math.random() < probability[i]) console.log(disasters[i])
    }
}

whatHappensToday()

// What Really Happened?

// Soaring IQ

// Letter Grade

// More Accurate Grades
