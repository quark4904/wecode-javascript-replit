function findSmallestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (result > arr[i]) {
      result = arr[i];
    }
  }
  return result;
}
