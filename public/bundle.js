/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/accordion.js":
/*!*****************************!*\
  !*** ./src/js/accordion.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\nconst accordionPanel = document.getElementsByClassName('panel');\nconst accordionHeader = document.getElementsByClassName('accordion_header');\n\nfor (let i of _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.accordionBtn) {\n  // class toggler function on accordion button click\n  i.onclick = function () {\n    const toggleActiveClass = !this.classList.contains('active');\n    classToggler(_constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.accordionBtn, 'active', 'remove');\n    classToggler(accordionPanel, 'accordion_show', 'remove');\n    classToggler(accordionHeader, 'accordion_header-active', 'remove');\n    classToggler(_constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.themeChangeBtn, 'themeBtnActive', 'remove');\n    const findAccordionLastChild = this.nextElementSibling.childElementCount - 1;\n    const findDivThemeBtn = this.nextElementSibling.children[findAccordionLastChild];\n    const checkThemeBtnClass = findDivThemeBtn.classList.contains(\"theme_change\");\n\n    if (toggleActiveClass) {\n      this.classList.toggle(\"active\");\n      this.nextElementSibling.classList.toggle(\"accordion_show\");\n      this.children[0].classList.toggle(\"accordion_header-active\");\n\n      if (checkThemeBtnClass) {\n        findDivThemeBtn.children[0].classList.toggle(\"themeBtnActive\"); // (for developement) console.log('theme btn found')\n      } else {// (for developement) console.log(\"There is no next accordion to give theme change button active class\");\n        }\n    }\n  };\n} // template for class toggling\n\n\nconst classToggler = (els, className, fnName) => {\n  for (let i of els) {\n    i.classList[fnName](className);\n  }\n};\n\n//# sourceURL=webpack://imeline_ajalugu/./src/js/accordion.js?");

/***/ }),

/***/ "./src/js/checkboxes.js":
/*!******************************!*\
  !*** ./src/js/checkboxes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\nconst allCheckboxes = document.querySelectorAll(\"input[type=checkbox][class=panel_input]\"); // arrays for checking the current accordion checked checkbox lengths\n\nlet activeCheckboxArray = [];\nlet checkedBoxesArray = [];\nallCheckboxes.forEach(function (checkbox) {\n  checkbox.addEventListener('change', function () {\n    const currentlyAvailableCheckboxes = _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.openedPanel[0].querySelectorAll(\"input[type=checkbox][class=panel_input]\");\n    let checkedBoxesArray = Array.from(currentlyAvailableCheckboxes) // Convert checkboxes to an array to use filter and map.\n    .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.\n    .map(i => i.value); // Use Array.map to extract only the checkbox values from the array of objects.\n    // (for developement) console.log(checkedBoxesArray);\n\n    let activeAccordionSpan = _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.activeAccordion[0].children[1].children[0];\n\n    if (checkedBoxesArray.length == 0) {\n      activeAccordionSpan.innerHTML = 0;\n    } // When counter is equal to 3, set the counter to 3 / 3 and disable unchecked checkboxes\n    else if (checkedBoxesArray.length == 3) {\n        activeAccordionSpan.innerHTML = 3;\n\n        for (let i of currentlyAvailableCheckboxes) {\n          // disables unchecked checkboxes when array has length of 3 (3 checkboxes are checked)\n          if (!i.checked) {\n            i.disabled = true;\n            i.parentElement.classList.add(\"checkbox-disabled\");\n          }\n        }\n      } // If it is less than 3, increment it by 1 whenever a checkbox gets checked. Also remove disabled from disabled checkboxes\n      else if (checkedBoxesArray.length < 3) {\n          for (let i of currentlyAvailableCheckboxes) {\n            if (i.disabled) {\n              i.disabled = false;\n              i.parentElement.classList.remove(\"checkbox-disabled\");\n            }\n          }\n\n          activeAccordionSpan.innerHTML = checkedBoxesArray.length;\n        }\n\n    for (let i of _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.accordionBtn) {\n      let accordBtnSpan = i.children[1].children[0];\n\n      if (accordBtnSpan.innerHTML > 0 && activeCheckboxArray.length < _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.accordionBtn.length && activeCheckboxArray.includes(i) == false) {\n        activeCheckboxArray.push(i);\n      } else if (accordBtnSpan.innerHTML == 0) {\n        // array gets reset when atleast 1 span is 0, resulting in the array.length not being equal to the amount of accordion blocks\n        activeCheckboxArray = [];\n        _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.doneBtn.disabled = true;\n        _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.doneBtn.classList.add(\"btn-disabled\");\n      }\n\n      if (activeCheckboxArray.length == _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.accordionBtn.length) {\n        _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.doneBtn.disabled = false;\n        _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.doneBtn.classList.remove(\"btn-disabled\");\n      } // (for developement) console.log(activeCheckboxArray.length)\n\n    }\n  });\n}); // checkbox background color variables\n\nconst accordionInput = document.getElementsByClassName(\"panel_input\"); // Whenver a checkbox is checked, it will gain background coloring\n\nfunction isChecked() {\n  if (this.checked) {\n    this.parentElement.style.backgroundColor = \"#fff8cd\";\n  } else {\n    this.parentElement.style.backgroundColor = \"\";\n  }\n} // checkbox background color event listener\n\n\nfor (let i of accordionInput) {\n  i.addEventListener(\"change\", isChecked);\n}\n\n//# sourceURL=webpack://imeline_ajalugu/./src/js/checkboxes.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"globalVariables\": () => (/* binding */ globalVariables)\n/* harmony export */ });\nconst globalVariables = {\n  themeChangeBtn: document.getElementsByClassName('next_theme'),\n  accordionBtn: document.getElementsByClassName('accordion'),\n  openedPanel: document.getElementsByClassName(\"accordion_show\"),\n  activeAccordion: document.getElementsByClassName(\"active\"),\n  doneBtn: document.getElementById(\"doneButton\")\n};\n\n//# sourceURL=webpack://imeline_ajalugu/./src/js/constants.js?");

/***/ }),

