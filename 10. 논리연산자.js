function rockPaperScissors(player1, player2) {
  //  예시:
  // if ( (player1 === "가위" && player2 === "보" ) || (player1 === "가위" && player2 === "가위") ) {
  //   result = "player1";
  // }
  if (
    (player1 === "가위" && player2 === "가위") ||
    (player1 === "가위" && player2 === "보") ||
    (player1 === "바위" && player2 === "가위") ||
    (player1 === "바위" && player2 === "바위") ||
    (player1 === "보" && player2 === "보") ||
    (player1 === "보" && player2 === "바위")
  ) {
    return "player1";
  } else {
    return "player2";
  }
}
