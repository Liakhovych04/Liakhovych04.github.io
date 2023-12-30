/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/blogs.js":
/*!*********************************!*\
  !*** ./src/js/modules/blogs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initBlogCard)
/* harmony export */ });
function initBlogCard(blogCard) {
  const excerpt = blogCard.querySelector('.excerpt');
  const fullText = blogCard.querySelector('.full-text');
  const toggleButton = blogCard.querySelector('.toggle-button');
  const dots = blogCard.querySelector('.dots');
  toggleButton.addEventListener('click', () => {
    if (fullText.style.display === 'none' || fullText.style.display === '') {
      fullText.style.display = 'block';
      excerpt.style.display = 'none';
      toggleButton.textContent = 'Hide';
      dots.style.display = 'none';
    } else {
      fullText.style.display = 'none';
      excerpt.style.display = 'block';
      toggleButton.textContent = 'More';
      dots.style.display = 'inline';
    }
  });
  fullText.style.display = 'none';
  dots.style.display = 'inline';
}

/***/ }),

/***/ "./src/js/modules/blogsMore.js":
/*!*************************************!*\
  !*** ./src/js/modules/blogsMore.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const blogsMore = (trigger, styles) => {
  const cards = document.querySelectorAll(styles),
    btn = document.querySelector(trigger);
  cards.forEach(card => {
    card.classList.add('animated', 'fadeInUp');
  });
  btn.addEventListener('click', () => {
    cards.forEach(card => {
      card.classList.remove('blog-item-hidden');
      card.classList.add('blog-item');
    });
    btn.remove();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogsMore);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (() => {

const menu = document.querySelector('.menu-list'),
  menuItem = document.querySelectorAll('.menu-item'),
  hamburger = document.querySelector('.burger');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('burger-active');
  menu.classList.toggle('menu-list-active');
});
menuItem.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('burger-active');
    menu.classList.toggle('menu-list-active');
  });
});

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initSlider() {
  const slider = document.querySelector('.reviews-slider');
  const slides = document.querySelectorAll('.reviews-slide');
  const prevButton = document.querySelector('.arrow-left');
  const nextButton = document.querySelector('.arrow-right');
  let currentSlideIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;
  function showSlide(index) {
    slides.forEach(slide => {
      slide.classList.remove('active-slide');
      slide.classList.add('animated', 'fadeInLeft');
      currentSlideIndex = index;
    });
    slides[index].classList.add("active-slide");
  }
  function createDots() {
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("reviews-dots");
    slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("reviews-dot");
      dotsContainer.appendChild(dot);
    });
    slider.appendChild(dotsContainer);
  }
  function updateDots() {
    const dots = document.querySelectorAll(".reviews-dot");
    dots.forEach((dot, index) => {
      if (index === currentSlideIndex) {
        dot.classList.add("active-dot");
      } else {
        dot.classList.remove("active-dot");
      }
    });
  }
  function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
    updateDots();
  }
  function prevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
    updateDots();
  }
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);
  createDots();
  showSlide(currentSlideIndex);
  updateDots();
  slider.addEventListener("touchstart", e => {
    touchStartX = e.touches[0].clientX;
  });
  slider.addEventListener("touchmove", e => {
    touchEndX = e.touches[0].clientX;
  });
  slider.addEventListener("touchend", () => {
    const swipeDistance = touchEndX - touchStartX;
    if (swipeDistance > 50) {
      prevSlide();
    } else if (swipeDistance < -50) {
      nextSlide();
    }
  });
  setInterval(nextSlide, 5000);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initSlider);

/***/ }),

/***/ "./src/js/modules/up.js":
/*!******************************!*\
  !*** ./src/js/modules/up.js ***!
  \******************************/
/***/ (() => {

const scrollUp = document.querySelector('.scroll-up');
function toggleScrollUp() {
  scrollUp.classList.toggle('active', window.scrollY > 1500);
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
window.addEventListener('scroll', toggleScrollUp);
scrollUp.addEventListener('click', scrollToTop);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_burger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_up__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/up */ "./src/js/modules/up.js");
/* harmony import */ var _modules_up__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_up__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_blogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/blogs */ "./src/js/modules/blogs.js");
/* harmony import */ var _modules_blogsMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/blogsMore */ "./src/js/modules/blogsMore.js");





document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const blogCards = document.querySelectorAll('.blog-item');
  blogCards.forEach(function (blogCard) {
    _modules_blogs__WEBPACK_IMPORTED_MODULE_3__["default"].call(this, blogCard);
  });
  (0,_modules_blogsMore__WEBPACK_IMPORTED_MODULE_4__["default"])('.blog-view', '.blog-item-hidden');
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map