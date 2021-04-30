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

/***/ "./src/accordion.js":
/*!**************************!*\
  !*** ./src/accordion.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\nconst accordionPanel = document.getElementsByClassName('accord_panel');\r\nconst accordionHeader = document.getElementsByClassName('accord_panel_header');\r\n\r\nfor (let i of _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.accordionBtn) {\r\n  // class toggler function on accordion button click\r\n  i.onclick = function () {\r\n    const toggleActiveClass = !this.classList.contains('active');\r\n    classToggler(_constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.accordionBtn, 'active', 'remove');\r\n    classToggler(accordionPanel, 'accord_show', 'remove');\r\n    classToggler(accordionHeader, 'accord_panel_header_active', 'remove');\r\n    classToggler(_constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.themeChangeBtn, 'themeBtnActive', 'remove');\r\n\r\n    const findAccordionLastChild = this.nextElementSibling.childElementCount - 1;\r\n    const findDivThemeBtn = this.nextElementSibling.children[findAccordionLastChild];\r\n    const checkThemeBtnClass = findDivThemeBtn.classList.contains(\"theme_change\");\r\n\r\n    if (toggleActiveClass) {\r\n      this.classList.toggle(\"active\");\r\n      this.nextElementSibling.classList.toggle(\"accord_show\");\r\n      this.children[0].classList.toggle(\"accord_panel_header_active\");\r\n\r\n      if (checkThemeBtnClass) {\r\n        findDivThemeBtn.children[0].classList.toggle(\"themeBtnActive\");\r\n        // (for developement) console.log('theme btn found')\r\n\r\n      } else {\r\n        // (for developement) console.log(\"There is no next accordion to give theme change button active class\");\r\n      }\r\n\r\n    }\r\n\r\n  }\r\n\r\n}\r\n\r\n// template for class toggling\r\nconst classToggler = (els, className, fnName) => {\r\n  for (var i of els) {\r\n    i.classList[fnName](className);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://imeline_ajalugu/./src/accordion.js?");

/***/ }),

