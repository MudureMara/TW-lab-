"use strict";
(() => {
    const images = [
        "../../MEDIA/imag1.jpg",
        "../../MEDIA/imag2.jpg",
        "../../MEDIA/imag3.jfif"
    ];
    const mainImage = document.getElementById("carousel-image");
    if (!mainImage) {
        throw new Error("Imaginea caruselului nu exista!");
    }
    let currentIndex = 0;
    function showNextImage() {
        mainImage.style.opacity = "0";
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            mainImage.src = images[currentIndex];
            mainImage.style.opacity = "1";
        }, 500);
    }
    setInterval(showNextImage, 3000);
})();
