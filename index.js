const vieport = document.getElementById('container').offsetWidth;
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const slides = document.querySelector('div.slider');
const idVieSlider = document.getElementById('vieSlider');
const allSlides = document.querySelectorAll('.slide');
let vieSlide = 0;
let arr = [];
const numSlide = allSlides.length;

for (let i = 0; i<numSlide; i++){
    idVieSlider.insertAdjacentHTML("afterbegin", '<div class="dieSlider"></div>');
}

const vieSlider = document.querySelectorAll('.dieSlider');

slides.style.width = 100 * allSlides.length + "%";
idVieSlider.style.width = 30 * vieSlider.length + "px";
vieSlider[0].style.backgroundColor = 'green';

next.addEventListener('click', function () {
    vieSlider[vieSlide].style.backgroundColor = 'red';
    if (vieSlide < vieSlider.length - 1) {
        vieSlide++;
        console.log(vieSlide);
    } else {
        vieSlide = 0;
        console.log(vieSlide);
    }
    vieSlider[vieSlide].style.backgroundColor = 'green';
    slides.style.left = -vieSlide * vieport + 'px';
});

for (let i = 0; i < vieSlider.length; i++) {
    arr.push(vieSlider[i]);
    vieSlider[i].addEventListener('click', function (e) {
        console.log(arr.indexOf(e.target));
        let index = arr.indexOf(e.target);
        vieSlider[vieSlide].style.backgroundColor = 'red';
        vieSlide = index;
        vieSlider[vieSlide].style.backgroundColor = 'green';
        slides.style.left = -vieSlide * vieport + 'px';
    });
}

prev.addEventListener('click', function () {
    vieSlider[vieSlide].style.backgroundColor = 'red';
    if (vieSlide <= 0) {
        vieSlide = vieSlider.length - 1;
        console.log(vieSlide);
    } else {
        vieSlide--;
        console.log(vieSlide)
    }
    vieSlider[vieSlide].style.backgroundColor = 'green';
    slides.style.left = -vieSlide * vieport + 'px';
});

setInterval(function () {
    vieSlider[vieSlide].style.backgroundColor = 'red';
    if (vieSlide < vieSlider.length - 1) {
        vieSlide++;
    } else {
        vieSlide = 0;
    }
    vieSlider[vieSlide].style.backgroundColor = 'green';
    slides.style.left = -vieSlide * vieport + 'px';
}, 3000);
