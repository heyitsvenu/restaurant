/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/callus.js":
/*!***********************!*\
  !*** ./src/callus.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderCall() {\r\n  const content = document.getElementById('content');\r\n\r\n  const call = document.createElement('section');\r\n  call.classList.add('call');\r\n  call.dataset.tab = 'call';\r\n  call.innerHTML = `\r\n    <h3 class=\"call-heading\">Please call us to have your food delivered at your doorstep</h3>\r\n    <div class=\"info\">\r\n      <p>Call-To : (+91)-8553271820</p>\r\n    </div>\r\n    <div class=\"loc-info\">\r\n      <p>\r\n        Please drop by our restaurant and enjoy our out of sky vibe and ambience\r\n      </p>\r\n    </div>\r\n    <div id=\"map\"></div>\r\n  `;\r\n\r\n  content.appendChild(call);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCall);\r\n\n\n//# sourceURL=webpack://restaurant/./src/callus.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderHome() {\r\n  const content = document.getElementById('content');\r\n\r\n  const header = document.createElement('header');\r\n  header.classList.add('header');\r\n  header.classList.add('active');\r\n  header.dataset.tab = 'home';\r\n  header.innerHTML = `\r\n    <div id=\"logo\"><h1>StarBelly</h1></div>\r\n    <div id=\"hero\">\r\n      <h2>Fill your belly while watching the stars</h2>\r\n      <p>\r\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores\r\n        eaque natus provident illo error accusantium expedita vitae quia\r\n        ipsum iusto?\r\n      </p>\r\n    </div>\r\n  `;\r\n\r\n  content.appendChild(header);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\r\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _callus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callus */ \"./src/callus.js\");\n\r\n\r\n\r\n\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_callus__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nconst tabs = document.querySelectorAll('#tabs button');\r\nconst tabsContent = document.querySelectorAll('[data-tab]');\r\n\r\ntabs.forEach((tab) => {\r\n  const target = tab.getAttribute('id').split('-')[0];\r\n  tab.addEventListener('click', function () {\r\n    tabsContent.forEach((tabContent) => {\r\n      if (tabContent.dataset.tab == target) {\r\n        tabContent.classList.add('active');\r\n      } else {\r\n        tabContent.classList.remove('active');\r\n      }\r\n    });\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderMenu() {\r\n  const content = document.getElementById('content');\r\n\r\n  const menu = document.createElement('section');\r\n  menu.classList.add('menu');\r\n  menu.dataset.tab = 'menu';\r\n  menu.innerHTML = `\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> American Cheese Burger</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Reddishly Red Pasta</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> FingerLickin French Fries</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Brrrrrrrrr Burrito</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Chimichanga Baby</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Mac & Nothing</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Mac & Cheese</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Melting MeatBalls</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> not-so-french French Toast</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Chicken Nuggets</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Croissant If you can say it</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Smoked Sprouts</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Julius Caesar Salad</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Pound Cake</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Kung Pao Soya Chunks</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Kung Mao Chicken</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Margherita Pizza</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> General Tso's Chicken</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Earl Grey Coffee</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Doughie Doughnuts</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Hamburger</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Apple Juice</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Mandarin Juice</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Choco-Mix</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> Not-Beef</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <h3><i class=\"fas fa-hamburger\"></i> La La Lamb</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Perspiciatis, earum!\r\n      </p>\r\n    </div>\r\n  `;\r\n\r\n  content.appendChild(menu);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);\r\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;