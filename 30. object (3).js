const getExamResult = (scores, requiredClasses) => {
  let scoresEntries = Object.entries(scores); // 객체를 배열로 변경

  let values = []; // scores 객체의 키값들을 숫자로 바꾸어 할당하기 위해 빈 배열 선언

  for (let i = 0; i < scoresEntries.length; i++) {
    // for문 및 조건문을 통해 배열로 변경된 객체의 키값을 숫자로 변경
    if (scoresEntries[i][1] === "A+") {
      values.push(4.5);
    } else if (scoresEntries[i][1] === "A") {
      values.push(4);
    } else if (scoresEntries[i][1] === "B+") {
      values.push(3.5);
    } else if (scoresEntries[i][1] === "B") {
      values.push(3);
    } else if (scoresEntries[i][1] === "C+") {
      values.push(2.5);
    } else if (scoresEntries[i][1] === "C") {
      values.push(2);
    } else if (scoresEntries[i][1] === "D+") {
      values.push(1.5);
    } else if (scoresEntries[i][1] === "D") {
      values.push(1);
    } else if (scoresEntries[i][1] === "F") {
      values.push(0);
    }
  }

  let newScores = {}; // 숫자로 변경된 키값을 반영하기 위해 빈 객체 선언

  for (let i = 0; i < scoresEntries.length; i++) {
    // 숫자로 변경된 키값을 기존 키와 매칭시켜 새로운 객체에 추가
    newScores[scoresEntries[i][0]] = values[i];
  }

  for (let i = 0; i < requiredClasses.length; i++) {
    let isExist = Object.keys(scores).includes(requiredClasses[i]); // requiredClasses 배열의 값 중에 scores의 키와 일치하는지 것이 있는지 확인
    if (isExist === false) {
      newScores[requiredClasses[i]] = 0; // 일치하는 요소가 없다면 newScores 객체에 키값이 0인 키 생성
    }
  }
  return newScores;
};
