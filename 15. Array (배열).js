// Assignment 1
function getElement() {
  let arr = [3, [4, ["array", 9], 2 + 3], [0]];
  return arr[1][1][0];
}

// Assignment 2
// way 1
let myArray = [5];

function addFirstAndLast(myArray) {
  if (myArray[0] === undefined) {
    return 0;
  } else if (myArray.length === 1) {
    return myArray[0];
  } else if (myArray.length > 1) {
    return myArray[0] + myArray[myArray.length - 1];
  }
}

// way 2
function addFirstAndLast(myArray) {
  if (myArray.length == 1) {
    return myArray[0];
  } else if (myArray.length == 0) {
    return 0;
  } else {
    return myArray[0] + myArray[myArray.length - 1];
  }
}