/***/ "./src/js/gotoAccord.js":
/*!******************************!*\
  !*** ./src/js/gotoAccord.js ***!
  \******************************/
/***/ (() => {

eval("// scrolls to accordion on red anchor text click\nconst scrollAnchor = document.getElementById(\"accordionTitle\");\n\nfunction scrollToAccord() {\n  scrollAnchor.scrollIntoView({\n    behavior: \"smooth\",\n    block: \"start\"\n  });\n}\n\ndocument.getElementById(\"gotoAccordionAnchor\").onclick = scrollToAccord;\n\n//# sourceURL=webpack://imeline_ajalugu/./src/js/gotoAccord.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.js */ \"./src/js/accordion.js\");\n/* harmony import */ var _nextTheme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nextTheme.js */ \"./src/js/nextTheme.js\");\n/* harmony import */ var _checkboxes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkboxes.js */ \"./src/js/checkboxes.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ \"./src/js/modal.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modal_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _gotoAccord_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gotoAccord.js */ \"./src/js/gotoAccord.js\");\n/* harmony import */ var _gotoAccord_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_gotoAccord_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n // refresh function\n\nfunction refreshPage() {\n  location.href = 'index.html';\n} // Valmis! button on click refreshes the page\n\n\n_constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.doneBtn.onclick = refreshPage;\n\n//# sourceURL=webpack://imeline_ajalugu/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (() => {

eval("// get the modal\nlet modal = document.getElementById(\"policyModal\"); // get the anchor text that opens the modal\n\nlet openModal = document.getElementById(\"policyOpen\"); // get the <span> element that closes the modal\n\nlet closeModalBtn = document.getElementById(\"closeModal\"); // modal closing function\n\ncloseModal = () => {\n  modal.style.display = \"none\";\n}; // when the user clicks on the anchor text, open the modal\n\n\nopenModal.onclick = () => {\n  modal.style.display = \"block\";\n}; // when the user clicks on <span> (x), close the modal\n\n\ncloseModalBtn.onclick = closeModal; // when the user clicks ESC on their keyboard, close the modal\n\nwindow.addEventListener('keydown', function (event) {\n  if (event.key === 'Escape') {\n    closeModal();\n  }\n}); // when the user clicks anywhere outside of the modal, close it (also added ESC key)\n\nwindow.onclick = function (event) {\n  if (event.target == modal) {\n    closeModal();\n  }\n};\n\n//# sourceURL=webpack://imeline_ajalugu/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/nextTheme.js":
/*!*****************************!*\
  !*** ./src/js/nextTheme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n // gathers first currently active accordion details\n// for nextTheme.js\n\nconst activeHeader = document.getElementsByClassName(\"accordion_header-active\");\nconst activeThemeBtn = document.getElementsByClassName(\"themeBtnActive\"); // declared function for the theme change buttons\n\nconst nextTheme = () => {\n  // gets next elements before the 3 special classes are removed with nextElementSibling\n  const nextAccordion = _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.activeAccordion[0].nextElementSibling.nextElementSibling;\n  const nextPanel = _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.openedPanel[0].nextElementSibling.nextElementSibling;\n  const nextHeader = _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.activeAccordion[0].nextElementSibling.nextElementSibling.children[0]; // adds 3 actives to the next ones\n\n  nextPanel.classList.add(\"accordion_show\");\n  nextHeader.classList.add(\"accordion_header-active\");\n  nextAccordion.classList.add(\"active\"); // removes the first found active class and since now there are 2, it removes the 3 classes from the first to close it, because only 1 accordion should be open at a time\n\n  _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.activeAccordion[0].classList.remove(\"active\");\n  _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.openedPanel[0].classList.remove(\"accordion_show\");\n  activeHeader[0].classList.remove(\"accordion_header-active\");\n  const findAccordionLastChild = nextAccordion.nextElementSibling.childElementCount - 1;\n  const findDivThemeBtn = nextAccordion.nextElementSibling.children[findAccordionLastChild];\n  const checkThemeBtnClass = findDivThemeBtn.classList.contains(\"theme_change\");\n\n  if (typeof activeThemeBtn[0] !== \"undefined\" && checkThemeBtnClass) {\n    findDivThemeBtn.children[0].classList.add(\"themeBtnActive\");\n    activeThemeBtn[0].classList.remove(\"themeBtnActive\");\n  }\n  /* else {\r\n  (for developement) console.log(\"There is no next theme button\");\r\n    } */\n\n}; // Next theme button. Closest the current one and opens the next one\n\n\nfor (const i of _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.themeChangeBtn) {\n  i.onclick = nextTheme;\n}\n\n//# sourceURL=webpack://imeline_ajalugu/./src/js/nextTheme.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"main.css\");\n\n//# sourceURL=webpack://imeline_ajalugu/./src/sass/main.scss?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sass/main.scss");
/******/ 	
/******/ })()
;