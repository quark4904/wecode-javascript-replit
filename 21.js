function getWesternAge(birthday) {
  let birth = new Date(birthday);
  let birthTime = birth.getTime();
  let rightNow = new Date();
  let rightNowTime = rightNow.getTime();
  if (birthTime > 0) {
    let year = (rightNowTime - birthTime) / 1000 / 60 / 60 / 24 / 365;
    return parseInt(year);
  } else if (birthTime < 0) {
    let year = (-birthTime + rightNowTime) / 1000 / 60 / 60 / 24 / 365;
    return parseInt(year);
  }
}

// sohun

const day = new Date()
const birthday