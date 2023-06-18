//  SLIDER JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});

const prelaodAnime = document.querySelector('.page-preload-animation');
document.body.style.overflow = 'hidden'

window.addEventListener('load', e => {
    document.body.removeChild(prelaodAnime);
    document.body.style.overflow = 'visible'
})