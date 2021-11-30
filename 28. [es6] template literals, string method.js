const handleEdit = (nickname, interests) => {
  let obj = {
    nickname: nickname,
    interests: interests.split(","),
    bio: `제 닉네임은 ${nickname}입니다. 취미는 ${interests}입니다.`,
  };
  return obj;
};
