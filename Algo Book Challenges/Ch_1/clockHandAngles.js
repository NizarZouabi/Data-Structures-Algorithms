function clockHand(seconds){

    const secs = seconds % 60
    const mins = Math.floor((seconds % 3600) / 60)
    const hours = Math.floor(seconds / 3600)


    let secsDegree = secs * 6
    let minsDegree = mins * 6
    let hoursDegree = (hours % 12) * 30

    console.log(hours ,mins, secs)
    console.log(`HoursHand: ${hoursDegree}, MinutesHand: ${minsDegree}, SecondsHand: ${secsDegree}`)
}

clockHand(43160)
