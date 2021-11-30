// original
function divideArrayInHalf(array) {
  let result = [];
  for (let i = 5; i >= 0; i--) {
    if (array[i] <= 10) {
      result.unshift(array[i]);
    } else if (array[i] > 10) {
      result.push(array[i]);
    }
  }
  return result;
}

// modified
function divideArrayInHalf(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= 10) {
      result.unshift(arr[i]);
    } else if (arr[i] > 10) {
      result.push(arr[i]);
    }
  }
  return result;
}
