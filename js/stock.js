//  SLIDER JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});

////////////////////////////////////
window.addEventListener('load', e => {
    const prelaodAnime = document.querySelector('.page-preload-animation');
    document.body.removeChild(prelaodAnime);
    document.body.style.overflow = 'visible';
})