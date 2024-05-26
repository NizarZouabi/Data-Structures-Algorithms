//Remove Blanks

function removeBlanks(str) {
    let noBlanksString = ""
    for(i = 0; i < str.length; i++){
        if (str[i] !== " ") {
            noBlanksString += str[i]
        }
    }
    return noBlanksString
}

console.log(removeBlanks("Pl ayTha tF u nkyM usi c"))
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))


//Get Digits

function getDigits(str) {
    let onlyDigits = Number();
    for(i=0;i<str.length;i++){
        if(!isNaN(str[i])){
            onlyDigits += str[i]
        }
    }
    return onlyDigits-0
}

console.log(getDigits("abc8c0d1ngd0j0!8"))
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

//Acronyms

function acronyms(word) {
    let acroWord = word.split(" ");
    let newWord = ""
    for (i=0;i<acroWord.length;i++){
        newWord += acroWord[i][0].toUpperCase()
    }
    return newWord;
}

console.log(acronyms("there's no free lunch - gotta pay yer way."))
console.log(acronyms("Live from New York, it's Saturday Night!"))

//Count Non-Spaces

function countNonSpaces(str) {
    let count = 0
    for (i=0;i<str.length;i++){
        if(str[i] != " "){
            count++
        }
    }
    return count;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"))
console.log(countNonSpaces("Hello world !"))

//Remove Shorter Strings

function removeShorterStrings(arr, val) {
    let newArr = []
    for(i=0;i<arr.length;i++){
        if(arr[i].length >= val){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))

//Is Palindrome

const isPalindrome = (str) => {
    let isPal = str.split("")
    let j = isPal.length-1
    for(i=0;i<isPal.length;i++){
        if(isPal[i] !== isPal[j]){
            return false
        }
        j--
    }
    return true
}

console.log(isPalindrome("tacocat"))
console.log(isPalindrome("marcedes"))
console.log(isPalindrome("neolloen"))
console.log(isPalindrome("nah"))


