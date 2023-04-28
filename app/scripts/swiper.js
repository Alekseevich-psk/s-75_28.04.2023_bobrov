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
        }
    });
})();