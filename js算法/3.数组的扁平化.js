//数组扁平化

function flatArr(arr){
    if(!Array.isArray(arr)) return

    const result = arr.reduce( (pre,item)=>{
       return pre.concat(Array.isArray(item)? flatArr(item):item)
    },[])

    return result
}

console.log(flatArr([1,2,3,[4,5,6,[9,8,7]]]))