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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/controllers sync recursive _controller\\.js$":
/*!**********************************************************!*\
  !*** ./app/javascript/controllers sync _controller\.js$ ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./edit_in_place_controller.js": "./app/javascript/controllers/edit_in_place_controller.js",
	"./hello_controller.js": "./app/javascript/controllers/hello_controller.js",
	"./questionnaire_controller.js": "./app/javascript/controllers/questionnaire_controller.js",
	"./supertable_controller.js": "./app/javascript/controllers/supertable_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/controllers sync recursive _controller\\.js$";

/***/ }),

/***/ "./app/javascript/controllers/edit_in_place_controller.js":
/*!****************************************************************!*\
  !*** ./app/javascript/controllers/edit_in_place_controller.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// ONLY EDIT IN 'STIMULUS-BASE' V0.2.1


console.log('included save');

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      console.log('Number Saver: connected');
      this.attribute = this.data.get('attribute');
      this.suggest = this.data.get('suggest');
    }
  }, {
    key: "changing",
    value: function changing(event) {
      this.stateTarget.innerHTML = '<i class="fal fa-save text-danger"></i>';
    }
  }, {
    key: "saveChange",
    value: function saveChange(event) {
      var that = this;
      event.preventDefault();
      var data = new FormData();
      data.append(this.valueTarget.name, this.valueTarget.value);
      console.log("Pre ".concat(this.url()));
      _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        type: 'PATCH',
        url: this.url(),
        dataType: 'json',
        data: data,
        success: function success(response) {
          that.stateTarget.innerHTML = '<i class="fal fa-save text-success"></i>';
        },
        error: function error(response) {
          console.log('Setting could not be saved.');
        }
      });
    }
  }, {
    key: "checkOn",
    value: function checkOn() {
      console.log(this.onUrlValue);
      var that = this;
      _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        type: 'GET',
        url: this.onUrlValue,
        dataType: 'json',
        success: function success(response) {
          that.checkOnTarget.hidden = false;
          that.checkOffTarget.hidden = true;
        },
        error: function error(response) {
          console.log('Setting could not be saved.');
        }
      });
    }
  }, {
    key: "checkOff",
    value: function checkOff() {
      console.log(this.offUrlValue);
      var that = this;
      _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        type: 'GET',
        url: this.offUrlValue,
        dataType: 'json',
        success: function success(response) {
          that.checkOnTarget.hidden = true;
          that.checkOffTarget.hidden = false;
        },
        error: function error(response) {
          console.log('Setting could not be saved.');
        }
      });
    }
  }, {
    key: "toggleOn",
    value: function toggleOn() {
      console.log(this.toggleOnUrlValue);
      var that = this;
      _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        type: 'GET',
        url: this.toggleOnUrlValue,
        dataType: 'json',
        success: function success(response) {
          that.toggleOnTarget.hidden = false;
          that.toggleOffTarget.hidden = true;
        },
        error: function error(response) {
          console.log('Setting could not be saved.');
        }
      });
    }
  }, {
    key: "toggleOff",
    value: function toggleOff() {
      console.log(this.toggleOffUrlValue);
      var that = this;
      _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        type: 'GET',
        url: this.toggleOffUrlValue,
        dataType: 'json',
        success: function success(response) {
          that.toggleOnTarget.hidden = true;
          that.toggleOffTarget.hidden = false;
        },
        error: function error(response) {
          console.log('Setting could not be saved.');
        }
      });
    }
  }, {
    key: "url",
    value: function url() {
      console.log("URL for updater: ".concat(this.urlValue));
      return this.urlValue;
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

_default.targets = ['value', 'state', 'checkOn', 'checkOff', 'toggleOn', 'toggleOff'];
_default.values = {
  toggleOnUrl: String,
  toggleOffUrl: String,
  onUrl: String,
  offUrl: String,
  url: String
};


/***/ }),

/***/ "./app/javascript/controllers/hello_controller.js":
/*!********************************************************!*\
  !*** ./app/javascript/controllers/hello_controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>


var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.outputTarget.textContent = 'Hello, Stimulus!';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

_default.targets = ["output"];


/***/ }),

/***/ "./app/javascript/controllers/index.js":
/*!*********************************************!*\
  !*** ./app/javascript/controllers/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus/webpack-helpers */ "./node_modules/stimulus/webpack-helpers.js");
// Load all the controllers within this directory and all subdirectories. 
// Controller files must be named *_controller.js.


var application = stimulus__WEBPACK_IMPORTED_MODULE_0__["Application"].start();

var context = __webpack_require__("./app/javascript/controllers sync recursive _controller\\.js$");

application.load(Object(stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__["definitionsFromContext"])(context));

/***/ }),

/***/ "./app/javascript/controllers/questionnaire_controller.js":
/*!****************************************************************!*\
  !*** ./app/javascript/controllers/questionnaire_controller.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      console.log('Questionnaire#connect');
    }
  }, {
    key: "submit",
    value: function submit(event) {
      console.log('Questionnaire#submit');
      var that = this;
      var myModal = new bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"](document.getElementById(that.customerValue), {
        keyboard: false
      });
      myModal.show(); // Redraw all sections

      this.questionSectionTargets.forEach(function (element, index) {
        console.log("Questionnaire#submit - question section path: ".concat(element.dataset.path));
        _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
          type: 'GET',
          url: element.dataset.path,
          dataType: 'json',
          success: function success(response) {
            console.log('Questionnaire#submit - redraw section');
            element.outerHTML = response.html;
            console.log('Questionnaire#submit - redraw section');
          },
          error: function error(response) {
            console.log('Setting could not be saved.');
          }
        });
      });
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

_default.targets = ["content", "questionSection", "submitBar"];
_default.values = {
  submitUrl: String
};


/***/ }),

/***/ "./app/javascript/controllers/supertable_controller.js":
/*!*************************************************************!*\
  !*** ./app/javascript/controllers/supertable_controller.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// ONLY EDIT IN STIMULUS-BASE 1.7.0



var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      console.log('Connected: SuperTable');
      this.filter_url = this.data.get('filter-url');
    }
  }, {
    key: "showFilterBox",
    value: function showFilterBox(event) {
      console.log('#showFilterBox');
      this.filterboxTarget.hidden = false;
    }
  }, {
    key: "closeFilterBox",
    value: function closeFilterBox(event) {
      this.filterboxTarget.hidden = true;
    }
  }, {
    key: "preventSubmit",
    value: function preventSubmit(event) {
      console.log('Prevent Submit');
      event.preventDefault();
    }
  }, {
    key: "filterChosen",
    value: function filterChosen(event) {
      console.log("#filterChosen name='".concat(event.target.name, "'"));
      console.log("#filterChosen value='".concat(event.target.value, "'"));
      var that = this;
      _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        type: 'GET',
        url: event.target.name,
        dataType: 'json',
        success: function success(response) {
          that.contentTarget.innerHTML = response.html;
        },
        error: function error(response) {
          console.log('filter failed');
        }
      });
    }
  }, {
    key: "submitForm",
    value: function submitForm(event) {
      var that = this;
      console.log('Submit Form so Prevent');
      event.preventDefault(); // Rails.fire(this.submitTarget, 'submit')

      var data = new FormData(this.submitTarget);
      data.append("commit", event.target.value);
      _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        type: "post",
        url: this.data.get('create-url'),
        data: data,
        success: function success(response) {
          if (response.error) {
            that.errorTarget.innerHTML = response.error;
          } else {
            if (response.replace_body) {
              that.contentTarget.innerHTML = response.html;
            } else {
              that.contentTarget.innerHTML = that.contentTarget.innerHTML + response.html;
            }

            that.submitTarget.outerHTML = response.form;
          }
        },
        error: function error(response) {
          console.log('Submit: Failed.');
        }
      }); // Redraw the table
    } ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // data actions for Filtering                                                                                     //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  }, {
    key: "clear",
    value: function clear(event) {
      console.log('supertable#clear');
      var url = this.filter_url + '?field=' + event.target.closest("button").name + '&by=';
      console.log(">> url = ".concat(url));
      var that = this;
      _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function success(response) {
          that.contentTarget.innerHTML = response.html;
        },
        error: function error(response) {
          console.log('filter failed');
        }
      });
    }
  }, {
    key: "filterClicked",
    value: function filterClicked(event) {
      console.log('Supertable#filterClicked');
      var that = this;
      var url = this.filter_url + '?field=' + event.target.name + '&by=' + event.target.value;
      setTimeout(function () {
        event.target.classList.add('bg-success');
      }, 200);
      that.contentTarget.innerHTML = '<div class="text-center"><i class="fas fa-spinner fa-pulse fa-fw fa-10x"></i></div>';
      this.startFilterTimer(url);
    }
  }, {
    key: "filterChanged",
    value: function filterChanged(event) {
      var that = this;
      var url = this.filter_url + '?field=' + event.target.name + '&by=' + event.target.value;
      that.contentTarget.innerHTML = '<tr><td>searching...</td></tr>';
      this.startFilterTimer(url);
    }
  }, {
    key: "buttonClicked",
    value: function buttonClicked(event) {
      var that = this;
      console.log('key pressed');
      var url = this.filter_url + '?field=' + event.target.closest("button").name + '&by=' + event.target.closest("button").value;
      console.log('Path: ' + url);
      _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function success(response) {
          that.contentTarget.innerHTML = response.html;
        },
        error: function error(response) {
          console.log('filter failed');
        }
      });
    }
  }, {
    key: "toggleOn",
    value: function toggleOn(event) {
      var that = this;
      console.log('key pressed');
      var url = this.filter_url + '?field=' + event.target.closest("button").name + '&by=' + event.target.closest("button").value;
      console.log("URL: ".concat(url));
      _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function success(response) {
          that.contentTarget.innerHTML = response.html;
        },
        error: function error(response) {
          console.log('filter failed');
        }
      });
    }
  }, {
    key: "toggleOff",
    value: function toggleOff(event) {
      var that = this;
      var url = this.filter_url + '?field=' + event.target.closest("button").name + '&by=' + event.target.closest("button").value;
      console.log("URL: ".concat(url));
      _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function success(response) {
          that.contentTarget.innerHTML = response.html;
        },
        error: function error(response) {
          console.log('filter failed');
        }
      });
    }
  }, {
    key: "startFilterTimer",
    value: function startFilterTimer(url) {
      var that = this;

      if (this.filterTimer) {
        clearTimeout(this.filterTimer);
      }

      this.filterTimer = setTimeout(function () {
        _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
          type: 'GET',
          url: url,
          dataType: 'json',
          success: function success(response) {
            that.contentTarget.innerHTML = response.html;
          },
          error: function error(response) {
            console.log('filter failed');
          }
        });
      }, 2000);
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

_default.targets = ["submit", "content"];


/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var controllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! controllers */ "./app/javascript/controllers/index.js");
/* harmony import */ var _stylesheets_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stylesheets/application */ "./app/javascript/stylesheets/application.scss");
/* harmony import */ var _stylesheets_application__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_application__WEBPACK_IMPORTED_MODULE_4__);
/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
console.log('Hello World from Webpacker');




_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();

__webpack_require__(/*! trix */ "./node_modules/trix/dist/trix.js");

__webpack_require__(/*! @rails/actiontext */ "./node_modules/@rails/actiontext/app/javascript/actiontext/index.js");




/***/ }),

/***/ "./app/javascript/stylesheets/application.scss":
/*!*****************************************************!*\
  !*** ./app/javascript/stylesheets/application.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./application.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/stylesheets/application.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/createPopper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/createPopper.js ***!
  \*********************************************************/
/*! exports provided: popperGenerator, createPopper, detectOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return popperGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/validateModifiers.js */ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/uniqueBy.js */ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_12__["isElement"])(reference) ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference) : reference.contextElement ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference.contextElement) : [],
          popper: Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = Object(_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = Object(_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__["default"])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          Object(_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__["default"])(modifiers);

          if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_13__["auto"]) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: Object(_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(reference, Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper), state.options.strategy === 'fixed'),
          popper: Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Object(_utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isShadowRoot"])(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBoundingClientRect; });
// import { isHTMLElement } from './instanceOf';
function getBoundingClientRect(element, // eslint-disable-next-line unused-imports/no-unused-vars
includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1; // FIXME:
  // `offsetWidth` returns an integer while `getBoundingClientRect`
  // returns a float. This results in `scaleX` or `scaleY` being
  // non-1 when it should be for elements that aren't a full pixel in
  // width or height.
  // if (isHTMLElement(element) && includeScale) {
  //   const offsetHeight = element.offsetHeight;
  //   const offsetWidth = element.offsetWidth;
  //   // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
  //   // Fallback to 1 in case both values are `0`
  //   if (offsetWidth > 0) {
  //     scaleX = rect.width / offsetWidth || 1;
  //   }
  //   if (offsetHeight > 0) {
  //     scaleY = rect.height / offsetHeight || 1;
  //   }
  // }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getClippingRect; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");















function getInnerBoundingClientRect(element) {
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"] ? Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) : Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(clippingParent) ? getInnerBoundingClientRect(clippingParent) : Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = Object(_listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(element) ? Object(_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(element) : element;

  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clippingParent) && Object(_contains_js__WEBPACK_IMPORTED_MODULE_10__["default"])(clippingParent, clipperElement) && Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["max"])(rect.top, accRect.top);
    accRect.right = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["min"])(rect.right, accRect.right);
    accRect.bottom = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["min"])(rect.bottom, accRect.bottom);
    accRect.left = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["max"])(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCompositeRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");








function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent);
  var offsetParentIsScaled = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent) && isElementScaled(offsetParent);
  var documentElement = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent);
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(documentElement)) {
      scroll = Object(_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent);
    }

    if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent)) {
      offsets = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__["default"])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getComputedStyle; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentElement; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isElement"])(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentRect; });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var winScroll = Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
  var y = -winScroll.scrollTop;

  if (Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body || html).direction === 'rtl') {
    x += Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHTMLElementScroll; });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLayoutRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeName; });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeScroll; });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node) || !Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isHTMLElement"])(node)) {
    return Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  } else {
    return Object(_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOffsetParent; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");







function getTrueOffsetParent(element) {
  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(element) || // https://github.com/popperjs/popper-core/issues/837
  Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element);

  while (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(currentNode) && ['html', 'body'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode)) < 0) {
    var css = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && Object(_isTableElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'html' || Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'body' && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getParentNode; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");



function getParentNode(element) {
  if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isShadowRoot"])(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element) // fallback

  );
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollParent; });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(node) && Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node)) {
    return node;
  }

  return getScrollParent(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewportRect; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");



function getViewportRect(element) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element),
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindow; });
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScroll; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScrollBarX; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \*****************************************************************/
/*! exports provided: isElement, isHTMLElement, isShadowRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTMLElement", function() { return isHTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShadowRoot", function() { return isShadowRoot; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");


function isElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isScrollParent; });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isTableElement; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listScrollParents; });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = Object(_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target)));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/enums.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return beforeRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read", function() { return read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return afterRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return beforeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return afterMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return beforeWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return write; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return afterWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return modifierPhases; });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/index.js ***!
  \**************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases, applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow, popperGenerator, detectOverflow, createPopperBase, createPopper, createPopperLite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "top", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["auto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["basePlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "start", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "end", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["end"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["clippingParents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["popper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["reference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["variationPlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["placements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "read", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["read"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "main", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["main"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "write", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["write"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"]; });

/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["applyStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["arrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["computeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["eventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["flip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["offset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["popperOffsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["preventOverflow"]; });

/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["detectOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperBase", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["createPopper"]; });

/* harmony import */ var _popper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popper.js */ "./node_modules/@popperjs/core/lib/popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return _popper_js__WEBPACK_IMPORTED_MODULE_3__["createPopper"]; });

/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return _popper_lite_js__WEBPACK_IMPORTED_MODULE_4__["createPopper"]; });


 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return Object(_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__["default"])(typeof padding !== 'number' ? padding : Object(_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_8__["basePlacements"]));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.placement);
  var axis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_8__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"]].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["left"];
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"];
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_5__["default"])(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__["isHTMLElement"])(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!Object(_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \********************************************************************/
/*! exports provided: mapToStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToStyles", function() { return mapToStyles; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_7__["round"])(Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_7__["round"])(x * dpr) / dpr) || 0,
    y: Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_7__["round"])(Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_7__["round"])(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"];
  var win = window;

  if (adaptive) {
    var offsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)) {
      offsetParent = Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper);

      if (Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"] || placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"]) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["end"]) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"]; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"] || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] || placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"]) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["end"]) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"]; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (true) {
    var transitionProperty = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.placement),
    variation: Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"]) {
    return [];
  }

  var oppositePlacement = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  return [Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement), oppositePlacement, Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"] ? Object(_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);

    var isStartVariation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["start"];
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["right"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["left"] : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["top"];

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    }

    var altVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/index.js ***!
  \************************************************************/
/*! exports provided: applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _arrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _flip_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _hide_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _offset_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*************************************************************/
/*! exports provided: distanceAndSkiddingToXY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceAndSkiddingToXY", function() { return distanceAndSkiddingToXY; });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["top"]].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["right"]].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"].reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = Object(_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement);
  var altAxis = Object(_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : Object(_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["min"])(min, tetherMin) : min, offset, tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["max"])(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];

      var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["min"])(_min, tetherMin) : _min, _offset, tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["max"])(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper-lite.js":
/*!********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper-lite.js ***!
  \********************************************************/
/*! exports provided: createPopper, popperGenerator, defaultModifiers, detectOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
var createPopper = /*#__PURE__*/Object(_createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper.js ***!
  \***************************************************/
/*! exports provided: createPopper, popperGenerator, defaultModifiers, detectOverflow, createPopperLite, applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modifiers/hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return _popper_lite_js__WEBPACK_IMPORTED_MODULE_10__["createPopper"]; });

/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["applyStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["arrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["computeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["eventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["flip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["offset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["popperOffsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["preventOverflow"]; });











var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__["default"]];
var createPopper = /*#__PURE__*/Object(_createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeAutoPlacement; });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"] : _options$allowedAutoP;
  var variation = Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"] : _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"].filter(function (placement) {
    return Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_1__["basePlacements"];
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (true) {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = Object(_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeOffsets; });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["top"]:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["bottom"]:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["right"]:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["left"]:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? Object(_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["start"]:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["end"]:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return detectOverflow; });
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["clippingParents"] : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["viewport"] : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = Object(_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(typeof padding !== 'number' ? padding : Object(_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_5__["basePlacements"]));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["reference"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"];
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = Object(_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__["isElement"])(element) ? element : element.contextElement || Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = Object(_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.reference);
  var popperOffsets = Object(_computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = Object(_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return expandToHashMap; });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/format.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/format.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAltAxis; });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBasePlacement; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFreshSideObject; });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMainAxisFromPlacement; });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositePlacement; });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositeVariationPlacement; });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getVariation; });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/math.js":
/*!*******************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/math.js ***!
  \*******************************************************/
/*! exports provided: max, min, round */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!**************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeByName; });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergePaddingObject; });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign({}, Object(_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), paddingObject);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return orderModifiers; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"].reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rectToClientRect; });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uniqueBy; });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateModifiers; });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "./node_modules/@popperjs/core/lib/utils/format.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].indexOf(modifier.phase) < 0) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/within.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/within.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return within; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");

function within(min, value, max) {
  return Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["max"])(min, Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["min"])(value, max));
}

/***/ }),

/***/ "./node_modules/@rails/actiontext/app/javascript/actiontext/attachment_upload.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@rails/actiontext/app/javascript/actiontext/attachment_upload.js ***!
  \***************************************************************************************/
/*! exports provided: AttachmentUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentUpload", function() { return AttachmentUpload; });
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var AttachmentUpload = /*#__PURE__*/function () {
  function AttachmentUpload(attachment, element) {
    _classCallCheck(this, AttachmentUpload);

    this.attachment = attachment;
    this.element = element;
    this.directUpload = new _rails_activestorage__WEBPACK_IMPORTED_MODULE_0__["DirectUpload"](attachment.file, this.directUploadUrl, this);
  }

  _createClass(AttachmentUpload, [{
    key: "start",
    value: function start() {
      this.directUpload.create(this.directUploadDidComplete.bind(this));
    }
  }, {
    key: "directUploadWillStoreFileWithXHR",
    value: function directUploadWillStoreFileWithXHR(xhr) {
      var _this = this;

      xhr.upload.addEventListener("progress", function (event) {
        var progress = event.loaded / event.total * 100;

        _this.attachment.setUploadProgress(progress);
      });
    }
  }, {
    key: "directUploadDidComplete",
    value: function directUploadDidComplete(error, attributes) {
      if (error) {
        throw new Error("Direct upload failed: ".concat(error));
      }

      this.attachment.setAttributes({
        sgid: attributes.attachable_sgid,
        url: this.createBlobUrl(attributes.signed_id, attributes.filename)
      });
    }
  }, {
    key: "createBlobUrl",
    value: function createBlobUrl(signedId, filename) {
      return this.blobUrlTemplate.replace(":signed_id", signedId).replace(":filename", encodeURIComponent(filename));
    }
  }, {
    key: "directUploadUrl",
    get: function get() {
      return this.element.dataset.directUploadUrl;
    }
  }, {
    key: "blobUrlTemplate",
    get: function get() {
      return this.element.dataset.blobUrlTemplate;
    }
  }]);

  return AttachmentUpload;
}();

/***/ }),

/***/ "./node_modules/@rails/actiontext/app/javascript/actiontext/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@rails/actiontext/app/javascript/actiontext/index.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attachment_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachment_upload */ "./node_modules/@rails/actiontext/app/javascript/actiontext/attachment_upload.js");

addEventListener("trix-attachment-add", function (event) {
  var attachment = event.attachment,
      target = event.target;

  if (attachment.file) {
    var upload = new _attachment_upload__WEBPACK_IMPORTED_MODULE_0__["AttachmentUpload"](attachment, target);
    upload.start();
  }
});

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm.delete(form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }

        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery/src/jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/action.js":
/*!****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/action.js ***!
  \****************************************************/
/*! exports provided: Action, getDefaultEventNameForElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultEventNameForElement", function() { return getDefaultEventNameForElement; });
/* harmony import */ var _action_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action_descriptor */ "./node_modules/@stimulus/core/dist/action_descriptor.js");


var Action =
/** @class */
function () {
  function Action(element, index, descriptor) {
    this.element = element;
    this.index = index;
    this.eventTarget = descriptor.eventTarget || element;
    this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
    this.eventOptions = descriptor.eventOptions || {};
    this.identifier = descriptor.identifier || error("missing identifier");
    this.methodName = descriptor.methodName || error("missing method name");
  }

  Action.forToken = function (token) {
    return new this(token.element, token.index, Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["parseActionDescriptorString"])(token.content));
  };

  Action.prototype.toString = function () {
    var eventNameSuffix = this.eventTargetName ? "@" + this.eventTargetName : "";
    return "" + this.eventName + eventNameSuffix + "->" + this.identifier + "#" + this.methodName;
  };

  Object.defineProperty(Action.prototype, "eventTargetName", {
    get: function get() {
      return Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["stringifyEventTarget"])(this.eventTarget);
    },
    enumerable: false,
    configurable: true
  });
  return Action;
}();


var defaultEventNames = {
  "a": function a(e) {
    return "click";
  },
  "button": function button(e) {
    return "click";
  },
  "form": function form(e) {
    return "submit";
  },
  "input": function input(e) {
    return e.getAttribute("type") == "submit" ? "click" : "input";
  },
  "select": function select(e) {
    return "change";
  },
  "textarea": function textarea(e) {
    return "input";
  }
};
function getDefaultEventNameForElement(element) {
  var tagName = element.tagName.toLowerCase();

  if (tagName in defaultEventNames) {
    return defaultEventNames[tagName](element);
  }
}

function error(message) {
  throw new Error(message);
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/action_descriptor.js":
/*!***************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/action_descriptor.js ***!
  \***************************************************************/
/*! exports provided: parseActionDescriptorString, stringifyEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseActionDescriptorString", function() { return parseActionDescriptorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyEventTarget", function() { return stringifyEventTarget; });
// capture nos.:            12   23 4               43   1 5   56 7      768 9  98
var descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#([^:]+?))(:(.+))?$/;
function parseActionDescriptorString(descriptorString) {
  var source = descriptorString.trim();
  var matches = source.match(descriptorPattern) || [];
  return {
    eventTarget: parseEventTarget(matches[4]),
    eventName: matches[2],
    eventOptions: matches[9] ? parseEventOptions(matches[9]) : {},
    identifier: matches[5],
    methodName: matches[7]
  };
}

function parseEventTarget(eventTargetName) {
  if (eventTargetName == "window") {
    return window;
  } else if (eventTargetName == "document") {
    return document;
  }
}

function parseEventOptions(eventOptions) {
  return eventOptions.split(":").reduce(function (options, token) {
    var _a;

    return Object.assign(options, (_a = {}, _a[token.replace(/^!/, "")] = !/^!/.test(token), _a));
  }, {});
}

function stringifyEventTarget(eventTarget) {
  if (eventTarget == window) {
    return "window";
  } else if (eventTarget == document) {
    return "document";
  }
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/application.js":
/*!*********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/application.js ***!
  \*********************************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatcher */ "./node_modules/@stimulus/core/dist/dispatcher.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./node_modules/@stimulus/core/dist/router.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ "./node_modules/@stimulus/core/dist/schema.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};





var Application =
/** @class */
function () {
  function Application(element, schema) {
    if (element === void 0) {
      element = document.documentElement;
    }

    if (schema === void 0) {
      schema = _schema__WEBPACK_IMPORTED_MODULE_2__["defaultSchema"];
    }

    this.logger = console;
    this.element = element;
    this.schema = schema;
    this.dispatcher = new _dispatcher__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"](this);
    this.router = new _router__WEBPACK_IMPORTED_MODULE_1__["Router"](this);
  }

  Application.start = function (element, schema) {
    var application = new Application(element, schema);
    application.start();
    return application;
  };

  Application.prototype.start = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , domReady()];

          case 1:
            _a.sent();

            this.dispatcher.start();
            this.router.start();
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Application.prototype.stop = function () {
    this.dispatcher.stop();
    this.router.stop();
  };

  Application.prototype.register = function (identifier, controllerConstructor) {
    this.load({
      identifier: identifier,
      controllerConstructor: controllerConstructor
    });
  };

  Application.prototype.load = function (head) {
    var _this = this;

    var rest = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }

    var definitions = Array.isArray(head) ? head : __spreadArrays([head], rest);
    definitions.forEach(function (definition) {
      return _this.router.loadDefinition(definition);
    });
  };

  Application.prototype.unload = function (head) {
    var _this = this;

    var rest = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }

    var identifiers = Array.isArray(head) ? head : __spreadArrays([head], rest);
    identifiers.forEach(function (identifier) {
      return _this.router.unloadIdentifier(identifier);
    });
  };

  Object.defineProperty(Application.prototype, "controllers", {
    // Controllers
    get: function get() {
      return this.router.contexts.map(function (context) {
        return context.controller;
      });
    },
    enumerable: false,
    configurable: true
  });

  Application.prototype.getControllerForElementAndIdentifier = function (element, identifier) {
    var context = this.router.getContextForElementAndIdentifier(element, identifier);
    return context ? context.controller : null;
  }; // Error handling


  Application.prototype.handleError = function (error, message, detail) {
    this.logger.error("%s\n\n%o\n\n%o", message, error, detail);
  };

  return Application;
}();



function domReady() {
  return new Promise(function (resolve) {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", resolve);
    } else {
      resolve();
    }
  });
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/binding.js":
/*!*****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/binding.js ***!
  \*****************************************************/
/*! exports provided: Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return Binding; });
var Binding =
/** @class */
function () {
  function Binding(context, action) {
    this.context = context;
    this.action = action;
  }

  Object.defineProperty(Binding.prototype, "index", {
    get: function get() {
      return this.action.index;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "eventTarget", {
    get: function get() {
      return this.action.eventTarget;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "eventOptions", {
    get: function get() {
      return this.action.eventOptions;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "identifier", {
    get: function get() {
      return this.context.identifier;
    },
    enumerable: false,
    configurable: true
  });

  Binding.prototype.handleEvent = function (event) {
    if (this.willBeInvokedByEvent(event)) {
      this.invokeWithEvent(event);
    }
  };

  Object.defineProperty(Binding.prototype, "eventName", {
    get: function get() {
      return this.action.eventName;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "method", {
    get: function get() {
      var method = this.controller[this.methodName];

      if (typeof method == "function") {
        return method;
      }

      throw new Error("Action \"" + this.action + "\" references undefined method \"" + this.methodName + "\"");
    },
    enumerable: false,
    configurable: true
  });

  Binding.prototype.invokeWithEvent = function (event) {
    try {
      this.method.call(this.controller, event);
    } catch (error) {
      var _a = this,
          identifier = _a.identifier,
          controller = _a.controller,
          element = _a.element,
          index = _a.index;

      var detail = {
        identifier: identifier,
        controller: controller,
        element: element,
        index: index,
        event: event
      };
      this.context.handleError(error, "invoking action \"" + this.action + "\"", detail);
    }
  };

  Binding.prototype.willBeInvokedByEvent = function (event) {
    var eventTarget = event.target;

    if (this.element === eventTarget) {
      return true;
    } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
      return this.scope.containsElement(eventTarget);
    } else {
      return this.scope.containsElement(this.action.element);
    }
  };

  Object.defineProperty(Binding.prototype, "controller", {
    get: function get() {
      return this.context.controller;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "methodName", {
    get: function get() {
      return this.action.methodName;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "scope", {
    get: function get() {
      return this.context.scope;
    },
    enumerable: false,
    configurable: true
  });
  return Binding;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/binding_observer.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/binding_observer.js ***!
  \**************************************************************/
/*! exports provided: BindingObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingObserver", function() { return BindingObserver; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./node_modules/@stimulus/core/dist/action.js");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding */ "./node_modules/@stimulus/core/dist/binding.js");
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");




var BindingObserver =
/** @class */
function () {
  function BindingObserver(context, delegate) {
    this.context = context;
    this.delegate = delegate;
    this.bindingsByAction = new Map();
  }

  BindingObserver.prototype.start = function () {
    if (!this.valueListObserver) {
      this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__["ValueListObserver"](this.element, this.actionAttribute, this);
      this.valueListObserver.start();
    }
  };

  BindingObserver.prototype.stop = function () {
    if (this.valueListObserver) {
      this.valueListObserver.stop();
      delete this.valueListObserver;
      this.disconnectAllActions();
    }
  };

  Object.defineProperty(BindingObserver.prototype, "element", {
    get: function get() {
      return this.context.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "identifier", {
    get: function get() {
      return this.context.identifier;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "actionAttribute", {
    get: function get() {
      return this.schema.actionAttribute;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "schema", {
    get: function get() {
      return this.context.schema;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "bindings", {
    get: function get() {
      return Array.from(this.bindingsByAction.values());
    },
    enumerable: false,
    configurable: true
  });

  BindingObserver.prototype.connectAction = function (action) {
    var binding = new _binding__WEBPACK_IMPORTED_MODULE_1__["Binding"](this.context, action);
    this.bindingsByAction.set(action, binding);
    this.delegate.bindingConnected(binding);
  };

  BindingObserver.prototype.disconnectAction = function (action) {
    var binding = this.bindingsByAction.get(action);

    if (binding) {
      this.bindingsByAction.delete(action);
      this.delegate.bindingDisconnected(binding);
    }
  };

  BindingObserver.prototype.disconnectAllActions = function () {
    var _this = this;

    this.bindings.forEach(function (binding) {
      return _this.delegate.bindingDisconnected(binding);
    });
    this.bindingsByAction.clear();
  }; // Value observer delegate


  BindingObserver.prototype.parseValueForToken = function (token) {
    var action = _action__WEBPACK_IMPORTED_MODULE_0__["Action"].forToken(token);

    if (action.identifier == this.identifier) {
      return action;
    }
  };

  BindingObserver.prototype.elementMatchedValue = function (element, action) {
    this.connectAction(action);
  };

  BindingObserver.prototype.elementUnmatchedValue = function (element, action) {
    this.disconnectAction(action);
  };

  return BindingObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/blessing.js":
/*!******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/blessing.js ***!
  \******************************************************/
/*! exports provided: bless */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bless", function() { return bless; });
/* harmony import */ var _inheritable_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inheritable_statics */ "./node_modules/@stimulus/core/dist/inheritable_statics.js");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};


/** @hidden */

function bless(constructor) {
  return shadow(constructor, getBlessedProperties(constructor));
}

function shadow(constructor, properties) {
  var shadowConstructor = extend(constructor);
  var shadowProperties = getShadowProperties(constructor.prototype, properties);
  Object.defineProperties(shadowConstructor.prototype, shadowProperties);
  return shadowConstructor;
}

function getBlessedProperties(constructor) {
  var blessings = Object(_inheritable_statics__WEBPACK_IMPORTED_MODULE_0__["readInheritableStaticArrayValues"])(constructor, "blessings");
  return blessings.reduce(function (blessedProperties, blessing) {
    var properties = blessing(constructor);

    for (var key in properties) {
      var descriptor = blessedProperties[key] || {};
      blessedProperties[key] = Object.assign(descriptor, properties[key]);
    }

    return blessedProperties;
  }, {});
}

function getShadowProperties(prototype, properties) {
  return getOwnKeys(properties).reduce(function (shadowProperties, key) {
    var _a;

    var descriptor = getShadowedDescriptor(prototype, properties, key);

    if (descriptor) {
      Object.assign(shadowProperties, (_a = {}, _a[key] = descriptor, _a));
    }

    return shadowProperties;
  }, {});
}

function getShadowedDescriptor(prototype, properties, key) {
  var shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
  var shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;

  if (!shadowedByValue) {
    var descriptor = Object.getOwnPropertyDescriptor(properties, key).value;

    if (shadowingDescriptor) {
      descriptor.get = shadowingDescriptor.get || descriptor.get;
      descriptor.set = shadowingDescriptor.set || descriptor.set;
    }

    return descriptor;
  }
}

var getOwnKeys = function () {
  if (typeof Object.getOwnPropertySymbols == "function") {
    return function (object) {
      return __spreadArrays(Object.getOwnPropertyNames(object), Object.getOwnPropertySymbols(object));
    };
  } else {
    return Object.getOwnPropertyNames;
  }
}();

var extend = function () {
  function extendWithReflect(constructor) {
    function extended() {
      var _newTarget = this && this instanceof extended ? this.constructor : void 0;

      return Reflect.construct(constructor, arguments, _newTarget);
    }

    extended.prototype = Object.create(constructor.prototype, {
      constructor: {
        value: extended
      }
    });
    Reflect.setPrototypeOf(extended, constructor);
    return extended;
  }

  function testReflectExtension() {
    var a = function a() {
      this.a.call(this);
    };

    var b = extendWithReflect(a);

    b.prototype.a = function () {};

    return new b();
  }

  try {
    testReflectExtension();
    return extendWithReflect;
  } catch (error) {
    return function (constructor) {
      return (
        /** @class */
        function (_super) {
          __extends(extended, _super);

          function extended() {
            return _super !== null && _super.apply(this, arguments) || this;
          }

          return extended;
        }(constructor)
      );
    };
  }
}();

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/class_map.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/class_map.js ***!
  \*******************************************************/
/*! exports provided: ClassMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassMap", function() { return ClassMap; });
var ClassMap =
/** @class */
function () {
  function ClassMap(scope) {
    this.scope = scope;
  }

  ClassMap.prototype.has = function (name) {
    return this.data.has(this.getDataKey(name));
  };

  ClassMap.prototype.get = function (name) {
    return this.data.get(this.getDataKey(name));
  };

  ClassMap.prototype.getAttributeName = function (name) {
    return this.data.getAttributeNameForKey(this.getDataKey(name));
  };

  ClassMap.prototype.getDataKey = function (name) {
    return name + "-class";
  };

  Object.defineProperty(ClassMap.prototype, "data", {
    get: function get() {
      return this.scope.data;
    },
    enumerable: false,
    configurable: true
  });
  return ClassMap;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/class_properties.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/class_properties.js ***!
  \**************************************************************/
/*! exports provided: ClassPropertiesBlessing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassPropertiesBlessing", function() { return ClassPropertiesBlessing; });
/* harmony import */ var _inheritable_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inheritable_statics */ "./node_modules/@stimulus/core/dist/inheritable_statics.js");
/* harmony import */ var _string_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string_helpers */ "./node_modules/@stimulus/core/dist/string_helpers.js");


/** @hidden */

function ClassPropertiesBlessing(constructor) {
  var classes = Object(_inheritable_statics__WEBPACK_IMPORTED_MODULE_0__["readInheritableStaticArrayValues"])(constructor, "classes");
  return classes.reduce(function (properties, classDefinition) {
    return Object.assign(properties, propertiesForClassDefinition(classDefinition));
  }, {});
}

function propertiesForClassDefinition(key) {
  var _a;

  var name = key + "Class";
  return _a = {}, _a[name] = {
    get: function get() {
      var classes = this.classes;

      if (classes.has(key)) {
        return classes.get(key);
      } else {
        var attribute = classes.getAttributeName(key);
        throw new Error("Missing attribute \"" + attribute + "\"");
      }
    }
  }, _a["has" + Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(name)] = {
    get: function get() {
      return this.classes.has(key);
    }
  }, _a;
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/context.js":
/*!*****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/context.js ***!
  \*****************************************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _binding_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_observer */ "./node_modules/@stimulus/core/dist/binding_observer.js");
/* harmony import */ var _value_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./value_observer */ "./node_modules/@stimulus/core/dist/value_observer.js");



var Context =
/** @class */
function () {
  function Context(module, scope) {
    this.module = module;
    this.scope = scope;
    this.controller = new module.controllerConstructor(this);
    this.bindingObserver = new _binding_observer__WEBPACK_IMPORTED_MODULE_0__["BindingObserver"](this, this.dispatcher);
    this.valueObserver = new _value_observer__WEBPACK_IMPORTED_MODULE_1__["ValueObserver"](this, this.controller);

    try {
      this.controller.initialize();
    } catch (error) {
      this.handleError(error, "initializing controller");
    }
  }

  Context.prototype.connect = function () {
    this.bindingObserver.start();
    this.valueObserver.start();

    try {
      this.controller.connect();
    } catch (error) {
      this.handleError(error, "connecting controller");
    }
  };

  Context.prototype.disconnect = function () {
    try {
      this.controller.disconnect();
    } catch (error) {
      this.handleError(error, "disconnecting controller");
    }

    this.valueObserver.stop();
    this.bindingObserver.stop();
  };

  Object.defineProperty(Context.prototype, "application", {
    get: function get() {
      return this.module.application;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "identifier", {
    get: function get() {
      return this.module.identifier;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "schema", {
    get: function get() {
      return this.application.schema;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "dispatcher", {
    get: function get() {
      return this.application.dispatcher;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "parentElement", {
    get: function get() {
      return this.element.parentElement;
    },
    enumerable: false,
    configurable: true
  }); // Error handling

  Context.prototype.handleError = function (error, message, detail) {
    if (detail === void 0) {
      detail = {};
    }

    var _a = this,
        identifier = _a.identifier,
        controller = _a.controller,
        element = _a.element;

    detail = Object.assign({
      identifier: identifier,
      controller: controller,
      element: element
    }, detail);
    this.application.handleError(error, "Error " + message, detail);
  };

  return Context;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/controller.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/controller.js ***!
  \********************************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var _class_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class_properties */ "./node_modules/@stimulus/core/dist/class_properties.js");
/* harmony import */ var _target_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target_properties */ "./node_modules/@stimulus/core/dist/target_properties.js");
/* harmony import */ var _value_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./value_properties */ "./node_modules/@stimulus/core/dist/value_properties.js");




var Controller =
/** @class */
function () {
  function Controller(context) {
    this.context = context;
  }

  Object.defineProperty(Controller.prototype, "application", {
    get: function get() {
      return this.context.application;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "scope", {
    get: function get() {
      return this.context.scope;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "targets", {
    get: function get() {
      return this.scope.targets;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "classes", {
    get: function get() {
      return this.scope.classes;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "data", {
    get: function get() {
      return this.scope.data;
    },
    enumerable: false,
    configurable: true
  });

  Controller.prototype.initialize = function () {// Override in your subclass to set up initial controller state
  };

  Controller.prototype.connect = function () {// Override in your subclass to respond when the controller is connected to the DOM
  };

  Controller.prototype.disconnect = function () {// Override in your subclass to respond when the controller is disconnected from the DOM
  };

  Controller.blessings = [_class_properties__WEBPACK_IMPORTED_MODULE_0__["ClassPropertiesBlessing"], _target_properties__WEBPACK_IMPORTED_MODULE_1__["TargetPropertiesBlessing"], _value_properties__WEBPACK_IMPORTED_MODULE_2__["ValuePropertiesBlessing"]];
  Controller.targets = [];
  Controller.values = {};
  return Controller;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/data_map.js":
/*!******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/data_map.js ***!
  \******************************************************/
/*! exports provided: DataMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataMap", function() { return DataMap; });
/* harmony import */ var _string_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string_helpers */ "./node_modules/@stimulus/core/dist/string_helpers.js");


var DataMap =
/** @class */
function () {
  function DataMap(scope) {
    this.scope = scope;
  }

  Object.defineProperty(DataMap.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(DataMap.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: false,
    configurable: true
  });

  DataMap.prototype.get = function (key) {
    var name = this.getAttributeNameForKey(key);
    return this.element.getAttribute(name);
  };

  DataMap.prototype.set = function (key, value) {
    var name = this.getAttributeNameForKey(key);
    this.element.setAttribute(name, value);
    return this.get(key);
  };

  DataMap.prototype.has = function (key) {
    var name = this.getAttributeNameForKey(key);
    return this.element.hasAttribute(name);
  };

  DataMap.prototype.delete = function (key) {
    if (this.has(key)) {
      var name_1 = this.getAttributeNameForKey(key);
      this.element.removeAttribute(name_1);
      return true;
    } else {
      return false;
    }
  };

  DataMap.prototype.getAttributeNameForKey = function (key) {
    return "data-" + this.identifier + "-" + Object(_string_helpers__WEBPACK_IMPORTED_MODULE_0__["dasherize"])(key);
  };

  return DataMap;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/definition.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/definition.js ***!
  \********************************************************/
/*! exports provided: blessDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blessDefinition", function() { return blessDefinition; });
/* harmony import */ var _blessing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blessing */ "./node_modules/@stimulus/core/dist/blessing.js");

/** @hidden */

function blessDefinition(definition) {
  return {
    identifier: definition.identifier,
    controllerConstructor: Object(_blessing__WEBPACK_IMPORTED_MODULE_0__["bless"])(definition.controllerConstructor)
  };
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/dispatcher.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/dispatcher.js ***!
  \********************************************************/
/*! exports provided: Dispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return Dispatcher; });
/* harmony import */ var _event_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_listener */ "./node_modules/@stimulus/core/dist/event_listener.js");


var Dispatcher =
/** @class */
function () {
  function Dispatcher(application) {
    this.application = application;
    this.eventListenerMaps = new Map();
    this.started = false;
  }

  Dispatcher.prototype.start = function () {
    if (!this.started) {
      this.started = true;
      this.eventListeners.forEach(function (eventListener) {
        return eventListener.connect();
      });
    }
  };

  Dispatcher.prototype.stop = function () {
    if (this.started) {
      this.started = false;
      this.eventListeners.forEach(function (eventListener) {
        return eventListener.disconnect();
      });
    }
  };

  Object.defineProperty(Dispatcher.prototype, "eventListeners", {
    get: function get() {
      return Array.from(this.eventListenerMaps.values()).reduce(function (listeners, map) {
        return listeners.concat(Array.from(map.values()));
      }, []);
    },
    enumerable: false,
    configurable: true
  }); // Binding observer delegate

  /** @hidden */

  Dispatcher.prototype.bindingConnected = function (binding) {
    this.fetchEventListenerForBinding(binding).bindingConnected(binding);
  };
  /** @hidden */


  Dispatcher.prototype.bindingDisconnected = function (binding) {
    this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
  }; // Error handling


  Dispatcher.prototype.handleError = function (error, message, detail) {
    if (detail === void 0) {
      detail = {};
    }

    this.application.handleError(error, "Error " + message, detail);
  };

  Dispatcher.prototype.fetchEventListenerForBinding = function (binding) {
    var eventTarget = binding.eventTarget,
        eventName = binding.eventName,
        eventOptions = binding.eventOptions;
    return this.fetchEventListener(eventTarget, eventName, eventOptions);
  };

  Dispatcher.prototype.fetchEventListener = function (eventTarget, eventName, eventOptions) {
    var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
    var cacheKey = this.cacheKey(eventName, eventOptions);
    var eventListener = eventListenerMap.get(cacheKey);

    if (!eventListener) {
      eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
      eventListenerMap.set(cacheKey, eventListener);
    }

    return eventListener;
  };

  Dispatcher.prototype.createEventListener = function (eventTarget, eventName, eventOptions) {
    var eventListener = new _event_listener__WEBPACK_IMPORTED_MODULE_0__["EventListener"](eventTarget, eventName, eventOptions);

    if (this.started) {
      eventListener.connect();
    }

    return eventListener;
  };

  Dispatcher.prototype.fetchEventListenerMapForEventTarget = function (eventTarget) {
    var eventListenerMap = this.eventListenerMaps.get(eventTarget);

    if (!eventListenerMap) {
      eventListenerMap = new Map();
      this.eventListenerMaps.set(eventTarget, eventListenerMap);
    }

    return eventListenerMap;
  };

  Dispatcher.prototype.cacheKey = function (eventName, eventOptions) {
    var parts = [eventName];
    Object.keys(eventOptions).sort().forEach(function (key) {
      parts.push("" + (eventOptions[key] ? "" : "!") + key);
    });
    return parts.join(":");
  };

  return Dispatcher;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/event_listener.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/event_listener.js ***!
  \************************************************************/
/*! exports provided: EventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return EventListener; });
var EventListener =
/** @class */
function () {
  function EventListener(eventTarget, eventName, eventOptions) {
    this.eventTarget = eventTarget;
    this.eventName = eventName;
    this.eventOptions = eventOptions;
    this.unorderedBindings = new Set();
  }

  EventListener.prototype.connect = function () {
    this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
  };

  EventListener.prototype.disconnect = function () {
    this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
  }; // Binding observer delegate

  /** @hidden */


  EventListener.prototype.bindingConnected = function (binding) {
    this.unorderedBindings.add(binding);
  };
  /** @hidden */


  EventListener.prototype.bindingDisconnected = function (binding) {
    this.unorderedBindings.delete(binding);
  };

  EventListener.prototype.handleEvent = function (event) {
    var extendedEvent = extendEvent(event);

    for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
      var binding = _a[_i];

      if (extendedEvent.immediatePropagationStopped) {
        break;
      } else {
        binding.handleEvent(extendedEvent);
      }
    }
  };

  Object.defineProperty(EventListener.prototype, "bindings", {
    get: function get() {
      return Array.from(this.unorderedBindings).sort(function (left, right) {
        var leftIndex = left.index,
            rightIndex = right.index;
        return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
      });
    },
    enumerable: false,
    configurable: true
  });
  return EventListener;
}();



function extendEvent(event) {
  if ("immediatePropagationStopped" in event) {
    return event;
  } else {
    var stopImmediatePropagation_1 = event.stopImmediatePropagation;
    return Object.assign(event, {
      immediatePropagationStopped: false,
      stopImmediatePropagation: function stopImmediatePropagation() {
        this.immediatePropagationStopped = true;
        stopImmediatePropagation_1.call(this);
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/guide.js":
/*!***************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/guide.js ***!
  \***************************************************/
/*! exports provided: Guide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guide", function() { return Guide; });
var Guide =
/** @class */
function () {
  function Guide(logger) {
    this.warnedKeysByObject = new WeakMap();
    this.logger = logger;
  }

  Guide.prototype.warn = function (object, key, message) {
    var warnedKeys = this.warnedKeysByObject.get(object);

    if (!warnedKeys) {
      warnedKeys = new Set();
      this.warnedKeysByObject.set(object, warnedKeys);
    }

    if (!warnedKeys.has(key)) {
      warnedKeys.add(key);
      this.logger.warn(message, object);
    }
  };

  return Guide;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/index.js ***!
  \***************************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application */ "./node_modules/@stimulus/core/dist/application.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _application__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./node_modules/@stimulus/core/dist/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _context__WEBPACK_IMPORTED_MODULE_1__["Context"]; });

/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./node_modules/@stimulus/core/dist/controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _controller__WEBPACK_IMPORTED_MODULE_2__["Controller"]; });

/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schema */ "./node_modules/@stimulus/core/dist/schema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _schema__WEBPACK_IMPORTED_MODULE_3__["defaultSchema"]; });






/***/ }),

/***/ "./node_modules/@stimulus/core/dist/inheritable_statics.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/inheritable_statics.js ***!
  \*****************************************************************/
/*! exports provided: readInheritableStaticArrayValues, readInheritableStaticObjectPairs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readInheritableStaticArrayValues", function() { return readInheritableStaticArrayValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readInheritableStaticObjectPairs", function() { return readInheritableStaticObjectPairs; });
function readInheritableStaticArrayValues(constructor, propertyName) {
  var ancestors = getAncestorsForConstructor(constructor);
  return Array.from(ancestors.reduce(function (values, constructor) {
    getOwnStaticArrayValues(constructor, propertyName).forEach(function (name) {
      return values.add(name);
    });
    return values;
  }, new Set()));
}
function readInheritableStaticObjectPairs(constructor, propertyName) {
  var ancestors = getAncestorsForConstructor(constructor);
  return ancestors.reduce(function (pairs, constructor) {
    pairs.push.apply(pairs, getOwnStaticObjectPairs(constructor, propertyName));
    return pairs;
  }, []);
}

function getAncestorsForConstructor(constructor) {
  var ancestors = [];

  while (constructor) {
    ancestors.push(constructor);
    constructor = Object.getPrototypeOf(constructor);
  }

  return ancestors.reverse();
}

function getOwnStaticArrayValues(constructor, propertyName) {
  var definition = constructor[propertyName];
  return Array.isArray(definition) ? definition : [];
}

function getOwnStaticObjectPairs(constructor, propertyName) {
  var definition = constructor[propertyName];
  return definition ? Object.keys(definition).map(function (key) {
    return [key, definition[key]];
  }) : [];
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/module.js":
/*!****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/module.js ***!
  \****************************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./node_modules/@stimulus/core/dist/context.js");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definition */ "./node_modules/@stimulus/core/dist/definition.js");



var Module =
/** @class */
function () {
  function Module(application, definition) {
    this.application = application;
    this.definition = Object(_definition__WEBPACK_IMPORTED_MODULE_1__["blessDefinition"])(definition);
    this.contextsByScope = new WeakMap();
    this.connectedContexts = new Set();
  }

  Object.defineProperty(Module.prototype, "identifier", {
    get: function get() {
      return this.definition.identifier;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Module.prototype, "controllerConstructor", {
    get: function get() {
      return this.definition.controllerConstructor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Module.prototype, "contexts", {
    get: function get() {
      return Array.from(this.connectedContexts);
    },
    enumerable: false,
    configurable: true
  });

  Module.prototype.connectContextForScope = function (scope) {
    var context = this.fetchContextForScope(scope);
    this.connectedContexts.add(context);
    context.connect();
  };

  Module.prototype.disconnectContextForScope = function (scope) {
    var context = this.contextsByScope.get(scope);

    if (context) {
      this.connectedContexts.delete(context);
      context.disconnect();
    }
  };

  Module.prototype.fetchContextForScope = function (scope) {
    var context = this.contextsByScope.get(scope);

    if (!context) {
      context = new _context__WEBPACK_IMPORTED_MODULE_0__["Context"](this, scope);
      this.contextsByScope.set(scope, context);
    }

    return context;
  };

  return Module;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/router.js":
/*!****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/router.js ***!
  \****************************************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./node_modules/@stimulus/core/dist/module.js");
/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "./node_modules/@stimulus/multimap/dist/index.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scope */ "./node_modules/@stimulus/core/dist/scope.js");
/* harmony import */ var _scope_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scope_observer */ "./node_modules/@stimulus/core/dist/scope_observer.js");





var Router =
/** @class */
function () {
  function Router(application) {
    this.application = application;
    this.scopeObserver = new _scope_observer__WEBPACK_IMPORTED_MODULE_3__["ScopeObserver"](this.element, this.schema, this);
    this.scopesByIdentifier = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"]();
    this.modulesByIdentifier = new Map();
  }

  Object.defineProperty(Router.prototype, "element", {
    get: function get() {
      return this.application.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "schema", {
    get: function get() {
      return this.application.schema;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "logger", {
    get: function get() {
      return this.application.logger;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "controllerAttribute", {
    get: function get() {
      return this.schema.controllerAttribute;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "modules", {
    get: function get() {
      return Array.from(this.modulesByIdentifier.values());
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "contexts", {
    get: function get() {
      return this.modules.reduce(function (contexts, module) {
        return contexts.concat(module.contexts);
      }, []);
    },
    enumerable: false,
    configurable: true
  });

  Router.prototype.start = function () {
    this.scopeObserver.start();
  };

  Router.prototype.stop = function () {
    this.scopeObserver.stop();
  };

  Router.prototype.loadDefinition = function (definition) {
    this.unloadIdentifier(definition.identifier);
    var module = new _module__WEBPACK_IMPORTED_MODULE_0__["Module"](this.application, definition);
    this.connectModule(module);
  };

  Router.prototype.unloadIdentifier = function (identifier) {
    var module = this.modulesByIdentifier.get(identifier);

    if (module) {
      this.disconnectModule(module);
    }
  };

  Router.prototype.getContextForElementAndIdentifier = function (element, identifier) {
    var module = this.modulesByIdentifier.get(identifier);

    if (module) {
      return module.contexts.find(function (context) {
        return context.element == element;
      });
    }
  }; // Error handler delegate

  /** @hidden */


  Router.prototype.handleError = function (error, message, detail) {
    this.application.handleError(error, message, detail);
  }; // Scope observer delegate

  /** @hidden */


  Router.prototype.createScopeForElementAndIdentifier = function (element, identifier) {
    return new _scope__WEBPACK_IMPORTED_MODULE_2__["Scope"](this.schema, element, identifier, this.logger);
  };
  /** @hidden */


  Router.prototype.scopeConnected = function (scope) {
    this.scopesByIdentifier.add(scope.identifier, scope);
    var module = this.modulesByIdentifier.get(scope.identifier);

    if (module) {
      module.connectContextForScope(scope);
    }
  };
  /** @hidden */


  Router.prototype.scopeDisconnected = function (scope) {
    this.scopesByIdentifier.delete(scope.identifier, scope);
    var module = this.modulesByIdentifier.get(scope.identifier);

    if (module) {
      module.disconnectContextForScope(scope);
    }
  }; // Modules


  Router.prototype.connectModule = function (module) {
    this.modulesByIdentifier.set(module.identifier, module);
    var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
    scopes.forEach(function (scope) {
      return module.connectContextForScope(scope);
    });
  };

  Router.prototype.disconnectModule = function (module) {
    this.modulesByIdentifier.delete(module.identifier);
    var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
    scopes.forEach(function (scope) {
      return module.disconnectContextForScope(scope);
    });
  };

  return Router;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/schema.js":
/*!****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/schema.js ***!
  \****************************************************/
/*! exports provided: defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return defaultSchema; });
var defaultSchema = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target"
};

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/scope.js":
/*!***************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/scope.js ***!
  \***************************************************/
/*! exports provided: Scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony import */ var _class_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class_map */ "./node_modules/@stimulus/core/dist/class_map.js");
/* harmony import */ var _data_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data_map */ "./node_modules/@stimulus/core/dist/data_map.js");
/* harmony import */ var _guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guide */ "./node_modules/@stimulus/core/dist/guide.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./node_modules/@stimulus/core/dist/selectors.js");
/* harmony import */ var _target_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./target_set */ "./node_modules/@stimulus/core/dist/target_set.js");
var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};







var Scope =
/** @class */
function () {
  function Scope(schema, element, identifier, logger) {
    var _this = this;

    this.targets = new _target_set__WEBPACK_IMPORTED_MODULE_4__["TargetSet"](this);
    this.classes = new _class_map__WEBPACK_IMPORTED_MODULE_0__["ClassMap"](this);
    this.data = new _data_map__WEBPACK_IMPORTED_MODULE_1__["DataMap"](this);

    this.containsElement = function (element) {
      return element.closest(_this.controllerSelector) === _this.element;
    };

    this.schema = schema;
    this.element = element;
    this.identifier = identifier;
    this.guide = new _guide__WEBPACK_IMPORTED_MODULE_2__["Guide"](logger);
  }

  Scope.prototype.findElement = function (selector) {
    return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
  };

  Scope.prototype.findAllElements = function (selector) {
    return __spreadArrays(this.element.matches(selector) ? [this.element] : [], this.queryElements(selector).filter(this.containsElement));
  };

  Scope.prototype.queryElements = function (selector) {
    return Array.from(this.element.querySelectorAll(selector));
  };

  Object.defineProperty(Scope.prototype, "controllerSelector", {
    get: function get() {
      return Object(_selectors__WEBPACK_IMPORTED_MODULE_3__["attributeValueContainsToken"])(this.schema.controllerAttribute, this.identifier);
    },
    enumerable: false,
    configurable: true
  });
  return Scope;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/scope_observer.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/scope_observer.js ***!
  \************************************************************/
/*! exports provided: ScopeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopeObserver", function() { return ScopeObserver; });
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");


var ScopeObserver =
/** @class */
function () {
  function ScopeObserver(element, schema, delegate) {
    this.element = element;
    this.schema = schema;
    this.delegate = delegate;
    this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_0__["ValueListObserver"](this.element, this.controllerAttribute, this);
    this.scopesByIdentifierByElement = new WeakMap();
    this.scopeReferenceCounts = new WeakMap();
  }

  ScopeObserver.prototype.start = function () {
    this.valueListObserver.start();
  };

  ScopeObserver.prototype.stop = function () {
    this.valueListObserver.stop();
  };

  Object.defineProperty(ScopeObserver.prototype, "controllerAttribute", {
    get: function get() {
      return this.schema.controllerAttribute;
    },
    enumerable: false,
    configurable: true
  }); // Value observer delegate

  /** @hidden */

  ScopeObserver.prototype.parseValueForToken = function (token) {
    var element = token.element,
        identifier = token.content;
    var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
    var scope = scopesByIdentifier.get(identifier);

    if (!scope) {
      scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
      scopesByIdentifier.set(identifier, scope);
    }

    return scope;
  };
  /** @hidden */


  ScopeObserver.prototype.elementMatchedValue = function (element, value) {
    var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
    this.scopeReferenceCounts.set(value, referenceCount);

    if (referenceCount == 1) {
      this.delegate.scopeConnected(value);
    }
  };
  /** @hidden */


  ScopeObserver.prototype.elementUnmatchedValue = function (element, value) {
    var referenceCount = this.scopeReferenceCounts.get(value);

    if (referenceCount) {
      this.scopeReferenceCounts.set(value, referenceCount - 1);

      if (referenceCount == 1) {
        this.delegate.scopeDisconnected(value);
      }
    }
  };

  ScopeObserver.prototype.fetchScopesByIdentifierForElement = function (element) {
    var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);

    if (!scopesByIdentifier) {
      scopesByIdentifier = new Map();
      this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
    }

    return scopesByIdentifier;
  };

  return ScopeObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/selectors.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/selectors.js ***!
  \*******************************************************/
/*! exports provided: attributeValueContainsToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeValueContainsToken", function() { return attributeValueContainsToken; });
/** @hidden */
function attributeValueContainsToken(attributeName, token) {
  return "[" + attributeName + "~=\"" + token + "\"]";
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/string_helpers.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/string_helpers.js ***!
  \************************************************************/
/*! exports provided: camelize, capitalize, dasherize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dasherize", function() { return dasherize; });
function camelize(value) {
  return value.replace(/(?:[_-])([a-z0-9])/g, function (_, char) {
    return char.toUpperCase();
  });
}
function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
function dasherize(value) {
  return value.replace(/([A-Z])/g, function (_, char) {
    return "-" + char.toLowerCase();
  });
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/target_properties.js":
/*!***************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/target_properties.js ***!
  \***************************************************************/
/*! exports provided: TargetPropertiesBlessing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetPropertiesBlessing", function() { return TargetPropertiesBlessing; });
/* harmony import */ var _inheritable_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inheritable_statics */ "./node_modules/@stimulus/core/dist/inheritable_statics.js");
/* harmony import */ var _string_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string_helpers */ "./node_modules/@stimulus/core/dist/string_helpers.js");


/** @hidden */

function TargetPropertiesBlessing(constructor) {
  var targets = Object(_inheritable_statics__WEBPACK_IMPORTED_MODULE_0__["readInheritableStaticArrayValues"])(constructor, "targets");
  return targets.reduce(function (properties, targetDefinition) {
    return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
  }, {});
}

function propertiesForTargetDefinition(name) {
  var _a;

  return _a = {}, _a[name + "Target"] = {
    get: function get() {
      var target = this.targets.find(name);

      if (target) {
        return target;
      } else {
        throw new Error("Missing target element \"" + this.identifier + "." + name + "\"");
      }
    }
  }, _a[name + "Targets"] = {
    get: function get() {
      return this.targets.findAll(name);
    }
  }, _a["has" + Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(name) + "Target"] = {
    get: function get() {
      return this.targets.has(name);
    }
  }, _a;
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/target_set.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/target_set.js ***!
  \********************************************************/
/*! exports provided: TargetSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetSet", function() { return TargetSet; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./node_modules/@stimulus/core/dist/selectors.js");
var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};



var TargetSet =
/** @class */
function () {
  function TargetSet(scope) {
    this.scope = scope;
  }

  Object.defineProperty(TargetSet.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TargetSet.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TargetSet.prototype, "schema", {
    get: function get() {
      return this.scope.schema;
    },
    enumerable: false,
    configurable: true
  });

  TargetSet.prototype.has = function (targetName) {
    return this.find(targetName) != null;
  };

  TargetSet.prototype.find = function () {
    var _this = this;

    var targetNames = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      targetNames[_i] = arguments[_i];
    }

    return targetNames.reduce(function (target, targetName) {
      return target || _this.findTarget(targetName) || _this.findLegacyTarget(targetName);
    }, undefined);
  };

  TargetSet.prototype.findAll = function () {
    var _this = this;

    var targetNames = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      targetNames[_i] = arguments[_i];
    }

    return targetNames.reduce(function (targets, targetName) {
      return __spreadArrays(targets, _this.findAllTargets(targetName), _this.findAllLegacyTargets(targetName));
    }, []);
  };

  TargetSet.prototype.findTarget = function (targetName) {
    var selector = this.getSelectorForTargetName(targetName);
    return this.scope.findElement(selector);
  };

  TargetSet.prototype.findAllTargets = function (targetName) {
    var selector = this.getSelectorForTargetName(targetName);
    return this.scope.findAllElements(selector);
  };

  TargetSet.prototype.getSelectorForTargetName = function (targetName) {
    var attributeName = "data-" + this.identifier + "-target";
    return Object(_selectors__WEBPACK_IMPORTED_MODULE_0__["attributeValueContainsToken"])(attributeName, targetName);
  };

  TargetSet.prototype.findLegacyTarget = function (targetName) {
    var selector = this.getLegacySelectorForTargetName(targetName);
    return this.deprecate(this.scope.findElement(selector), targetName);
  };

  TargetSet.prototype.findAllLegacyTargets = function (targetName) {
    var _this = this;

    var selector = this.getLegacySelectorForTargetName(targetName);
    return this.scope.findAllElements(selector).map(function (element) {
      return _this.deprecate(element, targetName);
    });
  };

  TargetSet.prototype.getLegacySelectorForTargetName = function (targetName) {
    var targetDescriptor = this.identifier + "." + targetName;
    return Object(_selectors__WEBPACK_IMPORTED_MODULE_0__["attributeValueContainsToken"])(this.schema.targetAttribute, targetDescriptor);
  };

  TargetSet.prototype.deprecate = function (element, targetName) {
    if (element) {
      var identifier = this.identifier;
      var attributeName = this.schema.targetAttribute;
      this.guide.warn(element, "target:" + targetName, "Please replace " + attributeName + "=\"" + identifier + "." + targetName + "\" with data-" + identifier + "-target=\"" + targetName + "\". " + ("The " + attributeName + " attribute is deprecated and will be removed in a future version of Stimulus."));
    }

    return element;
  };

  Object.defineProperty(TargetSet.prototype, "guide", {
    get: function get() {
      return this.scope.guide;
    },
    enumerable: false,
    configurable: true
  });
  return TargetSet;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/value_observer.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/value_observer.js ***!
  \************************************************************/
/*! exports provided: ValueObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueObserver", function() { return ValueObserver; });
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");


var ValueObserver =
/** @class */
function () {
  function ValueObserver(context, receiver) {
    this.context = context;
    this.receiver = receiver;
    this.stringMapObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_0__["StringMapObserver"](this.element, this);
    this.valueDescriptorMap = this.controller.valueDescriptorMap;
    this.invokeChangedCallbacksForDefaultValues();
  }

  ValueObserver.prototype.start = function () {
    this.stringMapObserver.start();
  };

  ValueObserver.prototype.stop = function () {
    this.stringMapObserver.stop();
  };

  Object.defineProperty(ValueObserver.prototype, "element", {
    get: function get() {
      return this.context.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ValueObserver.prototype, "controller", {
    get: function get() {
      return this.context.controller;
    },
    enumerable: false,
    configurable: true
  }); // String map observer delegate

  ValueObserver.prototype.getStringMapKeyForAttribute = function (attributeName) {
    if (attributeName in this.valueDescriptorMap) {
      return this.valueDescriptorMap[attributeName].name;
    }
  };

  ValueObserver.prototype.stringMapValueChanged = function (attributeValue, name) {
    this.invokeChangedCallbackForValue(name);
  };

  ValueObserver.prototype.invokeChangedCallbacksForDefaultValues = function () {
    for (var _i = 0, _a = this.valueDescriptors; _i < _a.length; _i++) {
      var _b = _a[_i],
          key = _b.key,
          name_1 = _b.name,
          defaultValue = _b.defaultValue;

      if (defaultValue != undefined && !this.controller.data.has(key)) {
        this.invokeChangedCallbackForValue(name_1);
      }
    }
  };

  ValueObserver.prototype.invokeChangedCallbackForValue = function (name) {
    var methodName = name + "Changed";
    var method = this.receiver[methodName];

    if (typeof method == "function") {
      var value = this.receiver[name];
      method.call(this.receiver, value);
    }
  };

  Object.defineProperty(ValueObserver.prototype, "valueDescriptors", {
    get: function get() {
      var valueDescriptorMap = this.valueDescriptorMap;
      return Object.keys(valueDescriptorMap).map(function (key) {
        return valueDescriptorMap[key];
      });
    },
    enumerable: false,
    configurable: true
  });
  return ValueObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/value_properties.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/value_properties.js ***!
  \**************************************************************/
/*! exports provided: ValuePropertiesBlessing, propertiesForValueDefinitionPair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuePropertiesBlessing", function() { return ValuePropertiesBlessing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertiesForValueDefinitionPair", function() { return propertiesForValueDefinitionPair; });
/* harmony import */ var _inheritable_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inheritable_statics */ "./node_modules/@stimulus/core/dist/inheritable_statics.js");
/* harmony import */ var _string_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string_helpers */ "./node_modules/@stimulus/core/dist/string_helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/** @hidden */

function ValuePropertiesBlessing(constructor) {
  var valueDefinitionPairs = Object(_inheritable_statics__WEBPACK_IMPORTED_MODULE_0__["readInheritableStaticObjectPairs"])(constructor, "values");
  var propertyDescriptorMap = {
    valueDescriptorMap: {
      get: function get() {
        var _this = this;

        return valueDefinitionPairs.reduce(function (result, valueDefinitionPair) {
          var _a;

          var valueDescriptor = parseValueDefinitionPair(valueDefinitionPair);

          var attributeName = _this.data.getAttributeNameForKey(valueDescriptor.key);

          return Object.assign(result, (_a = {}, _a[attributeName] = valueDescriptor, _a));
        }, {});
      }
    }
  };
  return valueDefinitionPairs.reduce(function (properties, valueDefinitionPair) {
    return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
  }, propertyDescriptorMap);
}
/** @hidden */

function propertiesForValueDefinitionPair(valueDefinitionPair) {
  var _a;

  var definition = parseValueDefinitionPair(valueDefinitionPair);
  var type = definition.type,
      key = definition.key,
      name = definition.name;
  var read = readers[type],
      write = writers[type] || writers.default;
  return _a = {}, _a[name] = {
    get: function get() {
      var value = this.data.get(key);

      if (value !== null) {
        return read(value);
      } else {
        return definition.defaultValue;
      }
    },
    set: function set(value) {
      if (value === undefined) {
        this.data.delete(key);
      } else {
        this.data.set(key, write(value));
      }
    }
  }, _a["has" + Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(name)] = {
    get: function get() {
      return this.data.has(key);
    }
  }, _a;
}

function parseValueDefinitionPair(_a) {
  var token = _a[0],
      typeConstant = _a[1];
  var type = parseValueTypeConstant(typeConstant);
  return valueDescriptorForTokenAndType(token, type);
}

function parseValueTypeConstant(typeConstant) {
  switch (typeConstant) {
    case Array:
      return "array";

    case Boolean:
      return "boolean";

    case Number:
      return "number";

    case Object:
      return "object";

    case String:
      return "string";
  }

  throw new Error("Unknown value type constant \"" + typeConstant + "\"");
}

function valueDescriptorForTokenAndType(token, type) {
  var key = Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__["dasherize"])(token) + "-value";
  return {
    type: type,
    key: key,
    name: Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__["camelize"])(key),

    get defaultValue() {
      return defaultValuesByType[type];
    }

  };
}

var defaultValuesByType = {
  get array() {
    return [];
  },

  boolean: false,
  number: 0,

  get object() {
    return {};
  },

  string: ""
};
var readers = {
  array: function array(value) {
    var array = JSON.parse(value);

    if (!Array.isArray(array)) {
      throw new TypeError("Expected array");
    }

    return array;
  },
  boolean: function boolean(value) {
    return !(value == "0" || value == "false");
  },
  number: function number(value) {
    return parseFloat(value);
  },
  object: function object(value) {
    var object = JSON.parse(value);

    if (object === null || _typeof(object) != "object" || Array.isArray(object)) {
      throw new TypeError("Expected object");
    }

    return object;
  },
  string: function string(value) {
    return value;
  }
};
var writers = {
  default: writeString,
  array: writeJSON,
  object: writeJSON
};

function writeJSON(value) {
  return JSON.stringify(value);
}

function writeString(value) {
  return "" + value;
}

/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/index.js ***!
  \*******************************************************/
/*! exports provided: IndexedMultimap, Multimap, add, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexed_multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexed_multimap */ "./node_modules/@stimulus/multimap/dist/indexed_multimap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return _indexed_multimap__WEBPACK_IMPORTED_MODULE_0__["IndexedMultimap"]; });

/* harmony import */ var _multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multimap */ "./node_modules/@stimulus/multimap/dist/multimap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return _multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"]; });

/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/set_operations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _set_operations__WEBPACK_IMPORTED_MODULE_2__["add"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "del", function() { return _set_operations__WEBPACK_IMPORTED_MODULE_2__["del"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return _set_operations__WEBPACK_IMPORTED_MODULE_2__["fetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return _set_operations__WEBPACK_IMPORTED_MODULE_2__["prune"]; });





/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/indexed_multimap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/indexed_multimap.js ***!
  \******************************************************************/
/*! exports provided: IndexedMultimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return IndexedMultimap; });
/* harmony import */ var _multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multimap */ "./node_modules/@stimulus/multimap/dist/multimap.js");
/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/set_operations.js");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var IndexedMultimap =
/** @class */
function (_super) {
  __extends(IndexedMultimap, _super);

  function IndexedMultimap() {
    var _this = _super.call(this) || this;

    _this.keysByValue = new Map();
    return _this;
  }

  Object.defineProperty(IndexedMultimap.prototype, "values", {
    get: function get() {
      return Array.from(this.keysByValue.keys());
    },
    enumerable: false,
    configurable: true
  });

  IndexedMultimap.prototype.add = function (key, value) {
    _super.prototype.add.call(this, key, value);

    Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["add"])(this.keysByValue, value, key);
  };

  IndexedMultimap.prototype.delete = function (key, value) {
    _super.prototype.delete.call(this, key, value);

    Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["del"])(this.keysByValue, value, key);
  };

  IndexedMultimap.prototype.hasValue = function (value) {
    return this.keysByValue.has(value);
  };

  IndexedMultimap.prototype.getKeysForValue = function (value) {
    var set = this.keysByValue.get(value);
    return set ? Array.from(set) : [];
  };

  return IndexedMultimap;
}(_multimap__WEBPACK_IMPORTED_MODULE_0__["Multimap"]);



/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/multimap.js":
/*!**********************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/multimap.js ***!
  \**********************************************************/
/*! exports provided: Multimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return Multimap; });
/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/set_operations.js");


var Multimap =
/** @class */
function () {
  function Multimap() {
    this.valuesByKey = new Map();
  }

  Object.defineProperty(Multimap.prototype, "values", {
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (values, set) {
        return values.concat(Array.from(set));
      }, []);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Multimap.prototype, "size", {
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (size, set) {
        return size + set.size;
      }, 0);
    },
    enumerable: false,
    configurable: true
  });

  Multimap.prototype.add = function (key, value) {
    Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["add"])(this.valuesByKey, key, value);
  };

  Multimap.prototype.delete = function (key, value) {
    Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["del"])(this.valuesByKey, key, value);
  };

  Multimap.prototype.has = function (key, value) {
    var values = this.valuesByKey.get(key);
    return values != null && values.has(value);
  };

  Multimap.prototype.hasKey = function (key) {
    return this.valuesByKey.has(key);
  };

  Multimap.prototype.hasValue = function (value) {
    var sets = Array.from(this.valuesByKey.values());
    return sets.some(function (set) {
      return set.has(value);
    });
  };

  Multimap.prototype.getValuesForKey = function (key) {
    var values = this.valuesByKey.get(key);
    return values ? Array.from(values) : [];
  };

  Multimap.prototype.getKeysForValue = function (value) {
    return Array.from(this.valuesByKey).filter(function (_a) {
      var key = _a[0],
          values = _a[1];
      return values.has(value);
    }).map(function (_a) {
      var key = _a[0],
          values = _a[1];
      return key;
    });
  };

  return Multimap;
}();



/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/set_operations.js":
/*!****************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/set_operations.js ***!
  \****************************************************************/
/*! exports provided: add, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return prune; });
function add(map, key, value) {
  fetch(map, key).add(value);
}
function del(map, key, value) {
  fetch(map, key).delete(value);
  prune(map, key);
}
function fetch(map, key) {
  var values = map.get(key);

  if (!values) {
    values = new Set();
    map.set(key, values);
  }

  return values;
}
function prune(map, key) {
  var values = map.get(key);

  if (values != null && values.size == 0) {
    map.delete(key);
  }
}

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/attribute_observer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/attribute_observer.js ***!
  \******************************************************************************/
/*! exports provided: AttributeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return AttributeObserver; });
/* harmony import */ var _element_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element_observer */ "./node_modules/@stimulus/mutation-observers/dist/element_observer.js");


var AttributeObserver =
/** @class */
function () {
  function AttributeObserver(element, attributeName, delegate) {
    this.attributeName = attributeName;
    this.delegate = delegate;
    this.elementObserver = new _element_observer__WEBPACK_IMPORTED_MODULE_0__["ElementObserver"](element, this);
  }

  Object.defineProperty(AttributeObserver.prototype, "element", {
    get: function get() {
      return this.elementObserver.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AttributeObserver.prototype, "selector", {
    get: function get() {
      return "[" + this.attributeName + "]";
    },
    enumerable: false,
    configurable: true
  });

  AttributeObserver.prototype.start = function () {
    this.elementObserver.start();
  };

  AttributeObserver.prototype.stop = function () {
    this.elementObserver.stop();
  };

  AttributeObserver.prototype.refresh = function () {
    this.elementObserver.refresh();
  };

  Object.defineProperty(AttributeObserver.prototype, "started", {
    get: function get() {
      return this.elementObserver.started;
    },
    enumerable: false,
    configurable: true
  }); // Element observer delegate

  AttributeObserver.prototype.matchElement = function (element) {
    return element.hasAttribute(this.attributeName);
  };

  AttributeObserver.prototype.matchElementsInTree = function (tree) {
    var match = this.matchElement(tree) ? [tree] : [];
    var matches = Array.from(tree.querySelectorAll(this.selector));
    return match.concat(matches);
  };

  AttributeObserver.prototype.elementMatched = function (element) {
    if (this.delegate.elementMatchedAttribute) {
      this.delegate.elementMatchedAttribute(element, this.attributeName);
    }
  };

  AttributeObserver.prototype.elementUnmatched = function (element) {
    if (this.delegate.elementUnmatchedAttribute) {
      this.delegate.elementUnmatchedAttribute(element, this.attributeName);
    }
  };

  AttributeObserver.prototype.elementAttributeChanged = function (element, attributeName) {
    if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
      this.delegate.elementAttributeValueChanged(element, attributeName);
    }
  };

  return AttributeObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/element_observer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/element_observer.js ***!
  \****************************************************************************/
/*! exports provided: ElementObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return ElementObserver; });
var ElementObserver =
/** @class */
function () {
  function ElementObserver(element, delegate) {
    var _this = this;

    this.element = element;
    this.started = false;
    this.delegate = delegate;
    this.elements = new Set();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this.processMutations(mutations);
    });
  }

  ElementObserver.prototype.start = function () {
    if (!this.started) {
      this.started = true;
      this.mutationObserver.observe(this.element, {
        attributes: true,
        childList: true,
        subtree: true
      });
      this.refresh();
    }
  };

  ElementObserver.prototype.stop = function () {
    if (this.started) {
      this.mutationObserver.takeRecords();
      this.mutationObserver.disconnect();
      this.started = false;
    }
  };

  ElementObserver.prototype.refresh = function () {
    if (this.started) {
      var matches = new Set(this.matchElementsInTree());

      for (var _i = 0, _a = Array.from(this.elements); _i < _a.length; _i++) {
        var element = _a[_i];

        if (!matches.has(element)) {
          this.removeElement(element);
        }
      }

      for (var _b = 0, _c = Array.from(matches); _b < _c.length; _b++) {
        var element = _c[_b];
        this.addElement(element);
      }
    }
  }; // Mutation record processing


  ElementObserver.prototype.processMutations = function (mutations) {
    if (this.started) {
      for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
        var mutation = mutations_1[_i];
        this.processMutation(mutation);
      }
    }
  };

  ElementObserver.prototype.processMutation = function (mutation) {
    if (mutation.type == "attributes") {
      this.processAttributeChange(mutation.target, mutation.attributeName);
    } else if (mutation.type == "childList") {
      this.processRemovedNodes(mutation.removedNodes);
      this.processAddedNodes(mutation.addedNodes);
    }
  };

  ElementObserver.prototype.processAttributeChange = function (node, attributeName) {
    var element = node;

    if (this.elements.has(element)) {
      if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
        this.delegate.elementAttributeChanged(element, attributeName);
      } else {
        this.removeElement(element);
      }
    } else if (this.matchElement(element)) {
      this.addElement(element);
    }
  };

  ElementObserver.prototype.processRemovedNodes = function (nodes) {
    for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
      var node = _a[_i];
      var element = this.elementFromNode(node);

      if (element) {
        this.processTree(element, this.removeElement);
      }
    }
  };

  ElementObserver.prototype.processAddedNodes = function (nodes) {
    for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
      var node = _a[_i];
      var element = this.elementFromNode(node);

      if (element && this.elementIsActive(element)) {
        this.processTree(element, this.addElement);
      }
    }
  }; // Element matching


  ElementObserver.prototype.matchElement = function (element) {
    return this.delegate.matchElement(element);
  };

  ElementObserver.prototype.matchElementsInTree = function (tree) {
    if (tree === void 0) {
      tree = this.element;
    }

    return this.delegate.matchElementsInTree(tree);
  };

  ElementObserver.prototype.processTree = function (tree, processor) {
    for (var _i = 0, _a = this.matchElementsInTree(tree); _i < _a.length; _i++) {
      var element = _a[_i];
      processor.call(this, element);
    }
  };

  ElementObserver.prototype.elementFromNode = function (node) {
    if (node.nodeType == Node.ELEMENT_NODE) {
      return node;
    }
  };

  ElementObserver.prototype.elementIsActive = function (element) {
    if (element.isConnected != this.element.isConnected) {
      return false;
    } else {
      return this.element.contains(element);
    }
  }; // Element tracking


  ElementObserver.prototype.addElement = function (element) {
    if (!this.elements.has(element)) {
      if (this.elementIsActive(element)) {
        this.elements.add(element);

        if (this.delegate.elementMatched) {
          this.delegate.elementMatched(element);
        }
      }
    }
  };

  ElementObserver.prototype.removeElement = function (element) {
    if (this.elements.has(element)) {
      this.elements.delete(element);

      if (this.delegate.elementUnmatched) {
        this.delegate.elementUnmatched(element);
      }
    }
  };

  return ElementObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/index.js ***!
  \*****************************************************************/
/*! exports provided: AttributeObserver, ElementObserver, StringMapObserver, TokenListObserver, ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute_observer */ "./node_modules/@stimulus/mutation-observers/dist/attribute_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return _attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"]; });

/* harmony import */ var _element_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element_observer */ "./node_modules/@stimulus/mutation-observers/dist/element_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return _element_observer__WEBPACK_IMPORTED_MODULE_1__["ElementObserver"]; });

/* harmony import */ var _string_map_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string_map_observer */ "./node_modules/@stimulus/mutation-observers/dist/string_map_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringMapObserver", function() { return _string_map_observer__WEBPACK_IMPORTED_MODULE_2__["StringMapObserver"]; });

/* harmony import */ var _token_list_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/token_list_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return _token_list_observer__WEBPACK_IMPORTED_MODULE_3__["TokenListObserver"]; });

/* harmony import */ var _value_list_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./value_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/value_list_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return _value_list_observer__WEBPACK_IMPORTED_MODULE_4__["ValueListObserver"]; });







/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/string_map_observer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/string_map_observer.js ***!
  \*******************************************************************************/
/*! exports provided: StringMapObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringMapObserver", function() { return StringMapObserver; });
var StringMapObserver =
/** @class */
function () {
  function StringMapObserver(element, delegate) {
    var _this = this;

    this.element = element;
    this.delegate = delegate;
    this.started = false;
    this.stringMap = new Map();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this.processMutations(mutations);
    });
  }

  StringMapObserver.prototype.start = function () {
    if (!this.started) {
      this.started = true;
      this.mutationObserver.observe(this.element, {
        attributes: true
      });
      this.refresh();
    }
  };

  StringMapObserver.prototype.stop = function () {
    if (this.started) {
      this.mutationObserver.takeRecords();
      this.mutationObserver.disconnect();
      this.started = false;
    }
  };

  StringMapObserver.prototype.refresh = function () {
    if (this.started) {
      for (var _i = 0, _a = this.knownAttributeNames; _i < _a.length; _i++) {
        var attributeName = _a[_i];
        this.refreshAttribute(attributeName);
      }
    }
  }; // Mutation record processing


  StringMapObserver.prototype.processMutations = function (mutations) {
    if (this.started) {
      for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
        var mutation = mutations_1[_i];
        this.processMutation(mutation);
      }
    }
  };

  StringMapObserver.prototype.processMutation = function (mutation) {
    var attributeName = mutation.attributeName;

    if (attributeName) {
      this.refreshAttribute(attributeName);
    }
  }; // State tracking


  StringMapObserver.prototype.refreshAttribute = function (attributeName) {
    var key = this.delegate.getStringMapKeyForAttribute(attributeName);

    if (key != null) {
      if (!this.stringMap.has(attributeName)) {
        this.stringMapKeyAdded(key, attributeName);
      }

      var value = this.element.getAttribute(attributeName);

      if (this.stringMap.get(attributeName) != value) {
        this.stringMapValueChanged(value, key);
      }

      if (value == null) {
        this.stringMap.delete(attributeName);
        this.stringMapKeyRemoved(key, attributeName);
      } else {
        this.stringMap.set(attributeName, value);
      }
    }
  };

  StringMapObserver.prototype.stringMapKeyAdded = function (key, attributeName) {
    if (this.delegate.stringMapKeyAdded) {
      this.delegate.stringMapKeyAdded(key, attributeName);
    }
  };

  StringMapObserver.prototype.stringMapValueChanged = function (value, key) {
    if (this.delegate.stringMapValueChanged) {
      this.delegate.stringMapValueChanged(value, key);
    }
  };

  StringMapObserver.prototype.stringMapKeyRemoved = function (key, attributeName) {
    if (this.delegate.stringMapKeyRemoved) {
      this.delegate.stringMapKeyRemoved(key, attributeName);
    }
  };

  Object.defineProperty(StringMapObserver.prototype, "knownAttributeNames", {
    get: function get() {
      return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StringMapObserver.prototype, "currentAttributeNames", {
    get: function get() {
      return Array.from(this.element.attributes).map(function (attribute) {
        return attribute.name;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StringMapObserver.prototype, "recordedAttributeNames", {
    get: function get() {
      return Array.from(this.stringMap.keys());
    },
    enumerable: false,
    configurable: true
  });
  return StringMapObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/token_list_observer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/token_list_observer.js ***!
  \*******************************************************************************/
/*! exports provided: TokenListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return TokenListObserver; });
/* harmony import */ var _attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute_observer */ "./node_modules/@stimulus/mutation-observers/dist/attribute_observer.js");
/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "./node_modules/@stimulus/multimap/dist/index.js");



var TokenListObserver =
/** @class */
function () {
  function TokenListObserver(element, attributeName, delegate) {
    this.attributeObserver = new _attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"](element, attributeName, this);
    this.delegate = delegate;
    this.tokensByElement = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"]();
  }

  Object.defineProperty(TokenListObserver.prototype, "started", {
    get: function get() {
      return this.attributeObserver.started;
    },
    enumerable: false,
    configurable: true
  });

  TokenListObserver.prototype.start = function () {
    this.attributeObserver.start();
  };

  TokenListObserver.prototype.stop = function () {
    this.attributeObserver.stop();
  };

  TokenListObserver.prototype.refresh = function () {
    this.attributeObserver.refresh();
  };

  Object.defineProperty(TokenListObserver.prototype, "element", {
    get: function get() {
      return this.attributeObserver.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TokenListObserver.prototype, "attributeName", {
    get: function get() {
      return this.attributeObserver.attributeName;
    },
    enumerable: false,
    configurable: true
  }); // Attribute observer delegate

  TokenListObserver.prototype.elementMatchedAttribute = function (element) {
    this.tokensMatched(this.readTokensForElement(element));
  };

  TokenListObserver.prototype.elementAttributeValueChanged = function (element) {
    var _a = this.refreshTokensForElement(element),
        unmatchedTokens = _a[0],
        matchedTokens = _a[1];

    this.tokensUnmatched(unmatchedTokens);
    this.tokensMatched(matchedTokens);
  };

  TokenListObserver.prototype.elementUnmatchedAttribute = function (element) {
    this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
  };

  TokenListObserver.prototype.tokensMatched = function (tokens) {
    var _this = this;

    tokens.forEach(function (token) {
      return _this.tokenMatched(token);
    });
  };

  TokenListObserver.prototype.tokensUnmatched = function (tokens) {
    var _this = this;

    tokens.forEach(function (token) {
      return _this.tokenUnmatched(token);
    });
  };

  TokenListObserver.prototype.tokenMatched = function (token) {
    this.delegate.tokenMatched(token);
    this.tokensByElement.add(token.element, token);
  };

  TokenListObserver.prototype.tokenUnmatched = function (token) {
    this.delegate.tokenUnmatched(token);
    this.tokensByElement.delete(token.element, token);
  };

  TokenListObserver.prototype.refreshTokensForElement = function (element) {
    var previousTokens = this.tokensByElement.getValuesForKey(element);
    var currentTokens = this.readTokensForElement(element);
    var firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(function (_a) {
      var previousToken = _a[0],
          currentToken = _a[1];
      return !tokensAreEqual(previousToken, currentToken);
    });

    if (firstDifferingIndex == -1) {
      return [[], []];
    } else {
      return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
    }
  };

  TokenListObserver.prototype.readTokensForElement = function (element) {
    var attributeName = this.attributeName;
    var tokenString = element.getAttribute(attributeName) || "";
    return parseTokenString(tokenString, element, attributeName);
  };

  return TokenListObserver;
}();



function parseTokenString(tokenString, element, attributeName) {
  return tokenString.trim().split(/\s+/).filter(function (content) {
    return content.length;
  }).map(function (content, index) {
    return {
      element: element,
      attributeName: attributeName,
      content: content,
      index: index
    };
  });
}

function zip(left, right) {
  var length = Math.max(left.length, right.length);
  return Array.from({
    length: length
  }, function (_, index) {
    return [left[index], right[index]];
  });
}

function tokensAreEqual(left, right) {
  return left && right && left.index == right.index && left.content == right.content;
}

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/value_list_observer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/value_list_observer.js ***!
  \*******************************************************************************/
/*! exports provided: ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return ValueListObserver; });
/* harmony import */ var _token_list_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/token_list_observer.js");


var ValueListObserver =
/** @class */
function () {
  function ValueListObserver(element, attributeName, delegate) {
    this.tokenListObserver = new _token_list_observer__WEBPACK_IMPORTED_MODULE_0__["TokenListObserver"](element, attributeName, this);
    this.delegate = delegate;
    this.parseResultsByToken = new WeakMap();
    this.valuesByTokenByElement = new WeakMap();
  }

  Object.defineProperty(ValueListObserver.prototype, "started", {
    get: function get() {
      return this.tokenListObserver.started;
    },
    enumerable: false,
    configurable: true
  });

  ValueListObserver.prototype.start = function () {
    this.tokenListObserver.start();
  };

  ValueListObserver.prototype.stop = function () {
    this.tokenListObserver.stop();
  };

  ValueListObserver.prototype.refresh = function () {
    this.tokenListObserver.refresh();
  };

  Object.defineProperty(ValueListObserver.prototype, "element", {
    get: function get() {
      return this.tokenListObserver.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ValueListObserver.prototype, "attributeName", {
    get: function get() {
      return this.tokenListObserver.attributeName;
    },
    enumerable: false,
    configurable: true
  });

  ValueListObserver.prototype.tokenMatched = function (token) {
    var element = token.element;
    var value = this.fetchParseResultForToken(token).value;

    if (value) {
      this.fetchValuesByTokenForElement(element).set(token, value);
      this.delegate.elementMatchedValue(element, value);
    }
  };

  ValueListObserver.prototype.tokenUnmatched = function (token) {
    var element = token.element;
    var value = this.fetchParseResultForToken(token).value;

    if (value) {
      this.fetchValuesByTokenForElement(element).delete(token);
      this.delegate.elementUnmatchedValue(element, value);
    }
  };

  ValueListObserver.prototype.fetchParseResultForToken = function (token) {
    var parseResult = this.parseResultsByToken.get(token);

    if (!parseResult) {
      parseResult = this.parseToken(token);
      this.parseResultsByToken.set(token, parseResult);
    }

    return parseResult;
  };

  ValueListObserver.prototype.fetchValuesByTokenForElement = function (element) {
    var valuesByToken = this.valuesByTokenByElement.get(element);

    if (!valuesByToken) {
      valuesByToken = new Map();
      this.valuesByTokenByElement.set(element, valuesByToken);
    }

    return valuesByToken;
  };

  ValueListObserver.prototype.parseToken = function (token) {
    try {
      var value = this.delegate.parseValueForToken(token);
      return {
        value: value
      };
    } catch (error) {
      return {
        error: error
      };
    }
  };

  return ValueListObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/webpack-helpers/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/webpack-helpers/dist/index.js ***!
  \**************************************************************/
/*! exports provided: definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return definitionsFromContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return identifierForContextKey; });
function definitionsFromContext(context) {
  return context.keys().map(function (key) {
    return definitionForModuleWithContextAndKey(context, key);
  }).filter(function (value) {
    return value;
  });
}

function definitionForModuleWithContextAndKey(context, key) {
  var identifier = identifierForContextKey(key);

  if (identifier) {
    return definitionForModuleAndIdentifier(context(key), identifier);
  }
}

function definitionForModuleAndIdentifier(module, identifier) {
  var controllerConstructor = module.default;

  if (typeof controllerConstructor == "function") {
    return {
      identifier: identifier,
      controllerConstructor: controllerConstructor
    };
  }
}

function identifierForContextKey(key) {
  var logicalName = (key.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/) || [])[1];

  if (logicalName) {
    return logicalName.replace(/_/g, "-").replace(/\//g, "--");
  }
}

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.esm.js ***!
  \*********************************************************/
/*! exports provided: Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offcanvas", function() { return Offcanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpy", function() { return ScrollSpy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/index.js");
var _KEY_TO_DIRECTION;

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var MAX_UID = 1000000;
var MILLISECONDS_MULTIPLIER = 1000;
var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

var toType = function toType(obj) {
  if (obj === null || obj === undefined) {
    return "".concat(obj);
  }

  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


var getUID = function getUID(prefix) {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

var getSelector = function getSelector(element) {
  var selector = element.getAttribute('data-bs-target');

  if (!selector || selector === '#') {
    var hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273

    if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
      return null;
    } // Just in case some CMS puts out a full URL with the anchor appended


    if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
      hrefAttr = "#".concat(hrefAttr.split('#')[1]);
    }

    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
  }

  return selector;
};

var getSelectorFromElement = function getSelectorFromElement(element) {
  var selector = getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

var getElementFromSelector = function getElementFromSelector(element) {
  var selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  var _window$getComputedSt = window.getComputedStyle(element),
      transitionDuration = _window$getComputedSt.transitionDuration,
      transitionDelay = _window$getComputedSt.transitionDelay;

  var floatTransitionDuration = Number.parseFloat(transitionDuration);
  var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};

var triggerTransitionEnd = function triggerTransitionEnd(element) {
  element.dispatchEvent(new Event(TRANSITION_END));
};

var isElement = function isElement(obj) {
  if (!obj || _typeof(obj) !== 'object') {
    return false;
  }

  if (typeof obj.jquery !== 'undefined') {
    obj = obj[0];
  }

  return typeof obj.nodeType !== 'undefined';
};

var getElement = function getElement(obj) {
  if (isElement(obj)) {
    // it's a jQuery object or a node element
    return obj.jquery ? obj[0] : obj;
  }

  if (typeof obj === 'string' && obj.length > 0) {
    return document.querySelector(obj);
  }

  return null;
};

var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
  Object.keys(configTypes).forEach(function (property) {
    var expectedTypes = configTypes[property];
    var value = config[property];
    var valueType = value && isElement(value) ? 'element' : toType(value);

    if (!new RegExp(expectedTypes).test(valueType)) {
      throw new TypeError("".concat(componentName.toUpperCase(), ": Option \"").concat(property, "\" provided type \"").concat(valueType, "\" but expected type \"").concat(expectedTypes, "\"."));
    }
  });
};

var isVisible = function isVisible(element) {
  if (!isElement(element) || element.getClientRects().length === 0) {
    return false;
  }

  return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
};

var isDisabled = function isDisabled(element) {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }

  if (element.classList.contains('disabled')) {
    return true;
  }

  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }

  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};

var findShadowRoot = function findShadowRoot(element) {
  if (!document.documentElement.attachShadow) {
    return null;
  } // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') {
    var root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }

  if (element instanceof ShadowRoot) {
    return element;
  } // when we don't find a shadow root


  if (!element.parentNode) {
    return null;
  }

  return findShadowRoot(element.parentNode);
};

var noop = function noop() {};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */


var reflow = function reflow(element) {
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight;
};

var getjQuery = function getjQuery() {
  var _window = window,
      jQuery = __webpack_provided_window_dot_jQuery;

  if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return jQuery;
  }

  return null;
};

var DOMContentLoadedCallbacks = [];

var onDOMContentLoaded = function onDOMContentLoaded(callback) {
  if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener('DOMContentLoaded', function () {
        DOMContentLoadedCallbacks.forEach(function (callback) {
          return callback();
        });
      });
    }

    DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};

var isRTL = function isRTL() {
  return document.documentElement.dir === 'rtl';
};

var defineJQueryPlugin = function defineJQueryPlugin(plugin) {
  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      var name = plugin.NAME;
      var JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;

      $.fn[name].noConflict = function () {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};

var execute = function execute(callback) {
  if (typeof callback === 'function') {
    callback();
  }
};

var executeAfterTransition = function executeAfterTransition(callback, transitionElement) {
  var waitForTransition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!waitForTransition) {
    execute(callback);
    return;
  }

  var durationPadding = 5;
  var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  var called = false;

  var handler = function handler(_ref) {
    var target = _ref.target;

    if (target !== transitionElement) {
      return;
    }

    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  };

  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(function () {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */


var getNextActiveElement = function getNextActiveElement(list, activeElement, shouldGetNext, isCycleAllowed) {
  var index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

  if (index === -1) {
    return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
  }

  var listLength = list.length;
  index += shouldGetNext ? 1 : -1;

  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }

  return list[Math.max(0, Math.min(index, listLength - 1))];
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
var stripNameRegex = /\..*/;
var stripUidRegex = /::\d+$/;
var eventRegistry = {}; // Events storage

var uidEvent = 1;
var customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
var customEventsRegex = /^(mouseenter|mouseleave)/i;
var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */

function getUidEvent(element, uid) {
  return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
}

function getEvent(element) {
  var uid = getUidEvent(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}

function bootstrapHandler(element, fn) {
  return function handler(event) {
    event.delegateTarget = element;

    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
  };
}

function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    var domElements = element.querySelectorAll(selector);

    for (var target = event.target; target && target !== this; target = target.parentNode) {
      for (var i = domElements.length; i--;) {
        if (domElements[i] === target) {
          event.delegateTarget = target;

          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    } // To please ESLint


    return null;
  };
}

function findHandler(events, handler) {
  var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var uidEventList = Object.keys(events);

  for (var i = 0, len = uidEventList.length; i < len; i++) {
    var event = events[uidEventList[i]];

    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
      return event;
    }
  }

  return null;
}

function normalizeParams(originalTypeEvent, handler, delegationFn) {
  var delegation = typeof handler === 'string';
  var originalHandler = delegation ? delegationFn : handler;
  var typeEvent = getTypeEvent(originalTypeEvent);
  var isNative = nativeEvents.has(typeEvent);

  if (!isNative) {
    typeEvent = originalTypeEvent;
  }

  return [delegation, originalHandler, typeEvent];
}

function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }

  if (!handler) {
    handler = delegationFn;
    delegationFn = null;
  } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does


  if (customEventsRegex.test(originalTypeEvent)) {
    var wrapFn = function wrapFn(fn) {
      return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn.call(this, event);
        }
      };
    };

    if (delegationFn) {
      delegationFn = wrapFn(delegationFn);
    } else {
      handler = wrapFn(handler);
    }
  }

  var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
      _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
      delegation = _normalizeParams2[0],
      originalHandler = _normalizeParams2[1],
      typeEvent = _normalizeParams2[2];

  var events = getEvent(element);
  var handlers = events[typeEvent] || (events[typeEvent] = {});
  var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

  if (previousFn) {
    previousFn.oneOff = previousFn.oneOff && oneOff;
    return;
  }

  var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
  var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
  fn.delegationSelector = delegation ? handler : null;
  fn.originalHandler = originalHandler;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, delegation);
}

function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  var fn = findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) {
    return;
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  var storeElementEvent = events[typeEvent] || {};
  Object.keys(storeElementEvent).forEach(function (handlerKey) {
    if (handlerKey.includes(namespace)) {
      var event = storeElementEvent[handlerKey];
      removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
    }
  });
}

function getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace(stripNameRegex, '');
  return customEvents[event] || event;
}

var EventHandler = {
  on: function on(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, false);
  },
  one: function one(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, true);
  },
  off: function off(element, originalTypeEvent, handler, delegationFn) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    var _normalizeParams3 = normalizeParams(originalTypeEvent, handler, delegationFn),
        _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
        delegation = _normalizeParams4[0],
        originalHandler = _normalizeParams4[1],
        typeEvent = _normalizeParams4[2];

    var inNamespace = typeEvent !== originalTypeEvent;
    var events = getEvent(element);
    var isNamespace = originalTypeEvent.startsWith('.');

    if (typeof originalHandler !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!events || !events[typeEvent]) {
        return;
      }

      removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
      return;
    }

    if (isNamespace) {
      Object.keys(events).forEach(function (elementEvent) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      });
    }

    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (keyHandlers) {
      var handlerKey = keyHandlers.replace(stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        var event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  },
  trigger: function trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    var $ = getjQuery();
    var typeEvent = getTypeEvent(event);
    var inNamespace = event !== typeEvent;
    var isNative = nativeEvents.has(typeEvent);
    var jQueryEvent;
    var bubbles = true;
    var nativeDispatch = true;
    var defaultPrevented = false;
    var evt = null;

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }

    if (isNative) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(typeEvent, bubbles, true);
    } else {
      evt = new CustomEvent(event, {
        bubbles: bubbles,
        cancelable: true
      });
    } // merge custom information in our event


    if (typeof args !== 'undefined') {
      Object.keys(args).forEach(function (key) {
        Object.defineProperty(evt, key, {
          get: function get() {
            return args[key];
          }
        });
      });
    }

    if (defaultPrevented) {
      evt.preventDefault();
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
      jQueryEvent.preventDefault();
    }

    return evt;
  }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var elementMap = new Map();
var Data = {
  set: function set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map());
    }

    var instanceMap = elementMap.get(element); // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used

    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
      return;
    }

    instanceMap.set(key, instance);
  },
  get: function get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }

    return null;
  },
  remove: function remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }

    var instanceMap = elementMap.get(element);
    instanceMap.delete(key); // free up element references if there are no instances left for an element

    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var VERSION = '5.1.3';

var BaseComponent = /*#__PURE__*/function () {
  function BaseComponent(element) {
    _classCallCheck(this, BaseComponent);

    element = getElement(element);

    if (!element) {
      return;
    }

    this._element = element;
    Data.set(this._element, this.constructor.DATA_KEY, this);
  }

  _createClass(BaseComponent, [{
    key: "dispose",
    value: function dispose() {
      var _this = this;

      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      Object.getOwnPropertyNames(this).forEach(function (propertyName) {
        _this[propertyName] = null;
      });
    }
  }, {
    key: "_queueCallback",
    value: function _queueCallback(callback, element) {
      var isAnimated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      executeAfterTransition(callback, element, isAnimated);
    }
    /** Static */

  }], [{
    key: "getInstance",
    value: function getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }
  }, {
    key: "getOrCreateInstance",
    value: function getOrCreateInstance(element) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.getInstance(element) || new this(element, _typeof(config) === 'object' ? config : null);
    }
  }, {
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }, {
    key: "NAME",
    get: function get() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return "bs.".concat(this.NAME);
    }
  }, {
    key: "EVENT_KEY",
    get: function get() {
      return ".".concat(this.DATA_KEY);
    }
  }]);

  return BaseComponent;
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


var enableDismissTrigger = function enableDismissTrigger(component) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hide';
  var clickEvent = "click.dismiss".concat(component.EVENT_KEY);
  var name = component.NAME;
  EventHandler.on(document, clickEvent, "[data-bs-dismiss=\"".concat(name, "\"]"), function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    var target = getElementFromSelector(this) || this.closest(".".concat(name));
    var instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

    instance[method]();
  });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


var NAME$d = 'alert';
var DATA_KEY$c = 'bs.alert';
var EVENT_KEY$c = ".".concat(DATA_KEY$c);
var EVENT_CLOSE = "close".concat(EVENT_KEY$c);
var EVENT_CLOSED = "closed".concat(EVENT_KEY$c);
var CLASS_NAME_FADE$5 = 'fade';
var CLASS_NAME_SHOW$8 = 'show';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Alert = /*#__PURE__*/function (_BaseComponent) {
  _inherits(Alert, _BaseComponent);

  var _super = _createSuper(Alert);

  function Alert() {
    _classCallCheck(this, Alert);

    return _super.apply(this, arguments);
  }

  _createClass(Alert, [{
    key: "close",
    value: // Public
    function close() {
      var _this2 = this;

      var closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

      if (closeEvent.defaultPrevented) {
        return;
      }

      this._element.classList.remove(CLASS_NAME_SHOW$8);

      var isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

      this._queueCallback(function () {
        return _this2._destroyElement();
      }, this._element, isAnimated);
    } // Private

  }, {
    key: "_destroyElement",
    value: function _destroyElement() {
      this._element.remove();

      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    } // Static

  }], [{
    key: "NAME",
    get: // Getters
    function get() {
      return NAME$d;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Alert.getOrCreateInstance(this);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }

        data[config](this);
      });
    }
  }]);

  return Alert;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


enableDismissTrigger(Alert, 'close');
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Alert to jQuery only if jQuery is present
 */

defineJQueryPlugin(Alert);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$c = 'button';
var DATA_KEY$b = 'bs.button';
var EVENT_KEY$b = ".".concat(DATA_KEY$b);
var DATA_API_KEY$7 = '.data-api';
var CLASS_NAME_ACTIVE$3 = 'active';
var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
var EVENT_CLICK_DATA_API$6 = "click".concat(EVENT_KEY$b).concat(DATA_API_KEY$7);
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Button = /*#__PURE__*/function (_BaseComponent2) {
  _inherits(Button, _BaseComponent2);

  var _super2 = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super2.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "toggle",
    value: // Public
    function toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    } // Static

  }], [{
    key: "NAME",
    get: // Getters
    function get() {
      return NAME$c;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Button.getOrCreateInstance(this);

        if (config === 'toggle') {
          data[config]();
        }
      });
    }
  }]);

  return Button;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (event) {
  event.preventDefault();
  var button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  var data = Button.getOrCreateInstance(button);
  data.toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Button to jQuery only if jQuery is present
 */

defineJQueryPlugin(Button);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(val) {
  if (val === 'true') {
    return true;
  }

  if (val === 'false') {
    return false;
  }

  if (val === Number(val).toString()) {
    return Number(val);
  }

  if (val === '' || val === 'null') {
    return null;
  }

  return val;
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, function (chr) {
    return "-".concat(chr.toLowerCase());
  });
}

var Manipulator = {
  setDataAttribute: function setDataAttribute(element, key, value) {
    element.setAttribute("data-bs-".concat(normalizeDataKey(key)), value);
  },
  removeDataAttribute: function removeDataAttribute(element, key) {
    element.removeAttribute("data-bs-".concat(normalizeDataKey(key)));
  },
  getDataAttributes: function getDataAttributes(element) {
    if (!element) {
      return {};
    }

    var attributes = {};
    Object.keys(element.dataset).filter(function (key) {
      return key.startsWith('bs');
    }).forEach(function (key) {
      var pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    });
    return attributes;
  },
  getDataAttribute: function getDataAttribute(element, key) {
    return normalizeData(element.getAttribute("data-bs-".concat(normalizeDataKey(key))));
  },
  offset: function offset(element) {
    var rect = element.getBoundingClientRect();
    return {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset
    };
  },
  position: function position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    };
  }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var NODE_TEXT = 3;
var SelectorEngine = {
  find: function find(selector) {
    var _ref2;

    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(element, selector)));
  },
  findOne: function findOne(selector) {
    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return Element.prototype.querySelector.call(element, selector);
  },
  children: function children(element, selector) {
    var _ref3;

    return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(element.children)).filter(function (child) {
      return child.matches(selector);
    });
  },
  parents: function parents(element, selector) {
    var parents = [];
    var ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
      if (ancestor.matches(selector)) {
        parents.push(ancestor);
      }

      ancestor = ancestor.parentNode;
    }

    return parents;
  },
  prev: function prev(element, selector) {
    var previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }

      previous = previous.previousElementSibling;
    }

    return [];
  },
  next: function next(element, selector) {
    var next = element.nextElementSibling;

    while (next) {
      if (next.matches(selector)) {
        return [next];
      }

      next = next.nextElementSibling;
    }

    return [];
  },
  focusableChildren: function focusableChildren(element) {
    var focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(function (selector) {
      return "".concat(selector, ":not([tabindex^=\"-\"])");
    }).join(', ');
    return this.find(focusables, element).filter(function (el) {
      return !isDisabled(el) && isVisible(el);
    });
  }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$b = 'carousel';
var DATA_KEY$a = 'bs.carousel';
var EVENT_KEY$a = ".".concat(DATA_KEY$a);
var DATA_API_KEY$6 = '.data-api';
var ARROW_LEFT_KEY = 'ArrowLeft';
var ARROW_RIGHT_KEY = 'ArrowRight';
var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

var SWIPE_THRESHOLD = 40;
var Default$a = {
  interval: 5000,
  keyboard: true,
  slide: false,
  pause: 'hover',
  wrap: true,
  touch: true
};
var DefaultType$a = {
  interval: '(number|boolean)',
  keyboard: 'boolean',
  slide: '(boolean|string)',
  pause: '(string|boolean)',
  wrap: 'boolean',
  touch: 'boolean'
};
var ORDER_NEXT = 'next';
var ORDER_PREV = 'prev';
var DIRECTION_LEFT = 'left';
var DIRECTION_RIGHT = 'right';
var KEY_TO_DIRECTION = (_KEY_TO_DIRECTION = {}, _defineProperty(_KEY_TO_DIRECTION, ARROW_LEFT_KEY, DIRECTION_RIGHT), _defineProperty(_KEY_TO_DIRECTION, ARROW_RIGHT_KEY, DIRECTION_LEFT), _KEY_TO_DIRECTION);
var EVENT_SLIDE = "slide".concat(EVENT_KEY$a);
var EVENT_SLID = "slid".concat(EVENT_KEY$a);
var EVENT_KEYDOWN = "keydown".concat(EVENT_KEY$a);
var EVENT_MOUSEENTER = "mouseenter".concat(EVENT_KEY$a);
var EVENT_MOUSELEAVE = "mouseleave".concat(EVENT_KEY$a);
var EVENT_TOUCHSTART = "touchstart".concat(EVENT_KEY$a);
var EVENT_TOUCHMOVE = "touchmove".concat(EVENT_KEY$a);
var EVENT_TOUCHEND = "touchend".concat(EVENT_KEY$a);
var EVENT_POINTERDOWN = "pointerdown".concat(EVENT_KEY$a);
var EVENT_POINTERUP = "pointerup".concat(EVENT_KEY$a);
var EVENT_DRAG_START = "dragstart".concat(EVENT_KEY$a);
var EVENT_LOAD_DATA_API$2 = "load".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);
var EVENT_CLICK_DATA_API$5 = "click".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);
var CLASS_NAME_CAROUSEL = 'carousel';
var CLASS_NAME_ACTIVE$2 = 'active';
var CLASS_NAME_SLIDE = 'slide';
var CLASS_NAME_END = 'carousel-item-end';
var CLASS_NAME_START = 'carousel-item-start';
var CLASS_NAME_NEXT = 'carousel-item-next';
var CLASS_NAME_PREV = 'carousel-item-prev';
var CLASS_NAME_POINTER_EVENT = 'pointer-event';
var SELECTOR_ACTIVE$1 = '.active';
var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
var SELECTOR_ITEM = '.carousel-item';
var SELECTOR_ITEM_IMG = '.carousel-item img';
var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
var SELECTOR_INDICATORS = '.carousel-indicators';
var SELECTOR_INDICATOR = '[data-bs-target]';
var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
var POINTER_TYPE_TOUCH = 'touch';
var POINTER_TYPE_PEN = 'pen';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Carousel = /*#__PURE__*/function (_BaseComponent3) {
  _inherits(Carousel, _BaseComponent3);

  var _super3 = _createSuper(Carousel);

  function Carousel(element, config) {
    var _this3;

    _classCallCheck(this, Carousel);

    _this3 = _super3.call(this, element);
    _this3._items = null;
    _this3._interval = null;
    _this3._activeElement = null;
    _this3._isPaused = false;
    _this3._isSliding = false;
    _this3.touchTimeout = null;
    _this3.touchStartX = 0;
    _this3.touchDeltaX = 0;
    _this3._config = _this3._getConfig(config);
    _this3._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this3._element);
    _this3._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    _this3._pointerEvent = Boolean(window.PointerEvent);

    _this3._addEventListeners();

    return _this3;
  } // Getters


  _createClass(Carousel, [{
    key: "next",
    value: // Public
    function next() {
      this._slide(ORDER_NEXT);
    }
  }, {
    key: "nextWhenVisible",
    value: function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
  }, {
    key: "prev",
    value: function prev() {
      this._slide(ORDER_PREV);
    }
  }, {
    key: "pause",
    value: function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
        triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    }
  }, {
    key: "cycle",
    value: function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config && this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    }
  }, {
    key: "to",
    value: function to(index) {
      var _this4 = this;

      this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, function () {
          return _this4.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

      this._slide(order, this._items[index]);
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread(_objectSpread({}, Default$a), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
      typeCheckConfig(NAME$b, config, DefaultType$a);
      return config;
    }
  }, {
    key: "_handleSwipe",
    value: function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0;

      if (!direction) {
        return;
      }

      this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this5 = this;

      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN, function (event) {
          return _this5._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER, function (event) {
          return _this5.pause(event);
        });
        EventHandler.on(this._element, EVENT_MOUSELEAVE, function (event) {
          return _this5.cycle(event);
        });
      }

      if (this._config.touch && this._touchSupported) {
        this._addTouchEventListeners();
      }
    }
  }, {
    key: "_addTouchEventListeners",
    value: function _addTouchEventListeners() {
      var _this6 = this;

      var hasPointerPenTouch = function hasPointerPenTouch(event) {
        return _this6._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
      };

      var start = function start(event) {
        if (hasPointerPenTouch(event)) {
          _this6.touchStartX = event.clientX;
        } else if (!_this6._pointerEvent) {
          _this6.touchStartX = event.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        _this6.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - _this6.touchStartX;
      };

      var end = function end(event) {
        if (hasPointerPenTouch(event)) {
          _this6.touchDeltaX = event.clientX - _this6.touchStartX;
        }

        _this6._handleSwipe();

        if (_this6._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this6.pause();

          if (_this6.touchTimeout) {
            clearTimeout(_this6.touchTimeout);
          }

          _this6.touchTimeout = setTimeout(function (event) {
            return _this6.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this6._config.interval);
        }
      };

      SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (itemImg) {
        EventHandler.on(itemImg, EVENT_DRAG_START, function (event) {
          return event.preventDefault();
        });
      });

      if (this._pointerEvent) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        EventHandler.on(this._element, EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        EventHandler.on(this._element, EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    }
  }, {
    key: "_keydown",
    value: function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      var direction = KEY_TO_DIRECTION[event.key];

      if (direction) {
        event.preventDefault();

        this._slide(direction);
      }
    }
  }, {
    key: "_getItemIndex",
    value: function _getItemIndex(element) {
      this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
      return this._items.indexOf(element);
    }
  }, {
    key: "_getItemByOrder",
    value: function _getItemByOrder(order, activeElement) {
      var isNext = order === ORDER_NEXT;
      return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
    }
  }, {
    key: "_triggerSlideEvent",
    value: function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

      return EventHandler.trigger(this._element, EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
    }
  }, {
    key: "_setActiveIndicatorElement",
    value: function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
        activeIndicator.removeAttribute('aria-current');
        var indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

        for (var i = 0; i < indicators.length; i++) {
          if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
            indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
            indicators[i].setAttribute('aria-current', 'true');
            break;
          }
        }
      }
    }
  }, {
    key: "_updateInterval",
    value: function _updateInterval() {
      var element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      if (!element) {
        return;
      }

      var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }
  }, {
    key: "_slide",
    value: function _slide(directionOrOrder, element) {
      var _this7 = this;

      var order = this._directionToOrder(directionOrOrder);

      var activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || this._getItemByOrder(order, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var isNext = order === ORDER_NEXT;
      var directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      var orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

      var eventDirectionName = this._orderToDirection(order);

      if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
        this._isSliding = false;
        return;
      }

      if (this._isSliding) {
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.defaultPrevented) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;

      var triggerSlidEvent = function triggerSlidEvent() {
        EventHandler.trigger(_this7._element, EVENT_SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });
      };

      if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);

        var completeCallBack = function completeCallBack() {
          nextElement.classList.remove(directionalClassName, orderClassName);
          nextElement.classList.add(CLASS_NAME_ACTIVE$2);
          activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
          _this7._isSliding = false;
          setTimeout(triggerSlidEvent, 0);
        };

        this._queueCallback(completeCallBack, activeElement, true);
      } else {
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        this._isSliding = false;
        triggerSlidEvent();
      }

      if (isCycling) {
        this.cycle();
      }
    }
  }, {
    key: "_directionToOrder",
    value: function _directionToOrder(direction) {
      if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
        return direction;
      }

      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }

      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
  }, {
    key: "_orderToDirection",
    value: function _orderToDirection(order) {
      if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
        return order;
      }

      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }

      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$a;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$b;
    }
  }, {
    key: "carouselInterface",
    value: function carouselInterface(element, config) {
      var data = Carousel.getOrCreateInstance(element, config);
      var _config = data._config;

      if (_typeof(config) === 'object') {
        _config = _objectSpread(_objectSpread({}, _config), config);
      }

      var action = typeof config === 'string' ? config : _config.slide;

      if (typeof config === 'number') {
        data.to(config);
      } else if (typeof action === 'string') {
        if (typeof data[action] === 'undefined') {
          throw new TypeError("No method named \"".concat(action, "\""));
        }

        data[action]();
      } else if (_config.interval && _config.ride) {
        data.pause();
        data.cycle();
      }
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        Carousel.carouselInterface(this, config);
      });
    }
  }, {
    key: "dataApiClickHandler",
    value: function dataApiClickHandler(event) {
      var target = getElementFromSelector(this);

      if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _objectSpread(_objectSpread({}, Manipulator.getDataAttributes(target)), Manipulator.getDataAttributes(this));

      var slideIndex = this.getAttribute('data-bs-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel.carouselInterface(target, config);

      if (slideIndex) {
        Carousel.getInstance(target).to(slideIndex);
      }

      event.preventDefault();
    }
  }]);

  return Carousel;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
  var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

  for (var i = 0, len = carousels.length; i < len; i++) {
    Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
  }
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */

defineJQueryPlugin(Carousel);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$a = 'collapse';
var DATA_KEY$9 = 'bs.collapse';
var EVENT_KEY$9 = ".".concat(DATA_KEY$9);
var DATA_API_KEY$5 = '.data-api';
var Default$9 = {
  toggle: true,
  parent: null
};
var DefaultType$9 = {
  toggle: 'boolean',
  parent: '(null|element)'
};
var EVENT_SHOW$5 = "show".concat(EVENT_KEY$9);
var EVENT_SHOWN$5 = "shown".concat(EVENT_KEY$9);
var EVENT_HIDE$5 = "hide".concat(EVENT_KEY$9);
var EVENT_HIDDEN$5 = "hidden".concat(EVENT_KEY$9);
var EVENT_CLICK_DATA_API$4 = "click".concat(EVENT_KEY$9).concat(DATA_API_KEY$5);
var CLASS_NAME_SHOW$7 = 'show';
var CLASS_NAME_COLLAPSE = 'collapse';
var CLASS_NAME_COLLAPSING = 'collapsing';
var CLASS_NAME_COLLAPSED = 'collapsed';
var CLASS_NAME_DEEPER_CHILDREN = ":scope .".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE);
var CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
var WIDTH = 'width';
var HEIGHT = 'height';
var SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Collapse = /*#__PURE__*/function (_BaseComponent4) {
  _inherits(Collapse, _BaseComponent4);

  var _super4 = _createSuper(Collapse);

  function Collapse(element, config) {
    var _this8;

    _classCallCheck(this, Collapse);

    _this8 = _super4.call(this, element);
    _this8._isTransitioning = false;
    _this8._config = _this8._getConfig(config);
    _this8._triggerArray = [];
    var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

    for (var i = 0, len = toggleList.length; i < len; i++) {
      var elem = toggleList[i];
      var selector = getSelectorFromElement(elem);
      var filterElement = SelectorEngine.find(selector).filter(function (foundElem) {
        return foundElem === _this8._element;
      });

      if (selector !== null && filterElement.length) {
        _this8._selector = selector;

        _this8._triggerArray.push(elem);
      }
    }

    _this8._initializeChildren();

    if (!_this8._config.parent) {
      _this8._addAriaAndCollapsedClass(_this8._triggerArray, _this8._isShown());
    }

    if (_this8._config.toggle) {
      _this8.toggle();
    }

    return _this8;
  } // Getters


  _createClass(Collapse, [{
    key: "toggle",
    value: // Public
    function toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: "show",
    value: function show() {
      var _this9 = this;

      if (this._isTransitioning || this._isShown()) {
        return;
      }

      var actives = [];
      var activesData;

      if (this._config.parent) {
        var children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
        actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(function (elem) {
          return !children.includes(elem);
        }); // remove children if greater depth
      }

      var container = SelectorEngine.findOne(this._selector);

      if (actives.length) {
        var tempActiveData = actives.find(function (elem) {
          return container !== elem;
        });
        activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

      if (startEvent.defaultPrevented) {
        return;
      }

      actives.forEach(function (elemActive) {
        if (container !== elemActive) {
          Collapse.getOrCreateInstance(elemActive, {
            toggle: false
          }).hide();
        }

        if (!activesData) {
          Data.set(elemActive, DATA_KEY$9, null);
        }
      });

      var dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      this._addAriaAndCollapsedClass(this._triggerArray, true);

      this._isTransitioning = true;

      var complete = function complete() {
        _this9._isTransitioning = false;

        _this9._element.classList.remove(CLASS_NAME_COLLAPSING);

        _this9._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

        _this9._element.style[dimension] = '';
        EventHandler.trigger(_this9._element, EVENT_SHOWN$5);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll".concat(capitalizedDimension);

      this._queueCallback(complete, this._element, true);

      this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this10 = this;

      if (this._isTransitioning || !this._isShown()) {
        return;
      }

      var startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

      if (startEvent.defaultPrevented) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
      reflow(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

      var triggerArrayLength = this._triggerArray.length;

      for (var i = 0; i < triggerArrayLength; i++) {
        var trigger = this._triggerArray[i];
        var elem = getElementFromSelector(trigger);

        if (elem && !this._isShown(elem)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }

      this._isTransitioning = true;

      var complete = function complete() {
        _this10._isTransitioning = false;

        _this10._element.classList.remove(CLASS_NAME_COLLAPSING);

        _this10._element.classList.add(CLASS_NAME_COLLAPSE);

        EventHandler.trigger(_this10._element, EVENT_HIDDEN$5);
      };

      this._element.style[dimension] = '';

      this._queueCallback(complete, this._element, true);
    }
  }, {
    key: "_isShown",
    value: function _isShown() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
      return element.classList.contains(CLASS_NAME_SHOW$7);
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread(_objectSpread({}, Default$9), Manipulator.getDataAttributes(this._element)), config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      config.parent = getElement(config.parent);
      typeCheckConfig(NAME$a, config, DefaultType$9);
      return config;
    }
  }, {
    key: "_getDimension",
    value: function _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
  }, {
    key: "_initializeChildren",
    value: function _initializeChildren() {
      var _this11 = this;

      if (!this._config.parent) {
        return;
      }

      var children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(function (elem) {
        return !children.includes(elem);
      }).forEach(function (element) {
        var selected = getElementFromSelector(element);

        if (selected) {
          _this11._addAriaAndCollapsedClass([element], _this11._isShown(selected));
        }
      });
    }
  }, {
    key: "_addAriaAndCollapsedClass",
    value: function _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }

      triggerArray.forEach(function (elem) {
        if (isOpen) {
          elem.classList.remove(CLASS_NAME_COLLAPSED);
        } else {
          elem.classList.add(CLASS_NAME_COLLAPSED);
        }

        elem.setAttribute('aria-expanded', isOpen);
      });
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$9;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$a;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var _config = {};

        if (typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        var data = Collapse.getOrCreateInstance(this, _config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        }
      });
    }
  }]);

  return Collapse;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
    event.preventDefault();
  }

  var selector = getSelectorFromElement(this);
  var selectorElements = SelectorEngine.find(selector);
  selectorElements.forEach(function (element) {
    Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Collapse to jQuery only if jQuery is present
 */

defineJQueryPlugin(Collapse);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$9 = 'dropdown';
var DATA_KEY$8 = 'bs.dropdown';
var EVENT_KEY$8 = ".".concat(DATA_KEY$8);
var DATA_API_KEY$4 = '.data-api';
var ESCAPE_KEY$2 = 'Escape';
var SPACE_KEY = 'Space';
var TAB_KEY$1 = 'Tab';
var ARROW_UP_KEY = 'ArrowUp';
var ARROW_DOWN_KEY = 'ArrowDown';
var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

var REGEXP_KEYDOWN = new RegExp("".concat(ARROW_UP_KEY, "|").concat(ARROW_DOWN_KEY, "|").concat(ESCAPE_KEY$2));
var EVENT_HIDE$4 = "hide".concat(EVENT_KEY$8);
var EVENT_HIDDEN$4 = "hidden".concat(EVENT_KEY$8);
var EVENT_SHOW$4 = "show".concat(EVENT_KEY$8);
var EVENT_SHOWN$4 = "shown".concat(EVENT_KEY$8);
var EVENT_CLICK_DATA_API$3 = "click".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
var EVENT_KEYDOWN_DATA_API = "keydown".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
var EVENT_KEYUP_DATA_API = "keyup".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
var CLASS_NAME_SHOW$6 = 'show';
var CLASS_NAME_DROPUP = 'dropup';
var CLASS_NAME_DROPEND = 'dropend';
var CLASS_NAME_DROPSTART = 'dropstart';
var CLASS_NAME_NAVBAR = 'navbar';
var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
var SELECTOR_MENU = '.dropdown-menu';
var SELECTOR_NAVBAR_NAV = '.navbar-nav';
var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
var PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
var PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
var PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
var PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
var PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
var PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
var Default$8 = {
  offset: [0, 2],
  boundary: 'clippingParents',
  reference: 'toggle',
  display: 'dynamic',
  popperConfig: null,
  autoClose: true
};
var DefaultType$8 = {
  offset: '(array|string|function)',
  boundary: '(string|element)',
  reference: '(string|element|object)',
  display: 'string',
  popperConfig: '(null|object|function)',
  autoClose: '(boolean|string)'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Dropdown = /*#__PURE__*/function (_BaseComponent5) {
  _inherits(Dropdown, _BaseComponent5);

  var _super5 = _createSuper(Dropdown);

  function Dropdown(element, config) {
    var _this12;

    _classCallCheck(this, Dropdown);

    _this12 = _super5.call(this, element);
    _this12._popper = null;
    _this12._config = _this12._getConfig(config);
    _this12._menu = _this12._getMenuElement();
    _this12._inNavbar = _this12._detectNavbar();
    return _this12;
  } // Getters


  _createClass(Dropdown, [{
    key: "toggle",
    value: // Public
    function toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
  }, {
    key: "show",
    value: function show() {
      if (isDisabled(this._element) || this._isShown(this._menu)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

      if (showEvent.defaultPrevented) {
        return;
      }

      var parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

      if (this._inNavbar) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'none');
      } else {
        this._createPopper(parent);
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
        var _ref4;

        (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (elem) {
          return EventHandler.on(elem, 'mouseover', noop);
        });
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      this._menu.classList.add(CLASS_NAME_SHOW$6);

      this._element.classList.add(CLASS_NAME_SHOW$6);

      EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
    }
  }, {
    key: "hide",
    value: function hide() {
      if (isDisabled(this._element) || !this._isShown(this._menu)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };

      this._completeHide(relatedTarget);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this._popper) {
        this._popper.destroy();
      }

      _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
    }
  }, {
    key: "update",
    value: function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper) {
        this._popper.update();
      }
    } // Private

  }, {
    key: "_completeHide",
    value: function _completeHide(relatedTarget) {
      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

      if (hideEvent.defaultPrevented) {
        return;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support


      if ('ontouchstart' in document.documentElement) {
        var _ref5;

        (_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children)).forEach(function (elem) {
          return EventHandler.off(elem, 'mouseover', noop);
        });
      }

      if (this._popper) {
        this._popper.destroy();
      }

      this._menu.classList.remove(CLASS_NAME_SHOW$6);

      this._element.classList.remove(CLASS_NAME_SHOW$6);

      this._element.setAttribute('aria-expanded', 'false');

      Manipulator.removeDataAttribute(this._menu, 'popper');
      EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), Manipulator.getDataAttributes(this._element)), config);
      typeCheckConfig(NAME$9, config, this.constructor.DefaultType);

      if (_typeof(config.reference) === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError("".concat(NAME$9.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
      }

      return config;
    }
  }, {
    key: "_createPopper",
    value: function _createPopper(parent) {
      if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
      }

      var referenceElement = this._element;

      if (this._config.reference === 'parent') {
        referenceElement = parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (_typeof(this._config.reference) === 'object') {
        referenceElement = this._config.reference;
      }

      var popperConfig = this._getPopperConfig();

      var isDisplayStatic = popperConfig.modifiers.find(function (modifier) {
        return modifier.name === 'applyStyles' && modifier.enabled === false;
      });
      this._popper = _popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"](referenceElement, this._menu, popperConfig);

      if (isDisplayStatic) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'static');
      }
    }
  }, {
    key: "_isShown",
    value: function _isShown() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
      return element.classList.contains(CLASS_NAME_SHOW$6);
    }
  }, {
    key: "_getMenuElement",
    value: function _getMenuElement() {
      return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    }
  }, {
    key: "_getPlacement",
    value: function _getPlacement() {
      var parentDropdown = this._element.parentNode;

      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      } // We need to trim the value because custom properties can also include spaces


      var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }

      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
  }, {
    key: "_detectNavbar",
    value: function _detectNavbar() {
      return this._element.closest(".".concat(CLASS_NAME_NAVBAR)) !== null;
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this13 = this;

      var offset = this._config.offset;

      if (typeof offset === 'string') {
        return offset.split(',').map(function (val) {
          return Number.parseInt(val, 10);
        });
      }

      if (typeof offset === 'function') {
        return function (popperData) {
          return offset(popperData, _this13._element);
        };
      }

      return offset;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig() {
      var defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }

      return _objectSpread(_objectSpread({}, defaultBsPopperConfig), typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
    }
  }, {
    key: "_selectMenuItem",
    value: function _selectMenuItem(_ref6) {
      var key = _ref6.key,
          target = _ref6.target;
      var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);

      if (!items.length) {
        return;
      } // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY


      getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$8;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$8;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$9;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Dropdown.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }

        data[config]();
      });
    }
  }, {
    key: "clearMenus",
    value: function clearMenus(event) {
      if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1)) {
        return;
      }

      var toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

      for (var i = 0, len = toggles.length; i < len; i++) {
        var context = Dropdown.getInstance(toggles[i]);

        if (!context || context._config.autoClose === false) {
          continue;
        }

        if (!context._isShown()) {
          continue;
        }

        var relatedTarget = {
          relatedTarget: context._element
        };

        if (event) {
          var composedPath = event.composedPath();
          var isMenuTarget = composedPath.includes(context._menu);

          if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
            continue;
          } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


          if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
            continue;
          }

          if (event.type === 'click') {
            relatedTarget.clickEvent = event;
          }
        }

        context._completeHide(relatedTarget);
      }
    }
  }, {
    key: "getParentFromElement",
    value: function getParentFromElement(element) {
      return getElementFromSelector(element) || element.parentNode;
    }
  }, {
    key: "dataApiKeydownHandler",
    value: function dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
        return;
      }

      var isActive = this.classList.contains(CLASS_NAME_SHOW$6);

      if (!isActive && event.key === ESCAPE_KEY$2) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (isDisabled(this)) {
        return;
      }

      var getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
      var instance = Dropdown.getOrCreateInstance(getToggleButton);

      if (event.key === ESCAPE_KEY$2) {
        instance.hide();
        return;
      }

      if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
        if (!isActive) {
          instance.show();
        }

        instance._selectMenuItem(event);

        return;
      }

      if (!isActive || event.key === SPACE_KEY) {
        Dropdown.clearMenus();
      }
    }
  }]);

  return Dropdown;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
  event.preventDefault();
  Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Dropdown to jQuery only if jQuery is present
 */

defineJQueryPlugin(Dropdown);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
var SELECTOR_STICKY_CONTENT = '.sticky-top';

var ScrollBarHelper = /*#__PURE__*/function () {
  function ScrollBarHelper() {
    _classCallCheck(this, ScrollBarHelper);

    this._element = document.body;
  }

  _createClass(ScrollBarHelper, [{
    key: "getWidth",
    value: function getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      var documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
  }, {
    key: "hide",
    value: function hide() {
      var width = this.getWidth();

      this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


      this._setElementAttributes(this._element, 'paddingRight', function (calculatedValue) {
        return calculatedValue + width;
      }); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


      this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', function (calculatedValue) {
        return calculatedValue + width;
      });

      this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', function (calculatedValue) {
        return calculatedValue - width;
      });
    }
  }, {
    key: "_disableOverFlow",
    value: function _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');

      this._element.style.overflow = 'hidden';
    }
  }, {
    key: "_setElementAttributes",
    value: function _setElementAttributes(selector, styleProp, callback) {
      var _this14 = this;

      var scrollbarWidth = this.getWidth();

      var manipulationCallBack = function manipulationCallBack(element) {
        if (element !== _this14._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }

        _this14._saveInitialAttribute(element, styleProp);

        var calculatedValue = window.getComputedStyle(element)[styleProp];
        element.style[styleProp] = "".concat(callback(Number.parseFloat(calculatedValue)), "px");
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }
  }, {
    key: "reset",
    value: function reset() {
      this._resetElementAttributes(this._element, 'overflow');

      this._resetElementAttributes(this._element, 'paddingRight');

      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
    }
  }, {
    key: "_saveInitialAttribute",
    value: function _saveInitialAttribute(element, styleProp) {
      var actualValue = element.style[styleProp];

      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProp, actualValue);
      }
    }
  }, {
    key: "_resetElementAttributes",
    value: function _resetElementAttributes(selector, styleProp) {
      var manipulationCallBack = function manipulationCallBack(element) {
        var value = Manipulator.getDataAttribute(element, styleProp);

        if (typeof value === 'undefined') {
          element.style.removeProperty(styleProp);
        } else {
          Manipulator.removeDataAttribute(element, styleProp);
          element.style[styleProp] = value;
        }
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }
  }, {
    key: "_applyManipulationCallback",
    value: function _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
      } else {
        SelectorEngine.find(selector, this._element).forEach(callBack);
      }
    }
  }, {
    key: "isOverflowing",
    value: function isOverflowing() {
      return this.getWidth() > 0;
    }
  }]);

  return ScrollBarHelper;
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


var Default$7 = {
  className: 'modal-backdrop',
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  isAnimated: false,
  rootElement: 'body',
  // give the choice to place backdrop under different elements
  clickCallback: null
};
var DefaultType$7 = {
  className: 'string',
  isVisible: 'boolean',
  isAnimated: 'boolean',
  rootElement: '(element|string)',
  clickCallback: '(function|null)'
};
var NAME$8 = 'backdrop';
var CLASS_NAME_FADE$4 = 'fade';
var CLASS_NAME_SHOW$5 = 'show';
var EVENT_MOUSEDOWN = "mousedown.bs.".concat(NAME$8);

var Backdrop = /*#__PURE__*/function () {
  function Backdrop(config) {
    _classCallCheck(this, Backdrop);

    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  }

  _createClass(Backdrop, [{
    key: "show",
    value: function show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._append();

      if (this._config.isAnimated) {
        reflow(this._getElement());
      }

      this._getElement().classList.add(CLASS_NAME_SHOW$5);

      this._emulateAnimation(function () {
        execute(callback);
      });
    }
  }, {
    key: "hide",
    value: function hide(callback) {
      var _this15 = this;

      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._getElement().classList.remove(CLASS_NAME_SHOW$5);

      this._emulateAnimation(function () {
        _this15.dispose();

        execute(callback);
      });
    } // Private

  }, {
    key: "_getElement",
    value: function _getElement() {
      if (!this._element) {
        var backdrop = document.createElement('div');
        backdrop.className = this._config.className;

        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }

        this._element = backdrop;
      }

      return this._element;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread({}, Default$7), _typeof(config) === 'object' ? config : {}); // use getElement() with the default "body" to get a fresh Element on each instantiation

      config.rootElement = getElement(config.rootElement);
      typeCheckConfig(NAME$8, config, DefaultType$7);
      return config;
    }
  }, {
    key: "_append",
    value: function _append() {
      var _this16 = this;

      if (this._isAppended) {
        return;
      }

      this._config.rootElement.append(this._getElement());

      EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, function () {
        execute(_this16._config.clickCallback);
      });
      this._isAppended = true;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (!this._isAppended) {
        return;
      }

      EventHandler.off(this._element, EVENT_MOUSEDOWN);

      this._element.remove();

      this._isAppended = false;
    }
  }, {
    key: "_emulateAnimation",
    value: function _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  }]);

  return Backdrop;
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


var Default$6 = {
  trapElement: null,
  // The element to trap focus inside of
  autofocus: true
};
var DefaultType$6 = {
  trapElement: 'element',
  autofocus: 'boolean'
};
var NAME$7 = 'focustrap';
var DATA_KEY$7 = 'bs.focustrap';
var EVENT_KEY$7 = ".".concat(DATA_KEY$7);
var EVENT_FOCUSIN$1 = "focusin".concat(EVENT_KEY$7);
var EVENT_KEYDOWN_TAB = "keydown.tab".concat(EVENT_KEY$7);
var TAB_KEY = 'Tab';
var TAB_NAV_FORWARD = 'forward';
var TAB_NAV_BACKWARD = 'backward';

var FocusTrap = /*#__PURE__*/function () {
  function FocusTrap(config) {
    _classCallCheck(this, FocusTrap);

    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
  }

  _createClass(FocusTrap, [{
    key: "activate",
    value: function activate() {
      var _this17 = this;

      var _this$_config = this._config,
          trapElement = _this$_config.trapElement,
          autofocus = _this$_config.autofocus;

      if (this._isActive) {
        return;
      }

      if (autofocus) {
        trapElement.focus();
      }

      EventHandler.off(document, EVENT_KEY$7); // guard against infinite focus loop

      EventHandler.on(document, EVENT_FOCUSIN$1, function (event) {
        return _this17._handleFocusin(event);
      });
      EventHandler.on(document, EVENT_KEYDOWN_TAB, function (event) {
        return _this17._handleKeydown(event);
      });
      this._isActive = true;
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      if (!this._isActive) {
        return;
      }

      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$7);
    } // Private

  }, {
    key: "_handleFocusin",
    value: function _handleFocusin(event) {
      var target = event.target;
      var trapElement = this._config.trapElement;

      if (target === document || target === trapElement || trapElement.contains(target)) {
        return;
      }

      var elements = SelectorEngine.focusableChildren(trapElement);

      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }

      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread({}, Default$6), _typeof(config) === 'object' ? config : {});
      typeCheckConfig(NAME$7, config, DefaultType$6);
      return config;
    }
  }]);

  return FocusTrap;
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


var NAME$6 = 'modal';
var DATA_KEY$6 = 'bs.modal';
var EVENT_KEY$6 = ".".concat(DATA_KEY$6);
var DATA_API_KEY$3 = '.data-api';
var ESCAPE_KEY$1 = 'Escape';
var Default$5 = {
  backdrop: true,
  keyboard: true,
  focus: true
};
var DefaultType$5 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  focus: 'boolean'
};
var EVENT_HIDE$3 = "hide".concat(EVENT_KEY$6);
var EVENT_HIDE_PREVENTED = "hidePrevented".concat(EVENT_KEY$6);
var EVENT_HIDDEN$3 = "hidden".concat(EVENT_KEY$6);
var EVENT_SHOW$3 = "show".concat(EVENT_KEY$6);
var EVENT_SHOWN$3 = "shown".concat(EVENT_KEY$6);
var EVENT_RESIZE = "resize".concat(EVENT_KEY$6);
var EVENT_CLICK_DISMISS = "click.dismiss".concat(EVENT_KEY$6);
var EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss".concat(EVENT_KEY$6);
var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss".concat(EVENT_KEY$6);
var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss".concat(EVENT_KEY$6);
var EVENT_CLICK_DATA_API$2 = "click".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
var CLASS_NAME_OPEN = 'modal-open';
var CLASS_NAME_FADE$3 = 'fade';
var CLASS_NAME_SHOW$4 = 'show';
var CLASS_NAME_STATIC = 'modal-static';
var OPEN_SELECTOR$1 = '.modal.show';
var SELECTOR_DIALOG = '.modal-dialog';
var SELECTOR_MODAL_BODY = '.modal-body';
var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Modal = /*#__PURE__*/function (_BaseComponent6) {
  _inherits(Modal, _BaseComponent6);

  var _super6 = _createSuper(Modal);

  function Modal(element, config) {
    var _this18;

    _classCallCheck(this, Modal);

    _this18 = _super6.call(this, element);
    _this18._config = _this18._getConfig(config);
    _this18._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, _this18._element);
    _this18._backdrop = _this18._initializeBackDrop();
    _this18._focustrap = _this18._initializeFocusTrap();
    _this18._isShown = false;
    _this18._ignoreBackdropClick = false;
    _this18._isTransitioning = false;
    _this18._scrollBar = new ScrollBarHelper();
    return _this18;
  } // Getters


  _createClass(Modal, [{
    key: "toggle",
    value: // Public
    function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
  }, {
    key: "show",
    value: function show(relatedTarget) {
      var _this19 = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget: relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;

      if (this._isAnimated()) {
        this._isTransitioning = true;
      }

      this._scrollBar.hide();

      document.body.classList.add(CLASS_NAME_OPEN);

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
        EventHandler.one(_this19._element, EVENT_MOUSEUP_DISMISS, function (event) {
          if (event.target === _this19._element) {
            _this19._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this19._showElement(relatedTarget);
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this20 = this;

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._isShown = false;

      var isAnimated = this._isAnimated();

      if (isAnimated) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      this._focustrap.deactivate();

      this._element.classList.remove(CLASS_NAME_SHOW$4);

      EventHandler.off(this._element, EVENT_CLICK_DISMISS);
      EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

      this._queueCallback(function () {
        return _this20._hideModal();
      }, this._element, isAnimated);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      [window, this._dialog].forEach(function (htmlElement) {
        return EventHandler.off(htmlElement, EVENT_KEY$6);
      });

      this._backdrop.dispose();

      this._focustrap.deactivate();

      _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this);
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate() {
      this._adjustDialog();
    } // Private

  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value
        isAnimated: this._isAnimated()
      });
    }
  }, {
    key: "_initializeFocusTrap",
    value: function _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread(_objectSpread({}, Default$5), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
      typeCheckConfig(NAME$6, config, DefaultType$5);
      return config;
    }
  }, {
    key: "_showElement",
    value: function _showElement(relatedTarget) {
      var _this21 = this;

      var isAnimated = this._isAnimated();

      var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.append(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.scrollTop = 0;

      if (modalBody) {
        modalBody.scrollTop = 0;
      }

      if (isAnimated) {
        reflow(this._element);
      }

      this._element.classList.add(CLASS_NAME_SHOW$4);

      var transitionComplete = function transitionComplete() {
        if (_this21._config.focus) {
          _this21._focustrap.activate();
        }

        _this21._isTransitioning = false;
        EventHandler.trigger(_this21._element, EVENT_SHOWN$3, {
          relatedTarget: relatedTarget
        });
      };

      this._queueCallback(transitionComplete, this._dialog, isAnimated);
    }
  }, {
    key: "_setEscapeEvent",
    value: function _setEscapeEvent() {
      var _this22 = this;

      if (this._isShown) {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, function (event) {
          if (_this22._config.keyboard && event.key === ESCAPE_KEY$1) {
            event.preventDefault();

            _this22.hide();
          } else if (!_this22._config.keyboard && event.key === ESCAPE_KEY$1) {
            _this22._triggerBackdropTransition();
          }
        });
      } else {
        EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
      }
    }
  }, {
    key: "_setResizeEvent",
    value: function _setResizeEvent() {
      var _this23 = this;

      if (this._isShown) {
        EventHandler.on(window, EVENT_RESIZE, function () {
          return _this23._adjustDialog();
        });
      } else {
        EventHandler.off(window, EVENT_RESIZE);
      }
    }
  }, {
    key: "_hideModal",
    value: function _hideModal() {
      var _this24 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._backdrop.hide(function () {
        document.body.classList.remove(CLASS_NAME_OPEN);

        _this24._resetAdjustments();

        _this24._scrollBar.reset();

        EventHandler.trigger(_this24._element, EVENT_HIDDEN$3);
      });
    }
  }, {
    key: "_showBackdrop",
    value: function _showBackdrop(callback) {
      var _this25 = this;

      EventHandler.on(this._element, EVENT_CLICK_DISMISS, function (event) {
        if (_this25._ignoreBackdropClick) {
          _this25._ignoreBackdropClick = false;
          return;
        }

        if (event.target !== event.currentTarget) {
          return;
        }

        if (_this25._config.backdrop === true) {
          _this25.hide();
        } else if (_this25._config.backdrop === 'static') {
          _this25._triggerBackdropTransition();
        }
      });

      this._backdrop.show(callback);
    }
  }, {
    key: "_isAnimated",
    value: function _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
  }, {
    key: "_triggerBackdropTransition",
    value: function _triggerBackdropTransition() {
      var _this26 = this;

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

      if (hideEvent.defaultPrevented) {
        return;
      }

      var _this$_element = this._element,
          classList = _this$_element.classList,
          scrollHeight = _this$_element.scrollHeight,
          style = _this$_element.style;
      var isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

      if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) {
        return;
      }

      if (!isModalOverflowing) {
        style.overflowY = 'hidden';
      }

      classList.add(CLASS_NAME_STATIC);

      this._queueCallback(function () {
        classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          _this26._queueCallback(function () {
            style.overflowY = '';
          }, _this26._dialog);
        }
      }, this._dialog);

      this._element.focus();
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------

  }, {
    key: "_adjustDialog",
    value: function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      var scrollbarWidth = this._scrollBar.getWidth();

      var isBodyOverflowing = scrollbarWidth > 0;

      if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
        this._element.style.paddingLeft = "".concat(scrollbarWidth, "px");
      }

      if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
        this._element.style.paddingRight = "".concat(scrollbarWidth, "px");
      }
    }
  }, {
    key: "_resetAdjustments",
    value: function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$5;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$6;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = Modal.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }

        data[config](relatedTarget);
      });
    }
  }]);

  return Modal;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
  var _this27 = this;

  var target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  EventHandler.one(target, EVENT_SHOW$3, function (showEvent) {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$3, function () {
      if (isVisible(_this27)) {
        _this27.focus();
      }
    });
  }); // avoid conflict when clicking moddal toggler while another one is open

  var allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

  if (allReadyOpen) {
    Modal.getInstance(allReadyOpen).hide();
  }

  var data = Modal.getOrCreateInstance(target);
  data.toggle(this);
});
enableDismissTrigger(Modal);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Modal to jQuery only if jQuery is present
 */

defineJQueryPlugin(Modal);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$5 = 'offcanvas';
var DATA_KEY$5 = 'bs.offcanvas';
var EVENT_KEY$5 = ".".concat(DATA_KEY$5);
var DATA_API_KEY$2 = '.data-api';
var EVENT_LOAD_DATA_API$1 = "load".concat(EVENT_KEY$5).concat(DATA_API_KEY$2);
var ESCAPE_KEY = 'Escape';
var Default$4 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
var DefaultType$4 = {
  backdrop: 'boolean',
  keyboard: 'boolean',
  scroll: 'boolean'
};
var CLASS_NAME_SHOW$3 = 'show';
var CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
var OPEN_SELECTOR = '.offcanvas.show';
var EVENT_SHOW$2 = "show".concat(EVENT_KEY$5);
var EVENT_SHOWN$2 = "shown".concat(EVENT_KEY$5);
var EVENT_HIDE$2 = "hide".concat(EVENT_KEY$5);
var EVENT_HIDDEN$2 = "hidden".concat(EVENT_KEY$5);
var EVENT_CLICK_DATA_API$1 = "click".concat(EVENT_KEY$5).concat(DATA_API_KEY$2);
var EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(EVENT_KEY$5);
var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Offcanvas = /*#__PURE__*/function (_BaseComponent7) {
  _inherits(Offcanvas, _BaseComponent7);

  var _super7 = _createSuper(Offcanvas);

  function Offcanvas(element, config) {
    var _this28;

    _classCallCheck(this, Offcanvas);

    _this28 = _super7.call(this, element);
    _this28._config = _this28._getConfig(config);
    _this28._isShown = false;
    _this28._backdrop = _this28._initializeBackDrop();
    _this28._focustrap = _this28._initializeFocusTrap();

    _this28._addEventListeners();

    return _this28;
  } // Getters


  _createClass(Offcanvas, [{
    key: "toggle",
    value: // Public
    function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
  }, {
    key: "show",
    value: function show(relatedTarget) {
      var _this29 = this;

      if (this._isShown) {
        return;
      }

      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;
      this._element.style.visibility = 'visible';

      this._backdrop.show();

      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.classList.add(CLASS_NAME_SHOW$3);

      var completeCallBack = function completeCallBack() {
        if (!_this29._config.scroll) {
          _this29._focustrap.activate();
        }

        EventHandler.trigger(_this29._element, EVENT_SHOWN$2, {
          relatedTarget: relatedTarget
        });
      };

      this._queueCallback(completeCallBack, this._element, true);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this30 = this;

      if (!this._isShown) {
        return;
      }

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._focustrap.deactivate();

      this._element.blur();

      this._isShown = false;

      this._element.classList.remove(CLASS_NAME_SHOW$3);

      this._backdrop.hide();

      var completeCallback = function completeCallback() {
        _this30._element.setAttribute('aria-hidden', true);

        _this30._element.removeAttribute('aria-modal');

        _this30._element.removeAttribute('role');

        _this30._element.style.visibility = 'hidden';

        if (!_this30._config.scroll) {
          new ScrollBarHelper().reset();
        }

        EventHandler.trigger(_this30._element, EVENT_HIDDEN$2);
      };

      this._queueCallback(completeCallback, this._element, true);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._backdrop.dispose();

      this._focustrap.deactivate();

      _get(_getPrototypeOf(Offcanvas.prototype), "dispose", this).call(this);
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread(_objectSpread({}, Default$4), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
      typeCheckConfig(NAME$5, config, DefaultType$4);
      return config;
    }
  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      var _this31 = this;

      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: this._config.backdrop,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: function clickCallback() {
          return _this31.hide();
        }
      });
    }
  }, {
    key: "_initializeFocusTrap",
    value: function _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this32 = this;

      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
        if (_this32._config.keyboard && event.key === ESCAPE_KEY) {
          _this32.hide();
        }
      });
    } // Static

  }], [{
    key: "NAME",
    get: function get() {
      return NAME$5;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$4;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Offcanvas.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }

        data[config](this);
      });
    }
  }]);

  return Offcanvas;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
  var _this33 = this;

  var target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return;
  }

  EventHandler.one(target, EVENT_HIDDEN$2, function () {
    // focus on trigger when it is closed
    if (isVisible(_this33)) {
      _this33.focus();
    }
  }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

  var allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

  if (allReadyOpen && allReadyOpen !== target) {
    Offcanvas.getInstance(allReadyOpen).hide();
  }

  var data = Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
  return SelectorEngine.find(OPEN_SELECTOR).forEach(function (el) {
    return Offcanvas.getOrCreateInstance(el).show();
  });
});
enableDismissTrigger(Offcanvas);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(Offcanvas);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */

var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */

var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

var allowedAttribute = function allowedAttribute(attribute, allowedAttributeList) {
  var attributeName = attribute.nodeName.toLowerCase();

  if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
    }

    return true;
  }

  var regExp = allowedAttributeList.filter(function (attributeRegex) {
    return attributeRegex instanceof RegExp;
  }); // Check if a regular expression validates the attribute.

  for (var i = 0, len = regExp.length; i < len; i++) {
    if (regExp[i].test(attributeName)) {
      return true;
    }
  }

  return false;
};

var DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};

function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
  var _ref7;

  if (!unsafeHtml.length) {
    return unsafeHtml;
  }

  if (sanitizeFn && typeof sanitizeFn === 'function') {
    return sanitizeFn(unsafeHtml);
  }

  var domParser = new window.DOMParser();
  var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');

  var elements = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(createdDocument.body.querySelectorAll('*')));

  var _loop = function _loop(i, len) {
    var _ref8;

    var element = elements[i];
    var elementName = element.nodeName.toLowerCase();

    if (!Object.keys(allowList).includes(elementName)) {
      element.remove();
      return "continue";
    }

    var attributeList = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(element.attributes));

    var allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
    attributeList.forEach(function (attribute) {
      if (!allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName);
      }
    });
  };

  for (var i = 0, len = elements.length; i < len; i++) {
    var _ret = _loop(i, len);

    if (_ret === "continue") continue;
  }

  return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


var NAME$4 = 'tooltip';
var DATA_KEY$4 = 'bs.tooltip';
var EVENT_KEY$4 = ".".concat(DATA_KEY$4);
var CLASS_PREFIX$1 = 'bs-tooltip';
var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
var DefaultType$3 = {
  animation: 'boolean',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string',
  delay: '(number|object)',
  html: 'boolean',
  selector: '(string|boolean)',
  placement: '(string|function)',
  offset: '(array|string|function)',
  container: '(string|element|boolean)',
  fallbackPlacements: 'array',
  boundary: '(string|element)',
  customClass: '(string|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  allowList: 'object',
  popperConfig: '(null|object|function)'
};
var AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: isRTL() ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: isRTL() ? 'right' : 'left'
};
var Default$3 = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  selector: false,
  placement: 'top',
  offset: [0, 0],
  container: false,
  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
  boundary: 'clippingParents',
  customClass: '',
  sanitize: true,
  sanitizeFn: null,
  allowList: DefaultAllowlist,
  popperConfig: null
};
var Event$2 = {
  HIDE: "hide".concat(EVENT_KEY$4),
  HIDDEN: "hidden".concat(EVENT_KEY$4),
  SHOW: "show".concat(EVENT_KEY$4),
  SHOWN: "shown".concat(EVENT_KEY$4),
  INSERTED: "inserted".concat(EVENT_KEY$4),
  CLICK: "click".concat(EVENT_KEY$4),
  FOCUSIN: "focusin".concat(EVENT_KEY$4),
  FOCUSOUT: "focusout".concat(EVENT_KEY$4),
  MOUSEENTER: "mouseenter".concat(EVENT_KEY$4),
  MOUSELEAVE: "mouseleave".concat(EVENT_KEY$4)
};
var CLASS_NAME_FADE$2 = 'fade';
var CLASS_NAME_MODAL = 'modal';
var CLASS_NAME_SHOW$2 = 'show';
var HOVER_STATE_SHOW = 'show';
var HOVER_STATE_OUT = 'out';
var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
var SELECTOR_MODAL = ".".concat(CLASS_NAME_MODAL);
var EVENT_MODAL_HIDE = 'hide.bs.modal';
var TRIGGER_HOVER = 'hover';
var TRIGGER_FOCUS = 'focus';
var TRIGGER_CLICK = 'click';
var TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Tooltip = /*#__PURE__*/function (_BaseComponent8) {
  _inherits(Tooltip, _BaseComponent8);

  var _super8 = _createSuper(Tooltip);

  function Tooltip(element, config) {
    var _this34;

    _classCallCheck(this, Tooltip);

    if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ === 'undefined') {
      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
    }

    _this34 = _super8.call(this, element); // private

    _this34._isEnabled = true;
    _this34._timeout = 0;
    _this34._hoverState = '';
    _this34._activeTrigger = {};
    _this34._popper = null; // Protected

    _this34._config = _this34._getConfig(config);
    _this34.tip = null;

    _this34._setListeners();

    return _this34;
  } // Getters


  _createClass(Tooltip, [{
    key: "enable",
    value: // Public
    function enable() {
      this._isEnabled = true;
    }
  }, {
    key: "disable",
    value: function disable() {
      this._isEnabled = false;
    }
  }, {
    key: "toggleEnabled",
    value: function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
  }, {
    key: "toggle",
    value: function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var context = this._initializeOnDelegatedTarget(event);

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$2)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

      if (this.tip) {
        this.tip.remove();
      }

      this._disposePopper();

      _get(_getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
    }
  }, {
    key: "show",
    value: function show() {
      var _this35 = this;

      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }

      if (!(this.isWithContent() && this._isEnabled)) {
        return;
      }

      var showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
      var shadowRoot = findShadowRoot(this._element);
      var isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      } // A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
      // This will be removed later in favor of a `setContent` method


      if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector(SELECTOR_TOOLTIP_INNER).innerHTML) {
        this._disposePopper();

        this.tip.remove();
        this.tip = null;
      }

      var tip = this.getTipElement();
      var tipId = getUID(this.constructor.NAME);
      tip.setAttribute('id', tipId);

      this._element.setAttribute('aria-describedby', tipId);

      if (this._config.animation) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }

      var placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

      var attachment = this._getAttachment(placement);

      this._addAttachmentClass(attachment);

      var container = this._config.container;
      Data.set(tip, this.constructor.DATA_KEY, this);

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
      }

      if (this._popper) {
        this._popper.update();
      } else {
        this._popper = _popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"](this._element, tip, this._getPopperConfig(attachment));
      }

      tip.classList.add(CLASS_NAME_SHOW$2);

      var customClass = this._resolvePossibleFunction(this._config.customClass);

      if (customClass) {
        var _tip$classList;

        (_tip$classList = tip.classList).add.apply(_tip$classList, _toConsumableArray(customClass.split(' ')));
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement) {
        var _ref9;

        (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children)).forEach(function (element) {
          EventHandler.on(element, 'mouseover', noop);
        });
      }

      var complete = function complete() {
        var prevHoverState = _this35._hoverState;
        _this35._hoverState = null;
        EventHandler.trigger(_this35._element, _this35.constructor.Event.SHOWN);

        if (prevHoverState === HOVER_STATE_OUT) {
          _this35._leave(null, _this35);
        }
      };

      var isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

      this._queueCallback(complete, this.tip, isAnimated);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this36 = this;

      if (!this._popper) {
        return;
      }

      var tip = this.getTipElement();

      var complete = function complete() {
        if (_this36._isWithActiveTrigger()) {
          return;
        }

        if (_this36._hoverState !== HOVER_STATE_SHOW) {
          tip.remove();
        }

        _this36._cleanTipClass();

        _this36._element.removeAttribute('aria-describedby');

        EventHandler.trigger(_this36._element, _this36.constructor.Event.HIDDEN);

        _this36._disposePopper();
      };

      var hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        var _ref10;

        (_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children)).forEach(function (element) {
          return EventHandler.off(element, 'mouseover', noop);
        });
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      var isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

      this._queueCallback(complete, this.tip, isAnimated);

      this._hoverState = '';
    }
  }, {
    key: "update",
    value: function update() {
      if (this._popper !== null) {
        this._popper.update();
      }
    } // Protected

  }, {
    key: "isWithContent",
    value: function isWithContent() {
      return Boolean(this.getTitle());
    }
  }, {
    key: "getTipElement",
    value: function getTipElement() {
      if (this.tip) {
        return this.tip;
      }

      var element = document.createElement('div');
      element.innerHTML = this._config.template;
      var tip = element.children[0];
      this.setContent(tip);
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      this.tip = tip;
      return this.tip;
    }
  }, {
    key: "setContent",
    value: function setContent(tip) {
      this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
    }
  }, {
    key: "_sanitizeAndSetContent",
    value: function _sanitizeAndSetContent(template, content, selector) {
      var templateElement = SelectorEngine.findOne(selector, template);

      if (!content && templateElement) {
        templateElement.remove();
        return;
      } // we use append for html objects to maintain js events


      this.setElementContent(templateElement, content);
    }
  }, {
    key: "setElementContent",
    value: function setElementContent(element, content) {
      if (element === null) {
        return;
      }

      if (isElement(content)) {
        content = getElement(content); // content is a DOM node or a jQuery

        if (this._config.html) {
          if (content.parentNode !== element) {
            element.innerHTML = '';
            element.append(content);
          }
        } else {
          element.textContent = content.textContent;
        }

        return;
      }

      if (this._config.html) {
        if (this._config.sanitize) {
          content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
        }

        element.innerHTML = content;
      } else {
        element.textContent = content;
      }
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var title = this._element.getAttribute('data-bs-original-title') || this._config.title;

      return this._resolvePossibleFunction(title);
    }
  }, {
    key: "updateAttachment",
    value: function updateAttachment(attachment) {
      if (attachment === 'right') {
        return 'end';
      }

      if (attachment === 'left') {
        return 'start';
      }

      return attachment;
    } // Private

  }, {
    key: "_initializeOnDelegatedTarget",
    value: function _initializeOnDelegatedTarget(event, context) {
      return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this37 = this;

      var offset = this._config.offset;

      if (typeof offset === 'string') {
        return offset.split(',').map(function (val) {
          return Number.parseInt(val, 10);
        });
      }

      if (typeof offset === 'function') {
        return function (popperData) {
          return offset(popperData, _this37._element);
        };
      }

      return offset;
    }
  }, {
    key: "_resolvePossibleFunction",
    value: function _resolvePossibleFunction(content) {
      return typeof content === 'function' ? content.call(this._element) : content;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig(attachment) {
      var _this38 = this;

      var defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: ".".concat(this.constructor.NAME, "-arrow")
          }
        }, {
          name: 'onChange',
          enabled: true,
          phase: 'afterWrite',
          fn: function fn(data) {
            return _this38._handlePopperPlacementChange(data);
          }
        }],
        onFirstUpdate: function onFirstUpdate(data) {
          if (data.options.placement !== data.placement) {
            _this38._handlePopperPlacementChange(data);
          }
        }
      };
      return _objectSpread(_objectSpread({}, defaultBsPopperConfig), typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
    }
  }, {
    key: "_addAttachmentClass",
    value: function _addAttachmentClass(attachment) {
      this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(attachment)));
    }
  }, {
    key: "_getAttachment",
    value: function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this39 = this;

      var triggers = this._config.trigger.split(' ');

      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          EventHandler.on(_this39._element, _this39.constructor.Event.CLICK, _this39._config.selector, function (event) {
            return _this39.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this39.constructor.Event.MOUSEENTER : _this39.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this39.constructor.Event.MOUSELEAVE : _this39.constructor.Event.FOCUSOUT;
          EventHandler.on(_this39._element, eventIn, _this39._config.selector, function (event) {
            return _this39._enter(event);
          });
          EventHandler.on(_this39._element, eventOut, _this39._config.selector, function (event) {
            return _this39._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this39._element) {
          _this39.hide();
        }
      };

      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

      if (this._config.selector) {
        this._config = _objectSpread(_objectSpread({}, this._config), {}, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    }
  }, {
    key: "_fixTitle",
    value: function _fixTitle() {
      var title = this._element.getAttribute('title');

      var originalTitleType = _typeof(this._element.getAttribute('data-bs-original-title'));

      if (title || originalTitleType !== 'string') {
        this._element.setAttribute('data-bs-original-title', title || '');

        if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
          this._element.setAttribute('aria-label', title);
        }

        this._element.setAttribute('title', '');
      }
    }
  }, {
    key: "_enter",
    value: function _enter(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$2) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context._config.delay || !context._config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context._config.delay.show);
    }
  }, {
    key: "_leave",
    value: function _leave(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context._config.delay || !context._config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context._config.delay.hide);
    }
  }, {
    key: "_isWithActiveTrigger",
    value: function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      var dataAttributes = Manipulator.getDataAttributes(this._element);
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), dataAttributes), _typeof(config) === 'object' && config ? config : {});
      config.container = config.container === false ? document.body : getElement(config.container);

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
      }

      return config;
    }
  }, {
    key: "_getDelegateConfig",
    value: function _getDelegateConfig() {
      var config = {};

      for (var key in this._config) {
        if (this.constructor.Default[key] !== this._config[key]) {
          config[key] = this._config[key];
        }
      } // In the future can be replaced with:
      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
      // `Object.fromEntries(keysWithDifferentValues)`


      return config;
    }
  }, {
    key: "_cleanTipClass",
    value: function _cleanTipClass() {
      var tip = this.getTipElement();
      var basicClassPrefixRegex = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), 'g');
      var tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(function (token) {
          return token.trim();
        }).forEach(function (tClass) {
          return tip.classList.remove(tClass);
        });
      }
    }
  }, {
    key: "_getBasicClassPrefix",
    value: function _getBasicClassPrefix() {
      return CLASS_PREFIX$1;
    }
  }, {
    key: "_handlePopperPlacementChange",
    value: function _handlePopperPlacementChange(popperData) {
      var state = popperData.state;

      if (!state) {
        return;
      }

      this.tip = state.elements.popper;

      this._cleanTipClass();

      this._addAttachmentClass(this._getAttachment(state.placement));
    }
  }, {
    key: "_disposePopper",
    value: function _disposePopper() {
      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$3;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$4;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$2;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$3;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Tooltip.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        }
      });
    }
  }]);

  return Tooltip;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tooltip to jQuery only if jQuery is present
 */


defineJQueryPlugin(Tooltip);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$3 = 'popover';
var DATA_KEY$3 = 'bs.popover';
var EVENT_KEY$3 = ".".concat(DATA_KEY$3);
var CLASS_PREFIX = 'bs-popover';

var Default$2 = _objectSpread(_objectSpread({}, Tooltip.Default), {}, {
  placement: 'right',
  offset: [0, 8],
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
});

var DefaultType$2 = _objectSpread(_objectSpread({}, Tooltip.DefaultType), {}, {
  content: '(string|element|function)'
});

var Event$1 = {
  HIDE: "hide".concat(EVENT_KEY$3),
  HIDDEN: "hidden".concat(EVENT_KEY$3),
  SHOW: "show".concat(EVENT_KEY$3),
  SHOWN: "shown".concat(EVENT_KEY$3),
  INSERTED: "inserted".concat(EVENT_KEY$3),
  CLICK: "click".concat(EVENT_KEY$3),
  FOCUSIN: "focusin".concat(EVENT_KEY$3),
  FOCUSOUT: "focusout".concat(EVENT_KEY$3),
  MOUSEENTER: "mouseenter".concat(EVENT_KEY$3),
  MOUSELEAVE: "mouseleave".concat(EVENT_KEY$3)
};
var SELECTOR_TITLE = '.popover-header';
var SELECTOR_CONTENT = '.popover-body';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Popover = /*#__PURE__*/function (_Tooltip) {
  _inherits(Popover, _Tooltip);

  var _super9 = _createSuper(Popover);

  function Popover() {
    _classCallCheck(this, Popover);

    return _super9.apply(this, arguments);
  }

  _createClass(Popover, [{
    key: "isWithContent",
    value: // Overrides
    function isWithContent() {
      return this.getTitle() || this._getContent();
    }
  }, {
    key: "setContent",
    value: function setContent(tip) {
      this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TITLE);

      this._sanitizeAndSetContent(tip, this._getContent(), SELECTOR_CONTENT);
    } // Private

  }, {
    key: "_getContent",
    value: function _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
  }, {
    key: "_getBasicClassPrefix",
    value: function _getBasicClassPrefix() {
      return CLASS_PREFIX;
    } // Static

  }], [{
    key: "Default",
    get: // Getters
    function get() {
      return Default$2;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$3;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$1;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$2;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Popover.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        }
      });
    }
  }]);

  return Popover;
}(Tooltip);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Popover to jQuery only if jQuery is present
 */


defineJQueryPlugin(Popover);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$2 = 'scrollspy';
var DATA_KEY$2 = 'bs.scrollspy';
var EVENT_KEY$2 = ".".concat(DATA_KEY$2);
var DATA_API_KEY$1 = '.data-api';
var Default$1 = {
  offset: 10,
  method: 'auto',
  target: ''
};
var DefaultType$1 = {
  offset: 'number',
  method: 'string',
  target: '(string|element)'
};
var EVENT_ACTIVATE = "activate".concat(EVENT_KEY$2);
var EVENT_SCROLL = "scroll".concat(EVENT_KEY$2);
var EVENT_LOAD_DATA_API = "load".concat(EVENT_KEY$2).concat(DATA_API_KEY$1);
var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
var CLASS_NAME_ACTIVE$1 = 'active';
var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
var SELECTOR_NAV_LINKS = '.nav-link';
var SELECTOR_NAV_ITEMS = '.nav-item';
var SELECTOR_LIST_ITEMS = '.list-group-item';
var SELECTOR_LINK_ITEMS = "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS, ", .").concat(CLASS_NAME_DROPDOWN_ITEM);
var SELECTOR_DROPDOWN$1 = '.dropdown';
var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
var METHOD_OFFSET = 'offset';
var METHOD_POSITION = 'position';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var ScrollSpy = /*#__PURE__*/function (_BaseComponent9) {
  _inherits(ScrollSpy, _BaseComponent9);

  var _super10 = _createSuper(ScrollSpy);

  function ScrollSpy(element, config) {
    var _this40;

    _classCallCheck(this, ScrollSpy);

    _this40 = _super10.call(this, element);
    _this40._scrollElement = _this40._element.tagName === 'BODY' ? window : _this40._element;
    _this40._config = _this40._getConfig(config);
    _this40._offsets = [];
    _this40._targets = [];
    _this40._activeTarget = null;
    _this40._scrollHeight = 0;
    EventHandler.on(_this40._scrollElement, EVENT_SCROLL, function () {
      return _this40._process();
    });

    _this40.refresh();

    _this40._process();

    return _this40;
  } // Getters


  _createClass(ScrollSpy, [{
    key: "refresh",
    value: // Public
    function refresh() {
      var _this41 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);
      targets.map(function (element) {
        var targetSelector = getSelectorFromElement(element);
        var target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this41._offsets.push(item[0]);

        _this41._targets.push(item[1]);
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      EventHandler.off(this._scrollElement, EVENT_KEY$2);

      _get(_getPrototypeOf(ScrollSpy.prototype), "dispose", this).call(this);
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread(_objectSpread({}, Default$1), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' && config ? config : {});
      config.target = getElement(config.target) || document.documentElement;
      typeCheckConfig(NAME$2, config, DefaultType$1);
      return config;
    }
  }, {
    key: "_getScrollTop",
    value: function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }
  }, {
    key: "_getScrollHeight",
    value: function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
  }, {
    key: "_getOffsetHeight",
    value: function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }
  }, {
    key: "_process",
    value: function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    }
  }, {
    key: "_activate",
    value: function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = SELECTOR_LINK_ITEMS.split(',').map(function (selector) {
        return "".concat(selector, "[data-bs-target=\"").concat(target, "\"],").concat(selector, "[href=\"").concat(target, "\"]");
      });
      var link = SelectorEngine.findOne(queries.join(','), this._config.target);
      link.classList.add(CLASS_NAME_ACTIVE$1);

      if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
      } else {
        SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(function (listGroup) {
          // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
          SelectorEngine.prev(listGroup, "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS)).forEach(function (item) {
            return item.classList.add(CLASS_NAME_ACTIVE$1);
          }); // Handle special case when .nav-link is inside .nav-item

          SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(function (navItem) {
            SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(function (item) {
              return item.classList.add(CLASS_NAME_ACTIVE$1);
            });
          });
        });
      }

      EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
  }, {
    key: "_clear",
    value: function _clear() {
      SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$1);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$1);
      });
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$1;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$2;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = ScrollSpy.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }

        data[config]();
      });
    }
  }]);

  return ScrollSpy;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
  SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (spy) {
    return new ScrollSpy(spy);
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .ScrollSpy to jQuery only if jQuery is present
 */

defineJQueryPlugin(ScrollSpy);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$1 = 'tab';
var DATA_KEY$1 = 'bs.tab';
var EVENT_KEY$1 = ".".concat(DATA_KEY$1);
var DATA_API_KEY = '.data-api';
var EVENT_HIDE$1 = "hide".concat(EVENT_KEY$1);
var EVENT_HIDDEN$1 = "hidden".concat(EVENT_KEY$1);
var EVENT_SHOW$1 = "show".concat(EVENT_KEY$1);
var EVENT_SHOWN$1 = "shown".concat(EVENT_KEY$1);
var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY$1).concat(DATA_API_KEY);
var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
var CLASS_NAME_ACTIVE = 'active';
var CLASS_NAME_FADE$1 = 'fade';
var CLASS_NAME_SHOW$1 = 'show';
var SELECTOR_DROPDOWN = '.dropdown';
var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
var SELECTOR_ACTIVE = '.active';
var SELECTOR_ACTIVE_UL = ':scope > li > .active';
var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
var SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Tab = /*#__PURE__*/function (_BaseComponent10) {
  _inherits(Tab, _BaseComponent10);

  var _super11 = _createSuper(Tab);

  function Tab() {
    _classCallCheck(this, Tab);

    return _super11.apply(this, arguments);
  }

  _createClass(Tab, [{
    key: "show",
    value: // Public
    function show() {
      var _this42 = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
        return;
      }

      var previous;
      var target = getElementFromSelector(this._element);

      var listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
        previous = SelectorEngine.find(itemSelector, listElement);
        previous = previous[previous.length - 1];
      }

      var hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
        relatedTarget: this._element
      }) : null;
      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
        relatedTarget: previous
      });

      if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
        return;
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        EventHandler.trigger(previous, EVENT_HIDDEN$1, {
          relatedTarget: _this42._element
        });
        EventHandler.trigger(_this42._element, EVENT_SHOWN$1, {
          relatedTarget: previous
        });
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    } // Private

  }, {
    key: "_activate",
    value: function _activate(element, container, callback) {
      var _this43 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

      var complete = function complete() {
        return _this43._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        active.classList.remove(CLASS_NAME_SHOW$1);

        this._queueCallback(complete, element, true);
      } else {
        complete();
      }
    }
  }, {
    key: "_transitionComplete",
    value: function _transitionComplete(element, active, callback) {
      if (active) {
        active.classList.remove(CLASS_NAME_ACTIVE);
        var dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

        if (dropdownChild) {
          dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      element.classList.add(CLASS_NAME_ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$1)) {
        element.classList.add(CLASS_NAME_SHOW$1);
      }

      var parent = element.parentNode;

      if (parent && parent.nodeName === 'LI') {
        parent = parent.parentNode;
      }

      if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = element.closest(SELECTOR_DROPDOWN);

        if (dropdownElement) {
          SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(function (dropdown) {
            return dropdown.classList.add(CLASS_NAME_ACTIVE);
          });
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static

  }], [{
    key: "NAME",
    get: // Getters
    function get() {
      return NAME$1;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Tab.getOrCreateInstance(this);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        }
      });
    }
  }]);

  return Tab;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return;
  }

  var data = Tab.getOrCreateInstance(this);
  data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */

defineJQueryPlugin(Tab);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'toast';
var DATA_KEY = 'bs.toast';
var EVENT_KEY = ".".concat(DATA_KEY);
var EVENT_MOUSEOVER = "mouseover".concat(EVENT_KEY);
var EVENT_MOUSEOUT = "mouseout".concat(EVENT_KEY);
var EVENT_FOCUSIN = "focusin".concat(EVENT_KEY);
var EVENT_FOCUSOUT = "focusout".concat(EVENT_KEY);
var EVENT_HIDE = "hide".concat(EVENT_KEY);
var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
var EVENT_SHOW = "show".concat(EVENT_KEY);
var EVENT_SHOWN = "shown".concat(EVENT_KEY);
var CLASS_NAME_FADE = 'fade';
var CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

var CLASS_NAME_SHOW = 'show';
var CLASS_NAME_SHOWING = 'showing';
var DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
var Default = {
  animation: true,
  autohide: true,
  delay: 5000
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Toast = /*#__PURE__*/function (_BaseComponent11) {
  _inherits(Toast, _BaseComponent11);

  var _super12 = _createSuper(Toast);

  function Toast(element, config) {
    var _this44;

    _classCallCheck(this, Toast);

    _this44 = _super12.call(this, element);
    _this44._config = _this44._getConfig(config);
    _this44._timeout = null;
    _this44._hasMouseInteraction = false;
    _this44._hasKeyboardInteraction = false;

    _this44._setListeners();

    return _this44;
  } // Getters


  _createClass(Toast, [{
    key: "show",
    value: // Public
    function show() {
      var _this45 = this;

      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

      if (showEvent.defaultPrevented) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }

      var complete = function complete() {
        _this45._element.classList.remove(CLASS_NAME_SHOWING);

        EventHandler.trigger(_this45._element, EVENT_SHOWN);

        _this45._maybeScheduleHide();
      };

      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


      reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOW);

      this._element.classList.add(CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this46 = this;

      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      var complete = function complete() {
        _this46._element.classList.add(CLASS_NAME_HIDE); // @deprecated


        _this46._element.classList.remove(CLASS_NAME_SHOWING);

        _this46._element.classList.remove(CLASS_NAME_SHOW);

        EventHandler.trigger(_this46._element, EVENT_HIDDEN);
      };

      this._element.classList.add(CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }

      _get(_getPrototypeOf(Toast.prototype), "dispose", this).call(this);
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread(_objectSpread({}, Default), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' && config ? config : {});
      typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    }
  }, {
    key: "_maybeScheduleHide",
    value: function _maybeScheduleHide() {
      var _this47 = this;

      if (!this._config.autohide) {
        return;
      }

      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }

      this._timeout = setTimeout(function () {
        _this47.hide();
      }, this._config.delay);
    }
  }, {
    key: "_onInteraction",
    value: function _onInteraction(event, isInteracting) {
      switch (event.type) {
        case 'mouseover':
        case 'mouseout':
          this._hasMouseInteraction = isInteracting;
          break;

        case 'focusin':
        case 'focusout':
          this._hasKeyboardInteraction = isInteracting;
          break;
      }

      if (isInteracting) {
        this._clearTimeout();

        return;
      }

      var nextElement = event.relatedTarget;

      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }

      this._maybeScheduleHide();
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this48 = this;

      EventHandler.on(this._element, EVENT_MOUSEOVER, function (event) {
        return _this48._onInteraction(event, true);
      });
      EventHandler.on(this._element, EVENT_MOUSEOUT, function (event) {
        return _this48._onInteraction(event, false);
      });
      EventHandler.on(this._element, EVENT_FOCUSIN, function (event) {
        return _this48._onInteraction(event, true);
      });
      EventHandler.on(this._element, EVENT_FOCUSOUT, function (event) {
        return _this48._onInteraction(event, false);
      });
    }
  }, {
    key: "_clearTimeout",
    value: function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static

  }], [{
    key: "DefaultType",
    get: function get() {
      return DefaultType;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Toast.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config](this);
        }
      });
    }
  }]);

  return Toast;
}(BaseComponent);

enableDismissTrigger(Toast);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Toast to jQuery only if jQuery is present
 */

defineJQueryPlugin(Toast);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/stylesheets/application.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./app/javascript/stylesheets/application.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function registerImmediate(handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function registerImmediate(handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function registerImmediate(handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function registerImmediate(handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function registerImmediate(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/stimulus/index.js":
/*!****************************************!*\
  !*** ./node_modules/stimulus/index.js ***!
  \****************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stimulus_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/core */ "./node_modules/@stimulus/core/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["defaultSchema"]; });



/***/ }),

/***/ "./node_modules/stimulus/webpack-helpers.js":
/*!**************************************************!*\
  !*** ./node_modules/stimulus/webpack-helpers.js ***!
  \**************************************************/
/*! exports provided: definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/webpack-helpers */ "./node_modules/@stimulus/webpack-helpers/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["definitionsFromContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["identifierForContextKey"]; });



/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/trix/dist/trix.js":
/*!****************************************!*\
  !*** ./node_modules/trix/dist/trix.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Trix 1.3.1
Copyright © 2020 Basecamp, LLC
http://trix-editor.org/
 */
(function () {}).call(this), function () {
  var t;
  null == window.Set && (window.Set = t = function () {
    function t() {
      this.clear();
    }

    return t.prototype.clear = function () {
      return this.values = [];
    }, t.prototype.has = function (t) {
      return -1 !== this.values.indexOf(t);
    }, t.prototype.add = function (t) {
      return this.has(t) || this.values.push(t), this;
    }, t.prototype["delete"] = function (t) {
      var e;
      return -1 === (e = this.values.indexOf(t)) ? !1 : (this.values.splice(e, 1), !0);
    }, t.prototype.forEach = function () {
      var t;
      return (t = this.values).forEach.apply(t, arguments);
    }, t;
  }());
}.call(this), function (t) {
  function e() {}

  function n(t, e) {
    return function () {
      t.apply(e, arguments);
    };
  }

  function i(t) {
    if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof t) throw new TypeError("not a function");
    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(t, this);
  }

  function o(t, e) {
    for (; 3 === t._state;) {
      t = t._value;
    }

    return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void h(function () {
      var n = 1 === t._state ? e.onFulfilled : e.onRejected;
      if (null === n) return void (1 === t._state ? r : s)(e.promise, t._value);
      var i;

      try {
        i = n(t._value);
      } catch (o) {
        return void s(e.promise, o);
      }

      r(e.promise, i);
    }));
  }

  function r(t, e) {
    try {
      if (e === t) throw new TypeError("A promise cannot be resolved with itself.");

      if (e && ("object" == _typeof(e) || "function" == typeof e)) {
        var o = e.then;
        if (e instanceof i) return t._state = 3, t._value = e, void a(t);
        if ("function" == typeof o) return void c(n(o, e), t);
      }

      t._state = 1, t._value = e, a(t);
    } catch (r) {
      s(t, r);
    }
  }

  function s(t, e) {
    t._state = 2, t._value = e, a(t);
  }

  function a(t) {
    2 === t._state && 0 === t._deferreds.length && setTimeout(function () {
      t._handled || p(t._value);
    }, 1);

    for (var e = 0, n = t._deferreds.length; n > e; e++) {
      o(t, t._deferreds[e]);
    }

    t._deferreds = null;
  }

  function u(t, e, n) {
    this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
  }

  function c(t, e) {
    var n = !1;

    try {
      t(function (t) {
        n || (n = !0, r(e, t));
      }, function (t) {
        n || (n = !0, s(e, t));
      });
    } catch (i) {
      if (n) return;
      n = !0, s(e, i);
    }
  }

  var l = setTimeout,
      h = "function" == typeof setImmediate && setImmediate || function (t) {
    l(t, 1);
  },
      p = function p(t) {
    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
  };

  i.prototype["catch"] = function (t) {
    return this.then(null, t);
  }, i.prototype.then = function (t, n) {
    var r = new i(e);
    return o(this, new u(t, n, r)), r;
  }, i.all = function (t) {
    var e = Array.prototype.slice.call(t);
    return new i(function (t, n) {
      function i(r, s) {
        try {
          if (s && ("object" == _typeof(s) || "function" == typeof s)) {
            var a = s.then;
            if ("function" == typeof a) return void a.call(s, function (t) {
              i(r, t);
            }, n);
          }

          e[r] = s, 0 === --o && t(e);
        } catch (u) {
          n(u);
        }
      }

      if (0 === e.length) return t([]);

      for (var o = e.length, r = 0; r < e.length; r++) {
        i(r, e[r]);
      }
    });
  }, i.resolve = function (t) {
    return t && "object" == _typeof(t) && t.constructor === i ? t : new i(function (e) {
      e(t);
    });
  }, i.reject = function (t) {
    return new i(function (e, n) {
      n(t);
    });
  }, i.race = function (t) {
    return new i(function (e, n) {
      for (var i = 0, o = t.length; o > i; i++) {
        t[i].then(e, n);
      }
    });
  }, i._setImmediateFn = function (t) {
    h = t;
  }, i._setUnhandledRejectionFn = function (t) {
    p = t;
  },  true && module.exports ? module.exports = i : t.Promise || (t.Promise = i);
}(this), function () {
  var t = "object" == _typeof(window.customElements),
      e = "function" == typeof document.registerElement,
      n = t || e;

  n || (
  /**
  * @license
  * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
  * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  * Code distributed by Google as part of the polymer project is also
  * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  "undefined" == typeof WeakMap && !function () {
    var t = Object.defineProperty,
        e = Date.now() % 1e9,
        n = function n() {
      this.name = "__st" + (1e9 * Math.random() >>> 0) + (e++ + "__");
    };

    n.prototype = {
      set: function set(e, n) {
        var i = e[this.name];
        return i && i[0] === e ? i[1] = n : t(e, this.name, {
          value: [e, n],
          writable: !0
        }), this;
      },
      get: function get(t) {
        var e;
        return (e = t[this.name]) && e[0] === t ? e[1] : void 0;
      },
      "delete": function _delete(t) {
        var e = t[this.name];
        return e && e[0] === t ? (e[0] = e[1] = void 0, !0) : !1;
      },
      has: function has(t) {
        var e = t[this.name];
        return e ? e[0] === t : !1;
      }
    }, window.WeakMap = n;
  }(), function (t) {
    function e(t) {
      A.push(t), b || (b = !0, g(i));
    }

    function n(t) {
      return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(t) || t;
    }

    function i() {
      b = !1;
      var t = A;
      A = [], t.sort(function (t, e) {
        return t.uid_ - e.uid_;
      });
      var e = !1;
      t.forEach(function (t) {
        var n = t.takeRecords();
        o(t), n.length && (t.callback_(n, t), e = !0);
      }), e && i();
    }

    function o(t) {
      t.nodes_.forEach(function (e) {
        var n = m.get(e);
        n && n.forEach(function (e) {
          e.observer === t && e.removeTransientObservers();
        });
      });
    }

    function r(t, e) {
      for (var n = t; n; n = n.parentNode) {
        var i = m.get(n);
        if (i) for (var o = 0; o < i.length; o++) {
          var r = i[o],
              s = r.options;

          if (n === t || s.subtree) {
            var a = e(s);
            a && r.enqueue(a);
          }
        }
      }
    }

    function s(t) {
      this.callback_ = t, this.nodes_ = [], this.records_ = [], this.uid_ = ++C;
    }

    function a(t, e) {
      this.type = t, this.target = e, this.addedNodes = [], this.removedNodes = [], this.previousSibling = null, this.nextSibling = null, this.attributeName = null, this.attributeNamespace = null, this.oldValue = null;
    }

    function u(t) {
      var e = new a(t.type, t.target);
      return e.addedNodes = t.addedNodes.slice(), e.removedNodes = t.removedNodes.slice(), e.previousSibling = t.previousSibling, e.nextSibling = t.nextSibling, e.attributeName = t.attributeName, e.attributeNamespace = t.attributeNamespace, e.oldValue = t.oldValue, e;
    }

    function c(t, e) {
      return x = new a(t, e);
    }

    function l(t) {
      return w ? w : (w = u(x), w.oldValue = t, w);
    }

    function h() {
      x = w = void 0;
    }

    function p(t) {
      return t === w || t === x;
    }

    function d(t, e) {
      return t === e ? t : w && p(t) ? w : null;
    }

    function f(t, e, n) {
      this.observer = t, this.target = e, this.options = n, this.transientObservedNodes = [];
    }

    if (!t.JsMutationObserver) {
      var g,
          m = new WeakMap();
      if (/Trident|Edge/.test(navigator.userAgent)) g = setTimeout;else if (window.setImmediate) g = window.setImmediate;else {
        var v = [],
            y = String(Math.random());
        window.addEventListener("message", function (t) {
          if (t.data === y) {
            var e = v;
            v = [], e.forEach(function (t) {
              t();
            });
          }
        }), g = function g(t) {
          v.push(t), window.postMessage(y, "*");
        };
      }
      var b = !1,
          A = [],
          C = 0;
      s.prototype = {
        observe: function observe(t, e) {
          if (t = n(t), !e.childList && !e.attributes && !e.characterData || e.attributeOldValue && !e.attributes || e.attributeFilter && e.attributeFilter.length && !e.attributes || e.characterDataOldValue && !e.characterData) throw new SyntaxError();
          var i = m.get(t);
          i || m.set(t, i = []);

          for (var o, r = 0; r < i.length; r++) {
            if (i[r].observer === this) {
              o = i[r], o.removeListeners(), o.options = e;
              break;
            }
          }

          o || (o = new f(this, t, e), i.push(o), this.nodes_.push(t)), o.addListeners();
        },
        disconnect: function disconnect() {
          this.nodes_.forEach(function (t) {
            for (var e = m.get(t), n = 0; n < e.length; n++) {
              var i = e[n];

              if (i.observer === this) {
                i.removeListeners(), e.splice(n, 1);
                break;
              }
            }
          }, this), this.records_ = [];
        },
        takeRecords: function takeRecords() {
          var t = this.records_;
          return this.records_ = [], t;
        }
      };
      var x, w;
      f.prototype = {
        enqueue: function enqueue(t) {
          var n = this.observer.records_,
              i = n.length;

          if (n.length > 0) {
            var o = n[i - 1],
                r = d(o, t);
            if (r) return void (n[i - 1] = r);
          } else e(this.observer);

          n[i] = t;
        },
        addListeners: function addListeners() {
          this.addListeners_(this.target);
        },
        addListeners_: function addListeners_(t) {
          var e = this.options;
          e.attributes && t.addEventListener("DOMAttrModified", this, !0), e.characterData && t.addEventListener("DOMCharacterDataModified", this, !0), e.childList && t.addEventListener("DOMNodeInserted", this, !0), (e.childList || e.subtree) && t.addEventListener("DOMNodeRemoved", this, !0);
        },
        removeListeners: function removeListeners() {
          this.removeListeners_(this.target);
        },
        removeListeners_: function removeListeners_(t) {
          var e = this.options;
          e.attributes && t.removeEventListener("DOMAttrModified", this, !0), e.characterData && t.removeEventListener("DOMCharacterDataModified", this, !0), e.childList && t.removeEventListener("DOMNodeInserted", this, !0), (e.childList || e.subtree) && t.removeEventListener("DOMNodeRemoved", this, !0);
        },
        addTransientObserver: function addTransientObserver(t) {
          if (t !== this.target) {
            this.addListeners_(t), this.transientObservedNodes.push(t);
            var e = m.get(t);
            e || m.set(t, e = []), e.push(this);
          }
        },
        removeTransientObservers: function removeTransientObservers() {
          var t = this.transientObservedNodes;
          this.transientObservedNodes = [], t.forEach(function (t) {
            this.removeListeners_(t);

            for (var e = m.get(t), n = 0; n < e.length; n++) {
              if (e[n] === this) {
                e.splice(n, 1);
                break;
              }
            }
          }, this);
        },
        handleEvent: function handleEvent(t) {
          switch (t.stopImmediatePropagation(), t.type) {
            case "DOMAttrModified":
              var e = t.attrName,
                  n = t.relatedNode.namespaceURI,
                  i = t.target,
                  o = new c("attributes", i);
              o.attributeName = e, o.attributeNamespace = n;
              var s = t.attrChange === MutationEvent.ADDITION ? null : t.prevValue;
              r(i, function (t) {
                return !t.attributes || t.attributeFilter && t.attributeFilter.length && -1 === t.attributeFilter.indexOf(e) && -1 === t.attributeFilter.indexOf(n) ? void 0 : t.attributeOldValue ? l(s) : o;
              });
              break;

            case "DOMCharacterDataModified":
              var i = t.target,
                  o = c("characterData", i),
                  s = t.prevValue;
              r(i, function (t) {
                return t.characterData ? t.characterDataOldValue ? l(s) : o : void 0;
              });
              break;

            case "DOMNodeRemoved":
              this.addTransientObserver(t.target);

            case "DOMNodeInserted":
              var a,
                  u,
                  p = t.target;
              "DOMNodeInserted" === t.type ? (a = [p], u = []) : (a = [], u = [p]);
              var d = p.previousSibling,
                  f = p.nextSibling,
                  o = c("childList", t.target.parentNode);
              o.addedNodes = a, o.removedNodes = u, o.previousSibling = d, o.nextSibling = f, r(t.relatedNode, function (t) {
                return t.childList ? o : void 0;
              });
          }

          h();
        }
      }, t.JsMutationObserver = s, t.MutationObserver || (t.MutationObserver = s, s._isPolyfilled = !0);
    }
  }(self), function () {
    "use strict";

    if (!window.performance || !window.performance.now) {
      var t = Date.now();
      window.performance = {
        now: function now() {
          return Date.now() - t;
        }
      };
    }

    window.requestAnimationFrame || (window.requestAnimationFrame = function () {
      var t = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
      return t ? function (e) {
        return t(function () {
          e(performance.now());
        });
      } : function (t) {
        return window.setTimeout(t, 1e3 / 60);
      };
    }()), window.cancelAnimationFrame || (window.cancelAnimationFrame = function () {
      return window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (t) {
        clearTimeout(t);
      };
    }());

    var e = function () {
      var t = document.createEvent("Event");
      return t.initEvent("foo", !0, !0), t.preventDefault(), t.defaultPrevented;
    }();

    if (!e) {
      var n = Event.prototype.preventDefault;

      Event.prototype.preventDefault = function () {
        this.cancelable && (n.call(this), Object.defineProperty(this, "defaultPrevented", {
          get: function get() {
            return !0;
          },
          configurable: !0
        }));
      };
    }

    var i = /Trident/.test(navigator.userAgent);

    if ((!window.CustomEvent || i && "function" != typeof window.CustomEvent) && (window.CustomEvent = function (t, e) {
      e = e || {};
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(t, Boolean(e.bubbles), Boolean(e.cancelable), e.detail), n;
    }, window.CustomEvent.prototype = window.Event.prototype), !window.Event || i && "function" != typeof window.Event) {
      var o = window.Event;
      window.Event = function (t, e) {
        e = e || {};
        var n = document.createEvent("Event");
        return n.initEvent(t, Boolean(e.bubbles), Boolean(e.cancelable)), n;
      }, window.Event.prototype = o.prototype;
    }
  }(window.WebComponents), window.CustomElements = window.CustomElements || {
    flags: {}
  }, function (t) {
    var e = t.flags,
        n = [],
        i = function i(t) {
      n.push(t);
    },
        o = function o() {
      n.forEach(function (e) {
        e(t);
      });
    };

    t.addModule = i, t.initializeModules = o, t.hasNative = Boolean(document.registerElement), t.isIE = /Trident/.test(navigator.userAgent), t.useNative = !e.register && t.hasNative && !window.ShadowDOMPolyfill && (!window.HTMLImports || window.HTMLImports.useNative);
  }(window.CustomElements), window.CustomElements.addModule(function (t) {
    function e(t, e) {
      n(t, function (t) {
        return e(t) ? !0 : void i(t, e);
      }), i(t, e);
    }

    function n(t, e, i) {
      var o = t.firstElementChild;
      if (!o) for (o = t.firstChild; o && o.nodeType !== Node.ELEMENT_NODE;) {
        o = o.nextSibling;
      }

      for (; o;) {
        e(o, i) !== !0 && n(o, e, i), o = o.nextElementSibling;
      }

      return null;
    }

    function i(t, n) {
      for (var i = t.shadowRoot; i;) {
        e(i, n), i = i.olderShadowRoot;
      }
    }

    function o(t, e) {
      r(t, e, []);
    }

    function r(t, e, n) {
      if (t = window.wrap(t), !(n.indexOf(t) >= 0)) {
        n.push(t);

        for (var i, o = t.querySelectorAll("link[rel=" + s + "]"), a = 0, u = o.length; u > a && (i = o[a]); a++) {
          i.import && r(i.import, e, n);
        }

        e(t);
      }
    }

    var s = window.HTMLImports ? window.HTMLImports.IMPORT_LINK_TYPE : "none";
    t.forDocumentTree = o, t.forSubtree = e;
  }), window.CustomElements.addModule(function (t) {
    function e(t, e) {
      return n(t, e) || i(t, e);
    }

    function n(e, n) {
      return t.upgrade(e, n) ? !0 : void (n && s(e));
    }

    function i(t, e) {
      b(t, function (t) {
        return n(t, e) ? !0 : void 0;
      });
    }

    function o(t) {
      w.push(t), x || (x = !0, setTimeout(r));
    }

    function r() {
      x = !1;

      for (var t, e = w, n = 0, i = e.length; i > n && (t = e[n]); n++) {
        t();
      }

      w = [];
    }

    function s(t) {
      C ? o(function () {
        a(t);
      }) : a(t);
    }

    function a(t) {
      t.__upgraded__ && !t.__attached && (t.__attached = !0, t.attachedCallback && t.attachedCallback());
    }

    function u(t) {
      c(t), b(t, function (t) {
        c(t);
      });
    }

    function c(t) {
      C ? o(function () {
        l(t);
      }) : l(t);
    }

    function l(t) {
      t.__upgraded__ && t.__attached && (t.__attached = !1, t.detachedCallback && t.detachedCallback());
    }

    function h(t) {
      for (var e = t, n = window.wrap(document); e;) {
        if (e == n) return !0;
        e = e.parentNode || e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host;
      }
    }

    function p(t) {
      if (t.shadowRoot && !t.shadowRoot.__watched) {
        y.dom && console.log("watching shadow-root for: ", t.localName);

        for (var e = t.shadowRoot; e;) {
          g(e), e = e.olderShadowRoot;
        }
      }
    }

    function d(t, n) {
      if (y.dom) {
        var i = n[0];

        if (i && "childList" === i.type && i.addedNodes && i.addedNodes) {
          for (var o = i.addedNodes[0]; o && o !== document && !o.host;) {
            o = o.parentNode;
          }

          var r = o && (o.URL || o._URL || o.host && o.host.localName) || "";
          r = r.split("/?").shift().split("/").pop();
        }

        console.group("mutations (%d) [%s]", n.length, r || "");
      }

      var s = h(t);
      n.forEach(function (t) {
        "childList" === t.type && (E(t.addedNodes, function (t) {
          t.localName && e(t, s);
        }), E(t.removedNodes, function (t) {
          t.localName && u(t);
        }));
      }), y.dom && console.groupEnd();
    }

    function f(t) {
      for (t = window.wrap(t), t || (t = window.wrap(document)); t.parentNode;) {
        t = t.parentNode;
      }

      var e = t.__observer;
      e && (d(t, e.takeRecords()), r());
    }

    function g(t) {
      if (!t.__observer) {
        var e = new MutationObserver(d.bind(this, t));
        e.observe(t, {
          childList: !0,
          subtree: !0
        }), t.__observer = e;
      }
    }

    function m(t) {
      t = window.wrap(t), y.dom && console.group("upgradeDocument: ", t.baseURI.split("/").pop());
      var n = t === window.wrap(document);
      e(t, n), g(t), y.dom && console.groupEnd();
    }

    function v(t) {
      A(t, m);
    }

    var y = t.flags,
        b = t.forSubtree,
        A = t.forDocumentTree,
        C = window.MutationObserver._isPolyfilled && y["throttle-attached"];
    t.hasPolyfillMutations = C, t.hasThrottledAttached = C;
    var x = !1,
        w = [],
        E = Array.prototype.forEach.call.bind(Array.prototype.forEach),
        S = Element.prototype.createShadowRoot;
    S && (Element.prototype.createShadowRoot = function () {
      var t = S.call(this);
      return window.CustomElements.watchShadow(this), t;
    }), t.watchShadow = p, t.upgradeDocumentTree = v, t.upgradeDocument = m, t.upgradeSubtree = i, t.upgradeAll = e, t.attached = s, t.takeRecords = f;
  }), window.CustomElements.addModule(function (t) {
    function e(e, i) {
      if ("template" === e.localName && window.HTMLTemplateElement && HTMLTemplateElement.decorate && HTMLTemplateElement.decorate(e), !e.__upgraded__ && e.nodeType === Node.ELEMENT_NODE) {
        var o = e.getAttribute("is"),
            r = t.getRegisteredDefinition(e.localName) || t.getRegisteredDefinition(o);
        if (r && (o && r.tag == e.localName || !o && !r.extends)) return n(e, r, i);
      }
    }

    function n(e, n, o) {
      return s.upgrade && console.group("upgrade:", e.localName), n.is && e.setAttribute("is", n.is), i(e, n), e.__upgraded__ = !0, r(e), o && t.attached(e), t.upgradeSubtree(e, o), s.upgrade && console.groupEnd(), e;
    }

    function i(t, e) {
      Object.__proto__ ? t.__proto__ = e.prototype : (o(t, e.prototype, e.native), t.__proto__ = e.prototype);
    }

    function o(t, e, n) {
      for (var i = {}, o = e; o !== n && o !== HTMLElement.prototype;) {
        for (var r, s = Object.getOwnPropertyNames(o), a = 0; r = s[a]; a++) {
          i[r] || (Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(o, r)), i[r] = 1);
        }

        o = Object.getPrototypeOf(o);
      }
    }

    function r(t) {
      t.createdCallback && t.createdCallback();
    }

    var s = t.flags;
    t.upgrade = e, t.upgradeWithDefinition = n, t.implementPrototype = i;
  }), window.CustomElements.addModule(function (t) {
    function e(e, i) {
      var u = i || {};
      if (!e) throw new Error("document.registerElement: first argument `name` must not be empty");
      if (e.indexOf("-") < 0) throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(e) + "'.");
      if (o(e)) throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '" + String(e) + "'. The type name is invalid.");
      if (c(e)) throw new Error("DuplicateDefinitionError: a type with name '" + String(e) + "' is already registered");
      return u.prototype || (u.prototype = Object.create(HTMLElement.prototype)), u.__name = e.toLowerCase(), u.extends && (u.extends = u.extends.toLowerCase()), u.lifecycle = u.lifecycle || {}, u.ancestry = r(u.extends), s(u), a(u), n(u.prototype), l(u.__name, u), u.ctor = h(u), u.ctor.prototype = u.prototype, u.prototype.constructor = u.ctor, t.ready && m(document), u.ctor;
    }

    function n(t) {
      if (!t.setAttribute._polyfilled) {
        var e = t.setAttribute;

        t.setAttribute = function (t, n) {
          i.call(this, t, n, e);
        };

        var n = t.removeAttribute;
        t.removeAttribute = function (t) {
          i.call(this, t, null, n);
        }, t.setAttribute._polyfilled = !0;
      }
    }

    function i(t, e, n) {
      t = t.toLowerCase();
      var i = this.getAttribute(t);
      n.apply(this, arguments);
      var o = this.getAttribute(t);
      this.attributeChangedCallback && o !== i && this.attributeChangedCallback(t, i, o);
    }

    function o(t) {
      for (var e = 0; e < C.length; e++) {
        if (t === C[e]) return !0;
      }
    }

    function r(t) {
      var e = c(t);
      return e ? r(e.extends).concat([e]) : [];
    }

    function s(t) {
      for (var e, n = t.extends, i = 0; e = t.ancestry[i]; i++) {
        n = e.is && e.tag;
      }

      t.tag = n || t.__name, n && (t.is = t.__name);
    }

    function a(t) {
      if (!Object.__proto__) {
        var e = HTMLElement.prototype;

        if (t.is) {
          var n = document.createElement(t.tag);
          e = Object.getPrototypeOf(n);
        }

        for (var i, o = t.prototype, r = !1; o;) {
          o == e && (r = !0), i = Object.getPrototypeOf(o), i && (o.__proto__ = i), o = i;
        }

        r || console.warn(t.tag + " prototype not found in prototype chain for " + t.is), t.native = e;
      }
    }

    function u(t) {
      return y(E(t.tag), t);
    }

    function c(t) {
      return t ? x[t.toLowerCase()] : void 0;
    }

    function l(t, e) {
      x[t] = e;
    }

    function h(t) {
      return function () {
        return u(t);
      };
    }

    function p(t, e, n) {
      return t === w ? d(e, n) : S(t, e);
    }

    function d(t, e) {
      t && (t = t.toLowerCase()), e && (e = e.toLowerCase());
      var n = c(e || t);

      if (n) {
        if (t == n.tag && e == n.is) return new n.ctor();
        if (!e && !n.is) return new n.ctor();
      }

      var i;
      return e ? (i = d(t), i.setAttribute("is", e), i) : (i = E(t), t.indexOf("-") >= 0 && b(i, HTMLElement), i);
    }

    function f(t, e) {
      var n = t[e];

      t[e] = function () {
        var t = n.apply(this, arguments);
        return v(t), t;
      };
    }

    var g,
        m = (t.isIE, t.upgradeDocumentTree),
        v = t.upgradeAll,
        y = t.upgradeWithDefinition,
        b = t.implementPrototype,
        A = t.useNative,
        C = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"],
        x = {},
        w = "http://www.w3.org/1999/xhtml",
        E = document.createElement.bind(document),
        S = document.createElementNS.bind(document);
    g = Object.__proto__ || A ? function (t, e) {
      return t instanceof e;
    } : function (t, e) {
      if (t instanceof e) return !0;

      for (var n = t; n;) {
        if (n === e.prototype) return !0;
        n = n.__proto__;
      }

      return !1;
    }, f(Node.prototype, "cloneNode"), f(document, "importNode"), document.registerElement = e, document.createElement = d, document.createElementNS = p, t.registry = x, t.instanceof = g, t.reservedTagList = C, t.getRegisteredDefinition = c, document.register = document.registerElement;
  }), function (t) {
    function e() {
      r(window.wrap(document)), window.CustomElements.ready = !0;

      var t = window.requestAnimationFrame || function (t) {
        setTimeout(t, 16);
      };

      t(function () {
        setTimeout(function () {
          window.CustomElements.readyTime = Date.now(), window.HTMLImports && (window.CustomElements.elapsed = window.CustomElements.readyTime - window.HTMLImports.readyTime), document.dispatchEvent(new CustomEvent("WebComponentsReady", {
            bubbles: !0
          }));
        });
      });
    }

    var n = t.useNative,
        i = t.initializeModules;

    if (t.isIE, n) {
      var o = function o() {};

      t.watchShadow = o, t.upgrade = o, t.upgradeAll = o, t.upgradeDocumentTree = o, t.upgradeSubtree = o, t.takeRecords = o, t.instanceof = function (t, e) {
        return t instanceof e;
      };
    } else i();

    var r = t.upgradeDocumentTree,
        s = t.upgradeDocument;
    if (window.wrap || (window.ShadowDOMPolyfill ? (window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded, window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded) : window.wrap = window.unwrap = function (t) {
      return t;
    }), window.HTMLImports && (window.HTMLImports.__importsParsingHook = function (t) {
      t.import && s(wrap(t.import));
    }), "complete" === document.readyState || t.flags.eager) e();else if ("interactive" !== document.readyState || window.attachEvent || window.HTMLImports && !window.HTMLImports.ready) {
      var a = window.HTMLImports && !window.HTMLImports.ready ? "HTMLImportsLoaded" : "DOMContentLoaded";
      window.addEventListener(a, e);
    } else e();
  }(window.CustomElements));
}.call(this), function () {}.call(this), function () {
  var t = this;
  (function () {
    (function () {
      this.Trix = {
        VERSION: "1.3.1",
        ZERO_WIDTH_SPACE: "\uFEFF",
        NON_BREAKING_SPACE: "\xa0",
        OBJECT_REPLACEMENT_CHARACTER: "\uFFFC",
        browser: {
          composesExistingText: /Android.*Chrome/.test(navigator.userAgent),
          forcesObjectResizing: /Trident.*rv:11/.test(navigator.userAgent),
          supportsInputEvents: function () {
            var t, e, n, i;
            if ("undefined" == typeof InputEvent) return !1;

            for (i = ["data", "getTargetRanges", "inputType"], t = 0, e = i.length; e > t; t++) {
              if (n = i[t], !(n in InputEvent.prototype)) return !1;
            }

            return !0;
          }()
        },
        config: {}
      };
    }).call(this);
  }).call(t);
  var e = t.Trix;
  (function () {
    (function () {
      e.BasicObject = function () {
        function t() {}

        var e, n, i;
        return t.proxyMethod = function (t) {
          var i, o, r, s, a;
          return r = n(t), i = r.name, s = r.toMethod, a = r.toProperty, o = r.optional, this.prototype[i] = function () {
            var t, n;
            return t = null != s ? o ? "function" == typeof this[s] ? this[s]() : void 0 : this[s]() : null != a ? this[a] : void 0, o ? (n = null != t ? t[i] : void 0, null != n ? e.call(n, t, arguments) : void 0) : (n = t[i], e.call(n, t, arguments));
          };
        }, n = function n(t) {
          var e, n;
          if (!(n = t.match(i))) throw new Error("can't parse @proxyMethod expression: " + t);
          return e = {
            name: n[4]
          }, null != n[2] ? e.toMethod = n[1] : e.toProperty = n[1], null != n[3] && (e.optional = !0), e;
        }, e = Function.prototype.apply, i = /^(.+?)(\(\))?(\?)?\.(.+?)$/, t;
      }();
    }).call(this), function () {
      var t = function t(_t, e) {
        function i() {
          this.constructor = _t;
        }

        for (var o in e) {
          n.call(e, o) && (_t[o] = e[o]);
        }

        return i.prototype = e.prototype, _t.prototype = new i(), _t.__super__ = e.prototype, _t;
      },
          n = {}.hasOwnProperty;

      e.Object = function (n) {
        function i() {
          this.id = ++o;
        }

        var o;
        return t(i, n), o = 0, i.fromJSONString = function (t) {
          return this.fromJSON(JSON.parse(t));
        }, i.prototype.hasSameConstructorAs = function (t) {
          return this.constructor === (null != t ? t.constructor : void 0);
        }, i.prototype.isEqualTo = function (t) {
          return this === t;
        }, i.prototype.inspect = function () {
          var t, e, n;
          return t = function () {
            var t, i, o;
            i = null != (t = this.contentsForInspection()) ? t : {}, o = [];

            for (e in i) {
              n = i[e], o.push(e + "=" + n);
            }

            return o;
          }.call(this), "#<" + this.constructor.name + ":" + this.id + (t.length ? " " + t.join(", ") : "") + ">";
        }, i.prototype.contentsForInspection = function () {}, i.prototype.toJSONString = function () {
          return JSON.stringify(this);
        }, i.prototype.toUTF16String = function () {
          return e.UTF16String.box(this);
        }, i.prototype.getCacheKey = function () {
          return this.id.toString();
        }, i;
      }(e.BasicObject);
    }.call(this), function () {
      e.extend = function (t) {
        var e, n;

        for (e in t) {
          n = t[e], this[e] = n;
        }

        return this;
      };
    }.call(this), function () {
      e.extend({
        defer: function defer(t) {
          return setTimeout(t, 1);
        }
      });
    }.call(this), function () {
      var t, n;
      e.extend({
        normalizeSpaces: function normalizeSpaces(t) {
          return t.replace(RegExp("" + e.ZERO_WIDTH_SPACE, "g"), "").replace(RegExp("" + e.NON_BREAKING_SPACE, "g"), " ");
        },
        normalizeNewlines: function normalizeNewlines(t) {
          return t.replace(/\r\n/g, "\n");
        },
        breakableWhitespacePattern: RegExp("[^\\S" + e.NON_BREAKING_SPACE + "]"),
        squishBreakableWhitespace: function squishBreakableWhitespace(t) {
          return t.replace(RegExp("" + e.breakableWhitespacePattern.source, "g"), " ").replace(/\ {2,}/g, " ");
        },
        summarizeStringChange: function summarizeStringChange(t, i) {
          var o, r, s, a;
          return t = e.UTF16String.box(t), i = e.UTF16String.box(i), i.length < t.length ? (r = n(t, i), a = r[0], o = r[1]) : (s = n(i, t), o = s[0], a = s[1]), {
            added: o,
            removed: a
          };
        }
      }), n = function n(_n, i) {
        var o, r, s, a, u;
        return _n.isEqualTo(i) ? ["", ""] : (r = t(_n, i), a = r.utf16String.length, s = a ? (u = r.offset, r, o = _n.codepoints.slice(0, u).concat(_n.codepoints.slice(u + a)), t(i, e.UTF16String.fromCodepoints(o))) : t(i, _n), [r.utf16String.toString(), s.utf16String.toString()]);
      }, t = function t(_t2, e) {
        var n, i, o;

        for (n = 0, i = _t2.length, o = e.length; i > n && _t2.charAt(n).isEqualTo(e.charAt(n));) {
          n++;
        }

        for (; i > n + 1 && _t2.charAt(i - 1).isEqualTo(e.charAt(o - 1));) {
          i--, o--;
        }

        return {
          utf16String: _t2.slice(n, i),
          offset: n
        };
      };
    }.call(this), function () {
      e.extend({
        copyObject: function copyObject(t) {
          var e, n, i;
          null == t && (t = {}), n = {};

          for (e in t) {
            i = t[e], n[e] = i;
          }

          return n;
        },
        objectsAreEqual: function objectsAreEqual(t, e) {
          var n, i;
          if (null == t && (t = {}), null == e && (e = {}), Object.keys(t).length !== Object.keys(e).length) return !1;

          for (n in t) {
            if (i = t[n], i !== e[n]) return !1;
          }

          return !0;
        }
      });
    }.call(this), function () {
      var t = [].slice;
      e.extend({
        arraysAreEqual: function arraysAreEqual(t, e) {
          var n, i, o, r;
          if (null == t && (t = []), null == e && (e = []), t.length !== e.length) return !1;

          for (i = n = 0, o = t.length; o > n; i = ++n) {
            if (r = t[i], r !== e[i]) return !1;
          }

          return !0;
        },
        arrayStartsWith: function arrayStartsWith(t, n) {
          return null == t && (t = []), null == n && (n = []), e.arraysAreEqual(t.slice(0, n.length), n);
        },
        spliceArray: function spliceArray() {
          var e, n, i;
          return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], i = n.slice(0), i.splice.apply(i, e), i;
        },
        summarizeArrayChange: function summarizeArrayChange(t, e) {
          var n, i, o, r, s, a, u, c, l, h, p;

          for (null == t && (t = []), null == e && (e = []), n = [], h = [], o = new Set(), r = 0, u = t.length; u > r; r++) {
            p = t[r], o.add(p);
          }

          for (i = new Set(), s = 0, c = e.length; c > s; s++) {
            p = e[s], i.add(p), o.has(p) || n.push(p);
          }

          for (a = 0, l = t.length; l > a; a++) {
            p = t[a], i.has(p) || h.push(p);
          }

          return {
            added: n,
            removed: h
          };
        }
      });
    }.call(this), function () {
      var t, n, i, o;
      t = null, n = null, o = null, i = null, e.extend({
        getAllAttributeNames: function getAllAttributeNames() {
          return null != t ? t : t = e.getTextAttributeNames().concat(e.getBlockAttributeNames());
        },
        getBlockConfig: function getBlockConfig(t) {
          return e.config.blockAttributes[t];
        },
        getBlockAttributeNames: function getBlockAttributeNames() {
          return null != n ? n : n = Object.keys(e.config.blockAttributes);
        },
        getTextConfig: function getTextConfig(t) {
          return e.config.textAttributes[t];
        },
        getTextAttributeNames: function getTextAttributeNames() {
          return null != o ? o : o = Object.keys(e.config.textAttributes);
        },
        getListAttributeNames: function getListAttributeNames() {
          var t, n;
          return null != i ? i : i = function () {
            var i, o;
            i = e.config.blockAttributes, o = [];

            for (t in i) {
              n = i[t].listAttribute, null != n && o.push(n);
            }

            return o;
          }();
        }
      });
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = document.documentElement, n = null != (i = null != (o = null != (r = t.matchesSelector) ? r : t.webkitMatchesSelector) ? o : t.msMatchesSelector) ? i : t.mozMatchesSelector, e.extend({
        handleEvent: function handleEvent(n, i) {
          var o, r, _s, a, u, c, l, h, p, d, f, g;

          return h = null != i ? i : {}, c = h.onElement, u = h.matchingSelector, g = h.withCallback, a = h.inPhase, l = h.preventDefault, d = h.times, r = null != c ? c : t, p = u, o = g, f = "capturing" === a, _s = function s(t) {
            var n;
            return null != d && 0 === --d && _s.destroy(), n = e.findClosestElementFromNode(t.target, {
              matchingSelector: p
            }), null != n && (null != g && g.call(n, t, n), l) ? t.preventDefault() : void 0;
          }, _s.destroy = function () {
            return r.removeEventListener(n, _s, f);
          }, r.addEventListener(n, _s, f), _s;
        },
        handleEventOnce: function handleEventOnce(t, n) {
          return null == n && (n = {}), n.times = 1, e.handleEvent(t, n);
        },
        triggerEvent: function triggerEvent(n, i) {
          var o, r, s, a, u, c, l;
          return l = null != i ? i : {}, c = l.onElement, r = l.bubbles, s = l.cancelable, o = l.attributes, a = null != c ? c : t, r = r !== !1, s = s !== !1, u = document.createEvent("Events"), u.initEvent(n, r, s), null != o && e.extend.call(u, o), a.dispatchEvent(u);
        },
        elementMatchesSelector: function elementMatchesSelector(t, e) {
          return 1 === (null != t ? t.nodeType : void 0) ? n.call(t, e) : void 0;
        },
        findClosestElementFromNode: function findClosestElementFromNode(t, n) {
          var i, o, r;

          for (o = null != n ? n : {}, i = o.matchingSelector, r = o.untilNode; null != t && t.nodeType !== Node.ELEMENT_NODE;) {
            t = t.parentNode;
          }

          if (null != t) {
            if (null == i) return t;
            if (t.closest && null == r) return t.closest(i);

            for (; t && t !== r;) {
              if (e.elementMatchesSelector(t, i)) return t;
              t = t.parentNode;
            }
          }
        },
        findInnerElement: function findInnerElement(t) {
          for (; null != t ? t.firstElementChild : void 0;) {
            t = t.firstElementChild;
          }

          return t;
        },
        innerElementIsActive: function innerElementIsActive(t) {
          return document.activeElement !== t && e.elementContainsNode(t, document.activeElement);
        },
        elementContainsNode: function elementContainsNode(t, e) {
          if (t && e) for (; e;) {
            if (e === t) return !0;
            e = e.parentNode;
          }
        },
        findNodeFromContainerAndOffset: function findNodeFromContainerAndOffset(t, e) {
          var n;
          if (t) return t.nodeType === Node.TEXT_NODE ? t : 0 === e ? null != (n = t.firstChild) ? n : t : t.childNodes.item(e - 1);
        },
        findElementFromContainerAndOffset: function findElementFromContainerAndOffset(t, n) {
          var i;
          return i = e.findNodeFromContainerAndOffset(t, n), e.findClosestElementFromNode(i);
        },
        findChildIndexOfNode: function findChildIndexOfNode(t) {
          var e;

          if (null != t ? t.parentNode : void 0) {
            for (e = 0; t = t.previousSibling;) {
              e++;
            }

            return e;
          }
        },
        removeNode: function removeNode(t) {
          var e;
          return null != t && null != (e = t.parentNode) ? e.removeChild(t) : void 0;
        },
        walkTree: function walkTree(t, e) {
          var n, i, o, r, s;
          return o = null != e ? e : {}, i = o.onlyNodesOfType, r = o.usingFilter, n = o.expandEntityReferences, s = function () {
            switch (i) {
              case "element":
                return NodeFilter.SHOW_ELEMENT;

              case "text":
                return NodeFilter.SHOW_TEXT;

              case "comment":
                return NodeFilter.SHOW_COMMENT;

              default:
                return NodeFilter.SHOW_ALL;
            }
          }(), document.createTreeWalker(t, s, null != r ? r : null, n === !0);
        },
        tagName: function tagName(t) {
          var e;
          return null != t && null != (e = t.tagName) ? e.toLowerCase() : void 0;
        },
        makeElement: function makeElement(t, e) {
          var n, i, o, r, s, a, u, c, l, h, p, d, f, g;

          if (null == e && (e = {}), "object" == _typeof(t) ? (e = t, t = e.tagName) : e = {
            attributes: e
          }, o = document.createElement(t), null != e.editable && (null == e.attributes && (e.attributes = {}), e.attributes.contenteditable = e.editable), e.attributes) {
            l = e.attributes;

            for (a in l) {
              g = l[a], o.setAttribute(a, g);
            }
          }

          if (e.style) {
            h = e.style;

            for (a in h) {
              g = h[a], o.style[a] = g;
            }
          }

          if (e.data) {
            p = e.data;

            for (a in p) {
              g = p[a], o.dataset[a] = g;
            }
          }

          if (e.className) for (d = e.className.split(" "), r = 0, u = d.length; u > r; r++) {
            i = d[r], o.classList.add(i);
          }
          if (e.textContent && (o.textContent = e.textContent), e.childNodes) for (f = [].concat(e.childNodes), s = 0, c = f.length; c > s; s++) {
            n = f[s], o.appendChild(n);
          }
          return o;
        },
        getBlockTagNames: function getBlockTagNames() {
          var t, n;
          return null != e.blockTagNames ? e.blockTagNames : e.blockTagNames = function () {
            var i, o;
            i = e.config.blockAttributes, o = [];

            for (t in i) {
              n = i[t].tagName, n && o.push(n);
            }

            return o;
          }();
        },
        nodeIsBlockContainer: function nodeIsBlockContainer(t) {
          return e.nodeIsBlockStartComment(null != t ? t.firstChild : void 0);
        },
        nodeProbablyIsBlockContainer: function nodeProbablyIsBlockContainer(t) {
          var n, i;
          return n = e.tagName(t), s.call(e.getBlockTagNames(), n) >= 0 && (i = e.tagName(t.firstChild), s.call(e.getBlockTagNames(), i) < 0);
        },
        nodeIsBlockStart: function nodeIsBlockStart(t, n) {
          var i;
          return i = (null != n ? n : {
            strict: !0
          }).strict, i ? e.nodeIsBlockStartComment(t) : e.nodeIsBlockStartComment(t) || !e.nodeIsBlockStartComment(t.firstChild) && e.nodeProbablyIsBlockContainer(t);
        },
        nodeIsBlockStartComment: function nodeIsBlockStartComment(t) {
          return e.nodeIsCommentNode(t) && "block" === (null != t ? t.data : void 0);
        },
        nodeIsCommentNode: function nodeIsCommentNode(t) {
          return (null != t ? t.nodeType : void 0) === Node.COMMENT_NODE;
        },
        nodeIsCursorTarget: function nodeIsCursorTarget(t, n) {
          var i;
          return i = (null != n ? n : {}).name, t ? e.nodeIsTextNode(t) ? t.data === e.ZERO_WIDTH_SPACE ? i ? t.parentNode.dataset.trixCursorTarget === i : !0 : void 0 : e.nodeIsCursorTarget(t.firstChild) : void 0;
        },
        nodeIsAttachmentElement: function nodeIsAttachmentElement(t) {
          return e.elementMatchesSelector(t, e.AttachmentView.attachmentSelector);
        },
        nodeIsEmptyTextNode: function nodeIsEmptyTextNode(t) {
          return e.nodeIsTextNode(t) && "" === (null != t ? t.data : void 0);
        },
        nodeIsTextNode: function nodeIsTextNode(t) {
          return (null != t ? t.nodeType : void 0) === Node.TEXT_NODE;
        }
      });
    }.call(this), function () {
      var t, n, i, o, r;
      t = e.copyObject, o = e.objectsAreEqual, e.extend({
        normalizeRange: i = function i(t) {
          var e;
          if (null != t) return Array.isArray(t) || (t = [t, t]), [n(t[0]), n(null != (e = t[1]) ? e : t[0])];
        },
        rangeIsCollapsed: function rangeIsCollapsed(t) {
          var e, n, o;
          if (null != t) return n = i(t), o = n[0], e = n[1], r(o, e);
        },
        rangesAreEqual: function rangesAreEqual(t, e) {
          var n, o, s, a, u, c;
          if (null != t && null != e) return s = i(t), o = s[0], n = s[1], a = i(e), c = a[0], u = a[1], r(o, c) && r(n, u);
        }
      }), n = function n(e) {
        return "number" == typeof e ? e : t(e);
      }, r = function r(t, e) {
        return "number" == typeof t ? t === e : o(t, e);
      };
    }.call(this), function () {
      var t, n, i, o, r, s, a;
      e.registerElement = function (t, e) {
        var n, i;
        return null == e && (e = {}), t = t.toLowerCase(), e = a(e), i = s(e), (n = i.defaultCSS) && (delete i.defaultCSS, o(n, t)), r(t, i);
      }, o = function o(t, e) {
        var n;
        return n = i(e), n.textContent = t.replace(/%t/g, e);
      }, i = function i(e) {
        var n, i;
        return n = document.createElement("style"), n.setAttribute("type", "text/css"), n.setAttribute("data-tag-name", e.toLowerCase()), (i = t()) && n.setAttribute("nonce", i), document.head.insertBefore(n, document.head.firstChild), n;
      }, t = function t() {
        var t;
        return (t = n("trix-csp-nonce") || n("csp-nonce")) ? t.getAttribute("content") : void 0;
      }, n = function n(t) {
        return document.head.querySelector("meta[name=" + t + "]");
      }, s = function s(t) {
        var e, n, i;
        n = {};

        for (e in t) {
          i = t[e], n[e] = "function" == typeof i ? {
            value: i
          } : i;
        }

        return n;
      }, a = function () {
        var t;
        return t = function t(_t3) {
          var e, n, i, o, r;

          for (e = {}, r = ["initialize", "connect", "disconnect"], n = 0, o = r.length; o > n; n++) {
            i = r[n], e[i] = _t3[i], delete _t3[i];
          }

          return e;
        }, window.customElements ? function (e) {
          var n, i, o, r, s;
          return s = t(e), o = s.initialize, n = s.connect, i = s.disconnect, o && (r = n, n = function n() {
            return this.initialized || (this.initialized = !0, o.call(this)), null != r ? r.call(this) : void 0;
          }), n && (e.connectedCallback = n), i && (e.disconnectedCallback = i), e;
        } : function (e) {
          var n, i, o, r;
          return r = t(e), o = r.initialize, n = r.connect, i = r.disconnect, o && (e.createdCallback = o), n && (e.attachedCallback = n), i && (e.detachedCallback = i), e;
        };
      }(), r = function () {
        return window.customElements ? function (t, e) {
          var _n2;

          return _n2 = function n() {
            return "object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) ? Reflect.construct(HTMLElement, [], _n2) : HTMLElement.apply(this);
          }, Object.setPrototypeOf(_n2.prototype, HTMLElement.prototype), Object.setPrototypeOf(_n2, HTMLElement), Object.defineProperties(_n2.prototype, e), window.customElements.define(t, _n2), _n2;
        } : function (t, e) {
          var n, i;
          return i = Object.create(HTMLElement.prototype, e), n = document.registerElement(t, {
            prototype: i
          }), Object.defineProperty(i, "constructor", {
            value: n
          }), n;
        };
      }();
    }.call(this), function () {
      var t, n;
      e.extend({
        getDOMSelection: function getDOMSelection() {
          var t;
          return t = window.getSelection(), t.rangeCount > 0 ? t : void 0;
        },
        getDOMRange: function getDOMRange() {
          var n, i;
          return (n = null != (i = e.getDOMSelection()) ? i.getRangeAt(0) : void 0) && !t(n) ? n : void 0;
        },
        setDOMRange: function setDOMRange(t) {
          var n;
          return n = window.getSelection(), n.removeAllRanges(), n.addRange(t), e.selectionChangeObserver.update();
        }
      }), t = function t(_t4) {
        return n(_t4.startContainer) || n(_t4.endContainer);
      }, n = function n(t) {
        return !Object.getPrototypeOf(t);
      };
    }.call(this), function () {
      var t;
      t = {
        "application/x-trix-feature-detection": "test"
      }, e.extend({
        dataTransferIsPlainText: function dataTransferIsPlainText(t) {
          var e, n, i;
          return i = t.getData("text/plain"), n = t.getData("text/html"), i && n ? (e = new DOMParser().parseFromString(n, "text/html").body, e.textContent === i ? !e.querySelector("*") : void 0) : null != i ? i.length : void 0;
        },
        dataTransferIsWritable: function dataTransferIsWritable(e) {
          var n, i;

          if (null != (null != e ? e.setData : void 0)) {
            for (n in t) {
              if (i = t[n], !function () {
                try {
                  return e.setData(n, i), e.getData(n) === i;
                } catch (t) {}
              }()) return;
            }

            return !0;
          }
        },
        keyEventIsKeyboardCommand: function () {
          return /Mac|^iP/.test(navigator.platform) ? function (t) {
            return t.metaKey;
          } : function (t) {
            return t.ctrlKey;
          };
        }()
      });
    }.call(this), function () {
      e.extend({
        RTL_PATTERN: /[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/,
        getDirection: function () {
          var t, n, i, o;
          return n = e.makeElement("input", {
            dir: "auto",
            name: "x",
            dirName: "x.dir"
          }), t = e.makeElement("form"), t.appendChild(n), i = function () {
            try {
              return new FormData(t).has(n.dirName);
            } catch (e) {}
          }(), o = function () {
            try {
              return n.matches(":dir(ltr),:dir(rtl)");
            } catch (t) {}
          }(), i ? function (e) {
            return n.value = e, new FormData(t).get(n.dirName);
          } : o ? function (t) {
            return n.value = t, n.matches(":dir(rtl)") ? "rtl" : "ltr";
          } : function (t) {
            var n;
            return n = t.trim().charAt(0), e.RTL_PATTERN.test(n) ? "rtl" : "ltr";
          };
        }()
      });
    }.call(this), function () {}.call(this), function () {
      var t,
          n = function n(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) {
          i.call(e, o) && (t[o] = e[o]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty;

      t = e.arraysAreEqual, e.Hash = function (i) {
        function o(t) {
          null == t && (t = {}), this.values = s(t), o.__super__.constructor.apply(this, arguments);
        }

        var r, s, a, u, c;
        return n(o, i), o.fromCommonAttributesOfObjects = function (t) {
          var e, n, i, o, s, a;
          if (null == t && (t = []), !t.length) return new this();

          for (e = r(t[0]), i = e.getKeys(), a = t.slice(1), n = 0, o = a.length; o > n; n++) {
            s = a[n], i = e.getKeysCommonToHash(r(s)), e = e.slice(i);
          }

          return e;
        }, o.box = function (t) {
          return r(t);
        }, o.prototype.add = function (t, e) {
          return this.merge(u(t, e));
        }, o.prototype.remove = function (t) {
          return new e.Hash(s(this.values, t));
        }, o.prototype.get = function (t) {
          return this.values[t];
        }, o.prototype.has = function (t) {
          return t in this.values;
        }, o.prototype.merge = function (t) {
          return new e.Hash(a(this.values, c(t)));
        }, o.prototype.slice = function (t) {
          var n, i, o, r;

          for (r = {}, n = 0, o = t.length; o > n; n++) {
            i = t[n], this.has(i) && (r[i] = this.values[i]);
          }

          return new e.Hash(r);
        }, o.prototype.getKeys = function () {
          return Object.keys(this.values);
        }, o.prototype.getKeysCommonToHash = function (t) {
          var e, n, i, o, s;

          for (t = r(t), o = this.getKeys(), s = [], e = 0, i = o.length; i > e; e++) {
            n = o[e], this.values[n] === t.values[n] && s.push(n);
          }

          return s;
        }, o.prototype.isEqualTo = function (e) {
          return t(this.toArray(), r(e).toArray());
        }, o.prototype.isEmpty = function () {
          return 0 === this.getKeys().length;
        }, o.prototype.toArray = function () {
          var t, e, n;
          return (null != this.array ? this.array : this.array = function () {
            var i;
            e = [], i = this.values;

            for (t in i) {
              n = i[t], e.push(t, n);
            }

            return e;
          }.call(this)).slice(0);
        }, o.prototype.toObject = function () {
          return s(this.values);
        }, o.prototype.toJSON = function () {
          return this.toObject();
        }, o.prototype.contentsForInspection = function () {
          return {
            values: JSON.stringify(this.values)
          };
        }, u = function u(t, e) {
          var n;
          return n = {}, n[t] = e, n;
        }, a = function a(t, e) {
          var n, i, o;
          i = s(t);

          for (n in e) {
            o = e[n], i[n] = o;
          }

          return i;
        }, s = function s(t, e) {
          var n, i, o, r, s;

          for (r = {}, s = Object.keys(t).sort(), n = 0, o = s.length; o > n; n++) {
            i = s[n], i !== e && (r[i] = t[i]);
          }

          return r;
        }, r = function r(t) {
          return t instanceof e.Hash ? t : new e.Hash(t);
        }, c = function c(t) {
          return t instanceof e.Hash ? t.values : t;
        }, o;
      }(e.Object);
    }.call(this), function () {
      e.ObjectGroup = function () {
        function t(t, e) {
          var n, i;
          this.objects = null != t ? t : [], i = e.depth, n = e.asTree, n && (this.depth = i, this.objects = this.constructor.groupObjects(this.objects, {
            asTree: n,
            depth: this.depth + 1
          }));
        }

        return t.groupObjects = function (t, e) {
          var n, i, o, r, s, a, u, c, l;

          for (null == t && (t = []), l = null != e ? e : {}, o = l.depth, n = l.asTree, n && null == o && (o = 0), c = [], s = 0, a = t.length; a > s; s++) {
            if (u = t[s], r) {
              if (("function" == typeof u.canBeGrouped ? u.canBeGrouped(o) : void 0) && ("function" == typeof (i = r[r.length - 1]).canBeGroupedWith ? i.canBeGroupedWith(u, o) : void 0)) {
                r.push(u);
                continue;
              }

              c.push(new this(r, {
                depth: o,
                asTree: n
              })), r = null;
            }

            ("function" == typeof u.canBeGrouped ? u.canBeGrouped(o) : void 0) ? r = [u] : c.push(u);
          }

          return r && c.push(new this(r, {
            depth: o,
            asTree: n
          })), c;
        }, t.prototype.getObjects = function () {
          return this.objects;
        }, t.prototype.getDepth = function () {
          return this.depth;
        }, t.prototype.getCacheKey = function () {
          var t, e, n, i, o;

          for (e = ["objectGroup"], o = this.getObjects(), t = 0, n = o.length; n > t; t++) {
            i = o[t], e.push(i.getCacheKey());
          }

          return e.join("/");
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t5, e) {
        function i() {
          this.constructor = _t5;
        }

        for (var o in e) {
          n.call(e, o) && (_t5[o] = e[o]);
        }

        return i.prototype = e.prototype, _t5.prototype = new i(), _t5.__super__ = e.prototype, _t5;
      },
          n = {}.hasOwnProperty;

      e.ObjectMap = function (e) {
        function n(t) {
          var e, n, i, o, r;

          for (null == t && (t = []), this.objects = {}, i = 0, o = t.length; o > i; i++) {
            r = t[i], n = JSON.stringify(r), null == (e = this.objects)[n] && (e[n] = r);
          }
        }

        return t(n, e), n.prototype.find = function (t) {
          var e;
          return e = JSON.stringify(t), this.objects[e];
        }, n;
      }(e.BasicObject);
    }.call(this), function () {
      e.ElementStore = function () {
        function t(t) {
          this.reset(t);
        }

        var e;
        return t.prototype.add = function (t) {
          var n;
          return n = e(t), this.elements[n] = t;
        }, t.prototype.remove = function (t) {
          var n, i;
          return n = e(t), (i = this.elements[n]) ? (delete this.elements[n], i) : void 0;
        }, t.prototype.reset = function (t) {
          var e, n, i;

          for (null == t && (t = []), this.elements = {}, n = 0, i = t.length; i > n; n++) {
            e = t[n], this.add(e);
          }

          return t;
        }, e = function e(t) {
          return t.dataset.trixStoreKey;
        }, t;
      }();
    }.call(this), function () {}.call(this), function () {
      var t = function t(_t6, e) {
        function i() {
          this.constructor = _t6;
        }

        for (var o in e) {
          n.call(e, o) && (_t6[o] = e[o]);
        }

        return i.prototype = e.prototype, _t6.prototype = new i(), _t6.__super__ = e.prototype, _t6;
      },
          n = {}.hasOwnProperty;

      e.Operation = function (e) {
        function n() {
          return n.__super__.constructor.apply(this, arguments);
        }

        return t(n, e), n.prototype.isPerforming = function () {
          return this.performing === !0;
        }, n.prototype.hasPerformed = function () {
          return this.performed === !0;
        }, n.prototype.hasSucceeded = function () {
          return this.performed && this.succeeded;
        }, n.prototype.hasFailed = function () {
          return this.performed && !this.succeeded;
        }, n.prototype.getPromise = function () {
          return null != this.promise ? this.promise : this.promise = new Promise(function (t) {
            return function (e, n) {
              return t.performing = !0, t.perform(function (i, o) {
                return t.succeeded = i, t.performing = !1, t.performed = !0, t.succeeded ? e(o) : n(o);
              });
            };
          }(this));
        }, n.prototype.perform = function (t) {
          return t(!1);
        }, n.prototype.release = function () {
          var t;
          return null != (t = this.promise) && "function" == typeof t.cancel && t.cancel(), this.promise = null, this.performing = null, this.performed = null, this.succeeded = null;
        }, n.proxyMethod("getPromise().then"), n.proxyMethod("getPromise().catch"), n;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s = function s(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          a.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          a = {}.hasOwnProperty;

      e.UTF16String = function (t) {
        function e(t, e) {
          this.ucs2String = t, this.codepoints = e, this.length = this.codepoints.length, this.ucs2Length = this.ucs2String.length;
        }

        return s(e, t), e.box = function (t) {
          return null == t && (t = ""), t instanceof this ? t : this.fromUCS2String(null != t ? t.toString() : void 0);
        }, e.fromUCS2String = function (t) {
          return new this(t, o(t));
        }, e.fromCodepoints = function (t) {
          return new this(r(t), t);
        }, e.prototype.offsetToUCS2Offset = function (t) {
          return r(this.codepoints.slice(0, Math.max(0, t))).length;
        }, e.prototype.offsetFromUCS2Offset = function (t) {
          return o(this.ucs2String.slice(0, Math.max(0, t))).length;
        }, e.prototype.slice = function () {
          var t;
          return this.constructor.fromCodepoints((t = this.codepoints).slice.apply(t, arguments));
        }, e.prototype.charAt = function (t) {
          return this.slice(t, t + 1);
        }, e.prototype.isEqualTo = function (t) {
          return this.constructor.box(t).ucs2String === this.ucs2String;
        }, e.prototype.toJSON = function () {
          return this.ucs2String;
        }, e.prototype.getCacheKey = function () {
          return this.ucs2String;
        }, e.prototype.toString = function () {
          return this.ucs2String;
        }, e;
      }(e.BasicObject), t = 1 === ("function" == typeof Array.from ? Array.from("\uD83D\uDC7C").length : void 0), n = null != ("function" == typeof " ".codePointAt ? " ".codePointAt(0) : void 0), i = " \uD83D\uDC7C" === ("function" == typeof String.fromCodePoint ? String.fromCodePoint(32, 128124) : void 0), o = t && n ? function (t) {
        return Array.from(t).map(function (t) {
          return t.codePointAt(0);
        });
      } : function (t) {
        var e, n, i, o, r;

        for (o = [], e = 0, i = t.length; i > e;) {
          r = t.charCodeAt(e++), r >= 55296 && 56319 >= r && i > e && (n = t.charCodeAt(e++), 56320 === (64512 & n) ? r = ((1023 & r) << 10) + (1023 & n) + 65536 : e--), o.push(r);
        }

        return o;
      }, r = i ? function (t) {
        return String.fromCodePoint.apply(String, t);
      } : function (t) {
        var e, n, i;
        return e = function () {
          var e, o, r;

          for (r = [], e = 0, o = t.length; o > e; e++) {
            i = t[e], n = "", i > 65535 && (i -= 65536, n += String.fromCharCode(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), r.push(n + String.fromCharCode(i));
          }

          return r;
        }(), e.join("");
      };
    }.call(this), function () {}.call(this), function () {}.call(this), function () {
      e.config.lang = {
        attachFiles: "Attach Files",
        bold: "Bold",
        bullets: "Bullets",
        "byte": "Byte",
        bytes: "Bytes",
        captionPlaceholder: "Add a caption\u2026",
        code: "Code",
        heading1: "Heading",
        indent: "Increase Level",
        italic: "Italic",
        link: "Link",
        numbers: "Numbers",
        outdent: "Decrease Level",
        quote: "Quote",
        redo: "Redo",
        remove: "Remove",
        strike: "Strikethrough",
        undo: "Undo",
        unlink: "Unlink",
        url: "URL",
        urlPlaceholder: "Enter a URL\u2026",
        GB: "GB",
        KB: "KB",
        MB: "MB",
        PB: "PB",
        TB: "TB"
      };
    }.call(this), function () {
      e.config.css = {
        attachment: "attachment",
        attachmentCaption: "attachment__caption",
        attachmentCaptionEditor: "attachment__caption-editor",
        attachmentMetadata: "attachment__metadata",
        attachmentMetadataContainer: "attachment__metadata-container",
        attachmentName: "attachment__name",
        attachmentProgress: "attachment__progress",
        attachmentSize: "attachment__size",
        attachmentToolbar: "attachment__toolbar",
        attachmentGallery: "attachment-gallery"
      };
    }.call(this), function () {
      var t;
      e.config.blockAttributes = t = {
        "default": {
          tagName: "div",
          parse: !1
        },
        quote: {
          tagName: "blockquote",
          nestable: !0
        },
        heading1: {
          tagName: "h1",
          terminal: !0,
          breakOnReturn: !0,
          group: !1
        },
        code: {
          tagName: "pre",
          terminal: !0,
          text: {
            plaintext: !0
          }
        },
        bulletList: {
          tagName: "ul",
          parse: !1
        },
        bullet: {
          tagName: "li",
          listAttribute: "bulletList",
          group: !1,
          nestable: !0,
          test: function test(n) {
            return e.tagName(n.parentNode) === t[this.listAttribute].tagName;
          }
        },
        numberList: {
          tagName: "ol",
          parse: !1
        },
        number: {
          tagName: "li",
          listAttribute: "numberList",
          group: !1,
          nestable: !0,
          test: function test(n) {
            return e.tagName(n.parentNode) === t[this.listAttribute].tagName;
          }
        },
        attachmentGallery: {
          tagName: "div",
          exclusive: !0,
          terminal: !0,
          parse: !1,
          group: !1
        }
      };
    }.call(this), function () {
      var t, n;
      t = e.config.lang, n = [t.bytes, t.KB, t.MB, t.GB, t.TB, t.PB], e.config.fileSize = {
        prefix: "IEC",
        precision: 2,
        formatter: function formatter(e) {
          var i, o, r, s, a;

          switch (e) {
            case 0:
              return "0 " + t.bytes;

            case 1:
              return "1 " + t.byte;

            default:
              return i = function () {
                switch (this.prefix) {
                  case "SI":
                    return 1e3;

                  case "IEC":
                    return 1024;
                }
              }.call(this), o = Math.floor(Math.log(e) / Math.log(i)), r = e / Math.pow(i, o), s = r.toFixed(this.precision), a = s.replace(/0*$/, "").replace(/\.$/, ""), a + " " + n[o];
          }
        }
      };
    }.call(this), function () {
      e.config.textAttributes = {
        bold: {
          tagName: "strong",
          inheritable: !0,
          parser: function parser(t) {
            var e;
            return e = window.getComputedStyle(t), "bold" === e.fontWeight || e.fontWeight >= 600;
          }
        },
        italic: {
          tagName: "em",
          inheritable: !0,
          parser: function parser(t) {
            var e;
            return e = window.getComputedStyle(t), "italic" === e.fontStyle;
          }
        },
        href: {
          groupTagName: "a",
          parser: function parser(t) {
            var n, i, o;
            return n = e.AttachmentView.attachmentSelector, o = "a:not(" + n + ")", (i = e.findClosestElementFromNode(t, {
              matchingSelector: o
            })) ? i.getAttribute("href") : void 0;
          }
        },
        strike: {
          tagName: "del",
          inheritable: !0
        },
        frozen: {
          style: {
            backgroundColor: "highlight"
          }
        }
      };
    }.call(this), function () {
      var t, n, i, o, r;
      r = "[data-trix-serialize=false]", o = ["contenteditable", "data-trix-id", "data-trix-store-key", "data-trix-mutable", "data-trix-placeholder", "tabindex"], n = "data-trix-serialized-attributes", i = "[" + n + "]", t = new RegExp("<!--block-->", "g"), e.extend({
        serializers: {
          "application/json": function applicationJson(t) {
            var n;
            if (t instanceof e.Document) n = t;else {
              if (!(t instanceof HTMLElement)) throw new Error("unserializable object");
              n = e.Document.fromHTML(t.innerHTML);
            }
            return n.toSerializableDocument().toJSONString();
          },
          "text/html": function textHtml(s) {
            var a, u, c, l, h, p, d, f, g, m, v, y, b, A, C, x, w;
            if (s instanceof e.Document) l = e.DocumentView.render(s);else {
              if (!(s instanceof HTMLElement)) throw new Error("unserializable object");
              l = s.cloneNode(!0);
            }

            for (A = l.querySelectorAll(r), h = 0, g = A.length; g > h; h++) {
              c = A[h], e.removeNode(c);
            }

            for (p = 0, m = o.length; m > p; p++) {
              for (a = o[p], C = l.querySelectorAll("[" + a + "]"), d = 0, v = C.length; v > d; d++) {
                c = C[d], c.removeAttribute(a);
              }
            }

            for (x = l.querySelectorAll(i), f = 0, y = x.length; y > f; f++) {
              c = x[f];

              try {
                u = JSON.parse(c.getAttribute(n)), c.removeAttribute(n);

                for (b in u) {
                  w = u[b], c.setAttribute(b, w);
                }
              } catch (E) {}
            }

            return l.innerHTML.replace(t, "");
          }
        },
        deserializers: {
          "application/json": function applicationJson(t) {
            return e.Document.fromJSONString(t);
          },
          "text/html": function textHtml(t) {
            return e.Document.fromHTML(t);
          }
        },
        serializeToContentType: function serializeToContentType(t, n) {
          var i;
          if (i = e.serializers[n]) return i(t);
          throw new Error("unknown content type: " + n);
        },
        deserializeFromContentType: function deserializeFromContentType(t, n) {
          var i;
          if (i = e.deserializers[n]) return i(t);
          throw new Error("unknown content type: " + n);
        }
      });
    }.call(this), function () {
      var t;
      t = e.config.lang, e.config.toolbar = {
        getDefaultHTML: function getDefaultHTML() {
          return '<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="' + t.bold + '" tabindex="-1">' + t.bold + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="' + t.italic + '" tabindex="-1">' + t.italic + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="' + t.strike + '" tabindex="-1">' + t.strike + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="' + t.link + '" tabindex="-1">' + t.link + '</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="' + t.heading1 + '" tabindex="-1">' + t.heading1 + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="' + t.quote + '" tabindex="-1">' + t.quote + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="' + t.code + '" tabindex="-1">' + t.code + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="' + t.bullets + '" tabindex="-1">' + t.bullets + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="' + t.numbers + '" tabindex="-1">' + t.numbers + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="' + t.outdent + '" tabindex="-1">' + t.outdent + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="' + t.indent + '" tabindex="-1">' + t.indent + '</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="' + t.attachFiles + '" tabindex="-1">' + t.attachFiles + '</button>\n  </span>\n\n  <span class="trix-button-group-spacer"></span>\n\n  <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="' + t.undo + '" tabindex="-1">' + t.undo + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="' + t.redo + '" tabindex="-1">' + t.redo + '</button>\n  </span>\n</div>\n\n<div class="trix-dialogs" data-trix-dialogs>\n  <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n    <div class="trix-dialog__link-fields">\n      <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="' + t.urlPlaceholder + '" aria-label="' + t.url + '" required data-trix-input>\n      <div class="trix-button-group">\n        <input type="button" class="trix-button trix-button--dialog" value="' + t.link + '" data-trix-method="setAttribute">\n        <input type="button" class="trix-button trix-button--dialog" value="' + t.unlink + '" data-trix-method="removeAttribute">\n      </div>\n    </div>\n  </div>\n</div>';
        }
      };
    }.call(this), function () {
      e.config.undoInterval = 5e3;
    }.call(this), function () {
      e.config.attachments = {
        preview: {
          presentation: "gallery",
          caption: {
            name: !0,
            size: !0
          }
        },
        file: {
          caption: {
            size: !0
          }
        }
      };
    }.call(this), function () {
      e.config.keyNames = {
        8: "backspace",
        9: "tab",
        13: "return",
        27: "escape",
        37: "left",
        39: "right",
        46: "delete",
        68: "d",
        72: "h",
        79: "o"
      };
    }.call(this), function () {
      e.config.input = {
        level2Enabled: !0,
        getLevel: function getLevel() {
          return this.level2Enabled && e.browser.supportsInputEvents ? 2 : 0;
        },
        pickFiles: function pickFiles(t) {
          var n;
          return n = e.makeElement("input", {
            type: "file",
            multiple: !0,
            hidden: !0,
            id: this.fileInputId
          }), n.addEventListener("change", function () {
            return t(n.files), e.removeNode(n);
          }), e.removeNode(document.getElementById(this.fileInputId)), document.body.appendChild(n), n.click();
        },
        fileInputId: "trix-file-input-" + Date.now().toString(16)
      };
    }.call(this), function () {}.call(this), function () {
      e.registerElement("trix-toolbar", {
        defaultCSS: "%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}",
        initialize: function initialize() {
          return "" === this.innerHTML ? this.innerHTML = e.config.toolbar.getDefaultHTML() : void 0;
        }
      });
    }.call(this), function () {
      var t = function t(_t7, e) {
        function i() {
          this.constructor = _t7;
        }

        for (var o in e) {
          n.call(e, o) && (_t7[o] = e[o]);
        }

        return i.prototype = e.prototype, _t7.prototype = new i(), _t7.__super__ = e.prototype, _t7;
      },
          n = {}.hasOwnProperty,
          i = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      e.ObjectView = function (n) {
        function o(t, e) {
          this.object = t, this.options = null != e ? e : {}, this.childViews = [], this.rootView = this;
        }

        return t(o, n), o.prototype.getNodes = function () {
          var t, e, n, i, o;

          for (null == this.nodes && (this.nodes = this.createNodes()), i = this.nodes, o = [], t = 0, e = i.length; e > t; t++) {
            n = i[t], o.push(n.cloneNode(!0));
          }

          return o;
        }, o.prototype.invalidate = function () {
          var t;
          return this.nodes = null, this.childViews = [], null != (t = this.parentView) ? t.invalidate() : void 0;
        }, o.prototype.invalidateViewForObject = function (t) {
          var e;
          return null != (e = this.findViewForObject(t)) ? e.invalidate() : void 0;
        }, o.prototype.findOrCreateCachedChildView = function (t, e) {
          var n;
          return (n = this.getCachedViewForObject(e)) ? this.recordChildView(n) : (n = this.createChildView.apply(this, arguments), this.cacheViewForObject(n, e)), n;
        }, o.prototype.createChildView = function (t, n, i) {
          var o;
          return null == i && (i = {}), n instanceof e.ObjectGroup && (i.viewClass = t, t = e.ObjectGroupView), o = new t(n, i), this.recordChildView(o);
        }, o.prototype.recordChildView = function (t) {
          return t.parentView = this, t.rootView = this.rootView, this.childViews.push(t), t;
        }, o.prototype.getAllChildViews = function () {
          var t, e, n, i, o;

          for (o = [], i = this.childViews, e = 0, n = i.length; n > e; e++) {
            t = i[e], o.push(t), o = o.concat(t.getAllChildViews());
          }

          return o;
        }, o.prototype.findElement = function () {
          return this.findElementForObject(this.object);
        }, o.prototype.findElementForObject = function (t) {
          var e;
          return (e = null != t ? t.id : void 0) ? this.rootView.element.querySelector("[data-trix-id='" + e + "']") : void 0;
        }, o.prototype.findViewForObject = function (t) {
          var e, n, i, o;

          for (i = this.getAllChildViews(), e = 0, n = i.length; n > e; e++) {
            if (o = i[e], o.object === t) return o;
          }
        }, o.prototype.getViewCache = function () {
          return this.rootView !== this ? this.rootView.getViewCache() : this.isViewCachingEnabled() ? null != this.viewCache ? this.viewCache : this.viewCache = {} : void 0;
        }, o.prototype.isViewCachingEnabled = function () {
          return this.shouldCacheViews !== !1;
        }, o.prototype.enableViewCaching = function () {
          return this.shouldCacheViews = !0;
        }, o.prototype.disableViewCaching = function () {
          return this.shouldCacheViews = !1;
        }, o.prototype.getCachedViewForObject = function (t) {
          var e;
          return null != (e = this.getViewCache()) ? e[t.getCacheKey()] : void 0;
        }, o.prototype.cacheViewForObject = function (t, e) {
          var n;
          return null != (n = this.getViewCache()) ? n[e.getCacheKey()] = t : void 0;
        }, o.prototype.garbageCollectCachedViews = function () {
          var t, e, n, o, r, s;

          if (t = this.getViewCache()) {
            s = this.getAllChildViews().concat(this), n = function () {
              var t, e, n;

              for (n = [], t = 0, e = s.length; e > t; t++) {
                r = s[t], n.push(r.object.getCacheKey());
              }

              return n;
            }(), o = [];

            for (e in t) {
              i.call(n, e) < 0 && o.push(delete t[e]);
            }

            return o;
          }
        }, o;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function t(_t8, e) {
        function i() {
          this.constructor = _t8;
        }

        for (var o in e) {
          n.call(e, o) && (_t8[o] = e[o]);
        }

        return i.prototype = e.prototype, _t8.prototype = new i(), _t8.__super__ = e.prototype, _t8;
      },
          n = {}.hasOwnProperty;

      e.ObjectGroupView = function (e) {
        function n() {
          n.__super__.constructor.apply(this, arguments), this.objectGroup = this.object, this.viewClass = this.options.viewClass, delete this.options.viewClass;
        }

        return t(n, e), n.prototype.getChildViews = function () {
          var t, e, n, i;
          if (!this.childViews.length) for (i = this.objectGroup.getObjects(), t = 0, e = i.length; e > t; t++) {
            n = i[t], this.findOrCreateCachedChildView(this.viewClass, n, this.options);
          }
          return this.childViews;
        }, n.prototype.createNodes = function () {
          var t, e, n, i, o, r, s, a, u;

          for (t = this.createContainerElement(), s = this.getChildViews(), e = 0, i = s.length; i > e; e++) {
            for (u = s[e], a = u.getNodes(), n = 0, o = a.length; o > n; n++) {
              r = a[n], t.appendChild(r);
            }
          }

          return [t];
        }, n.prototype.createContainerElement = function (t) {
          return null == t && (t = this.objectGroup.getDepth()), this.getChildViews()[0].createContainerElement(t);
        }, n;
      }(e.ObjectView);
    }.call(this), function () {
      var t = function t(_t9, e) {
        function i() {
          this.constructor = _t9;
        }

        for (var o in e) {
          n.call(e, o) && (_t9[o] = e[o]);
        }

        return i.prototype = e.prototype, _t9.prototype = new i(), _t9.__super__ = e.prototype, _t9;
      },
          n = {}.hasOwnProperty;

      e.Controller = function (e) {
        function n() {
          return n.__super__.constructor.apply(this, arguments);
        }

        return t(n, e), n;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a = function a(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          u = function u(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          c.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          c = {}.hasOwnProperty,
          l = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = e.findClosestElementFromNode, i = e.nodeIsEmptyTextNode, n = e.nodeIsBlockStartComment, o = e.normalizeSpaces, r = e.summarizeStringChange, s = e.tagName, e.MutationObserver = function (e) {
        function c(t) {
          this.element = t, this.didMutate = a(this.didMutate, this), this.observer = new window.MutationObserver(this.didMutate), this.start();
        }

        var _h, p, d, f;

        return u(c, e), p = "data-trix-mutable", d = "[" + p + "]", f = {
          attributes: !0,
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
          subtree: !0
        }, c.prototype.start = function () {
          return this.reset(), this.observer.observe(this.element, f);
        }, c.prototype.stop = function () {
          return this.observer.disconnect();
        }, c.prototype.didMutate = function (t) {
          var e, n;
          return (e = this.mutations).push.apply(e, this.findSignificantMutations(t)), this.mutations.length ? (null != (n = this.delegate) && "function" == typeof n.elementDidMutate && n.elementDidMutate(this.getMutationSummary()), this.reset()) : void 0;
        }, c.prototype.reset = function () {
          return this.mutations = [];
        }, c.prototype.findSignificantMutations = function (t) {
          var e, n, i, o;

          for (o = [], e = 0, n = t.length; n > e; e++) {
            i = t[e], this.mutationIsSignificant(i) && o.push(i);
          }

          return o;
        }, c.prototype.mutationIsSignificant = function (t) {
          var e, n, i, o;
          if (this.nodeIsMutable(t.target)) return !1;

          for (o = this.nodesModifiedByMutation(t), e = 0, n = o.length; n > e; e++) {
            if (i = o[e], this.nodeIsSignificant(i)) return !0;
          }

          return !1;
        }, c.prototype.nodeIsSignificant = function (t) {
          return t !== this.element && !this.nodeIsMutable(t) && !i(t);
        }, c.prototype.nodeIsMutable = function (e) {
          return t(e, {
            matchingSelector: d
          });
        }, c.prototype.nodesModifiedByMutation = function (t) {
          var e;

          switch (e = [], t.type) {
            case "attributes":
              t.attributeName !== p && e.push(t.target);
              break;

            case "characterData":
              e.push(t.target.parentNode), e.push(t.target);
              break;

            case "childList":
              e.push.apply(e, t.addedNodes), e.push.apply(e, t.removedNodes);
          }

          return e;
        }, c.prototype.getMutationSummary = function () {
          return this.getTextMutationSummary();
        }, c.prototype.getTextMutationSummary = function () {
          var t, e, n, i, o, r, s, a, u, c, h;

          for (a = this.getTextChangesFromCharacterData(), n = a.additions, o = a.deletions, h = this.getTextChangesFromChildList(), u = h.additions, r = 0, s = u.length; s > r; r++) {
            e = u[r], l.call(n, e) < 0 && n.push(e);
          }

          return o.push.apply(o, h.deletions), c = {}, (t = n.join("")) && (c.textAdded = t), (i = o.join("")) && (c.textDeleted = i), c;
        }, c.prototype.getMutationsByType = function (t) {
          var e, n, i, o, r;

          for (o = this.mutations, r = [], e = 0, n = o.length; n > e; e++) {
            i = o[e], i.type === t && r.push(i);
          }

          return r;
        }, c.prototype.getTextChangesFromChildList = function () {
          var t, e, i, r, s, a, u, c, l, p, d;

          for (t = [], u = [], a = this.getMutationsByType("childList"), e = 0, r = a.length; r > e; e++) {
            s = a[e], t.push.apply(t, s.addedNodes), u.push.apply(u, s.removedNodes);
          }

          return c = 0 === t.length && 1 === u.length && n(u[0]), c ? (p = [], d = ["\n"]) : (p = _h(t), d = _h(u)), {
            additions: function () {
              var t, e, n;

              for (n = [], i = t = 0, e = p.length; e > t; i = ++t) {
                l = p[i], l !== d[i] && n.push(o(l));
              }

              return n;
            }(),
            deletions: function () {
              var t, e, n;

              for (n = [], i = t = 0, e = d.length; e > t; i = ++t) {
                l = d[i], l !== p[i] && n.push(o(l));
              }

              return n;
            }()
          };
        }, c.prototype.getTextChangesFromCharacterData = function () {
          var t, e, n, i, s, a, u, c;
          return e = this.getMutationsByType("characterData"), e.length && (c = e[0], n = e[e.length - 1], s = o(c.oldValue), i = o(n.target.data), a = r(s, i), t = a.added, u = a.removed), {
            additions: t ? [t] : [],
            deletions: u ? [u] : []
          };
        }, _h = function h(t) {
          var e, n, i, o;

          for (null == t && (t = []), o = [], e = 0, n = t.length; n > e; e++) {
            switch (i = t[e], i.nodeType) {
              case Node.TEXT_NODE:
                o.push(i.data);
                break;

              case Node.ELEMENT_NODE:
                "br" === s(i) ? o.push("\n") : o.push.apply(o, _h(i.childNodes));
            }
          }

          return o;
        }, c;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function t(_t10, e) {
        function i() {
          this.constructor = _t10;
        }

        for (var o in e) {
          n.call(e, o) && (_t10[o] = e[o]);
        }

        return i.prototype = e.prototype, _t10.prototype = new i(), _t10.__super__ = e.prototype, _t10;
      },
          n = {}.hasOwnProperty;

      e.FileVerificationOperation = function (e) {
        function n(t) {
          this.file = t;
        }

        return t(n, e), n.prototype.perform = function (t) {
          var e;
          return e = new FileReader(), e.onerror = function () {
            return t(!1);
          }, e.onload = function (n) {
            return function () {
              e.onerror = null;

              try {
                e.abort();
              } catch (i) {}

              return t(!0, n.file);
            };
          }(this), e.readAsArrayBuffer(this.file);
        }, n;
      }(e.Operation);
    }.call(this), function () {
      var t,
          n,
          i = function i(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          o.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      t = e.handleEvent, n = e.innerElementIsActive, e.InputController = function (o) {
        function r(n) {
          var i;
          this.element = n, this.mutationObserver = new e.MutationObserver(this.element), this.mutationObserver.delegate = this;

          for (i in this.events) {
            t(i, {
              onElement: this.element,
              withCallback: this.handlerFor(i)
            });
          }
        }

        return i(r, o), r.prototype.events = {}, r.prototype.elementDidMutate = function () {}, r.prototype.editorWillSyncDocumentView = function () {
          return this.mutationObserver.stop();
        }, r.prototype.editorDidSyncDocumentView = function () {
          return this.mutationObserver.start();
        }, r.prototype.requestRender = function () {
          var t;
          return null != (t = this.delegate) && "function" == typeof t.inputControllerDidRequestRender ? t.inputControllerDidRequestRender() : void 0;
        }, r.prototype.requestReparse = function () {
          var t;
          return null != (t = this.delegate) && "function" == typeof t.inputControllerDidRequestReparse && t.inputControllerDidRequestReparse(), this.requestRender();
        }, r.prototype.attachFiles = function (t) {
          var n, i;
          return i = function () {
            var i, o, r;

            for (r = [], i = 0, o = t.length; o > i; i++) {
              n = t[i], r.push(new e.FileVerificationOperation(n));
            }

            return r;
          }(), Promise.all(i).then(function (t) {
            return function (e) {
              return t.handleInput(function () {
                var t, n;
                return null != (t = this.delegate) && t.inputControllerWillAttachFiles(), null != (n = this.responder) && n.insertFiles(e), this.requestRender();
              });
            };
          }(this));
        }, r.prototype.handlerFor = function (t) {
          return function (e) {
            return function (i) {
              return i.defaultPrevented ? void 0 : e.handleInput(function () {
                return n(this.element) ? void 0 : (this.eventName = t, this.events[t].call(this, i));
              });
            };
          }(this);
        }, r.prototype.handleInput = function (t) {
          var e, n;

          try {
            return null != (e = this.delegate) && e.inputControllerWillHandleInput(), t.call(this);
          } finally {
            null != (n = this.delegate) && n.inputControllerDidHandleInput();
          }
        }, r.prototype.createLinkHTML = function (t, e) {
          var n;
          return n = document.createElement("a"), n.href = t, n.textContent = null != e ? e : t, n.outerHTML;
        }, r;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l,
          h,
          p,
          d,
          f = function f(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          g.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          g = {}.hasOwnProperty,
          m = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      c = e.makeElement, l = e.objectsAreEqual, d = e.tagName, n = e.browser, a = e.keyEventIsKeyboardCommand, o = e.dataTransferIsWritable, i = e.dataTransferIsPlainText, u = e.config.keyNames, e.Level0InputController = function (n) {
        function s() {
          s.__super__.constructor.apply(this, arguments), this.resetInputSummary();
        }

        var d;
        return f(s, n), d = 0, s.prototype.setInputSummary = function (t) {
          var e, n;
          null == t && (t = {}), this.inputSummary.eventName = this.eventName;

          for (e in t) {
            n = t[e], this.inputSummary[e] = n;
          }

          return this.inputSummary;
        }, s.prototype.resetInputSummary = function () {
          return this.inputSummary = {};
        }, s.prototype.reset = function () {
          return this.resetInputSummary(), e.selectionChangeObserver.reset();
        }, s.prototype.elementDidMutate = function (t) {
          var e;
          return this.isComposing() ? null != (e = this.delegate) && "function" == typeof e.inputControllerDidAllowUnhandledInput ? e.inputControllerDidAllowUnhandledInput() : void 0 : this.handleInput(function () {
            return this.mutationIsSignificant(t) && (this.mutationIsExpected(t) ? this.requestRender() : this.requestReparse()), this.reset();
          });
        }, s.prototype.mutationIsExpected = function (t) {
          var e, n, i, o, r, s, a, u, c, l;
          return a = t.textAdded, u = t.textDeleted, this.inputSummary.preferDocument ? !0 : (e = null != a ? a === this.inputSummary.textAdded : !this.inputSummary.textAdded, n = null != u ? this.inputSummary.didDelete : !this.inputSummary.didDelete, c = ("\n" === a || " \n" === a) && !e, l = "\n" === u && !n, s = c && !l || l && !c, s && (o = this.getSelectedRange()) && (i = c ? a.replace(/\n$/, "").length || -1 : (null != a ? a.length : void 0) || 1, null != (r = this.responder) ? r.positionIsBlockBreak(o[1] + i) : void 0) ? !0 : e && n);
        }, s.prototype.mutationIsSignificant = function (t) {
          var e, n, i;
          return i = Object.keys(t).length > 0, e = "" === (null != (n = this.compositionInput) ? n.getEndData() : void 0), i || !e;
        }, s.prototype.events = {
          keydown: function keydown(t) {
            var n, i, o, r, s, c, l, h, p;

            if (this.isComposing() || this.resetInputSummary(), this.inputSummary.didInput = !0, r = u[t.keyCode]) {
              for (i = this.keys, h = ["ctrl", "alt", "shift", "meta"], o = 0, c = h.length; c > o; o++) {
                l = h[o], t[l + "Key"] && ("ctrl" === l && (l = "control"), i = null != i ? i[l] : void 0);
              }

              null != (null != i ? i[r] : void 0) && (this.setInputSummary({
                keyName: r
              }), e.selectionChangeObserver.reset(), i[r].call(this, t));
            }

            return a(t) && (n = String.fromCharCode(t.keyCode).toLowerCase()) && (s = function () {
              var e, n, i, o;

              for (i = ["alt", "shift"], o = [], e = 0, n = i.length; n > e; e++) {
                l = i[e], t[l + "Key"] && o.push(l);
              }

              return o;
            }(), s.push(n), null != (p = this.delegate) ? p.inputControllerDidReceiveKeyboardCommand(s) : void 0) ? t.preventDefault() : void 0;
          },
          keypress: function keypress(t) {
            var e, n, i;
            if (null == this.inputSummary.eventName && !t.metaKey && (!t.ctrlKey || t.altKey)) return (i = p(t)) ? (null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.insertString(i), this.setInputSummary({
              textAdded: i,
              didDelete: this.selectionIsExpanded()
            })) : void 0;
          },
          textInput: function textInput(t) {
            var e, n, i, o;
            return e = t.data, o = this.inputSummary.textAdded, o && o !== e && o.toUpperCase() === e ? (n = this.getSelectedRange(), this.setSelectedRange([n[0], n[1] + o.length]), null != (i = this.responder) && i.insertString(e), this.setInputSummary({
              textAdded: e
            }), this.setSelectedRange(n)) : void 0;
          },
          dragenter: function dragenter(t) {
            return t.preventDefault();
          },
          dragstart: function dragstart(t) {
            var e, n;
            return n = t.target, this.serializeSelectionToDataTransfer(t.dataTransfer), this.draggedRange = this.getSelectedRange(), null != (e = this.delegate) && "function" == typeof e.inputControllerDidStartDrag ? e.inputControllerDidStartDrag() : void 0;
          },
          dragover: function dragover(t) {
            var e, n;
            return !this.draggedRange && !this.canAcceptDataTransfer(t.dataTransfer) || (t.preventDefault(), e = {
              x: t.clientX,
              y: t.clientY
            }, l(e, this.draggingPoint)) ? void 0 : (this.draggingPoint = e, null != (n = this.delegate) && "function" == typeof n.inputControllerDidReceiveDragOverPoint ? n.inputControllerDidReceiveDragOverPoint(this.draggingPoint) : void 0);
          },
          dragend: function dragend() {
            var t;
            return null != (t = this.delegate) && "function" == typeof t.inputControllerDidCancelDrag && t.inputControllerDidCancelDrag(), this.draggedRange = null, this.draggingPoint = null;
          },
          drop: function drop(t) {
            var n, i, o, r, s, a, u, c, l;
            return t.preventDefault(), o = null != (s = t.dataTransfer) ? s.files : void 0, r = {
              x: t.clientX,
              y: t.clientY
            }, null != (a = this.responder) && a.setLocationRangeFromPointRange(r), (null != o ? o.length : void 0) ? this.attachFiles(o) : this.draggedRange ? (null != (u = this.delegate) && u.inputControllerWillMoveText(), null != (c = this.responder) && c.moveTextFromRange(this.draggedRange), this.draggedRange = null, this.requestRender()) : (i = t.dataTransfer.getData("application/x-trix-document")) && (n = e.Document.fromJSONString(i), null != (l = this.responder) && l.insertDocument(n), this.requestRender()), this.draggedRange = null, this.draggingPoint = null;
          },
          cut: function cut(t) {
            var e, n;
            return (null != (e = this.responder) ? e.selectionIsExpanded() : void 0) && (this.serializeSelectionToDataTransfer(t.clipboardData) && t.preventDefault(), null != (n = this.delegate) && n.inputControllerWillCutText(), this.deleteInDirection("backward"), t.defaultPrevented) ? this.requestRender() : void 0;
          },
          copy: function copy(t) {
            var e;
            return (null != (e = this.responder) ? e.selectionIsExpanded() : void 0) && this.serializeSelectionToDataTransfer(t.clipboardData) ? t.preventDefault() : void 0;
          },
          paste: function paste(t) {
            var n, o, s, a, u, c, l, p, f, g, v, y, b, A, C, x, w, E, S, R, k, D, L;
            return n = null != (p = t.clipboardData) ? p : t.testClipboardData, l = {
              clipboard: n
            }, null == n || h(t) ? void this.getPastedHTMLUsingHiddenElement(function (t) {
              return function (e) {
                var n, i, o;
                return l.type = "text/html", l.html = e, null != (n = t.delegate) && n.inputControllerWillPaste(l), null != (i = t.responder) && i.insertHTML(l.html), t.requestRender(), null != (o = t.delegate) ? o.inputControllerDidPaste(l) : void 0;
              };
            }(this)) : ((a = n.getData("URL")) ? (l.type = "text/html", L = (c = n.getData("public.url-name")) ? e.squishBreakableWhitespace(c).trim() : a, l.html = this.createLinkHTML(a, L), null != (f = this.delegate) && f.inputControllerWillPaste(l), this.setInputSummary({
              textAdded: L,
              didDelete: this.selectionIsExpanded()
            }), null != (C = this.responder) && C.insertHTML(l.html), this.requestRender(), null != (x = this.delegate) && x.inputControllerDidPaste(l)) : i(n) ? (l.type = "text/plain", l.string = n.getData("text/plain"), null != (w = this.delegate) && w.inputControllerWillPaste(l), this.setInputSummary({
              textAdded: l.string,
              didDelete: this.selectionIsExpanded()
            }), null != (E = this.responder) && E.insertString(l.string), this.requestRender(), null != (S = this.delegate) && S.inputControllerDidPaste(l)) : (u = n.getData("text/html")) ? (l.type = "text/html", l.html = u, null != (R = this.delegate) && R.inputControllerWillPaste(l), null != (k = this.responder) && k.insertHTML(l.html), this.requestRender(), null != (D = this.delegate) && D.inputControllerDidPaste(l)) : m.call(n.types, "Files") >= 0 && (s = null != (g = n.items) && null != (v = g[0]) && "function" == typeof v.getAsFile ? v.getAsFile() : void 0) && (!s.name && (o = r(s)) && (s.name = "pasted-file-" + ++d + "." + o), l.type = "File", l.file = s, null != (y = this.delegate) && y.inputControllerWillAttachFiles(), null != (b = this.responder) && b.insertFile(l.file), this.requestRender(), null != (A = this.delegate) && A.inputControllerDidPaste(l)), t.preventDefault());
          },
          compositionstart: function compositionstart(t) {
            return this.getCompositionInput().start(t.data);
          },
          compositionupdate: function compositionupdate(t) {
            return this.getCompositionInput().update(t.data);
          },
          compositionend: function compositionend(t) {
            return this.getCompositionInput().end(t.data);
          },
          beforeinput: function beforeinput() {
            return this.inputSummary.didInput = !0;
          },
          input: function input(t) {
            return this.inputSummary.didInput = !0, t.stopPropagation();
          }
        }, s.prototype.keys = {
          backspace: function backspace(t) {
            var e;
            return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t);
          },
          "delete": function _delete(t) {
            var e;
            return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t);
          },
          "return": function _return() {
            var t, e;
            return this.setInputSummary({
              preferDocument: !0
            }), null != (t = this.delegate) && t.inputControllerWillPerformTyping(), null != (e = this.responder) ? e.insertLineBreak() : void 0;
          },
          tab: function tab(t) {
            var e, n;
            return (null != (e = this.responder) ? e.canIncreaseNestingLevel() : void 0) ? (null != (n = this.responder) && n.increaseNestingLevel(), this.requestRender(), t.preventDefault()) : void 0;
          },
          left: function left(t) {
            var e;
            return this.selectionIsInCursorTarget() ? (t.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("backward") : void 0) : void 0;
          },
          right: function right(t) {
            var e;
            return this.selectionIsInCursorTarget() ? (t.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("forward") : void 0) : void 0;
          },
          control: {
            d: function d(t) {
              var e;
              return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t);
            },
            h: function h(t) {
              var e;
              return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t);
            },
            o: function o(t) {
              var e, n;
              return t.preventDefault(), null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.insertString("\n", {
                updatePosition: !1
              }), this.requestRender();
            }
          },
          shift: {
            "return": function _return(t) {
              var e, n;
              return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.insertString("\n"), this.requestRender(), t.preventDefault();
            },
            tab: function tab(t) {
              var e, n;
              return (null != (e = this.responder) ? e.canDecreaseNestingLevel() : void 0) ? (null != (n = this.responder) && n.decreaseNestingLevel(), this.requestRender(), t.preventDefault()) : void 0;
            },
            left: function left(t) {
              return this.selectionIsInCursorTarget() ? (t.preventDefault(), this.expandSelectionInDirection("backward")) : void 0;
            },
            right: function right(t) {
              return this.selectionIsInCursorTarget() ? (t.preventDefault(), this.expandSelectionInDirection("forward")) : void 0;
            }
          },
          alt: {
            backspace: function backspace() {
              var t;
              return this.setInputSummary({
                preferDocument: !1
              }), null != (t = this.delegate) ? t.inputControllerWillPerformTyping() : void 0;
            }
          },
          meta: {
            backspace: function backspace() {
              var t;
              return this.setInputSummary({
                preferDocument: !1
              }), null != (t = this.delegate) ? t.inputControllerWillPerformTyping() : void 0;
            }
          }
        }, s.prototype.getCompositionInput = function () {
          return this.isComposing() ? this.compositionInput : this.compositionInput = new t(this);
        }, s.prototype.isComposing = function () {
          return null != this.compositionInput && !this.compositionInput.isEnded();
        }, s.prototype.deleteInDirection = function (t, e) {
          var n;
          return (null != (n = this.responder) ? n.deleteInDirection(t) : void 0) !== !1 ? this.setInputSummary({
            didDelete: !0
          }) : e ? (e.preventDefault(), this.requestRender()) : void 0;
        }, s.prototype.serializeSelectionToDataTransfer = function (t) {
          var n, i;
          if (o(t)) return n = null != (i = this.responder) ? i.getSelectedDocument().toSerializableDocument() : void 0, t.setData("application/x-trix-document", JSON.stringify(n)), t.setData("text/html", e.DocumentView.render(n).innerHTML), t.setData("text/plain", n.toString().replace(/\n$/, "")), !0;
        }, s.prototype.canAcceptDataTransfer = function (t) {
          var e, n, i, o, r, s;

          for (s = {}, o = null != (i = null != t ? t.types : void 0) ? i : [], e = 0, n = o.length; n > e; e++) {
            r = o[e], s[r] = !0;
          }

          return s.Files || s["application/x-trix-document"] || s["text/html"] || s["text/plain"];
        }, s.prototype.getPastedHTMLUsingHiddenElement = function (t) {
          var n, i, o;
          return i = this.getSelectedRange(), o = {
            position: "absolute",
            left: window.pageXOffset + "px",
            top: window.pageYOffset + "px",
            opacity: 0
          }, n = c({
            style: o,
            tagName: "div",
            editable: !0
          }), document.body.appendChild(n), n.focus(), requestAnimationFrame(function (o) {
            return function () {
              var r;
              return r = n.innerHTML, e.removeNode(n), o.setSelectedRange(i), t(r);
            };
          }(this));
        }, s.proxyMethod("responder?.getSelectedRange"), s.proxyMethod("responder?.setSelectedRange"), s.proxyMethod("responder?.expandSelectionInDirection"), s.proxyMethod("responder?.selectionIsInCursorTarget"), s.proxyMethod("responder?.selectionIsExpanded"), s;
      }(e.InputController), r = function r(t) {
        var e, n;
        return null != (e = t.type) && null != (n = e.match(/\/(\w+)$/)) ? n[1] : void 0;
      }, s = null != ("function" == typeof " ".codePointAt ? " ".codePointAt(0) : void 0), p = function p(t) {
        var n;
        return t.key && s && t.key.codePointAt(0) === t.keyCode ? t.key : (null === t.which ? n = t.keyCode : 0 !== t.which && 0 !== t.charCode && (n = t.charCode), null != n && "escape" !== u[n] ? e.UTF16String.fromCodepoints([n]).toString() : void 0);
      }, h = function h(t) {
        var e, n, i, o, r, s, a, u, c, l;

        if (u = t.clipboardData) {
          if (m.call(u.types, "text/html") >= 0) {
            for (c = u.types, i = 0, s = c.length; s > i; i++) {
              if (l = c[i], e = /^CorePasteboardFlavorType/.test(l), n = /^dyn\./.test(l) && u.getData(l), a = e || n) return !0;
            }

            return !1;
          }

          return o = m.call(u.types, "com.apple.webarchive") >= 0, r = m.call(u.types, "com.apple.flat-rtfd") >= 0, o || r;
        }
      }, t = function (t) {
        function e(t) {
          var e;
          this.inputController = t, e = this.inputController, this.responder = e.responder, this.delegate = e.delegate, this.inputSummary = e.inputSummary, this.data = {};
        }

        return f(e, t), e.prototype.start = function (t) {
          var e, n;
          return this.data.start = t, this.isSignificant() ? ("keypress" === this.inputSummary.eventName && this.inputSummary.textAdded && null != (e = this.responder) && e.deleteInDirection("left"), this.selectionIsExpanded() || (this.insertPlaceholder(), this.requestRender()), this.range = null != (n = this.responder) ? n.getSelectedRange() : void 0) : void 0;
        }, e.prototype.update = function (t) {
          var e;
          return this.data.update = t, this.isSignificant() && (e = this.selectPlaceholder()) ? (this.forgetPlaceholder(), this.range = e) : void 0;
        }, e.prototype.end = function (t) {
          var e, n, i, o;
          return this.data.end = t, this.isSignificant() ? (this.forgetPlaceholder(), this.canApplyToDocument() ? (this.setInputSummary({
            preferDocument: !0,
            didInput: !1
          }), null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.setSelectedRange(this.range), null != (i = this.responder) && i.insertString(this.data.end), null != (o = this.responder) ? o.setSelectedRange(this.range[0] + this.data.end.length) : void 0) : null != this.data.start || null != this.data.update ? (this.requestReparse(), this.inputController.reset()) : void 0) : this.inputController.reset();
        }, e.prototype.getEndData = function () {
          return this.data.end;
        }, e.prototype.isEnded = function () {
          return null != this.getEndData();
        }, e.prototype.isSignificant = function () {
          return n.composesExistingText ? this.inputSummary.didInput : !0;
        }, e.prototype.canApplyToDocument = function () {
          var t, e;
          return 0 === (null != (t = this.data.start) ? t.length : void 0) && (null != (e = this.data.end) ? e.length : void 0) > 0 && null != this.range;
        }, e.proxyMethod("inputController.setInputSummary"), e.proxyMethod("inputController.requestRender"), e.proxyMethod("inputController.requestReparse"), e.proxyMethod("responder?.selectionIsExpanded"), e.proxyMethod("responder?.insertPlaceholder"), e.proxyMethod("responder?.selectPlaceholder"), e.proxyMethod("responder?.forgetPlaceholder"), e;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          r = function r(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          s.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          s = {}.hasOwnProperty,
          a = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = e.dataTransferIsPlainText, n = e.keyEventIsKeyboardCommand, i = e.objectsAreEqual, e.Level2InputController = function (s) {
        function u() {
          return this.render = o(this.render, this), u.__super__.constructor.apply(this, arguments);
        }

        var c, l, h, p, d, f;
        return r(u, s), u.prototype.elementDidMutate = function () {
          var t;
          return this.scheduledRender ? this.composing && null != (t = this.delegate) && "function" == typeof t.inputControllerDidAllowUnhandledInput ? t.inputControllerDidAllowUnhandledInput() : void 0 : this.reparse();
        }, u.prototype.scheduleRender = function () {
          return null != this.scheduledRender ? this.scheduledRender : this.scheduledRender = requestAnimationFrame(this.render);
        }, u.prototype.render = function () {
          var t;
          return cancelAnimationFrame(this.scheduledRender), this.scheduledRender = null, this.composing || null != (t = this.delegate) && t.render(), "function" == typeof this.afterRender && this.afterRender(), this.afterRender = null;
        }, u.prototype.reparse = function () {
          var t;
          return null != (t = this.delegate) ? t.reparse() : void 0;
        }, u.prototype.events = {
          keydown: function keydown(t) {
            var e, i, o, r;

            if (n(t)) {
              if (e = l(t), null != (r = this.delegate) ? r.inputControllerDidReceiveKeyboardCommand(e) : void 0) return t.preventDefault();
            } else if (o = t.key, t.altKey && (o += "+Alt"), t.shiftKey && (o += "+Shift"), i = this.keys[o]) return this.withEvent(t, i);
          },
          paste: function paste(t) {
            var e, n, i, o, r, s, a, u, c;
            return h(t) ? (t.preventDefault(), this.attachFiles(t.clipboardData.files)) : p(t) ? (t.preventDefault(), n = {
              type: "text/plain",
              string: t.clipboardData.getData("text/plain")
            }, null != (i = this.delegate) && i.inputControllerWillPaste(n), null != (o = this.responder) && o.insertString(n.string), this.render(), null != (r = this.delegate) ? r.inputControllerDidPaste(n) : void 0) : (e = null != (s = t.clipboardData) ? s.getData("URL") : void 0) ? (t.preventDefault(), n = {
              type: "text/html",
              html: this.createLinkHTML(e)
            }, null != (a = this.delegate) && a.inputControllerWillPaste(n), null != (u = this.responder) && u.insertHTML(n.html), this.render(), null != (c = this.delegate) ? c.inputControllerDidPaste(n) : void 0) : void 0;
          },
          beforeinput: function beforeinput(t) {
            var e;
            return (e = this.inputTypes[t.inputType]) ? (this.withEvent(t, e), this.scheduleRender()) : void 0;
          },
          input: function input() {
            return e.selectionChangeObserver.reset();
          },
          dragstart: function dragstart(t) {
            var e, n;
            return (null != (e = this.responder) ? e.selectionContainsAttachments() : void 0) ? (t.dataTransfer.setData("application/x-trix-dragging", !0), this.dragging = {
              range: null != (n = this.responder) ? n.getSelectedRange() : void 0,
              point: d(t)
            }) : void 0;
          },
          dragenter: function dragenter(t) {
            return c(t) ? t.preventDefault() : void 0;
          },
          dragover: function dragover(t) {
            var e, n;

            if (this.dragging) {
              if (t.preventDefault(), e = d(t), !i(e, this.dragging.point)) return this.dragging.point = e, null != (n = this.responder) ? n.setLocationRangeFromPointRange(e) : void 0;
            } else if (c(t)) return t.preventDefault();
          },
          drop: function drop(t) {
            var e, n, i, o;
            return this.dragging ? (t.preventDefault(), null != (n = this.delegate) && n.inputControllerWillMoveText(), null != (i = this.responder) && i.moveTextFromRange(this.dragging.range), this.dragging = null, this.scheduleRender()) : c(t) ? (t.preventDefault(), e = d(t), null != (o = this.responder) && o.setLocationRangeFromPointRange(e), this.attachFiles(t.dataTransfer.files)) : void 0;
          },
          dragend: function dragend() {
            var t;
            return this.dragging ? (null != (t = this.responder) && t.setSelectedRange(this.dragging.range), this.dragging = null) : void 0;
          },
          compositionend: function compositionend() {
            return this.composing ? (this.composing = !1, this.scheduleRender()) : void 0;
          }
        }, u.prototype.keys = {
          ArrowLeft: function ArrowLeft() {
            var t, e;
            return (null != (t = this.responder) ? t.shouldManageMovingCursorInDirection("backward") : void 0) ? (this.event.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("backward") : void 0) : void 0;
          },
          ArrowRight: function ArrowRight() {
            var t, e;
            return (null != (t = this.responder) ? t.shouldManageMovingCursorInDirection("forward") : void 0) ? (this.event.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("forward") : void 0) : void 0;
          },
          Backspace: function Backspace() {
            var t, e, n;
            return (null != (t = this.responder) ? t.shouldManageDeletingInDirection("backward") : void 0) ? (this.event.preventDefault(), null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.deleteInDirection("backward"), this.render()) : void 0;
          },
          Tab: function Tab() {
            var t, e;
            return (null != (t = this.responder) ? t.canIncreaseNestingLevel() : void 0) ? (this.event.preventDefault(), null != (e = this.responder) && e.increaseNestingLevel(), this.render()) : void 0;
          },
          "Tab+Shift": function TabShift() {
            var t, e;
            return (null != (t = this.responder) ? t.canDecreaseNestingLevel() : void 0) ? (this.event.preventDefault(), null != (e = this.responder) && e.decreaseNestingLevel(), this.render()) : void 0;
          }
        }, u.prototype.inputTypes = {
          deleteByComposition: function deleteByComposition() {
            return this.deleteInDirection("backward", {
              recordUndoEntry: !1
            });
          },
          deleteByCut: function deleteByCut() {
            return this.deleteInDirection("backward");
          },
          deleteByDrag: function deleteByDrag() {
            return this.event.preventDefault(), this.withTargetDOMRange(function () {
              var t;
              return this.deleteByDragRange = null != (t = this.responder) ? t.getSelectedRange() : void 0;
            });
          },
          deleteCompositionText: function deleteCompositionText() {
            return this.deleteInDirection("backward", {
              recordUndoEntry: !1
            });
          },
          deleteContent: function deleteContent() {
            return this.deleteInDirection("backward");
          },
          deleteContentBackward: function deleteContentBackward() {
            return this.deleteInDirection("backward");
          },
          deleteContentForward: function deleteContentForward() {
            return this.deleteInDirection("forward");
          },
          deleteEntireSoftLine: function deleteEntireSoftLine() {
            return this.deleteInDirection("forward");
          },
          deleteHardLineBackward: function deleteHardLineBackward() {
            return this.deleteInDirection("backward");
          },
          deleteHardLineForward: function deleteHardLineForward() {
            return this.deleteInDirection("forward");
          },
          deleteSoftLineBackward: function deleteSoftLineBackward() {
            return this.deleteInDirection("backward");
          },
          deleteSoftLineForward: function deleteSoftLineForward() {
            return this.deleteInDirection("forward");
          },
          deleteWordBackward: function deleteWordBackward() {
            return this.deleteInDirection("backward");
          },
          deleteWordForward: function deleteWordForward() {
            return this.deleteInDirection("forward");
          },
          formatBackColor: function formatBackColor() {
            return this.activateAttributeIfSupported("backgroundColor", this.event.data);
          },
          formatBold: function formatBold() {
            return this.toggleAttributeIfSupported("bold");
          },
          formatFontColor: function formatFontColor() {
            return this.activateAttributeIfSupported("color", this.event.data);
          },
          formatFontName: function formatFontName() {
            return this.activateAttributeIfSupported("font", this.event.data);
          },
          formatIndent: function formatIndent() {
            var t;
            return (null != (t = this.responder) ? t.canIncreaseNestingLevel() : void 0) ? this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.increaseNestingLevel() : void 0;
            }) : void 0;
          },
          formatItalic: function formatItalic() {
            return this.toggleAttributeIfSupported("italic");
          },
          formatJustifyCenter: function formatJustifyCenter() {
            return this.toggleAttributeIfSupported("justifyCenter");
          },
          formatJustifyFull: function formatJustifyFull() {
            return this.toggleAttributeIfSupported("justifyFull");
          },
          formatJustifyLeft: function formatJustifyLeft() {
            return this.toggleAttributeIfSupported("justifyLeft");
          },
          formatJustifyRight: function formatJustifyRight() {
            return this.toggleAttributeIfSupported("justifyRight");
          },
          formatOutdent: function formatOutdent() {
            var t;
            return (null != (t = this.responder) ? t.canDecreaseNestingLevel() : void 0) ? this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.decreaseNestingLevel() : void 0;
            }) : void 0;
          },
          formatRemove: function formatRemove() {
            return this.withTargetDOMRange(function () {
              var t, e, n, i;
              i = [];

              for (t in null != (e = this.responder) ? e.getCurrentAttributes() : void 0) {
                i.push(null != (n = this.responder) ? n.removeCurrentAttribute(t) : void 0);
              }

              return i;
            });
          },
          formatSetBlockTextDirection: function formatSetBlockTextDirection() {
            return this.activateAttributeIfSupported("blockDir", this.event.data);
          },
          formatSetInlineTextDirection: function formatSetInlineTextDirection() {
            return this.activateAttributeIfSupported("textDir", this.event.data);
          },
          formatStrikeThrough: function formatStrikeThrough() {
            return this.toggleAttributeIfSupported("strike");
          },
          formatSubscript: function formatSubscript() {
            return this.toggleAttributeIfSupported("sub");
          },
          formatSuperscript: function formatSuperscript() {
            return this.toggleAttributeIfSupported("sup");
          },
          formatUnderline: function formatUnderline() {
            return this.toggleAttributeIfSupported("underline");
          },
          historyRedo: function historyRedo() {
            var t;
            return null != (t = this.delegate) ? t.inputControllerWillPerformRedo() : void 0;
          },
          historyUndo: function historyUndo() {
            var t;
            return null != (t = this.delegate) ? t.inputControllerWillPerformUndo() : void 0;
          },
          insertCompositionText: function insertCompositionText() {
            return this.composing = !0, this.insertString(this.event.data);
          },
          insertFromComposition: function insertFromComposition() {
            return this.composing = !1, this.insertString(this.event.data);
          },
          insertFromDrop: function insertFromDrop() {
            var t, e;
            return (t = this.deleteByDragRange) ? (this.deleteByDragRange = null, null != (e = this.delegate) && e.inputControllerWillMoveText(), this.withTargetDOMRange(function () {
              var e;
              return null != (e = this.responder) ? e.moveTextFromRange(t) : void 0;
            })) : void 0;
          },
          insertFromPaste: function insertFromPaste() {
            var n, i, o, r, s, a, u, c, l, h, p;
            return n = this.event.dataTransfer, s = {
              dataTransfer: n
            }, (i = n.getData("URL")) ? (this.event.preventDefault(), s.type = "text/html", p = (r = n.getData("public.url-name")) ? e.squishBreakableWhitespace(r).trim() : i, s.html = this.createLinkHTML(i, p), null != (a = this.delegate) && a.inputControllerWillPaste(s), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertHTML(s.html) : void 0;
            }), this.afterRender = function (t) {
              return function () {
                var e;
                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
              };
            }(this)) : t(n) ? (s.type = "text/plain", s.string = n.getData("text/plain"), null != (u = this.delegate) && u.inputControllerWillPaste(s), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertString(s.string) : void 0;
            }), this.afterRender = function (t) {
              return function () {
                var e;
                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
              };
            }(this)) : (o = n.getData("text/html")) ? (this.event.preventDefault(), s.type = "text/html", s.html = o, null != (c = this.delegate) && c.inputControllerWillPaste(s), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertHTML(s.html) : void 0;
            }), this.afterRender = function (t) {
              return function () {
                var e;
                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
              };
            }(this)) : (null != (l = n.files) ? l.length : void 0) ? (s.type = "File", s.file = n.files[0], null != (h = this.delegate) && h.inputControllerWillPaste(s), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertFile(s.file) : void 0;
            }), this.afterRender = function (t) {
              return function () {
                var e;
                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
              };
            }(this)) : void 0;
          },
          insertFromYank: function insertFromYank() {
            return this.insertString(this.event.data);
          },
          insertLineBreak: function insertLineBreak() {
            return this.insertString("\n");
          },
          insertLink: function insertLink() {
            return this.activateAttributeIfSupported("href", this.event.data);
          },
          insertOrderedList: function insertOrderedList() {
            return this.toggleAttributeIfSupported("number");
          },
          insertParagraph: function insertParagraph() {
            var t;
            return null != (t = this.delegate) && t.inputControllerWillPerformTyping(), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertLineBreak() : void 0;
            });
          },
          insertReplacementText: function insertReplacementText() {
            return this.insertString(this.event.dataTransfer.getData("text/plain"), {
              updatePosition: !1
            });
          },
          insertText: function insertText() {
            var t, e;
            return this.insertString(null != (t = this.event.data) ? t : null != (e = this.event.dataTransfer) ? e.getData("text/plain") : void 0);
          },
          insertTranspose: function insertTranspose() {
            return this.insertString(this.event.data);
          },
          insertUnorderedList: function insertUnorderedList() {
            return this.toggleAttributeIfSupported("bullet");
          }
        }, u.prototype.insertString = function (t, e) {
          var n;
          return null == t && (t = ""), null != (n = this.delegate) && n.inputControllerWillPerformTyping(), this.withTargetDOMRange(function () {
            var n;
            return null != (n = this.responder) ? n.insertString(t, e) : void 0;
          });
        }, u.prototype.toggleAttributeIfSupported = function (t) {
          var n;
          return a.call(e.getAllAttributeNames(), t) >= 0 ? (null != (n = this.delegate) && n.inputControllerWillPerformFormatting(t), this.withTargetDOMRange(function () {
            var e;
            return null != (e = this.responder) ? e.toggleCurrentAttribute(t) : void 0;
          })) : void 0;
        }, u.prototype.activateAttributeIfSupported = function (t, n) {
          var i;
          return a.call(e.getAllAttributeNames(), t) >= 0 ? (null != (i = this.delegate) && i.inputControllerWillPerformFormatting(t), this.withTargetDOMRange(function () {
            var e;
            return null != (e = this.responder) ? e.setCurrentAttribute(t, n) : void 0;
          })) : void 0;
        }, u.prototype.deleteInDirection = function (t, e) {
          var n, i, o, r;
          return o = (null != e ? e : {
            recordUndoEntry: !0
          }).recordUndoEntry, o && null != (r = this.delegate) && r.inputControllerWillPerformTyping(), i = function (e) {
            return function () {
              var n;
              return null != (n = e.responder) ? n.deleteInDirection(t) : void 0;
            };
          }(this), (n = this.getTargetDOMRange({
            minLength: 2
          })) ? this.withTargetDOMRange(n, i) : i();
        }, u.prototype.withTargetDOMRange = function (t, n) {
          var i;
          return "function" == typeof t && (n = t, t = this.getTargetDOMRange()), t ? null != (i = this.responder) ? i.withTargetDOMRange(t, n.bind(this)) : void 0 : (e.selectionChangeObserver.reset(), n.call(this));
        }, u.prototype.getTargetDOMRange = function (t) {
          var e, n, i, o;
          return i = (null != t ? t : {
            minLength: 0
          }).minLength, (o = "function" == typeof (e = this.event).getTargetRanges ? e.getTargetRanges() : void 0) && o.length && (n = f(o[0]), 0 === i || n.toString().length >= i) ? n : void 0;
        }, f = function f(t) {
          var e;
          return e = document.createRange(), e.setStart(t.startContainer, t.startOffset), e.setEnd(t.endContainer, t.endOffset), e;
        }, u.prototype.withEvent = function (t, e) {
          var n;
          this.event = t;

          try {
            n = e.call(this);
          } finally {
            this.event = null;
          }

          return n;
        }, c = function c(t) {
          var e, n;
          return a.call(null != (e = null != (n = t.dataTransfer) ? n.types : void 0) ? e : [], "Files") >= 0;
        }, h = function h(t) {
          var e;
          return (e = t.clipboardData) ? a.call(e.types, "Files") >= 0 && 1 === e.types.length && e.files.length >= 1 : void 0;
        }, p = function p(t) {
          var e;
          return (e = t.clipboardData) ? a.call(e.types, "text/plain") >= 0 && 1 === e.types.length : void 0;
        }, l = function l(t) {
          var e;
          return e = [], t.altKey && e.push("alt"), t.shiftKey && e.push("shift"), e.push(t.key), e;
        }, d = function d(t) {
          return {
            x: t.clientX,
            y: t.clientY
          };
        }, u;
      }(e.InputController);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c = function c(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          l = function l(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          h.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          h = {}.hasOwnProperty;

      n = e.defer, i = e.handleEvent, s = e.makeElement, u = e.tagName, a = e.config, r = a.lang, t = a.css, o = a.keyNames, e.AttachmentEditorController = function (a) {
        function h(t, e, n, i) {
          this.attachmentPiece = t, this.element = e, this.container = n, this.options = null != i ? i : {}, this.didBlurCaption = c(this.didBlurCaption, this), this.didChangeCaption = c(this.didChangeCaption, this), this.didInputCaption = c(this.didInputCaption, this), this.didKeyDownCaption = c(this.didKeyDownCaption, this), this.didClickActionButton = c(this.didClickActionButton, this), this.didClickToolbar = c(this.didClickToolbar, this), this.attachment = this.attachmentPiece.attachment, "a" === u(this.element) && (this.element = this.element.firstChild), this.install();
        }

        var p;
        return l(h, a), p = function p(t) {
          return function () {
            var e;
            return e = t.apply(this, arguments), e["do"](), null == this.undos && (this.undos = []), this.undos.push(e.undo);
          };
        }, h.prototype.install = function () {
          return this.makeElementMutable(), this.addToolbar(), this.attachment.isPreviewable() ? this.installCaptionEditor() : void 0;
        }, h.prototype.uninstall = function () {
          var t, e;

          for (this.savePendingCaption(); e = this.undos.pop();) {
            e();
          }

          return null != (t = this.delegate) ? t.didUninstallAttachmentEditor(this) : void 0;
        }, h.prototype.savePendingCaption = function () {
          var t, e, n;
          return null != this.pendingCaption ? (t = this.pendingCaption, this.pendingCaption = null, t ? null != (e = this.delegate) && "function" == typeof e.attachmentEditorDidRequestUpdatingAttributesForAttachment ? e.attachmentEditorDidRequestUpdatingAttributesForAttachment({
            caption: t
          }, this.attachment) : void 0 : null != (n = this.delegate) && "function" == typeof n.attachmentEditorDidRequestRemovingAttributeForAttachment ? n.attachmentEditorDidRequestRemovingAttributeForAttachment("caption", this.attachment) : void 0) : void 0;
        }, h.prototype.makeElementMutable = p(function () {
          return {
            "do": function (t) {
              return function () {
                return t.element.dataset.trixMutable = !0;
              };
            }(this),
            undo: function (t) {
              return function () {
                return delete t.element.dataset.trixMutable;
              };
            }(this)
          };
        }), h.prototype.addToolbar = p(function () {
          var n;
          return n = s({
            tagName: "div",
            className: t.attachmentToolbar,
            data: {
              trixMutable: !0
            },
            childNodes: s({
              tagName: "div",
              className: "trix-button-row",
              childNodes: s({
                tagName: "span",
                className: "trix-button-group trix-button-group--actions",
                childNodes: s({
                  tagName: "button",
                  className: "trix-button trix-button--remove",
                  textContent: r.remove,
                  attributes: {
                    title: r.remove
                  },
                  data: {
                    trixAction: "remove"
                  }
                })
              })
            })
          }), this.attachment.isPreviewable() && n.appendChild(s({
            tagName: "div",
            className: t.attachmentMetadataContainer,
            childNodes: s({
              tagName: "span",
              className: t.attachmentMetadata,
              childNodes: [s({
                tagName: "span",
                className: t.attachmentName,
                textContent: this.attachment.getFilename(),
                attributes: {
                  title: this.attachment.getFilename()
                }
              }), s({
                tagName: "span",
                className: t.attachmentSize,
                textContent: this.attachment.getFormattedFilesize()
              })]
            })
          })), i("click", {
            onElement: n,
            withCallback: this.didClickToolbar
          }), i("click", {
            onElement: n,
            matchingSelector: "[data-trix-action]",
            withCallback: this.didClickActionButton
          }), {
            "do": function (t) {
              return function () {
                return t.element.appendChild(n);
              };
            }(this),
            undo: function () {
              return function () {
                return e.removeNode(n);
              };
            }(this)
          };
        }), h.prototype.installCaptionEditor = p(function () {
          var o, a, u, c, l;
          return c = s({
            tagName: "textarea",
            className: t.attachmentCaptionEditor,
            attributes: {
              placeholder: r.captionPlaceholder
            },
            data: {
              trixMutable: !0
            }
          }), c.value = this.attachmentPiece.getCaption(), l = c.cloneNode(), l.classList.add("trix-autoresize-clone"), l.tabIndex = -1, o = function o() {
            return l.value = c.value, c.style.height = l.scrollHeight + "px";
          }, i("input", {
            onElement: c,
            withCallback: o
          }), i("input", {
            onElement: c,
            withCallback: this.didInputCaption
          }), i("keydown", {
            onElement: c,
            withCallback: this.didKeyDownCaption
          }), i("change", {
            onElement: c,
            withCallback: this.didChangeCaption
          }), i("blur", {
            onElement: c,
            withCallback: this.didBlurCaption
          }), u = this.element.querySelector("figcaption"), a = u.cloneNode(), {
            "do": function (e) {
              return function () {
                return u.style.display = "none", a.appendChild(c), a.appendChild(l), a.classList.add(t.attachmentCaption + "--editing"), u.parentElement.insertBefore(a, u), o(), e.options.editCaption ? n(function () {
                  return c.focus();
                }) : void 0;
              };
            }(this),
            undo: function undo() {
              return e.removeNode(a), u.style.display = null;
            }
          };
        }), h.prototype.didClickToolbar = function (t) {
          return t.preventDefault(), t.stopPropagation();
        }, h.prototype.didClickActionButton = function (t) {
          var e, n;

          switch (e = t.target.getAttribute("data-trix-action")) {
            case "remove":
              return null != (n = this.delegate) ? n.attachmentEditorDidRequestRemovalOfAttachment(this.attachment) : void 0;
          }
        }, h.prototype.didKeyDownCaption = function (t) {
          var e;
          return "return" === o[t.keyCode] ? (t.preventDefault(), this.savePendingCaption(), null != (e = this.delegate) && "function" == typeof e.attachmentEditorDidRequestDeselectingAttachment ? e.attachmentEditorDidRequestDeselectingAttachment(this.attachment) : void 0) : void 0;
        }, h.prototype.didInputCaption = function (t) {
          return this.pendingCaption = t.target.value.replace(/\s/g, " ").trim();
        }, h.prototype.didChangeCaption = function () {
          return this.savePendingCaption();
        }, h.prototype.didBlurCaption = function () {
          return this.savePendingCaption();
        }, h;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          r.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty;

      i = e.makeElement, t = e.config.css, e.AttachmentView = function (r) {
        function s() {
          s.__super__.constructor.apply(this, arguments), this.attachment = this.object, this.attachment.uploadProgressDelegate = this, this.attachmentPiece = this.options.piece;
        }

        var a;
        return o(s, r), s.attachmentSelector = "[data-trix-attachment]", s.prototype.createContentNodes = function () {
          return [];
        }, s.prototype.createNodes = function () {
          var e, n, o, r, s, u, c;
          if (e = r = i({
            tagName: "figure",
            className: this.getClassName(),
            data: this.getData(),
            editable: !1
          }), (n = this.getHref()) && (r = i({
            tagName: "a",
            editable: !1,
            attributes: {
              href: n,
              tabindex: -1
            }
          }), e.appendChild(r)), this.attachment.hasContent()) r.innerHTML = this.attachment.getContent();else for (c = this.createContentNodes(), o = 0, s = c.length; s > o; o++) {
            u = c[o], r.appendChild(u);
          }
          return r.appendChild(this.createCaptionElement()), this.attachment.isPending() && (this.progressElement = i({
            tagName: "progress",
            attributes: {
              "class": t.attachmentProgress,
              value: this.attachment.getUploadProgress(),
              max: 100
            },
            data: {
              trixMutable: !0,
              trixStoreKey: ["progressElement", this.attachment.id].join("/")
            }
          }), e.appendChild(this.progressElement)), [a("left"), e, a("right")];
        }, s.prototype.createCaptionElement = function () {
          var e, n, o, r, s, a, u;
          return o = i({
            tagName: "figcaption",
            className: t.attachmentCaption
          }), (e = this.attachmentPiece.getCaption()) ? (o.classList.add(t.attachmentCaption + "--edited"), o.textContent = e) : (n = this.getCaptionConfig(), n.name && (r = this.attachment.getFilename()), n.size && (a = this.attachment.getFormattedFilesize()), r && (s = i({
            tagName: "span",
            className: t.attachmentName,
            textContent: r
          }), o.appendChild(s)), a && (r && o.appendChild(document.createTextNode(" ")), u = i({
            tagName: "span",
            className: t.attachmentSize,
            textContent: a
          }), o.appendChild(u))), o;
        }, s.prototype.getClassName = function () {
          var e, n;
          return n = [t.attachment, t.attachment + "--" + this.attachment.getType()], (e = this.attachment.getExtension()) && n.push(t.attachment + "--" + e), n.join(" ");
        }, s.prototype.getData = function () {
          var t, e;
          return e = {
            trixAttachment: JSON.stringify(this.attachment),
            trixContentType: this.attachment.getContentType(),
            trixId: this.attachment.id
          }, t = this.attachmentPiece.attributes, t.isEmpty() || (e.trixAttributes = JSON.stringify(t)), this.attachment.isPending() && (e.trixSerialize = !1), e;
        }, s.prototype.getHref = function () {
          return n(this.attachment.getContent(), "a") ? void 0 : this.attachment.getHref();
        }, s.prototype.getCaptionConfig = function () {
          var t, n, i;
          return i = this.attachment.getType(), t = e.copyObject(null != (n = e.config.attachments[i]) ? n.caption : void 0), "file" === i && (t.name = !0), t;
        }, s.prototype.findProgressElement = function () {
          var t;
          return null != (t = this.findElement()) ? t.querySelector("progress") : void 0;
        }, a = function a(t) {
          return i({
            tagName: "span",
            textContent: e.ZERO_WIDTH_SPACE,
            data: {
              trixCursorTarget: t,
              trixSerialize: !1
            }
          });
        }, s.prototype.attachmentDidChangeUploadProgress = function () {
          var t, e;
          return e = this.attachment.getUploadProgress(), null != (t = this.findProgressElement()) ? t.value = e : void 0;
        }, s;
      }(e.ObjectView), n = function n(t, e) {
        var n;
        return n = i("div"), n.innerHTML = null != t ? t : "", n.querySelector(e);
      };
    }.call(this), function () {
      var t,
          n = function n(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) {
          i.call(e, o) && (t[o] = e[o]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty;

      t = e.makeElement, e.PreviewableAttachmentView = function (i) {
        function o() {
          o.__super__.constructor.apply(this, arguments), this.attachment.previewDelegate = this;
        }

        return n(o, i), o.prototype.createContentNodes = function () {
          return this.image = t({
            tagName: "img",
            attributes: {
              src: ""
            },
            data: {
              trixMutable: !0
            }
          }), this.refresh(this.image), [this.image];
        }, o.prototype.createCaptionElement = function () {
          var t;
          return t = o.__super__.createCaptionElement.apply(this, arguments), t.textContent || t.setAttribute("data-trix-placeholder", e.config.lang.captionPlaceholder), t;
        }, o.prototype.refresh = function (t) {
          var e;
          return null == t && (t = null != (e = this.findElement()) ? e.querySelector("img") : void 0), t ? this.updateAttributesForImage(t) : void 0;
        }, o.prototype.updateAttributesForImage = function (t) {
          var e, n, i, o, r, s;
          return r = this.attachment.getURL(), n = this.attachment.getPreviewURL(), t.src = n || r, n === r ? t.removeAttribute("data-trix-serialized-attributes") : (i = JSON.stringify({
            src: r
          }), t.setAttribute("data-trix-serialized-attributes", i)), s = this.attachment.getWidth(), e = this.attachment.getHeight(), null != s && (t.width = s), null != e && (t.height = e), o = ["imageElement", this.attachment.id, t.src, t.width, t.height].join("/"), t.dataset.trixStoreKey = o;
        }, o.prototype.attachmentDidChangeAttributes = function () {
          return this.refresh(this.image), this.refresh();
        }, o;
      }(e.AttachmentView);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          r.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty;

      i = e.makeElement, t = e.findInnerElement, n = e.getTextConfig, e.PieceView = function (r) {
        function s() {
          var t;
          s.__super__.constructor.apply(this, arguments), this.piece = this.object, this.attributes = this.piece.getAttributes(), t = this.options, this.textConfig = t.textConfig, this.context = t.context, this.piece.attachment ? this.attachment = this.piece.attachment : this.string = this.piece.toString();
        }

        var a;
        return o(s, r), s.prototype.createNodes = function () {
          var e, n, i, o, r, s;

          if (s = this.attachment ? this.createAttachmentNodes() : this.createStringNodes(), e = this.createElement()) {
            for (i = t(e), n = 0, o = s.length; o > n; n++) {
              r = s[n], i.appendChild(r);
            }

            s = [e];
          }

          return s;
        }, s.prototype.createAttachmentNodes = function () {
          var t, n;
          return t = this.attachment.isPreviewable() ? e.PreviewableAttachmentView : e.AttachmentView, n = this.createChildView(t, this.piece.attachment, {
            piece: this.piece
          }), n.getNodes();
        }, s.prototype.createStringNodes = function () {
          var t, e, n, o, r, s, a, u, c, l;
          if (null != (u = this.textConfig) ? u.plaintext : void 0) return [document.createTextNode(this.string)];

          for (a = [], c = this.string.split("\n"), n = e = 0, o = c.length; o > e; n = ++e) {
            l = c[n], n > 0 && (t = i("br"), a.push(t)), (r = l.length) && (s = document.createTextNode(this.preserveSpaces(l)), a.push(s));
          }

          return a;
        }, s.prototype.createElement = function () {
          var t, e, o, r, s, a, u, c, l;
          c = {}, a = this.attributes;

          for (r in a) {
            if (l = a[r], (t = n(r)) && (t.tagName && (s = i(t.tagName), o ? (o.appendChild(s), o = s) : e = o = s), t.styleProperty && (c[t.styleProperty] = l), t.style)) {
              u = t.style;

              for (r in u) {
                l = u[r], c[r] = l;
              }
            }
          }

          if (Object.keys(c).length) {
            null == e && (e = i("span"));

            for (r in c) {
              l = c[r], e.style[r] = l;
            }
          }

          return e;
        }, s.prototype.createContainerElement = function () {
          var t, e, o, r, s;
          r = this.attributes;

          for (o in r) {
            if (s = r[o], (e = n(o)) && e.groupTagName) return t = {}, t[o] = s, i(e.groupTagName, t);
          }
        }, a = e.NON_BREAKING_SPACE, s.prototype.preserveSpaces = function (t) {
          return this.context.isLast && (t = t.replace(/\ $/, a)), t = t.replace(/(\S)\ {3}(\S)/g, "$1 " + a + " $2").replace(/\ {2}/g, a + " ").replace(/\ {2}/g, " " + a), (this.context.isFirst || this.context.followsWhitespace) && (t = t.replace(/^\ /, a)), t;
        }, s;
      }(e.ObjectView);
    }.call(this), function () {
      var t = function t(_t11, e) {
        function i() {
          this.constructor = _t11;
        }

        for (var o in e) {
          n.call(e, o) && (_t11[o] = e[o]);
        }

        return i.prototype = e.prototype, _t11.prototype = new i(), _t11.__super__ = e.prototype, _t11;
      },
          n = {}.hasOwnProperty;

      e.TextView = function (n) {
        function i() {
          i.__super__.constructor.apply(this, arguments), this.text = this.object, this.textConfig = this.options.textConfig;
        }

        var o;
        return t(i, n), i.prototype.createNodes = function () {
          var t, n, i, r, s, a, u, c, l, h;

          for (a = [], c = e.ObjectGroup.groupObjects(this.getPieces()), r = c.length - 1, i = n = 0, s = c.length; s > n; i = ++n) {
            u = c[i], t = {}, 0 === i && (t.isFirst = !0), i === r && (t.isLast = !0), o(l) && (t.followsWhitespace = !0), h = this.findOrCreateCachedChildView(e.PieceView, u, {
              textConfig: this.textConfig,
              context: t
            }), a.push.apply(a, h.getNodes()), l = u;
          }

          return a;
        }, i.prototype.getPieces = function () {
          var t, e, n, i, o;

          for (i = this.text.getPieces(), o = [], t = 0, e = i.length; e > t; t++) {
            n = i[t], n.hasAttribute("blockBreak") || o.push(n);
          }

          return o;
        }, o = function o(t) {
          return /\s$/.test(null != t ? t.toString() : void 0);
        }, i;
      }(e.ObjectView);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          r.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty;

      i = e.makeElement, n = e.getBlockConfig, t = e.config.css, e.BlockView = function (r) {
        function s() {
          s.__super__.constructor.apply(this, arguments), this.block = this.object, this.attributes = this.block.getAttributes();
        }

        return o(s, r), s.prototype.createNodes = function () {
          var t, o, r, s, a, u, c, l, h, p, d;
          if (o = document.createComment("block"), c = [o], this.block.isEmpty() ? c.push(i("br")) : (p = null != (l = n(this.block.getLastAttribute())) ? l.text : void 0, d = this.findOrCreateCachedChildView(e.TextView, this.block.text, {
            textConfig: p
          }), c.push.apply(c, d.getNodes()), this.shouldAddExtraNewlineElement() && c.push(i("br"))), this.attributes.length) return c;

          for (h = e.config.blockAttributes["default"].tagName, this.block.isRTL() && (t = {
            dir: "rtl"
          }), r = i({
            tagName: h,
            attributes: t
          }), s = 0, a = c.length; a > s; s++) {
            u = c[s], r.appendChild(u);
          }

          return [r];
        }, s.prototype.createContainerElement = function (e) {
          var o, r, s, a, u;
          return o = this.attributes[e], u = n(o).tagName, 0 === e && this.block.isRTL() && (r = {
            dir: "rtl"
          }), "attachmentGallery" === o && (a = this.block.getBlockBreakPosition(), s = t.attachmentGallery + " " + t.attachmentGallery + "--" + a), i({
            tagName: u,
            className: s,
            attributes: r
          });
        }, s.prototype.shouldAddExtraNewlineElement = function () {
          return /\n\n$/.test(this.block.toString());
        }, s;
      }(e.ObjectView);
    }.call(this), function () {
      var t,
          n,
          i = function i(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          o.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      t = e.defer, n = e.makeElement, e.DocumentView = function (o) {
        function r() {
          r.__super__.constructor.apply(this, arguments), this.element = this.options.element, this.elementStore = new e.ElementStore(), this.setDocument(this.object);
        }

        var s, a, u;
        return i(r, o), r.render = function (t) {
          var e, i;
          return e = n("div"), i = new this(t, {
            element: e
          }), i.render(), i.sync(), e;
        }, r.prototype.setDocument = function (t) {
          return t.isEqualTo(this.document) ? void 0 : this.document = this.object = t;
        }, r.prototype.render = function () {
          var t, i, o, r, s, a, u;

          if (this.childViews = [], this.shadowElement = n("div"), !this.document.isEmpty()) {
            for (s = e.ObjectGroup.groupObjects(this.document.getBlocks(), {
              asTree: !0
            }), a = [], t = 0, i = s.length; i > t; t++) {
              r = s[t], u = this.findOrCreateCachedChildView(e.BlockView, r), a.push(function () {
                var t, e, n, i;

                for (n = u.getNodes(), i = [], t = 0, e = n.length; e > t; t++) {
                  o = n[t], i.push(this.shadowElement.appendChild(o));
                }

                return i;
              }.call(this));
            }

            return a;
          }
        }, r.prototype.isSynced = function () {
          return s(this.shadowElement, this.element);
        }, r.prototype.sync = function () {
          var t;

          for (t = this.createDocumentFragmentForSync(); this.element.lastChild;) {
            this.element.removeChild(this.element.lastChild);
          }

          return this.element.appendChild(t), this.didSync();
        }, r.prototype.didSync = function () {
          return this.elementStore.reset(a(this.element)), t(function (t) {
            return function () {
              return t.garbageCollectCachedViews();
            };
          }(this));
        }, r.prototype.createDocumentFragmentForSync = function () {
          var t, e, n, i, o, r, s, u, c, l;

          for (e = document.createDocumentFragment(), u = this.shadowElement.childNodes, n = 0, o = u.length; o > n; n++) {
            s = u[n], e.appendChild(s.cloneNode(!0));
          }

          for (c = a(e), i = 0, r = c.length; r > i; i++) {
            t = c[i], (l = this.elementStore.remove(t)) && t.parentNode.replaceChild(l, t);
          }

          return e;
        }, a = function a(t) {
          return t.querySelectorAll("[data-trix-store-key]");
        }, s = function s(t, e) {
          return u(t.innerHTML) === u(e.innerHTML);
        }, u = function u(t) {
          return t.replace(/&nbsp;/g, " ");
        }, r;
      }(e.ObjectView);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s = function s(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          a = function a(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          u.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          u = {}.hasOwnProperty;

      i = e.findClosestElementFromNode, o = e.handleEvent, r = e.innerElementIsActive, n = e.defer, t = e.AttachmentView.attachmentSelector, e.CompositionController = function (u) {
        function c(n, i) {
          this.element = n, this.composition = i, this.didClickAttachment = s(this.didClickAttachment, this), this.didBlur = s(this.didBlur, this), this.didFocus = s(this.didFocus, this), this.documentView = new e.DocumentView(this.composition.document, {
            element: this.element
          }), o("focus", {
            onElement: this.element,
            withCallback: this.didFocus
          }), o("blur", {
            onElement: this.element,
            withCallback: this.didBlur
          }), o("click", {
            onElement: this.element,
            matchingSelector: "a[contenteditable=false]",
            preventDefault: !0
          }), o("mousedown", {
            onElement: this.element,
            matchingSelector: t,
            withCallback: this.didClickAttachment
          }), o("click", {
            onElement: this.element,
            matchingSelector: "a" + t,
            preventDefault: !0
          });
        }

        return a(c, u), c.prototype.didFocus = function () {
          var t, e, n;
          return t = function (t) {
            return function () {
              var e;
              return t.focused ? void 0 : (t.focused = !0, null != (e = t.delegate) && "function" == typeof e.compositionControllerDidFocus ? e.compositionControllerDidFocus() : void 0);
            };
          }(this), null != (e = null != (n = this.blurPromise) ? n.then(t) : void 0) ? e : t();
        }, c.prototype.didBlur = function () {
          return this.blurPromise = new Promise(function (t) {
            return function (e) {
              return n(function () {
                var n;
                return r(t.element) || (t.focused = null, null != (n = t.delegate) && "function" == typeof n.compositionControllerDidBlur && n.compositionControllerDidBlur()), t.blurPromise = null, e();
              });
            };
          }(this));
        }, c.prototype.didClickAttachment = function (t, e) {
          var n, o, r;
          return n = this.findAttachmentForElement(e), o = null != i(t.target, {
            matchingSelector: "figcaption"
          }), null != (r = this.delegate) && "function" == typeof r.compositionControllerDidSelectAttachment ? r.compositionControllerDidSelectAttachment(n, {
            editCaption: o
          }) : void 0;
        }, c.prototype.getSerializableElement = function () {
          return this.isEditingAttachment() ? this.documentView.shadowElement : this.element;
        }, c.prototype.render = function () {
          var t, e, n;
          return this.revision !== this.composition.revision && (this.documentView.setDocument(this.composition.document), this.documentView.render(), this.revision = this.composition.revision), this.canSyncDocumentView() && !this.documentView.isSynced() && (null != (t = this.delegate) && "function" == typeof t.compositionControllerWillSyncDocumentView && t.compositionControllerWillSyncDocumentView(), this.documentView.sync(), null != (e = this.delegate) && "function" == typeof e.compositionControllerDidSyncDocumentView && e.compositionControllerDidSyncDocumentView()), null != (n = this.delegate) && "function" == typeof n.compositionControllerDidRender ? n.compositionControllerDidRender() : void 0;
        }, c.prototype.rerenderViewForObject = function (t) {
          return this.invalidateViewForObject(t), this.render();
        }, c.prototype.invalidateViewForObject = function (t) {
          return this.documentView.invalidateViewForObject(t);
        }, c.prototype.isViewCachingEnabled = function () {
          return this.documentView.isViewCachingEnabled();
        }, c.prototype.enableViewCaching = function () {
          return this.documentView.enableViewCaching();
        }, c.prototype.disableViewCaching = function () {
          return this.documentView.disableViewCaching();
        }, c.prototype.refreshViewCache = function () {
          return this.documentView.garbageCollectCachedViews();
        }, c.prototype.isEditingAttachment = function () {
          return null != this.attachmentEditor;
        }, c.prototype.installAttachmentEditorForAttachment = function (t, n) {
          var i, o, r;
          if ((null != (r = this.attachmentEditor) ? r.attachment : void 0) !== t && (o = this.documentView.findElementForObject(t))) return this.uninstallAttachmentEditor(), i = this.composition.document.getAttachmentPieceForAttachment(t), this.attachmentEditor = new e.AttachmentEditorController(i, o, this.element, n), this.attachmentEditor.delegate = this;
        }, c.prototype.uninstallAttachmentEditor = function () {
          var t;
          return null != (t = this.attachmentEditor) ? t.uninstall() : void 0;
        }, c.prototype.didUninstallAttachmentEditor = function () {
          return this.attachmentEditor = null, this.render();
        }, c.prototype.attachmentEditorDidRequestUpdatingAttributesForAttachment = function (t, e) {
          var n;
          return null != (n = this.delegate) && "function" == typeof n.compositionControllerWillUpdateAttachment && n.compositionControllerWillUpdateAttachment(e), this.composition.updateAttributesForAttachment(t, e);
        }, c.prototype.attachmentEditorDidRequestRemovingAttributeForAttachment = function (t, e) {
          var n;
          return null != (n = this.delegate) && "function" == typeof n.compositionControllerWillUpdateAttachment && n.compositionControllerWillUpdateAttachment(e), this.composition.removeAttributeForAttachment(t, e);
        }, c.prototype.attachmentEditorDidRequestRemovalOfAttachment = function (t) {
          var e;
          return null != (e = this.delegate) && "function" == typeof e.compositionControllerDidRequestRemovalOfAttachment ? e.compositionControllerDidRequestRemovalOfAttachment(t) : void 0;
        }, c.prototype.attachmentEditorDidRequestDeselectingAttachment = function (t) {
          var e;
          return null != (e = this.delegate) && "function" == typeof e.compositionControllerDidRequestDeselectingAttachment ? e.compositionControllerDidRequestDeselectingAttachment(t) : void 0;
        }, c.prototype.canSyncDocumentView = function () {
          return !this.isEditingAttachment();
        }, c.prototype.findAttachmentForElement = function (t) {
          return this.composition.document.getAttachmentById(parseInt(t.dataset.trixId, 10));
        }, c;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          r = function r(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          s.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          s = {}.hasOwnProperty;

      n = e.handleEvent, i = e.triggerEvent, t = e.findClosestElementFromNode, e.ToolbarController = function (e) {
        function s(t) {
          this.element = t, this.didKeyDownDialogInput = o(this.didKeyDownDialogInput, this), this.didClickDialogButton = o(this.didClickDialogButton, this), this.didClickAttributeButton = o(this.didClickAttributeButton, this), this.didClickActionButton = o(this.didClickActionButton, this), this.attributes = {}, this.actions = {}, this.resetDialogInputs(), n("mousedown", {
            onElement: this.element,
            matchingSelector: a,
            withCallback: this.didClickActionButton
          }), n("mousedown", {
            onElement: this.element,
            matchingSelector: c,
            withCallback: this.didClickAttributeButton
          }), n("click", {
            onElement: this.element,
            matchingSelector: v,
            preventDefault: !0
          }), n("click", {
            onElement: this.element,
            matchingSelector: l,
            withCallback: this.didClickDialogButton
          }), n("keydown", {
            onElement: this.element,
            matchingSelector: h,
            withCallback: this.didKeyDownDialogInput
          });
        }

        var a, u, c, l, h, p, d, f, g, m, v;
        return r(s, e), c = "[data-trix-attribute]", a = "[data-trix-action]", v = c + ", " + a, p = "[data-trix-dialog]", u = p + "[data-trix-active]", l = p + " [data-trix-method]", h = p + " [data-trix-input]", s.prototype.didClickActionButton = function (t, e) {
          var n, i, o;
          return null != (i = this.delegate) && i.toolbarDidClickButton(), t.preventDefault(), n = d(e), this.getDialog(n) ? this.toggleDialog(n) : null != (o = this.delegate) ? o.toolbarDidInvokeAction(n) : void 0;
        }, s.prototype.didClickAttributeButton = function (t, e) {
          var n, i, o;
          return null != (i = this.delegate) && i.toolbarDidClickButton(), t.preventDefault(), n = f(e), this.getDialog(n) ? this.toggleDialog(n) : null != (o = this.delegate) && o.toolbarDidToggleAttribute(n), this.refreshAttributeButtons();
        }, s.prototype.didClickDialogButton = function (e, n) {
          var i, o;
          return i = t(n, {
            matchingSelector: p
          }), o = n.getAttribute("data-trix-method"), this[o].call(this, i);
        }, s.prototype.didKeyDownDialogInput = function (t, e) {
          var n, i;
          return 13 === t.keyCode && (t.preventDefault(), n = e.getAttribute("name"), i = this.getDialog(n), this.setAttribute(i)), 27 === t.keyCode ? (t.preventDefault(), this.hideDialog()) : void 0;
        }, s.prototype.updateActions = function (t) {
          return this.actions = t, this.refreshActionButtons();
        }, s.prototype.refreshActionButtons = function () {
          return this.eachActionButton(function (t) {
            return function (e, n) {
              return e.disabled = t.actions[n] === !1;
            };
          }(this));
        }, s.prototype.eachActionButton = function (t) {
          var e, n, i, o, r;

          for (o = this.element.querySelectorAll(a), r = [], n = 0, i = o.length; i > n; n++) {
            e = o[n], r.push(t(e, d(e)));
          }

          return r;
        }, s.prototype.updateAttributes = function (t) {
          return this.attributes = t, this.refreshAttributeButtons();
        }, s.prototype.refreshAttributeButtons = function () {
          return this.eachAttributeButton(function (t) {
            return function (e, n) {
              return e.disabled = t.attributes[n] === !1, t.attributes[n] || t.dialogIsVisible(n) ? (e.setAttribute("data-trix-active", ""), e.classList.add("trix-active")) : (e.removeAttribute("data-trix-active"), e.classList.remove("trix-active"));
            };
          }(this));
        }, s.prototype.eachAttributeButton = function (t) {
          var e, n, i, o, r;

          for (o = this.element.querySelectorAll(c), r = [], n = 0, i = o.length; i > n; n++) {
            e = o[n], r.push(t(e, f(e)));
          }

          return r;
        }, s.prototype.applyKeyboardCommand = function (t) {
          var e, n, o, r, s, a, u;

          for (s = JSON.stringify(t.sort()), u = this.element.querySelectorAll("[data-trix-key]"), r = 0, a = u.length; a > r; r++) {
            if (e = u[r], o = e.getAttribute("data-trix-key").split("+"), n = JSON.stringify(o.sort()), n === s) return i("mousedown", {
              onElement: e
            }), !0;
          }

          return !1;
        }, s.prototype.dialogIsVisible = function (t) {
          var e;
          return (e = this.getDialog(t)) ? e.hasAttribute("data-trix-active") : void 0;
        }, s.prototype.toggleDialog = function (t) {
          return this.dialogIsVisible(t) ? this.hideDialog() : this.showDialog(t);
        }, s.prototype.showDialog = function (t) {
          var e, n, i, o, r, s, a, u, c, l;

          for (this.hideDialog(), null != (a = this.delegate) && a.toolbarWillShowDialog(), i = this.getDialog(t), i.setAttribute("data-trix-active", ""), i.classList.add("trix-active"), u = i.querySelectorAll("input[disabled]"), o = 0, s = u.length; s > o; o++) {
            n = u[o], n.removeAttribute("disabled");
          }

          return (e = f(i)) && (r = m(i, t)) && (r.value = null != (c = this.attributes[e]) ? c : "", r.select()), null != (l = this.delegate) ? l.toolbarDidShowDialog(t) : void 0;
        }, s.prototype.setAttribute = function (t) {
          var e, n, i;
          return e = f(t), n = m(t, e), n.willValidate && !n.checkValidity() ? (n.setAttribute("data-trix-validate", ""), n.classList.add("trix-validate"), n.focus()) : (null != (i = this.delegate) && i.toolbarDidUpdateAttribute(e, n.value), this.hideDialog());
        }, s.prototype.removeAttribute = function (t) {
          var e, n;
          return e = f(t), null != (n = this.delegate) && n.toolbarDidRemoveAttribute(e), this.hideDialog();
        }, s.prototype.hideDialog = function () {
          var t, e;
          return (t = this.element.querySelector(u)) ? (t.removeAttribute("data-trix-active"), t.classList.remove("trix-active"), this.resetDialogInputs(), null != (e = this.delegate) ? e.toolbarDidHideDialog(g(t)) : void 0) : void 0;
        }, s.prototype.resetDialogInputs = function () {
          var t, e, n, i, o;

          for (i = this.element.querySelectorAll(h), o = [], t = 0, n = i.length; n > t; t++) {
            e = i[t], e.setAttribute("disabled", "disabled"), e.removeAttribute("data-trix-validate"), o.push(e.classList.remove("trix-validate"));
          }

          return o;
        }, s.prototype.getDialog = function (t) {
          return this.element.querySelector("[data-trix-dialog=" + t + "]");
        }, m = function m(t, e) {
          return null == e && (e = f(t)), t.querySelector("[data-trix-input][name='" + e + "']");
        }, d = function d(t) {
          return t.getAttribute("data-trix-action");
        }, f = function f(t) {
          var e;
          return null != (e = t.getAttribute("data-trix-attribute")) ? e : t.getAttribute("data-trix-dialog-attribute");
        }, g = function g(t) {
          return t.getAttribute("data-trix-dialog");
        }, s;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function t(_t12, e) {
        function i() {
          this.constructor = _t12;
        }

        for (var o in e) {
          n.call(e, o) && (_t12[o] = e[o]);
        }

        return i.prototype = e.prototype, _t12.prototype = new i(), _t12.__super__ = e.prototype, _t12;
      },
          n = {}.hasOwnProperty;

      e.ImagePreloadOperation = function (e) {
        function n(t) {
          this.url = t;
        }

        return t(n, e), n.prototype.perform = function (t) {
          var e;
          return e = new Image(), e.onload = function (n) {
            return function () {
              return e.width = n.width = e.naturalWidth, e.height = n.height = e.naturalHeight, t(!0, e);
            };
          }(this), e.onerror = function () {
            return t(!1);
          }, e.src = this.url;
        }, n;
      }(e.Operation);
    }.call(this), function () {
      var t = function t(_t13, e) {
        return function () {
          return _t13.apply(e, arguments);
        };
      },
          n = function n(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) {
          i.call(e, o) && (t[o] = e[o]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty;

      e.Attachment = function (i) {
        function o(n) {
          null == n && (n = {}), this.releaseFile = t(this.releaseFile, this), o.__super__.constructor.apply(this, arguments), this.attributes = e.Hash.box(n), this.didChangeAttributes();
        }

        return n(o, i), o.previewablePattern = /^image(\/(gif|png|jpe?g)|$)/, o.attachmentForFile = function (t) {
          var e, n;
          return n = this.attributesForFile(t), e = new this(n), e.setFile(t), e;
        }, o.attributesForFile = function (t) {
          return new e.Hash({
            filename: t.name,
            filesize: t.size,
            contentType: t.type
          });
        }, o.fromJSON = function (t) {
          return new this(t);
        }, o.prototype.getAttribute = function (t) {
          return this.attributes.get(t);
        }, o.prototype.hasAttribute = function (t) {
          return this.attributes.has(t);
        }, o.prototype.getAttributes = function () {
          return this.attributes.toObject();
        }, o.prototype.setAttributes = function (t) {
          var e, n, i;
          return null == t && (t = {}), e = this.attributes.merge(t), this.attributes.isEqualTo(e) ? void 0 : (this.attributes = e, this.didChangeAttributes(), null != (n = this.previewDelegate) && "function" == typeof n.attachmentDidChangeAttributes && n.attachmentDidChangeAttributes(this), null != (i = this.delegate) && "function" == typeof i.attachmentDidChangeAttributes ? i.attachmentDidChangeAttributes(this) : void 0);
        }, o.prototype.didChangeAttributes = function () {
          return this.isPreviewable() ? this.preloadURL() : void 0;
        }, o.prototype.isPending = function () {
          return null != this.file && !(this.getURL() || this.getHref());
        }, o.prototype.isPreviewable = function () {
          return this.attributes.has("previewable") ? this.attributes.get("previewable") : this.constructor.previewablePattern.test(this.getContentType());
        }, o.prototype.getType = function () {
          return this.hasContent() ? "content" : this.isPreviewable() ? "preview" : "file";
        }, o.prototype.getURL = function () {
          return this.attributes.get("url");
        }, o.prototype.getHref = function () {
          return this.attributes.get("href");
        }, o.prototype.getFilename = function () {
          var t;
          return null != (t = this.attributes.get("filename")) ? t : "";
        }, o.prototype.getFilesize = function () {
          return this.attributes.get("filesize");
        }, o.prototype.getFormattedFilesize = function () {
          var t;
          return t = this.attributes.get("filesize"), "number" == typeof t ? e.config.fileSize.formatter(t) : "";
        }, o.prototype.getExtension = function () {
          var t;
          return null != (t = this.getFilename().match(/\.(\w+)$/)) ? t[1].toLowerCase() : void 0;
        }, o.prototype.getContentType = function () {
          return this.attributes.get("contentType");
        }, o.prototype.hasContent = function () {
          return this.attributes.has("content");
        }, o.prototype.getContent = function () {
          return this.attributes.get("content");
        }, o.prototype.getWidth = function () {
          return this.attributes.get("width");
        }, o.prototype.getHeight = function () {
          return this.attributes.get("height");
        }, o.prototype.getFile = function () {
          return this.file;
        }, o.prototype.setFile = function (t) {
          return this.file = t, this.isPreviewable() ? this.preloadFile() : void 0;
        }, o.prototype.releaseFile = function () {
          return this.releasePreloadedFile(), this.file = null;
        }, o.prototype.getUploadProgress = function () {
          var t;
          return null != (t = this.uploadProgress) ? t : 0;
        }, o.prototype.setUploadProgress = function (t) {
          var e;
          return this.uploadProgress !== t ? (this.uploadProgress = t, null != (e = this.uploadProgressDelegate) && "function" == typeof e.attachmentDidChangeUploadProgress ? e.attachmentDidChangeUploadProgress(this) : void 0) : void 0;
        }, o.prototype.toJSON = function () {
          return this.getAttributes();
        }, o.prototype.getCacheKey = function () {
          return [o.__super__.getCacheKey.apply(this, arguments), this.attributes.getCacheKey(), this.getPreviewURL()].join("/");
        }, o.prototype.getPreviewURL = function () {
          return this.previewURL || this.preloadingURL;
        }, o.prototype.setPreviewURL = function (t) {
          var e, n;
          return t !== this.getPreviewURL() ? (this.previewURL = t, null != (e = this.previewDelegate) && "function" == typeof e.attachmentDidChangeAttributes && e.attachmentDidChangeAttributes(this), null != (n = this.delegate) && "function" == typeof n.attachmentDidChangePreviewURL ? n.attachmentDidChangePreviewURL(this) : void 0) : void 0;
        }, o.prototype.preloadURL = function () {
          return this.preload(this.getURL(), this.releaseFile);
        }, o.prototype.preloadFile = function () {
          return this.file ? (this.fileObjectURL = URL.createObjectURL(this.file), this.preload(this.fileObjectURL)) : void 0;
        }, o.prototype.releasePreloadedFile = function () {
          return this.fileObjectURL ? (URL.revokeObjectURL(this.fileObjectURL), this.fileObjectURL = null) : void 0;
        }, o.prototype.preload = function (t, n) {
          var i;
          return t && t !== this.getPreviewURL() ? (this.preloadingURL = t, i = new e.ImagePreloadOperation(t), i.then(function (e) {
            return function (i) {
              var o, r;
              return r = i.width, o = i.height, e.getWidth() && e.getHeight() || e.setAttributes({
                width: r,
                height: o
              }), e.preloadingURL = null, e.setPreviewURL(t), "function" == typeof n ? n() : void 0;
            };
          }(this))["catch"](function (t) {
            return function () {
              return t.preloadingURL = null, "function" == typeof n ? n() : void 0;
            };
          }(this))) : void 0;
        }, o;
      }(e.Object);
    }.call(this), function () {
      var t = function t(_t14, e) {
        function i() {
          this.constructor = _t14;
        }

        for (var o in e) {
          n.call(e, o) && (_t14[o] = e[o]);
        }

        return i.prototype = e.prototype, _t14.prototype = new i(), _t14.__super__ = e.prototype, _t14;
      },
          n = {}.hasOwnProperty;

      e.Piece = function (n) {
        function i(t, n) {
          null == n && (n = {}), i.__super__.constructor.apply(this, arguments), this.attributes = e.Hash.box(n);
        }

        return t(i, n), i.types = {}, i.registerType = function (t, e) {
          return e.type = t, this.types[t] = e;
        }, i.fromJSON = function (t) {
          var e;
          return (e = this.types[t.type]) ? e.fromJSON(t) : void 0;
        }, i.prototype.copyWithAttributes = function (t) {
          return new this.constructor(this.getValue(), t);
        }, i.prototype.copyWithAdditionalAttributes = function (t) {
          return this.copyWithAttributes(this.attributes.merge(t));
        }, i.prototype.copyWithoutAttribute = function (t) {
          return this.copyWithAttributes(this.attributes.remove(t));
        }, i.prototype.copy = function () {
          return this.copyWithAttributes(this.attributes);
        }, i.prototype.getAttribute = function (t) {
          return this.attributes.get(t);
        }, i.prototype.getAttributesHash = function () {
          return this.attributes;
        }, i.prototype.getAttributes = function () {
          return this.attributes.toObject();
        }, i.prototype.getCommonAttributes = function () {
          var t, e, n;
          return (n = pieceList.getPieceAtIndex(0)) ? (t = n.attributes, e = t.getKeys(), pieceList.eachPiece(function (n) {
            return e = t.getKeysCommonToHash(n.attributes), t = t.slice(e);
          }), t.toObject()) : {};
        }, i.prototype.hasAttribute = function (t) {
          return this.attributes.has(t);
        }, i.prototype.hasSameStringValueAsPiece = function (t) {
          return null != t && this.toString() === t.toString();
        }, i.prototype.hasSameAttributesAsPiece = function (t) {
          return null != t && (this.attributes === t.attributes || this.attributes.isEqualTo(t.attributes));
        }, i.prototype.isBlockBreak = function () {
          return !1;
        }, i.prototype.isEqualTo = function (t) {
          return i.__super__.isEqualTo.apply(this, arguments) || this.hasSameConstructorAs(t) && this.hasSameStringValueAsPiece(t) && this.hasSameAttributesAsPiece(t);
        }, i.prototype.isEmpty = function () {
          return 0 === this.length;
        }, i.prototype.isSerializable = function () {
          return !0;
        }, i.prototype.toJSON = function () {
          return {
            type: this.constructor.type,
            attributes: this.getAttributes()
          };
        }, i.prototype.contentsForInspection = function () {
          return {
            type: this.constructor.type,
            attributes: this.attributes.inspect()
          };
        }, i.prototype.canBeGrouped = function () {
          return this.hasAttribute("href");
        }, i.prototype.canBeGroupedWith = function (t) {
          return this.getAttribute("href") === t.getAttribute("href");
        }, i.prototype.getLength = function () {
          return this.length;
        }, i.prototype.canBeConsolidatedWith = function () {
          return !1;
        }, i;
      }(e.Object);
    }.call(this), function () {
      var t = function t(_t15, e) {
        function i() {
          this.constructor = _t15;
        }

        for (var o in e) {
          n.call(e, o) && (_t15[o] = e[o]);
        }

        return i.prototype = e.prototype, _t15.prototype = new i(), _t15.__super__ = e.prototype, _t15;
      },
          n = {}.hasOwnProperty;

      e.Piece.registerType("attachment", e.AttachmentPiece = function (n) {
        function i(t) {
          this.attachment = t, i.__super__.constructor.apply(this, arguments), this.length = 1, this.ensureAttachmentExclusivelyHasAttribute("href"), this.attachment.hasContent() || this.removeProhibitedAttributes();
        }

        return t(i, n), i.fromJSON = function (t) {
          return new this(e.Attachment.fromJSON(t.attachment), t.attributes);
        }, i.permittedAttributes = ["caption", "presentation"], i.prototype.ensureAttachmentExclusivelyHasAttribute = function (t) {
          return this.hasAttribute(t) ? (this.attachment.hasAttribute(t) || this.attachment.setAttributes(this.attributes.slice(t)), this.attributes = this.attributes.remove(t)) : void 0;
        }, i.prototype.removeProhibitedAttributes = function () {
          var t;
          return t = this.attributes.slice(this.constructor.permittedAttributes), t.isEqualTo(this.attributes) ? void 0 : this.attributes = t;
        }, i.prototype.getValue = function () {
          return this.attachment;
        }, i.prototype.isSerializable = function () {
          return !this.attachment.isPending();
        }, i.prototype.getCaption = function () {
          var t;
          return null != (t = this.attributes.get("caption")) ? t : "";
        }, i.prototype.isEqualTo = function (t) {
          var e;
          return i.__super__.isEqualTo.apply(this, arguments) && this.attachment.id === (null != t && null != (e = t.attachment) ? e.id : void 0);
        }, i.prototype.toString = function () {
          return e.OBJECT_REPLACEMENT_CHARACTER;
        }, i.prototype.toJSON = function () {
          var t;
          return t = i.__super__.toJSON.apply(this, arguments), t.attachment = this.attachment, t;
        }, i.prototype.getCacheKey = function () {
          return [i.__super__.getCacheKey.apply(this, arguments), this.attachment.getCacheKey()].join("/");
        }, i.prototype.toConsole = function () {
          return JSON.stringify(this.toString());
        }, i;
      }(e.Piece));
    }.call(this), function () {
      var t,
          n = function n(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) {
          i.call(e, o) && (t[o] = e[o]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty;

      t = e.normalizeNewlines, e.Piece.registerType("string", e.StringPiece = function (e) {
        function i(e) {
          i.__super__.constructor.apply(this, arguments), this.string = t(e), this.length = this.string.length;
        }

        return n(i, e), i.fromJSON = function (t) {
          return new this(t.string, t.attributes);
        }, i.prototype.getValue = function () {
          return this.string;
        }, i.prototype.toString = function () {
          return this.string.toString();
        }, i.prototype.isBlockBreak = function () {
          return "\n" === this.toString() && this.getAttribute("blockBreak") === !0;
        }, i.prototype.toJSON = function () {
          var t;
          return t = i.__super__.toJSON.apply(this, arguments), t.string = this.string, t;
        }, i.prototype.canBeConsolidatedWith = function (t) {
          return null != t && this.hasSameConstructorAs(t) && this.hasSameAttributesAsPiece(t);
        }, i.prototype.consolidateWith = function (t) {
          return new this.constructor(this.toString() + t.toString(), this.attributes);
        }, i.prototype.splitAtOffset = function (t) {
          var e, n;
          return 0 === t ? (e = null, n = this) : t === this.length ? (e = this, n = null) : (e = new this.constructor(this.string.slice(0, t), this.attributes), n = new this.constructor(this.string.slice(t), this.attributes)), [e, n];
        }, i.prototype.toConsole = function () {
          var t;
          return t = this.string, t.length > 15 && (t = t.slice(0, 14) + "\u2026"), JSON.stringify(t.toString());
        }, i;
      }(e.Piece));
    }.call(this), function () {
      var t,
          n = function n(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) {
          i.call(e, o) && (t[o] = e[o]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty,
          o = [].slice;

      t = e.spliceArray, e.SplittableList = function (e) {
        function i(t) {
          null == t && (t = []), i.__super__.constructor.apply(this, arguments), this.objects = t.slice(0), this.length = this.objects.length;
        }

        var r, s, a;
        return n(i, e), i.box = function (t) {
          return t instanceof this ? t : new this(t);
        }, i.prototype.indexOf = function (t) {
          return this.objects.indexOf(t);
        }, i.prototype.splice = function () {
          var e;
          return e = 1 <= arguments.length ? o.call(arguments, 0) : [], new this.constructor(t.apply(null, [this.objects].concat(o.call(e))));
        }, i.prototype.eachObject = function (t) {
          var e, n, i, o, r, s;

          for (r = this.objects, s = [], n = e = 0, i = r.length; i > e; n = ++e) {
            o = r[n], s.push(t(o, n));
          }

          return s;
        }, i.prototype.insertObjectAtIndex = function (t, e) {
          return this.splice(e, 0, t);
        }, i.prototype.insertSplittableListAtIndex = function (t, e) {
          return this.splice.apply(this, [e, 0].concat(o.call(t.objects)));
        }, i.prototype.insertSplittableListAtPosition = function (t, e) {
          var n, i, o;
          return o = this.splitObjectAtPosition(e), i = o[0], n = o[1], new this.constructor(i).insertSplittableListAtIndex(t, n);
        }, i.prototype.editObjectAtIndex = function (t, e) {
          return this.replaceObjectAtIndex(e(this.objects[t]), t);
        }, i.prototype.replaceObjectAtIndex = function (t, e) {
          return this.splice(e, 1, t);
        }, i.prototype.removeObjectAtIndex = function (t) {
          return this.splice(t, 1);
        }, i.prototype.getObjectAtIndex = function (t) {
          return this.objects[t];
        }, i.prototype.getSplittableListInRange = function (t) {
          var e, n, i, o;
          return i = this.splitObjectsAtRange(t), n = i[0], e = i[1], o = i[2], new this.constructor(n.slice(e, o + 1));
        }, i.prototype.selectSplittableList = function (t) {
          var e, n;
          return n = function () {
            var n, i, o, r;

            for (o = this.objects, r = [], n = 0, i = o.length; i > n; n++) {
              e = o[n], t(e) && r.push(e);
            }

            return r;
          }.call(this), new this.constructor(n);
        }, i.prototype.removeObjectsInRange = function (t) {
          var e, n, i, o;
          return i = this.splitObjectsAtRange(t), n = i[0], e = i[1], o = i[2], new this.constructor(n).splice(e, o - e + 1);
        }, i.prototype.transformObjectsInRange = function (t, e) {
          var n, i, o, r, s, a, u;
          return s = this.splitObjectsAtRange(t), r = s[0], i = s[1], a = s[2], u = function () {
            var t, s, u;

            for (u = [], n = t = 0, s = r.length; s > t; n = ++t) {
              o = r[n], u.push(n >= i && a >= n ? e(o) : o);
            }

            return u;
          }(), new this.constructor(u);
        }, i.prototype.splitObjectsAtRange = function (t) {
          var e, n, i, o, s, u;
          return o = this.splitObjectAtPosition(a(t)), n = o[0], e = o[1], i = o[2], s = new this.constructor(n).splitObjectAtPosition(r(t) + i), n = s[0], u = s[1], [n, e, u - 1];
        }, i.prototype.getObjectAtPosition = function (t) {
          var e, n, i;
          return i = this.findIndexAndOffsetAtPosition(t), e = i.index, n = i.offset, this.objects[e];
        }, i.prototype.splitObjectAtPosition = function (t) {
          var e, n, i, o, r, s, a, u, c, l;
          return s = this.findIndexAndOffsetAtPosition(t), e = s.index, r = s.offset, o = this.objects.slice(0), null != e ? 0 === r ? (c = e, l = 0) : (i = this.getObjectAtIndex(e), a = i.splitAtOffset(r), n = a[0], u = a[1], o.splice(e, 1, n, u), c = e + 1, l = n.getLength() - r) : (c = o.length, l = 0), [o, c, l];
        }, i.prototype.consolidate = function () {
          var t, e, n, i, o, r;

          for (i = [], o = this.objects[0], r = this.objects.slice(1), t = 0, e = r.length; e > t; t++) {
            n = r[t], ("function" == typeof o.canBeConsolidatedWith ? o.canBeConsolidatedWith(n) : void 0) ? o = o.consolidateWith(n) : (i.push(o), o = n);
          }

          return null != o && i.push(o), new this.constructor(i);
        }, i.prototype.consolidateFromIndexToIndex = function (t, e) {
          var n, i, r;
          return i = this.objects.slice(0), r = i.slice(t, e + 1), n = new this.constructor(r).consolidate().toArray(), this.splice.apply(this, [t, r.length].concat(o.call(n)));
        }, i.prototype.findIndexAndOffsetAtPosition = function (t) {
          var e, n, i, o, r, s, a;

          for (e = 0, a = this.objects, i = n = 0, o = a.length; o > n; i = ++n) {
            if (s = a[i], r = e + s.getLength(), t >= e && r > t) return {
              index: i,
              offset: t - e
            };
            e = r;
          }

          return {
            index: null,
            offset: null
          };
        }, i.prototype.findPositionAtIndexAndOffset = function (t, e) {
          var n, i, o, r, s, a;

          for (s = 0, a = this.objects, n = i = 0, o = a.length; o > i; n = ++i) {
            if (r = a[n], t > n) s += r.getLength();else if (n === t) {
              s += e;
              break;
            }
          }

          return s;
        }, i.prototype.getEndPosition = function () {
          var t, e;
          return null != this.endPosition ? this.endPosition : this.endPosition = function () {
            var n, i, o;

            for (e = 0, o = this.objects, n = 0, i = o.length; i > n; n++) {
              t = o[n], e += t.getLength();
            }

            return e;
          }.call(this);
        }, i.prototype.toString = function () {
          return this.objects.join("");
        }, i.prototype.toArray = function () {
          return this.objects.slice(0);
        }, i.prototype.toJSON = function () {
          return this.toArray();
        }, i.prototype.isEqualTo = function (t) {
          return i.__super__.isEqualTo.apply(this, arguments) || s(this.objects, null != t ? t.objects : void 0);
        }, s = function s(t, e) {
          var n, i, o, r, s;
          if (null == e && (e = []), t.length !== e.length) return !1;

          for (s = !0, i = n = 0, o = t.length; o > n; i = ++n) {
            r = t[i], s && !r.isEqualTo(e[i]) && (s = !1);
          }

          return s;
        }, i.prototype.contentsForInspection = function () {
          var t;
          return {
            objects: "[" + function () {
              var e, n, i, o;

              for (i = this.objects, o = [], e = 0, n = i.length; n > e; e++) {
                t = i[e], o.push(t.inspect());
              }

              return o;
            }.call(this).join(", ") + "]"
          };
        }, a = function a(t) {
          return t[0];
        }, r = function r(t) {
          return t[1];
        }, i;
      }(e.Object);
    }.call(this), function () {
      var t = function t(_t16, e) {
        function i() {
          this.constructor = _t16;
        }

        for (var o in e) {
          n.call(e, o) && (_t16[o] = e[o]);
        }

        return i.prototype = e.prototype, _t16.prototype = new i(), _t16.__super__ = e.prototype, _t16;
      },
          n = {}.hasOwnProperty;

      e.Text = function (n) {
        function i(t) {
          var n;
          null == t && (t = []), i.__super__.constructor.apply(this, arguments), this.pieceList = new e.SplittableList(function () {
            var e, i, o;

            for (o = [], e = 0, i = t.length; i > e; e++) {
              n = t[e], n.isEmpty() || o.push(n);
            }

            return o;
          }());
        }

        return t(i, n), i.textForAttachmentWithAttributes = function (t, n) {
          var i;
          return i = new e.AttachmentPiece(t, n), new this([i]);
        }, i.textForStringWithAttributes = function (t, n) {
          var i;
          return i = new e.StringPiece(t, n), new this([i]);
        }, i.fromJSON = function (t) {
          var n, i;
          return i = function () {
            var i, o, r;

            for (r = [], i = 0, o = t.length; o > i; i++) {
              n = t[i], r.push(e.Piece.fromJSON(n));
            }

            return r;
          }(), new this(i);
        }, i.prototype.copy = function () {
          return this.copyWithPieceList(this.pieceList);
        }, i.prototype.copyWithPieceList = function (t) {
          return new this.constructor(t.consolidate().toArray());
        }, i.prototype.copyUsingObjectMap = function (t) {
          var e, n;
          return n = function () {
            var n, i, o, r, s;

            for (o = this.getPieces(), s = [], n = 0, i = o.length; i > n; n++) {
              e = o[n], s.push(null != (r = t.find(e)) ? r : e);
            }

            return s;
          }.call(this), new this.constructor(n);
        }, i.prototype.appendText = function (t) {
          return this.insertTextAtPosition(t, this.getLength());
        }, i.prototype.insertTextAtPosition = function (t, e) {
          return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t.pieceList, e));
        }, i.prototype.removeTextAtRange = function (t) {
          return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t));
        }, i.prototype.replaceTextAtRange = function (t, e) {
          return this.removeTextAtRange(e).insertTextAtPosition(t, e[0]);
        }, i.prototype.moveTextFromRangeToPosition = function (t, e) {
          var n, i;
          if (!(t[0] <= e && e <= t[1])) return i = this.getTextAtRange(t), n = i.getLength(), t[0] < e && (e -= n), this.removeTextAtRange(t).insertTextAtPosition(i, e);
        }, i.prototype.addAttributeAtRange = function (t, e, n) {
          var i;
          return i = {}, i[t] = e, this.addAttributesAtRange(i, n);
        }, i.prototype.addAttributesAtRange = function (t, e) {
          return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
            return e.copyWithAdditionalAttributes(t);
          }));
        }, i.prototype.removeAttributeAtRange = function (t, e) {
          return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
            return e.copyWithoutAttribute(t);
          }));
        }, i.prototype.setAttributesAtRange = function (t, e) {
          return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
            return e.copyWithAttributes(t);
          }));
        }, i.prototype.getAttributesAtPosition = function (t) {
          var e, n;
          return null != (e = null != (n = this.pieceList.getObjectAtPosition(t)) ? n.getAttributes() : void 0) ? e : {};
        }, i.prototype.getCommonAttributes = function () {
          var t, n;
          return t = function () {
            var t, e, i, o;

            for (i = this.pieceList.toArray(), o = [], t = 0, e = i.length; e > t; t++) {
              n = i[t], o.push(n.getAttributes());
            }

            return o;
          }.call(this), e.Hash.fromCommonAttributesOfObjects(t).toObject();
        }, i.prototype.getCommonAttributesAtRange = function (t) {
          var e;
          return null != (e = this.getTextAtRange(t).getCommonAttributes()) ? e : {};
        }, i.prototype.getExpandedRangeForAttributeAtOffset = function (t, e) {
          var n, i, o;

          for (n = o = e, i = this.getLength(); n > 0 && this.getCommonAttributesAtRange([n - 1, o])[t];) {
            n--;
          }

          for (; i > o && this.getCommonAttributesAtRange([e, o + 1])[t];) {
            o++;
          }

          return [n, o];
        }, i.prototype.getTextAtRange = function (t) {
          return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t));
        }, i.prototype.getStringAtRange = function (t) {
          return this.pieceList.getSplittableListInRange(t).toString();
        }, i.prototype.getStringAtPosition = function (t) {
          return this.getStringAtRange([t, t + 1]);
        }, i.prototype.startsWithString = function (t) {
          return this.getStringAtRange([0, t.length]) === t;
        }, i.prototype.endsWithString = function (t) {
          var e;
          return e = this.getLength(), this.getStringAtRange([e - t.length, e]) === t;
        }, i.prototype.getAttachmentPieces = function () {
          var t, e, n, i, o;

          for (i = this.pieceList.toArray(), o = [], t = 0, e = i.length; e > t; t++) {
            n = i[t], null != n.attachment && o.push(n);
          }

          return o;
        }, i.prototype.getAttachments = function () {
          var t, e, n, i, o;

          for (i = this.getAttachmentPieces(), o = [], t = 0, e = i.length; e > t; t++) {
            n = i[t], o.push(n.attachment);
          }

          return o;
        }, i.prototype.getAttachmentAndPositionById = function (t) {
          var e, n, i, o, r, s;

          for (o = 0, r = this.pieceList.toArray(), e = 0, n = r.length; n > e; e++) {
            if (i = r[e], (null != (s = i.attachment) ? s.id : void 0) === t) return {
              attachment: i.attachment,
              position: o
            };
            o += i.length;
          }

          return {
            attachment: null,
            position: null
          };
        }, i.prototype.getAttachmentById = function (t) {
          var e, n, i;
          return i = this.getAttachmentAndPositionById(t), e = i.attachment, n = i.position, e;
        }, i.prototype.getRangeOfAttachment = function (t) {
          var e, n;
          return n = this.getAttachmentAndPositionById(t.id), t = n.attachment, e = n.position, null != t ? [e, e + 1] : void 0;
        }, i.prototype.updateAttributesForAttachment = function (t, e) {
          var n;
          return (n = this.getRangeOfAttachment(e)) ? this.addAttributesAtRange(t, n) : this;
        }, i.prototype.getLength = function () {
          return this.pieceList.getEndPosition();
        }, i.prototype.isEmpty = function () {
          return 0 === this.getLength();
        }, i.prototype.isEqualTo = function (t) {
          var e;
          return i.__super__.isEqualTo.apply(this, arguments) || (null != t && null != (e = t.pieceList) ? e.isEqualTo(this.pieceList) : void 0);
        }, i.prototype.isBlockBreak = function () {
          return 1 === this.getLength() && this.pieceList.getObjectAtIndex(0).isBlockBreak();
        }, i.prototype.eachPiece = function (t) {
          return this.pieceList.eachObject(t);
        }, i.prototype.getPieces = function () {
          return this.pieceList.toArray();
        }, i.prototype.getPieceAtPosition = function (t) {
          return this.pieceList.getObjectAtPosition(t);
        }, i.prototype.contentsForInspection = function () {
          return {
            pieceList: this.pieceList.inspect()
          };
        }, i.prototype.toSerializableText = function () {
          var t;
          return t = this.pieceList.selectSplittableList(function (t) {
            return t.isSerializable();
          }), this.copyWithPieceList(t);
        }, i.prototype.toString = function () {
          return this.pieceList.toString();
        }, i.prototype.toJSON = function () {
          return this.pieceList.toJSON();
        }, i.prototype.toConsole = function () {
          var t;
          return JSON.stringify(function () {
            var e, n, i, o;

            for (i = this.pieceList.toArray(), o = [], e = 0, n = i.length; n > e; e++) {
              t = i[e], o.push(JSON.parse(t.toConsole()));
            }

            return o;
          }.call(this));
        }, i.prototype.getDirection = function () {
          return e.getDirection(this.toString());
        }, i.prototype.isRTL = function () {
          return "rtl" === this.getDirection();
        }, i;
      }(e.Object);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s = function s(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          a.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          a = {}.hasOwnProperty,
          u = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      },
          c = [].slice;

      t = e.arraysAreEqual, r = e.spliceArray, i = e.getBlockConfig, n = e.getBlockAttributeNames, o = e.getListAttributeNames, e.Block = function (n) {
        function a(t, n) {
          null == t && (t = new e.Text()), null == n && (n = []), a.__super__.constructor.apply(this, arguments), this.text = h(t), this.attributes = n;
        }

        var l, h, p, d, f, g, m, v, y;
        return s(a, n), a.fromJSON = function (t) {
          var n;
          return n = e.Text.fromJSON(t.text), new this(n, t.attributes);
        }, a.prototype.isEmpty = function () {
          return this.text.isBlockBreak();
        }, a.prototype.isEqualTo = function (e) {
          return a.__super__.isEqualTo.apply(this, arguments) || this.text.isEqualTo(null != e ? e.text : void 0) && t(this.attributes, null != e ? e.attributes : void 0);
        }, a.prototype.copyWithText = function (t) {
          return new this.constructor(t, this.attributes);
        }, a.prototype.copyWithoutText = function () {
          return this.copyWithText(null);
        }, a.prototype.copyWithAttributes = function (t) {
          return new this.constructor(this.text, t);
        }, a.prototype.copyWithoutAttributes = function () {
          return this.copyWithAttributes(null);
        }, a.prototype.copyUsingObjectMap = function (t) {
          var e;
          return this.copyWithText((e = t.find(this.text)) ? e : this.text.copyUsingObjectMap(t));
        }, a.prototype.addAttribute = function (t) {
          var e;
          return e = this.attributes.concat(d(t)), this.copyWithAttributes(e);
        }, a.prototype.removeAttribute = function (t) {
          var e, n;
          return n = i(t).listAttribute, e = g(g(this.attributes, t), n), this.copyWithAttributes(e);
        }, a.prototype.removeLastAttribute = function () {
          return this.removeAttribute(this.getLastAttribute());
        }, a.prototype.getLastAttribute = function () {
          return f(this.attributes);
        }, a.prototype.getAttributes = function () {
          return this.attributes.slice(0);
        }, a.prototype.getAttributeLevel = function () {
          return this.attributes.length;
        }, a.prototype.getAttributeAtLevel = function (t) {
          return this.attributes[t - 1];
        }, a.prototype.hasAttribute = function (t) {
          return u.call(this.attributes, t) >= 0;
        }, a.prototype.hasAttributes = function () {
          return this.getAttributeLevel() > 0;
        }, a.prototype.getLastNestableAttribute = function () {
          return f(this.getNestableAttributes());
        }, a.prototype.getNestableAttributes = function () {
          var t, e, n, o, r;

          for (o = this.attributes, r = [], e = 0, n = o.length; n > e; e++) {
            t = o[e], i(t).nestable && r.push(t);
          }

          return r;
        }, a.prototype.getNestingLevel = function () {
          return this.getNestableAttributes().length;
        }, a.prototype.decreaseNestingLevel = function () {
          var t;
          return (t = this.getLastNestableAttribute()) ? this.removeAttribute(t) : this;
        }, a.prototype.increaseNestingLevel = function () {
          var t, e, n;
          return (t = this.getLastNestableAttribute()) ? (n = this.attributes.lastIndexOf(t), e = r.apply(null, [this.attributes, n + 1, 0].concat(c.call(d(t)))), this.copyWithAttributes(e)) : this;
        }, a.prototype.getListItemAttributes = function () {
          var t, e, n, o, r;

          for (o = this.attributes, r = [], e = 0, n = o.length; n > e; e++) {
            t = o[e], i(t).listAttribute && r.push(t);
          }

          return r;
        }, a.prototype.isListItem = function () {
          var t;
          return null != (t = i(this.getLastAttribute())) ? t.listAttribute : void 0;
        }, a.prototype.isTerminalBlock = function () {
          var t;
          return null != (t = i(this.getLastAttribute())) ? t.terminal : void 0;
        }, a.prototype.breaksOnReturn = function () {
          var t;
          return null != (t = i(this.getLastAttribute())) ? t.breakOnReturn : void 0;
        }, a.prototype.findLineBreakInDirectionFromPosition = function (t, e) {
          var n, i;
          return i = this.toString(), n = function () {
            switch (t) {
              case "forward":
                return i.indexOf("\n", e);

              case "backward":
                return i.slice(0, e).lastIndexOf("\n");
            }
          }(), -1 !== n ? n : void 0;
        }, a.prototype.contentsForInspection = function () {
          return {
            text: this.text.inspect(),
            attributes: this.attributes
          };
        }, a.prototype.toString = function () {
          return this.text.toString();
        }, a.prototype.toJSON = function () {
          return {
            text: this.text,
            attributes: this.attributes
          };
        }, a.prototype.getDirection = function () {
          return this.text.getDirection();
        }, a.prototype.isRTL = function () {
          return this.text.isRTL();
        }, a.prototype.getLength = function () {
          return this.text.getLength();
        }, a.prototype.canBeConsolidatedWith = function (t) {
          return !this.hasAttributes() && !t.hasAttributes() && this.getDirection() === t.getDirection();
        }, a.prototype.consolidateWith = function (t) {
          var n, i;
          return n = e.Text.textForStringWithAttributes("\n"), i = this.getTextWithoutBlockBreak().appendText(n), this.copyWithText(i.appendText(t.text));
        }, a.prototype.splitAtOffset = function (t) {
          var e, n;
          return 0 === t ? (e = null, n = this) : t === this.getLength() ? (e = this, n = null) : (e = this.copyWithText(this.text.getTextAtRange([0, t])), n = this.copyWithText(this.text.getTextAtRange([t, this.getLength()]))), [e, n];
        }, a.prototype.getBlockBreakPosition = function () {
          return this.text.getLength() - 1;
        }, a.prototype.getTextWithoutBlockBreak = function () {
          return m(this.text) ? this.text.getTextAtRange([0, this.getBlockBreakPosition()]) : this.text.copy();
        }, a.prototype.canBeGrouped = function (t) {
          return this.attributes[t];
        }, a.prototype.canBeGroupedWith = function (t, e) {
          var n, r, s, a;
          return s = t.getAttributes(), r = s[e], n = this.attributes[e], !(n !== r || i(n).group === !1 && (a = s[e + 1], u.call(o(), a) < 0) || this.getDirection() !== t.getDirection() && !t.isEmpty());
        }, h = function h(t) {
          return t = y(t), t = l(t);
        }, y = function y(t) {
          var n, i, o, r, s, a;
          return r = !1, a = t.getPieces(), i = 2 <= a.length ? c.call(a, 0, n = a.length - 1) : (n = 0, []), o = a[n++], null == o ? t : (i = function () {
            var t, e, n;

            for (n = [], t = 0, e = i.length; e > t; t++) {
              s = i[t], s.isBlockBreak() ? (r = !0, n.push(v(s))) : n.push(s);
            }

            return n;
          }(), r ? new e.Text(c.call(i).concat([o])) : t);
        }, p = e.Text.textForStringWithAttributes("\n", {
          blockBreak: !0
        }), l = function l(t) {
          return m(t) ? t : t.appendText(p);
        }, m = function m(t) {
          var e, n;
          return n = t.getLength(), 0 === n ? !1 : (e = t.getTextAtRange([n - 1, n]), e.isBlockBreak());
        }, v = function v(t) {
          return t.copyWithoutAttribute("blockBreak");
        }, d = function d(t) {
          var e;
          return e = i(t).listAttribute, null != e ? [e, t] : [t];
        }, f = function f(t) {
          return t.slice(-1)[0];
        }, g = function g(t, e) {
          var n;
          return n = t.lastIndexOf(e), -1 === n ? t : r(t, n, 1);
        }, a;
      }(e.Object);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          r.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty,
          s = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      },
          a = [].slice;

      n = e.tagName, i = e.walkTree, t = e.nodeIsAttachmentElement, e.HTMLSanitizer = function (r) {
        function u(t, e) {
          var n;
          n = null != e ? e : {}, this.allowedAttributes = n.allowedAttributes, this.forbiddenProtocols = n.forbiddenProtocols, this.forbiddenElements = n.forbiddenElements, null == this.allowedAttributes && (this.allowedAttributes = c), null == this.forbiddenProtocols && (this.forbiddenProtocols = h), null == this.forbiddenElements && (this.forbiddenElements = l), this.body = p(t);
        }

        var c, l, h, p;
        return o(u, r), c = "style href src width height class".split(" "), h = "javascript:".split(" "), l = "script iframe".split(" "), u.sanitize = function (t, e) {
          var n;
          return n = new this(t, e), n.sanitize(), n;
        }, u.prototype.sanitize = function () {
          return this.sanitizeElements(), this.normalizeListElementNesting();
        }, u.prototype.getHTML = function () {
          return this.body.innerHTML;
        }, u.prototype.getBody = function () {
          return this.body;
        }, u.prototype.sanitizeElements = function () {
          var t, n, o, r, s;

          for (s = i(this.body), r = []; s.nextNode();) {
            switch (o = s.currentNode, o.nodeType) {
              case Node.ELEMENT_NODE:
                this.elementIsRemovable(o) ? r.push(o) : this.sanitizeElement(o);
                break;

              case Node.COMMENT_NODE:
                r.push(o);
            }
          }

          for (t = 0, n = r.length; n > t; t++) {
            o = r[t], e.removeNode(o);
          }

          return this.body;
        }, u.prototype.sanitizeElement = function (t) {
          var e, n, i, o, r;

          for (t.hasAttribute("href") && (o = t.protocol, s.call(this.forbiddenProtocols, o) >= 0 && t.removeAttribute("href")), r = a.call(t.attributes), e = 0, n = r.length; n > e; e++) {
            i = r[e].name, s.call(this.allowedAttributes, i) >= 0 || 0 === i.indexOf("data-trix") || t.removeAttribute(i);
          }

          return t;
        }, u.prototype.normalizeListElementNesting = function () {
          var t, e, i, o, r;

          for (r = a.call(this.body.querySelectorAll("ul,ol")), t = 0, e = r.length; e > t; t++) {
            i = r[t], (o = i.previousElementSibling) && "li" === n(o) && o.appendChild(i);
          }

          return this.body;
        }, u.prototype.elementIsRemovable = function (t) {
          return (null != t ? t.nodeType : void 0) === Node.ELEMENT_NODE ? this.elementIsForbidden(t) || this.elementIsntSerializable(t) : void 0;
        }, u.prototype.elementIsForbidden = function (t) {
          var e;
          return e = n(t), s.call(this.forbiddenElements, e) >= 0;
        }, u.prototype.elementIsntSerializable = function (e) {
          return "false" === e.getAttribute("data-trix-serialize") && !t(e);
        }, p = function p(t) {
          var e, n, i, o, r;

          for (null == t && (t = ""), t = t.replace(/<\/html[^>]*>[^]*$/i, "</html>"), e = document.implementation.createHTMLDocument(""), e.documentElement.innerHTML = t, r = e.head.querySelectorAll("style"), i = 0, o = r.length; o > i; i++) {
            n = r[i], e.body.appendChild(n);
          }

          return e.body;
        }, u;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l,
          h,
          p = function p(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          d.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          d = {}.hasOwnProperty,
          f = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = e.arraysAreEqual, s = e.makeElement, l = e.tagName, r = e.getBlockTagNames, h = e.walkTree, o = e.findClosestElementFromNode, i = e.elementContainsNode, a = e.nodeIsAttachmentElement, u = e.normalizeSpaces, n = e.breakableWhitespacePattern, c = e.squishBreakableWhitespace, e.HTMLParser = function (d) {
        function g(t, e) {
          this.html = t, this.referenceElement = (null != e ? e : {}).referenceElement, this.blocks = [], this.blockElements = [], this.processedElements = [];
        }

        var m, v, y, b, A, C, x, w, E, S, R, k;
        return p(g, d), g.parse = function (t, e) {
          var n;
          return n = new this(t, e), n.parse(), n;
        }, g.prototype.getDocument = function () {
          return e.Document.fromJSON(this.blocks);
        }, g.prototype.parse = function () {
          var t, n;

          try {
            for (this.createHiddenContainer(), t = e.HTMLSanitizer.sanitize(this.html).getHTML(), this.containerElement.innerHTML = t, n = h(this.containerElement, {
              usingFilter: x
            }); n.nextNode();) {
              this.processNode(n.currentNode);
            }

            return this.translateBlockElementMarginsToNewlines();
          } finally {
            this.removeHiddenContainer();
          }
        }, g.prototype.createHiddenContainer = function () {
          return this.referenceElement ? (this.containerElement = this.referenceElement.cloneNode(!1), this.containerElement.removeAttribute("id"), this.containerElement.setAttribute("data-trix-internal", ""), this.containerElement.style.display = "none", this.referenceElement.parentNode.insertBefore(this.containerElement, this.referenceElement.nextSibling)) : (this.containerElement = s({
            tagName: "div",
            style: {
              display: "none"
            }
          }), document.body.appendChild(this.containerElement));
        }, g.prototype.removeHiddenContainer = function () {
          return e.removeNode(this.containerElement);
        }, x = function x(t) {
          return "style" === l(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }, g.prototype.processNode = function (t) {
          switch (t.nodeType) {
            case Node.TEXT_NODE:
              if (!this.isInsignificantTextNode(t)) return this.appendBlockForTextNode(t), this.processTextNode(t);
              break;

            case Node.ELEMENT_NODE:
              return this.appendBlockForElement(t), this.processElement(t);
          }
        }, g.prototype.appendBlockForTextNode = function (e) {
          var n, i, o;
          return i = e.parentNode, i === this.currentBlockElement && this.isBlockElement(e.previousSibling) ? this.appendStringWithAttributes("\n") : i !== this.containerElement && !this.isBlockElement(i) || (n = this.getBlockAttributes(i), t(n, null != (o = this.currentBlock) ? o.attributes : void 0)) ? void 0 : (this.currentBlock = this.appendBlockForAttributesWithElement(n, i), this.currentBlockElement = i);
        }, g.prototype.appendBlockForElement = function (e) {
          var n, o, r, s;

          if (r = this.isBlockElement(e), o = i(this.currentBlockElement, e), r && !this.isBlockElement(e.firstChild)) {
            if ((!this.isInsignificantTextNode(e.firstChild) || !this.isBlockElement(e.firstElementChild)) && (n = this.getBlockAttributes(e), e.firstChild)) return o && t(n, this.currentBlock.attributes) ? this.appendStringWithAttributes("\n") : (this.currentBlock = this.appendBlockForAttributesWithElement(n, e), this.currentBlockElement = e);
          } else if (this.currentBlockElement && !o && !r) return (s = this.findParentBlockElement(e)) ? this.appendBlockForElement(s) : (this.currentBlock = this.appendEmptyBlock(), this.currentBlockElement = null);
        }, g.prototype.findParentBlockElement = function (t) {
          var e;

          for (e = t.parentElement; e && e !== this.containerElement;) {
            if (this.isBlockElement(e) && f.call(this.blockElements, e) >= 0) return e;
            e = e.parentElement;
          }

          return null;
        }, g.prototype.processTextNode = function (t) {
          var e, n;
          return n = t.data, v(t.parentNode) || (n = c(n), R(null != (e = t.previousSibling) ? e.textContent : void 0) && (n = A(n))), this.appendStringWithAttributes(n, this.getTextAttributes(t.parentNode));
        }, g.prototype.processElement = function (t) {
          var e, n, i, o, r;
          if (a(t)) return e = w(t, "attachment"), Object.keys(e).length && (o = this.getTextAttributes(t), this.appendAttachmentWithAttributes(e, o), t.innerHTML = ""), this.processedElements.push(t);

          switch (l(t)) {
            case "br":
              return this.isExtraBR(t) || this.isBlockElement(t.nextSibling) || this.appendStringWithAttributes("\n", this.getTextAttributes(t)), this.processedElements.push(t);

            case "img":
              e = {
                url: t.getAttribute("src"),
                contentType: "image"
              }, i = b(t);

              for (n in i) {
                r = i[n], e[n] = r;
              }

              return this.appendAttachmentWithAttributes(e, this.getTextAttributes(t)), this.processedElements.push(t);

            case "tr":
              if (t.parentNode.firstChild !== t) return this.appendStringWithAttributes("\n");
              break;

            case "td":
              if (t.parentNode.firstChild !== t) return this.appendStringWithAttributes(" | ");
          }
        }, g.prototype.appendBlockForAttributesWithElement = function (t, e) {
          var n;
          return this.blockElements.push(e), n = m(t), this.blocks.push(n), n;
        }, g.prototype.appendEmptyBlock = function () {
          return this.appendBlockForAttributesWithElement([], null);
        }, g.prototype.appendStringWithAttributes = function (t, e) {
          return this.appendPiece(S(t, e));
        }, g.prototype.appendAttachmentWithAttributes = function (t, e) {
          return this.appendPiece(E(t, e));
        }, g.prototype.appendPiece = function (t) {
          return 0 === this.blocks.length && this.appendEmptyBlock(), this.blocks[this.blocks.length - 1].text.push(t);
        }, g.prototype.appendStringToTextAtIndex = function (t, e) {
          var n, i;
          return i = this.blocks[e].text, n = i[i.length - 1], "string" === (null != n ? n.type : void 0) ? n.string += t : i.push(S(t));
        }, g.prototype.prependStringToTextAtIndex = function (t, e) {
          var n, i;
          return i = this.blocks[e].text, n = i[0], "string" === (null != n ? n.type : void 0) ? n.string = t + n.string : i.unshift(S(t));
        }, S = function S(t, e) {
          var n;
          return null == e && (e = {}), n = "string", t = u(t), {
            string: t,
            attributes: e,
            type: n
          };
        }, E = function E(t, e) {
          var n;
          return null == e && (e = {}), n = "attachment", {
            attachment: t,
            attributes: e,
            type: n
          };
        }, m = function m(t) {
          var e;
          return null == t && (t = {}), e = [], {
            text: e,
            attributes: t
          };
        }, g.prototype.getTextAttributes = function (t) {
          var n, i, r, s, u, c, l, h, p, d, f, g;
          r = {}, p = e.config.textAttributes;

          for (n in p) {
            if (u = p[n], u.tagName && o(t, {
              matchingSelector: u.tagName,
              untilNode: this.containerElement
            })) r[n] = !0;else if (u.parser) {
              if (g = u.parser(t)) {
                for (i = !1, d = this.findBlockElementAncestors(t), c = 0, h = d.length; h > c; c++) {
                  if (s = d[c], u.parser(s) === g) {
                    i = !0;
                    break;
                  }
                }

                i || (r[n] = g);
              }
            } else u.styleProperty && (g = t.style[u.styleProperty]) && (r[n] = g);
          }

          if (a(t)) {
            f = w(t, "attributes");

            for (l in f) {
              g = f[l], r[l] = g;
            }
          }

          return r;
        }, g.prototype.getBlockAttributes = function (t) {
          var n, i, o, r;

          for (i = []; t && t !== this.containerElement;) {
            r = e.config.blockAttributes;

            for (n in r) {
              o = r[n], o.parse !== !1 && l(t) === o.tagName && (("function" == typeof o.test ? o.test(t) : void 0) || !o.test) && (i.push(n), o.listAttribute && i.push(o.listAttribute));
            }

            t = t.parentNode;
          }

          return i.reverse();
        }, g.prototype.findBlockElementAncestors = function (t) {
          var e, n;

          for (e = []; t && t !== this.containerElement;) {
            n = l(t), f.call(r(), n) >= 0 && e.push(t), t = t.parentNode;
          }

          return e;
        }, w = function w(t, e) {
          try {
            return JSON.parse(t.getAttribute("data-trix-" + e));
          } catch (n) {
            return {};
          }
        }, b = function b(t) {
          var e, n, i;
          return i = t.getAttribute("width"), n = t.getAttribute("height"), e = {}, i && (e.width = parseInt(i, 10)), n && (e.height = parseInt(n, 10)), e;
        }, g.prototype.isBlockElement = function (t) {
          var e;
          if ((null != t ? t.nodeType : void 0) === Node.ELEMENT_NODE && !a(t) && !o(t, {
            matchingSelector: "td",
            untilNode: this.containerElement
          })) return e = l(t), f.call(r(), e) >= 0 || "block" === window.getComputedStyle(t).display;
        }, g.prototype.isInsignificantTextNode = function (t) {
          var e, n, i;
          if ((null != t ? t.nodeType : void 0) === Node.TEXT_NODE && k(t.data) && (n = t.parentNode, i = t.previousSibling, e = t.nextSibling, (!C(n.previousSibling) || this.isBlockElement(n.previousSibling)) && !v(n))) return !i || this.isBlockElement(i) || !e || this.isBlockElement(e);
        }, g.prototype.isExtraBR = function (t) {
          return "br" === l(t) && this.isBlockElement(t.parentNode) && t.parentNode.lastChild === t;
        }, v = function v(t) {
          var e;
          return e = window.getComputedStyle(t).whiteSpace, "pre" === e || "pre-wrap" === e || "pre-line" === e;
        }, C = function C(t) {
          return t && !R(t.textContent);
        }, g.prototype.translateBlockElementMarginsToNewlines = function () {
          var t, e, n, i, o, r, s, a;

          for (e = this.getMarginOfDefaultBlockElement(), s = this.blocks, a = [], i = n = 0, o = s.length; o > n; i = ++n) {
            t = s[i], (r = this.getMarginOfBlockElementAtIndex(i)) && (r.top > 2 * e.top && this.prependStringToTextAtIndex("\n", i), a.push(r.bottom > 2 * e.bottom ? this.appendStringToTextAtIndex("\n", i) : void 0));
          }

          return a;
        }, g.prototype.getMarginOfBlockElementAtIndex = function (t) {
          var e, n;
          return !(e = this.blockElements[t]) || !e.textContent || (n = l(e), f.call(r(), n) >= 0 || f.call(this.processedElements, e) >= 0) ? void 0 : y(e);
        }, g.prototype.getMarginOfDefaultBlockElement = function () {
          var t;
          return t = s(e.config.blockAttributes["default"].tagName), this.containerElement.appendChild(t), y(t);
        }, y = function y(t) {
          var e;
          return e = window.getComputedStyle(t), "block" === e.display ? {
            top: parseInt(e.marginTop),
            bottom: parseInt(e.marginBottom)
          } : void 0;
        }, A = function A(t) {
          return t.replace(RegExp("^" + n.source + "+"), "");
        }, k = function k(t) {
          return RegExp("^" + n.source + "*$").test(t);
        }, R = function R(t) {
          return /\s$/.test(t);
        }, g;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r = function r(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          s.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          s = {}.hasOwnProperty,
          a = [].slice,
          u = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = e.arraysAreEqual, i = e.normalizeRange, o = e.rangeIsCollapsed, n = e.getBlockConfig, e.Document = function (s) {
        function c(t) {
          null == t && (t = []), c.__super__.constructor.apply(this, arguments), 0 === t.length && (t = [new e.Block()]), this.blockList = e.SplittableList.box(t);
        }

        var l;
        return r(c, s), c.fromJSON = function (t) {
          var n, i;
          return i = function () {
            var i, o, r;

            for (r = [], i = 0, o = t.length; o > i; i++) {
              n = t[i], r.push(e.Block.fromJSON(n));
            }

            return r;
          }(), new this(i);
        }, c.fromHTML = function (t, n) {
          return e.HTMLParser.parse(t, n).getDocument();
        }, c.fromString = function (t, n) {
          var i;
          return i = e.Text.textForStringWithAttributes(t, n), new this([new e.Block(i)]);
        }, c.prototype.isEmpty = function () {
          var t;
          return 1 === this.blockList.length && (t = this.getBlockAtIndex(0), t.isEmpty() && !t.hasAttributes());
        }, c.prototype.copy = function (t) {
          var e;
          return null == t && (t = {}), e = t.consolidateBlocks ? this.blockList.consolidate().toArray() : this.blockList.toArray(), new this.constructor(e);
        }, c.prototype.copyUsingObjectsFromDocument = function (t) {
          var n;
          return n = new e.ObjectMap(t.getObjects()), this.copyUsingObjectMap(n);
        }, c.prototype.copyUsingObjectMap = function (t) {
          var e, n, i;
          return n = function () {
            var n, o, r, s;

            for (r = this.getBlocks(), s = [], n = 0, o = r.length; o > n; n++) {
              e = r[n], s.push((i = t.find(e)) ? i : e.copyUsingObjectMap(t));
            }

            return s;
          }.call(this), new this.constructor(n);
        }, c.prototype.copyWithBaseBlockAttributes = function (t) {
          var e, n, i;
          return null == t && (t = []), i = function () {
            var i, o, r, s;

            for (r = this.getBlocks(), s = [], i = 0, o = r.length; o > i; i++) {
              n = r[i], e = t.concat(n.getAttributes()), s.push(n.copyWithAttributes(e));
            }

            return s;
          }.call(this), new this.constructor(i);
        }, c.prototype.replaceBlock = function (t, e) {
          var n;
          return n = this.blockList.indexOf(t), -1 === n ? this : new this.constructor(this.blockList.replaceObjectAtIndex(e, n));
        }, c.prototype.insertDocumentAtRange = function (t, e) {
          var n, r, s, a, u, c, l;
          return r = t.blockList, u = (e = i(e))[0], c = this.locationFromPosition(u), s = c.index, a = c.offset, l = this, n = this.getBlockAtPosition(u), o(e) && n.isEmpty() && !n.hasAttributes() ? l = new this.constructor(l.blockList.removeObjectAtIndex(s)) : n.getBlockBreakPosition() === a && u++, l = l.removeTextAtRange(e), new this.constructor(l.blockList.insertSplittableListAtPosition(r, u));
        }, c.prototype.mergeDocumentAtRange = function (e, n) {
          var o, r, s, a, u, c, l, h, p, d, f, g;
          return f = (n = i(n))[0], d = this.locationFromPosition(f), r = this.getBlockAtIndex(d.index).getAttributes(), o = e.getBaseBlockAttributes(), g = r.slice(-o.length), t(o, g) ? (l = r.slice(0, -o.length), c = e.copyWithBaseBlockAttributes(l)) : c = e.copy({
            consolidateBlocks: !0
          }).copyWithBaseBlockAttributes(r), s = c.getBlockCount(), a = c.getBlockAtIndex(0), t(r, a.getAttributes()) ? (u = a.getTextWithoutBlockBreak(), p = this.insertTextAtRange(u, n), s > 1 && (c = new this.constructor(c.getBlocks().slice(1)), h = f + u.getLength(), p = p.insertDocumentAtRange(c, h))) : p = this.insertDocumentAtRange(c, n), p;
        }, c.prototype.insertTextAtRange = function (t, e) {
          var n, o, r, s, a;
          return a = (e = i(e))[0], s = this.locationFromPosition(a), o = s.index, r = s.offset, n = this.removeTextAtRange(e), new this.constructor(n.blockList.editObjectAtIndex(o, function (e) {
            return e.copyWithText(e.text.insertTextAtPosition(t, r));
          }));
        }, c.prototype.removeTextAtRange = function (t) {
          var e, n, r, s, a, u, c, l, h, p, d, f, g, m, v, y, b, A, C, x, w;
          return p = t = i(t), l = p[0], A = p[1], o(t) ? this : (d = this.locationRangeFromRange(t), u = d[0], y = d[1], a = u.index, c = u.offset, s = this.getBlockAtIndex(a), v = y.index, b = y.offset, m = this.getBlockAtIndex(v), f = A - l === 1 && s.getBlockBreakPosition() === c && m.getBlockBreakPosition() !== b && "\n" === m.text.getStringAtPosition(b), f ? r = this.blockList.editObjectAtIndex(v, function (t) {
            return t.copyWithText(t.text.removeTextAtRange([b, b + 1]));
          }) : (h = s.text.getTextAtRange([0, c]), C = m.text.getTextAtRange([b, m.getLength()]), x = h.appendText(C), g = a !== v && 0 === c, w = g && s.getAttributeLevel() >= m.getAttributeLevel(), n = w ? m.copyWithText(x) : s.copyWithText(x), e = v + 1 - a, r = this.blockList.splice(a, e, n)), new this.constructor(r));
        }, c.prototype.moveTextFromRangeToPosition = function (t, e) {
          var n, o, r, s, u, c, l, h, p, d;
          return c = t = i(t), p = c[0], r = c[1], e >= p && r >= e ? this : (o = this.getDocumentAtRange(t), h = this.removeTextAtRange(t), u = e > p, u && (e -= o.getLength()), l = o.getBlocks(), s = l[0], n = 2 <= l.length ? a.call(l, 1) : [], 0 === n.length ? (d = s.getTextWithoutBlockBreak(), u && (e += 1)) : d = s.text, h = h.insertTextAtRange(d, e), 0 === n.length ? h : (o = new this.constructor(n), e += d.getLength(), h.insertDocumentAtRange(o, e)));
        }, c.prototype.addAttributeAtRange = function (t, e, i) {
          var o;
          return o = this.blockList, this.eachBlockAtRange(i, function (i, r, s) {
            return o = o.editObjectAtIndex(s, function () {
              return n(t) ? i.addAttribute(t, e) : r[0] === r[1] ? i : i.copyWithText(i.text.addAttributeAtRange(t, e, r));
            });
          }), new this.constructor(o);
        }, c.prototype.addAttribute = function (t, e) {
          var n;
          return n = this.blockList, this.eachBlock(function (i, o) {
            return n = n.editObjectAtIndex(o, function () {
              return i.addAttribute(t, e);
            });
          }), new this.constructor(n);
        }, c.prototype.removeAttributeAtRange = function (t, e) {
          var i;
          return i = this.blockList, this.eachBlockAtRange(e, function (e, o, r) {
            return n(t) ? i = i.editObjectAtIndex(r, function () {
              return e.removeAttribute(t);
            }) : o[0] !== o[1] ? i = i.editObjectAtIndex(r, function () {
              return e.copyWithText(e.text.removeAttributeAtRange(t, o));
            }) : void 0;
          }), new this.constructor(i);
        }, c.prototype.updateAttributesForAttachment = function (t, e) {
          var n, i, o, r;
          return o = (i = this.getRangeOfAttachment(e))[0], n = this.locationFromPosition(o).index, r = this.getTextAtIndex(n), new this.constructor(this.blockList.editObjectAtIndex(n, function (n) {
            return n.copyWithText(r.updateAttributesForAttachment(t, e));
          }));
        }, c.prototype.removeAttributeForAttachment = function (t, e) {
          var n;
          return n = this.getRangeOfAttachment(e), this.removeAttributeAtRange(t, n);
        }, c.prototype.insertBlockBreakAtRange = function (t) {
          var n, o, r, s;
          return s = (t = i(t))[0], r = this.locationFromPosition(s).offset, o = this.removeTextAtRange(t), 0 === r && (n = [new e.Block()]), new this.constructor(o.blockList.insertSplittableListAtPosition(new e.SplittableList(n), s));
        }, c.prototype.applyBlockAttributeAtRange = function (t, e, i) {
          var o, r, s, a;
          return s = this.expandRangeToLineBreaksAndSplitBlocks(i), r = s.document, i = s.range, o = n(t), o.listAttribute ? (r = r.removeLastListAttributeAtRange(i, {
            exceptAttributeName: t
          }), a = r.convertLineBreaksToBlockBreaksInRange(i), r = a.document, i = a.range) : r = o.exclusive ? r.removeBlockAttributesAtRange(i) : o.terminal ? r.removeLastTerminalAttributeAtRange(i) : r.consolidateBlocksAtRange(i), r.addAttributeAtRange(t, e, i);
        }, c.prototype.removeLastListAttributeAtRange = function (t, e) {
          var i;
          return null == e && (e = {}), i = this.blockList, this.eachBlockAtRange(t, function (t, o, r) {
            var s;
            if ((s = t.getLastAttribute()) && n(s).listAttribute && s !== e.exceptAttributeName) return i = i.editObjectAtIndex(r, function () {
              return t.removeAttribute(s);
            });
          }), new this.constructor(i);
        }, c.prototype.removeLastTerminalAttributeAtRange = function (t) {
          var e;
          return e = this.blockList, this.eachBlockAtRange(t, function (t, i, o) {
            var r;
            if ((r = t.getLastAttribute()) && n(r).terminal) return e = e.editObjectAtIndex(o, function () {
              return t.removeAttribute(r);
            });
          }), new this.constructor(e);
        }, c.prototype.removeBlockAttributesAtRange = function (t) {
          var e;
          return e = this.blockList, this.eachBlockAtRange(t, function (t, n, i) {
            return t.hasAttributes() ? e = e.editObjectAtIndex(i, function () {
              return t.copyWithoutAttributes();
            }) : void 0;
          }), new this.constructor(e);
        }, c.prototype.expandRangeToLineBreaksAndSplitBlocks = function (t) {
          var e, n, o, r, s, a, u, c, l;
          return a = t = i(t), l = a[0], r = a[1], c = this.locationFromPosition(l), o = this.locationFromPosition(r), e = this, u = e.getBlockAtIndex(c.index), null != (c.offset = u.findLineBreakInDirectionFromPosition("backward", c.offset)) && (s = e.positionFromLocation(c), e = e.insertBlockBreakAtRange([s, s + 1]), o.index += 1, o.offset -= e.getBlockAtIndex(c.index).getLength(), c.index += 1), c.offset = 0, 0 === o.offset && o.index > c.index ? (o.index -= 1, o.offset = e.getBlockAtIndex(o.index).getBlockBreakPosition()) : (n = e.getBlockAtIndex(o.index), "\n" === n.text.getStringAtRange([o.offset - 1, o.offset]) ? o.offset -= 1 : o.offset = n.findLineBreakInDirectionFromPosition("forward", o.offset), o.offset !== n.getBlockBreakPosition() && (s = e.positionFromLocation(o), e = e.insertBlockBreakAtRange([s, s + 1]))), l = e.positionFromLocation(c), r = e.positionFromLocation(o), t = i([l, r]), {
            document: e,
            range: t
          };
        }, c.prototype.convertLineBreaksToBlockBreaksInRange = function (t) {
          var e, n, o;
          return n = (t = i(t))[0], o = this.getStringAtRange(t).slice(0, -1), e = this, o.replace(/.*?\n/g, function (t) {
            return n += t.length, e = e.insertBlockBreakAtRange([n - 1, n]);
          }), {
            document: e,
            range: t
          };
        }, c.prototype.consolidateBlocksAtRange = function (t) {
          var e, n, o, r, s;
          return o = t = i(t), s = o[0], n = o[1], r = this.locationFromPosition(s).index, e = this.locationFromPosition(n).index, new this.constructor(this.blockList.consolidateFromIndexToIndex(r, e));
        }, c.prototype.getDocumentAtRange = function (t) {
          var e;
          return t = i(t), e = this.blockList.getSplittableListInRange(t).toArray(), new this.constructor(e);
        }, c.prototype.getStringAtRange = function (t) {
          var e, n, o;
          return o = t = i(t), n = o[o.length - 1], n !== this.getLength() && (e = -1), this.getDocumentAtRange(t).toString().slice(0, e);
        }, c.prototype.getBlockAtIndex = function (t) {
          return this.blockList.getObjectAtIndex(t);
        }, c.prototype.getBlockAtPosition = function (t) {
          var e;
          return e = this.locationFromPosition(t).index, this.getBlockAtIndex(e);
        }, c.prototype.getTextAtIndex = function (t) {
          var e;
          return null != (e = this.getBlockAtIndex(t)) ? e.text : void 0;
        }, c.prototype.getTextAtPosition = function (t) {
          var e;
          return e = this.locationFromPosition(t).index, this.getTextAtIndex(e);
        }, c.prototype.getPieceAtPosition = function (t) {
          var e, n, i;
          return i = this.locationFromPosition(t), e = i.index, n = i.offset, this.getTextAtIndex(e).getPieceAtPosition(n);
        }, c.prototype.getCharacterAtPosition = function (t) {
          var e, n, i;
          return i = this.locationFromPosition(t), e = i.index, n = i.offset, this.getTextAtIndex(e).getStringAtRange([n, n + 1]);
        }, c.prototype.getLength = function () {
          return this.blockList.getEndPosition();
        }, c.prototype.getBlocks = function () {
          return this.blockList.toArray();
        }, c.prototype.getBlockCount = function () {
          return this.blockList.length;
        }, c.prototype.getEditCount = function () {
          return this.editCount;
        }, c.prototype.eachBlock = function (t) {
          return this.blockList.eachObject(t);
        }, c.prototype.eachBlockAtRange = function (t, e) {
          var n, o, r, s, a, u, c, l, h, p, d, f;
          if (u = t = i(t), d = u[0], r = u[1], p = this.locationFromPosition(d), o = this.locationFromPosition(r), p.index === o.index) return n = this.getBlockAtIndex(p.index), f = [p.offset, o.offset], e(n, f, p.index);

          for (h = [], a = s = c = p.index, l = o.index; l >= c ? l >= s : s >= l; a = l >= c ? ++s : --s) {
            (n = this.getBlockAtIndex(a)) ? (f = function () {
              switch (a) {
                case p.index:
                  return [p.offset, n.text.getLength()];

                case o.index:
                  return [0, o.offset];

                default:
                  return [0, n.text.getLength()];
              }
            }(), h.push(e(n, f, a))) : h.push(void 0);
          }

          return h;
        }, c.prototype.getCommonAttributesAtRange = function (t) {
          var n, r, s;
          return r = (t = i(t))[0], o(t) ? this.getCommonAttributesAtPosition(r) : (s = [], n = [], this.eachBlockAtRange(t, function (t, e) {
            return e[0] !== e[1] ? (s.push(t.text.getCommonAttributesAtRange(e)), n.push(l(t))) : void 0;
          }), e.Hash.fromCommonAttributesOfObjects(s).merge(e.Hash.fromCommonAttributesOfObjects(n)).toObject());
        }, c.prototype.getCommonAttributesAtPosition = function (t) {
          var n, i, o, r, s, a, c, h, p, d;
          if (p = this.locationFromPosition(t), s = p.index, h = p.offset, o = this.getBlockAtIndex(s), !o) return {};
          r = l(o), n = o.text.getAttributesAtPosition(h), i = o.text.getAttributesAtPosition(h - 1), a = function () {
            var t, n;
            t = e.config.textAttributes, n = [];

            for (c in t) {
              d = t[c], d.inheritable && n.push(c);
            }

            return n;
          }();

          for (c in i) {
            d = i[c], (d === n[c] || u.call(a, c) >= 0) && (r[c] = d);
          }

          return r;
        }, c.prototype.getRangeOfCommonAttributeAtPosition = function (t, e) {
          var n, o, r, s, a, u, c, l, h;
          return a = this.locationFromPosition(e), r = a.index, s = a.offset, h = this.getTextAtIndex(r), u = h.getExpandedRangeForAttributeAtOffset(t, s), l = u[0], o = u[1], c = this.positionFromLocation({
            index: r,
            offset: l
          }), n = this.positionFromLocation({
            index: r,
            offset: o
          }), i([c, n]);
        }, c.prototype.getBaseBlockAttributes = function () {
          var t, e, n, i, o, r, s;

          for (t = this.getBlockAtIndex(0).getAttributes(), n = i = 1, s = this.getBlockCount(); s >= 1 ? s > i : i > s; n = s >= 1 ? ++i : --i) {
            e = this.getBlockAtIndex(n).getAttributes(), r = Math.min(t.length, e.length), t = function () {
              var n, i, s;

              for (s = [], o = n = 0, i = r; (i >= 0 ? i > n : n > i) && e[o] === t[o]; o = i >= 0 ? ++n : --n) {
                s.push(e[o]);
              }

              return s;
            }();
          }

          return t;
        }, l = function l(t) {
          var e, n;
          return n = {}, (e = t.getLastAttribute()) && (n[e] = !0), n;
        }, c.prototype.getAttachmentById = function (t) {
          var e, n, i, o;

          for (o = this.getAttachments(), n = 0, i = o.length; i > n; n++) {
            if (e = o[n], e.id === t) return e;
          }
        }, c.prototype.getAttachmentPieces = function () {
          var t;
          return t = [], this.blockList.eachObject(function (e) {
            var n;
            return n = e.text, t = t.concat(n.getAttachmentPieces());
          }), t;
        }, c.prototype.getAttachments = function () {
          var t, e, n, i, o;

          for (i = this.getAttachmentPieces(), o = [], t = 0, e = i.length; e > t; t++) {
            n = i[t], o.push(n.attachment);
          }

          return o;
        }, c.prototype.getRangeOfAttachment = function (t) {
          var e, n, o, r, s, a, u;

          for (r = 0, s = this.blockList.toArray(), n = e = 0, o = s.length; o > e; n = ++e) {
            if (a = s[n].text, u = a.getRangeOfAttachment(t)) return i([r + u[0], r + u[1]]);
            r += a.getLength();
          }
        }, c.prototype.getLocationRangeOfAttachment = function (t) {
          var e;
          return e = this.getRangeOfAttachment(t), this.locationRangeFromRange(e);
        }, c.prototype.getAttachmentPieceForAttachment = function (t) {
          var e, n, i, o;

          for (o = this.getAttachmentPieces(), e = 0, n = o.length; n > e; e++) {
            if (i = o[e], i.attachment === t) return i;
          }
        }, c.prototype.findRangesForBlockAttribute = function (t) {
          var e, n, i, o, r, s, a;

          for (r = 0, s = [], a = this.getBlocks(), n = 0, i = a.length; i > n; n++) {
            e = a[n], o = e.getLength(), e.hasAttribute(t) && s.push([r, r + o]), r += o;
          }

          return s;
        }, c.prototype.findRangesForTextAttribute = function (t, e) {
          var n, i, o, r, s, a, u, c, l, h;

          for (h = (null != e ? e : {}).withValue, a = 0, u = [], c = [], r = function r(e) {
            return null != h ? e.getAttribute(t) === h : e.hasAttribute(t);
          }, l = this.getPieces(), n = 0, i = l.length; i > n; n++) {
            s = l[n], o = s.getLength(), r(s) && (u[1] === a ? u[1] = a + o : c.push(u = [a, a + o])), a += o;
          }

          return c;
        }, c.prototype.locationFromPosition = function (t) {
          var e, n;
          return n = this.blockList.findIndexAndOffsetAtPosition(Math.max(0, t)), null != n.index ? n : (e = this.getBlocks(), {
            index: e.length - 1,
            offset: e[e.length - 1].getLength()
          });
        }, c.prototype.positionFromLocation = function (t) {
          return this.blockList.findPositionAtIndexAndOffset(t.index, t.offset);
        }, c.prototype.locationRangeFromPosition = function (t) {
          return i(this.locationFromPosition(t));
        }, c.prototype.locationRangeFromRange = function (t) {
          var e, n, o, r;
          if (t = i(t)) return r = t[0], n = t[1], o = this.locationFromPosition(r), e = this.locationFromPosition(n), i([o, e]);
        }, c.prototype.rangeFromLocationRange = function (t) {
          var e, n;
          return t = i(t), e = this.positionFromLocation(t[0]), o(t) || (n = this.positionFromLocation(t[1])), i([e, n]);
        }, c.prototype.isEqualTo = function (t) {
          return this.blockList.isEqualTo(null != t ? t.blockList : void 0);
        }, c.prototype.getTexts = function () {
          var t, e, n, i, o;

          for (i = this.getBlocks(), o = [], e = 0, n = i.length; n > e; e++) {
            t = i[e], o.push(t.text);
          }

          return o;
        }, c.prototype.getPieces = function () {
          var t, e, n, i, o;

          for (n = [], i = this.getTexts(), t = 0, e = i.length; e > t; t++) {
            o = i[t], n.push.apply(n, o.getPieces());
          }

          return n;
        }, c.prototype.getObjects = function () {
          return this.getBlocks().concat(this.getTexts()).concat(this.getPieces());
        }, c.prototype.toSerializableDocument = function () {
          var t;
          return t = [], this.blockList.eachObject(function (e) {
            return t.push(e.copyWithText(e.text.toSerializableText()));
          }), new this.constructor(t);
        }, c.prototype.toString = function () {
          return this.blockList.toString();
        }, c.prototype.toJSON = function () {
          return this.blockList.toJSON();
        }, c.prototype.toConsole = function () {
          var t;
          return JSON.stringify(function () {
            var e, n, i, o;

            for (i = this.blockList.toArray(), o = [], e = 0, n = i.length; n > e; e++) {
              t = i[e], o.push(JSON.parse(t.text.toConsole()));
            }

            return o;
          }.call(this));
        }, c;
      }(e.Object);
    }.call(this), function () {
      e.LineBreakInsertion = function () {
        function t(t) {
          var e;
          this.composition = t, this.document = this.composition.document, e = this.composition.getSelectedRange(), this.startPosition = e[0], this.endPosition = e[1], this.startLocation = this.document.locationFromPosition(this.startPosition), this.endLocation = this.document.locationFromPosition(this.endPosition), this.block = this.document.getBlockAtIndex(this.endLocation.index), this.breaksOnReturn = this.block.breaksOnReturn(), this.previousCharacter = this.block.text.getStringAtPosition(this.endLocation.offset - 1), this.nextCharacter = this.block.text.getStringAtPosition(this.endLocation.offset);
        }

        return t.prototype.shouldInsertBlockBreak = function () {
          return this.block.hasAttributes() && this.block.isListItem() && !this.block.isEmpty() ? 0 !== this.startLocation.offset : this.breaksOnReturn && "\n" !== this.nextCharacter;
        }, t.prototype.shouldBreakFormattedBlock = function () {
          return this.block.hasAttributes() && !this.block.isListItem() && (this.breaksOnReturn && "\n" === this.nextCharacter || "\n" === this.previousCharacter);
        }, t.prototype.shouldDecreaseListLevel = function () {
          return this.block.hasAttributes() && this.block.isListItem() && this.block.isEmpty();
        }, t.prototype.shouldPrependListItem = function () {
          return this.block.isListItem() && 0 === this.startLocation.offset && !this.block.isEmpty();
        }, t.prototype.shouldRemoveLastBlockAttribute = function () {
          return this.block.hasAttributes() && !this.block.isListItem() && this.block.isEmpty();
        }, t;
      }();
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l,
          h = function h(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          p.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          p = {}.hasOwnProperty;

      s = e.normalizeRange, c = e.rangesAreEqual, u = e.rangeIsCollapsed, a = e.objectsAreEqual, t = e.arrayStartsWith, l = e.summarizeArrayChange, i = e.getAllAttributeNames, o = e.getBlockConfig, r = e.getTextConfig, n = e.extend, e.Composition = function (p) {
        function d() {
          this.document = new e.Document(), this.attachments = [], this.currentAttributes = {}, this.revision = 0;
        }

        var f;
        return h(d, p), d.prototype.setDocument = function (t) {
          var e;
          return t.isEqualTo(this.document) ? void 0 : (this.document = t, this.refreshAttachments(), this.revision++, null != (e = this.delegate) && "function" == typeof e.compositionDidChangeDocument ? e.compositionDidChangeDocument(t) : void 0);
        }, d.prototype.getSnapshot = function () {
          return {
            document: this.document,
            selectedRange: this.getSelectedRange()
          };
        }, d.prototype.loadSnapshot = function (t) {
          var n, i, o, r;
          return n = t.document, r = t.selectedRange, null != (i = this.delegate) && "function" == typeof i.compositionWillLoadSnapshot && i.compositionWillLoadSnapshot(), this.setDocument(null != n ? n : new e.Document()), this.setSelection(null != r ? r : [0, 0]), null != (o = this.delegate) && "function" == typeof o.compositionDidLoadSnapshot ? o.compositionDidLoadSnapshot() : void 0;
        }, d.prototype.insertText = function (t, e) {
          var n, i, o, r;
          return r = (null != e ? e : {
            updatePosition: !0
          }).updatePosition, i = this.getSelectedRange(), this.setDocument(this.document.insertTextAtRange(t, i)), o = i[0], n = o + t.getLength(), r && this.setSelection(n), this.notifyDelegateOfInsertionAtRange([o, n]);
        }, d.prototype.insertBlock = function (t) {
          var n;
          return null == t && (t = new e.Block()), n = new e.Document([t]), this.insertDocument(n);
        }, d.prototype.insertDocument = function (t) {
          var n, i, o;
          return null == t && (t = new e.Document()), i = this.getSelectedRange(), this.setDocument(this.document.insertDocumentAtRange(t, i)), o = i[0], n = o + t.getLength(), this.setSelection(n), this.notifyDelegateOfInsertionAtRange([o, n]);
        }, d.prototype.insertString = function (t, n) {
          var i, o;
          return i = this.getCurrentTextAttributes(), o = e.Text.textForStringWithAttributes(t, i), this.insertText(o, n);
        }, d.prototype.insertBlockBreak = function () {
          var t, e, n;
          return e = this.getSelectedRange(), this.setDocument(this.document.insertBlockBreakAtRange(e)), n = e[0], t = n + 1, this.setSelection(t), this.notifyDelegateOfInsertionAtRange([n, t]);
        }, d.prototype.insertLineBreak = function () {
          var t, n;
          return n = new e.LineBreakInsertion(this), n.shouldDecreaseListLevel() ? (this.decreaseListLevel(), this.setSelection(n.startPosition)) : n.shouldPrependListItem() ? (t = new e.Document([n.block.copyWithoutText()]), this.insertDocument(t)) : n.shouldInsertBlockBreak() ? this.insertBlockBreak() : n.shouldRemoveLastBlockAttribute() ? this.removeLastBlockAttribute() : n.shouldBreakFormattedBlock() ? this.breakFormattedBlock(n) : this.insertString("\n");
        }, d.prototype.insertHTML = function (t) {
          var n, i, o, r;
          return n = e.Document.fromHTML(t), o = this.getSelectedRange(), this.setDocument(this.document.mergeDocumentAtRange(n, o)), r = o[0], i = r + n.getLength() - 1, this.setSelection(i), this.notifyDelegateOfInsertionAtRange([r, i]);
        }, d.prototype.replaceHTML = function (t) {
          var n, i, o;
          return n = e.Document.fromHTML(t).copyUsingObjectsFromDocument(this.document), i = this.getLocationRange({
            strict: !1
          }), o = this.document.rangeFromLocationRange(i), this.setDocument(n), this.setSelection(o);
        }, d.prototype.insertFile = function (t) {
          return this.insertFiles([t]);
        }, d.prototype.insertFiles = function (t) {
          var n, i, o, r, s, a;

          for (i = [], r = 0, s = t.length; s > r; r++) {
            o = t[r], (null != (a = this.delegate) ? a.compositionShouldAcceptFile(o) : void 0) && (n = e.Attachment.attachmentForFile(o), i.push(n));
          }

          return this.insertAttachments(i);
        }, d.prototype.insertAttachment = function (t) {
          return this.insertAttachments([t]);
        }, d.prototype.insertAttachments = function (t) {
          var n, i, o, r, s, a, u, c, l;

          for (c = new e.Text(), r = 0, s = t.length; s > r; r++) {
            n = t[r], l = n.getType(), a = null != (u = e.config.attachments[l]) ? u.presentation : void 0, o = this.getCurrentTextAttributes(), a && (o.presentation = a), i = e.Text.textForAttachmentWithAttributes(n, o), c = c.appendText(i);
          }

          return this.insertText(c);
        }, d.prototype.shouldManageDeletingInDirection = function (t) {
          var e;

          if (e = this.getLocationRange(), u(e)) {
            if ("backward" === t && 0 === e[0].offset) return !0;
            if (this.shouldManageMovingCursorInDirection(t)) return !0;
          } else if (e[0].index !== e[1].index) return !0;

          return !1;
        }, d.prototype.deleteInDirection = function (t, e) {
          var n, i, o, r, s, a, c, l;
          return r = (null != e ? e : {}).length, s = this.getLocationRange(), a = this.getSelectedRange(), c = u(a), c ? o = "backward" === t && 0 === s[0].offset : l = s[0].index !== s[1].index, o && this.canDecreaseBlockAttributeLevel() && (i = this.getBlock(), i.isListItem() ? this.decreaseListLevel() : this.decreaseBlockAttributeLevel(), this.setSelection(a[0]), i.isEmpty()) ? !1 : (c && (a = this.getExpandedRangeInDirection(t, {
            length: r
          }), "backward" === t && (n = this.getAttachmentAtRange(a))), n ? (this.editAttachment(n), !1) : (this.setDocument(this.document.removeTextAtRange(a)), this.setSelection(a[0]), o || l ? !1 : void 0));
        }, d.prototype.moveTextFromRange = function (t) {
          var e;
          return e = this.getSelectedRange()[0], this.setDocument(this.document.moveTextFromRangeToPosition(t, e)), this.setSelection(e);
        }, d.prototype.removeAttachment = function (t) {
          var e;
          return (e = this.document.getRangeOfAttachment(t)) ? (this.stopEditingAttachment(), this.setDocument(this.document.removeTextAtRange(e)), this.setSelection(e[0])) : void 0;
        }, d.prototype.removeLastBlockAttribute = function () {
          var t, e, n, i;
          return n = this.getSelectedRange(), i = n[0], e = n[1], t = this.document.getBlockAtPosition(e), this.removeCurrentAttribute(t.getLastAttribute()), this.setSelection(i);
        }, f = " ", d.prototype.insertPlaceholder = function () {
          return this.placeholderPosition = this.getPosition(), this.insertString(f);
        }, d.prototype.selectPlaceholder = function () {
          return null != this.placeholderPosition ? (this.setSelectedRange([this.placeholderPosition, this.placeholderPosition + f.length]), this.getSelectedRange()) : void 0;
        }, d.prototype.forgetPlaceholder = function () {
          return this.placeholderPosition = null;
        }, d.prototype.hasCurrentAttribute = function (t) {
          var e;
          return e = this.currentAttributes[t], null != e && e !== !1;
        }, d.prototype.toggleCurrentAttribute = function (t) {
          var e;
          return (e = !this.currentAttributes[t]) ? this.setCurrentAttribute(t, e) : this.removeCurrentAttribute(t);
        }, d.prototype.canSetCurrentAttribute = function (t) {
          return o(t) ? this.canSetCurrentBlockAttribute(t) : this.canSetCurrentTextAttribute(t);
        }, d.prototype.canSetCurrentTextAttribute = function () {
          var t, e, n, i, o;

          if (e = this.getSelectedDocument()) {
            for (o = e.getAttachments(), n = 0, i = o.length; i > n; n++) {
              if (t = o[n], !t.hasContent()) return !1;
            }

            return !0;
          }
        }, d.prototype.canSetCurrentBlockAttribute = function () {
          var t;
          if (t = this.getBlock()) return !t.isTerminalBlock();
        }, d.prototype.setCurrentAttribute = function (t, e) {
          return o(t) ? this.setBlockAttribute(t, e) : (this.setTextAttribute(t, e), this.currentAttributes[t] = e, this.notifyDelegateOfCurrentAttributesChange());
        }, d.prototype.setTextAttribute = function (t, n) {
          var i, o, r, s;
          if (o = this.getSelectedRange()) return r = o[0], i = o[1], r !== i ? this.setDocument(this.document.addAttributeAtRange(t, n, o)) : "href" === t ? (s = e.Text.textForStringWithAttributes(n, {
            href: n
          }), this.insertText(s)) : void 0;
        }, d.prototype.setBlockAttribute = function (t, e) {
          var n, i;
          if (i = this.getSelectedRange()) return this.canSetCurrentAttribute(t) ? (n = this.getBlock(), this.setDocument(this.document.applyBlockAttributeAtRange(t, e, i)), this.setSelection(i)) : void 0;
        }, d.prototype.removeCurrentAttribute = function (t) {
          return o(t) ? (this.removeBlockAttribute(t), this.updateCurrentAttributes()) : (this.removeTextAttribute(t), delete this.currentAttributes[t], this.notifyDelegateOfCurrentAttributesChange());
        }, d.prototype.removeTextAttribute = function (t) {
          var e;
          if (e = this.getSelectedRange()) return this.setDocument(this.document.removeAttributeAtRange(t, e));
        }, d.prototype.removeBlockAttribute = function (t) {
          var e;
          if (e = this.getSelectedRange()) return this.setDocument(this.document.removeAttributeAtRange(t, e));
        }, d.prototype.canDecreaseNestingLevel = function () {
          var t;
          return (null != (t = this.getBlock()) ? t.getNestingLevel() : void 0) > 0;
        }, d.prototype.canIncreaseNestingLevel = function () {
          var e, n, i;
          if (e = this.getBlock()) return (null != (i = o(e.getLastNestableAttribute())) ? i.listAttribute : 0) ? (n = this.getPreviousBlock()) ? t(n.getListItemAttributes(), e.getListItemAttributes()) : void 0 : e.getNestingLevel() > 0;
        }, d.prototype.decreaseNestingLevel = function () {
          var t;
          if (t = this.getBlock()) return this.setDocument(this.document.replaceBlock(t, t.decreaseNestingLevel()));
        }, d.prototype.increaseNestingLevel = function () {
          var t;
          if (t = this.getBlock()) return this.setDocument(this.document.replaceBlock(t, t.increaseNestingLevel()));
        }, d.prototype.canDecreaseBlockAttributeLevel = function () {
          var t;
          return (null != (t = this.getBlock()) ? t.getAttributeLevel() : void 0) > 0;
        }, d.prototype.decreaseBlockAttributeLevel = function () {
          var t, e;
          return (t = null != (e = this.getBlock()) ? e.getLastAttribute() : void 0) ? this.removeCurrentAttribute(t) : void 0;
        }, d.prototype.decreaseListLevel = function () {
          var t, e, n, i, o, r;

          for (r = this.getSelectedRange()[0], o = this.document.locationFromPosition(r).index, n = o, t = this.getBlock().getAttributeLevel(); (e = this.document.getBlockAtIndex(n + 1)) && e.isListItem() && e.getAttributeLevel() > t;) {
            n++;
          }

          return r = this.document.positionFromLocation({
            index: o,
            offset: 0
          }), i = this.document.positionFromLocation({
            index: n,
            offset: 0
          }), this.setDocument(this.document.removeLastListAttributeAtRange([r, i]));
        }, d.prototype.updateCurrentAttributes = function () {
          var t, e, n, o, r, s;

          if (s = this.getSelectedRange({
            ignoreLock: !0
          })) {
            for (e = this.document.getCommonAttributesAtRange(s), r = i(), n = 0, o = r.length; o > n; n++) {
              t = r[n], e[t] || this.canSetCurrentAttribute(t) || (e[t] = !1);
            }

            if (!a(e, this.currentAttributes)) return this.currentAttributes = e, this.notifyDelegateOfCurrentAttributesChange();
          }
        }, d.prototype.getCurrentAttributes = function () {
          return n.call({}, this.currentAttributes);
        }, d.prototype.getCurrentTextAttributes = function () {
          var t, e, n, i;
          t = {}, n = this.currentAttributes;

          for (e in n) {
            i = n[e], i !== !1 && r(e) && (t[e] = i);
          }

          return t;
        }, d.prototype.freezeSelection = function () {
          return this.setCurrentAttribute("frozen", !0);
        }, d.prototype.thawSelection = function () {
          return this.removeCurrentAttribute("frozen");
        }, d.prototype.hasFrozenSelection = function () {
          return this.hasCurrentAttribute("frozen");
        }, d.proxyMethod("getSelectionManager().getPointRange"), d.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"), d.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"), d.proxyMethod("getSelectionManager().locationIsCursorTarget"), d.proxyMethod("getSelectionManager().selectionIsExpanded"), d.proxyMethod("delegate?.getSelectionManager"), d.prototype.setSelection = function (t) {
          var e, n;
          return e = this.document.locationRangeFromRange(t), null != (n = this.delegate) ? n.compositionDidRequestChangingSelectionToLocationRange(e) : void 0;
        }, d.prototype.getSelectedRange = function () {
          var t;
          return (t = this.getLocationRange()) ? this.document.rangeFromLocationRange(t) : void 0;
        }, d.prototype.setSelectedRange = function (t) {
          var e;
          return e = this.document.locationRangeFromRange(t), this.getSelectionManager().setLocationRange(e);
        }, d.prototype.getPosition = function () {
          var t;
          return (t = this.getLocationRange()) ? this.document.positionFromLocation(t[0]) : void 0;
        }, d.prototype.getLocationRange = function (t) {
          var e, n;
          return null != (e = null != (n = this.targetLocationRange) ? n : this.getSelectionManager().getLocationRange(t)) ? e : s({
            index: 0,
            offset: 0
          });
        }, d.prototype.withTargetLocationRange = function (t, e) {
          var n;
          this.targetLocationRange = t;

          try {
            n = e();
          } finally {
            this.targetLocationRange = null;
          }

          return n;
        }, d.prototype.withTargetRange = function (t, e) {
          var n;
          return n = this.document.locationRangeFromRange(t), this.withTargetLocationRange(n, e);
        }, d.prototype.withTargetDOMRange = function (t, e) {
          var n;
          return n = this.createLocationRangeFromDOMRange(t, {
            strict: !1
          }), this.withTargetLocationRange(n, e);
        }, d.prototype.getExpandedRangeInDirection = function (t, e) {
          var n, i, o, r;
          return i = (null != e ? e : {}).length, o = this.getSelectedRange(), r = o[0], n = o[1], "backward" === t ? i ? r -= i : r = this.translateUTF16PositionFromOffset(r, -1) : i ? n += i : n = this.translateUTF16PositionFromOffset(n, 1), s([r, n]);
        }, d.prototype.shouldManageMovingCursorInDirection = function (t) {
          var e;
          return this.editingAttachment ? !0 : (e = this.getExpandedRangeInDirection(t), null != this.getAttachmentAtRange(e));
        }, d.prototype.moveCursorInDirection = function (t) {
          var e, n, i, o;
          return this.editingAttachment ? i = this.document.getRangeOfAttachment(this.editingAttachment) : (o = this.getSelectedRange(), i = this.getExpandedRangeInDirection(t), n = !c(o, i)), this.setSelectedRange("backward" === t ? i[0] : i[1]), n && (e = this.getAttachmentAtRange(i)) ? this.editAttachment(e) : void 0;
        }, d.prototype.expandSelectionInDirection = function (t, e) {
          var n, i;
          return n = (null != e ? e : {}).length, i = this.getExpandedRangeInDirection(t, {
            length: n
          }), this.setSelectedRange(i);
        }, d.prototype.expandSelectionForEditing = function () {
          return this.hasCurrentAttribute("href") ? this.expandSelectionAroundCommonAttribute("href") : void 0;
        }, d.prototype.expandSelectionAroundCommonAttribute = function (t) {
          var e, n;
          return e = this.getPosition(), n = this.document.getRangeOfCommonAttributeAtPosition(t, e), this.setSelectedRange(n);
        }, d.prototype.selectionContainsAttachments = function () {
          var t;
          return (null != (t = this.getSelectedAttachments()) ? t.length : void 0) > 0;
        }, d.prototype.selectionIsInCursorTarget = function () {
          return this.editingAttachment || this.positionIsCursorTarget(this.getPosition());
        }, d.prototype.positionIsCursorTarget = function (t) {
          var e;
          return (e = this.document.locationFromPosition(t)) ? this.locationIsCursorTarget(e) : void 0;
        }, d.prototype.positionIsBlockBreak = function (t) {
          var e;
          return null != (e = this.document.getPieceAtPosition(t)) ? e.isBlockBreak() : void 0;
        }, d.prototype.getSelectedDocument = function () {
          var t;
          return (t = this.getSelectedRange()) ? this.document.getDocumentAtRange(t) : void 0;
        }, d.prototype.getSelectedAttachments = function () {
          var t;
          return null != (t = this.getSelectedDocument()) ? t.getAttachments() : void 0;
        }, d.prototype.getAttachments = function () {
          return this.attachments.slice(0);
        }, d.prototype.refreshAttachments = function () {
          var t, e, n, i, o, r, s, a, u, c, h, p;

          for (n = this.document.getAttachments(), a = l(this.attachments, n), t = a.added, h = a.removed, this.attachments = n, i = 0, r = h.length; r > i; i++) {
            e = h[i], e.delegate = null, null != (u = this.delegate) && "function" == typeof u.compositionDidRemoveAttachment && u.compositionDidRemoveAttachment(e);
          }

          for (p = [], o = 0, s = t.length; s > o; o++) {
            e = t[o], e.delegate = this, p.push(null != (c = this.delegate) && "function" == typeof c.compositionDidAddAttachment ? c.compositionDidAddAttachment(e) : void 0);
          }

          return p;
        }, d.prototype.attachmentDidChangeAttributes = function (t) {
          var e;
          return this.revision++, null != (e = this.delegate) && "function" == typeof e.compositionDidEditAttachment ? e.compositionDidEditAttachment(t) : void 0;
        }, d.prototype.attachmentDidChangePreviewURL = function (t) {
          var e;
          return this.revision++, null != (e = this.delegate) && "function" == typeof e.compositionDidChangeAttachmentPreviewURL ? e.compositionDidChangeAttachmentPreviewURL(t) : void 0;
        }, d.prototype.editAttachment = function (t, e) {
          var n;
          if (t !== this.editingAttachment) return this.stopEditingAttachment(), this.editingAttachment = t, null != (n = this.delegate) && "function" == typeof n.compositionDidStartEditingAttachment ? n.compositionDidStartEditingAttachment(this.editingAttachment, e) : void 0;
        }, d.prototype.stopEditingAttachment = function () {
          var t;
          if (this.editingAttachment) return null != (t = this.delegate) && "function" == typeof t.compositionDidStopEditingAttachment && t.compositionDidStopEditingAttachment(this.editingAttachment), this.editingAttachment = null;
        }, d.prototype.updateAttributesForAttachment = function (t, e) {
          return this.setDocument(this.document.updateAttributesForAttachment(t, e));
        }, d.prototype.removeAttributeForAttachment = function (t, e) {
          return this.setDocument(this.document.removeAttributeForAttachment(t, e));
        }, d.prototype.breakFormattedBlock = function (t) {
          var n, i, o, r, s;
          return i = t.document, n = t.block, r = t.startPosition, s = [r - 1, r], n.getBlockBreakPosition() === t.startLocation.offset ? (n.breaksOnReturn() && "\n" === t.nextCharacter ? r += 1 : i = i.removeTextAtRange(s), s = [r, r]) : "\n" === t.nextCharacter ? "\n" === t.previousCharacter ? s = [r - 1, r + 1] : (s = [r, r + 1], r += 1) : t.startLocation.offset - 1 !== 0 && (r += 1), o = new e.Document([n.removeLastAttribute().copyWithoutText()]), this.setDocument(i.insertDocumentAtRange(o, s)), this.setSelection(r);
        }, d.prototype.getPreviousBlock = function () {
          var t, e;
          return (e = this.getLocationRange()) && (t = e[0].index, t > 0) ? this.document.getBlockAtIndex(t - 1) : void 0;
        }, d.prototype.getBlock = function () {
          var t;
          return (t = this.getLocationRange()) ? this.document.getBlockAtIndex(t[0].index) : void 0;
        }, d.prototype.getAttachmentAtRange = function (t) {
          var n;
          return n = this.document.getDocumentAtRange(t), n.toString() === e.OBJECT_REPLACEMENT_CHARACTER + "\n" ? n.getAttachments()[0] : void 0;
        }, d.prototype.notifyDelegateOfCurrentAttributesChange = function () {
          var t;
          return null != (t = this.delegate) && "function" == typeof t.compositionDidChangeCurrentAttributes ? t.compositionDidChangeCurrentAttributes(this.currentAttributes) : void 0;
        }, d.prototype.notifyDelegateOfInsertionAtRange = function (t) {
          var e;
          return null != (e = this.delegate) && "function" == typeof e.compositionDidPerformInsertionAtRange ? e.compositionDidPerformInsertionAtRange(t) : void 0;
        }, d.prototype.translateUTF16PositionFromOffset = function (t, e) {
          var n, i;
          return i = this.document.toUTF16String(), n = i.offsetFromUCS2Offset(t), i.offsetToUCS2Offset(n + e);
        }, d;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function t(_t17, e) {
        function i() {
          this.constructor = _t17;
        }

        for (var o in e) {
          n.call(e, o) && (_t17[o] = e[o]);
        }

        return i.prototype = e.prototype, _t17.prototype = new i(), _t17.__super__ = e.prototype, _t17;
      },
          n = {}.hasOwnProperty;

      e.UndoManager = function (e) {
        function n(t) {
          this.composition = t, this.undoEntries = [], this.redoEntries = [];
        }

        var i;
        return t(n, e), n.prototype.recordUndoEntry = function (t, e) {
          var n, o, r, s, a;
          return s = null != e ? e : {}, o = s.context, n = s.consolidatable, r = this.undoEntries.slice(-1)[0], n && i(r, t, o) ? void 0 : (a = this.createEntry({
            description: t,
            context: o
          }), this.undoEntries.push(a), this.redoEntries = []);
        }, n.prototype.undo = function () {
          var t, e;
          return (e = this.undoEntries.pop()) ? (t = this.createEntry(e), this.redoEntries.push(t), this.composition.loadSnapshot(e.snapshot)) : void 0;
        }, n.prototype.redo = function () {
          var t, e;
          return (t = this.redoEntries.pop()) ? (e = this.createEntry(t), this.undoEntries.push(e), this.composition.loadSnapshot(t.snapshot)) : void 0;
        }, n.prototype.canUndo = function () {
          return this.undoEntries.length > 0;
        }, n.prototype.canRedo = function () {
          return this.redoEntries.length > 0;
        }, n.prototype.createEntry = function (t) {
          var e, n, i;
          return i = null != t ? t : {}, n = i.description, e = i.context, {
            description: null != n ? n.toString() : void 0,
            context: JSON.stringify(e),
            snapshot: this.composition.getSnapshot()
          };
        }, i = function i(t, e, n) {
          return (null != t ? t.description : void 0) === (null != e ? e.toString() : void 0) && (null != t ? t.context : void 0) === JSON.stringify(n);
        }, n;
      }(e.BasicObject);
    }.call(this), function () {
      var t;
      e.attachmentGalleryFilter = function (e) {
        var n;
        return n = new t(e), n.perform(), n.getSnapshot();
      }, t = function () {
        function t(t) {
          this.document = t.document, this.selectedRange = t.selectedRange;
        }

        var e, n, i;
        return e = "attachmentGallery", n = "presentation", i = "gallery", t.prototype.perform = function () {
          return this.removeBlockAttribute(), this.applyBlockAttribute();
        }, t.prototype.getSnapshot = function () {
          return {
            document: this.document,
            selectedRange: this.selectedRange
          };
        }, t.prototype.removeBlockAttribute = function () {
          var t, n, i, o, r;

          for (o = this.findRangesOfBlocks(), r = [], t = 0, n = o.length; n > t; t++) {
            i = o[t], r.push(this.document = this.document.removeAttributeAtRange(e, i));
          }

          return r;
        }, t.prototype.applyBlockAttribute = function () {
          var t, n, i, o, r, s;

          for (i = 0, r = this.findRangesOfPieces(), s = [], t = 0, n = r.length; n > t; t++) {
            o = r[t], o[1] - o[0] > 1 && (o[0] += i, o[1] += i, "\n" !== this.document.getCharacterAtPosition(o[1]) && (this.document = this.document.insertBlockBreakAtRange(o[1]), o[1] < this.selectedRange[1] && this.moveSelectedRangeForward(), o[1]++, i++), 0 !== o[0] && "\n" !== this.document.getCharacterAtPosition(o[0] - 1) && (this.document = this.document.insertBlockBreakAtRange(o[0]), o[0] < this.selectedRange[0] && this.moveSelectedRangeForward(), o[0]++, i++), s.push(this.document = this.document.applyBlockAttributeAtRange(e, !0, o)));
          }

          return s;
        }, t.prototype.findRangesOfBlocks = function () {
          return this.document.findRangesForBlockAttribute(e);
        }, t.prototype.findRangesOfPieces = function () {
          return this.document.findRangesForTextAttribute(n, {
            withValue: i
          });
        }, t.prototype.moveSelectedRangeForward = function () {
          return this.selectedRange[0] += 1, this.selectedRange[1] += 1;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t18, e) {
        return function () {
          return _t18.apply(e, arguments);
        };
      };

      e.Editor = function () {
        function n(n, o, r) {
          this.composition = n, this.selectionManager = o, this.element = r, this.insertFiles = t(this.insertFiles, this), this.undoManager = new e.UndoManager(this.composition), this.filters = i.slice(0);
        }

        var i;
        return i = [e.attachmentGalleryFilter], n.prototype.loadDocument = function (t) {
          return this.loadSnapshot({
            document: t,
            selectedRange: [0, 0]
          });
        }, n.prototype.loadHTML = function (t) {
          return null == t && (t = ""), this.loadDocument(e.Document.fromHTML(t, {
            referenceElement: this.element
          }));
        }, n.prototype.loadJSON = function (t) {
          var n, i;
          return n = t.document, i = t.selectedRange, n = e.Document.fromJSON(n), this.loadSnapshot({
            document: n,
            selectedRange: i
          });
        }, n.prototype.loadSnapshot = function (t) {
          return this.undoManager = new e.UndoManager(this.composition), this.composition.loadSnapshot(t);
        }, n.prototype.getDocument = function () {
          return this.composition.document;
        }, n.prototype.getSelectedDocument = function () {
          return this.composition.getSelectedDocument();
        }, n.prototype.getSnapshot = function () {
          return this.composition.getSnapshot();
        }, n.prototype.toJSON = function () {
          return this.getSnapshot();
        }, n.prototype.deleteInDirection = function (t) {
          return this.composition.deleteInDirection(t);
        }, n.prototype.insertAttachment = function (t) {
          return this.composition.insertAttachment(t);
        }, n.prototype.insertAttachments = function (t) {
          return this.composition.insertAttachments(t);
        }, n.prototype.insertDocument = function (t) {
          return this.composition.insertDocument(t);
        }, n.prototype.insertFile = function (t) {
          return this.composition.insertFile(t);
        }, n.prototype.insertFiles = function (t) {
          return this.composition.insertFiles(t);
        }, n.prototype.insertHTML = function (t) {
          return this.composition.insertHTML(t);
        }, n.prototype.insertString = function (t) {
          return this.composition.insertString(t);
        }, n.prototype.insertText = function (t) {
          return this.composition.insertText(t);
        }, n.prototype.insertLineBreak = function () {
          return this.composition.insertLineBreak();
        }, n.prototype.getSelectedRange = function () {
          return this.composition.getSelectedRange();
        }, n.prototype.getPosition = function () {
          return this.composition.getPosition();
        }, n.prototype.getClientRectAtPosition = function (t) {
          var e;
          return e = this.getDocument().locationRangeFromRange([t, t + 1]), this.selectionManager.getClientRectAtLocationRange(e);
        }, n.prototype.expandSelectionInDirection = function (t) {
          return this.composition.expandSelectionInDirection(t);
        }, n.prototype.moveCursorInDirection = function (t) {
          return this.composition.moveCursorInDirection(t);
        }, n.prototype.setSelectedRange = function (t) {
          return this.composition.setSelectedRange(t);
        }, n.prototype.activateAttribute = function (t, e) {
          return null == e && (e = !0), this.composition.setCurrentAttribute(t, e);
        }, n.prototype.attributeIsActive = function (t) {
          return this.composition.hasCurrentAttribute(t);
        }, n.prototype.canActivateAttribute = function (t) {
          return this.composition.canSetCurrentAttribute(t);
        }, n.prototype.deactivateAttribute = function (t) {
          return this.composition.removeCurrentAttribute(t);
        }, n.prototype.canDecreaseNestingLevel = function () {
          return this.composition.canDecreaseNestingLevel();
        }, n.prototype.canIncreaseNestingLevel = function () {
          return this.composition.canIncreaseNestingLevel();
        }, n.prototype.decreaseNestingLevel = function () {
          return this.canDecreaseNestingLevel() ? this.composition.decreaseNestingLevel() : void 0;
        }, n.prototype.increaseNestingLevel = function () {
          return this.canIncreaseNestingLevel() ? this.composition.increaseNestingLevel() : void 0;
        }, n.prototype.canRedo = function () {
          return this.undoManager.canRedo();
        }, n.prototype.canUndo = function () {
          return this.undoManager.canUndo();
        }, n.prototype.recordUndoEntry = function (t, e) {
          var n, i, o;
          return o = null != e ? e : {}, i = o.context, n = o.consolidatable, this.undoManager.recordUndoEntry(t, {
            context: i,
            consolidatable: n
          });
        }, n.prototype.redo = function () {
          return this.canRedo() ? this.undoManager.redo() : void 0;
        }, n.prototype.undo = function () {
          return this.canUndo() ? this.undoManager.undo() : void 0;
        }, n;
      }();
    }.call(this), function () {
      var t = function t(_t19, e) {
        function i() {
          this.constructor = _t19;
        }

        for (var o in e) {
          n.call(e, o) && (_t19[o] = e[o]);
        }

        return i.prototype = e.prototype, _t19.prototype = new i(), _t19.__super__ = e.prototype, _t19;
      },
          n = {}.hasOwnProperty;

      e.ManagedAttachment = function (e) {
        function n(t, e) {
          var n;
          this.attachmentManager = t, this.attachment = e, n = this.attachment, this.id = n.id, this.file = n.file;
        }

        return t(n, e), n.prototype.remove = function () {
          return this.attachmentManager.requestRemovalOfAttachment(this.attachment);
        }, n.proxyMethod("attachment.getAttribute"), n.proxyMethod("attachment.hasAttribute"), n.proxyMethod("attachment.setAttribute"), n.proxyMethod("attachment.getAttributes"), n.proxyMethod("attachment.setAttributes"), n.proxyMethod("attachment.isPending"), n.proxyMethod("attachment.isPreviewable"), n.proxyMethod("attachment.getURL"), n.proxyMethod("attachment.getHref"), n.proxyMethod("attachment.getFilename"), n.proxyMethod("attachment.getFilesize"), n.proxyMethod("attachment.getFormattedFilesize"), n.proxyMethod("attachment.getExtension"), n.proxyMethod("attachment.getContentType"), n.proxyMethod("attachment.getFile"), n.proxyMethod("attachment.setFile"), n.proxyMethod("attachment.releaseFile"), n.proxyMethod("attachment.getUploadProgress"), n.proxyMethod("attachment.setUploadProgress"), n;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function t(_t20, e) {
        function i() {
          this.constructor = _t20;
        }

        for (var o in e) {
          n.call(e, o) && (_t20[o] = e[o]);
        }

        return i.prototype = e.prototype, _t20.prototype = new i(), _t20.__super__ = e.prototype, _t20;
      },
          n = {}.hasOwnProperty;

      e.AttachmentManager = function (n) {
        function i(t) {
          var e, n, i;

          for (null == t && (t = []), this.managedAttachments = {}, n = 0, i = t.length; i > n; n++) {
            e = t[n], this.manageAttachment(e);
          }
        }

        return t(i, n), i.prototype.getAttachments = function () {
          var t, e, n, i;
          n = this.managedAttachments, i = [];

          for (e in n) {
            t = n[e], i.push(t);
          }

          return i;
        }, i.prototype.manageAttachment = function (t) {
          var n, i;
          return null != (n = this.managedAttachments)[i = t.id] ? n[i] : n[i] = new e.ManagedAttachment(this, t);
        }, i.prototype.attachmentIsManaged = function (t) {
          return t.id in this.managedAttachments;
        }, i.prototype.requestRemovalOfAttachment = function (t) {
          var e;
          return this.attachmentIsManaged(t) && null != (e = this.delegate) && "function" == typeof e.attachmentManagerDidRequestRemovalOfAttachment ? e.attachmentManagerDidRequestRemovalOfAttachment(t) : void 0;
        }, i.prototype.unmanageAttachment = function (t) {
          var e;
          return e = this.managedAttachments[t.id], delete this.managedAttachments[t.id], e;
        }, i;
      }(e.BasicObject);
    }.call(this), function () {
      var t, n, i, o, r, s, a, u, c, l, h;
      t = e.elementContainsNode, n = e.findChildIndexOfNode, r = e.nodeIsBlockStart, s = e.nodeIsBlockStartComment, o = e.nodeIsBlockContainer, a = e.nodeIsCursorTarget, u = e.nodeIsEmptyTextNode, c = e.nodeIsTextNode, i = e.nodeIsAttachmentElement, l = e.tagName, h = e.walkTree, e.LocationMapper = function () {
        function e(t) {
          this.element = t;
        }

        var p, d, f, g;
        return e.prototype.findLocationFromContainerAndOffset = function (e, i, o) {
          var s, u, l, p, g, m, v;

          for (m = (null != o ? o : {
            strict: !0
          }).strict, u = 0, l = !1, p = {
            index: 0,
            offset: 0
          }, (s = this.findAttachmentElementParentForNode(e)) && (e = s.parentNode, i = n(s)), v = h(this.element, {
            usingFilter: f
          }); v.nextNode();) {
            if (g = v.currentNode, g === e && c(e)) {
              a(g) || (p.offset += i);
              break;
            }

            if (g.parentNode === e) {
              if (u++ === i) break;
            } else if (!t(e, g) && u > 0) break;

            r(g, {
              strict: m
            }) ? (l && p.index++, p.offset = 0, l = !0) : p.offset += d(g);
          }

          return p;
        }, e.prototype.findContainerAndOffsetFromLocation = function (t) {
          var e, i, s, u, l;

          if (0 === t.index && 0 === t.offset) {
            for (e = this.element, u = 0; e.firstChild;) {
              if (e = e.firstChild, o(e)) {
                u = 1;
                break;
              }
            }

            return [e, u];
          }

          if (l = this.findNodeAndOffsetFromLocation(t), i = l[0], s = l[1], i) {
            if (c(i)) 0 === d(i) ? (e = i.parentNode.parentNode, u = n(i.parentNode), a(i, {
              name: "right"
            }) && u++) : (e = i, u = t.offset - s);else {
              if (e = i.parentNode, !r(i.previousSibling) && !o(e)) for (; i === e.lastChild && (i = e, e = e.parentNode, !o(e));) {
                ;
              }
              u = n(i), 0 !== t.offset && u++;
            }
            return [e, u];
          }
        }, e.prototype.findNodeAndOffsetFromLocation = function (t) {
          var e, n, i, o, r, s, u, l;

          for (u = 0, l = this.getSignificantNodesForIndex(t.index), n = 0, i = l.length; i > n; n++) {
            if (e = l[n], o = d(e), t.offset <= u + o) if (c(e)) {
              if (r = e, s = u, t.offset === s && a(r)) break;
            } else r || (r = e, s = u);
            if (u += o, u > t.offset) break;
          }

          return [r, s];
        }, e.prototype.findAttachmentElementParentForNode = function (t) {
          for (; t && t !== this.element;) {
            if (i(t)) return t;
            t = t.parentNode;
          }
        }, e.prototype.getSignificantNodesForIndex = function (t) {
          var e, n, i, o, r;

          for (i = [], r = h(this.element, {
            usingFilter: p
          }), o = !1; r.nextNode();) {
            if (n = r.currentNode, s(n)) {
              if ("undefined" != typeof e && null !== e ? e++ : e = 0, e === t) o = !0;else if (o) break;
            } else o && i.push(n);
          }

          return i;
        }, d = function d(t) {
          var e;
          return t.nodeType === Node.TEXT_NODE ? a(t) ? 0 : (e = t.textContent, e.length) : "br" === l(t) || i(t) ? 1 : 0;
        }, p = function p(t) {
          return g(t) === NodeFilter.FILTER_ACCEPT ? f(t) : NodeFilter.FILTER_REJECT;
        }, g = function g(t) {
          return u(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }, f = function f(t) {
          return i(t.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }, e;
      }();
    }.call(this), function () {
      var t,
          n,
          i = [].slice;
      t = e.getDOMRange, n = e.setDOMRange, e.PointMapper = function () {
        function e() {}

        return e.prototype.createDOMRangeFromPoint = function (e) {
          var i, o, r, s, a, u, c, l;
          if (c = e.x, l = e.y, document.caretPositionFromPoint) return a = document.caretPositionFromPoint(c, l), r = a.offsetNode, o = a.offset, i = document.createRange(), i.setStart(r, o), i;
          if (document.caretRangeFromPoint) return document.caretRangeFromPoint(c, l);

          if (document.body.createTextRange) {
            s = t();

            try {
              u = document.body.createTextRange(), u.moveToPoint(c, l), u.select();
            } catch (h) {}

            return i = t(), n(s), i;
          }
        }, e.prototype.getClientRectsForDOMRange = function (t) {
          var e, n, o;
          return n = i.call(t.getClientRects()), o = n[0], e = n[n.length - 1], [o, e];
        }, e;
      }();
    }.call(this), function () {
      var t,
          n = function n(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          i = function i(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          o.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty,
          r = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = e.getDOMRange, e.SelectionChangeObserver = function (e) {
        function o() {
          this.run = n(this.run, this), this.update = n(this.update, this), this.selectionManagers = [];
        }

        var s;
        return i(o, e), o.prototype.start = function () {
          return this.started ? void 0 : (this.started = !0, "onselectionchange" in document ? document.addEventListener("selectionchange", this.update, !0) : this.run());
        }, o.prototype.stop = function () {
          return this.started ? (this.started = !1, document.removeEventListener("selectionchange", this.update, !0)) : void 0;
        }, o.prototype.registerSelectionManager = function (t) {
          return r.call(this.selectionManagers, t) < 0 ? (this.selectionManagers.push(t), this.start()) : void 0;
        }, o.prototype.unregisterSelectionManager = function (t) {
          var e;
          return this.selectionManagers = function () {
            var n, i, o, r;

            for (o = this.selectionManagers, r = [], n = 0, i = o.length; i > n; n++) {
              e = o[n], e !== t && r.push(e);
            }

            return r;
          }.call(this), 0 === this.selectionManagers.length ? this.stop() : void 0;
        }, o.prototype.notifySelectionManagersOfSelectionChange = function () {
          var t, e, n, i, o;

          for (n = this.selectionManagers, i = [], t = 0, e = n.length; e > t; t++) {
            o = n[t], i.push(o.selectionDidChange());
          }

          return i;
        }, o.prototype.update = function () {
          var e;
          return e = t(), s(e, this.domRange) ? void 0 : (this.domRange = e, this.notifySelectionManagersOfSelectionChange());
        }, o.prototype.reset = function () {
          return this.domRange = null, this.update();
        }, o.prototype.run = function () {
          return this.started ? (this.update(), requestAnimationFrame(this.run)) : void 0;
        }, s = function s(t, e) {
          return (null != t ? t.startContainer : void 0) === (null != e ? e.startContainer : void 0) && (null != t ? t.startOffset : void 0) === (null != e ? e.startOffset : void 0) && (null != t ? t.endContainer : void 0) === (null != e ? e.endContainer : void 0) && (null != t ? t.endOffset : void 0) === (null != e ? e.endOffset : void 0);
        }, o;
      }(e.BasicObject), null == e.selectionChangeObserver && (e.selectionChangeObserver = new e.SelectionChangeObserver());
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l,
          h = function h(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          p = function p(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          d.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          d = {}.hasOwnProperty;

      i = e.getDOMSelection, n = e.getDOMRange, l = e.setDOMRange, t = e.elementContainsNode, s = e.nodeIsCursorTarget, r = e.innerElementIsActive, o = e.handleEvent, a = e.normalizeRange, u = e.rangeIsCollapsed, c = e.rangesAreEqual, e.SelectionManager = function (d) {
        function f(t) {
          this.element = t, this.selectionDidChange = h(this.selectionDidChange, this), this.didMouseDown = h(this.didMouseDown, this), this.locationMapper = new e.LocationMapper(this.element), this.pointMapper = new e.PointMapper(), this.lockCount = 0, o("mousedown", {
            onElement: this.element,
            withCallback: this.didMouseDown
          });
        }

        return p(f, d), f.prototype.getLocationRange = function (t) {
          var e, i;
          return null == t && (t = {}), e = t.strict === !1 ? this.createLocationRangeFromDOMRange(n(), {
            strict: !1
          }) : t.ignoreLock ? this.currentLocationRange : null != (i = this.lockedLocationRange) ? i : this.currentLocationRange;
        }, f.prototype.setLocationRange = function (t) {
          var e;
          if (!this.lockedLocationRange) return t = a(t), (e = this.createDOMRangeFromLocationRange(t)) ? (l(e), this.updateCurrentLocationRange(t)) : void 0;
        }, f.prototype.setLocationRangeFromPointRange = function (t) {
          var e, n;
          return t = a(t), n = this.getLocationAtPoint(t[0]), e = this.getLocationAtPoint(t[1]), this.setLocationRange([n, e]);
        }, f.prototype.getClientRectAtLocationRange = function (t) {
          var e;
          return (e = this.createDOMRangeFromLocationRange(t)) ? this.getClientRectsForDOMRange(e)[1] : void 0;
        }, f.prototype.locationIsCursorTarget = function (t) {
          var e, n, i;
          return i = this.findNodeAndOffsetFromLocation(t), e = i[0], n = i[1], s(e);
        }, f.prototype.lock = function () {
          return 0 === this.lockCount++ ? (this.updateCurrentLocationRange(), this.lockedLocationRange = this.getLocationRange()) : void 0;
        }, f.prototype.unlock = function () {
          var t;
          return 0 === --this.lockCount && (t = this.lockedLocationRange, this.lockedLocationRange = null, null != t) ? this.setLocationRange(t) : void 0;
        }, f.prototype.clearSelection = function () {
          var t;
          return null != (t = i()) ? t.removeAllRanges() : void 0;
        }, f.prototype.selectionIsCollapsed = function () {
          var t;
          return (null != (t = n()) ? t.collapsed : void 0) === !0;
        }, f.prototype.selectionIsExpanded = function () {
          return !this.selectionIsCollapsed();
        }, f.prototype.createLocationRangeFromDOMRange = function (t, e) {
          var n, i;
          if (null != t && this.domRangeWithinElement(t) && (i = this.findLocationFromContainerAndOffset(t.startContainer, t.startOffset, e))) return t.collapsed || (n = this.findLocationFromContainerAndOffset(t.endContainer, t.endOffset, e)), a([i, n]);
        }, f.proxyMethod("locationMapper.findLocationFromContainerAndOffset"), f.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"), f.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"), f.proxyMethod("pointMapper.createDOMRangeFromPoint"), f.proxyMethod("pointMapper.getClientRectsForDOMRange"), f.prototype.didMouseDown = function () {
          return this.pauseTemporarily();
        }, f.prototype.pauseTemporarily = function () {
          var e, n, i, r;
          return this.paused = !0, n = function (e) {
            return function () {
              var n, o, s;

              for (e.paused = !1, clearTimeout(r), o = 0, s = i.length; s > o; o++) {
                n = i[o], n.destroy();
              }

              return t(document, e.element) ? e.selectionDidChange() : void 0;
            };
          }(this), r = setTimeout(n, 200), i = function () {
            var t, i, r, s;

            for (r = ["mousemove", "keydown"], s = [], t = 0, i = r.length; i > t; t++) {
              e = r[t], s.push(o(e, {
                onElement: document,
                withCallback: n
              }));
            }

            return s;
          }();
        }, f.prototype.selectionDidChange = function () {
          return this.paused || r(this.element) ? void 0 : this.updateCurrentLocationRange();
        }, f.prototype.updateCurrentLocationRange = function (t) {
          var e;
          return (null != t ? t : t = this.createLocationRangeFromDOMRange(n())) && !c(t, this.currentLocationRange) ? (this.currentLocationRange = t, null != (e = this.delegate) && "function" == typeof e.locationRangeDidChange ? e.locationRangeDidChange(this.currentLocationRange.slice(0)) : void 0) : void 0;
        }, f.prototype.createDOMRangeFromLocationRange = function (t) {
          var e, n, i, o;
          return i = this.findContainerAndOffsetFromLocation(t[0]), n = u(t) ? i : null != (o = this.findContainerAndOffsetFromLocation(t[1])) ? o : i, null != i && null != n ? (e = document.createRange(), e.setStart.apply(e, i), e.setEnd.apply(e, n), e) : void 0;
        }, f.prototype.getLocationAtPoint = function (t) {
          var e, n;
          return (e = this.createDOMRangeFromPoint(t)) && null != (n = this.createLocationRangeFromDOMRange(e)) ? n[0] : void 0;
        }, f.prototype.domRangeWithinElement = function (e) {
          return e.collapsed ? t(this.element, e.startContainer) : t(this.element, e.startContainer) && t(this.element, e.endContainer);
        }, f;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r = function r(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          s.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          s = {}.hasOwnProperty,
          a = [].slice;

      i = e.rangeIsCollapsed, o = e.rangesAreEqual, n = e.objectsAreEqual, t = e.getBlockConfig, e.EditorController = function (s) {
        function u(t) {
          var n, i;
          this.editorElement = t.editorElement, n = t.document, i = t.html, this.selectionManager = new e.SelectionManager(this.editorElement), this.selectionManager.delegate = this, this.composition = new e.Composition(), this.composition.delegate = this, this.attachmentManager = new e.AttachmentManager(this.composition.getAttachments()), this.attachmentManager.delegate = this, this.inputController = new e["Level" + e.config.input.getLevel() + "InputController"](this.editorElement), this.inputController.delegate = this, this.inputController.responder = this.composition, this.compositionController = new e.CompositionController(this.editorElement, this.composition), this.compositionController.delegate = this, this.toolbarController = new e.ToolbarController(this.editorElement.toolbarElement), this.toolbarController.delegate = this, this.editor = new e.Editor(this.composition, this.selectionManager, this.editorElement), null != n ? this.editor.loadDocument(n) : this.editor.loadHTML(i);
        }

        var c;
        return r(u, s), u.prototype.registerSelectionManager = function () {
          return e.selectionChangeObserver.registerSelectionManager(this.selectionManager);
        }, u.prototype.unregisterSelectionManager = function () {
          return e.selectionChangeObserver.unregisterSelectionManager(this.selectionManager);
        }, u.prototype.render = function () {
          return this.compositionController.render();
        }, u.prototype.reparse = function () {
          return this.composition.replaceHTML(this.editorElement.innerHTML);
        }, u.prototype.compositionDidChangeDocument = function () {
          return this.notifyEditorElement("document-change"), this.handlingInput ? void 0 : this.render();
        }, u.prototype.compositionDidChangeCurrentAttributes = function (t) {
          return this.currentAttributes = t, this.toolbarController.updateAttributes(this.currentAttributes), this.updateCurrentActions(), this.notifyEditorElement("attributes-change", {
            attributes: this.currentAttributes
          });
        }, u.prototype.compositionDidPerformInsertionAtRange = function (t) {
          return this.pasting ? this.pastedRange = t : void 0;
        }, u.prototype.compositionShouldAcceptFile = function (t) {
          return this.notifyEditorElement("file-accept", {
            file: t
          });
        }, u.prototype.compositionDidAddAttachment = function (t) {
          var e;
          return e = this.attachmentManager.manageAttachment(t), this.notifyEditorElement("attachment-add", {
            attachment: e
          });
        }, u.prototype.compositionDidEditAttachment = function (t) {
          var e;
          return this.compositionController.rerenderViewForObject(t), e = this.attachmentManager.manageAttachment(t), this.notifyEditorElement("attachment-edit", {
            attachment: e
          }), this.notifyEditorElement("change");
        }, u.prototype.compositionDidChangeAttachmentPreviewURL = function (t) {
          return this.compositionController.invalidateViewForObject(t), this.notifyEditorElement("change");
        }, u.prototype.compositionDidRemoveAttachment = function (t) {
          var e;
          return e = this.attachmentManager.unmanageAttachment(t), this.notifyEditorElement("attachment-remove", {
            attachment: e
          });
        }, u.prototype.compositionDidStartEditingAttachment = function (t, e) {
          return this.attachmentLocationRange = this.composition.document.getLocationRangeOfAttachment(t), this.compositionController.installAttachmentEditorForAttachment(t, e), this.selectionManager.setLocationRange(this.attachmentLocationRange);
        }, u.prototype.compositionDidStopEditingAttachment = function () {
          return this.compositionController.uninstallAttachmentEditor(), this.attachmentLocationRange = null;
        }, u.prototype.compositionDidRequestChangingSelectionToLocationRange = function (t) {
          return !this.loadingSnapshot || this.isFocused() ? (this.requestedLocationRange = t, this.compositionRevisionWhenLocationRangeRequested = this.composition.revision, this.handlingInput ? void 0 : this.render()) : void 0;
        }, u.prototype.compositionWillLoadSnapshot = function () {
          return this.loadingSnapshot = !0;
        }, u.prototype.compositionDidLoadSnapshot = function () {
          return this.compositionController.refreshViewCache(), this.render(), this.loadingSnapshot = !1;
        }, u.prototype.getSelectionManager = function () {
          return this.selectionManager;
        }, u.proxyMethod("getSelectionManager().setLocationRange"), u.proxyMethod("getSelectionManager().getLocationRange"), u.prototype.attachmentManagerDidRequestRemovalOfAttachment = function (t) {
          return this.removeAttachment(t);
        }, u.prototype.compositionControllerWillSyncDocumentView = function () {
          return this.inputController.editorWillSyncDocumentView(), this.selectionManager.lock(), this.selectionManager.clearSelection();
        }, u.prototype.compositionControllerDidSyncDocumentView = function () {
          return this.inputController.editorDidSyncDocumentView(), this.selectionManager.unlock(), this.updateCurrentActions(), this.notifyEditorElement("sync");
        }, u.prototype.compositionControllerDidRender = function () {
          return null != this.requestedLocationRange && (this.compositionRevisionWhenLocationRangeRequested === this.composition.revision && this.selectionManager.setLocationRange(this.requestedLocationRange), this.requestedLocationRange = null, this.compositionRevisionWhenLocationRangeRequested = null), this.renderedCompositionRevision !== this.composition.revision && (this.runEditorFilters(), this.composition.updateCurrentAttributes(), this.notifyEditorElement("render")), this.renderedCompositionRevision = this.composition.revision;
        }, u.prototype.compositionControllerDidFocus = function () {
          return this.isFocusedInvisibly() && this.setLocationRange({
            index: 0,
            offset: 0
          }), this.toolbarController.hideDialog(), this.notifyEditorElement("focus");
        }, u.prototype.compositionControllerDidBlur = function () {
          return this.notifyEditorElement("blur");
        }, u.prototype.compositionControllerDidSelectAttachment = function (t, e) {
          return this.toolbarController.hideDialog(), this.composition.editAttachment(t, e);
        }, u.prototype.compositionControllerDidRequestDeselectingAttachment = function (t) {
          var e, n;
          return e = null != (n = this.attachmentLocationRange) ? n : this.composition.document.getLocationRangeOfAttachment(t), this.selectionManager.setLocationRange(e[1]);
        }, u.prototype.compositionControllerWillUpdateAttachment = function (t) {
          return this.editor.recordUndoEntry("Edit Attachment", {
            context: t.id,
            consolidatable: !0
          });
        }, u.prototype.compositionControllerDidRequestRemovalOfAttachment = function (t) {
          return this.removeAttachment(t);
        }, u.prototype.inputControllerWillHandleInput = function () {
          return this.handlingInput = !0, this.requestedRender = !1;
        }, u.prototype.inputControllerDidRequestRender = function () {
          return this.requestedRender = !0;
        }, u.prototype.inputControllerDidHandleInput = function () {
          return this.handlingInput = !1, this.requestedRender ? (this.requestedRender = !1, this.render()) : void 0;
        }, u.prototype.inputControllerDidAllowUnhandledInput = function () {
          return this.notifyEditorElement("change");
        }, u.prototype.inputControllerDidRequestReparse = function () {
          return this.reparse();
        }, u.prototype.inputControllerWillPerformTyping = function () {
          return this.recordTypingUndoEntry();
        }, u.prototype.inputControllerWillPerformFormatting = function (t) {
          return this.recordFormattingUndoEntry(t);
        }, u.prototype.inputControllerWillCutText = function () {
          return this.editor.recordUndoEntry("Cut");
        }, u.prototype.inputControllerWillPaste = function (t) {
          return this.editor.recordUndoEntry("Paste"), this.pasting = !0, this.notifyEditorElement("before-paste", {
            paste: t
          });
        }, u.prototype.inputControllerDidPaste = function (t) {
          return t.range = this.pastedRange, this.pastedRange = null, this.pasting = null, this.notifyEditorElement("paste", {
            paste: t
          });
        }, u.prototype.inputControllerWillMoveText = function () {
          return this.editor.recordUndoEntry("Move");
        }, u.prototype.inputControllerWillAttachFiles = function () {
          return this.editor.recordUndoEntry("Drop Files");
        }, u.prototype.inputControllerWillPerformUndo = function () {
          return this.editor.undo();
        }, u.prototype.inputControllerWillPerformRedo = function () {
          return this.editor.redo();
        }, u.prototype.inputControllerDidReceiveKeyboardCommand = function (t) {
          return this.toolbarController.applyKeyboardCommand(t);
        }, u.prototype.inputControllerDidStartDrag = function () {
          return this.locationRangeBeforeDrag = this.selectionManager.getLocationRange();
        }, u.prototype.inputControllerDidReceiveDragOverPoint = function (t) {
          return this.selectionManager.setLocationRangeFromPointRange(t);
        }, u.prototype.inputControllerDidCancelDrag = function () {
          return this.selectionManager.setLocationRange(this.locationRangeBeforeDrag), this.locationRangeBeforeDrag = null;
        }, u.prototype.locationRangeDidChange = function (t) {
          return this.composition.updateCurrentAttributes(), this.updateCurrentActions(), this.attachmentLocationRange && !o(this.attachmentLocationRange, t) && this.composition.stopEditingAttachment(), this.notifyEditorElement("selection-change");
        }, u.prototype.toolbarDidClickButton = function () {
          return this.getLocationRange() ? void 0 : this.setLocationRange({
            index: 0,
            offset: 0
          });
        }, u.prototype.toolbarDidInvokeAction = function (t) {
          return this.invokeAction(t);
        }, u.prototype.toolbarDidToggleAttribute = function (t) {
          return this.recordFormattingUndoEntry(t), this.composition.toggleCurrentAttribute(t), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
        }, u.prototype.toolbarDidUpdateAttribute = function (t, e) {
          return this.recordFormattingUndoEntry(t), this.composition.setCurrentAttribute(t, e), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
        }, u.prototype.toolbarDidRemoveAttribute = function (t) {
          return this.recordFormattingUndoEntry(t), this.composition.removeCurrentAttribute(t), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
        }, u.prototype.toolbarWillShowDialog = function () {
          return this.composition.expandSelectionForEditing(), this.freezeSelection();
        }, u.prototype.toolbarDidShowDialog = function (t) {
          return this.notifyEditorElement("toolbar-dialog-show", {
            dialogName: t
          });
        }, u.prototype.toolbarDidHideDialog = function (t) {
          return this.thawSelection(), this.editorElement.focus(), this.notifyEditorElement("toolbar-dialog-hide", {
            dialogName: t
          });
        }, u.prototype.freezeSelection = function () {
          return this.selectionFrozen ? void 0 : (this.selectionManager.lock(), this.composition.freezeSelection(), this.selectionFrozen = !0, this.render());
        }, u.prototype.thawSelection = function () {
          return this.selectionFrozen ? (this.composition.thawSelection(), this.selectionManager.unlock(), this.selectionFrozen = !1, this.render()) : void 0;
        }, u.prototype.actions = {
          undo: {
            test: function test() {
              return this.editor.canUndo();
            },
            perform: function perform() {
              return this.editor.undo();
            }
          },
          redo: {
            test: function test() {
              return this.editor.canRedo();
            },
            perform: function perform() {
              return this.editor.redo();
            }
          },
          link: {
            test: function test() {
              return this.editor.canActivateAttribute("href");
            }
          },
          increaseNestingLevel: {
            test: function test() {
              return this.editor.canIncreaseNestingLevel();
            },
            perform: function perform() {
              return this.editor.increaseNestingLevel() && this.render();
            }
          },
          decreaseNestingLevel: {
            test: function test() {
              return this.editor.canDecreaseNestingLevel();
            },
            perform: function perform() {
              return this.editor.decreaseNestingLevel() && this.render();
            }
          },
          attachFiles: {
            test: function test() {
              return !0;
            },
            perform: function perform() {
              return e.config.input.pickFiles(this.editor.insertFiles);
            }
          }
        }, u.prototype.canInvokeAction = function (t) {
          var e, n;
          return this.actionIsExternal(t) ? !0 : !!(null != (e = this.actions[t]) && null != (n = e.test) ? n.call(this) : void 0);
        }, u.prototype.invokeAction = function (t) {
          var e, n;
          return this.actionIsExternal(t) ? this.notifyEditorElement("action-invoke", {
            actionName: t
          }) : null != (e = this.actions[t]) && null != (n = e.perform) ? n.call(this) : void 0;
        }, u.prototype.actionIsExternal = function (t) {
          return /^x-./.test(t);
        }, u.prototype.getCurrentActions = function () {
          var t, e;
          e = {};

          for (t in this.actions) {
            e[t] = this.canInvokeAction(t);
          }

          return e;
        }, u.prototype.updateCurrentActions = function () {
          var t;
          return t = this.getCurrentActions(), n(t, this.currentActions) ? void 0 : (this.currentActions = t, this.toolbarController.updateActions(this.currentActions), this.notifyEditorElement("actions-change", {
            actions: this.currentActions
          }));
        }, u.prototype.runEditorFilters = function () {
          var t, e, n, i, o, r, s, a;

          for (a = this.composition.getSnapshot(), o = this.editor.filters, n = 0, i = o.length; i > n; n++) {
            e = o[n], t = a.document, s = a.selectedRange, a = null != (r = e.call(this.editor, a)) ? r : {}, null == a.document && (a.document = t), null == a.selectedRange && (a.selectedRange = s);
          }

          return c(a, this.composition.getSnapshot()) ? void 0 : this.composition.loadSnapshot(a);
        }, c = function c(t, e) {
          return o(t.selectedRange, e.selectedRange) && t.document.isEqualTo(e.document);
        }, u.prototype.updateInputElement = function () {
          var t, n;
          return t = this.compositionController.getSerializableElement(), n = e.serializeToContentType(t, "text/html"), this.editorElement.setInputElementValue(n);
        }, u.prototype.notifyEditorElement = function (t, e) {
          switch (t) {
            case "document-change":
              this.documentChangedSinceLastRender = !0;
              break;

            case "render":
              this.documentChangedSinceLastRender && (this.documentChangedSinceLastRender = !1, this.notifyEditorElement("change"));
              break;

            case "change":
            case "attachment-add":
            case "attachment-edit":
            case "attachment-remove":
              this.updateInputElement();
          }

          return this.editorElement.notify(t, e);
        }, u.prototype.removeAttachment = function (t) {
          return this.editor.recordUndoEntry("Delete Attachment"), this.composition.removeAttachment(t), this.render();
        }, u.prototype.recordFormattingUndoEntry = function (e) {
          var n, o;
          return n = t(e), o = this.selectionManager.getLocationRange(), n || !i(o) ? this.editor.recordUndoEntry("Formatting", {
            context: this.getUndoContext(),
            consolidatable: !0
          }) : void 0;
        }, u.prototype.recordTypingUndoEntry = function () {
          return this.editor.recordUndoEntry("Typing", {
            context: this.getUndoContext(this.currentAttributes),
            consolidatable: !0
          });
        }, u.prototype.getUndoContext = function () {
          var t;
          return t = 1 <= arguments.length ? a.call(arguments, 0) : [], [this.getLocationContext(), this.getTimeContext()].concat(a.call(t));
        }, u.prototype.getLocationContext = function () {
          var t;
          return t = this.selectionManager.getLocationRange(), i(t) ? t[0].index : t;
        }, u.prototype.getTimeContext = function () {
          return e.config.undoInterval > 0 ? Math.floor(new Date().getTime() / e.config.undoInterval) : 0;
        }, u.prototype.isFocused = function () {
          var t;
          return this.editorElement === (null != (t = this.editorElement.ownerDocument) ? t.activeElement : void 0);
        }, u.prototype.isFocusedInvisibly = function () {
          return this.isFocused() && !this.getLocationRange();
        }, u;
      }(e.Controller);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      n = e.browser, s = e.makeElement, a = e.triggerEvent, o = e.handleEvent, r = e.handleEventOnce, i = e.findClosestElementFromNode, t = e.AttachmentView.attachmentSelector, e.registerElement("trix-editor", function () {
        var c, l, h, p, d, f, g, m, v;
        return g = 0, l = function l(t) {
          return !document.querySelector(":focus") && t.hasAttribute("autofocus") && document.querySelector("[autofocus]") === t ? t.focus() : void 0;
        }, m = function m(t) {
          return t.hasAttribute("contenteditable") ? void 0 : (t.setAttribute("contenteditable", ""), r("focus", {
            onElement: t,
            withCallback: function withCallback() {
              return h(t);
            }
          }));
        }, h = function h(t) {
          return d(t), v(t);
        }, d = function d(t) {
          return ("function" == typeof document.queryCommandSupported ? document.queryCommandSupported("enableObjectResizing") : void 0) ? (document.execCommand("enableObjectResizing", !1, !1), o("mscontrolselect", {
            onElement: t,
            preventDefault: !0
          })) : void 0;
        }, v = function v() {
          var t;
          return ("function" == typeof document.queryCommandSupported ? document.queryCommandSupported("DefaultParagraphSeparator") : void 0) && (t = e.config.blockAttributes["default"].tagName, "div" === t || "p" === t) ? document.execCommand("DefaultParagraphSeparator", !1, t) : void 0;
        }, c = function c(t) {
          return t.hasAttribute("role") ? void 0 : t.setAttribute("role", "textbox");
        }, f = function f(t) {
          var e;
          if (!t.hasAttribute("aria-label") && !t.hasAttribute("aria-labelledby")) return (e = function e() {
            var e, n, i;
            return i = function () {
              var n, i, o, r;

              for (o = t.labels, r = [], n = 0, i = o.length; i > n; n++) {
                e = o[n], e.contains(t) || r.push(e.textContent);
              }

              return r;
            }(), (n = i.join(" ")) ? t.setAttribute("aria-label", n) : t.removeAttribute("aria-label");
          })(), o("focus", {
            onElement: t,
            withCallback: e
          });
        }, p = function () {
          return n.forcesObjectResizing ? {
            display: "inline",
            width: "auto"
          } : {
            display: "inline-block",
            width: "1px"
          };
        }(), {
          defaultCSS: "%t {\n  display: block;\n}\n\n%t:empty:not(:focus)::before {\n  content: attr(placeholder);\n  color: graytext;\n  cursor: text;\n  pointer-events: none;\n}\n\n%t a[contenteditable=false] {\n  cursor: text;\n}\n\n%t img {\n  max-width: 100%;\n  height: auto;\n}\n\n%t " + t + " figcaption textarea {\n  resize: none;\n}\n\n%t " + t + " figcaption textarea.trix-autoresize-clone {\n  position: absolute;\n  left: -9999px;\n  max-height: 0px;\n}\n\n%t " + t + " figcaption[data-trix-placeholder]:empty::before {\n  content: attr(data-trix-placeholder);\n  color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n  display: " + p.display + " !important;\n  width: " + p.width + " !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n  vertical-align: top !important;\n  margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n  vertical-align: bottom !important;\n  margin-right: -1px !important;\n}",
          trixId: {
            get: function get() {
              return this.hasAttribute("trix-id") ? this.getAttribute("trix-id") : (this.setAttribute("trix-id", ++g), this.trixId);
            }
          },
          labels: {
            get: function get() {
              var t, e, n;
              return e = [], this.id && this.ownerDocument && e.push.apply(e, this.ownerDocument.querySelectorAll("label[for='" + this.id + "']")), (t = i(this, {
                matchingSelector: "label"
              })) && ((n = t.control) === this || null === n) && e.push(t), e;
            }
          },
          toolbarElement: {
            get: function get() {
              var t, e, n;
              return this.hasAttribute("toolbar") ? null != (e = this.ownerDocument) ? e.getElementById(this.getAttribute("toolbar")) : void 0 : this.parentNode ? (n = "trix-toolbar-" + this.trixId, this.setAttribute("toolbar", n), t = s("trix-toolbar", {
                id: n
              }), this.parentNode.insertBefore(t, this), t) : void 0;
            }
          },
          inputElement: {
            get: function get() {
              var t, e, n;
              return this.hasAttribute("input") ? null != (n = this.ownerDocument) ? n.getElementById(this.getAttribute("input")) : void 0 : this.parentNode ? (e = "trix-input-" + this.trixId, this.setAttribute("input", e), t = s("input", {
                type: "hidden",
                id: e
              }), this.parentNode.insertBefore(t, this.nextElementSibling), t) : void 0;
            }
          },
          editor: {
            get: function get() {
              var t;
              return null != (t = this.editorController) ? t.editor : void 0;
            }
          },
          name: {
            get: function get() {
              var t;
              return null != (t = this.inputElement) ? t.name : void 0;
            }
          },
          value: {
            get: function get() {
              var t;
              return null != (t = this.inputElement) ? t.value : void 0;
            },
            set: function set(t) {
              var e;
              return this.defaultValue = t, null != (e = this.editor) ? e.loadHTML(this.defaultValue) : void 0;
            }
          },
          notify: function notify(t, e) {
            return this.editorController ? a("trix-" + t, {
              onElement: this,
              attributes: e
            }) : void 0;
          },
          setInputElementValue: function setInputElementValue(t) {
            var e;
            return null != (e = this.inputElement) ? e.value = t : void 0;
          },
          initialize: function initialize() {
            return this.hasAttribute("data-trix-internal") ? void 0 : (m(this), c(this), f(this));
          },
          connect: function connect() {
            return this.hasAttribute("data-trix-internal") ? void 0 : (this.editorController || (a("trix-before-initialize", {
              onElement: this
            }), this.editorController = new e.EditorController({
              editorElement: this,
              html: this.defaultValue = this.value
            }), requestAnimationFrame(function (t) {
              return function () {
                return a("trix-initialize", {
                  onElement: t
                });
              };
            }(this))), this.editorController.registerSelectionManager(), this.registerResetListener(), this.registerClickListener(), l(this));
          },
          disconnect: function disconnect() {
            var t;
            return null != (t = this.editorController) && t.unregisterSelectionManager(), this.unregisterResetListener(), this.unregisterClickListener();
          },
          registerResetListener: function registerResetListener() {
            return this.resetListener = this.resetBubbled.bind(this), window.addEventListener("reset", this.resetListener, !1);
          },
          unregisterResetListener: function unregisterResetListener() {
            return window.removeEventListener("reset", this.resetListener, !1);
          },
          registerClickListener: function registerClickListener() {
            return this.clickListener = this.clickBubbled.bind(this), window.addEventListener("click", this.clickListener, !1);
          },
          unregisterClickListener: function unregisterClickListener() {
            return window.removeEventListener("click", this.clickListener, !1);
          },
          resetBubbled: function resetBubbled(t) {
            var e;
            if (!t.defaultPrevented && t.target === (null != (e = this.inputElement) ? e.form : void 0)) return this.reset();
          },
          clickBubbled: function clickBubbled(t) {
            var e;
            if (!(t.defaultPrevented || this.contains(t.target) || !(e = i(t.target, {
              matchingSelector: "label"
            })) || u.call(this.labels, e) < 0)) return this.focus();
          },
          reset: function reset() {
            return this.value = this.defaultValue;
          }
        };
      }());
    }.call(this), function () {}.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}.call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-3d51de36441ce38cdd08.js.map