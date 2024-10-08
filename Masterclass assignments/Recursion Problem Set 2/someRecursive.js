const isOdd = val => val %2 !== 0

function someRecursive(arr, cb){
    if(arr.length === 0) return console.log(false)
    if(cb(arr[0])){
        return console.log(true)
    }
    
    return someRecursive(arr.slice(1), cb)
}

someRecursive([1,2,3,4], isOdd) // true
someRecursive([4,6,8,9], isOdd) // true
someRecursive([4,6,8], isOdd) // false
someRecursive([4,6,8], val => val > 10) // false
