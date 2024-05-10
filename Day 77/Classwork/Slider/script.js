const img = document.querySelector("#slider");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

const images = ["./images.png", "./images (1).png", "./images (2).png"];

let count = 0;

nextBtn.addEventListener('click', function(){
    count += 1;
    if (count >= images.length){
        count = 0;
    }
    img.src = images[count]
    img.style.animationName = "slide"
    if (count == 0){
        count = images.length;
    }
    img.src = images[count - 1]
    img.style.animationName = "slide"
})

prevBtn.addEventListener('click', function(){
    count -= 1;
    if (count < 0){
        count = images.length - 1;
    }
    img.src = images[count]
})