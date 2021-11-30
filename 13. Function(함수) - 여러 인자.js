// way1
function meetAt(year, month, date) {
  if (date) {
    return `${year}/${month}/${date}`;
  }
  if (month) {
    return `${year}년 ${month}월`;
  }
  if (year) {
    return `${year}년`;
  }
}

// way1
function meetAt(year, month, day) {
  if (year && !month && !day) {
    return `${year}년`;
  } else if (year && month && !day) {
    return `${year}년 ${month}월`;
  } else if (year && month && day) {
    return `${year}/${month}/${day}`;
  }
}
