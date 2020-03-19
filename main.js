const colorOne = document.querySelector(".palette-color color-1")
const colorTwo = document.querySelector(".palette-color color-2")
const colorThree = document.querySelector(".palette-color color-3")
const colorFour = document.querySelector(".palette-color color-4")
const colorFive = document.querySelector(".palette-color color-5")

const  brushPaintSwap1 = function(){
    let swapColor = document.querySelector(".current-brush");
    swapColor.classList.replace(swapColor.classList[1], "color-1")
}

const brushPaintSwap2 = function(){
    let swapColor = document.querySelector(".current-brush");
    swapColor.classList.replace(swapColor.classList[1], "color-2")
}

function brushPaintSwap3(){
    let swapColor = document.querySelector(".current-brush");
    swapColor.classList.replace(swapColor.classList[1], "color-3")
}

function brushPaintSwap4(){
    let swapColor = document.querySelector(".current-brush");
    swapColor.classList.replace(swapColor.classList[1], "color-4")
}

function brushPaintSwap5(){
    let swapColor = document.querySelector(".current-brush");
    swapColor.classList.replace(swapColor.classList[1], "color-5")
}

colorOne.addEventListener('click', brushPaintSwap1)
colorTwo.addEventListener('click', brushPaintSwap2)
colorThree.addEventListener('click', brushPaintSwap3)
colorFour.addEventListener('click', brushPaintSwap4)
colorFive.addEventListener('click', brushPaintSwap5)

