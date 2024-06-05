function isSubsequence(str1,str2){
    let j = 0
    let i = 0
    let str = ""

    while(j<str2.length){
        if(str1[i] !== str2[j]){
            j++
        } else if(str1[i] === str2[j]){
            str += str2[j]
            i++
            j++
        }
    }
    
    if(str === str1){
        return true
    }

    return false
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