/***/ "./src/checkboxes.js":
/*!***************************!*\
  !*** ./src/checkboxes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\nconst allCheckboxes = document.querySelectorAll(\"input[type=checkbox][class=accordionInput]\");\r\n\r\n// arrays for checking the current accordion checked checkbox lengths\r\nlet activeCheckboxArray = [];\r\nlet checkedBoxesArray = [];\r\n\r\nallCheckboxes.forEach(function (checkbox) {\r\n  checkbox.addEventListener('change', function () {\r\n    const currentlyAvailableCheckboxes = _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.openedPanel[0].querySelectorAll(\"input[type=checkbox][class=accordionInput]\");\r\n\r\n    let checkedBoxesArray =\r\n      Array.from(currentlyAvailableCheckboxes) // Convert checkboxes to an array to use filter and map.\r\n        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.\r\n        .map(i => i.value); // Use Array.map to extract only the checkbox values from the array of objects.\r\n    // (for developement) console.log(checkedBoxesArray);\r\n\r\n    let activeAccordionSpan = _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.activeAccordion[0].children[1].children[0];\r\n\r\n    if (checkedBoxesArray.length == 0) {\r\n      activeAccordionSpan.innerHTML = 0;\r\n\r\n    }\r\n    // When counter is equal to 3, set the counter to 3 / 3 and disable unchecked checkboxes\r\n    else if (checkedBoxesArray.length == 3) {\r\n      activeAccordionSpan.innerHTML = 3;\r\n\r\n      for (let i of currentlyAvailableCheckboxes) {\r\n\r\n        // disables unchecked checkboxes when array has length of 3 (3 checkboxes are checked)\r\n        if (!i.checked) {\r\n          i.disabled = true;\r\n          i.parentElement.classList.add(\"disabledCheckbox\");\r\n\r\n        }\r\n\r\n      }\r\n\r\n    }\r\n    // If it is less than 3, increment it by 1 whenever a checkbox gets checked. Also remove disabled from disabled checkboxes\r\n    else if (checkedBoxesArray.length < 3) {\r\n\r\n      for (let i of currentlyAvailableCheckboxes) {\r\n        if (i.disabled) {\r\n          i.disabled = false;\r\n          i.parentElement.classList.remove(\"disabledCheckbox\");\r\n\r\n        }\r\n\r\n      }\r\n      activeAccordionSpan.innerHTML = checkedBoxesArray.length;\r\n\r\n    }\r\n    for (let i of _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.accordionBtn) {\r\n      let accordBtnSpan = i.children[1].children[0];\r\n\r\n      if (accordBtnSpan.innerHTML > 0 && activeCheckboxArray.length < _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.accordionBtn.length && activeCheckboxArray.includes(i) == false) {\r\n        activeCheckboxArray.push(i);\r\n\r\n      } else if (accordBtnSpan.innerHTML == 0) {\r\n        // array gets reset when atleast 1 span is 0, resulting in the array.length not being equal to the amount of accordion blocks\r\n        activeCheckboxArray = [];\r\n        _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.doneBtn.disabled = true;\r\n        _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.doneBtn.classList.remove(\"doneBtnReady\");\r\n      }\r\n\r\n      if (activeCheckboxArray.length == _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.accordionBtn.length) {\r\n        _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.doneBtn.disabled = false;\r\n        _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.doneBtn.classList.add(\"doneBtnReady\");\r\n\r\n      }\r\n      // (for developement) console.log(activeCheckboxArray.length)\r\n    }\r\n\r\n  })\r\n\r\n})\r\n\r\n\r\n\r\n\r\n\r\n// checkbox background color variables\r\nconst accordionInputs = document.getElementsByClassName(\"accordionInput\");\r\n// Whenver a checkbox is checked, it will gain background coloring\r\nfunction isChecked() {\r\n    if (this.checked) {\r\n      this.parentElement.style.backgroundColor = \"#fff8cd\";\r\n  \r\n    } else {\r\n      this.parentElement.style.backgroundColor = \"\";\r\n  \r\n    }\r\n  }\r\n  \r\n  // checkbox background color event listener\r\n  for (let i of accordionInputs) {\r\n    i.addEventListener(\"change\", isChecked);\r\n  \r\n  }\n\n//# sourceURL=webpack://imeline_ajalugu/./src/checkboxes.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"globalVariables\": () => (/* binding */ globalVariables)\n/* harmony export */ });\nconst globalVariables = {\r\n    themeChangeBtn : document.getElementsByClassName('next_theme'),\r\n    accordionBtn : document.getElementsByClassName('accordion'),\r\n    openedPanel : document.getElementsByClassName(\"accord_show\"),\r\n    activeAccordion : document.getElementsByClassName(\"active\"),\r\n    doneBtn : document.getElementById(\"doneButton\")\r\n};\n\n//# sourceURL=webpack://imeline_ajalugu/./src/constants.js?");

/***/ }),

/***/ "./src/gotoAccord.js":
/*!***************************!*\
  !*** ./src/gotoAccord.js ***!
  \***************************/
