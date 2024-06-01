function sameFrequency(num1,num2){
    
    let numStr1 = num1.toString()
    let numStr2 = num2.toString()
    let freqCounter = {}
    
    if(numStr1.length !== numStr2.length){
        console.log(false)
        return false;
    }
    
    for(var digit of numStr1){
        freqCounter[digit] = (freqCounter[digit] || 0) +1
    }
    
    for(digit of numStr2){
        if(!(freqCounter[digit])){
            console.log(false)
            return false;
        } else {
            freqCounter[digit]--
        }
    }
    console.log(true)
    return true;
  }
  
  
  sameFrequency(182,281) // true
  sameFrequency(34,14) // false
  sameFrequency(3589578, 5879385) // true
  sameFrequency(22,222) // false