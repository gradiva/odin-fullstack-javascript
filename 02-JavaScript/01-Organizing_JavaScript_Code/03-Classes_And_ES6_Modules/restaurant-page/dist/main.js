/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/NavBar.js":
/*!***********************!*\
  !*** ./src/NavBar.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createTab = ({ id, text }) => {\n  const tab = document.createElement('li');\n  tab.classList.add('menu-item', id, 'tab-text');\n  tab.dataset.tabId = id;\n  tab.innerText = text;\n\n  return tab;\n};\n\nconst NavBar = () => {\n  const navBar = document.createElement('nav');\n  const navList = document.createElement('ul');\n  navList.classList.add('navigation-bar');\n\n  navList.appendChild(createTab({ id: 'about-tab', text: 'About' }));\n  navList.appendChild(createTab({ id: 'contact-tab', text: 'Contact' }));\n  navList.appendChild(createTab({ id: 'home-tab', text: 'Home' }));\n  navList.appendChild(createTab({ id: 'location-tab', text: 'Location' }));\n  navList.appendChild(createTab({ id: 'menu-tab', text: 'Menu' }));\n  navBar.appendChild(navList);\n\n  return navBar;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\n\n\n//# sourceURL=webpack:///./src/NavBar.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: createAboutSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAboutSection\", function() { return createAboutSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createAboutSection; });\nconst aboutDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';\n\nconst createAboutTitle = () => {\n  const aboutTitle = document.createElement('h2');\n  aboutTitle.classList.add('about-subtitle');\n  aboutTitle.innerText = 'About us';\n\n  return aboutTitle;\n};\n\nconst createAboutDescription = () => {\n  const description = document.createElement('h4');\n  description.classList.add('about-description');\n  description.innerText = aboutDescription;\n\n  return description;\n};\n\nconst createAboutAside = () => {\n  const aboutAside = document.createElement('aside');\n  aboutAside.classList.add('aside', 'about-aside');\n\n  aboutAside.appendChild(createAboutTitle());\n  aboutAside.appendChild(createAboutDescription());\n\n  return aboutAside;\n};\n\nconst createAboutSection = () => {\n  const aboutSection = document.createElement('section');\n  aboutSection.classList.add('about-container');\n  aboutSection.appendChild(createAboutAside());\n\n  return aboutSection;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: createContactSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContactSection\", function() { return createContactSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createContactSection; });\nconst createContactTitle = () => {\n  const contactTitle = document.createElement('h2');\n  contactTitle.classList.add('contact-subtitle');\n  contactTitle.innerText = 'Contact us';\n\n  return contactTitle;\n};\n\nconst createLabel = ({ id, text }) => {\n  const label = document.createElement('label');\n  label.setAttribute('for', id);\n  label.classList.add(id, 'contact-form-label');\n  label.innerText = text;\n\n  return label;\n};\n\nconst createFormField = ({ type, id }) => {\n  const formField = document.createElement('input');\n  formField.setAttribute('type', type);\n  formField.setAttribute('name', id);\n  formField.classList.add('contact-form-field');\n\n  return formField;\n};\n\nconst createSubmitButton = () => {\n  const submitButton = document.createElement('button');\n  submitButton.classList.add('submit-button');\n  submitButton.setAttribute('type', 'button');\n  submitButton.innerText = 'Send';\n\n  return submitButton;\n};\n\nconst createContactForm = () => {\n  const form = document.createElement('form');\n  form.classList.add('contact-form');\n\n  // fullName\n  form.appendChild(createLabel({ id: 'full-name', text: 'Your name' }));\n  form.appendChild(createFormField({ type: 'text', id: 'full-name' }));\n\n  // email\n  form.appendChild(createLabel({ id: 'email-adress', text: 'Your E-mail' }));\n  form.appendChild(createFormField({ type: 'email', id: 'email-adress' }));\n\n  // subject\n  form.appendChild(createLabel({ id: 'subject', text: 'Subject' }));\n  form.appendChild(createFormField({ type: 'text', id: 'subject' }));\n\n  // message\n  form.appendChild(createLabel({ id: 'message', text: 'Message' }));\n  form.appendChild(createFormField({ type: 'text', id: 'message' }));\n\n  return form;\n};\n\nconst createContactSection = () => {\n  const contactSection = document.createElement('section');\n  contactSection.classList.add('contact-container');\n  contactSection.appendChild(createContactTitle());\n  contactSection.appendChild(createContactForm());\n  contactSection.appendChild(createSubmitButton());\n\n  return contactSection;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: createHomeSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHomeSection\", function() { return createHomeSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createHomeSection; });\nconst createTitle = () => {\n  const title = document.createElement('h1');\n  title.classList.add('restaurant-name');\n  title.innerText = 'Odin Urban Gourmet';\n\n  return title;\n};\n\nconst createSubtitle = () => {\n  const subtitle = document.createElement('h2');\n  subtitle.classList.add('restaurant-subtitle');\n  subtitle.innerText = 'Real food tastes better';\n\n  return subtitle;\n};\n\nconst createDescription = () => {\n  const description = document.createElement('h3');\n  description.classList.add('restaurant-description');\n  description.innerText = 'Everything homemade, OUG offers creative and artisanal food in a unique space';\n\n  return description;\n};\n\nconst createHeader = () => {\n  const header = document.createElement('header');\n  header.classList.add('header');\n  header.appendChild(createTitle());\n  header.appendChild(createSubtitle());\n  header.appendChild(createDescription());\n\n  return header;\n};\n\nconst createHomeSection = () => {\n  const homeSection = document.createElement('section');\n  homeSection.classList.add('home-container');\n  homeSection.appendChild(createHeader());\n\n  return homeSection;\n};\n\n\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar */ \"./src/NavBar.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location */ \"./src/location.js\");\n\n\n\n\n\n\n\nlet rootElement;\nlet backgroundElement;\nlet contentContainer;\nlet navBar;\n\nlet currentTabId;\nlet currentContentElement;\n\nconst setBackground = (src) => {\n  backgroundElement.style.backgroundImage = `url(${src})`;\n};\n\nconst clearContent = () => {\n  if (currentContentElement) {\n    currentContentElement.remove();\n  }\n};\n\nconst setContent = (tabId) => {\n  clearContent();\n\n  currentTabId = tabId;\n\n  let backgroundImage;\n\n  switch (currentTabId) {\n    case 'about-tab':\n      currentContentElement = Object(_about__WEBPACK_IMPORTED_MODULE_2__[\"createAboutSection\"])();\n      backgroundImage = 'https://honestgreens.com/wp-content/uploads/2018/11/castellana-05.jpg';\n      break;\n\n    case 'contact-tab':\n      currentContentElement = Object(_contact__WEBPACK_IMPORTED_MODULE_3__[\"createContactSection\"])();\n      backgroundImage = 'https://i.blogs.es/e95ea9/honest/1366_2000.jpg';\n      break;\n\n    case 'home-tab':\n      currentContentElement = Object(_home__WEBPACK_IMPORTED_MODULE_1__[\"createHomeSection\"])();\n      backgroundImage = 'http://aircrewlifestyle.es/wp-content/uploads/2018/11/honest-greens-cocina-vista.jpg';\n      break;\n\n    case 'location-tab':\n      currentContentElement = Object(_location__WEBPACK_IMPORTED_MODULE_5__[\"createLocationSection\"])();\n      backgroundImage = 'https://media.timeout.com/images/105374258/1372/772/image.jpg';\n      break;\n\n    case 'menu-tab':\n      currentContentElement = Object(_menu__WEBPACK_IMPORTED_MODULE_4__[\"createMenuSection\"])();\n      backgroundImage = 'https://madridsecreto.co/wp-content/uploads/2019/02/comida-sana-madrid.jpg';\n      break;\n\n    default:\n      return;\n  }\n\n  if (backgroundImage) {\n    setBackground(backgroundImage);\n  }\n\n  contentContainer.appendChild(currentContentElement);\n};\n\nconst addEventListeners = () => {\n  navBar.addEventListener('click', (event) => {\n    if (!event.target.dataset) {\n      return;\n    }\n\n    const { tabId } = event.target.dataset;\n\n    switch (tabId) {\n      case 'about-tab':\n      case 'home-tab':\n      case 'contact-tab':\n      case 'location-tab':\n      case 'menu-tab':\n        setContent(tabId);\n        break;\n\n      default:\n      // Do nothing.\n    }\n  });\n};\n\nconst init = () => {\n  rootElement = document.querySelector('#root');\n\n  backgroundElement = document.createElement('div');\n  backgroundElement.classList.add('background');\n  rootElement.appendChild(backgroundElement);\n\n  navBar = Object(_NavBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  rootElement.appendChild(navBar);\n\n  contentContainer = document.createElement('main');\n  contentContainer.classList.add('content');\n  rootElement.appendChild(contentContainer);\n\n  addEventListeners();\n\n  setContent('home-tab');\n};\n\ninit();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/*! exports provided: createLocationSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLocationSection\", function() { return createLocationSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createLocationSection; });\n/* global google */\n/* eslint no-new: off */\n\nconst openingHours = ['Monday - Thursday: 11:30am - 9pm', 'Friday - Saturday: 11:30am - 10pm', 'Sunday: 12pm - 9pm'];\n\nconst createLocationTitle = () => {\n  const locationTitle = document.createElement('h2');\n  locationTitle.classList.add('location-subtitle');\n  locationTitle.innerText = 'Find Us';\n\n  return locationTitle;\n};\n\nconst createMap = () => {\n  const mapContainer = document.createElement('div');\n  mapContainer.classList.add('map-container');\n  mapContainer.id = 'map';\n\n  const uluru = { lat: -25.344, lng: 131.036 };\n\n  new google.maps.Map(mapContainer, {\n    zoom: 4,\n    center: uluru,\n  });\n\n  return mapContainer;\n};\n\nconst createOpeningTimes = () => {\n  const openingTimes = document.createElement('h3');\n  openingTimes.classList.add('opening-times');\n  openingTimes.innerText = openingHours;\n\n  return openingTimes;\n};\n\nconst createLocationAside = () => {\n  const locationAside = document.createElement('aside');\n  locationAside.classList.add('aside', 'location-aside');\n\n  locationAside.appendChild(createLocationTitle());\n  locationAside.appendChild(createMap());\n  locationAside.appendChild(createOpeningTimes());\n\n  return locationAside;\n};\n\nconst createLocationSection = () => {\n  const locationSection = document.createElement('section');\n  locationSection.classList.add('location-container');\n  locationSection.appendChild(createLocationAside());\n\n  return locationSection;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/location.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: createMenuSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMenuSection\", function() { return createMenuSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createMenuSection; });\nconst foodItem = (text) => {\n  const dishItem = document.createElement('p');\n  const dishText = document.createElement('span');\n  dishItem.classList.add('menu-text');\n  dishText.innerText = text;\n\n  dishItem.appendChild(dishText);\n\n  return dishItem;\n};\n\nconst foodType = (text) => {\n  const dishType = document.createElement('h3');\n  dishType.classList.add('food-type-text');\n  dishType.innerText = text;\n\n  return dishType;\n};\n\nconst createMenuDescription = () => {\n  const menu = document.createElement('div');\n  menu.classList.add('menu-table');\n\n  const foodFirstColumn = document.createElement('div');\n  foodFirstColumn.classList.add('menu-column', 'appetisers');\n  foodFirstColumn.appendChild(foodType('Appetisers'));\n  foodFirstColumn.appendChild(foodItem('Chongqing aubergine (v)'));\n  foodFirstColumn.appendChild(foodItem('Fortunate shrimp balls'));\n  foodFirstColumn.appendChild(foodItem('Dan Dan Mian (v)'));\n  foodFirstColumn.appendChild(foodItem('Five spice pork ribs'));\n  foodFirstColumn.appendChild(foodItem('Soft shell crab'));\n  foodFirstColumn.appendChild(foodItem('Bang bang ji zi (v)'));\n\n  const foodSecondColumn = document.createElement('div');\n  foodSecondColumn.classList.add('menu-column', 'food');\n  foodSecondColumn.appendChild(foodType('Food'));\n  foodSecondColumn.appendChild(foodItem('Seaweed salad (v)'));\n  foodSecondColumn.appendChild(foodItem('Ginger scented tofu (v)'));\n  foodSecondColumn.appendChild(foodItem('Suan ni bai rou'));\n  foodSecondColumn.appendChild(foodItem('Barbaric radish salad (v)'));\n  foodSecondColumn.appendChild(foodItem('Chicken in red oil (v)'));\n  foodSecondColumn.appendChild(foodItem('Allergies? - consult your waiter!'));\n\n  const dessert = document.createElement('div');\n  dessert.classList.add('menu-column', 'dessert');\n  dessert.appendChild(foodType('Dessert'));\n  dessert.appendChild(foodItem('Lychee pudding'));\n  dessert.appendChild(foodItem('Milk chocolate creme'));\n  dessert.appendChild(foodItem('Chocolate truffle (v)'));\n  dessert.appendChild(foodItem('Jasmine Dragon Pearls'));\n  dessert.appendChild(foodItem('Formosa Jade Dong Ding'));\n  dessert.appendChild(foodItem('Black Knight'));\n  dessert.appendChild(foodItem('Or if you prefer, just a cup of coffee'));\n\n  menu.appendChild(foodFirstColumn);\n  menu.appendChild(foodSecondColumn);\n  menu.appendChild(dessert);\n\n  return menu;\n};\n\nconst createMenuTitle = () => {\n  const menuTitle = document.createElement('h2');\n  menuTitle.classList.add('menu-subtitle');\n  menuTitle.innerText = 'Menu';\n\n  return menuTitle;\n};\n\nconst createMenuAside = () => {\n  const menuAside = document.createElement('aside');\n  menuAside.classList.add('aside', 'menu-aside');\n\n  menuAside.appendChild(createMenuTitle());\n  menuAside.appendChild(createMenuDescription());\n\n  return menuAside;\n};\n\nconst createMenuSection = () => {\n  const menuSection = document.createElement('section');\n  menuSection.classList.add('menu-container');\n  menuSection.appendChild(createMenuAside());\n\n  return menuSection;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });