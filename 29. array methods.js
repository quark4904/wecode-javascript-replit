// Assignment 1
const moreThan100 = (nums) => {
  let result = [];
  nums.map((el) => {
    if (el >= 100) {
      return result.push(true);
    } else {
      return result.push(false);
    }
  });
  return result;
};

// Assignment 2
const formatDate = (dates) => {
  let newDate = [];
  dates.map((el) => {
    let nums = el.split("-");
    let newData = `${nums[0]}년 ${nums[1]}월 ${nums[2]}일`;
    newDate.push(newData);
  });
  return newDate;
};
