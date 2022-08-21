/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_repair_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/repair.js */ "./js/repair.js");
/* harmony import */ var _js_repair_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_repair_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/slider.js */ "./js/slider.js");
/* harmony import */ var _js_toggle_btn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/toggle-btn.js */ "./js/toggle-btn.js");
/* harmony import */ var _js_toggle_btn_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_toggle_btn_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index.html */ "./index.html");



/*import 'https://unpkg.com/swiper@8/swiper-bundle.min.js';*/





/***/ }),

/***/ "./js/repair.js":
/*!**********************!*\
  !*** ./js/repair.js ***!
  \**********************/
/***/ (() => {

/* Toggle button */
function ready() {
  let repair_block__toggle = true;
  let repair_block__toggleButton = document.querySelector('.repair_block__toggle-button');
  repair_block__toggleButton.addEventListener("click", () => {
    let repair_block__list = document.querySelector('.repair_block__list');

    if (repair_block__toggle) {
      repair_block__list.style.height = 'auto';
      repair_block__toggleButton.innerHTML = 'Скрыть';
      repair_block__toggleButton.style.backgroundImage = '../images/close_icon.svg';
    } else {
      repair_block__list.style.height = '200px';
      repair_block__toggleButton.innerHTML = 'Показать все';
      repair_block__toggleButton.style.backgroundImage = '../images/expand.svg';
    }

    repair_block__toggle = !repair_block__toggle;
  });
}

document.addEventListener("DOMContentLoaded", ready);

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination]);
window.addEventListener('resize', function (event) {
  console.log('resize');

  if (window.innerWidth <= '768') {
    addSwiper();
  }
}, true);

if (window.innerWidth <= '768') {
  addSwiper();
  addSwiperRepairTypes();
}

function addSwiper() {
  const slider = document.querySelector('.swiper-container');
  console.log('slider', slider);
  const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    grabCursor: true,
    mousewheel: {
      sensitivity: 1
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
}

function addSwiperRepairTypes() {
  const slider = document.querySelector('.swiper-container-2');
  console.log('slider', slider);
  const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
    slidesPerView: 'auto',
    spaceBetween: 32,
    grabCursor: true,
    mousewheel: {
      sensitivity: 1
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
}

/***/ }),

/***/ "./js/toggle-btn.js":
/*!**************************!*\
  !*** ./js/toggle-btn.js ***!
  \**************************/
