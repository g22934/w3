
// Personalized welcome message code


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt("あなたの名前を入力してください。");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla はかっこいいよ、${myName} さん`;
}

myButton.onclick = function() {
  setUserName();
}

// Image switcher code

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/tiikawaのコピー.jpeg");
  } else {
    myImage.setAttribute("src", "images/tiikawaのコピー.jpeg");
  }
};
