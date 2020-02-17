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

/***/ "./src/components/create.component.js":
/*!********************************************!*\
  !*** ./src/components/create.component.js ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateComponent\", function() { return CreateComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar CreateComponent =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(CreateComponent, _Component);\n\n  function CreateComponent(id) {\n    _classCallCheck(this, CreateComponent);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(CreateComponent).call(this, id));\n  }\n\n  return CreateComponent;\n}(_core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n;\n\n//# sourceURL=webpack:///./src/components/create.component.js?");

/***/ }),

/***/ "./src/components/favorite.component.js":
/*!**********************************************!*\
  !*** ./src/components/favorite.component.js ***!
  \**********************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavoriteComponent\", function() { return FavoriteComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar FavoriteComponent =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(FavoriteComponent, _Component);\n\n  function FavoriteComponent(id) {\n    _classCallCheck(this, FavoriteComponent);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(FavoriteComponent).call(this, id));\n  }\n\n  return FavoriteComponent;\n}(_core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n;\n\n//# sourceURL=webpack:///./src/components/favorite.component.js?");

/***/ }),

/***/ "./src/components/header.component.js":
/*!********************************************!*\
  !*** ./src/components/header.component.js ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderComponent\", function() { return HeaderComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar HeaderComponent =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(HeaderComponent, _Component);\n\n  function HeaderComponent(id) {\n    _classCallCheck(this, HeaderComponent);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(HeaderComponent).call(this, id));\n  }\n\n  _createClass(HeaderComponent, [{\n    key: \"init\",\n    value: function init() {\n      if (localStorage.getItem('visited')) {\n        this.hide();\n      } //hide header if visite page before \n\n\n      var btn = this.$el.querySelector('.js-header-start');\n      btn.addEventListener('click', buttonHandler.bind(this));\n    }\n  }]);\n\n  return HeaderComponent;\n}(_core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n; //private func(bind her in iventLister)\n\nfunction buttonHandler() {\n  localStorage.setItem('visited', JSON.stringify(true));\n  this.hide();\n}\n\n;\n\n//# sourceURL=webpack:///./src/components/header.component.js?");

/***/ }),

/***/ "./src/components/navigation.component.js":
/*!************************************************!*\
  !*** ./src/components/navigation.component.js ***!
  \************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationComponent\", function() { return NavigationComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar NavigationComponent =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(NavigationComponent, _Component);\n\n  function NavigationComponent(id) {\n    var _this;\n\n    _classCallCheck(this, NavigationComponent);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavigationComponent).call(this, id));\n    _this.tabs = [];\n    return _this;\n  }\n\n  _createClass(NavigationComponent, [{\n    key: \"init\",\n    value: function init() {\n      this.$el.addEventListener('click', tabClickHendler.bind(this));\n    }\n  }, {\n    key: \"registerTabs\",\n    value: function registerTabs(tabs) {\n      this.tabs = tabs;\n    }\n  }]);\n\n  return NavigationComponent;\n}(_core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n;\n\nfunction tabClickHendler(event) {\n  event.preventDefault();\n\n  if (event.target.classList.contains('tab')) {\n    this.$el.querySelectorAll('.tab').forEach(function (tab) {\n      tab.classList.remove('active');\n    }); //remove active all tabs\n\n    event.target.classList.add('active'); //add class to clicked tab\n\n    console.log(this.tabs);\n    var activeTab = this.tabs.find(function (tab) {\n      return tab.name === event.target.dataset.name;\n    });\n    console.log(activeTab);\n    this.tabs.forEach(function (tab) {\n      return tab.component.hide();\n    }); //hide tabs\n\n    activeTab.component.show(); //show selected tab\n  }\n}\n\n//# sourceURL=webpack:///./src/components/navigation.component.js?");

/***/ }),

/***/ "./src/components/posts.component.js":
/*!*******************************************!*\
  !*** ./src/components/posts.component.js ***!
  \*******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostsComponent\", function() { return PostsComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar PostsComponent =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(PostsComponent, _Component);\n\n  function PostsComponent(id) {\n    _classCallCheck(this, PostsComponent);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(PostsComponent).call(this, id));\n  }\n\n  return PostsComponent;\n}(_core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n//# sourceURL=webpack:///./src/components/posts.component.js?");

/***/ }),

/***/ "./src/core/component.js":
/*!*******************************!*\
  !*** ./src/core/component.js ***!
  \*******************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Component =\n/*#__PURE__*/\nfunction () {\n  function Component(id) {\n    _classCallCheck(this, Component);\n\n    this.$el = document.getElementById(id); //select elem \n\n    this.init();\n  }\n\n  _createClass(Component, [{\n    key: \"init\",\n    value: function init() {}\n  }, {\n    key: \"hide\",\n    //methods to show and hide block \n    value: function hide() {\n      this.$el.classList.add('hide');\n    }\n  }, {\n    key: \"show\",\n    value: function show() {\n      this.$el.classList.remove('hide');\n    }\n  }]);\n\n  return Component;\n}();\n;\n\n//# sourceURL=webpack:///./src/core/component.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header.component */ \"./src/components/header.component.js\");\n/* harmony import */ var _components_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation.component */ \"./src/components/navigation.component.js\");\n/* harmony import */ var _components_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create.component */ \"./src/components/create.component.js\");\n/* harmony import */ var _components_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/posts.component */ \"./src/components/posts.component.js\");\n/* harmony import */ var _components_favorite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/favorite.component */ \"./src/components/favorite.component.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nnew _components_header_component__WEBPACK_IMPORTED_MODULE_0__[\"HeaderComponent\"]('header');\nvar navigation = new _components_navigation_component__WEBPACK_IMPORTED_MODULE_1__[\"NavigationComponent\"]('navigation');\nvar create = new _components_create_component__WEBPACK_IMPORTED_MODULE_2__[\"CreateComponent\"]('create');\nvar posts = new _components_posts_component__WEBPACK_IMPORTED_MODULE_3__[\"PostsComponent\"]('posts');\nvar favorite = new _components_favorite_component__WEBPACK_IMPORTED_MODULE_4__[\"FavoriteComponent\"]('favorite');\nnavigation.registerTabs([{\n  name: 'create',\n  component: create\n}, {\n  name: 'posts',\n  component: posts\n}, {\n  name: 'favorite',\n  component: favorite\n}]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ })

/******/ });