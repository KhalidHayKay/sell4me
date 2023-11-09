//  SLIDER JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});

// Pre-load animation
window.addEventListener('load', e => {
    const prelaodAnime = document.querySelector('.page-preload-animation');
    document.body.removeChild(prelaodAnime);
    document.body.style.overflow = 'visible';
})

// Item Filter
const itemCategories = document.querySelectorAll('.item-category');

const hide = (element) => {
    element.style.display = 'none';
}

const show = (element) => {
    element.style.display = 'flex';
}

const runSearch = (name) => {
    itemCategories.forEach(itemCategory => {
        hide(itemCategory);
        
        if(name === ''){
            show(itemCategory);
        }

        if(itemCategory.firstElementChild.textContent === name){
            show(itemCategory)
        }
    })
}

document.querySelector('#items')
.addEventListener('change', e => {
    runSearch(e.target.value);
})