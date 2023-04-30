(function () {
    const servicesSlider = document.querySelector(".services__slider");
    if (!servicesSlider) return;

    new Swiper(".services__slider", {
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: {
            nextEl: ".services .sl-arrows__arrow--next",
            prevEl: ".services .sl-arrows__arrow--prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
})();

(function () {
    const gallerySlider = document.querySelector(".gallery__slider");
    if (!gallerySlider) return;

    new Swiper(".gallery__slider", {
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: {
            nextEl: ".gallery .sl-arrows__arrow--next",
            prevEl: ".gallery .sl-arrows__arrow--prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 30,
            },
            980: {
                slidesPerView: 4,
            },
        },
    });
})();
