//  SLIDER JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});

// Page pre-load animation
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

// See more Button
const seeMore = () => {
    document.querySelectorAll('div.mobile-load-more')
    .forEach(seeMoreBtn => {
        seeMoreBtn.addEventListener('click', e => {
            e.preventDefault();

            Array.from(seeMoreBtn.parentElement.children)
            .forEach(card => {
                if(card.classList.contains('more')) {
                    card.style.display = 'block';
                }
            })
        })
    })
}

const runBySize = () => {
    const mediaQuery = window.matchMedia('(min-width: 990px)');

    if(mediaQuery.matches) {
        seeMore();
    }
}

runBySize();

window.addEventListener('change', runBySize);