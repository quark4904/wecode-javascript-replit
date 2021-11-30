let myProfile = {
  name: "김개발",
  address: {
    email: "geabal@gmail.com",
    home: "위워크",
  },
  "my favorite": {
    food: [
      {
        name: "샐러드",
        price: 3500,
      },
      {
        name: "삼겹살",
        price: 15000,
      },
    ],
    hobby: ["축구"],
  },
};

function getAnswer() {
  return myProfile["my favorite"]["food"][0]["name"];
}
