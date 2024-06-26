const findLongestSubstring = (str) => {
    let longest = 0
    let start = 0
    let seen = new Set()

    for(let end=0; end<str.length; end++){
        while(seen.has(str[end])){
            seen.delete(str[start])
            start++
        }
        seen.add(str[end])
        longest = Math.max(longest, end-start+1)
    }
    
    console.log(longest);
}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
