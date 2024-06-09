function findLongestSubstring(str){

    let count = 0
    let subStr = []
    let len = 0

    for(let i=0;i<str.length;i++){
        if(!subStr.includes(str[i])){
            subStr.push(str[i])
            count++
        } else {
            if(count > len){
                len = count
            }
            let j = subStr.indexOf(str[i])
            subStr = subStr.slice(j+1)
            subStr.push(str[i])
            count = subStr.length
        }
    }

    if(count > len){
        len = count
    }

    return console.log(len)
}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
