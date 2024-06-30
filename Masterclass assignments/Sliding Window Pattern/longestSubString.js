const findLongestSubstring = (str) => {
    let longest = 0
    let start = 0
    let strArr = []

    for(let end=0; end < str.length; end++){
        while(strArr.includes(str[end])){
            strArr.shift()
            start++
        }
        strArr.push(str[end])
        longest = Math.max(longest, end-start+1)
    }
    console.log(longest)
}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
