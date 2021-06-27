// countZeroes

function countZeroes(arr){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2)

        if (arr[midIdx] === 0 && (arr[midIdx-1] === 1 || arr[midIdx-1] === undefined)) {
            return arr.length - midIdx
        } else if (arr[midIdx] === 1) {
            leftIdx = midIdx + 1;
        } else if (arr[midIdx] === 0 && arr[midIdx - 1] === 0) {
            rightIdx = midIdx - 1;
        }
    }
    return 0;
}

// sortedFrequency

function sortedFrequency(arr, val) {
    let firstIdx = findFirst(arr, val)
    if (firstIdx === -1) return firstIdx
    let lastIdx = findLast(arr, val)
    return lastIdx - firstIdx + 1
}

function findFirst(arr, val, low = 0, high = arr.length - 1) {
    while (high >= low) {
        let mid = Math.floor((low + high) / 2);
        
        if(mid === 0 || val > arr[mid-1] && arr[mid] === val) {
            return mid;
        } else if (val > arr[mid]) {
            return findFirst(arr, val, mid+1, high)
        } else {
            return findFirst(arr, val, low, mid-1)
        }
    }
    return -1
}

function findLast(arr, val, low = 0, high = arr.length-1) {
    while (high >= low) {
        let mid = Math.floor((low + high) / 2);

        if(mid === arr.length-1 || val < arr[mid+1] && arr[mid] === val) {
            return mid;
        } else if (val < arr[mid]) {
            return findLast(arr, val, low, mid-1)
        } else {
            return findLast(arr, val, mid+1, high)
        }
    }
    return -1
}

// findRotatedIndex

function findRotatedIndex(arr, val) {
    let pivot = findPivot(arr);
    if (pivot > 0 && val >= arr[0] && val <= arr[pivot-1]) {
        return binarySearch(arr, val, 0, pivot-1);
    } else {
        return binarySearch(arr, val, pivot, arr.length-1);
    }
}

function binarySearch(arr, val, start, end) {
    if (arr.length === 0) return -1
    if (val < arr[start] || val > arr[end])  return -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === val) {
            return mid;
        } else if (val < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1; 
        }
    }
    return -1
}

function findPivot(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length-1]) return 0;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] > arr[mid+1]) {
            return mid + 1;
        } else if (arr[start] <= arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}

// findRotationCount

function findRotationCount(arr, low = 0, high = arr.length-1) {
    if (high < low) return 0;
    if (high === low) return low;
    let mid = Math.floor((low+high) / 2)

    if (mid < high && arr[mid+1] < arr[mid]) return mid+1

    if (mid > low && arr[mid] < arr[mid-1]) return mid

    if (arr[high] > arr[low]) return findRotationCount(arr, low, mid-1);

    return findRotationCount(arr, mid+1, high)
}

// findFloor

function findFloor(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    if (arr[right] < val) return arr[right];
    if (arr[left] > val) return -1;

    while (left <= right) {
        let mid = Math.floor((left+right) / 2)
        if (arr[mid] > val && arr[mid-1] < val) {
            return arr[mid-1]
        } else if (arr[mid] < val && arr[mid+1] > val) {
            return arr[mid]
        } else if (arr[mid] > val) {
            right = mid - 1
        } else if (arr[mid] < val) {
            left = mid + 1
        }
    }

}