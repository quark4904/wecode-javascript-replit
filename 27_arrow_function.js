// function 사용
function welcome(name) {
  return "안녕하세요" + name;
}

// 아래에서 변환해주세요!
let welcome = (name) => "안녕하세요" + name;

// ES6
const handleBio = (nickname, bio) => {
  const user = {
    nickname: nickname,
    bio: bio,
  };
  return user;
};

// 아래에서 변환해주세요!
function handleBio(nickname, bio) {
  const user = {
    nickname: nickname,
    bio: bio,
  };
  return user;
}
