// Assignment
// 미국을 비롯해 전세계 대부분의 나라들이 생일을 기준으로 나이를 계산 합니다. 쉽게 말해 미국은 태어나자마자 0살이고 생일을 지나야 비로소 한 살이 됩니다. 반면에 한국은 태어나자마자 1살이고 연도가 바뀔 때마다 한 살씩 먹습니다. 예를 들어 미국에서는 1995년 9월 12일에 태어났으면 1995년 9월 12일에는 0살이고 1996년 9월 12일이 되야 1살이 됩니다. 그에 비해 한국에서는 1995년 9월 12일에 태어나자마자 1살이고 1996년 1월 1일에 2살이 됩니다. 1살 차이도 크게 생각하는 우리나라 고유의 문화에 비롯한 계산법이 아닌가 추측해 봅니다. 미국이나 다른 나라가 사용하는 나이 계산법은 우리나라에서는 만 나이 라고 하죠.

// 앞서 말한 만으로 계산한 나이를 구하는 함수인 getWesternAge 함수를 구현해 봅시다.
// 이 함수는 birthday 라는 인자를 받습니다.
// 이 birthday 는 Date 객체 입니다. birthday 라는 인자를 넣었을 때, 현재를 기준으로 만으로 계산한 나이를 리턴 해주세요.
// birthday 는 string이 아닌 Date 객체라는 걸 명심하세요 :)
// 예를 들어, 오늘이 2020년 7월 21일이고, birthday 값이 다음과 같다면:

// 1990-03-21T00:45:06.562Z
// 리턴 값은 30 이 되어야 합니다.

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

// algorithm
// 1. 현재 시간 정보 획득
// 2. 생일에 대한 시간 정보 획득
// 3. 생일에 비해 얼마 만큼의 시간이 흘렀는지 계산
// 4. 3에서 계산된 밀리초를 환산해서 연도로 출력
