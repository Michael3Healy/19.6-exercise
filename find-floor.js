function findFloor(arr, x) {
    if (arr[0] > x) {
        return -1
    }

	let left = 0;
	let right = arr.length - 1;
    let floor = null

	while (left <= right) {
		let middleIdx = Math.floor((left + right) / 2);
		let middleVal = arr[middleIdx];
        
        if (middleVal <= x) {
            floor = middleVal;
            left = middleIdx + 1
        } else {
            right = middleIdx - 1
        }
	}
    return floor
}

module.exports = findFloor;
