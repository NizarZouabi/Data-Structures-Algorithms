function generateCoinChange(cents){

    const quarters = Math.floor(cents/25)
    cents %= 25

    const dimes = Math.floor(cents/10)
    cents %= 10

    const nickels = Math.floor(cents/5)
    cents%= 5

    const pennies = cents

    console.log(`${quarters} Quarters`)
    console.log(`${dimes} Dimes`)
    console.log(`${nickels} Nickels`)
    console.log(`${pennies} Pennies`)
}

generateCoinChange(217)