// 冒泡排序

function bubbleSort(arr){
    if(!arr instanceof Array||arr.length <= 1) return
    for(let j = 0;j<arr.length-1;j++){
        for(let i = 0;i<arr.length-j-1;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            }
         }
    }
    
    return arr
}

let xixi = [10,2,11,6,7]
console.log(bubbleSort(xixi))