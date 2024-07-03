const reverse = (str) => {
    if(str === "") return ""

    let arr = []
    let strToArr = str.split("")
    let lastChar = strToArr[strToArr.length-1]
    arr.push(lastChar)
    return lastChar + reverse(str.substring(0, str.length-1))
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'
