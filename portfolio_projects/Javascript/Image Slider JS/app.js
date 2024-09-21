const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let Interval = null
console.log(slides)


document.addEventListener("DOMContentLoaded",Initialization)

function Initialization(){
    slides[slideIndex].classList.add("displayImage");
}

function show(index){
    
    if(index >= slides.length){
        slideIndex = 0
    }else if(index < 0 ){
        slideIndex = 2;
    }

    slides.forEach(slide => {
        slide.classList.remove("displayImage")
    });

    slides[slideIndex].classList.add("displayImage");

}

function previous(){
    slideIndex --;
    show(slideIndex)
    console.log(slideIndex)
}

function next(){
    slideIndex ++;
    show(slideIndex)
}
