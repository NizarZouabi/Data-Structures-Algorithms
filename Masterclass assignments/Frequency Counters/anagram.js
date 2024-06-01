const validAnagram = (str1, str2) => {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    if(str1.length !== str2.length){
        return false
    }

    for(let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
    }
    console.log(frequencyCounter1)
    
    for(let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
    }
    console.log(frequencyCounter2)

    for(let key in frequencyCounter1){
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false
        }
    }
    return true
}

console.log(validAnagram('','')) //true
console.log(validAnagram('Anagram','Nagrama')) //true
console.log(validAnagram('rat','car')) //false
console.log(validAnagram('tacocat','cattaco')) //true

