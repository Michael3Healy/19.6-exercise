function countZeroes(arr) {
    if (arr[0] == 0) {
        return arr.length
    }

	let left = 0;
    let right = arr.length - 1
    let firstZeroIdx = null;

    while (left <= right) {
        let middleIdx = Math.floor((left + right) / 2)
        let middleVal = arr[middleIdx]
        

        if (middleVal == 0) {
            firstZeroIdx = middleIdx;
            right = middleIdx - 1
        } else if (middleVal == 1) {
            left = middleIdx + 1
        }

    }
    if (firstZeroIdx) {
        return arr.length - firstZeroIdx
    } else {
        return 0
    }

}

module.exports = countZeroes;
