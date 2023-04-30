(function () {
    const menu = document.querySelector(".menu");
    if (!menu) return;

    const btn = menu.querySelector(".menu__button");

    function toggleMenu() {
        menu.classList.toggle("active");
    }

    btn.addEventListener("click", toggleMenu);
})();
