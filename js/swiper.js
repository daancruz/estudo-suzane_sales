const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,

    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10,
        }
    },

    // pagination: {
    //     el: '.swiper-pagination',
    // },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: 'swiper-scrollbar',
    },
});