/***/ (() => {

eval("// scrolls to accordion on red anchor text click\r\nconst scrollAnchor = document.getElementById(\"accord_title\");\r\nfunction scrollToAccord() {\r\n  scrollAnchor.scrollIntoView({ behavior: \"smooth\", block: \"start\" });\r\n\r\n}\r\n\r\ndocument.getElementById(\"goto_accord_anchor\").onclick = scrollToAccord;\n\n//# sourceURL=webpack://imeline_ajalugu/./src/gotoAccord.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.js */ \"./src/accordion.js\");\n/* harmony import */ var _nextTheme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nextTheme.js */ \"./src/nextTheme.js\");\n/* harmony import */ var _checkboxes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkboxes.js */ \"./src/checkboxes.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modal_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _gotoAccord_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gotoAccord.js */ \"./src/gotoAccord.js\");\n/* harmony import */ var _gotoAccord_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_gotoAccord_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// refresh function\r\nfunction refreshPage() {\r\n    location.href = 'index.html'\r\n};\r\n\r\n// Valmis! button on click refreshes the page\r\n_constants__WEBPACK_IMPORTED_MODULE_5__.globalVariables.doneBtn.onclick = refreshPage;\n\n//# sourceURL=webpack://imeline_ajalugu/./src/main.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ (() => {

eval("// get the modal\r\nvar modal = document.getElementById(\"policyModal\");\r\n// get the anchor text that opens the modal\r\nvar openModal = document.getElementById(\"policyOpen\");\r\n// get the <span> element that closes the modal\r\nvar closeModalBtn = document.getElementsByClassName(\"closeModal\")[0];\r\n// modal closing function\r\ncloseModal = () => {\r\n  modal.style.display = \"none\";\r\n\r\n};\r\n\r\n// when the user clicks on the anchor text, open the modal\r\nopenModal.onclick = () => {\r\n  modal.style.display = \"block\";\r\n\r\n}\r\n\r\n// when the user clicks on <span> (x), close the modal\r\ncloseModalBtn.onclick = closeModal;\r\n\r\n// when the user clicks ESC on their keyboard, close the modal\r\nwindow.addEventListener('keydown', function (event) {\r\n  if (event.key === 'Escape') {\r\n    closeModal();\r\n\r\n  }\r\n\r\n});\r\n\r\n// when the user clicks anywhere outside of the modal, close it (also added ESC key)\r\nwindow.onclick = function (event) {\r\n  if (event.target == modal) {\r\n    closeModal();\r\n\r\n  }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://imeline_ajalugu/./src/modal.js?");

/***/ }),

/***/ "./src/nextTheme.js":
/*!**************************!*\
  !*** ./src/nextTheme.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\n\r\n// gathers first currently active accordion details\r\n// for nextTheme.js\r\nconst activeHeader = document.getElementsByClassName(\"accord_panel_header_active\");\r\nconst activeThemeBtn = document.getElementsByClassName(\"themeBtnActive\");\r\n\r\n\r\n// declared function for the theme change buttons\r\nconst nextTheme = () => {\r\n    // gets next elements before the 3 special classes are removed with nextElementSibling\r\n    const nextAccordion = _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.activeAccordion[0].nextElementSibling.nextElementSibling;\r\n    const nextPanel = _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.openedPanel[0].nextElementSibling.nextElementSibling;\r\n    const nextHeader = _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.activeAccordion[0].nextElementSibling.nextElementSibling.children[0];\r\n  \r\n    // adds 3 actives to the next ones\r\n    nextPanel.classList.add(\"accord_show\");\r\n    nextHeader.classList.add(\"accord_panel_header_active\");\r\n    nextAccordion.classList.add(\"active\");\r\n  \r\n    // removes the first found active class and since now there are 2, it removes the 3 classes from the first to close it, because only 1 accordion should be open at a time\r\n    _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.activeAccordion[0].classList.remove(\"active\");\r\n    _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.openedPanel[0].classList.remove(\"accord_show\");\r\n    activeHeader[0].classList.remove(\"accord_panel_header_active\");\r\n  \r\n    const findAccordionLastChild = nextAccordion.nextElementSibling.childElementCount - 1;\r\n    const findDivThemeBtn = nextAccordion.nextElementSibling.children[findAccordionLastChild];\r\n    const checkThemeBtnClass = findDivThemeBtn.classList.contains(\"theme_change\");\r\n  \r\n  \r\n    if (typeof activeThemeBtn[0] !== \"undefined\" && checkThemeBtnClass) {\r\n      findDivThemeBtn.children[0].classList.add(\"themeBtnActive\");\r\n      activeThemeBtn[0].classList.remove(\"themeBtnActive\");\r\n  \r\n    } /* else {\r\n      (for developement) console.log(\"There is no next theme button\");\r\n  \r\n    } */\r\n  \r\n  }\r\n  // Next theme button. Closest the current one and opens the next one\r\n  for (const i of _constants__WEBPACK_IMPORTED_MODULE_0__.globalVariables.themeChangeBtn) {\r\n    i.onclick = nextTheme;\r\n  }\n\n//# sourceURL=webpack://imeline_ajalugu/./src/nextTheme.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;