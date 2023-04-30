"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function onEntry(entry) {
  entry.forEach(function (change) {
    if (change.isIntersecting) {
      change.target.classList.add('animation');
    }
  });
}
var options = {
  threshold: [0.01]
};
var observer = new IntersectionObserver(onEntry, options);
var elements = document.querySelectorAll('.fade');
var _iterator = _createForOfIteratorHelper(elements),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var elm = _step.value;
    observer.observe(elm);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
"use strict";

(function () {
  var faq = document.querySelector(".faq");
  if (!faq) return;
  faq.querySelectorAll(".faq__item").forEach(function (element) {
    element.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
})();
"use strict";

(function () {
  var header = document.querySelector(".header");
  if (!header) return;
  var classForHeaderScroll = "scroll";
  var marginBottomFromElement = 0;
  var nextElem = header.nextElementSibling;
  var heightElem = getMaxOfArray(header);
  addClassForElement(header);
  window.onscroll = function () {
    addClassForElement(header);
  };
  function addClassForElement(el) {
    scrollHeight() > heightElem ? el.classList.add(classForHeaderScroll) : el.classList.remove(classForHeaderScroll);
    nextElem.style.marginTop = heightElem + 'px';
  }
  function scrollHeight() {
    return Math.max.apply(null, [window.pageYOffset, document.documentElement.scrollTop]);
  }
  function getMaxOfArray(el) {
    return Math.max.apply(null, [el.clientHeight, el.offsetHeight]) + marginBottomFromElement;
  }
})();
"use strict";

(function () {
  var menu = document.querySelector(".menu");
  if (!menu) return;
  var btn = menu.querySelector(".menu__button");
  function toggleMenu() {
    menu.classList.toggle("active");
  }
  btn.addEventListener("click", toggleMenu);
})();
"use strict";

(function () {
  var popup = document.querySelector(".popup");
  if (!popup) return;
  var popupOverlay = popup.querySelector(".popup__overlay");
  var formName = popup.querySelector(".popup__item--form-name input");
  var popupBtnClose = popup.querySelector(".popup__close");
  var popupWrp = popup.querySelector(".popup__wrap");
  var popupSuccessWrp = popup.querySelector(".popup__success");
  var btnsOpenPopup = document.querySelectorAll(".open-popup");
  if (btnsOpenPopup.length && popup) {
    btnsOpenPopup.forEach(function (element) {
      element.addEventListener("click", function () {
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
    popupBtnClose.addEventListener("click", function () {
      popup.classList.toggle("active");
      formName.value = "";
    });
    popupOverlay.addEventListener("click", function (e) {
      var target = e.target;
      if (target.classList.contains("popup__overlay")) {
        popup.classList.toggle("active");
        formName.value = "";
      }
    });
  }
})();
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.querySelector('.preloader');
  if (!preloader) return;
  setTimeout(function () {
    document.querySelector(".preloader").classList.add("hide");
  }, 1000);
});
"use strict";

(function () {
  var ranting = document.querySelectorAll(".ranting");
  console.log(ranting.length);
  if (ranting.length <= 0) return;
  ranting.forEach(function (el) {
    var maxCount = el.querySelector(".ranting__max-count");
    var rantingValue = el.querySelector(".ranting__value");
    var starsList = el.querySelector(".ranting__list");
    if (maxCount) cloneStar(starsList, Number(maxCount.innerHTML), Number(rantingValue.innerHTML));
  });
  function cloneStar(parent, countElem, rantingValue) {
    var integer = Math.trunc(rantingValue);
    var percent = 100;
    for (var i = 0; i < countElem; i++) {
      if (integer == i) percent = rantingValue % 1 * 100;
      if (integer < i) percent = 0;
      parent.insertAdjacentHTML("beforeend", "<div class=\"ranting__item\">\n                    <div class=\"ranting__bg\" style=\"width:".concat(percent, "%\"></div>\n            </div>"));
    }
  }
})();
"use strict";

(function () {
  var servicesSlider = document.querySelector(".services__slider");
  if (!servicesSlider) return;
  new Swiper(".services__slider", {
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
      nextEl: ".services .sl-arrows__arrow--next",
      prevEl: ".services .sl-arrows__arrow--prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
})();
(function () {
  var gallerySlider = document.querySelector(".gallery__slider");
  if (!gallerySlider) return;
  new Swiper(".gallery__slider", {
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
      nextEl: ".gallery .sl-arrows__arrow--next",
      prevEl: ".gallery .sl-arrows__arrow--prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 30
      },
      980: {
        slidesPerView: 4
      }
    }
  });
})();