function generateCoinChange(cents){
    let coins = 0
    coins += cents/10
    console.log(Math.floor(coins))
}

generateCoinChange(225)