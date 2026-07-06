let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

let current = 0;

/* Open Image */

for(let i=0; i<images.length; i++){

    images[i].onclick = function(){

        current = i;

        lightbox.style.display = "flex";

        lightboxImg.src = images[current].src;
    }
}

/* Next Button */

document.getElementById("next").onclick = function(){

    current++;

    if(current >= images.length){
        current = 0;
    }

    lightboxImg.src = images[current].src;
}

/* Previous Button */

document.getElementById("prev").onclick = function(){

    current--;

    if(current < 0){
        current = images.length - 1;
    }

    lightboxImg.src = images[current].src;
}

/* Close Button */

document.getElementById("close").onclick = function(){

    lightbox.style.display = "none";
}

/* Filter Images */

function filterImages(category){

    let items = document.querySelectorAll(".image");

    for(let i=0; i<items.length; i++){

        if(category == "all"){
            items[i].style.display = "block";
        }
        else if(items[i].classList.contains(category)){
            items[i].style.display = "block";
        }
        else{
            items[i].style.display = "none";
        }
    }
}