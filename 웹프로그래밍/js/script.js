var menuList = [
  {
    image: "media/basic.jpg",
    title: "기본 떡볶이",
    price: "$5000",
    description: "기본 떡볶이지만 다른 곳과 다른 맛 보장!"
  },
  {
    image: "media/black.jpg",
    title: "간장 떡볶이",
    price: "$5500",
    description: "짜장 소스로 만든 특유의 맛이 나는 떡볶이!"
  },
  {
    image: "media/white.jpg",
    title: "까르보라나 떡볶이",
    price: "$5500",
    description: "mz세대를 위한 트렌드 떡볶이!"
  }
];

var menuListContainer = document.querySelector('.menu-list');
for (var i = 0; i < menuList.length; i++) {
  var menuItem = document.createElement('li');
  menuItem.innerHTML = `
    <img src="${menuList[i].image}" style="width:200px; height:200px;" alt="메뉴${i + 1}">
    <h3>${menuList[i].title} ${menuList[i].price}</h3>
    <p>${menuList[i].description}</p>
  `;
  menuListContainer.appendChild(menuItem);
}
    function over(obj) {
      obj.src = "media/map.png";
    }
    function out(obj) {
      obj.src = "media/분식.jpg";
    }