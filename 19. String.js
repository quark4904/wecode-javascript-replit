// my answer
// function sliceCityFromAddress(address) {
//   let cityChar = address.indexOf("시");
//   if (cityChar !== -1) {
//     let seoulCity = address.indexOf("서울특별시");
//     if (seoulCity !== -1) {
//       address = address.slice(seoulCity + 6, address.length);
//     } else {
//       address =
//         address.slice(0, cityChar - 2) +
//         address.slice(cityChar + 2, address.length);
//     }
//   }
//   return address;
// }

// let address = "경기도 성남시 분당구 중앙공원로 53";

// live coding
function sliceCityFromAddress(address) {
  let words = address.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let lastIndex = word.legnth - 1;
    let lastLetter = word[lastIndex];
    if (lastLetter === "시") {
      words.splice(i, 1);
      return words.join(" ");
    }
  }
}

// sohun answer
// function sliceCityFromAddress(address) {
//   // your code here
//   const words = address.split(" ");

//   for (let i = 0; i < words.length; i++) {
//     const wordLength = words[i].length;
//     if (words[i][wordLength - 1] === "시") {
//       words.splice(i, 1);
//       break;
//     }
//   }

//   // console.log(words.join(' '))
//   return words.join("");
// }

// way 2
function sliceCityFromAddress(address) {
  let result = address.split(" ");
  for (let i = 0; i < result.length; i++) {
    if (result[i][result[i].length - 1] === "시") {
      result.splice(i, 1);
    }
  }
  return result.join(" ");
}
