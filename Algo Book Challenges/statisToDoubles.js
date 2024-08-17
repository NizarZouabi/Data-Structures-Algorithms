function statisToDouble(){
    let die1 = Math.round(Math.random(1)*5)+1
    let die2 = Math.round(Math.random(1)*5)+1

    console.log(die1, die2)

    if(die1 + die2 === 12) console.log("You rolled Doubles!")
}

statisToDouble()

