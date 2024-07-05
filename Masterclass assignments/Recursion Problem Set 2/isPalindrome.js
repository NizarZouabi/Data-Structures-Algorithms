const isPalindrome = (str) => {
    if(str.length <= 1) return true

    if(str[0] === str[str.length-1]){
        return isPalindrome(str.substring(1, str.length-1))
    } else {
        return false
    }
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false