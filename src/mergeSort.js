function mergeSort(arr) {
    //base case
    if (arr.length < 2) {
        return [arr[0]]
    } else {

        // slice array in half
        let halfLength = Math.ceil(arr.length / 2)
        let leftSide = mergeSort(arr.slice(0,halfLength))
        let rightSide = mergeSort(arr.slice(halfLength,arr.length))

        // merge both the left and right side
        let mergedArray = []
        while (leftSide.length > 0 || rightSide.length > 0) {
            if (leftSide[0] < rightSide[0] || rightSide[0] === undefined) {
                mergedArray.push(leftSide[0])
                leftSide.shift()
            } else if (rightSide[0] < leftSide[0] || leftSide[0] === undefined) {
                mergedArray.push(rightSide[0])
                rightSide.shift()
            } else if (leftSide[0] === rightSide[0]) {
                mergedArray.push(leftSide[0])
                leftSide.shift()
            }
        }
        return mergedArray
    }
}