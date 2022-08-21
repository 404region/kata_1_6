import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

window.addEventListener('resize', function(event) {
    console.log('resize');
    if(window.innerWidth <= '768') {
        addSwiper();
    }
}, true);

if(window.innerWidth <= '768') {
    addSwiper();
    addSwiperRepairTypes();
}

function addSwiper() {
    const slider =  document.querySelector('.swiper-container');
    console.log('slider', slider);

    const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        grabCursor: true,
        mousewheel: {
            sensitivity: 1,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        }
    });
}

function addSwiperRepairTypes() {
    const slider =  document.querySelector('.swiper-container-2');
    console.log('slider', slider);

    const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 32,
        grabCursor: true,
        mousewheel: {
            sensitivity: 1,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        }
    });
}