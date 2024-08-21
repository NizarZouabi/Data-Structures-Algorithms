function statisToDouble(){

    let total = 0
    let count = 0
    let min = 12
    let max = 0

    let die1 = Math.floor(Math.random()*6)+1
    let die2 = Math.floor(Math.random()*6)+1

    while(die1 !== die2){

        die1 = Math.floor(Math.random()*6)+1
        die2 = Math.floor(Math.random()*6)+1
        total += die1+die2
        console.log({die1, die2})

        if(die1+die2 < min) min = die1+die2
        if(die1+die2 > max) max = die1+die2
        let avg = Math.round(total / count)

        if(die1 === die2){
            console.log("You rolled Doubles!")
            console.log(`Min: ${min}, Avg: ${avg}, Max: ${max}`)
            break;
        }
        
        count++
    }
}

statisToDouble()
