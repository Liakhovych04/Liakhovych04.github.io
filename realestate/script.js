/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ (() => {

function tabs(event) {
  const targetTab = event.target;
  if (!targetTab.classList.contains('deals-tabs-btn') || targetTab.classList.contains('active')) {
    return;
  }
  const tabsBtn = document.querySelectorAll('.deals-tabs-btn');
  tabsBtn.forEach(tab => tab.classList.remove('active'));
  targetTab.classList.add('active');
  const tabContent = document.querySelector('.deals-tabs-body');
  const tabItems = document.querySelectorAll('.deals-tabs-item');
  tabItems.forEach(item => item.classList.remove('active'));
  const tabIndex = Array.from(tabsBtn).indexOf(targetTab);
  tabItems[tabIndex].classList.add('active');
}
const tabsContainer = document.querySelector('.deals-tabs-nav');
tabsContainer.addEventListener('click', tabs);
tabs({
  target: document.querySelector('.deals-tabs-btn.active')
});

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
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_up__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/up */ "./src/js/modules/up.js");
/* harmony import */ var _modules_up__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_up__WEBPACK_IMPORTED_MODULE_1__);


window.addEventListener('DOMContentLoaded', () => {});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map