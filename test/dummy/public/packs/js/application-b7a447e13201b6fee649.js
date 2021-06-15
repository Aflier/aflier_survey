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
!(function webpackMissingModule() { var e = new Error("Cannot find module 'stimulus'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
      !(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax({
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
      !(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax({
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
      !(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax({
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
      !(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax({
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
      !(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax({
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
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'stimulus'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_default.targets = ['value', 'state', 'checkOn', 'checkOff', 'toggleOn', 'toggleOff'];
_default.values = {
  toggleOnUrl: String,
  toggleOffUrl: String,
  onUrl: String,
  offUrl: String
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
!(function webpackMissingModule() { var e = new Error("Cannot find module 'stimulus'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'stimulus'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
!(function webpackMissingModule() { var e = new Error("Cannot find module 'stimulus'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'stimulus/webpack-helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Load all the controllers within this directory and all subdirectories. 
// Controller files must be named *_controller.js.


var application = !(function webpackMissingModule() { var e = new Error("Cannot find module 'stimulus'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).start();

var context = __webpack_require__("./app/javascript/controllers sync recursive _controller\\.js$");

application.load(!(function webpackMissingModule() { var e = new Error("Cannot find module 'stimulus/webpack-helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(context));

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
!(function webpackMissingModule() { var e = new Error("Cannot find module 'stimulus'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
      !(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax({
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
      !(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax({
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
      !(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax({
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
      !(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax({
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
      !(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax({
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
      !(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax({
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
        !(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax({
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
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'stimulus'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
/* harmony import */ var controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! controllers */ "./app/javascript/controllers/index.js");
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


/***/ })

/******/ });
//# sourceMappingURL=application-b7a447e13201b6fee649.js.map