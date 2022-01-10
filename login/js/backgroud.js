const body = document.querySelector("body");

const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
//const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;
const bgImage = `url(img/${chosenImage})`
//body.appendChild(bgImage);
body.style.backgroundImage = bgImage;
//backgroundImage 적용을 위해서는 url("주소")의 형태로 전달해야 하기 때문에 위와같이 수정하였다.