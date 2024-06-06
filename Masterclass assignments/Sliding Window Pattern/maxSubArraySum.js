function maxSubarraySum(arr,num){
    if(num > arr.length){
        return null
    }

    let tempSum = 0
    
    for(let j = 0;j <= arr.length-num;j++){
        let maxSum = 0
        for(let i = j;i < j+num;i++){
            maxSum += arr[i]
        }
        if(maxSum > tempSum){
            tempSum = maxSum
        }
    }

    console.log(tempSum)
}

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
