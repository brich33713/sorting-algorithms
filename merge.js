function merge(arr1,arr2) {
    let holder = []
    while(arr1.length && arr2.length){
        let insert = (arr1[0] > arr2[0]) ? arr2.shift() : arr1.shift()        
        holder.push(insert)
    }

    if(!arr1.length) return [...holder,...arr2]
    if(!arr2.length) return [...holder,...arr1]
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr
    let middle = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,middle))
    let right = mergeSort(arr.slice(middle))
    return merge(left,right)
}

module.exports = { merge, mergeSort};