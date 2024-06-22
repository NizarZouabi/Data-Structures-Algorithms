const findLongestSubstring = (str) => {
    let subStr = ''
    let start = 0
    let tempStr = ''

    for(let end=0; end<str.length; end++){
        if(!subStr.includes(str[end])){
            subStr += str[end]
        } if(subStr.length > tempStr.length){
            while(start < str.length){
                if(subStr.length > tempStr.length){
                    tempStr = subStr
                } else {
                    subStr = ''
                    start++
                    subStr += str[end]
                }
            }
        }
    }
    console.log(tempStr)
}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