/***/ (() => {

let toggleBtn = document.getElementById('read-more-toggle-btn');
let toggleBlock = document.getElementById('toggle-text-block');
let toggleBlockOpen = true; //max-height: initial;

console.log(toggleBtn);
console.log(toggleBlock);
toggleBtn.addEventListener('click', () => {
  toggleBlock.style.maxHeight = toggleBlockOpen ? 'initial' : '90px';
  toggleBlockOpen = !toggleBlockOpen;
});

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/content/logo.svg */ "./img/content/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/content/bg.jpg */ "./img/content/bg.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/content/brands/lenovo.svg */ "./img/content/brands/lenovo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/content/brands/hp.svg */ "./img/content/brands/hp.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/content/brands/samsung.svg */ "./img/content/brands/samsung.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/content/brands/bosch.svg */ "./img/content/brands/bosch.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/content/brands/iphone.svg */ "./img/content/brands/iphone.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/content/brands/sony.svg */ "./img/content/brands/sony.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\">\n  <title>Web Core 1.6</title>\n</head>\n<body>\n  <!-- \n    Webpack не дробит html, поэтому html не разбиваем на компоненты\n  -->\n   <!--\n       Создаем блок для любого независимого блока\n       Создаем блок когда нужно создать служебный блок\n       Допустима любая вложенность блоков\n       __\n       Элменты в Дом дереве могут иметь любую вложенность (можно вкладывать элементы в элементы)\n       Но в Бэм дереве элементы не могут быть вложенны в элементы\n       (у всех элементов родитель блок, независимо от вложенности в html)\n       --\n       блок__элемент--модификатор миксин (header__menu menu)\n   //-->\n   <div class=\"page\">\n    <header class=\"header\">\n         <div class=\"header__container\">\n            <div class=\"header__flex-box\">\n                <div class=\"menu header-item header-item--padding-right\">\n                    <button class=\"menu-btn menu-item\"></button>\n                </div>\n                <div class=\"logo header-item  header-item--padding-right\">\n                    <a href=\"#\"><img alt=\"logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"></a>\n                </div>\n                <div class=\"line\"></div>\n            </div>\n            <div class=\"header__flex-box\">\n                <div class=\"submit menu-item header-item--padding-right\">\n                    <button class=\"menu-item submit-btn\"></button>\n                </div>\n                <div class=\"check-repair-status menu-item header-item--padding-left\">\n                    <button class=\"menu-item check-repair-status-btn\"></button>\n                </div>\n            </div>\n         </div>\n    </header>\n    <main>\n        <div class=\"content-header\">\n            <h1 class=\"content-header__title\">Услуги и сервисы</h1>\n        </div>\n        <div class=\"services-list\">\n            <button class=\"services-list__item\">Ремонтируемые устройства</button>\n            <button class=\"services-list__item\">Ремонтируемые бренды</button>\n            <button class=\"services-list__item\">Цены на услуги</button>\n            <button class=\"services-list__item\">Адреса сервисных центров</button>\n            <button class=\"services-list__item\">Специальные цены</button>\n        </div>\n        <div class=\"reviews\">\n            <button class=\"reviews__btn\">Отзывы</button>\n        </div>\n        <div class=\"content content--flex\">\n            <div class=\"about\">\n                <div class=\"about__about-text\">\n                    <div class=\"about__text-block\" id=\"toggle-text-block\">\n                        <p class=\"about__p about__p--margin\">Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.</p>\n\n                         <p class=\"about__p\">\n                             Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.</p>\n                    </div>\n                </div>\n                <button id=\"read-more-toggle-btn\" class=\"about__read-more-btn\">Читать далее</button>\n            </div>\n            <img class=\"content-image\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\">\n        </div>\n\n        <div class=\"repair_block\">\n            <div class=\"repair_block__header block-header\">\n                <div class=\"repair_block__title title\">Ремонт техники различных брендов</div>\n            </div>\n            <div class=\"repair_block__slider\">\n                <div class=\"image-slider swiper-container\">\n                    <div class=\"image-slider__wrapper swiper-wrapper\">\n                        <!-- Slides -->\n                        <div class=\"image-slider__slide swiper-slide\">\n                           <button class=\"image-slider__btn brand-btn\">\n                               <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Lenovo\">\n                           </button>\n                        </div>\n                        <div class=\"image-slider__slide swiper-slide\">\n                            <button class=\"image-slider__btn brand-btn\">\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"hp\">\n                            </button>\n                        </div>\n                        <div class=\"image-slider__slide swiper-slide\">\n                            <button class=\"image-slider__btn brand-btn\">\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"samsung\">\n                            </button>\n                        </div>\n                        <div class=\"image-slider__slide swiper-slide\">\n                            <button class=\"image-slider__btn brand-btn\">\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Lenovo\">\n                            </button>\n                        </div>\n                        <div class=\"image-slider__slide swiper-slide\">\n                            <button class=\"image-slider__btn brand-btn\">\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"bosch\">\n                            </button>\n                        </div>\n                        <div class=\"image-slider__slide swiper-slide\">\n                            <button class=\"image-slider__btn brand-btn\">\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"iphone\">\n                            </button>\n                        </div>\n                        <div class=\"image-slider__slide swiper-slide\">\n                            <button class=\"image-slider__btn brand-btn\">\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"sony\">\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"swiper-pagination\"></div>\n                </div>\n            </div>\n \n            <div class=\"repair_block__list\">\n                <button class=\"brand-btn\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Lenovo\">\n                </button>\n                <button class=\"brand-btn\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"hp\">\n                </button>\n                <button class=\"brand-btn\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"samsung\">\n                </button>\n                <button class=\"image-slider__btn brand-btn\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Lenovo\">\n                </button>\n                <button class=\"brand-btn\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"bosch\">\n                </button>\n                <button class=\"brand-btn\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"iphone\">\n                </button>\n                <button class=\"brand-btn\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"sony\">\n                </button>\n                <button class=\"brand-btn\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Lenovo\">\n                </button>\n                <button class=\"brand-btn\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"sony\">\n                </button>\n                <button class=\"brand-btn\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Lenovo\">\n                </button>\n            </div>\n            <button class=\"repair_block__toggle-button\">Показать все</button>\n        </div>\n        <div class=\"repair-types block-header\">\n            <div class=\"repair-types__title title\">Ремонт различных видов техники</div>\n            <div class=\"repair-types__slider swiper-container-2\">\n                <div class=\"repair-types__wrapper swiper-wrapper\">\n                    <div class=\"repair-types__slide-item swiper-slide\">\n                        <button class=\"image-slider__btn repair-types-btn\">\n                            <div class=\"repair-types__slide-title\">Ремонт ПК</div>\n                        </button>\n                    </div>\n                    <div class=\"repair-types__slide-item swiper-slide\">\n                        <button class=\"image-slider__btn repair-types-btn\">\n                            <div class=\"repair-types__slide-title\">Ремонт ноутбуков</div>\n                        </button>\n                    </div>\n                    <div class=\"repair-types__slide-item swiper-slide\">\n                        <button class=\"image-slider__btn repair-types-btn\">\n                            <div class=\"repair-types__slide-title\">Ремонт планшетов</div>\n                        </button>\n                    </div>\n                    <div class=\"repair-types__slide-item swiper-slide\">\n                        <button class=\"image-slider__btn repair-types-btn\">\n                            <div class=\"repair-types__slide-title\">Ремонт ПК</div>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </main>\n  </div>\n</body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/content/bg.jpg":
/*!****************************!*\
  !*** ./img/content/bg.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bg.jpg";

/***/ }),

/***/ "./img/content/brands/bosch.svg":
/*!**************************************!*\
  !*** ./img/content/brands/bosch.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bosch.svg";

/***/ }),

/***/ "./img/content/brands/hp.svg":
/*!***********************************!*\
  !*** ./img/content/brands/hp.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/hp.svg";

/***/ }),

/***/ "./img/content/brands/iphone.svg":
/*!***************************************!*\
  !*** ./img/content/brands/iphone.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/iphone.svg";

/***/ }),

/***/ "./img/content/brands/lenovo.svg":
/*!***************************************!*\
  !*** ./img/content/brands/lenovo.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/lenovo.svg";

/***/ }),

/***/ "./img/content/brands/samsung.svg":
/*!****************************************!*\
  !*** ./img/content/brands/samsung.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/samsung.svg";

/***/ }),

/***/ "./img/content/brands/sony.svg":
/*!*************************************!*\
  !*** ./img/content/brands/sony.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/sony.svg";

/***/ }),

/***/ "./img/content/logo.svg":
/*!******************************!*\
  !*** ./img/content/logo.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo.svg";

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-69a700"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map