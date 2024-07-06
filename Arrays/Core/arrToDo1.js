//Push Front

function pushFront(arr, value) {
    const newArr = [value, ...arr]
    return newArr
}

function pushFront1(arr, value) {
    arr.unshift(value)
    return arr
}

function pushFront2(arr, value) {
    arr.push(arr[arr.length-1])
    for(i=arr.length-1; i>0; i--) {
        arr[i] = arr[i-1]
    }
    arr[0] = value
    return arr
}

console.log(pushFront([2,3,4,5], 1));
console.log(pushFront1([2,3,4,5], 1));
console.log(pushFront2([2,3,4,5], 1));

//Pop Front
function popFront(arr) {
    let arrRemovedVal = arr.shift()
    console.log(arr)
    return arrRemovedVal
}

function popFront1(arr) {
    arr.reverse()
    let arrRemovedVal = arr.pop()
    arr.reverse()
    console.log(arr)
    return arrRemovedVal
}

function popFront2(arr) {
    let arrRemovedVal = arr[0]
    for (i=0; i<arr.length-1; i++) {
        arr[i] = arr[i+1]
    }
    arr.length = arr.length-1 
    console.log(arr)
    return arrRemovedVal
}

console.log(popFront([0,5,10,15]));
console.log(popFront1([0,5,10,15]));
console.log(popFront2([0,5,10,15]));

//Insert At

function insertAt (arr, index, value) {
    for (i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }

    arr[i] = value;
    return arr
}

function insertAt1 (arr, index, value) {
    arr.splice(index, 0, value)
    return arr
}

console.log(insertAt([2,5,6,8,14],1,3))
console.log(insertAt1([2,5,6,8,14],1,3))


//Remove At

function removeAt(arr, idx) {
    let removedVal = arr[idx]
    for (i=0; i<arr.length-1; i++) {
        arr[idx] = arr[i+1]
    }
    arr.length--
    console.log(arr)
    return removedVal;
}

console.log(removeAt([53,215,88,20], 1))

//Swap Pairs

function swapPairs(arr) {
    var lastIdx = arr.length % 2 === 0 ? arr.length : arr.length-1
    for (var i=0; i< lastIdx; i+=2){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
    }
    return arr
}

console.log(swapPairs(["Brendan",true,42]))

//Remove Duplicates

function removeDupes(arr) {
    newArr = []
    for(i=0;i<arr.length;i++){
        if(arr[i] !== arr[i+1]){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(removeDupes([-2,-2,3.14,5,5,10]))