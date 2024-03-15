function sortedFrequency(arr, num) {
    let firstIndex = findFirstIndex(arr, num)
    if (firstIndex === -1) {
        return firstIndex
    }
    let lastIndex = findLastIndex(arr, num)
    return lastIndex - firstIndex + 1
}

module.exports = sortedFrequency;

function findFirstIndex(arr, num) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if ((mid === 0 || arr[mid - 1] != arr[mid]) && arr[mid] === num) {
			return mid;
		} else if (arr[mid] < num) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
    return -1
}

function findLastIndex(arr, num) {
    let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if ((mid === (arr.length - 1) || arr[mid + 1] != arr[mid]) && arr[mid] === num) {
			return mid;
		} else if (arr[mid] < num) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
    return -1
}
