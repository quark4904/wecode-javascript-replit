function getData(salesArr, reviewArr, likeArr) {
  let numSales = 0;
  let numReview = 0;
  let numLike = 0;
  for (let i = 0; i < salesArr.length; i++) {
    numSales = numSales + salesArr[i][1];
    numReview = numReview + reviewArr[i][1];
    numLike = numLike + likeArr[i][1];
  }
  return { sumAmount: numSales, sumReview: numReview, sumLike: numLike };
}
