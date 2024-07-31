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
    let cumulativeProbability = 0

    for(let i=0; i<disasters.length; i++){
        cumulativeProbability += probability[i]
        if(Math.random() < cumulativeProbability){
            return disasters[i]
        }
    }
}

console.log(whatHappensToday())

// What Really Happened?

function whatReallyHappensToday(){
    const disasters = ['volcanos', 'tsunami', 'earthquakes', 'blizzards', 'meteorites']
    const probability = [0.1, 0.15, 0.2, 0.25, 0.3]

    for(let i=0; i<=disasters.length-1; i++){
        if(Math.random() < probability[i]) console.log(disasters[i])
    }
}

whatReallyHappensToday()

// Soaring IQ

function soaringIQ(){
    let IQ = 101
    let days = 98
    let inc = 0.01

    for(let i=1; i<days; i++){
        inc += 0.01
        IQ += inc
    }

    return IQ
}

console.log(soaringIQ())

// Letter Grade

function letterGrade(score){
    if(score < 0 || score > 100) return 'score must be between 0 & 100'

    if(score <= 100 && score >= 90) {
        return `Score: ${score} Grade: A`
    } else if(score <= 89 && score >= 80) {
        return `Score: ${score} Grade: B`
    } else if(score <= 79 && score >= 70){
        return `Score: ${score} Grade: C`
    } else if(score <= 69 && score >= 60){
        return `Score: ${score} Grade: D`
    } else return `Score: ${score} Grade: F`
}

console.log(letterGrade(90))
