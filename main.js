// let minImg = document.querySelector(".product-img-container img");

const { Transform } = require("node:stream");

// let bigImg = document.querySelector(".main-product-container img");
// minImg.addEventListener("mousehover", GetmainproductImg(this.src));

function GetmainproductImg(src) {
    document.querySelector(".main-product-container img").src = src;

}