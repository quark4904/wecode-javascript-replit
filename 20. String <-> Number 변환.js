function nationalPensionRemainingYearCount(age_string) {
  let numAgeString = Number(age_string);
  if (numAgeString > 65) {
    return "축하합니다.";
  } else if (numAgeString <= 65) {
    return `앞으로 ${65 - numAgeString}년 남으셨습니다`;
  }
}
