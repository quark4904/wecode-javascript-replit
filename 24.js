function whatIs(type) {
  let description;

  switch (type) {
    case "scope":
      description = "변수가 유효성을 갖는 영역 ";
      break;
    case "block":
      description =
        "상자와 같은 개념. 해당 block에서 선언된 변수는 해당 block 내에서만 호출 가능함";
      break;
    case "global scope":
      description = "전역 - 코드 어디에서도 접근이 가능하다.";
      break;
    case "global variable":
      description = "전역 변수 - 코드 어디에서도 호출이 가능하다.";
      break;
    case "block scope":
      description =
        "상자와 같은 개념. 해당 block에서 선언된 변수는 해당 block 내에서만 호출 가능함";
      break;
    case "local variable":
      description = "지역 변수 - 해당 block내에서만 사용 가능";
      break;
    case "global namespace":
      description = "변수 이름을 사용할 수 있는 범위";
      break;
    case "scope pollution":
      description =
        "global variable의 경우 변수가 계속 살아 있기 때문에 지저분해진다.";
      break;
    default:
      description = "";
      break;
  }

  return description;
}
