(function () {
    const popup = document.querySelector(".popup");
    if (!popup) return;

    const popupOverlay = popup.querySelector(".popup__overlay");
    const formName = popup.querySelector(".popup__item--form-name input");
    const popupBtnClose = popup.querySelector(".popup__close");
    const popupWrp = popup.querySelector(".popup__wrap");
    const popupSuccessWrp = popup.querySelector(".popup__success");
    const btnsOpenPopup = document.querySelectorAll(".open-popup");

    if (btnsOpenPopup.length && popup) {
        btnsOpenPopup.forEach((element) => {
            element.addEventListener("click", () => {
                popup.classList.toggle("active");
         
                if (element.nextElementSibling !== null && formName) {
                    formName.value = element.nextElementSibling.innerHTML;
                }

                if (popupWrp.classList.contains("hide")) {
                    popupWrp.classList.remove("hide");
                }

                if (popupSuccessWrp.classList.contains("show")) {
                    popupSuccessWrp.classList.remove("show");
                }
            });
        });

        popupBtnClose.addEventListener("click", () => {
            popup.classList.toggle("active");
            formName.value = "";
        });

        popupOverlay.addEventListener("click", function (e) {
            const target = e.target;

            if (target.classList.contains("popup__overlay")) {
                popup.classList.toggle("active");
                formName.value = "";
            }
        });
    }
})();
