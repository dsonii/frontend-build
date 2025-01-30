/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/auth/Change.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/auth/Change.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_1__["validationMixin"]],
  name: "change",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      submitted: false,
      loading: false,
      error: "",
      success: "",
      isError: false,
      isSuccess: false
    };
  },
  validations: {
    email: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
      email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["email"]
    },
    password: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minLength"])(6)
    },
    confirmPassword: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
      sameAsPassword: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["sameAs"])("password")
    }
  },
  methods: {
    async changePassword() {
      this.submitted = true;
      this.loading = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      const {
        data
      } = await _services__WEBPACK_IMPORTED_MODULE_3__["authService"].resetPassword(this.email, this.password, this.$route.params.resetToken);
      if (data && data.status == 401) {
        this.error = data.message;
        this.isError = true;
        this.loading = false;
      } else if (data && data.status == 400) {
        this.error = data.message;
        this.isError = true;
        this.loading = false;
      } else {
        // this.success = data.message;
        // this.isSuccess = true;
        this.loading = false;
        setTimeout(() => this.$router.push({
          path: "/auth/login"
        }), 5000);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/auth/Forget.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/auth/Forget.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_0__["validationMixin"]],
  name: "forget-password",
  data() {
    return {
      email: "",
      submitted: false,
      loading: false,
      error: "",
      success: ""
    };
  },
  validations: {
    email: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["email"]
    }
  },
  methods: {
    async forgetPassword() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      const response = await _services__WEBPACK_IMPORTED_MODULE_2__["authService"].sendPasswordRest(this.email);
      if (response.status == 401) {
        this.error = response.message;
        this.loading = false;
      } else {
        this.success = response.message;
        this.loading = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/auth/Login.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/auth/Login.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_useAuth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/useAuth.js */ "./src/store/useAuth.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "login",
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_0__["validationMixin"]],
  data() {
    return {
      form: {
        email: null,
        passsword: null
      },
      busy: false,
      timeout: null,
      submitted: false,
      loading: false
    };
  },
  beforeDestroy() {
    this.clearTimeout();
  },
  computed: {
    // loggingIn() {
    //   return this.$store.state.auth.status.loggingIn;
    // },
  },
  created() {
    // this.$store.dispatch("auth/logout");
  },
  validations: {
    form: {
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["email"]
      },
      password: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      }
    }
  },
  methods: {
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(_store_useAuth_js__WEBPACK_IMPORTED_MODULE_3__["useAuth"], ["UserLogin"]),
    validateState(name) {
      const {
        $dirty,
        $error
      } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    clearTimeout() {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    },
    setTimeout(callback) {
      this.clearTimeout();
      this.timeout = setTimeout(() => {
        this.clearTimeout();
        callback();
      }, 2000);
    },
    onHidden() {
      // Return focus to the button once hidden
      this.$refs.button.focus();
    },
    async loginUser() {
      this.submitted = true;
      this.loading = true;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        this.loading = false;
        return;
      }
      const {
        email,
        password
      } = this.form;
      //  const { dispatch } = this.$store;

      if (email && password) {
        await this.UserLogin(email, password);
        // dispatch("auth/login", { email, password }).then(
        //   () => {
        //     this.$router.push("/dashboard");
        //   },
        //   (error) => {
        //     this.loading = false;
        //     this.message =
        //       (error.response &&
        //         error.response.data &&
        //         error.response.data.message) ||
        //       error.message ||
        //       error.toString();
        //   }
        // );
        //dispatch("auth/login", { email, password });
        this.busy = true;
        // Simulate an async request
        this.setTimeout(() => {
          this.busy = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppFooter.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/partials/AppFooter.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_useApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/useApp */ "./src/store/useApp.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'the-ferri-footer',
  computed: {
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_1__["mapState"])(_store_useApp__WEBPACK_IMPORTED_MODULE_0__["useApp"], ['appName'])
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppHeader.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/partials/AppHeader.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_useAuth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/useAuth.js */ "./src/store/useAuth.js");
/* harmony import */ var _store_useApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/useApp */ "./src/store/useApp.js");
/* harmony import */ var _store_fetchUsers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/fetchUsers.js */ "./src/store/fetchUsers.js");
// eslint-disable-next-line





//import store from "../../store";
let $ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'the-ferri-header',
  computed: {
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_1__["mapState"])(_store_fetchUsers_js__WEBPACK_IMPORTED_MODULE_4__["fetchUsers"], ['getUser']),
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_1__["mapState"])(_store_useAuth_js__WEBPACK_IMPORTED_MODULE_2__["useAuth"], ['isAuth']),
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_1__["mapState"])(_store_useApp__WEBPACK_IMPORTED_MODULE_3__["useApp"], ['appName', 'appShortName'])
  },
  methods: {
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(_store_useAuth_js__WEBPACK_IMPORTED_MODULE_2__["useAuth"], ['signOut']),
    async logout() {
      //   await store.dispatch('auth/logout')
      this.signOut();
    },
    collapedSidebar: function () {
      $('body').toggleClass('sidebar-icon-only');
    },
    collapedMobileSidebar: function () {
      $('#sidebar').toggleClass('active');
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppSidebar.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/partials/AppSidebar.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_useAuth_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/useAuth.js */ "./src/store/useAuth.js");
/* harmony import */ var _store_fetchUsers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/fetchUsers.js */ "./src/store/fetchUsers.js");



// import _ from 'lodash';




// eslint-disable-next-line
let $ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'the-ferri-sidebar',
  computed: {
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_3__["mapState"])(_store_fetchUsers_js__WEBPACK_IMPORTED_MODULE_5__["fetchUsers"], ['getUser']),
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_3__["mapState"])(_store_fetchUsers_js__WEBPACK_IMPORTED_MODULE_5__["fetchUsers"], ['getName']),
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_3__["mapState"])(_store_useAuth_js__WEBPACK_IMPORTED_MODULE_4__["useAuth"], ['isAuth'])
  },
  mounted() {
    const body = document.querySelector('body');
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/PrivacyPolicy.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/PrivacyPolicy.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/auth */ "./src/helpers/auth.js");
/* harmony import */ var _store_useApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/useApp */ "./src/store/useApp.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'PrivacyPolicy',
  setup(__props) {
    const {
      appLogo
    } = Object(_store_useApp__WEBPACK_IMPORTED_MODULE_2__["useApp"])();
    const state = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])();
    const Logo = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])("");
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["onMounted"])(() => getSetting());
    const getSetting = async () => {
      try {
        const response = await _helpers_auth__WEBPACK_IMPORTED_MODULE_1__["authApi"].get("settings/privacy");
        state.value = response.data.data;
        Logo.value = appLogo;
      } catch (e) {
        console.log(e.message);
      }
    };
    return {
      __sfc: true,
      appLogo,
      state,
      Logo,
      getSetting
    };
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/TermAndCondition.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/TermAndCondition.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/auth */ "./src/helpers/auth.js");
/* harmony import */ var _store_useApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/useApp */ "./src/store/useApp.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'TermAndCondition',
  setup(__props) {
    const {
      appLogo
    } = Object(_store_useApp__WEBPACK_IMPORTED_MODULE_2__["useApp"])();
    const state = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])();
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["onMounted"])(() => getSetting());
    const Logo = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])("");
    const getSetting = async () => {
      try {
        const response = await _helpers_auth__WEBPACK_IMPORTED_MODULE_1__["authApi"].get("settings/term-and-conditions");
        state.value = response.data.data;
        Logo.value = appLogo;
      } catch (e) {
        console.log(e.message);
      }
    };
    return {
      __sfc: true,
      appLogo,
      state,
      Logo,
      getSetting
    };
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/change.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/auth/change.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_auth_Change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/auth/Change */ "./src/components/auth/Change.vue");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_useApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/useApp */ "./src/store/useApp.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'forget',
  components: {
    Change: _components_auth_Change__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_1__["mapState"])(_store_useApp__WEBPACK_IMPORTED_MODULE_2__["useApp"], ["appLogo"])
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/forget.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/auth/forget.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_useAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/useAuth */ "./src/store/useAuth.js");
/* harmony import */ var _components_auth_Forget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/auth/Forget */ "./src/components/auth/Forget.vue");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_useApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/useApp */ "./src/store/useApp.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  beforeRouteEnter(to, from, next) {
    const auth = Object(_store_useAuth__WEBPACK_IMPORTED_MODULE_0__["useAuth"])();
    const isAuthenticated = auth.isAuth;
    if (isAuthenticated) {
      return next({
        path: '/'
      });
    }
    next();
  },
  name: 'forget',
  components: {
    Forget: _components_auth_Forget__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_2__["mapState"])(_store_useApp__WEBPACK_IMPORTED_MODULE_3__["useApp"], ["appLogo"])
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/login.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/auth/login.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_auth_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/auth/Login */ "./src/components/auth/Login.vue");
/* harmony import */ var _store_useApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/useApp */ "./src/store/useApp.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'login',
  components: {
    Login: _components_auth_Login__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted() {
    this.fetchApp();
  },
  computed: {
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_2__["mapState"])(_store_useApp__WEBPACK_IMPORTED_MODULE_1__["useApp"], ["appName", "appLogo"])
  },
  methods: {
    fetchApp() {
      const app = Object(_store_useApp__WEBPACK_IMPORTED_MODULE_1__["useApp"])();
      app.getApp();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mainview.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/mainview.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_partials_AppHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/partials/AppHeader */ "./src/components/partials/AppHeader.vue");
/* harmony import */ var _components_partials_AppSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/partials/AppSidebar */ "./src/components/partials/AppSidebar.vue");
/* harmony import */ var _components_partials_AppFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/partials/AppFooter */ "./src/components/partials/AppFooter.vue");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_useAuth_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/useAuth.js */ "./src/store/useAuth.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'main',
  computed: {
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_3__["mapState"])(_store_useAuth_js__WEBPACK_IMPORTED_MODULE_4__["useAuth"], ['isAuth'])
  },
  components: {
    AppHeader: _components_partials_AppHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppSidebar: _components_partials_AppSidebar__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppFooter: _components_partials_AppFooter__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&lang=html":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&lang=html ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "app"
    }
  }, [_c("router-view")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/auth/Change.vue?vue&type=template&id=15190e92&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/auth/Change.vue?vue&type=template&id=15190e92&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b-alert", {
    attrs: {
      show: _vm.isSuccess,
      variant: "success"
    }
  }, [_vm._v(" " + _vm._s(_vm.success))]), _c("b-alert", {
    attrs: {
      show: _vm.isError,
      variant: "danger"
    }
  }, [_vm._v(" " + _vm._s(_vm.error))]), _c("b-form", {
    on: {
      submit: function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.changePassword.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "label"
  }, [_vm._v("Email Address")]), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: _vm.$v.email.$model,
      expression: "$v.email.$model",
      modifiers: {
        trim: true
      }
    }],
    staticClass: "form-control",
    class: {
      "is-invalid": _vm.submitted && _vm.$v.email.$error
    },
    attrs: {
      type: "email",
      placeholder: "Email Address"
    },
    domProps: {
      value: _vm.$v.email.$model
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.$v.email, "$model", $event.target.value.trim());
      },
      blur: function ($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_c("i", {
    staticClass: "mdi mdi-check-circle-outline",
    class: {
      "text-danger": _vm.submitted && _vm.$v.email.$error
    }
  })])]), _vm.submitted && !_vm.$v.email.required ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" email address is required ")]) : _vm._e()])]), _c("br"), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "label"
  }, [_vm._v("Password")]), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: _vm.$v.password.$model,
      expression: "$v.password.$model",
      modifiers: {
        trim: true
      }
    }],
    staticClass: "form-control",
    class: {
      "is-invalid": _vm.submitted && _vm.$v.password.$error
    },
    attrs: {
      type: "password",
      placeholder: "Password"
    },
    domProps: {
      value: _vm.$v.password.$model
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.$v.password, "$model", $event.target.value.trim());
      },
      blur: function ($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_c("i", {
    staticClass: "mdi mdi-check-circle-outline",
    class: {
      "text-danger": _vm.submitted && _vm.$v.password.$error
    }
  })])]), _vm.submitted && !_vm.$v.password.required ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" password is required ")]) : _vm._e()])]), _c("br"), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "label"
  }, [_vm._v("Confirm Password")]), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: _vm.$v.confirmPassword.$model,
      expression: "$v.confirmPassword.$model",
      modifiers: {
        trim: true
      }
    }],
    staticClass: "form-control",
    class: {
      "is-invalid": _vm.submitted && _vm.$v.confirmPassword.$error
    },
    attrs: {
      type: "password",
      placeholder: "Confirm Password"
    },
    domProps: {
      value: _vm.$v.confirmPassword.$model
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.$v.confirmPassword, "$model", $event.target.value.trim());
      },
      blur: function ($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_c("i", {
    staticClass: "mdi mdi-check-circle-outline",
    class: {
      "text-danger": _vm.submitted && _vm.$v.confirmPassword.$error
    }
  })])]), _vm.submitted && _vm.$v.confirmPassword.$error ? _c("div", {
    staticClass: "invalid-feedback left"
  }, [!_vm.$v.confirmPassword.required ? _c("span", [_vm._v("Confirm Password is required")]) : _vm._e(), _vm.confirmPassword && !_vm.$v.confirmPassword.sameAsPassword ? _c("span", [_vm._v("Password and Confirm Password should match")]) : _vm._e()]) : _vm._e()])]), _c("br"), _c("div", {
    staticClass: "form-group"
  }, [_c("button", {
    staticClass: "btn btn-primary submit-btn btn-block",
    attrs: {
      disabled: _vm.loading
    }
  }, [_vm._v(" Change Password "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }],
    staticClass: "spinner-border spinner-border-sm"
  })])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/auth/Forget.vue?vue&type=template&id=5140e074&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/auth/Forget.vue?vue&type=template&id=5140e074&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("form", {
    attrs: {
      method: "POST"
    },
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.forgetPassword.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "label"
  }, [_vm._v("Email Address")]), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: _vm.$v.email.$model,
      expression: "$v.email.$model",
      modifiers: {
        trim: true
      }
    }],
    staticClass: "form-control",
    class: {
      "is-invalid": _vm.submitted && _vm.$v.email.$error
    },
    attrs: {
      type: "email",
      placeholder: "Email Address"
    },
    domProps: {
      value: _vm.$v.email.$model
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.$v.email, "$model", $event.target.value.trim());
      },
      blur: function ($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _vm.submitted && !_vm.$v.email.required ? _c("div", {
    staticClass: "text-small invalid-feedback"
  }, [_vm._v(" Email address is required ")]) : _vm._e()])]), _c("br"), _c("div", {
    staticClass: "form-group"
  }, [_c("button", {
    staticClass: "btn btn-primary submit-btn btn-block",
    attrs: {
      disabled: _vm.loading
    }
  }, [_vm._v(" Submit "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }],
    staticClass: "spinner-border spinner-border-sm"
  })])]), _vm.error ? _c("div", {
    staticClass: "alert alert-danger alert-sm"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm.success ? _c("div", {
    staticClass: "alert alert-success alert-sm"
  }, [_vm._v(" " + _vm._s(_vm.success) + " ")]) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/auth/Login.vue?vue&type=template&id=6bab3132&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/auth/Login.vue?vue&type=template&id=6bab3132&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b-form", {
    staticClass: "pt-3",
    on: {
      submit: function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.loginUser.apply(null, arguments);
      }
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Email Address",
      "label-for": "email-input-1"
    }
  }, [_c("b-form-input", {
    attrs: {
      id: "email-input-1",
      type: "email",
      name: "email-input-1",
      placeholder: "Enter email Address",
      state: _vm.validateState("email"),
      "aria-describedby": "input-email-live-feedback"
    },
    model: {
      value: _vm.$v.form.email.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.email, "$model", $$v);
      },
      expression: "$v.form.email.$model"
    }
  }), _c("b-form-invalid-feedback", {
    staticClass: "text-small",
    attrs: {
      id: "input-email-live-feedback"
    }
  }, [_vm._v("Email Address is a required.")])], 1), _c("b-form-group", {
    attrs: {
      label: "Password",
      "label-for": "password-input-1"
    }
  }, [_c("b-form-input", {
    attrs: {
      id: "password-input-1",
      name: "password-input-1",
      type: "password",
      placeholder: "************",
      state: _vm.validateState("password"),
      "aria-describedby": "input-password-live-feedback"
    },
    model: {
      value: _vm.$v.form.password.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.password, "$model", $$v);
      },
      expression: "$v.form.password.$model"
    }
  }), _c("b-form-invalid-feedback", {
    staticClass: "text-small",
    attrs: {
      id: "input-password-live-feedback"
    }
  }, [_vm._v("Password is a required.")])], 1), _c("b-form-group", [_c("button", {
    staticClass: "btn btn-primary submit-btn btn-block",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(" Login "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }],
    staticClass: "pl-2 spinner-border spinner-border-sm"
  })])]), _c("div", {
    staticClass: "my-2 d-flex justify-content-between align-items-center"
  }, [_c("router-link", {
    staticClass: "text-small forgot-password text-black mr-3",
    attrs: {
      to: {
        name: "forget"
      }
    }
  }, [_vm._v(" Forgot Password ?")])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppFooter.vue?vue&type=template&id=1e787acf&scoped=true&lang=html":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/partials/AppFooter.vue?vue&type=template&id=1e787acf&scoped=true&lang=html ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "app-footer"
  }, [_c("footer", {
    staticClass: "footer"
  }, [_c("div", {
    staticClass: "container-fluid clearfix"
  }, [_c("span", {
    staticClass: "text-muted text-center text-sm-left d-block d-sm-inline-block"
  }, [_vm._v("Copyright © "), _c("a", {
    attrs: {
      href: "/",
      target: "_blank"
    }
  }, [_vm._v(_vm._s(_vm.appName) + " ")]), _vm._v(_vm._s(this.$year))])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppHeader.vue?vue&type=template&id=3faadec1&scoped=true&lang=html":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/partials/AppHeader.vue?vue&type=template&id=3faadec1&scoped=true&lang=html ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-navbar", {
    staticClass: "navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row",
    attrs: {
      id: "template-header",
      toggleable: "md"
    }
  }, [_c("div", {
    staticClass: "text-center navbar-brand-wrapper d-flex align-items-top justify-content-center"
  }, [_c("router-link", {
    staticClass: "navbar-brand brand-logo",
    attrs: {
      to: "/"
    }
  }, [_vm._v(" " + _vm._s(_vm.appName) + " ")]), _c("router-link", {
    staticClass: "navbar-brand brand-logo-mini",
    attrs: {
      to: "/"
    }
  }, [_vm._v(" " + _vm._s(_vm.appShortName) + " ")])], 1), _c("div", {
    staticClass: "navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0"
  }, [_c("button", {
    staticClass: "navbar-toggler navbar-toggler align-self-center",
    attrs: {
      type: "button"
    },
    on: {
      click: function ($event) {
        return _vm.collapedSidebar();
      }
    }
  }, [_c("span", {
    staticClass: "mdi mdi-menu"
  })]), _c("b-navbar-nav", {
    staticClass: "navbar-nav-right ml-auto"
  }, [_c("form", {
    staticClass: "mr-auto search-form d-none d-md-block",
    attrs: {
      action: "#"
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("input", {
    staticClass: "form-control",
    staticStyle: {
      display: "none"
    },
    attrs: {
      type: "search",
      placeholder: "Search Here"
    }
  })])]), _c("b-nav-item-dropdown", {
    staticClass: "preview-list user-dropdown",
    attrs: {
      right: ""
    }
  }, [_c("template", {
    slot: "button-content"
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_vm._v(" " + _vm._s(_vm.getUser.firstname) + " " + _vm._s(_vm.getUser.lastname) + " ")])]), _c("b-dropdown-item", [_c("div", {
    staticClass: "dropdown-headerw-100 mt-0"
  }, [_vm._v(_vm._s(_vm.getUser.email) + " ")])]), _c("b-dropdown-item", [_c("router-link", {
    attrs: {
      to: {
        path: "/my-profile"
      }
    }
  }, [_vm._v(" My Profile "), _c("i", {
    staticClass: "dropdown-item-icon ti-dashboard"
  })])], 1), _vm.isAuth ? _c("span", [_c("b-dropdown-item", {
    on: {
      click: _vm.logout
    }
  }, [_vm._v("Sign Out"), _c("i", {
    staticClass: "dropdown-item-icon ti-power-off"
  })])], 1) : _vm._e()], 2)], 1), _c("button", {
    staticClass: "navbar-toggler navbar-toggler-right align-self-center",
    attrs: {
      type: "button"
    },
    on: {
      click: function ($event) {
        return _vm.collapedMobileSidebar();
      }
    }
  }, [_c("span", {
    staticClass: "mdi mdi-menu"
  })])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppSidebar.vue?vue&type=template&id=59415b58&scoped=true&lang=html":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/partials/AppSidebar.vue?vue&type=template&id=59415b58&scoped=true&lang=html ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "app-sidebar"
  }, [_c("nav", {
    staticClass: "sidebar sidebar-offcanvas",
    attrs: {
      id: "sidebar"
    }
  }, [_c("ul", {
    staticClass: "nav"
  }, [_c("li", {
    staticClass: "nav-item nav-profile"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#/my-profile"
    }
  }, [_vm._m(0), _c("div", {
    staticClass: "text-wrapper"
  }, [_c("div", {
    staticClass: "profile-name"
  }, [_vm._v(_vm._s(_vm.getUser.firstname))]), _c("div", {
    staticClass: "designation"
  }, [_vm._v(_vm._s(_vm.getUser.lastname))])])])]), _c("li", {
    staticClass: "nav-item nav-category"
  }, [_vm._v("Main Menu")]), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/dashboard"
      }
    }
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-home-outline typcn-3x"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v("Dashboard")])])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        name: "eagleeye"
      }
    }
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-eye"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v("Eagle Eyes")])])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle",
      value: "ui-basic",
      expression: "'ui-basic'"
    }],
    staticClass: "nav-link"
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-coffee"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v("Manage Vehicles")]), _c("i", {
    staticClass: "menu-arrow"
  })]), _c("b-collapse", {
    attrs: {
      id: "ui-basic"
    }
  }, [_c("ul", {
    staticClass: "nav flex-column sub-menu"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/buses"
      }
    }
  }, [_vm._v("All Vehicles")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/bus/create"
      }
    }
  }, [_vm._v("Create Vehicle")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/buslayouts"
      }
    }
  }, [_vm._v("All Vehicles Layout")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/buslayout/create"
      }
    }
  }, [_vm._v("Add Vehicle Layout ")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/bustypes"
      }
    }
  }, [_vm._v("All Vehicle Type")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/bustype/create"
      }
    }
  }, [_vm._v("Add Vehicle Type ")])], 1)])])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("span", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle",
      value: "manage-driver-dropdown",
      expression: "'manage-driver-dropdown'"
    }],
    staticClass: "nav-link"
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-group-outline"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v(" Manage Drivers ")]), _c("i", {
    staticClass: "menu-arrow"
  })]), _c("b-collapse", {
    attrs: {
      id: "manage-driver-dropdown"
    }
  }, [_c("ul", {
    staticClass: "nav flex-column sub-menu"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/drivers"
      }
    }
  }, [_vm._v("All Drivers")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/driver/create"
      }
    }
  }, [_vm._v("Create Driver")])], 1)])])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle",
      value: "manage-routes",
      expression: "'manage-routes'"
    }],
    staticClass: "nav-link"
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-location-arrow-outline"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v("Fixed routes")]), _c("i", {
    staticClass: "menu-arrow"
  })]), _c("b-collapse", {
    attrs: {
      id: "manage-routes"
    }
  }, [_c("ul", {
    staticClass: "nav flex-column sub-menu"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/locations"
      }
    }
  }, [_vm._v("All stops")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/location/create"
      }
    }
  }, [_vm._v("Create stops")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/routes"
      }
    }
  }, [_vm._v("All Routes")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/route/create"
      }
    }
  }, [_vm._v("Create Route")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/bus-schedules"
      }
    }
  }, [_vm._v("All Vehicles Schedule")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/bus-schedules/create"
      }
    }
  }, [_vm._v("Create Vehicle schedule")])], 1)])])], 1), _vm.getName.role == "admin" ? _c("li", {
    staticClass: "nav-item nav-category"
  }, [_vm._v(" Administrations Settings ")]) : _vm._e(), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle",
      value: "manage-customers",
      expression: "'manage-customers'"
    }],
    staticClass: "nav-link"
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-group-outline"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v("Manage Customers")]), _c("i", {
    staticClass: "menu-arrow"
  })]), _c("b-collapse", {
    attrs: {
      id: "manage-customers"
    }
  }, [_c("ul", {
    staticClass: "nav flex-column sub-menu"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/customers"
      }
    }
  }, [_vm._v("All Customers")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/customer/create"
      }
    }
  }, [_vm._v("Create Customer")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/suggests"
      }
    }
  }, [_vm._v("Suggestions")])], 1)])])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/help-and-support"
      }
    }
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-group-outline"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v(" Help & Support")])])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle",
      value: "trips",
      expression: "'trips'"
    }],
    staticClass: "nav-link"
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-user-outline"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v("Manage Trips")]), _c("i", {
    staticClass: "menu-arrow"
  })]), _c("b-collapse", {
    attrs: {
      id: "trips"
    }
  }, [_c("ul", {
    staticClass: "nav flex-column sub-menu"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/trips/assign/create"
      }
    }
  }, [_vm._v("Create")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/trips/assign/list"
        //   name: 'tripassignlist',
      }
    }
  }, [_vm._v("List")])], 1)])])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle",
      value: "bookings",
      expression: "'bookings'"
    }],
    staticClass: "nav-link"
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-user-outline"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v("Manage Bookings")]), _c("i", {
    staticClass: "menu-arrow"
  })]), _c("b-collapse", {
    attrs: {
      id: "bookings"
    }
  }, [_c("ul", {
    staticClass: "nav flex-column sub-menu"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/bookings/scheduled"
        // name: 'booking',
        // params: { travel_status: 'scheduled' },
      }
    }
  }, [_vm._v("Scheduled")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/bookings/onboarded"
        // name: 'booking',
        // params: { travel_status: 'onboarded' },
      }
    }
  }, [_vm._v("Onboarded")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/bookings/completed"
        // name: 'booking',
        // params: { travel_status: 'completed' },
      }
    }
  }, [_vm._v("Completed")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/bookings/cancelled"
        // name: 'booking',
        // params: { travel_status: 'cancelled' },
      }
    }
  }, [_vm._v("Cancelled")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/bookings/expired"
        // name: 'booking',
        // params: { travel_status: 'expired' },
      }
    }
  }, [_vm._v("Expired")])], 1)])])], 1), _vm.getUser.role === "admin" || _vm.getUser.role === "staff" ? _c("li", {
    staticClass: "nav-item nav-category"
  }, [_vm._v(" " + _vm._s(_vm.getUser.role.toUpperCase()) + " Menu ")]) : _vm._e(), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle",
      value: "manage-notifications",
      expression: "'manage-notifications'"
    }],
    staticClass: "nav-link"
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-group-outline"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v("Manage Notifications")]), _c("i", {
    staticClass: "menu-arrow"
  })]), _c("b-collapse", {
    attrs: {
      id: "manage-notifications"
    }
  }, [_c("ul", {
    staticClass: "nav flex-column sub-menu"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/notifications"
      }
    }
  }, [_vm._v("Lists")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/notifications/create"
      }
    }
  }, [_vm._v("Create")])], 1)])])], 1), _vm.getUser.role === "admin" ? _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle",
      value: "manage-users",
      expression: "'manage-users'"
    }],
    staticClass: "nav-link"
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-group-outline"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v("Manage Users")]), _c("i", {
    staticClass: "menu-arrow"
  })]), _c("b-collapse", {
    attrs: {
      id: "manage-users"
    }
  }, [_c("ul", {
    staticClass: "nav flex-column sub-menu"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/users"
      }
    }
  }, [_vm._v("Manage Users")])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/user/create"
      }
    }
  }, [_vm._v("Create User")])], 1)])])], 1) : _vm._e(), _vm.getUser.role === "admin" ? _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle",
      value: "auth",
      expression: "'auth'"
    }],
    staticClass: "nav-link"
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-document-add"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v("Role and Permission")]), _c("i", {
    staticClass: "menu-arrow"
  })]), _c("b-collapse", {
    attrs: {
      id: "auth"
    }
  }, [_c("ul", {
    staticClass: "nav flex-column sub-menu"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        path: "/roles"
      }
    }
  }, [_vm._v("Manage Role")])], 1)])])], 1) : _vm._e(), _vm.getUser.role == "admin" ? _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle",
      value: "administration-tools",
      expression: "'administration-tools'"
    }],
    staticClass: "nav-link"
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-document-add"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v("Administration Tools")]), _c("i", {
    staticClass: "menu-arrow"
  })]), _c("b-collapse", {
    attrs: {
      id: "administration-tools"
    }
  }, [_c("ul", {
    staticClass: "nav flex-column sub-menu"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        name: "country"
      }
    }
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-cog-outline"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v("Country")])])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        name: "currency"
      }
    }
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-cog-outline"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v("Currency")])])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        name: "applicationsetting"
      }
    }
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-cog-outline"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v("App Settings")])])], 1), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        name: "payment-settings"
      }
    }
  }, [_c("i", {
    staticClass: "menu-icon typcn typcn-cog-outline"
  }), _c("span", {
    staticClass: "menu-title"
  }, [_vm._v("Payment Settings")])])], 1)])])], 1) : _vm._e()])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "profile-image"
  }, [_c("div", {
    staticClass: "dot-indicator bg-success"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/PrivacyPolicy.vue?vue&type=template&id=92a58be0&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/PrivacyPolicy.vue?vue&type=template&id=92a58be0&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", [_c("b-container", [_c("b-row", {
    staticClass: "my-5"
  }, [_c("b-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "brand-logo"
  }, [_c("img", {
    staticClass: "img",
    attrs: {
      src: _setup.Logo
    }
  })])]), _c("b-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s(_setup.state)
    }
  })])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/TermAndCondition.vue?vue&type=template&id=eba7d86c&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/TermAndCondition.vue?vue&type=template&id=eba7d86c&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", [_c("b-container", [_c("b-row", {
    staticClass: "my-5"
  }, [_c("b-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "brand-logo"
  }, [_c("img", {
    staticClass: "img",
    attrs: {
      src: _setup.Logo
    }
  })])]), _c("b-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s(_setup.state)
    }
  })])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/change.vue?vue&type=template&id=c9d31366&scoped=true&lang=html":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/auth/change.vue?vue&type=template&id=c9d31366&scoped=true&lang=html ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "login"
  }, [_c("div", {
    staticClass: "container-scroller"
  }, [_c("div", {
    staticClass: "container-fluid page-body-wrapper full-page-wrapper auth"
  }, [_c("div", {
    staticClass: "content-wrapper d-flex align-items-center login-half-bg"
  }, [_c("div", {
    staticClass: "row w-100 flex-grow"
  }, [_c("div", {
    staticClass: "col-xl-4 col-lg-6 mx-auto"
  }, [_c("div", {
    staticClass: "auth-form-light text-left p-5"
  }, [_c("div", {
    staticClass: "brand-logo"
  }, [_c("img", {
    staticClass: "img",
    attrs: {
      src: _vm.appLogo
    }
  })]), _c("h5", {
    staticClass: "font-weight-light"
  }, [_vm._v("Reset New Password.")]), _c("Change")], 1)])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/forget.vue?vue&type=template&id=123843ec&scoped=true&lang=html":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/auth/forget.vue?vue&type=template&id=123843ec&scoped=true&lang=html ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "login"
  }, [_c("div", {
    staticClass: "container-scroller"
  }, [_c("div", {
    staticClass: "container-fluid page-body-wrapper full-page-wrapper auth"
  }, [_c("div", {
    staticClass: "content-wrapper d-flex align-items-center login-half-bg"
  }, [_c("div", {
    staticClass: "row w-100 flex-grow"
  }, [_c("div", {
    staticClass: "col-xl-4 col-lg-6 mx-auto"
  }, [_c("div", {
    staticClass: "auth-form-light text-left p-5"
  }, [_c("div", {
    staticClass: "brand-logo"
  }, [_c("img", {
    staticClass: "img",
    attrs: {
      src: _vm.appLogo
    }
  })]), _c("h5", {
    staticClass: "font-weight-light"
  }, [_vm._v("Forget Password.")]), _c("Forget")], 1)])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/login.vue?vue&type=template&id=fcf1ae48&scoped=true&lang=html":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/auth/login.vue?vue&type=template&id=fcf1ae48&scoped=true&lang=html ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "login"
  }, [_c("div", {
    staticClass: "container-scroller"
  }, [_c("div", {
    staticClass: "container-fluid page-body-wrapper full-page-wrapper auth"
  }, [_c("div", {
    staticClass: "content-wrapper d-flex align-items-center login-half-bg"
  }, [_c("div", {
    staticClass: "row w-100 flex-grow"
  }, [_c("div", {
    staticClass: "col-xl-4 col-lg-6 mx-auto"
  }, [_c("div", {
    staticClass: "auth-form-light text-left p-5"
  }, [_c("div", {
    staticClass: "brand-logo"
  }, [_c("img", {
    staticClass: "img",
    attrs: {
      src: _vm.appLogo
    }
  })]), _c("h5", {
    staticClass: "font-weight-light"
  }, [_vm._v("Sign in to continue.")]), _c("Login"), _c("div", {
    staticClass: "float-right"
  }, [_c("router-link", {
    staticClass: "text-small forgot-password text-black mr-3",
    attrs: {
      target: "_blank",
      to: "/terms"
    }
  }, [_vm._v("Terms and condition")]), _c("router-link", {
    staticClass: "text-small forgot-password text-black mr-3",
    attrs: {
      target: "_blank",
      to: "/privacy-policy"
    }
  }, [_vm._v("Privacy policy")])], 1)], 1), _c("p", {
    staticClass: "footer-text text-center text-white"
  }, [_vm._v(" copyright © " + _vm._s(this.$year) + " " + _vm._s(_vm.appName) + ". All rights reserved. ")])])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mainview.vue?vue&type=template&id=0a40daf8&scoped=true&lang=html":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/mainview.vue?vue&type=template&id=0a40daf8&scoped=true&lang=html ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "main-view"
  }, [_c("div", {
    staticClass: "container-scroller"
  }, [_c("app-header"), _c("div", {
    staticClass: "container-fluid page-body-wrapper"
  }, [_c("app-sidebar"), _c("div", {
    staticClass: "main-panel"
  }, [_c("div", {
    staticClass: "content-wrapper"
  }, [_c("router-view")], 1), _c("app-footer")], 1)], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/vue-good-table/dist/vue-good-table.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-good-table/dist/vue-good-table.css");
var ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/mdi/css/materialdesignicons.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/mdi/css/materialdesignicons.min.css");
var ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/flag-icon-css/css/flag-icon.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/flag-icon-css/css/flag-icon.min.css");
var ___CSS_LOADER_AT_RULE_IMPORT_3___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/typicons.font/src/font/typicons.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/typicons.font/src/font/typicons.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);
// Module
exports.push([module.i, "\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=1&id=7ba5bd90&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=1&id=7ba5bd90&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./assets/images/samples/weather.svg */ "./src/assets/images/samples/weather.svg");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./assets/images/samples/profile_page/profile_header_banner.jpg */ "./src/assets/images/samples/profile_page/profile_header_banner.jpg");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./assets/images/samples/invoice_banner.jpg */ "./src/assets/images/samples/invoice_banner.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/*------------------------------------------------------------------\n [Master Stylesheet]\n\n  Project:\tStar Admin Bootstrap Template [Pro Version]\n  Version:\t1.0\n-------------------------------------------------------------------*/\n/*-------------------------------------------------------------------*/\n/* === Import Bootstrap functions and variables === */\n/*-------------------------------------------------------------------*/\n/* === Import template variables === */\n/*-------------------------------------------------------------------*/\n/* === SCSS Compass Functions === */\n@keyframes flash {\n0% {\n    opacity: 1;\n}\n25% {\n    opacity: 0;\n}\n50% {\n    opacity: 1;\n}\n75% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes bounce {\n0% {\n    transform: translateY(0);\n}\n20% {\n    transform: translateY(0);\n}\n40% {\n    transform: translateY(-30px);\n}\n50% {\n    transform: translateY(0);\n}\n60% {\n    transform: translateY(-15px);\n}\n80% {\n    transform: translateY(0);\n}\n100% {\n    transform: translateY(0);\n}\n}\n@keyframes shake {\n0% {\n    transform: translateX(0);\n}\n10% {\n    transform: translateX(-10px);\n}\n20% {\n    transform: translateX(10px);\n}\n30% {\n    transform: translateX(-10px);\n}\n40% {\n    transform: translateX(10px);\n}\n50% {\n    transform: translateX(-10px);\n}\n60% {\n    transform: translateX(10px);\n}\n70% {\n    transform: translateX(-10px);\n}\n80% {\n    transform: translateX(10px);\n}\n90% {\n    transform: translateX(-10px);\n}\n100% {\n    transform: translateX(0);\n}\n}\n@keyframes tada {\n0% {\n    transform: scale(1, 1);\n}\n10% {\n    transform: scale(0.9) rotate(-3deg);\n}\n20% {\n    transform: scale(0.9) rotate(-3deg);\n}\n30% {\n    transform: scale(1.1) rotate(3deg);\n}\n40% {\n    transform: scale(1.1) rotate(-3deg);\n}\n50% {\n    transform: scale(1.1) rotate(3deg);\n}\n60% {\n    transform: scale(1.1) rotate(-3deg);\n}\n70% {\n    transform: scale(1.1) rotate(3deg);\n}\n80% {\n    transform: scale(1.1) rotate(-3deg);\n}\n90% {\n    transform: scale(1.1) rotate(3deg);\n}\n100% {\n    transform: scale(1) rotate(0);\n}\n}\n@keyframes swing {\n20%, 40%, 60%, 80%, 100% {\n    transform-origin: top center 50%;\n}\n20% {\n    transform: rotate(15deg);\n}\n40% {\n    transform: rotate(-10deg);\n}\n60% {\n    transform: rotate(5deg);\n}\n80% {\n    transform: rotate(-5deg);\n}\n100% {\n    transform: rotate(0deg);\n}\n}\n@keyframes wobble {\n0% {\n    transform: translateX(0%);\n}\n15% {\n    transform: translateX(-25%) rotate(-5deg);\n}\n30% {\n    transform: translateX(20%) rotate(3deg);\n}\n45% {\n    transform: translateX(-15%) rotate(-3deg);\n}\n60% {\n    transform: translateX(10%) rotate(2deg);\n}\n75% {\n    transform: translateX(-5%) rotate(-1deg);\n}\n100% {\n    transform: translateX(0%);\n}\n}\n@keyframes pulse {\n0% {\n    transform: scale(1, 1);\n}\n50% {\n    transform: scale(1.1, 1.1);\n}\n100% {\n    transform: scale(1, 1);\n}\n}\n@keyframes wiggle {\n0% {\n    transform: skewX(9deg);\n}\n10% {\n    transform: skewX(-8deg);\n}\n20% {\n    transform: skewX(7deg);\n}\n30% {\n    transform: skewX(-6deg);\n}\n40% {\n    transform: skewX(5deg);\n}\n50% {\n    transform: skewX(-4deg);\n}\n60% {\n    transform: skewX(3deg);\n}\n70% {\n    transform: skewX(-2deg);\n}\n80% {\n    transform: skewX(1deg);\n}\n90% {\n    transform: skewX(0deg);\n}\n100% {\n    transform: skewX(0deg);\n}\n}\n@keyframes bounceOut {\n0% {\n    transform: scale(1, 1);\n}\n25% {\n    transform: scale(0.95, 0.95);\n}\n50% {\n    opacity: 1;\n    transform: scale(1.1, 1.1);\n}\n100% {\n    opacity: 0;\n    transform: scale(0.3, 0.3);\n}\n}\n@keyframes bounceOutUp {\n0% {\n    transform: translateY(0);\n}\n20% {\n    opacity: 1;\n    transform: translateY(20px);\n}\n100% {\n    opacity: 0;\n    transform: translateY(-2000px);\n}\n}\n@keyframes bounceOutDown {\n0% {\n    transform: translateY(0);\n}\n20% {\n    opacity: 1;\n    transform: translateY(-20px);\n}\n100% {\n    opacity: 0;\n    transform: translateY(2000px);\n}\n}\n@keyframes bounceOutLeft {\n0% {\n    transform: translateX(0);\n}\n20% {\n    opacity: 1;\n    transform: translateX(20px);\n}\n100% {\n    opacity: 0;\n    transform: translateX(-2000px);\n}\n}\n@keyframes bounceOutRight {\n0% {\n    transform: translateX(0);\n}\n20% {\n    opacity: 1;\n    transform: translateX(-20px);\n}\n100% {\n    opacity: 0;\n    transform: translateX(2000px);\n}\n}\n@keyframes bounceIn {\n0% {\n    opacity: 0;\n    transform: scale(0.3, 0.3);\n}\n50% {\n    opacity: 1;\n    transform: scale(1.05, 1.05);\n}\n70% {\n    transform: scale(0.9, 0.9);\n}\n100% {\n    transform: scale(1, 1);\n}\n}\n@keyframes bounceInDown {\n0% {\n    opacity: 0;\n    transform: translateY(-2000px);\n}\n60% {\n    opacity: 1;\n    transform: translateY(30px);\n}\n80% {\n    transform: translateY(-10px);\n}\n100% {\n    transform: translateY(0);\n}\n}\n@keyframes bounceInUp {\n0% {\n    opacity: 0;\n    transform: translateY(2000px);\n}\n60% {\n    opacity: 1;\n    transform: translateY(-30px);\n}\n80% {\n    transform: translateY(10px);\n}\n100% {\n    transform: translateY(0);\n}\n}\n@keyframes bounceInRight {\n0% {\n    opacity: 0;\n    transform: translateX(2000px);\n}\n60% {\n    opacity: 1;\n    transform: translateX(-30px);\n}\n80% {\n    transform: translateX(10px);\n}\n100% {\n    transform: translateX(0);\n}\n}\n@keyframes bounceInLeft {\n0% {\n    opacity: 0;\n    transform: translateX(-2000px);\n}\n60% {\n    opacity: 1;\n    transform: translateX(30px);\n}\n80% {\n    transform: translateX(-10px);\n}\n100% {\n    transform: translateX(0);\n}\n}\n@keyframes fadeOut {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes fadeOutUp {\n0% {\n    transform: translateY(0);\n    opacity: 1;\n}\n100% {\n    transform: translateY(-20px);\n    opacity: 0;\n}\n}\n@keyframes fadeOutDown {\n0% {\n    transform: translateY(0);\n    opacity: 1;\n}\n100% {\n    transform: translateY(20px);\n    opacity: 0;\n}\n}\n@keyframes fadeOutRight {\n0% {\n    transform: translateX(0);\n    opacity: 1;\n}\n100% {\n    transform: translateX(20px);\n    opacity: 0;\n}\n}\n@keyframes fadeOutLeft {\n0% {\n    transform: translateX(0);\n    opacity: 1;\n}\n100% {\n    transform: translateX(-20px);\n    opacity: 0;\n}\n}\n@keyframes fadeOutUpBig {\n0% {\n    transform: translateY(0);\n    opacity: 1;\n}\n100% {\n    transform: translateY(-2000px);\n    opacity: 0;\n}\n}\n@keyframes fadeOutDownBig {\n0% {\n    opacity: 1;\n    transform: translateY(0);\n}\n100% {\n    opacity: 0;\n    transform: translateY(2000px);\n}\n}\n@keyframes fadeOutRightBig {\n0% {\n    opacity: 1;\n    transform: translateX(0);\n}\n100% {\n    opacity: 0;\n    transform: translateX(2000px);\n}\n}\n@keyframes fadeOutLeftBig {\n0% {\n    opacity: 1;\n    transform: translateX(0);\n}\n100% {\n    opacity: 0;\n    transform: translateX(-2000px);\n}\n}\n@keyframes fadeIn {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes fadeInUp {\n0% {\n    transform: translateY(20px);\n    opacity: 0;\n}\n100% {\n    transform: translateY(0);\n    opacity: 1;\n}\n}\n@keyframes fadeInDown {\n0% {\n    transform: translateY(-20px);\n    opacity: 0;\n}\n100% {\n    transform: translateY(0);\n    opacity: 1;\n}\n}\n@keyframes fadeInRight {\n0% {\n    transform: translateX(20px);\n    opacity: 0;\n}\n100% {\n    transform: translateX(0);\n    opacity: 1;\n}\n}\n@keyframes fadeInLeft {\n0% {\n    transform: translateX(-20px);\n    opacity: 0;\n}\n100% {\n    transform: translateX(0);\n    opacity: 1;\n}\n}\n@keyframes fadeInUpBig {\n0% {\n    transform: translateY(2000px);\n    opacity: 0;\n}\n100% {\n    transform: translateY(0);\n    opacity: 1;\n}\n}\n@keyframes fadeInDownBig {\n0% {\n    opacity: 0;\n    transform: translateY(-2000px);\n}\n100% {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n@keyframes fadeInRightBig {\n0% {\n    opacity: 0;\n    transform: translateX(2000px);\n}\n100% {\n    opacity: 1;\n    transform: translateX(0);\n}\n}\n@keyframes fadeInLeftBig {\n0% {\n    opacity: 0;\n    transform: translateX(-2000px);\n}\n100% {\n    opacity: 1;\n    transform: translateX(0);\n}\n}\n@keyframes flip {\n0% {\n    transform: perspective(400px) rotateY(0);\n    animation-timing-function: ease-out;\n}\n40% {\n    transform: perspective(400px) translateZ(150px) rotateY(170deg);\n    animation-timing-function: ease-out;\n}\n50% {\n    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    animation-timing-function: ease-in;\n}\n80% {\n    transform: perspective(400px) rotateY(360deg) scale(0.95);\n    animation-timing-function: ease-in;\n}\n100% {\n    transform: perspective(400px) scale(1);\n    animation-timing-function: ease-in;\n}\n}\n@keyframes flipInX {\n0% {\n    transform: perspective(400px) rotateX(90deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n}\n40% {\n    transform: perspective(400px) rotateX(-10deg);\n}\n70% {\n    transform: perspective(400px) rotateX(10deg);\n}\n100% {\n    transform: perspective(400px) rotateX(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n}\n}\n@keyframes flipOutX {\n0% {\n    transform: perspective(400px) rotateX(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n}\n100% {\n    transform: perspective(400px) rotateX(90deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n}\n}\n@keyframes flipInY {\n0% {\n    transform: perspective(400px) rotateY(90deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n}\n40% {\n    transform: perspective(400px) rotateY(-10deg);\n}\n70% {\n    transform: perspective(400px) rotateY(10deg);\n}\n100% {\n    transform: perspective(400px) rotateY(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n}\n}\n@keyframes flipOutY {\n0% {\n    transform: perspective(400px) rotateY(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n}\n100% {\n    transform: perspective(400px) rotateY(90deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n}\n}\n@keyframes lightSpeedIn {\n0% {\n    transform: translateX(100%) skewX(-30deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n}\n60% {\n    transform: translateX(-20%) skewX(30deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n}\n80% {\n    transform: translateX(0%) skewX(-15deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n}\n100% {\n    transform: translateX(0%) skewX(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n}\n}\n@keyframes lightSpeedOut {\n0% {\n    transform: translateX(0%) skewX(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n}\n100% {\n    transform: translateX(100%) skewX(-30deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n}\n}\n@keyframes rotateOut {\n0% {\n    transform-origin: center center 50%;\n    transform: rotate(0);\n    opacity: 1;\n}\n100% {\n    transform-origin: center center 50%;\n    transform: rotate(200deg);\n    opacity: 0;\n}\n}\n@keyframes rotateOutDownLeft {\n0% {\n    transform-origin: left bottom 50%;\n    transform: rotate(0);\n    opacity: 1;\n}\n100% {\n    transform-origin: left bottom 50%;\n    transform: rotate(90deg);\n    opacity: 0;\n}\n}\n@keyframes rotateOutUpLeft {\n0% {\n    transform-origin: left bottom 50%;\n    transform: rotate(0);\n    opacity: 1;\n}\n100% {\n    transform-origin: left bottom 50%;\n    transform: rotate(-90deg);\n    opacity: 0;\n}\n}\n@keyframes rotateOutDownRight {\n0% {\n    transform-origin: right bottom 50%;\n    transform: rotate(0);\n    opacity: 1;\n}\n100% {\n    transform-origin: right bottom 50%;\n    transform: rotate(-90deg);\n    opacity: 0;\n}\n}\n@keyframes rotateOutUpRight {\n0% {\n    transform-origin: right bottom 50%;\n    transform: rotate(0);\n    opacity: 1;\n}\n100% {\n    transform-origin: right bottom 50%;\n    transform: rotate(90deg);\n    opacity: 0;\n}\n}\n@keyframes rotateIn {\n0% {\n    transform-origin: center center 50%;\n    transform: rotate(-200deg);\n    opacity: 0;\n}\n100% {\n    transform-origin: center center 50%;\n    transform: rotate(0);\n    opacity: 1;\n}\n}\n@keyframes rotateInDownLeft {\n0% {\n    transform-origin: left bottom 50%;\n    transform: rotate(-90deg);\n    opacity: 0;\n}\n100% {\n    transform-origin: left bottom 50%;\n    transform: rotate(0);\n    opacity: 1;\n}\n}\n@keyframes rotateInUpLeft {\n0% {\n    transform-origin: left bottom 50%;\n    transform: rotate(90deg);\n    opacity: 0;\n}\n100% {\n    transform-origin: left bottom 50%;\n    transform: rotate(0);\n    opacity: 1;\n}\n}\n@keyframes rotateInUpRight {\n0% {\n    transform-origin: right bottom 50%;\n    transform: rotate(-90deg);\n    opacity: 0;\n}\n100% {\n    transform-origin: right bottom 50%;\n    transform: rotate(0);\n    opacity: 1;\n}\n}\n@keyframes rotateInDownRight {\n0% {\n    transform-origin: right bottom 50%;\n    transform: rotate(90deg);\n    opacity: 0;\n}\n100% {\n    transform-origin: right bottom 50%;\n    transform: rotate(0);\n    opacity: 1;\n}\n}\n@keyframes hinge {\n0% {\n    transform: rotate(0);\n    transform-origin: top left 50%;\n    animation-timing-function: ease-in-out;\n}\n20%, 60% {\n    transform: rotate(80deg);\n    transform-origin: top left 50%;\n    animation-timing-function: ease-in-out;\n}\n40% {\n    transform: rotate(60deg);\n    transform-origin: top left 50%;\n    animation-timing-function: ease-in-out;\n}\n80% {\n    transform: rotate(60deg) translateY(0);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n    transform-origin: top left 50%;\n    animation-timing-function: ease-in-out;\n}\n100% {\n    transform: translateY(700px);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n}\n}\n@keyframes rollIn {\n0% {\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n    transform: translateX(-100%) rotate(-120deg);\n}\n100% {\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n    transform: translateX(0px) rotate(0deg);\n}\n}\n@keyframes rollOut {\n0% {\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n    transform: translateX(0px) rotate(0deg);\n}\n100% {\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n    transform: translateX(-100%) rotate(-120deg);\n}\n}\n/*-------------------------------------------------------------------*/\n/* === Boostrap Main SCSS === */\n/*!\n * Bootstrap v4.6.2 (https://getbootstrap.com/)\n * Copyright 2011-2022 The Bootstrap Authors\n * Copyright 2011-2022 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n:root {\n  --blue: #3a8696;\n  --indigo: #6610f2;\n  --purple: #ab8ce4;\n  --pink: #E91E63;\n  --red: #ff0017;\n  --orange: #fb9678;\n  --yellow: #ffd500;\n  --green: #3bd949;\n  --teal: #58d8a3;\n  --cyan: #57c7d4;\n  --white: #ffffff;\n  --gray: #6c757d;\n  --gray-dark: #292b2c;\n  --blue: #3a8696;\n  --indigo: #6610f2;\n  --purple: #ab8ce4;\n  --pink: #E91E63;\n  --red: #ff0017;\n  --orange: #fb9678;\n  --yellow: #ffd500;\n  --green: #3bd949;\n  --teal: #58d8a3;\n  --cyan: #57c7d4;\n  --white: #ffffff;\n  --white-smoke: #f3f5f6;\n  --gray: #6c757d;\n  --gray-light: #8ba2b5;\n  --gray-lightest: #f7f7f9;\n  --primary: #3a8696;\n  --secondary: #dde4eb;\n  --success: #19d895;\n  --info: #8862e0;\n  --warning: #ffaf00;\n  --danger: #ff6258;\n  --light: #fbfbfb;\n  --dark: #252C46;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n  -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n}\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\ndt {\n  font-weight: 700;\n}\ndd {\n  margin-bottom: 0.5rem;\n  margin-left: 0;\n}\nblockquote {\n  margin: 0 0 1rem;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n}\na:hover {\n  color: rgb(0, 86.1, 178.5);\n  text-decoration: underline;\n}\na:not([href]):not([class]) {\n  color: inherit;\n  text-decoration: none;\n}\na:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none;\n}\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em;\n}\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar;\n}\nfigure {\n  margin: 0 0 1rem;\n}\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n}\ntable {\n  border-collapse: collapse;\n}\ncaption {\n  padding-top: 12px 15px;\n  padding-bottom: 12px 15px;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\nbutton {\n  border-radius: 0;\n}\nbutton:focus:not(:focus-visible) {\n  outline: 0;\n}\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\nbutton,\ninput {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\n[role=button] {\n  cursor: pointer;\n}\nselect {\n  word-wrap: normal;\n}\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\nbutton:not(:disabled),\n[type=button]:not(:disabled),\n[type=reset]:not(:disabled),\n[type=submit]:not(:disabled) {\n  cursor: pointer;\n}\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\ninput[type=radio],\ninput[type=checkbox] {\n  box-sizing: border-box;\n  padding: 0;\n}\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\nprogress {\n  vertical-align: baseline;\n}\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=search] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\noutput {\n  display: inline-block;\n}\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\ntemplate {\n  display: none;\n}\n[hidden] {\n  display: none !important;\n}\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1, .h1 {\n  font-size: 2.5rem;\n}\nh2, .h2 {\n  font-size: 2rem;\n}\nh3, .h3 {\n  font-size: 1.75rem;\n}\nh4, .h4 {\n  font-size: 1.5rem;\n}\nh5, .h5 {\n  font-size: 1.25rem;\n}\nh6, .h6 {\n  font-size: 1rem;\n}\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\nsmall,\n.small {\n  font-size: 0.875em;\n  font-weight: 400;\n}\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline-item {\n  display: inline-block;\n}\n.list-inline-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.blockquote-footer {\n  display: block;\n  font-size: 0.875em;\n  color: #6c757d;\n}\n.blockquote-footer::before {\n  content: \"— \";\n}\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n.figure {\n  display: inline-block;\n}\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n.figure-caption {\n  font-size: 90%;\n  color: #6c757d;\n}\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-wrap: break-word;\n}\na > code {\n  color: inherit;\n}\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: 700;\n}\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529;\n}\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container,\n.container-fluid,\n.container-xl,\n.container-lg,\n.container-md,\n.container-sm {\n  width: 100%;\n  padding-right: 12.5px;\n  padding-left: 12.5px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n.container-sm, .container {\n    max-width: 540px;\n}\n}\n@media (min-width: 768px) {\n.container-md, .container-sm, .container {\n    max-width: 720px;\n}\n}\n@media (min-width: 992px) {\n.container-lg, .container-md, .container-sm, .container {\n    max-width: 960px;\n}\n}\n@media (min-width: 1200px) {\n.container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1140px;\n}\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -12.5px;\n  margin-left: -12.5px;\n}\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n.no-gutters > .col,\n.no-gutters > [class*=col-] {\n  padding-right: 0;\n  padding-left: 0;\n}\n.col-xl,\n.col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg,\n.col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md,\n.col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm,\n.col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col,\n.col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1 {\n  position: relative;\n  width: 100%;\n  padding-right: 12.5px;\n  padding-left: 12.5px;\n}\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n.row-cols-1 > * {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.row-cols-2 > * {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.row-cols-3 > * {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.row-cols-4 > * {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.row-cols-5 > * {\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n.row-cols-6 > * {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%;\n}\n.col-1 {\n  flex: 0 0 8.33333333%;\n  max-width: 8.33333333%;\n}\n.col-2 {\n  flex: 0 0 16.66666667%;\n  max-width: 16.66666667%;\n}\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.col-4 {\n  flex: 0 0 33.33333333%;\n  max-width: 33.33333333%;\n}\n.col-5 {\n  flex: 0 0 41.66666667%;\n  max-width: 41.66666667%;\n}\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.col-7 {\n  flex: 0 0 58.33333333%;\n  max-width: 58.33333333%;\n}\n.col-8 {\n  flex: 0 0 66.66666667%;\n  max-width: 66.66666667%;\n}\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.col-10 {\n  flex: 0 0 83.33333333%;\n  max-width: 83.33333333%;\n}\n.col-11 {\n  flex: 0 0 91.66666667%;\n  max-width: 91.66666667%;\n}\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.order-first {\n  order: -1;\n}\n.order-last {\n  order: 13;\n}\n.order-0 {\n  order: 0;\n}\n.order-1 {\n  order: 1;\n}\n.order-2 {\n  order: 2;\n}\n.order-3 {\n  order: 3;\n}\n.order-4 {\n  order: 4;\n}\n.order-5 {\n  order: 5;\n}\n.order-6 {\n  order: 6;\n}\n.order-7 {\n  order: 7;\n}\n.order-8 {\n  order: 8;\n}\n.order-9 {\n  order: 9;\n}\n.order-10 {\n  order: 10;\n}\n.order-11 {\n  order: 11;\n}\n.order-12 {\n  order: 12;\n}\n.offset-1 {\n  margin-left: 8.33333333%;\n}\n.offset-2 {\n  margin-left: 16.66666667%;\n}\n.offset-3 {\n  margin-left: 25%;\n}\n.offset-4 {\n  margin-left: 33.33333333%;\n}\n.offset-5 {\n  margin-left: 41.66666667%;\n}\n.offset-6 {\n  margin-left: 50%;\n}\n.offset-7 {\n  margin-left: 58.33333333%;\n}\n.offset-8 {\n  margin-left: 66.66666667%;\n}\n.offset-9 {\n  margin-left: 75%;\n}\n.offset-10 {\n  margin-left: 83.33333333%;\n}\n.offset-11 {\n  margin-left: 91.66666667%;\n}\n@media (min-width: 576px) {\n.col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n}\n.row-cols-sm-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.row-cols-sm-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.row-cols-sm-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n}\n.row-cols-sm-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.row-cols-sm-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n}\n.row-cols-sm-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n}\n.col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n}\n.col-sm-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%;\n}\n.col-sm-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%;\n}\n.col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.col-sm-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%;\n}\n.col-sm-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%;\n}\n.col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.col-sm-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%;\n}\n.col-sm-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%;\n}\n.col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n.col-sm-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%;\n}\n.col-sm-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%;\n}\n.col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.order-sm-first {\n    order: -1;\n}\n.order-sm-last {\n    order: 13;\n}\n.order-sm-0 {\n    order: 0;\n}\n.order-sm-1 {\n    order: 1;\n}\n.order-sm-2 {\n    order: 2;\n}\n.order-sm-3 {\n    order: 3;\n}\n.order-sm-4 {\n    order: 4;\n}\n.order-sm-5 {\n    order: 5;\n}\n.order-sm-6 {\n    order: 6;\n}\n.order-sm-7 {\n    order: 7;\n}\n.order-sm-8 {\n    order: 8;\n}\n.order-sm-9 {\n    order: 9;\n}\n.order-sm-10 {\n    order: 10;\n}\n.order-sm-11 {\n    order: 11;\n}\n.order-sm-12 {\n    order: 12;\n}\n.offset-sm-0 {\n    margin-left: 0;\n}\n.offset-sm-1 {\n    margin-left: 8.33333333%;\n}\n.offset-sm-2 {\n    margin-left: 16.66666667%;\n}\n.offset-sm-3 {\n    margin-left: 25%;\n}\n.offset-sm-4 {\n    margin-left: 33.33333333%;\n}\n.offset-sm-5 {\n    margin-left: 41.66666667%;\n}\n.offset-sm-6 {\n    margin-left: 50%;\n}\n.offset-sm-7 {\n    margin-left: 58.33333333%;\n}\n.offset-sm-8 {\n    margin-left: 66.66666667%;\n}\n.offset-sm-9 {\n    margin-left: 75%;\n}\n.offset-sm-10 {\n    margin-left: 83.33333333%;\n}\n.offset-sm-11 {\n    margin-left: 91.66666667%;\n}\n}\n@media (min-width: 768px) {\n.col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n}\n.row-cols-md-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.row-cols-md-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.row-cols-md-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n}\n.row-cols-md-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.row-cols-md-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n}\n.row-cols-md-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n}\n.col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n}\n.col-md-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%;\n}\n.col-md-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%;\n}\n.col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.col-md-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%;\n}\n.col-md-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%;\n}\n.col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.col-md-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%;\n}\n.col-md-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%;\n}\n.col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n.col-md-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%;\n}\n.col-md-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%;\n}\n.col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.order-md-first {\n    order: -1;\n}\n.order-md-last {\n    order: 13;\n}\n.order-md-0 {\n    order: 0;\n}\n.order-md-1 {\n    order: 1;\n}\n.order-md-2 {\n    order: 2;\n}\n.order-md-3 {\n    order: 3;\n}\n.order-md-4 {\n    order: 4;\n}\n.order-md-5 {\n    order: 5;\n}\n.order-md-6 {\n    order: 6;\n}\n.order-md-7 {\n    order: 7;\n}\n.order-md-8 {\n    order: 8;\n}\n.order-md-9 {\n    order: 9;\n}\n.order-md-10 {\n    order: 10;\n}\n.order-md-11 {\n    order: 11;\n}\n.order-md-12 {\n    order: 12;\n}\n.offset-md-0 {\n    margin-left: 0;\n}\n.offset-md-1 {\n    margin-left: 8.33333333%;\n}\n.offset-md-2 {\n    margin-left: 16.66666667%;\n}\n.offset-md-3 {\n    margin-left: 25%;\n}\n.offset-md-4 {\n    margin-left: 33.33333333%;\n}\n.offset-md-5 {\n    margin-left: 41.66666667%;\n}\n.offset-md-6 {\n    margin-left: 50%;\n}\n.offset-md-7 {\n    margin-left: 58.33333333%;\n}\n.offset-md-8 {\n    margin-left: 66.66666667%;\n}\n.offset-md-9 {\n    margin-left: 75%;\n}\n.offset-md-10 {\n    margin-left: 83.33333333%;\n}\n.offset-md-11 {\n    margin-left: 91.66666667%;\n}\n}\n@media (min-width: 992px) {\n.col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n}\n.row-cols-lg-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.row-cols-lg-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.row-cols-lg-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n}\n.row-cols-lg-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.row-cols-lg-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n}\n.row-cols-lg-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n}\n.col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n}\n.col-lg-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%;\n}\n.col-lg-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%;\n}\n.col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.col-lg-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%;\n}\n.col-lg-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%;\n}\n.col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.col-lg-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%;\n}\n.col-lg-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%;\n}\n.col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n.col-lg-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%;\n}\n.col-lg-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%;\n}\n.col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.order-lg-first {\n    order: -1;\n}\n.order-lg-last {\n    order: 13;\n}\n.order-lg-0 {\n    order: 0;\n}\n.order-lg-1 {\n    order: 1;\n}\n.order-lg-2 {\n    order: 2;\n}\n.order-lg-3 {\n    order: 3;\n}\n.order-lg-4 {\n    order: 4;\n}\n.order-lg-5 {\n    order: 5;\n}\n.order-lg-6 {\n    order: 6;\n}\n.order-lg-7 {\n    order: 7;\n}\n.order-lg-8 {\n    order: 8;\n}\n.order-lg-9 {\n    order: 9;\n}\n.order-lg-10 {\n    order: 10;\n}\n.order-lg-11 {\n    order: 11;\n}\n.order-lg-12 {\n    order: 12;\n}\n.offset-lg-0 {\n    margin-left: 0;\n}\n.offset-lg-1 {\n    margin-left: 8.33333333%;\n}\n.offset-lg-2 {\n    margin-left: 16.66666667%;\n}\n.offset-lg-3 {\n    margin-left: 25%;\n}\n.offset-lg-4 {\n    margin-left: 33.33333333%;\n}\n.offset-lg-5 {\n    margin-left: 41.66666667%;\n}\n.offset-lg-6 {\n    margin-left: 50%;\n}\n.offset-lg-7 {\n    margin-left: 58.33333333%;\n}\n.offset-lg-8 {\n    margin-left: 66.66666667%;\n}\n.offset-lg-9 {\n    margin-left: 75%;\n}\n.offset-lg-10 {\n    margin-left: 83.33333333%;\n}\n.offset-lg-11 {\n    margin-left: 91.66666667%;\n}\n}\n@media (min-width: 1200px) {\n.col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n}\n.row-cols-xl-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.row-cols-xl-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.row-cols-xl-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n}\n.row-cols-xl-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.row-cols-xl-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n}\n.row-cols-xl-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n}\n.col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n}\n.col-xl-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%;\n}\n.col-xl-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%;\n}\n.col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.col-xl-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%;\n}\n.col-xl-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%;\n}\n.col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.col-xl-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%;\n}\n.col-xl-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%;\n}\n.col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n.col-xl-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%;\n}\n.col-xl-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%;\n}\n.col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.order-xl-first {\n    order: -1;\n}\n.order-xl-last {\n    order: 13;\n}\n.order-xl-0 {\n    order: 0;\n}\n.order-xl-1 {\n    order: 1;\n}\n.order-xl-2 {\n    order: 2;\n}\n.order-xl-3 {\n    order: 3;\n}\n.order-xl-4 {\n    order: 4;\n}\n.order-xl-5 {\n    order: 5;\n}\n.order-xl-6 {\n    order: 6;\n}\n.order-xl-7 {\n    order: 7;\n}\n.order-xl-8 {\n    order: 8;\n}\n.order-xl-9 {\n    order: 9;\n}\n.order-xl-10 {\n    order: 10;\n}\n.order-xl-11 {\n    order: 11;\n}\n.order-xl-12 {\n    order: 12;\n}\n.offset-xl-0 {\n    margin-left: 0;\n}\n.offset-xl-1 {\n    margin-left: 8.33333333%;\n}\n.offset-xl-2 {\n    margin-left: 16.66666667%;\n}\n.offset-xl-3 {\n    margin-left: 25%;\n}\n.offset-xl-4 {\n    margin-left: 33.33333333%;\n}\n.offset-xl-5 {\n    margin-left: 41.66666667%;\n}\n.offset-xl-6 {\n    margin-left: 50%;\n}\n.offset-xl-7 {\n    margin-left: 58.33333333%;\n}\n.offset-xl-8 {\n    margin-left: 66.66666667%;\n}\n.offset-xl-9 {\n    margin-left: 75%;\n}\n.offset-xl-10 {\n    margin-left: 83.33333333%;\n}\n.offset-xl-11 {\n    margin-left: 91.66666667%;\n}\n}\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n}\n.table th,\n.table td {\n  padding: 12px 15px;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n.table tbody + tbody {\n  border-top: 2px solid #dee2e6;\n}\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem;\n}\n.table-bordered {\n  border: 1px solid #dee2e6;\n}\n.table-bordered th,\n.table-bordered td {\n  border: 1px solid #dee2e6;\n}\n.table-bordered thead th,\n.table-bordered thead td {\n  border-bottom-width: 2px;\n}\n.table-borderless th,\n.table-borderless td,\n.table-borderless thead th,\n.table-borderless tbody + tbody {\n  border: 0;\n}\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.table-hover tbody tr:hover {\n  color: #212529;\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: rgb(199.84, 221.12, 225.6);\n}\n.table-primary th,\n.table-primary td,\n.table-primary thead th,\n.table-primary tbody + tbody {\n  border-color: rgb(152.56, 192.08, 200.4);\n}\n.table-hover .table-primary:hover {\n  background-color: rgb(183.2058940397, 210.9031125828, 216.7341059603);\n}\n.table-hover .table-primary:hover > td,\n.table-hover .table-primary:hover > th {\n  background-color: rgb(183.2058940397, 210.9031125828, 216.7341059603);\n}\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: rgb(245.48, 247.44, 249.4);\n}\n.table-secondary th,\n.table-secondary td,\n.table-secondary thead th,\n.table-secondary tbody + tbody {\n  border-color: rgb(237.32, 240.96, 244.6);\n}\n.table-hover .table-secondary:hover {\n  background-color: rgb(229.4244444444, 234.69, 239.9555555556);\n}\n.table-hover .table-secondary:hover > td,\n.table-hover .table-secondary:hover > th {\n  background-color: rgb(229.4244444444, 234.69, 239.9555555556);\n}\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: rgb(190.6, 244.08, 225.32);\n}\n.table-success th,\n.table-success td,\n.table-success thead th,\n.table-success tbody + tbody {\n  border-color: rgb(135.4, 234.72, 199.88);\n}\n.table-hover .table-success:hover {\n  background-color: rgb(168.7970260223, 240.3829739777, 215.2716728625);\n}\n.table-hover .table-success:hover > td,\n.table-hover .table-success:hover > th {\n  background-color: rgb(168.7970260223, 240.3829739777, 215.2716728625);\n}\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: rgb(221.68, 211.04, 246.32);\n}\n.table-info th,\n.table-info td,\n.table-info thead th,\n.table-info tbody + tbody {\n  border-color: rgb(193.12, 173.36, 238.88);\n}\n.table-hover .table-info:hover {\n  background-color: rgb(205.5390425532, 189.744787234, 242.115212766);\n}\n.table-hover .table-info:hover > td,\n.table-hover .table-info:hover > th {\n  background-color: rgb(205.5390425532, 189.744787234, 242.115212766);\n}\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: rgb(255, 232.6, 183.6);\n}\n.table-warning th,\n.table-warning td,\n.table-warning thead th,\n.table-warning tbody + tbody {\n  border-color: rgb(255, 213.4, 122.4);\n}\n.table-hover .table-warning:hover {\n  background-color: rgb(255, 224.6, 158.1);\n}\n.table-hover .table-warning:hover > td,\n.table-hover .table-warning:hover > th {\n  background-color: rgb(255, 224.6, 158.1);\n}\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: rgb(255, 211.04, 208.24);\n}\n.table-danger th,\n.table-danger td,\n.table-danger thead th,\n.table-danger tbody + tbody {\n  border-color: rgb(255, 173.36, 168.16);\n}\n.table-hover .table-danger:hover {\n  background-color: rgb(255, 187.0669461078, 182.74);\n}\n.table-hover .table-danger:hover > td,\n.table-hover .table-danger:hover > th {\n  background-color: rgb(255, 187.0669461078, 182.74);\n}\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: rgb(253.88, 253.88, 253.88);\n}\n.table-light th,\n.table-light td,\n.table-light thead th,\n.table-light tbody + tbody {\n  border-color: rgb(252.92, 252.92, 252.92);\n}\n.table-hover .table-light:hover {\n  background-color: rgb(241.13, 241.13, 241.13);\n}\n.table-hover .table-light:hover > td,\n.table-hover .table-light:hover > th {\n  background-color: rgb(241.13, 241.13, 241.13);\n}\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: rgb(193.96, 195.92, 203.2);\n}\n.table-dark th,\n.table-dark td,\n.table-dark thead th,\n.table-dark tbody + tbody {\n  border-color: rgb(141.64, 145.28, 158.8);\n}\n.table-hover .table-dark:hover {\n  background-color: rgb(180.165955335, 182.5688833747, 191.494044665);\n}\n.table-hover .table-dark:hover > td,\n.table-hover .table-dark:hover > th {\n  background-color: rgb(180.165955335, 182.5688833747, 191.494044665);\n}\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-hover .table-active:hover > td,\n.table-hover .table-active:hover > th {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table .thead-dark th {\n  color: #fff;\n  background-color: #343a40;\n  border-color: rgb(69.1465517241, 77.125, 85.1034482759);\n}\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.table-dark {\n  color: #fff;\n  background-color: #343a40;\n}\n.table-dark th,\n.table-dark td,\n.table-dark thead th {\n  border-color: rgb(69.1465517241, 77.125, 85.1034482759);\n}\n.table-dark.table-bordered {\n  border: 0;\n}\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.table-dark.table-hover tbody tr:hover {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.075);\n}\n@media (max-width: 575.98px) {\n.table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n.table-responsive-sm > .table-bordered {\n    border: 0;\n}\n}\n@media (max-width: 767.98px) {\n.table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n.table-responsive-md > .table-bordered {\n    border: 0;\n}\n}\n@media (max-width: 991.98px) {\n.table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n.table-responsive-lg > .table-bordered {\n    border: 0;\n}\n}\n@media (max-width: 1199.98px) {\n.table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n.table-responsive-xl > .table-bordered {\n    border: 0;\n}\n}\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.table-responsive > .table-bordered {\n  border: 0;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.56rem 1.375rem;\n  font-size: 0.85rem;\n  font-weight: 400;\n  line-height: 1;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 2px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.form-control {\n    transition: none;\n}\n}\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: rgb(127.5, 189, 255);\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.form-control::-moz-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control:disabled, .form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\ninput[type=date].form-control,\ninput[type=time].form-control,\ninput[type=datetime-local].form-control,\ninput[type=month].form-control {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\nselect.form-control:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #495057;\n}\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%;\n}\n.col-form-label {\n  padding-top: calc(0.56rem + 1px);\n  padding-bottom: calc(0.56rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1;\n}\n.col-form-label-lg {\n  padding-top: calc(0.94rem + 1px);\n  padding-bottom: calc(0.94rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1;\n}\n.col-form-label-sm {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1;\n}\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.56rem 0;\n  margin-bottom: 0;\n  font-size: 0.85rem;\n  line-height: 1;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n  padding-right: 0;\n  padding-left: 0;\n}\n.form-control-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.5rem 0.81rem;\n  font-size: 0.875rem;\n  line-height: 1;\n  border-radius: 0.2rem;\n}\n.form-control-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.94rem 1.94rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  border-radius: 0.3rem;\n}\nselect.form-control[size], select.form-control[multiple] {\n  height: auto;\n}\ntextarea.form-control {\n  height: auto;\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-text {\n  display: block;\n  margin-top: 0.25rem;\n}\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n.form-row > .col,\n.form-row > [class*=col-] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem;\n}\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {\n  color: #6c757d;\n}\n.form-check-label {\n  margin-bottom: 0;\n}\n.form-check-inline {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n.form-check-inline .form-check-input {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n}\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #28a745;\n}\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.9);\n  border-radius: 0.25rem;\n}\n.form-row > .col > .valid-tooltip, .form-row > [class*=col-] > .valid-tooltip {\n  left: 5px;\n}\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block;\n}\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #28a745;\n  padding-right: calc(1.5em + 0.75rem) !important;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated select.form-control:valid, select.form-control.is-valid {\n  padding-right: 5.5rem !important;\n  background-position: right 2.75rem center;\n}\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n.was-validated .custom-select:valid, .custom-select.is-valid {\n  border-color: #28a745;\n  padding-right: calc(0.75em + 2.3125rem) !important;\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0.75rem center/8px 10px no-repeat, #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) no-repeat;\n}\n.was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #28a745;\n}\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #28a745;\n}\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n  border-color: #28a745;\n}\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  border-color: rgb(51.6956521739, 206.3043478261, 87);\n  background-color: rgb(51.6956521739, 206.3043478261, 87);\n}\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #28a745;\n}\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #28a745;\n}\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #dc3545;\n}\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem;\n}\n.form-row > .col > .invalid-tooltip, .form-row > [class*=col-] > .invalid-tooltip {\n  left: 5px;\n}\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem) !important;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated select.form-control:invalid, select.form-control.is-invalid {\n  padding-right: 5.5rem !important;\n  background-position: right 2.75rem center;\n}\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n.was-validated .custom-select:invalid, .custom-select.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(0.75em + 2.3125rem) !important;\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0.75rem center/8px 10px no-repeat, #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\") center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) no-repeat;\n}\n.was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545;\n}\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #dc3545;\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n  border-color: #dc3545;\n}\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  border-color: rgb(227.5316455696, 96.4683544304, 109.0253164557);\n  background-color: rgb(227.5316455696, 96.4683544304, 109.0253164557);\n}\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #dc3545;\n}\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #dc3545;\n}\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.form-inline {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n.form-inline .form-check {\n  width: 100%;\n}\n@media (min-width: 576px) {\n.form-inline label {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0;\n}\n.form-inline .form-group {\n    display: flex;\n    flex: 0 0 auto;\n    flex-flow: row wrap;\n    align-items: center;\n    margin-bottom: 0;\n}\n.form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n}\n.form-inline .form-control-plaintext {\n    display: inline-block;\n}\n.form-inline .input-group,\n  .form-inline .custom-select {\n    width: auto;\n}\n.form-inline .form-check {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0;\n}\n.form-inline .form-check-input {\n    position: relative;\n    flex-shrink: 0;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n}\n.form-inline .custom-control {\n    align-items: center;\n    justify-content: center;\n}\n.form-inline .custom-control-label {\n    margin-bottom: 0;\n}\n}\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.4rem 1rem;\n  font-size: 0.875rem;\n  line-height: 1;\n  border-radius: 0.1875rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.btn {\n    transition: none;\n}\n}\n.btn:hover {\n  color: #212529;\n  text-decoration: none;\n}\n.btn:focus, .btn.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.btn.disabled, .btn:disabled {\n  opacity: 0.65;\n}\n.btn:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #3a8696;\n  border-color: #3a8696;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: rgb(47.3341346154, 109.3581730769, 122.4158653846);\n  border-color: rgb(43.7788461538, 101.1442307692, 113.2211538462);\n}\n.btn-primary:focus, .btn-primary.focus {\n  color: #fff;\n  background-color: rgb(47.3341346154, 109.3581730769, 122.4158653846);\n  border-color: rgb(43.7788461538, 101.1442307692, 113.2211538462);\n  box-shadow: 0 0 0 0.2rem rgba(87.55, 152.15, 165.75, 0.5);\n}\n.btn-primary.disabled, .btn-primary:disabled {\n  color: #fff;\n  background-color: #3a8696;\n  border-color: #3a8696;\n}\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: rgb(43.7788461538, 101.1442307692, 113.2211538462);\n  border-color: rgb(40.2235576923, 92.9302884615, 104.0264423077);\n}\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(87.55, 152.15, 165.75, 0.5);\n}\n.btn-secondary {\n  color: #212529;\n  background-color: #dde4eb;\n  border-color: #dde4eb;\n}\n.btn-secondary:hover {\n  color: #212529;\n  background-color: rgb(196.9166666667, 208.875, 220.8333333333);\n  border-color: rgb(188.8888888889, 202.5, 216.1111111111);\n}\n.btn-secondary:focus, .btn-secondary.focus {\n  color: #212529;\n  background-color: rgb(196.9166666667, 208.875, 220.8333333333);\n  border-color: rgb(188.8888888889, 202.5, 216.1111111111);\n  box-shadow: 0 0 0 0.2rem rgba(192.8, 199.35, 205.9, 0.5);\n}\n.btn-secondary.disabled, .btn-secondary:disabled {\n  color: #212529;\n  background-color: #dde4eb;\n  border-color: #dde4eb;\n}\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {\n  color: #212529;\n  background-color: rgb(188.8888888889, 202.5, 216.1111111111);\n  border-color: rgb(180.8611111111, 196.125, 211.3888888889);\n}\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(192.8, 199.35, 205.9, 0.5);\n}\n.btn-success {\n  color: #212529;\n  background-color: #19d895;\n  border-color: #19d895;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: rgb(21.0321576763, 181.7178423237, 125.351659751);\n  border-color: rgb(19.7095435685, 170.2904564315, 117.468879668);\n}\n.btn-success:focus, .btn-success.focus {\n  color: #fff;\n  background-color: rgb(21.0321576763, 181.7178423237, 125.351659751);\n  border-color: rgb(19.7095435685, 170.2904564315, 117.468879668);\n  box-shadow: 0 0 0 0.2rem rgba(26.2, 189.15, 132.8, 0.5);\n}\n.btn-success.disabled, .btn-success:disabled {\n  color: #212529;\n  background-color: #19d895;\n  border-color: #19d895;\n}\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active, .show > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: rgb(19.7095435685, 170.2904564315, 117.468879668);\n  border-color: rgb(18.3869294606, 158.8630705394, 109.5860995851);\n}\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus, .show > .btn-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(26.2, 189.15, 132.8, 0.5);\n}\n.btn-info {\n  color: #fff;\n  background-color: #8862e0;\n  border-color: #8862e0;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: rgb(111.7885638298, 66.0571808511, 217.6928191489);\n  border-color: rgb(103.7180851064, 55.4095744681, 215.5904255319);\n}\n.btn-info:focus, .btn-info.focus {\n  color: #fff;\n  background-color: rgb(111.7885638298, 66.0571808511, 217.6928191489);\n  border-color: rgb(103.7180851064, 55.4095744681, 215.5904255319);\n  box-shadow: 0 0 0 0.2rem rgba(153.85, 121.55, 228.65, 0.5);\n}\n.btn-info.disabled, .btn-info:disabled {\n  color: #fff;\n  background-color: #8862e0;\n  border-color: #8862e0;\n}\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active, .show > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: rgb(103.7180851064, 55.4095744681, 215.5904255319);\n  border-color: rgb(95.647606383, 44.7619680851, 213.4880319149);\n}\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus, .show > .btn-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(153.85, 121.55, 228.65, 0.5);\n}\n.btn-warning {\n  color: #212529;\n  background-color: #ffaf00;\n  border-color: #ffaf00;\n}\n.btn-warning:hover {\n  color: #212529;\n  background-color: rgb(216.75, 148.75, 0);\n  border-color: #cc8c00;\n}\n.btn-warning:focus, .btn-warning.focus {\n  color: #212529;\n  background-color: rgb(216.75, 148.75, 0);\n  border-color: #cc8c00;\n  box-shadow: 0 0 0 0.2rem rgba(221.7, 154.3, 6.15, 0.5);\n}\n.btn-warning.disabled, .btn-warning:disabled {\n  color: #212529;\n  background-color: #ffaf00;\n  border-color: #ffaf00;\n}\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active, .show > .btn-warning.dropdown-toggle {\n  color: #fff;\n  background-color: #cc8c00;\n  border-color: rgb(191.25, 131.25, 0);\n}\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(221.7, 154.3, 6.15, 0.5);\n}\n.btn-danger {\n  color: #fff;\n  background-color: #ff6258;\n  border-color: #ff6258;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: rgb(255, 62.0404191617, 49.75);\n  border-color: rgb(255, 50.0538922156, 37);\n}\n.btn-danger:focus, .btn-danger.focus {\n  color: #fff;\n  background-color: rgb(255, 62.0404191617, 49.75);\n  border-color: rgb(255, 50.0538922156, 37);\n  box-shadow: 0 0 0 0.2rem rgba(255, 121.55, 113.05, 0.5);\n}\n.btn-danger.disabled, .btn-danger:disabled {\n  color: #fff;\n  background-color: #ff6258;\n  border-color: #ff6258;\n}\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active, .show > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: rgb(255, 50.0538922156, 37);\n  border-color: rgb(255, 38.0673652695, 24.25);\n}\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 121.55, 113.05, 0.5);\n}\n.btn-light {\n  color: #212529;\n  background-color: #fbfbfb;\n  border-color: #fbfbfb;\n}\n.btn-light:hover {\n  color: #212529;\n  background-color: rgb(231.875, 231.875, 231.875);\n  border-color: rgb(225.5, 225.5, 225.5);\n}\n.btn-light:focus, .btn-light.focus {\n  color: #212529;\n  background-color: rgb(231.875, 231.875, 231.875);\n  border-color: rgb(225.5, 225.5, 225.5);\n  box-shadow: 0 0 0 0.2rem rgba(218.3, 218.9, 219.5, 0.5);\n}\n.btn-light.disabled, .btn-light:disabled {\n  color: #212529;\n  background-color: #fbfbfb;\n  border-color: #fbfbfb;\n}\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active, .show > .btn-light.dropdown-toggle {\n  color: #212529;\n  background-color: rgb(225.5, 225.5, 225.5);\n  border-color: rgb(219.125, 219.125, 219.125);\n}\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus, .show > .btn-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(218.3, 218.9, 219.5, 0.5);\n}\n.btn-dark {\n  color: #fff;\n  background-color: #252C46;\n  border-color: #252C46;\n}\n.btn-dark:hover {\n  color: #fff;\n  background-color: rgb(23.773364486, 28.2710280374, 44.976635514);\n  border-color: rgb(19.3644859813, 23.0280373832, 36.6355140187);\n}\n.btn-dark:focus, .btn-dark.focus {\n  color: #fff;\n  background-color: rgb(23.773364486, 28.2710280374, 44.976635514);\n  border-color: rgb(19.3644859813, 23.0280373832, 36.6355140187);\n  box-shadow: 0 0 0 0.2rem rgba(69.7, 75.65, 97.75, 0.5);\n}\n.btn-dark.disabled, .btn-dark:disabled {\n  color: #fff;\n  background-color: #252C46;\n  border-color: #252C46;\n}\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active, .show > .btn-dark.dropdown-toggle {\n  color: #fff;\n  background-color: rgb(19.3644859813, 23.0280373832, 36.6355140187);\n  border-color: rgb(14.9556074766, 17.785046729, 28.2943925234);\n}\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(69.7, 75.65, 97.75, 0.5);\n}\n.btn-outline-primary {\n  color: #3a8696;\n  border-color: #3a8696;\n}\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: #3a8696;\n  border-color: #3a8696;\n}\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(58, 134, 150, 0.5);\n}\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n  color: #3a8696;\n  background-color: transparent;\n}\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #3a8696;\n  border-color: #3a8696;\n}\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(58, 134, 150, 0.5);\n}\n.btn-outline-secondary {\n  color: #dde4eb;\n  border-color: #dde4eb;\n}\n.btn-outline-secondary:hover {\n  color: #212529;\n  background-color: #dde4eb;\n  border-color: #dde4eb;\n}\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(221, 228, 235, 0.5);\n}\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n  color: #dde4eb;\n  background-color: transparent;\n}\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active, .show > .btn-outline-secondary.dropdown-toggle {\n  color: #212529;\n  background-color: #dde4eb;\n  border-color: #dde4eb;\n}\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(221, 228, 235, 0.5);\n}\n.btn-outline-success {\n  color: #19d895;\n  border-color: #19d895;\n}\n.btn-outline-success:hover {\n  color: #212529;\n  background-color: #19d895;\n  border-color: #19d895;\n}\n.btn-outline-success:focus, .btn-outline-success.focus {\n  box-shadow: 0 0 0 0.2rem rgba(25, 216, 149, 0.5);\n}\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n  color: #19d895;\n  background-color: transparent;\n}\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active, .show > .btn-outline-success.dropdown-toggle {\n  color: #212529;\n  background-color: #19d895;\n  border-color: #19d895;\n}\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(25, 216, 149, 0.5);\n}\n.btn-outline-info {\n  color: #8862e0;\n  border-color: #8862e0;\n}\n.btn-outline-info:hover {\n  color: #fff;\n  background-color: #8862e0;\n  border-color: #8862e0;\n}\n.btn-outline-info:focus, .btn-outline-info.focus {\n  box-shadow: 0 0 0 0.2rem rgba(136, 98, 224, 0.5);\n}\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n  color: #8862e0;\n  background-color: transparent;\n}\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .show > .btn-outline-info.dropdown-toggle {\n  color: #fff;\n  background-color: #8862e0;\n  border-color: #8862e0;\n}\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(136, 98, 224, 0.5);\n}\n.btn-outline-warning {\n  color: #ffaf00;\n  border-color: #ffaf00;\n}\n.btn-outline-warning:hover {\n  color: #212529;\n  background-color: #ffaf00;\n  border-color: #ffaf00;\n}\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 175, 0, 0.5);\n}\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n  color: #ffaf00;\n  background-color: transparent;\n}\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active, .show > .btn-outline-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #ffaf00;\n  border-color: #ffaf00;\n}\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 175, 0, 0.5);\n}\n.btn-outline-danger {\n  color: #ff6258;\n  border-color: #ff6258;\n}\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #ff6258;\n  border-color: #ff6258;\n}\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 98, 88, 0.5);\n}\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n  color: #ff6258;\n  background-color: transparent;\n}\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .show > .btn-outline-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #ff6258;\n  border-color: #ff6258;\n}\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 98, 88, 0.5);\n}\n.btn-outline-light {\n  color: #fbfbfb;\n  border-color: #fbfbfb;\n}\n.btn-outline-light:hover {\n  color: #212529;\n  background-color: #fbfbfb;\n  border-color: #fbfbfb;\n}\n.btn-outline-light:focus, .btn-outline-light.focus {\n  box-shadow: 0 0 0 0.2rem rgba(251, 251, 251, 0.5);\n}\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n  color: #fbfbfb;\n  background-color: transparent;\n}\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active, .show > .btn-outline-light.dropdown-toggle {\n  color: #212529;\n  background-color: #fbfbfb;\n  border-color: #fbfbfb;\n}\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(251, 251, 251, 0.5);\n}\n.btn-outline-dark {\n  color: #252C46;\n  border-color: #252C46;\n}\n.btn-outline-dark:hover {\n  color: #fff;\n  background-color: #252C46;\n  border-color: #252C46;\n}\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n  box-shadow: 0 0 0 0.2rem rgba(37, 44, 70, 0.5);\n}\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n  color: #252C46;\n  background-color: transparent;\n}\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active, .show > .btn-outline-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #252C46;\n  border-color: #252C46;\n}\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(37, 44, 70, 0.5);\n}\n.btn-link {\n  font-weight: 400;\n  color: #007bff;\n  text-decoration: none;\n}\n.btn-link:hover {\n  color: rgb(0, 86.1, 178.5);\n  text-decoration: underline;\n}\n.btn-link:focus, .btn-link.focus {\n  text-decoration: underline;\n}\n.btn-link:disabled, .btn-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n}\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.94rem 1.94rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.1875rem;\n}\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.5rem 0.81rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.1875rem;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 0.5rem;\n}\ninput[type=submit].btn-block,\ninput[type=reset].btn-block,\ninput[type=button].btn-block {\n  width: 100%;\n}\n.fade {\n  transition: opacity 0.15s linear;\n}\n@media (prefers-reduced-motion: reduce) {\n.fade {\n    transition: none;\n}\n}\n.fade:not(.show) {\n  opacity: 0;\n}\n.collapse:not(.show) {\n  display: none;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n.collapsing {\n    transition: none;\n}\n}\n.collapsing.width {\n  width: 0;\n  height: auto;\n  transition: width 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n.collapsing.width {\n    transition: none;\n}\n}\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative;\n}\n.dropdown-toggle {\n  white-space: nowrap;\n}\n.dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n@media (min-width: 576px) {\n.dropdown-menu-sm-left {\n    right: auto;\n    left: 0;\n}\n.dropdown-menu-sm-right {\n    right: 0;\n    left: auto;\n}\n}\n@media (min-width: 768px) {\n.dropdown-menu-md-left {\n    right: auto;\n    left: 0;\n}\n.dropdown-menu-md-right {\n    right: 0;\n    left: auto;\n}\n}\n@media (min-width: 992px) {\n.dropdown-menu-lg-left {\n    right: auto;\n    left: 0;\n}\n.dropdown-menu-lg-right {\n    right: 0;\n    left: auto;\n}\n}\n@media (min-width: 1200px) {\n.dropdown-menu-xl-left {\n    right: auto;\n    left: 0;\n}\n.dropdown-menu-xl-right {\n    right: 0;\n    left: auto;\n}\n}\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropright .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropright .dropdown-toggle::after {\n  vertical-align: 0;\n}\n.dropleft .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n.dropleft .dropdown-toggle::after {\n  display: none;\n}\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0;\n}\n.dropdown-menu[x-placement^=top], .dropdown-menu[x-placement^=right], .dropdown-menu[x-placement^=bottom], .dropdown-menu[x-placement^=left] {\n  right: auto;\n  bottom: auto;\n}\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.dropdown-item:hover, .dropdown-item:focus {\n  color: rgb(21.6283783784, 24.25, 26.8716216216);\n  text-decoration: none;\n  background-color: #e9ecef;\n}\n.dropdown-item.active, .dropdown-item:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #007bff;\n}\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: #adb5bd;\n  pointer-events: none;\n  background-color: transparent;\n}\n.dropdown-menu.show {\n  display: block;\n}\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1.5rem;\n  color: #212529;\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  flex: 1 1 auto;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 1;\n}\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 1;\n}\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.btn-toolbar .input-group {\n  width: auto;\n}\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px;\n}\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropright .dropdown-toggle-split::after {\n  margin-left: 0;\n}\n.dropleft .dropdown-toggle-split::before {\n  margin-right: 0;\n}\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.6075rem;\n  padding-left: 0.6075rem;\n}\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 1.455rem;\n  padding-left: 1.455rem;\n}\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group {\n  width: 100%;\n}\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) {\n  margin-top: -1px;\n}\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0;\n}\n.btn-group-toggle > .btn input[type=radio],\n.btn-group-toggle > .btn input[type=checkbox],\n.btn-group-toggle > .btn-group > .btn input[type=radio],\n.btn-group-toggle > .btn-group > .btn input[type=checkbox] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group > .form-control,\n.input-group > .form-control-plaintext,\n.input-group > .custom-select,\n.input-group > .custom-file {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  min-width: 0;\n  margin-bottom: 0;\n}\n.input-group > .form-control + .form-control,\n.input-group > .form-control + .custom-select,\n.input-group > .form-control + .custom-file,\n.input-group > .form-control-plaintext + .form-control,\n.input-group > .form-control-plaintext + .custom-select,\n.input-group > .form-control-plaintext + .custom-file,\n.input-group > .custom-select + .form-control,\n.input-group > .custom-select + .custom-select,\n.input-group > .custom-select + .custom-file,\n.input-group > .custom-file + .form-control,\n.input-group > .custom-file + .custom-select,\n.input-group > .custom-file + .custom-file {\n  margin-left: -1px;\n}\n.input-group > .form-control:focus,\n.input-group > .custom-select:focus,\n.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\n  z-index: 3;\n}\n.input-group > .custom-file .custom-file-input:focus {\n  z-index: 4;\n}\n.input-group > .form-control:not(:first-child),\n.input-group > .custom-select:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group > .custom-file {\n  display: flex;\n  align-items: center;\n}\n.input-group > .custom-file:not(:last-child) .custom-file-label, .input-group > .custom-file:not(:last-child) .custom-file-label::after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > .custom-file:not(:first-child) .custom-file-label {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group:not(.has-validation) > .form-control:not(:last-child),\n.input-group:not(.has-validation) > .custom-select:not(:last-child),\n.input-group:not(.has-validation) > .custom-file:not(:last-child) .custom-file-label,\n.input-group:not(.has-validation) > .custom-file:not(:last-child) .custom-file-label::after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group.has-validation > .form-control:nth-last-child(n+3),\n.input-group.has-validation > .custom-select:nth-last-child(n+3),\n.input-group.has-validation > .custom-file:nth-last-child(n+3) .custom-file-label,\n.input-group.has-validation > .custom-file:nth-last-child(n+3) .custom-file-label::after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group-prepend,\n.input-group-append {\n  display: flex;\n}\n.input-group-prepend .btn,\n.input-group-append .btn {\n  position: relative;\n  z-index: 2;\n}\n.input-group-prepend .btn:focus,\n.input-group-append .btn:focus {\n  z-index: 3;\n}\n.input-group-prepend .btn + .btn,\n.input-group-prepend .btn + .input-group-text,\n.input-group-prepend .input-group-text + .input-group-text,\n.input-group-prepend .input-group-text + .btn,\n.input-group-append .btn + .btn,\n.input-group-append .btn + .input-group-text,\n.input-group-append .input-group-text + .input-group-text,\n.input-group-append .input-group-text + .btn {\n  margin-left: -1px;\n}\n.input-group-prepend {\n  margin-right: -1px;\n}\n.input-group-append {\n  margin-left: -1px;\n}\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0.56rem 1.375rem;\n  margin-bottom: 0;\n  font-size: 0.85rem;\n  font-weight: 400;\n  line-height: 1;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 2px;\n}\n.input-group-text input[type=radio],\n.input-group-text input[type=checkbox] {\n  margin-top: 0;\n}\n.input-group-lg > .form-control:not(textarea),\n.input-group-lg > .custom-select {\n  height: calc(1.5em + 1rem + 2px);\n}\n.input-group-lg > .form-control,\n.input-group-lg > .custom-select,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  padding: 0.94rem 1.94rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  border-radius: 0.3rem;\n}\n.input-group-sm > .form-control:not(textarea),\n.input-group-sm > .custom-select {\n  height: calc(1.5em + 0.5rem + 2px);\n}\n.input-group-sm > .form-control,\n.input-group-sm > .custom-select,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  padding: 0.5rem 0.81rem;\n  font-size: 0.875rem;\n  line-height: 1;\n  border-radius: 0.2rem;\n}\n.input-group-lg > .custom-select,\n.input-group-sm > .custom-select {\n  padding-right: 1.75rem;\n}\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group:not(.has-validation) > .input-group-append:not(:last-child) > .btn,\n.input-group:not(.has-validation) > .input-group-append:not(:last-child) > .input-group-text,\n.input-group.has-validation > .input-group-append:nth-last-child(n+3) > .btn,\n.input-group.has-validation > .input-group-append:nth-last-child(n+3) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.custom-control {\n  position: relative;\n  z-index: 1;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.75rem;\n  print-color-adjust: exact;\n}\n.custom-control-inline {\n  display: inline-flex;\n  margin-right: 1rem;\n}\n.custom-control-input {\n  position: absolute;\n  left: 0;\n  z-index: -1;\n  width: 1.25rem;\n  height: 1.375rem;\n  opacity: 0;\n}\n.custom-control-input:checked ~ .custom-control-label::before {\n  color: #fff;\n  border-color: #007bff;\n  background-color: #007bff;\n}\n.custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: rgb(127.5, 189, 255);\n}\n.custom-control-input:not(:disabled):active ~ .custom-control-label::before {\n  color: #fff;\n  background-color: rgb(178.5, 215.4, 255);\n  border-color: rgb(178.5, 215.4, 255);\n}\n.custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label {\n  color: #6c757d;\n}\n.custom-control-input[disabled] ~ .custom-control-label::before, .custom-control-input:disabled ~ .custom-control-label::before {\n  background-color: #e9ecef;\n}\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  vertical-align: top;\n}\n.custom-control-label::before {\n  position: absolute;\n  top: 0.125rem;\n  left: -1.75rem;\n  display: block;\n  width: 1.25rem;\n  height: 1.25rem;\n  pointer-events: none;\n  content: \"\";\n  background-color: #fff;\n  border: 1px solid #adb5bd;\n}\n.custom-control-label::after {\n  position: absolute;\n  top: 0.125rem;\n  left: -1.75rem;\n  display: block;\n  width: 1.25rem;\n  height: 1.25rem;\n  content: \"\";\n  background: 50%/50% 50% no-repeat;\n}\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem;\n}\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\");\n}\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  border-color: #007bff;\n  background-color: #007bff;\n}\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\");\n}\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n.custom-radio .custom-control-label::before {\n  border-radius: 50%;\n}\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\n}\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n.custom-switch {\n  padding-left: 2.75rem;\n}\n.custom-switch .custom-control-label::before {\n  left: -2.75rem;\n  width: 2.25rem;\n  pointer-events: all;\n  border-radius: 50px;\n}\n.custom-switch .custom-control-label::after {\n  top: calc(0.125rem + 2px);\n  left: calc(-2.75rem + 2px);\n  width: 1rem;\n  height: 1rem;\n  background-color: #adb5bd;\n  border-radius: 50px;\n  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.custom-switch .custom-control-label::after {\n    transition: none;\n}\n}\n.custom-switch .custom-control-input:checked ~ .custom-control-label::after {\n  background-color: #fff;\n  transform: translateX(1rem);\n}\n.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0.75rem center/8px 10px no-repeat;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.custom-select:focus {\n  border-color: rgb(127.5, 189, 255);\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-select:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n.custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\n  height: auto;\n  padding-right: 0.75rem;\n  background-image: none;\n}\n.custom-select:disabled {\n  color: #6c757d;\n  background-color: #e9ecef;\n}\n.custom-select::-ms-expand {\n  display: none;\n}\n.custom-select:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #495057;\n}\n.custom-select-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem;\n}\n.custom-select-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem;\n}\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin-bottom: 0;\n}\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin: 0;\n  overflow: hidden;\n  opacity: 0;\n}\n.custom-file-input:focus ~ .custom-file-label {\n  border-color: rgb(127.5, 189, 255);\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-file-input[disabled] ~ .custom-file-label, .custom-file-input:disabled ~ .custom-file-label {\n  background-color: #e9ecef;\n}\n.custom-file-input:lang(en) ~ .custom-file-label::after {\n  content: \"Browse\";\n}\n.custom-file-input ~ .custom-file-label[data-browse]::after {\n  content: attr(data-browse);\n}\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  overflow: hidden;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.custom-file-label::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(1.5em + 0.75rem);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: \"Browse\";\n  background-color: #e9ecef;\n  border-left: inherit;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n.custom-range {\n  width: 100%;\n  height: 1.4rem;\n  padding: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.custom-range:focus {\n  outline: 0;\n}\n.custom-range:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-range:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-range:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-range::-moz-focus-outer {\n  border: 0;\n}\n.custom-range::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n          appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n.custom-range::-webkit-slider-thumb {\n    -webkit-transition: none;\n    transition: none;\n}\n}\n.custom-range::-webkit-slider-thumb:active {\n  background-color: rgb(178.5, 215.4, 255);\n}\n.custom-range::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.custom-range::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -moz-appearance: none;\n       appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n.custom-range::-moz-range-thumb {\n    -moz-transition: none;\n    transition: none;\n}\n}\n.custom-range::-moz-range-thumb:active {\n  background-color: rgb(178.5, 215.4, 255);\n}\n.custom-range::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.custom-range::-ms-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: 0;\n  margin-right: 0.2rem;\n  margin-left: 0.2rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  -ms-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n.custom-range::-ms-thumb {\n    -ms-transition: none;\n    transition: none;\n}\n}\n.custom-range::-ms-thumb:active {\n  background-color: rgb(178.5, 215.4, 255);\n}\n.custom-range::-ms-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0.5rem;\n}\n.custom-range::-ms-fill-lower {\n  background-color: #dee2e6;\n  border-radius: 1rem;\n}\n.custom-range::-ms-fill-upper {\n  margin-right: 15px;\n  background-color: #dee2e6;\n  border-radius: 1rem;\n}\n.custom-range:disabled::-webkit-slider-thumb {\n  background-color: #adb5bd;\n}\n.custom-range:disabled::-webkit-slider-runnable-track {\n  cursor: default;\n}\n.custom-range:disabled::-moz-range-thumb {\n  background-color: #adb5bd;\n}\n.custom-range:disabled::-moz-range-track {\n  cursor: default;\n}\n.custom-range:disabled::-ms-thumb {\n  background-color: #adb5bd;\n}\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.custom-control-label::before,\n  .custom-file-label,\n  .custom-select {\n    transition: none;\n}\n}\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n.nav-link:hover, .nav-link:focus {\n  text-decoration: none;\n}\n.nav-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: default;\n}\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6;\n}\n.nav-tabs .nav-link {\n  margin-bottom: -1px;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  isolation: isolate;\n  border-color: #e9ecef #e9ecef #dee2e6;\n}\n.nav-tabs .nav-link.disabled {\n  color: #6c757d;\n  background-color: transparent;\n  border-color: transparent;\n}\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: #495057;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.nav-pills .nav-link {\n  background: none;\n  border: 0;\n  border-radius: 0.25rem;\n}\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #007bff;\n}\n.nav-fill > .nav-link,\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center;\n}\n.nav-justified > .nav-link,\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center;\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n}\n.navbar .container,\n.navbar .container-fluid,\n.navbar .container-sm,\n.navbar .container-md,\n.navbar .container-lg,\n.navbar .container-xl {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n}\n.navbar-brand:hover, .navbar-brand:focus {\n  text-decoration: none;\n}\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.navbar-nav .nav-link {\n  padding-right: 0;\n  padding-left: 0;\n}\n.navbar-nav .dropdown-menu {\n  position: static;\n  float: none;\n}\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center;\n}\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n.navbar-toggler:hover, .navbar-toggler:focus {\n  text-decoration: none;\n}\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: 50%/100% 100% no-repeat;\n}\n.navbar-nav-scroll {\n  max-height: 75vh;\n  overflow-y: auto;\n}\n@media (max-width: 575.98px) {\n.navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid,\n  .navbar-expand-sm > .container-sm,\n  .navbar-expand-sm > .container-md,\n  .navbar-expand-sm > .container-lg,\n  .navbar-expand-sm > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n}\n}\n@media (min-width: 576px) {\n.navbar-expand-sm {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n}\n.navbar-expand-sm .navbar-nav {\n    flex-direction: row;\n}\n.navbar-expand-sm .navbar-nav .dropdown-menu {\n    position: absolute;\n}\n.navbar-expand-sm .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n}\n.navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid,\n  .navbar-expand-sm > .container-sm,\n  .navbar-expand-sm > .container-md,\n  .navbar-expand-sm > .container-lg,\n  .navbar-expand-sm > .container-xl {\n    flex-wrap: nowrap;\n}\n.navbar-expand-sm .navbar-nav-scroll {\n    overflow: visible;\n}\n.navbar-expand-sm .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n}\n.navbar-expand-sm .navbar-toggler {\n    display: none;\n}\n}\n@media (max-width: 767.98px) {\n.navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid,\n  .navbar-expand-md > .container-sm,\n  .navbar-expand-md > .container-md,\n  .navbar-expand-md > .container-lg,\n  .navbar-expand-md > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n}\n}\n@media (min-width: 768px) {\n.navbar-expand-md {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n}\n.navbar-expand-md .navbar-nav {\n    flex-direction: row;\n}\n.navbar-expand-md .navbar-nav .dropdown-menu {\n    position: absolute;\n}\n.navbar-expand-md .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n}\n.navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid,\n  .navbar-expand-md > .container-sm,\n  .navbar-expand-md > .container-md,\n  .navbar-expand-md > .container-lg,\n  .navbar-expand-md > .container-xl {\n    flex-wrap: nowrap;\n}\n.navbar-expand-md .navbar-nav-scroll {\n    overflow: visible;\n}\n.navbar-expand-md .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n}\n.navbar-expand-md .navbar-toggler {\n    display: none;\n}\n}\n@media (max-width: 991.98px) {\n.navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid,\n  .navbar-expand-lg > .container-sm,\n  .navbar-expand-lg > .container-md,\n  .navbar-expand-lg > .container-lg,\n  .navbar-expand-lg > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n}\n}\n@media (min-width: 992px) {\n.navbar-expand-lg {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n}\n.navbar-expand-lg .navbar-nav {\n    flex-direction: row;\n}\n.navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: absolute;\n}\n.navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n}\n.navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid,\n  .navbar-expand-lg > .container-sm,\n  .navbar-expand-lg > .container-md,\n  .navbar-expand-lg > .container-lg,\n  .navbar-expand-lg > .container-xl {\n    flex-wrap: nowrap;\n}\n.navbar-expand-lg .navbar-nav-scroll {\n    overflow: visible;\n}\n.navbar-expand-lg .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n}\n.navbar-expand-lg .navbar-toggler {\n    display: none;\n}\n}\n@media (max-width: 1199.98px) {\n.navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid,\n  .navbar-expand-xl > .container-sm,\n  .navbar-expand-xl > .container-md,\n  .navbar-expand-xl > .container-lg,\n  .navbar-expand-xl > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n}\n}\n@media (min-width: 1200px) {\n.navbar-expand-xl {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n}\n.navbar-expand-xl .navbar-nav {\n    flex-direction: row;\n}\n.navbar-expand-xl .navbar-nav .dropdown-menu {\n    position: absolute;\n}\n.navbar-expand-xl .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n}\n.navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid,\n  .navbar-expand-xl > .container-sm,\n  .navbar-expand-xl > .container-md,\n  .navbar-expand-xl > .container-lg,\n  .navbar-expand-xl > .container-xl {\n    flex-wrap: nowrap;\n}\n.navbar-expand-xl .navbar-nav-scroll {\n    overflow: visible;\n}\n.navbar-expand-xl .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n}\n.navbar-expand-xl .navbar-toggler {\n    display: none;\n}\n}\n.navbar-expand {\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n}\n.navbar-expand > .container,\n.navbar-expand > .container-fluid,\n.navbar-expand > .container-sm,\n.navbar-expand > .container-md,\n.navbar-expand > .container-lg,\n.navbar-expand > .container-xl {\n  padding-right: 0;\n  padding-left: 0;\n}\n.navbar-expand .navbar-nav {\n  flex-direction: row;\n}\n.navbar-expand .navbar-nav .dropdown-menu {\n  position: absolute;\n}\n.navbar-expand .navbar-nav .nav-link {\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n.navbar-expand > .container,\n.navbar-expand > .container-fluid,\n.navbar-expand > .container-sm,\n.navbar-expand > .container-md,\n.navbar-expand > .container-lg,\n.navbar-expand > .container-xl {\n  flex-wrap: nowrap;\n}\n.navbar-expand .navbar-nav-scroll {\n  overflow: visible;\n}\n.navbar-expand .navbar-collapse {\n  display: flex !important;\n  flex-basis: auto;\n}\n.navbar-expand .navbar-toggler {\n  display: none;\n}\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-nav .nav-link {\n  color: #002c5f;\n}\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar-light .navbar-nav .nav-link.disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-toggler {\n  color: #002c5f;\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n.navbar-light .navbar-text {\n  color: #002c5f;\n}\n.navbar-light .navbar-text a {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-dark .navbar-brand {\n  color: #fff;\n}\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n  color: #fff;\n}\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n  color: rgba(255, 255, 255, 0.75);\n}\n.navbar-dark .navbar-nav .nav-link.disabled {\n  color: rgba(255, 255, 255, 0.25);\n}\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff;\n}\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5);\n}\n.navbar-dark .navbar-text a {\n  color: #fff;\n}\n.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n  color: #fff;\n}\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #dde4eb;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n.card > hr {\n  margin-right: 0;\n  margin-left: 0;\n}\n.card > .list-group {\n  border-top: inherit;\n  border-bottom: inherit;\n}\n.card > .list-group:first-child {\n  border-top-width: 0;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.card > .list-group:last-child {\n  border-bottom-width: 0;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n.card > .card-header + .list-group,\n.card > .list-group + .card-footer {\n  border-top: 0;\n}\n.card-body {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.25rem;\n}\n.card-title {\n  margin-bottom: 0.75rem;\n}\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0;\n}\n.card-text:last-child {\n  margin-bottom: 0;\n}\n.card-link:hover {\n  text-decoration: none;\n}\n.card-link + .card-link {\n  margin-left: 1.25rem;\n}\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-footer:last-child {\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0;\n}\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem;\n}\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n  border-radius: calc(0.25rem - 1px);\n}\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  flex-shrink: 0;\n  width: 100%;\n}\n.card-img,\n.card-img-top {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.card-img,\n.card-img-bottom {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n.card-deck .card {\n  margin-bottom: 15px;\n}\n@media (min-width: 576px) {\n.card-deck {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n}\n.card-deck .card {\n    flex: 1 0 0%;\n    margin-right: 15px;\n    margin-bottom: 0;\n    margin-left: 15px;\n}\n}\n.card-group > .card {\n  margin-bottom: 15px;\n}\n@media (min-width: 576px) {\n.card-group {\n    display: flex;\n    flex-flow: row wrap;\n}\n.card-group > .card {\n    flex: 1 0 0%;\n    margin-bottom: 0;\n}\n.card-group > .card + .card {\n    margin-left: 0;\n    border-left: 0;\n}\n.card-group > .card:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.card-group > .card:not(:last-child) .card-img-top,\n  .card-group > .card:not(:last-child) .card-header {\n    border-top-right-radius: 0;\n}\n.card-group > .card:not(:last-child) .card-img-bottom,\n  .card-group > .card:not(:last-child) .card-footer {\n    border-bottom-right-radius: 0;\n}\n.card-group > .card:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.card-group > .card:not(:first-child) .card-img-top,\n  .card-group > .card:not(:first-child) .card-header {\n    border-top-left-radius: 0;\n}\n.card-group > .card:not(:first-child) .card-img-bottom,\n  .card-group > .card:not(:first-child) .card-footer {\n    border-bottom-left-radius: 0;\n}\n}\n.card-columns .card {\n  margin-bottom: 0.75rem;\n}\n@media (min-width: 576px) {\n.card-columns {\n    -moz-column-count: 3;\n         column-count: 3;\n    -moz-column-gap: 1.25rem;\n         column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1;\n}\n.card-columns .card {\n    display: inline-block;\n    width: 100%;\n}\n}\n.accordion {\n  overflow-anchor: none;\n}\n.accordion > .card {\n  overflow: hidden;\n}\n.accordion > .card:not(:last-of-type) {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.accordion > .card:not(:first-of-type) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.accordion > .card > .card-header {\n  border-radius: 0;\n  margin-bottom: -1px;\n}\n.breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.56rem 1.13rem;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n  list-style: none;\n  background-color: transparent;\n  border-radius: 0.25rem;\n}\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem;\n}\n.breadcrumb-item + .breadcrumb-item::before {\n  float: left;\n  padding-right: 0.5rem;\n  color: #6c757d;\n  content: \"/\";\n}\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline;\n}\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none;\n}\n.breadcrumb-item.active {\n  color: #6c757d;\n}\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n}\n.page-link:hover {\n  z-index: 2;\n  color: rgb(0, 86.1, 178.5);\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.page-link:focus {\n  z-index: 3;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.page-item.active .page-link {\n  z-index: 3;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.badge {\n    transition: none;\n}\n}\na.badge:hover, a.badge:focus {\n  text-decoration: none;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n.badge-primary {\n  color: #fff;\n  background-color: #3a8696;\n}\na.badge-primary:hover, a.badge-primary:focus {\n  color: #fff;\n  background-color: rgb(43.7788461538, 101.1442307692, 113.2211538462);\n}\na.badge-primary:focus, a.badge-primary.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(58, 134, 150, 0.5);\n}\n.badge-secondary {\n  color: #212529;\n  background-color: #dde4eb;\n}\na.badge-secondary:hover, a.badge-secondary:focus {\n  color: #212529;\n  background-color: rgb(188.8888888889, 202.5, 216.1111111111);\n}\na.badge-secondary:focus, a.badge-secondary.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(221, 228, 235, 0.5);\n}\n.badge-success, .preview-list .preview-item .preview-thumbnail .badge.badge-online {\n  color: #212529;\n  background-color: #19d895;\n}\na.badge-success:hover, .preview-list .preview-item .preview-thumbnail a.badge.badge-online:hover, a.badge-success:focus, .preview-list .preview-item .preview-thumbnail a.badge.badge-online:focus {\n  color: #212529;\n  background-color: rgb(19.7095435685, 170.2904564315, 117.468879668);\n}\na.badge-success:focus, .preview-list .preview-item .preview-thumbnail a.badge.badge-online:focus, a.badge-success.focus, .preview-list .preview-item .preview-thumbnail a.focus.badge.badge-online {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(25, 216, 149, 0.5);\n}\n.badge-info, .preview-list .preview-item .preview-thumbnail .badge.badge-offline {\n  color: #fff;\n  background-color: #8862e0;\n}\na.badge-info:hover, .preview-list .preview-item .preview-thumbnail a.badge.badge-offline:hover, a.badge-info:focus, .preview-list .preview-item .preview-thumbnail a.badge.badge-offline:focus {\n  color: #fff;\n  background-color: rgb(103.7180851064, 55.4095744681, 215.5904255319);\n}\na.badge-info:focus, .preview-list .preview-item .preview-thumbnail a.badge.badge-offline:focus, a.badge-info.focus, .preview-list .preview-item .preview-thumbnail a.focus.badge.badge-offline {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(136, 98, 224, 0.5);\n}\n.badge-warning, .preview-list .preview-item .preview-thumbnail .badge.badge-busy {\n  color: #212529;\n  background-color: #ffaf00;\n}\na.badge-warning:hover, .preview-list .preview-item .preview-thumbnail a.badge.badge-busy:hover, a.badge-warning:focus, .preview-list .preview-item .preview-thumbnail a.badge.badge-busy:focus {\n  color: #212529;\n  background-color: #cc8c00;\n}\na.badge-warning:focus, .preview-list .preview-item .preview-thumbnail a.badge.badge-busy:focus, a.badge-warning.focus, .preview-list .preview-item .preview-thumbnail a.focus.badge.badge-busy {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(255, 175, 0, 0.5);\n}\n.badge-danger {\n  color: #fff;\n  background-color: #ff6258;\n}\na.badge-danger:hover, a.badge-danger:focus {\n  color: #fff;\n  background-color: rgb(255, 50.0538922156, 37);\n}\na.badge-danger:focus, a.badge-danger.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(255, 98, 88, 0.5);\n}\n.badge-light {\n  color: #212529;\n  background-color: #fbfbfb;\n}\na.badge-light:hover, a.badge-light:focus {\n  color: #212529;\n  background-color: rgb(225.5, 225.5, 225.5);\n}\na.badge-light:focus, a.badge-light.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(251, 251, 251, 0.5);\n}\n.badge-dark {\n  color: #fff;\n  background-color: #252C46;\n}\na.badge-dark:hover, a.badge-dark:focus {\n  color: #fff;\n  background-color: rgb(19.3644859813, 23.0280373832, 36.6355140187);\n}\na.badge-dark:focus, a.badge-dark.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(37, 44, 70, 0.5);\n}\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem;\n}\n@media (min-width: 576px) {\n.jumbotron {\n    padding: 4rem 2rem;\n}\n}\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0;\n}\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n.alert-heading {\n  color: inherit;\n}\n.alert-link {\n  font-weight: 700;\n}\n.alert-dismissible {\n  padding-right: 4rem;\n}\n.alert-dismissible .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n.alert-primary {\n  color: rgb(30.16, 69.68, 78);\n  background-color: rgb(215.6, 230.8, 234);\n  border-color: rgb(199.84, 221.12, 225.6);\n}\n.alert-primary hr {\n  border-top-color: rgb(183.2058940397, 210.9031125828, 216.7341059603);\n}\n.alert-primary .alert-link {\n  color: rgb(15.9388461538, 36.8242307692, 41.2211538462);\n}\n.alert-secondary {\n  color: rgb(114.92, 118.56, 122.2);\n  background-color: rgb(248.2, 249.6, 251);\n  border-color: rgb(245.48, 247.44, 249.4);\n}\n.alert-secondary hr {\n  border-top-color: rgb(229.4244444444, 234.69, 239.9555555556);\n}\n.alert-secondary .alert-link {\n  color: rgb(90.2028947368, 93.06, 95.9171052632);\n}\n.alert-success {\n  color: rgb(13, 112.32, 77.48);\n  background-color: rgb(209, 247.2, 233.8);\n  border-color: rgb(190.6, 244.08, 225.32);\n}\n.alert-success hr {\n  border-top-color: rgb(168.7970260223, 240.3829739777, 215.2716728625);\n}\n.alert-success .alert-link {\n  color: rgb(7.7095435685, 66.6104564315, 45.948879668);\n}\n.alert-info {\n  color: rgb(70.72, 50.96, 116.48);\n  background-color: rgb(231.2, 223.6, 248.8);\n  border-color: rgb(221.68, 211.04, 246.32);\n}\n.alert-info hr {\n  border-top-color: rgb(205.5390425532, 189.744787234, 242.115212766);\n}\n.alert-info .alert-link {\n  color: rgb(49.1796273292, 35.4382608696, 81.0017391304);\n}\n.alert-warning {\n  color: rgb(132.6, 91, 0);\n  background-color: #ffefcc;\n  border-color: rgb(255, 232.6, 183.6);\n}\n.alert-warning hr {\n  border-top-color: rgb(255, 224.6, 158.1);\n}\n.alert-warning .alert-link {\n  color: rgb(81.6, 56, 0);\n}\n.alert-danger {\n  color: rgb(132.6, 50.96, 45.76);\n  background-color: rgb(255, 223.6, 221.6);\n  border-color: rgb(255, 211.04, 208.24);\n}\n.alert-danger hr {\n  border-top-color: rgb(255, 187.0669461078, 182.74);\n}\n.alert-danger .alert-link {\n  color: rgb(94.684548105, 36.3885714286, 32.675451895);\n}\n.alert-light {\n  color: rgb(130.52, 130.52, 130.52);\n  background-color: rgb(254.2, 254.2, 254.2);\n  border-color: rgb(253.88, 253.88, 253.88);\n}\n.alert-light hr {\n  border-top-color: rgb(241.13, 241.13, 241.13);\n}\n.alert-light .alert-link {\n  color: rgb(105.02, 105.02, 105.02);\n}\n.alert-dark {\n  color: rgb(19.24, 22.88, 36.4);\n  background-color: rgb(211.4, 212.8, 218);\n  border-color: rgb(193.96, 195.92, 203.2);\n}\n.alert-dark hr {\n  border-top-color: rgb(180.165955335, 182.5688833747, 191.494044665);\n}\n.alert-dark .alert-link {\n  color: rgb(1.6044859813, 1.9080373832, 3.0355140187);\n}\n@keyframes progress-bar-stripes {\nfrom {\n    background-position: 1rem 0;\n}\nto {\n    background-position: 0 0;\n}\n}\n.progress {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  line-height: 0;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #007bff;\n  transition: width 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n.progress-bar {\n    transition: none;\n}\n}\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n.progress-bar-animated {\n  animation: 1s linear infinite progress-bar-stripes;\n}\n@media (prefers-reduced-motion: reduce) {\n.progress-bar-animated {\n    animation: none;\n}\n}\n.media {\n  display: flex;\n  align-items: flex-start;\n}\n.media-body {\n  flex: 1;\n}\n.list-group {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: 0.25rem;\n}\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n.list-group-item-action:hover, .list-group-item-action:focus {\n  z-index: 1;\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n.list-group-item-action:active {\n  color: #212529;\n  background-color: #e9ecef;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.list-group-item:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.list-group-item:last-child {\n  border-bottom-right-radius: inherit;\n  border-bottom-left-radius: inherit;\n}\n.list-group-item.disabled, .list-group-item:disabled {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: #fff;\n}\n.list-group-item.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.list-group-item + .list-group-item {\n  border-top-width: 0;\n}\n.list-group-item + .list-group-item.active {\n  margin-top: -1px;\n  border-top-width: 1px;\n}\n.list-group-horizontal {\n  flex-direction: row;\n}\n.list-group-horizontal > .list-group-item:first-child {\n  border-bottom-left-radius: 0.25rem;\n  border-top-right-radius: 0;\n}\n.list-group-horizontal > .list-group-item:last-child {\n  border-top-right-radius: 0.25rem;\n  border-bottom-left-radius: 0;\n}\n.list-group-horizontal > .list-group-item.active {\n  margin-top: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item {\n  border-top-width: 1px;\n  border-left-width: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item.active {\n  margin-left: -1px;\n  border-left-width: 1px;\n}\n@media (min-width: 576px) {\n.list-group-horizontal-sm {\n    flex-direction: row;\n}\n.list-group-horizontal-sm > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n}\n.list-group-horizontal-sm > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n}\n.list-group-horizontal-sm > .list-group-item.active {\n    margin-top: 0;\n}\n.list-group-horizontal-sm > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n}\n.list-group-horizontal-sm > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n}\n}\n@media (min-width: 768px) {\n.list-group-horizontal-md {\n    flex-direction: row;\n}\n.list-group-horizontal-md > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n}\n.list-group-horizontal-md > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n}\n.list-group-horizontal-md > .list-group-item.active {\n    margin-top: 0;\n}\n.list-group-horizontal-md > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n}\n.list-group-horizontal-md > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n}\n}\n@media (min-width: 992px) {\n.list-group-horizontal-lg {\n    flex-direction: row;\n}\n.list-group-horizontal-lg > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n}\n.list-group-horizontal-lg > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n}\n.list-group-horizontal-lg > .list-group-item.active {\n    margin-top: 0;\n}\n.list-group-horizontal-lg > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n}\n.list-group-horizontal-lg > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n}\n}\n@media (min-width: 1200px) {\n.list-group-horizontal-xl {\n    flex-direction: row;\n}\n.list-group-horizontal-xl > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n}\n.list-group-horizontal-xl > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n}\n.list-group-horizontal-xl > .list-group-item.active {\n    margin-top: 0;\n}\n.list-group-horizontal-xl > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n}\n.list-group-horizontal-xl > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n}\n}\n.list-group-flush {\n  border-radius: 0;\n}\n.list-group-flush > .list-group-item {\n  border-width: 0 0 1px;\n}\n.list-group-flush > .list-group-item:last-child {\n  border-bottom-width: 0;\n}\n.list-group-item-primary {\n  color: rgb(30.16, 69.68, 78);\n  background-color: rgb(199.84, 221.12, 225.6);\n}\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n  color: rgb(30.16, 69.68, 78);\n  background-color: rgb(183.2058940397, 210.9031125828, 216.7341059603);\n}\n.list-group-item-primary.list-group-item-action.active {\n  color: #ffffff;\n  background-color: rgb(30.16, 69.68, 78);\n  border-color: rgb(30.16, 69.68, 78);\n}\n.list-group-item-secondary {\n  color: rgb(114.92, 118.56, 122.2);\n  background-color: rgb(245.48, 247.44, 249.4);\n}\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n  color: rgb(114.92, 118.56, 122.2);\n  background-color: rgb(229.4244444444, 234.69, 239.9555555556);\n}\n.list-group-item-secondary.list-group-item-action.active {\n  color: #ffffff;\n  background-color: rgb(114.92, 118.56, 122.2);\n  border-color: rgb(114.92, 118.56, 122.2);\n}\n.list-group-item-success {\n  color: rgb(13, 112.32, 77.48);\n  background-color: rgb(190.6, 244.08, 225.32);\n}\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n  color: rgb(13, 112.32, 77.48);\n  background-color: rgb(168.7970260223, 240.3829739777, 215.2716728625);\n}\n.list-group-item-success.list-group-item-action.active {\n  color: #ffffff;\n  background-color: rgb(13, 112.32, 77.48);\n  border-color: rgb(13, 112.32, 77.48);\n}\n.list-group-item-info {\n  color: rgb(70.72, 50.96, 116.48);\n  background-color: rgb(221.68, 211.04, 246.32);\n}\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n  color: rgb(70.72, 50.96, 116.48);\n  background-color: rgb(205.5390425532, 189.744787234, 242.115212766);\n}\n.list-group-item-info.list-group-item-action.active {\n  color: #ffffff;\n  background-color: rgb(70.72, 50.96, 116.48);\n  border-color: rgb(70.72, 50.96, 116.48);\n}\n.list-group-item-warning {\n  color: rgb(132.6, 91, 0);\n  background-color: rgb(255, 232.6, 183.6);\n}\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n  color: rgb(132.6, 91, 0);\n  background-color: rgb(255, 224.6, 158.1);\n}\n.list-group-item-warning.list-group-item-action.active {\n  color: #ffffff;\n  background-color: rgb(132.6, 91, 0);\n  border-color: rgb(132.6, 91, 0);\n}\n.list-group-item-danger {\n  color: rgb(132.6, 50.96, 45.76);\n  background-color: rgb(255, 211.04, 208.24);\n}\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n  color: rgb(132.6, 50.96, 45.76);\n  background-color: rgb(255, 187.0669461078, 182.74);\n}\n.list-group-item-danger.list-group-item-action.active {\n  color: #ffffff;\n  background-color: rgb(132.6, 50.96, 45.76);\n  border-color: rgb(132.6, 50.96, 45.76);\n}\n.list-group-item-light {\n  color: rgb(130.52, 130.52, 130.52);\n  background-color: rgb(253.88, 253.88, 253.88);\n}\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n  color: rgb(130.52, 130.52, 130.52);\n  background-color: rgb(241.13, 241.13, 241.13);\n}\n.list-group-item-light.list-group-item-action.active {\n  color: #ffffff;\n  background-color: rgb(130.52, 130.52, 130.52);\n  border-color: rgb(130.52, 130.52, 130.52);\n}\n.list-group-item-dark {\n  color: rgb(19.24, 22.88, 36.4);\n  background-color: rgb(193.96, 195.92, 203.2);\n}\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n  color: rgb(19.24, 22.88, 36.4);\n  background-color: rgb(180.165955335, 182.5688833747, 191.494044665);\n}\n.list-group-item-dark.list-group-item-action.active {\n  color: #ffffff;\n  background-color: rgb(19.24, 22.88, 36.4);\n  border-color: rgb(19.24, 22.88, 36.4);\n}\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.5;\n}\n.close:hover {\n  color: #000;\n  text-decoration: none;\n}\n.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n  opacity: 0.75;\n}\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n}\na.close.disabled {\n  pointer-events: none;\n}\n.toast {\n  flex-basis: 350px;\n  max-width: 350px;\n  font-size: 0.875rem;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  border-radius: 0.25rem;\n}\n.toast:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.toast.showing {\n  opacity: 1;\n}\n.toast.show {\n  display: block;\n  opacity: 1;\n}\n.toast.hide {\n  display: none;\n}\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.toast-body {\n  padding: 0.75rem;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n  pointer-events: none;\n}\n.modal.fade .modal-dialog {\n  transition: transform 0.4s ease;\n  transform: translate(0, -50px);\n}\n@media (prefers-reduced-motion: reduce) {\n.modal.fade .modal-dialog {\n    transition: none;\n}\n}\n.modal.show .modal-dialog {\n  transform: none;\n}\n.modal.modal-static .modal-dialog {\n  transform: scale(1.02);\n}\n.modal-dialog-scrollable {\n  display: flex;\n  max-height: calc(100% - 20px);\n}\n.modal-dialog-scrollable .modal-content {\n  max-height: calc(100vh - 20px);\n  overflow: hidden;\n}\n.modal-dialog-scrollable .modal-header,\n.modal-dialog-scrollable .modal-footer {\n  flex-shrink: 0;\n}\n.modal-dialog-scrollable .modal-body {\n  overflow-y: auto;\n}\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 20px);\n}\n.modal-dialog-centered::before {\n  display: block;\n  height: calc(100vh - 20px);\n  height: -moz-min-content;\n  height: min-content;\n  content: \"\";\n}\n.modal-dialog-centered.modal-dialog-scrollable {\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n}\n.modal-dialog-centered.modal-dialog-scrollable .modal-content {\n  max-height: none;\n}\n.modal-dialog-centered.modal-dialog-scrollable::before {\n  content: none;\n}\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  opacity: 0;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n.modal-header .close {\n  padding: 1rem 1rem;\n  margin: -25px -26px -25px auto;\n}\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 0.9375rem;\n}\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0.6875rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px);\n}\n.modal-footer > * {\n  margin: 0.25rem;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 576px) {\n.modal-dialog {\n    max-width: 500px;\n    margin: 30px auto;\n}\n.modal-dialog-scrollable {\n    max-height: calc(100% - 60px);\n}\n.modal-dialog-scrollable .modal-content {\n    max-height: calc(100vh - 60px);\n}\n.modal-dialog-centered {\n    min-height: calc(100% - 60px);\n}\n.modal-dialog-centered::before {\n    height: calc(100vh - 60px);\n    height: -moz-min-content;\n    height: min-content;\n}\n.modal-sm {\n    max-width: 300px;\n}\n}\n@media (min-width: 992px) {\n.modal-lg,\n  .modal-xl {\n    max-width: 90%;\n}\n}\n@media (min-width: 1200px) {\n.modal-xl {\n    max-width: 1140px;\n}\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  white-space: normal;\n  word-spacing: normal;\n  line-break: auto;\n  font-size: 0.75rem;\n  word-wrap: break-word;\n  opacity: 0;\n}\n.tooltip.show {\n  opacity: 0.9;\n}\n.tooltip .arrow {\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem;\n}\n.tooltip .arrow::before {\n  position: absolute;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=top] {\n  padding: 0.4rem 0;\n}\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=top] .arrow {\n  bottom: 0;\n}\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=top] .arrow::before {\n  top: 0;\n  border-width: 0.4rem 0.4rem 0;\n  border-top-color: #000;\n}\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=right] {\n  padding: 0 0.4rem;\n}\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=right] .arrow {\n  left: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=right] .arrow::before {\n  right: 0;\n  border-width: 0.4rem 0.4rem 0.4rem 0;\n  border-right-color: #000;\n}\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=bottom] {\n  padding: 0.4rem 0;\n}\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=bottom] .arrow {\n  top: 0;\n}\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  bottom: 0;\n  border-width: 0 0.4rem 0.4rem;\n  border-bottom-color: #000;\n}\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=left] {\n  padding: 0 0.4rem;\n}\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=left] .arrow {\n  right: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=left] .arrow::before {\n  left: 0;\n  border-width: 0.4rem 0 0.4rem 0.4rem;\n  border-left-color: #000;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.4rem 0.75rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.375rem;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  white-space: normal;\n  word-spacing: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n.popover .arrow {\n  position: absolute;\n  display: block;\n  width: 1rem;\n  height: 0.5rem;\n  margin: 0 0.3rem;\n}\n.popover .arrow::before, .popover .arrow::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n.bs-popover-top, .bs-popover-auto[x-placement^=top] {\n  margin-bottom: 0.5rem;\n}\n.bs-popover-top > .arrow, .bs-popover-auto[x-placement^=top] > .arrow {\n  bottom: calc(-0.5rem - 1px);\n}\n.bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^=top] > .arrow::before {\n  bottom: 0;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^=top] > .arrow::after {\n  bottom: 1px;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: #fff;\n}\n.bs-popover-right, .bs-popover-auto[x-placement^=right] {\n  margin-left: 0.5rem;\n}\n.bs-popover-right > .arrow, .bs-popover-auto[x-placement^=right] > .arrow {\n  left: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n.bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^=right] > .arrow::before {\n  left: 0;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^=right] > .arrow::after {\n  left: 1px;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: #fff;\n}\n.bs-popover-bottom, .bs-popover-auto[x-placement^=bottom] {\n  margin-top: 0.5rem;\n}\n.bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^=bottom] > .arrow {\n  top: calc(-0.5rem - 1px);\n}\n.bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  top: 0;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  top: 1px;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: #fff;\n}\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: 1rem;\n  margin-left: -0.5rem;\n  content: \"\";\n  border-bottom: 1px solid rgb(247.35, 247.35, 247.35);\n}\n.bs-popover-left, .bs-popover-auto[x-placement^=left] {\n  margin-right: 0.5rem;\n}\n.bs-popover-left > .arrow, .bs-popover-auto[x-placement^=left] > .arrow {\n  right: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n.bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^=left] > .arrow::before {\n  right: 0;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^=left] > .arrow::after {\n  right: 1px;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: #fff;\n}\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  background-color: rgb(247.35, 247.35, 247.35);\n  border-bottom: 1px solid rgb(234.6, 234.6, 234.6);\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n.popover-header:empty {\n  display: none;\n}\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529;\n}\n.carousel {\n  position: relative;\n}\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.carousel-item {\n    transition: none;\n}\n}\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  transform: translateX(100%);\n}\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  transform: translateX(-100%);\n}\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none;\n}\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  z-index: 1;\n  opacity: 1;\n}\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s;\n}\n@media (prefers-reduced-motion: reduce) {\n.carousel-fade .active.carousel-item-left,\n  .carousel-fade .active.carousel-item-right {\n    transition: none;\n}\n}\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  padding: 0;\n  color: #fff;\n  text-align: center;\n  background: none;\n  border: 0;\n  opacity: 0.5;\n  transition: opacity 0.15s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n.carousel-control-prev,\n  .carousel-control-next {\n    transition: none;\n}\n}\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n.carousel-control-prev {\n  left: 0;\n}\n.carousel-control-next {\n  right: 0;\n}\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: 50%/100% 100% no-repeat;\n}\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\");\n}\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\");\n}\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n.carousel-indicators li {\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: 0.5;\n  transition: opacity 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n.carousel-indicators li {\n    transition: none;\n}\n}\n.carousel-indicators .active {\n  opacity: 1;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n@keyframes spinner-border {\nto {\n    transform: rotate(360deg);\n}\n}\n.spinner-border {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: -0.125em;\n  border: 0.25em solid currentcolor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: 0.75s linear infinite spinner-border;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em;\n}\n@keyframes spinner-grow {\n0% {\n    transform: scale(0);\n}\n50% {\n    opacity: 1;\n    transform: none;\n}\n}\n.spinner-grow {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: -0.125em;\n  background-color: currentcolor;\n  border-radius: 50%;\n  opacity: 0;\n  animation: 0.75s linear infinite spinner-grow;\n}\n.spinner-grow-sm {\n  width: 1rem;\n  height: 1rem;\n}\n@media (prefers-reduced-motion: reduce) {\n.spinner-border,\n  .spinner-grow {\n    animation-duration: 1.5s;\n}\n}\n.align-baseline {\n  vertical-align: baseline !important;\n}\n.align-top {\n  vertical-align: top !important;\n}\n.align-middle {\n  vertical-align: middle !important;\n}\n.align-bottom {\n  vertical-align: bottom !important;\n}\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n.align-text-top {\n  vertical-align: text-top !important;\n}\n.bg-primary {\n  background-color: #3a8696 !important;\n}\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: rgb(43.7788461538, 101.1442307692, 113.2211538462) !important;\n}\n.bg-secondary {\n  background-color: #dde4eb !important;\n}\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: rgb(188.8888888889, 202.5, 216.1111111111) !important;\n}\n.bg-success {\n  background-color: #19d895 !important;\n}\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: rgb(19.7095435685, 170.2904564315, 117.468879668) !important;\n}\n.bg-info {\n  background-color: #8862e0 !important;\n}\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: rgb(103.7180851064, 55.4095744681, 215.5904255319) !important;\n}\n.bg-warning {\n  background-color: #ffaf00 !important;\n}\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #cc8c00 !important;\n}\n.bg-danger {\n  background-color: #ff6258 !important;\n}\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: rgb(255, 50.0538922156, 37) !important;\n}\n.bg-light {\n  background-color: #fbfbfb !important;\n}\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: rgb(225.5, 225.5, 225.5) !important;\n}\n.bg-dark {\n  background-color: #252C46 !important;\n}\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: rgb(19.3644859813, 23.0280373832, 36.6355140187) !important;\n}\n.bg-white {\n  background-color: #ffffff !important;\n}\n.bg-transparent {\n  background-color: transparent !important;\n}\n.border, .loader-demo-box {\n  border: 1px solid #cdd6dc !important;\n}\n.border-top {\n  border-top: 1px solid #cdd6dc !important;\n}\n.border-right {\n  border-right: 1px solid #cdd6dc !important;\n}\n.border-bottom {\n  border-bottom: 1px solid #cdd6dc !important;\n}\n.border-left {\n  border-left: 1px solid #cdd6dc !important;\n}\n.border-0 {\n  border: 0 !important;\n}\n.border-top-0 {\n  border-top: 0 !important;\n}\n.border-right-0 {\n  border-right: 0 !important;\n}\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n.border-left-0 {\n  border-left: 0 !important;\n}\n.border-primary {\n  border-color: #3a8696 !important;\n}\n.border-secondary, .loader-demo-box {\n  border-color: #dde4eb !important;\n}\n.border-success {\n  border-color: #19d895 !important;\n}\n.border-info {\n  border-color: #8862e0 !important;\n}\n.border-warning {\n  border-color: #ffaf00 !important;\n}\n.border-danger {\n  border-color: #ff6258 !important;\n}\n.border-light {\n  border-color: #fbfbfb !important;\n}\n.border-dark {\n  border-color: #252C46 !important;\n}\n.border-white {\n  border-color: #ffffff !important;\n}\n.rounded-sm {\n  border-radius: 0.2rem !important;\n}\n.rounded, .loader-demo-box {\n  border-radius: 0.25rem !important;\n}\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n.rounded-lg {\n  border-radius: 0.3rem !important;\n}\n.rounded-circle {\n  border-radius: 50% !important;\n}\n.rounded-pill {\n  border-radius: 50rem !important;\n}\n.rounded-0 {\n  border-radius: 0 !important;\n}\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.d-none {\n  display: none !important;\n}\n.d-inline {\n  display: inline !important;\n}\n.d-inline-block {\n  display: inline-block !important;\n}\n.d-block, .sidebar-icon-only .sidebar .nav .nav-item.hover-open .collapse,\n.sidebar-icon-only .sidebar .nav .nav-item.hover-open .collapsing {\n  display: block !important;\n}\n.d-table {\n  display: table !important;\n}\n.d-table-row {\n  display: table-row !important;\n}\n.d-table-cell {\n  display: table-cell !important;\n}\n.d-flex, .email-wrapper .message-body .attachments-sections ul li .details .buttons, .email-wrapper .message-body .attachments-sections ul li .thumb, .email-wrapper .mail-sidebar .menu-bar .profile-list-item a .user, .email-wrapper .mail-sidebar .menu-bar .profile-list-item a, .email-wrapper .mail-list-container .mail-list .details, .new-accounts ul.chats li.chat-persons a div.user, .new-accounts ul.chats li.chat-persons a, .list-wrapper ul li, .loader-demo-box {\n  display: flex !important;\n}\n.d-inline-flex, .email-wrapper .message-body .attachments-sections ul li {\n  display: inline-flex !important;\n}\n@media (min-width: 576px) {\n.d-sm-none {\n    display: none !important;\n}\n.d-sm-inline {\n    display: inline !important;\n}\n.d-sm-inline-block {\n    display: inline-block !important;\n}\n.d-sm-block {\n    display: block !important;\n}\n.d-sm-table {\n    display: table !important;\n}\n.d-sm-table-row {\n    display: table-row !important;\n}\n.d-sm-table-cell {\n    display: table-cell !important;\n}\n.d-sm-flex {\n    display: flex !important;\n}\n.d-sm-inline-flex {\n    display: inline-flex !important;\n}\n}\n@media (min-width: 768px) {\n.d-md-none {\n    display: none !important;\n}\n.d-md-inline {\n    display: inline !important;\n}\n.d-md-inline-block {\n    display: inline-block !important;\n}\n.d-md-block {\n    display: block !important;\n}\n.d-md-table {\n    display: table !important;\n}\n.d-md-table-row {\n    display: table-row !important;\n}\n.d-md-table-cell {\n    display: table-cell !important;\n}\n.d-md-flex {\n    display: flex !important;\n}\n.d-md-inline-flex {\n    display: inline-flex !important;\n}\n}\n@media (min-width: 992px) {\n.d-lg-none {\n    display: none !important;\n}\n.d-lg-inline {\n    display: inline !important;\n}\n.d-lg-inline-block {\n    display: inline-block !important;\n}\n.d-lg-block {\n    display: block !important;\n}\n.d-lg-table {\n    display: table !important;\n}\n.d-lg-table-row {\n    display: table-row !important;\n}\n.d-lg-table-cell {\n    display: table-cell !important;\n}\n.d-lg-flex {\n    display: flex !important;\n}\n.d-lg-inline-flex {\n    display: inline-flex !important;\n}\n}\n@media (min-width: 1200px) {\n.d-xl-none {\n    display: none !important;\n}\n.d-xl-inline {\n    display: inline !important;\n}\n.d-xl-inline-block {\n    display: inline-block !important;\n}\n.d-xl-block {\n    display: block !important;\n}\n.d-xl-table {\n    display: table !important;\n}\n.d-xl-table-row {\n    display: table-row !important;\n}\n.d-xl-table-cell {\n    display: table-cell !important;\n}\n.d-xl-flex {\n    display: flex !important;\n}\n.d-xl-inline-flex {\n    display: inline-flex !important;\n}\n}\n@media print {\n.d-print-none {\n    display: none !important;\n}\n.d-print-inline {\n    display: inline !important;\n}\n.d-print-inline-block {\n    display: inline-block !important;\n}\n.d-print-block {\n    display: block !important;\n}\n.d-print-table {\n    display: table !important;\n}\n.d-print-table-row {\n    display: table-row !important;\n}\n.d-print-table-cell {\n    display: table-cell !important;\n}\n.d-print-flex {\n    display: flex !important;\n}\n.d-print-inline-flex {\n    display: inline-flex !important;\n}\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive::before {\n  display: block;\n  content: \"\";\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-responsive-21by9::before {\n  padding-top: 42.85714286%;\n}\n.embed-responsive-16by9::before {\n  padding-top: 56.25%;\n}\n.embed-responsive-4by3::before {\n  padding-top: 75%;\n}\n.embed-responsive-1by1::before {\n  padding-top: 100%;\n}\n.embed-responsive-21by9::before {\n  padding-top: 42.85714286%;\n}\n.embed-responsive-16by9::before {\n  padding-top: 56.25%;\n}\n.embed-responsive-4by3::before {\n  padding-top: 75%;\n}\n.embed-responsive-1by1::before {\n  padding-top: 100%;\n}\n.flex-row, .email-wrapper .message-body .attachments-sections ul li {\n  flex-direction: row !important;\n}\n.flex-column, .email-wrapper .mail-sidebar .menu-bar .profile-list-item a .user, .new-accounts ul.chats li.chat-persons a div.user {\n  flex-direction: column !important;\n}\n.flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n.flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n.flex-wrap {\n  flex-wrap: wrap !important;\n}\n.flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.flex-fill {\n  flex: 1 1 auto !important;\n}\n.flex-grow-0 {\n  flex-grow: 0 !important;\n}\n.flex-grow-1 {\n  flex-grow: 1 !important;\n}\n.flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n.flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n.justify-content-start, .list-wrapper ul li {\n  justify-content: flex-start !important;\n}\n.justify-content-end, .email-wrapper .mail-list-container .mail-list .details {\n  justify-content: flex-end !important;\n}\n.justify-content-center, .email-wrapper .message-body .attachments-sections ul li .thumb {\n  justify-content: center !important;\n}\n.justify-content-between {\n  justify-content: space-between !important;\n}\n.justify-content-around {\n  justify-content: space-around !important;\n}\n.align-items-start {\n  align-items: flex-start !important;\n}\n.align-items-end {\n  align-items: flex-end !important;\n}\n.align-items-center, .email-wrapper .message-body .attachments-sections ul li .details .buttons, .email-wrapper .message-body .attachments-sections ul li .thumb, .new-accounts ul.chats li.chat-persons a, .list-wrapper ul li, .loader-demo-box {\n  align-items: center !important;\n}\n.align-items-baseline {\n  align-items: baseline !important;\n}\n.align-items-stretch, .email-wrapper .message-body .attachments-sections ul li {\n  align-items: stretch !important;\n}\n.align-content-start {\n  align-content: flex-start !important;\n}\n.align-content-end {\n  align-content: flex-end !important;\n}\n.align-content-center {\n  align-content: center !important;\n}\n.align-content-between {\n  align-content: space-between !important;\n}\n.align-content-around {\n  align-content: space-around !important;\n}\n.align-content-stretch {\n  align-content: stretch !important;\n}\n.align-self-auto {\n  align-self: auto !important;\n}\n.align-self-start {\n  align-self: flex-start !important;\n}\n.align-self-end {\n  align-self: flex-end !important;\n}\n.align-self-center {\n  align-self: center !important;\n}\n.align-self-baseline {\n  align-self: baseline !important;\n}\n.align-self-stretch {\n  align-self: stretch !important;\n}\n@media (min-width: 576px) {\n.flex-sm-row {\n    flex-direction: row !important;\n}\n.flex-sm-column {\n    flex-direction: column !important;\n}\n.flex-sm-row-reverse {\n    flex-direction: row-reverse !important;\n}\n.flex-sm-column-reverse {\n    flex-direction: column-reverse !important;\n}\n.flex-sm-wrap {\n    flex-wrap: wrap !important;\n}\n.flex-sm-nowrap {\n    flex-wrap: nowrap !important;\n}\n.flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n}\n.flex-sm-fill {\n    flex: 1 1 auto !important;\n}\n.flex-sm-grow-0 {\n    flex-grow: 0 !important;\n}\n.flex-sm-grow-1 {\n    flex-grow: 1 !important;\n}\n.flex-sm-shrink-0 {\n    flex-shrink: 0 !important;\n}\n.flex-sm-shrink-1 {\n    flex-shrink: 1 !important;\n}\n.justify-content-sm-start {\n    justify-content: flex-start !important;\n}\n.justify-content-sm-end {\n    justify-content: flex-end !important;\n}\n.justify-content-sm-center {\n    justify-content: center !important;\n}\n.justify-content-sm-between {\n    justify-content: space-between !important;\n}\n.justify-content-sm-around {\n    justify-content: space-around !important;\n}\n.align-items-sm-start {\n    align-items: flex-start !important;\n}\n.align-items-sm-end {\n    align-items: flex-end !important;\n}\n.align-items-sm-center {\n    align-items: center !important;\n}\n.align-items-sm-baseline {\n    align-items: baseline !important;\n}\n.align-items-sm-stretch {\n    align-items: stretch !important;\n}\n.align-content-sm-start {\n    align-content: flex-start !important;\n}\n.align-content-sm-end {\n    align-content: flex-end !important;\n}\n.align-content-sm-center {\n    align-content: center !important;\n}\n.align-content-sm-between {\n    align-content: space-between !important;\n}\n.align-content-sm-around {\n    align-content: space-around !important;\n}\n.align-content-sm-stretch {\n    align-content: stretch !important;\n}\n.align-self-sm-auto {\n    align-self: auto !important;\n}\n.align-self-sm-start {\n    align-self: flex-start !important;\n}\n.align-self-sm-end {\n    align-self: flex-end !important;\n}\n.align-self-sm-center {\n    align-self: center !important;\n}\n.align-self-sm-baseline {\n    align-self: baseline !important;\n}\n.align-self-sm-stretch {\n    align-self: stretch !important;\n}\n}\n@media (min-width: 768px) {\n.flex-md-row {\n    flex-direction: row !important;\n}\n.flex-md-column {\n    flex-direction: column !important;\n}\n.flex-md-row-reverse {\n    flex-direction: row-reverse !important;\n}\n.flex-md-column-reverse {\n    flex-direction: column-reverse !important;\n}\n.flex-md-wrap {\n    flex-wrap: wrap !important;\n}\n.flex-md-nowrap {\n    flex-wrap: nowrap !important;\n}\n.flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n}\n.flex-md-fill {\n    flex: 1 1 auto !important;\n}\n.flex-md-grow-0 {\n    flex-grow: 0 !important;\n}\n.flex-md-grow-1 {\n    flex-grow: 1 !important;\n}\n.flex-md-shrink-0 {\n    flex-shrink: 0 !important;\n}\n.flex-md-shrink-1 {\n    flex-shrink: 1 !important;\n}\n.justify-content-md-start {\n    justify-content: flex-start !important;\n}\n.justify-content-md-end {\n    justify-content: flex-end !important;\n}\n.justify-content-md-center {\n    justify-content: center !important;\n}\n.justify-content-md-between {\n    justify-content: space-between !important;\n}\n.justify-content-md-around {\n    justify-content: space-around !important;\n}\n.align-items-md-start {\n    align-items: flex-start !important;\n}\n.align-items-md-end {\n    align-items: flex-end !important;\n}\n.align-items-md-center {\n    align-items: center !important;\n}\n.align-items-md-baseline {\n    align-items: baseline !important;\n}\n.align-items-md-stretch {\n    align-items: stretch !important;\n}\n.align-content-md-start {\n    align-content: flex-start !important;\n}\n.align-content-md-end {\n    align-content: flex-end !important;\n}\n.align-content-md-center {\n    align-content: center !important;\n}\n.align-content-md-between {\n    align-content: space-between !important;\n}\n.align-content-md-around {\n    align-content: space-around !important;\n}\n.align-content-md-stretch {\n    align-content: stretch !important;\n}\n.align-self-md-auto {\n    align-self: auto !important;\n}\n.align-self-md-start {\n    align-self: flex-start !important;\n}\n.align-self-md-end {\n    align-self: flex-end !important;\n}\n.align-self-md-center {\n    align-self: center !important;\n}\n.align-self-md-baseline {\n    align-self: baseline !important;\n}\n.align-self-md-stretch {\n    align-self: stretch !important;\n}\n}\n@media (min-width: 992px) {\n.flex-lg-row {\n    flex-direction: row !important;\n}\n.flex-lg-column {\n    flex-direction: column !important;\n}\n.flex-lg-row-reverse {\n    flex-direction: row-reverse !important;\n}\n.flex-lg-column-reverse {\n    flex-direction: column-reverse !important;\n}\n.flex-lg-wrap {\n    flex-wrap: wrap !important;\n}\n.flex-lg-nowrap {\n    flex-wrap: nowrap !important;\n}\n.flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n}\n.flex-lg-fill {\n    flex: 1 1 auto !important;\n}\n.flex-lg-grow-0 {\n    flex-grow: 0 !important;\n}\n.flex-lg-grow-1 {\n    flex-grow: 1 !important;\n}\n.flex-lg-shrink-0 {\n    flex-shrink: 0 !important;\n}\n.flex-lg-shrink-1 {\n    flex-shrink: 1 !important;\n}\n.justify-content-lg-start {\n    justify-content: flex-start !important;\n}\n.justify-content-lg-end {\n    justify-content: flex-end !important;\n}\n.justify-content-lg-center {\n    justify-content: center !important;\n}\n.justify-content-lg-between {\n    justify-content: space-between !important;\n}\n.justify-content-lg-around {\n    justify-content: space-around !important;\n}\n.align-items-lg-start {\n    align-items: flex-start !important;\n}\n.align-items-lg-end {\n    align-items: flex-end !important;\n}\n.align-items-lg-center {\n    align-items: center !important;\n}\n.align-items-lg-baseline {\n    align-items: baseline !important;\n}\n.align-items-lg-stretch {\n    align-items: stretch !important;\n}\n.align-content-lg-start {\n    align-content: flex-start !important;\n}\n.align-content-lg-end {\n    align-content: flex-end !important;\n}\n.align-content-lg-center {\n    align-content: center !important;\n}\n.align-content-lg-between {\n    align-content: space-between !important;\n}\n.align-content-lg-around {\n    align-content: space-around !important;\n}\n.align-content-lg-stretch {\n    align-content: stretch !important;\n}\n.align-self-lg-auto {\n    align-self: auto !important;\n}\n.align-self-lg-start {\n    align-self: flex-start !important;\n}\n.align-self-lg-end {\n    align-self: flex-end !important;\n}\n.align-self-lg-center {\n    align-self: center !important;\n}\n.align-self-lg-baseline {\n    align-self: baseline !important;\n}\n.align-self-lg-stretch {\n    align-self: stretch !important;\n}\n}\n@media (min-width: 1200px) {\n.flex-xl-row {\n    flex-direction: row !important;\n}\n.flex-xl-column {\n    flex-direction: column !important;\n}\n.flex-xl-row-reverse {\n    flex-direction: row-reverse !important;\n}\n.flex-xl-column-reverse {\n    flex-direction: column-reverse !important;\n}\n.flex-xl-wrap {\n    flex-wrap: wrap !important;\n}\n.flex-xl-nowrap {\n    flex-wrap: nowrap !important;\n}\n.flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n}\n.flex-xl-fill {\n    flex: 1 1 auto !important;\n}\n.flex-xl-grow-0 {\n    flex-grow: 0 !important;\n}\n.flex-xl-grow-1 {\n    flex-grow: 1 !important;\n}\n.flex-xl-shrink-0 {\n    flex-shrink: 0 !important;\n}\n.flex-xl-shrink-1 {\n    flex-shrink: 1 !important;\n}\n.justify-content-xl-start {\n    justify-content: flex-start !important;\n}\n.justify-content-xl-end {\n    justify-content: flex-end !important;\n}\n.justify-content-xl-center {\n    justify-content: center !important;\n}\n.justify-content-xl-between {\n    justify-content: space-between !important;\n}\n.justify-content-xl-around {\n    justify-content: space-around !important;\n}\n.align-items-xl-start {\n    align-items: flex-start !important;\n}\n.align-items-xl-end {\n    align-items: flex-end !important;\n}\n.align-items-xl-center {\n    align-items: center !important;\n}\n.align-items-xl-baseline {\n    align-items: baseline !important;\n}\n.align-items-xl-stretch {\n    align-items: stretch !important;\n}\n.align-content-xl-start {\n    align-content: flex-start !important;\n}\n.align-content-xl-end {\n    align-content: flex-end !important;\n}\n.align-content-xl-center {\n    align-content: center !important;\n}\n.align-content-xl-between {\n    align-content: space-between !important;\n}\n.align-content-xl-around {\n    align-content: space-around !important;\n}\n.align-content-xl-stretch {\n    align-content: stretch !important;\n}\n.align-self-xl-auto {\n    align-self: auto !important;\n}\n.align-self-xl-start {\n    align-self: flex-start !important;\n}\n.align-self-xl-end {\n    align-self: flex-end !important;\n}\n.align-self-xl-center {\n    align-self: center !important;\n}\n.align-self-xl-baseline {\n    align-self: baseline !important;\n}\n.align-self-xl-stretch {\n    align-self: stretch !important;\n}\n}\n.float-left {\n  float: left !important;\n}\n.float-right {\n  float: right !important;\n}\n.float-none {\n  float: none !important;\n}\n@media (min-width: 576px) {\n.float-sm-left {\n    float: left !important;\n}\n.float-sm-right {\n    float: right !important;\n}\n.float-sm-none {\n    float: none !important;\n}\n}\n@media (min-width: 768px) {\n.float-md-left {\n    float: left !important;\n}\n.float-md-right {\n    float: right !important;\n}\n.float-md-none {\n    float: none !important;\n}\n}\n@media (min-width: 992px) {\n.float-lg-left {\n    float: left !important;\n}\n.float-lg-right {\n    float: right !important;\n}\n.float-lg-none {\n    float: none !important;\n}\n}\n@media (min-width: 1200px) {\n.float-xl-left {\n    float: left !important;\n}\n.float-xl-right {\n    float: right !important;\n}\n.float-xl-none {\n    float: none !important;\n}\n}\n.user-select-all {\n  -webkit-user-select: all !important;\n     -moz-user-select: all !important;\n          user-select: all !important;\n}\n.user-select-auto {\n  -webkit-user-select: auto !important;\n     -moz-user-select: auto !important;\n          user-select: auto !important;\n}\n.user-select-none {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n          user-select: none !important;\n}\n.overflow-auto {\n  overflow: auto !important;\n}\n.overflow-hidden {\n  overflow: hidden !important;\n}\n.position-static {\n  position: static !important;\n}\n.position-relative {\n  position: relative !important;\n}\n.position-absolute {\n  position: absolute !important;\n}\n.position-fixed {\n  position: fixed !important;\n}\n.position-sticky {\n  position: sticky !important;\n}\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n@supports (position: sticky) {\n.sticky-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n}\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n.shadow-none {\n  box-shadow: none !important;\n}\n.w-25 {\n  width: 25% !important;\n}\n.w-50 {\n  width: 50% !important;\n}\n.w-75 {\n  width: 75% !important;\n}\n.w-100 {\n  width: 100% !important;\n}\n.w-auto {\n  width: auto !important;\n}\n.h-25 {\n  height: 25% !important;\n}\n.h-50 {\n  height: 50% !important;\n}\n.h-75 {\n  height: 75% !important;\n}\n.h-100 {\n  height: 100% !important;\n}\n.h-auto {\n  height: auto !important;\n}\n.mw-100 {\n  max-width: 100% !important;\n}\n.mh-100 {\n  max-height: 100% !important;\n}\n.min-vw-100 {\n  min-width: 100vw !important;\n}\n.min-vh-100 {\n  min-height: 100vh !important;\n}\n.vw-100 {\n  width: 100vw !important;\n}\n.vh-100 {\n  height: 100vh !important;\n}\n.m-0 {\n  margin: 0 !important;\n}\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n.m-1 {\n  margin: 0.25rem !important;\n}\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n.m-2 {\n  margin: 0.5rem !important;\n}\n.mt-2, .template-demo .circle-progress, .template-demo > .btn-group, .template-demo > .btn-toolbar, .template-demo > .btn,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n.mr-2, .template-demo .dropdown, .template-demo > .btn-group, .template-demo > .btn-toolbar, .template-demo > .btn,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n.ml-2, .btn-toolbar .btn-group + .btn-group,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n.m-3 {\n  margin: 1rem !important;\n}\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n.mb-3, .template-demo .circle-progress-block,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n.m-4 {\n  margin: 1.5rem !important;\n}\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n.m-5 {\n  margin: 3rem !important;\n}\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n.p-0 {\n  padding: 0 !important;\n}\n.pt-0, .card-revenue-table .revenue-item:first-child,\n.py-0 {\n  padding-top: 0 !important;\n}\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n.pb-0, .card-revenue-table .revenue-item:last-child,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n.p-1 {\n  padding: 0.25rem !important;\n}\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n.p-2 {\n  padding: 0.5rem !important;\n}\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n.pr-2,\n.px-2,\n.template-demo .circle-progress-block {\n  padding-right: 0.5rem !important;\n}\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n.pl-2,\n.px-2,\n.template-demo .circle-progress-block {\n  padding-left: 0.5rem !important;\n}\n.p-3 {\n  padding: 1rem !important;\n}\n.pt-3,\n.py-3,\n.card-revenue-table .revenue-item {\n  padding-top: 1rem !important;\n}\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n.pb-3,\n.py-3,\n.card-revenue-table .revenue-item {\n  padding-bottom: 1rem !important;\n}\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n.p-4 {\n  padding: 1.5rem !important;\n}\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n.p-5 {\n  padding: 3rem !important;\n}\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n.m-n1 {\n  margin: -0.25rem !important;\n}\n.mt-n1,\n.my-n1 {\n  margin-top: -0.25rem !important;\n}\n.mr-n1,\n.mx-n1 {\n  margin-right: -0.25rem !important;\n}\n.mb-n1,\n.my-n1 {\n  margin-bottom: -0.25rem !important;\n}\n.ml-n1,\n.mx-n1 {\n  margin-left: -0.25rem !important;\n}\n.m-n2 {\n  margin: -0.5rem !important;\n}\n.mt-n2,\n.my-n2 {\n  margin-top: -0.5rem !important;\n}\n.mr-n2,\n.mx-n2 {\n  margin-right: -0.5rem !important;\n}\n.mb-n2,\n.my-n2 {\n  margin-bottom: -0.5rem !important;\n}\n.ml-n2,\n.mx-n2 {\n  margin-left: -0.5rem !important;\n}\n.m-n3 {\n  margin: -1rem !important;\n}\n.mt-n3,\n.my-n3 {\n  margin-top: -1rem !important;\n}\n.mr-n3,\n.mx-n3 {\n  margin-right: -1rem !important;\n}\n.mb-n3,\n.my-n3 {\n  margin-bottom: -1rem !important;\n}\n.ml-n3,\n.mx-n3 {\n  margin-left: -1rem !important;\n}\n.m-n4 {\n  margin: -1.5rem !important;\n}\n.mt-n4,\n.my-n4 {\n  margin-top: -1.5rem !important;\n}\n.mr-n4,\n.mx-n4 {\n  margin-right: -1.5rem !important;\n}\n.mb-n4,\n.my-n4 {\n  margin-bottom: -1.5rem !important;\n}\n.ml-n4,\n.mx-n4 {\n  margin-left: -1.5rem !important;\n}\n.m-n5 {\n  margin: -3rem !important;\n}\n.mt-n5,\n.my-n5 {\n  margin-top: -3rem !important;\n}\n.mr-n5,\n.mx-n5 {\n  margin-right: -3rem !important;\n}\n.mb-n5,\n.my-n5 {\n  margin-bottom: -3rem !important;\n}\n.ml-n5,\n.mx-n5 {\n  margin-left: -3rem !important;\n}\n.m-auto {\n  margin: auto !important;\n}\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n@media (min-width: 576px) {\n.m-sm-0 {\n    margin: 0 !important;\n}\n.mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n}\n.mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n}\n.mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n}\n.ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n}\n.m-sm-1 {\n    margin: 0.25rem !important;\n}\n.mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n}\n.mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n}\n.mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n}\n.ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n}\n.m-sm-2 {\n    margin: 0.5rem !important;\n}\n.mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n}\n.mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n}\n.mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n}\n.ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n}\n.m-sm-3 {\n    margin: 1rem !important;\n}\n.mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n}\n.mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n}\n.mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n}\n.ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n}\n.m-sm-4 {\n    margin: 1.5rem !important;\n}\n.mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n}\n.mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n}\n.mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n}\n.ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n}\n.m-sm-5 {\n    margin: 3rem !important;\n}\n.mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n}\n.mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n}\n.mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n}\n.ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n}\n.p-sm-0 {\n    padding: 0 !important;\n}\n.pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important;\n}\n.pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important;\n}\n.pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important;\n}\n.pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important;\n}\n.p-sm-1 {\n    padding: 0.25rem !important;\n}\n.pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n}\n.pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n}\n.pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important;\n}\n.pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important;\n}\n.p-sm-2 {\n    padding: 0.5rem !important;\n}\n.pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n}\n.pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n}\n.pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important;\n}\n.pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important;\n}\n.p-sm-3 {\n    padding: 1rem !important;\n}\n.pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important;\n}\n.pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important;\n}\n.pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important;\n}\n.pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important;\n}\n.p-sm-4 {\n    padding: 1.5rem !important;\n}\n.pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n}\n.pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n}\n.pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important;\n}\n.pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important;\n}\n.p-sm-5 {\n    padding: 3rem !important;\n}\n.pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important;\n}\n.pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important;\n}\n.pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important;\n}\n.pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important;\n}\n.m-sm-n1 {\n    margin: -0.25rem !important;\n}\n.mt-sm-n1,\n  .my-sm-n1 {\n    margin-top: -0.25rem !important;\n}\n.mr-sm-n1,\n  .mx-sm-n1 {\n    margin-right: -0.25rem !important;\n}\n.mb-sm-n1,\n  .my-sm-n1 {\n    margin-bottom: -0.25rem !important;\n}\n.ml-sm-n1,\n  .mx-sm-n1 {\n    margin-left: -0.25rem !important;\n}\n.m-sm-n2 {\n    margin: -0.5rem !important;\n}\n.mt-sm-n2,\n  .my-sm-n2 {\n    margin-top: -0.5rem !important;\n}\n.mr-sm-n2,\n  .mx-sm-n2 {\n    margin-right: -0.5rem !important;\n}\n.mb-sm-n2,\n  .my-sm-n2 {\n    margin-bottom: -0.5rem !important;\n}\n.ml-sm-n2,\n  .mx-sm-n2 {\n    margin-left: -0.5rem !important;\n}\n.m-sm-n3 {\n    margin: -1rem !important;\n}\n.mt-sm-n3,\n  .my-sm-n3 {\n    margin-top: -1rem !important;\n}\n.mr-sm-n3,\n  .mx-sm-n3 {\n    margin-right: -1rem !important;\n}\n.mb-sm-n3,\n  .my-sm-n3 {\n    margin-bottom: -1rem !important;\n}\n.ml-sm-n3,\n  .mx-sm-n3 {\n    margin-left: -1rem !important;\n}\n.m-sm-n4 {\n    margin: -1.5rem !important;\n}\n.mt-sm-n4,\n  .my-sm-n4 {\n    margin-top: -1.5rem !important;\n}\n.mr-sm-n4,\n  .mx-sm-n4 {\n    margin-right: -1.5rem !important;\n}\n.mb-sm-n4,\n  .my-sm-n4 {\n    margin-bottom: -1.5rem !important;\n}\n.ml-sm-n4,\n  .mx-sm-n4 {\n    margin-left: -1.5rem !important;\n}\n.m-sm-n5 {\n    margin: -3rem !important;\n}\n.mt-sm-n5,\n  .my-sm-n5 {\n    margin-top: -3rem !important;\n}\n.mr-sm-n5,\n  .mx-sm-n5 {\n    margin-right: -3rem !important;\n}\n.mb-sm-n5,\n  .my-sm-n5 {\n    margin-bottom: -3rem !important;\n}\n.ml-sm-n5,\n  .mx-sm-n5 {\n    margin-left: -3rem !important;\n}\n.m-sm-auto {\n    margin: auto !important;\n}\n.mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important;\n}\n.mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important;\n}\n.mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important;\n}\n.ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important;\n}\n}\n@media (min-width: 768px) {\n.m-md-0 {\n    margin: 0 !important;\n}\n.mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n}\n.mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n}\n.mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n}\n.ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n}\n.m-md-1 {\n    margin: 0.25rem !important;\n}\n.mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n}\n.mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n}\n.mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n}\n.ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n}\n.m-md-2 {\n    margin: 0.5rem !important;\n}\n.mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n}\n.mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n}\n.mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n}\n.ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n}\n.m-md-3 {\n    margin: 1rem !important;\n}\n.mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n}\n.mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n}\n.mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n}\n.ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n}\n.m-md-4 {\n    margin: 1.5rem !important;\n}\n.mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n}\n.mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n}\n.mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n}\n.ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n}\n.m-md-5 {\n    margin: 3rem !important;\n}\n.mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n}\n.mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n}\n.mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n}\n.ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n}\n.p-md-0 {\n    padding: 0 !important;\n}\n.pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important;\n}\n.pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important;\n}\n.pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important;\n}\n.pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important;\n}\n.p-md-1 {\n    padding: 0.25rem !important;\n}\n.pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n}\n.pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n}\n.pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important;\n}\n.pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important;\n}\n.p-md-2 {\n    padding: 0.5rem !important;\n}\n.pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n}\n.pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n}\n.pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important;\n}\n.pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important;\n}\n.p-md-3 {\n    padding: 1rem !important;\n}\n.pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important;\n}\n.pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important;\n}\n.pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important;\n}\n.pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important;\n}\n.p-md-4 {\n    padding: 1.5rem !important;\n}\n.pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n}\n.pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n}\n.pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important;\n}\n.pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important;\n}\n.p-md-5 {\n    padding: 3rem !important;\n}\n.pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important;\n}\n.pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important;\n}\n.pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important;\n}\n.pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important;\n}\n.m-md-n1 {\n    margin: -0.25rem !important;\n}\n.mt-md-n1,\n  .my-md-n1 {\n    margin-top: -0.25rem !important;\n}\n.mr-md-n1,\n  .mx-md-n1 {\n    margin-right: -0.25rem !important;\n}\n.mb-md-n1,\n  .my-md-n1 {\n    margin-bottom: -0.25rem !important;\n}\n.ml-md-n1,\n  .mx-md-n1 {\n    margin-left: -0.25rem !important;\n}\n.m-md-n2 {\n    margin: -0.5rem !important;\n}\n.mt-md-n2,\n  .my-md-n2 {\n    margin-top: -0.5rem !important;\n}\n.mr-md-n2,\n  .mx-md-n2 {\n    margin-right: -0.5rem !important;\n}\n.mb-md-n2,\n  .my-md-n2 {\n    margin-bottom: -0.5rem !important;\n}\n.ml-md-n2,\n  .mx-md-n2 {\n    margin-left: -0.5rem !important;\n}\n.m-md-n3 {\n    margin: -1rem !important;\n}\n.mt-md-n3,\n  .my-md-n3 {\n    margin-top: -1rem !important;\n}\n.mr-md-n3,\n  .mx-md-n3 {\n    margin-right: -1rem !important;\n}\n.mb-md-n3,\n  .my-md-n3 {\n    margin-bottom: -1rem !important;\n}\n.ml-md-n3,\n  .mx-md-n3 {\n    margin-left: -1rem !important;\n}\n.m-md-n4 {\n    margin: -1.5rem !important;\n}\n.mt-md-n4,\n  .my-md-n4 {\n    margin-top: -1.5rem !important;\n}\n.mr-md-n4,\n  .mx-md-n4 {\n    margin-right: -1.5rem !important;\n}\n.mb-md-n4,\n  .my-md-n4 {\n    margin-bottom: -1.5rem !important;\n}\n.ml-md-n4,\n  .mx-md-n4 {\n    margin-left: -1.5rem !important;\n}\n.m-md-n5 {\n    margin: -3rem !important;\n}\n.mt-md-n5,\n  .my-md-n5 {\n    margin-top: -3rem !important;\n}\n.mr-md-n5,\n  .mx-md-n5 {\n    margin-right: -3rem !important;\n}\n.mb-md-n5,\n  .my-md-n5 {\n    margin-bottom: -3rem !important;\n}\n.ml-md-n5,\n  .mx-md-n5 {\n    margin-left: -3rem !important;\n}\n.m-md-auto {\n    margin: auto !important;\n}\n.mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important;\n}\n.mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important;\n}\n.mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important;\n}\n.ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important;\n}\n}\n@media (min-width: 992px) {\n.m-lg-0 {\n    margin: 0 !important;\n}\n.mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important;\n}\n.mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important;\n}\n.mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important;\n}\n.ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important;\n}\n.m-lg-1 {\n    margin: 0.25rem !important;\n}\n.mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n}\n.mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n}\n.mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important;\n}\n.ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important;\n}\n.m-lg-2 {\n    margin: 0.5rem !important;\n}\n.mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n}\n.mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n}\n.mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important;\n}\n.ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important;\n}\n.m-lg-3 {\n    margin: 1rem !important;\n}\n.mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important;\n}\n.mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n}\n.mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important;\n}\n.ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important;\n}\n.m-lg-4 {\n    margin: 1.5rem !important;\n}\n.mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n}\n.mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n}\n.mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important;\n}\n.ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important;\n}\n.m-lg-5 {\n    margin: 3rem !important;\n}\n.mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important;\n}\n.mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n}\n.mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important;\n}\n.ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important;\n}\n.p-lg-0 {\n    padding: 0 !important;\n}\n.pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important;\n}\n.pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important;\n}\n.pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important;\n}\n.pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important;\n}\n.p-lg-1 {\n    padding: 0.25rem !important;\n}\n.pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n}\n.pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n}\n.pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important;\n}\n.pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important;\n}\n.p-lg-2 {\n    padding: 0.5rem !important;\n}\n.pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n}\n.pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n}\n.pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important;\n}\n.pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important;\n}\n.p-lg-3 {\n    padding: 1rem !important;\n}\n.pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important;\n}\n.pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important;\n}\n.pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important;\n}\n.pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important;\n}\n.p-lg-4 {\n    padding: 1.5rem !important;\n}\n.pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n}\n.pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n}\n.pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important;\n}\n.pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important;\n}\n.p-lg-5 {\n    padding: 3rem !important;\n}\n.pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important;\n}\n.pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important;\n}\n.pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important;\n}\n.pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important;\n}\n.m-lg-n1 {\n    margin: -0.25rem !important;\n}\n.mt-lg-n1,\n  .my-lg-n1 {\n    margin-top: -0.25rem !important;\n}\n.mr-lg-n1,\n  .mx-lg-n1 {\n    margin-right: -0.25rem !important;\n}\n.mb-lg-n1,\n  .my-lg-n1 {\n    margin-bottom: -0.25rem !important;\n}\n.ml-lg-n1,\n  .mx-lg-n1 {\n    margin-left: -0.25rem !important;\n}\n.m-lg-n2 {\n    margin: -0.5rem !important;\n}\n.mt-lg-n2,\n  .my-lg-n2 {\n    margin-top: -0.5rem !important;\n}\n.mr-lg-n2,\n  .mx-lg-n2 {\n    margin-right: -0.5rem !important;\n}\n.mb-lg-n2,\n  .my-lg-n2 {\n    margin-bottom: -0.5rem !important;\n}\n.ml-lg-n2,\n  .mx-lg-n2 {\n    margin-left: -0.5rem !important;\n}\n.m-lg-n3 {\n    margin: -1rem !important;\n}\n.mt-lg-n3,\n  .my-lg-n3 {\n    margin-top: -1rem !important;\n}\n.mr-lg-n3,\n  .mx-lg-n3 {\n    margin-right: -1rem !important;\n}\n.mb-lg-n3,\n  .my-lg-n3 {\n    margin-bottom: -1rem !important;\n}\n.ml-lg-n3,\n  .mx-lg-n3 {\n    margin-left: -1rem !important;\n}\n.m-lg-n4 {\n    margin: -1.5rem !important;\n}\n.mt-lg-n4,\n  .my-lg-n4 {\n    margin-top: -1.5rem !important;\n}\n.mr-lg-n4,\n  .mx-lg-n4 {\n    margin-right: -1.5rem !important;\n}\n.mb-lg-n4,\n  .my-lg-n4 {\n    margin-bottom: -1.5rem !important;\n}\n.ml-lg-n4,\n  .mx-lg-n4 {\n    margin-left: -1.5rem !important;\n}\n.m-lg-n5 {\n    margin: -3rem !important;\n}\n.mt-lg-n5,\n  .my-lg-n5 {\n    margin-top: -3rem !important;\n}\n.mr-lg-n5,\n  .mx-lg-n5 {\n    margin-right: -3rem !important;\n}\n.mb-lg-n5,\n  .my-lg-n5 {\n    margin-bottom: -3rem !important;\n}\n.ml-lg-n5,\n  .mx-lg-n5 {\n    margin-left: -3rem !important;\n}\n.m-lg-auto {\n    margin: auto !important;\n}\n.mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important;\n}\n.mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important;\n}\n.mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important;\n}\n.ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important;\n}\n}\n@media (min-width: 1200px) {\n.m-xl-0 {\n    margin: 0 !important;\n}\n.mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important;\n}\n.mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important;\n}\n.mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important;\n}\n.ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important;\n}\n.m-xl-1 {\n    margin: 0.25rem !important;\n}\n.mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n}\n.mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n}\n.mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important;\n}\n.ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important;\n}\n.m-xl-2 {\n    margin: 0.5rem !important;\n}\n.mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n}\n.mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n}\n.mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important;\n}\n.ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important;\n}\n.m-xl-3 {\n    margin: 1rem !important;\n}\n.mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important;\n}\n.mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n}\n.mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important;\n}\n.ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important;\n}\n.m-xl-4 {\n    margin: 1.5rem !important;\n}\n.mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n}\n.mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n}\n.mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important;\n}\n.ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important;\n}\n.m-xl-5 {\n    margin: 3rem !important;\n}\n.mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important;\n}\n.mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n}\n.mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important;\n}\n.ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important;\n}\n.p-xl-0 {\n    padding: 0 !important;\n}\n.pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important;\n}\n.pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important;\n}\n.pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important;\n}\n.pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important;\n}\n.p-xl-1 {\n    padding: 0.25rem !important;\n}\n.pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n}\n.pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n}\n.pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important;\n}\n.pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important;\n}\n.p-xl-2 {\n    padding: 0.5rem !important;\n}\n.pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n}\n.pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n}\n.pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important;\n}\n.pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important;\n}\n.p-xl-3 {\n    padding: 1rem !important;\n}\n.pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important;\n}\n.pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important;\n}\n.pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important;\n}\n.pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important;\n}\n.p-xl-4 {\n    padding: 1.5rem !important;\n}\n.pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n}\n.pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n}\n.pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important;\n}\n.pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important;\n}\n.p-xl-5 {\n    padding: 3rem !important;\n}\n.pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important;\n}\n.pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important;\n}\n.pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important;\n}\n.pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important;\n}\n.m-xl-n1 {\n    margin: -0.25rem !important;\n}\n.mt-xl-n1,\n  .my-xl-n1 {\n    margin-top: -0.25rem !important;\n}\n.mr-xl-n1,\n  .mx-xl-n1 {\n    margin-right: -0.25rem !important;\n}\n.mb-xl-n1,\n  .my-xl-n1 {\n    margin-bottom: -0.25rem !important;\n}\n.ml-xl-n1,\n  .mx-xl-n1 {\n    margin-left: -0.25rem !important;\n}\n.m-xl-n2 {\n    margin: -0.5rem !important;\n}\n.mt-xl-n2,\n  .my-xl-n2 {\n    margin-top: -0.5rem !important;\n}\n.mr-xl-n2,\n  .mx-xl-n2 {\n    margin-right: -0.5rem !important;\n}\n.mb-xl-n2,\n  .my-xl-n2 {\n    margin-bottom: -0.5rem !important;\n}\n.ml-xl-n2,\n  .mx-xl-n2 {\n    margin-left: -0.5rem !important;\n}\n.m-xl-n3 {\n    margin: -1rem !important;\n}\n.mt-xl-n3,\n  .my-xl-n3 {\n    margin-top: -1rem !important;\n}\n.mr-xl-n3,\n  .mx-xl-n3 {\n    margin-right: -1rem !important;\n}\n.mb-xl-n3,\n  .my-xl-n3 {\n    margin-bottom: -1rem !important;\n}\n.ml-xl-n3,\n  .mx-xl-n3 {\n    margin-left: -1rem !important;\n}\n.m-xl-n4 {\n    margin: -1.5rem !important;\n}\n.mt-xl-n4,\n  .my-xl-n4 {\n    margin-top: -1.5rem !important;\n}\n.mr-xl-n4,\n  .mx-xl-n4 {\n    margin-right: -1.5rem !important;\n}\n.mb-xl-n4,\n  .my-xl-n4 {\n    margin-bottom: -1.5rem !important;\n}\n.ml-xl-n4,\n  .mx-xl-n4 {\n    margin-left: -1.5rem !important;\n}\n.m-xl-n5 {\n    margin: -3rem !important;\n}\n.mt-xl-n5,\n  .my-xl-n5 {\n    margin-top: -3rem !important;\n}\n.mr-xl-n5,\n  .mx-xl-n5 {\n    margin-right: -3rem !important;\n}\n.mb-xl-n5,\n  .my-xl-n5 {\n    margin-bottom: -3rem !important;\n}\n.ml-xl-n5,\n  .mx-xl-n5 {\n    margin-left: -3rem !important;\n}\n.m-xl-auto {\n    margin: auto !important;\n}\n.mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important;\n}\n.mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important;\n}\n.mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important;\n}\n.ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important;\n}\n}\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  pointer-events: auto;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0);\n}\n.text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #ffffff !important;\n}\n.text-primary {\n  color: #3a8696 !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: rgb(36.6682692308, 84.7163461538, 94.8317307692) !important;\n}\n.text-secondary {\n  color: #dde4eb !important;\n}\na.text-secondary:hover, a.text-secondary:focus {\n  color: rgb(172.8333333333, 189.75, 206.6666666667) !important;\n}\n.text-success {\n  color: #19d895 !important;\n}\na.text-success:hover, a.text-success:focus {\n  color: rgb(17.0643153527, 147.4356846473, 101.7033195021) !important;\n}\n.text-info {\n  color: #8862e0 !important;\n}\na.text-info:hover, a.text-info:focus {\n  color: rgb(90.1037234043, 40.4813829787, 205.0186170213) !important;\n}\n.text-warning {\n  color: #ffaf00 !important;\n}\na.text-warning:hover, a.text-warning:focus {\n  color: rgb(178.5, 122.5, 0) !important;\n}\n.text-danger {\n  color: #ff6258 !important;\n}\na.text-danger:hover, a.text-danger:focus {\n  color: rgb(255, 26.0808383234, 11.5) !important;\n}\n.text-light {\n  color: #fbfbfb !important;\n}\na.text-light:hover, a.text-light:focus {\n  color: rgb(212.75, 212.75, 212.75) !important;\n}\n.text-dark {\n  color: #252C46 !important;\n}\na.text-dark:hover, a.text-dark:focus {\n  color: rgb(10.546728972, 12.5420560748, 19.953271028) !important;\n}\n.text-body {\n  color: #212529 !important;\n}\n.text-muted, .email-wrapper .mail-list-container .mail-list .details .date, .email-wrapper .mail-list-container .mail-list .content .message_text, .preview-list .preview-item .preview-item-content p .content-category {\n  color: #6c757d !important;\n}\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset {\n  color: inherit !important;\n}\n.visible {\n  visibility: visible !important;\n}\n.invisible {\n  visibility: hidden !important;\n}\n@media print {\n*,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important;\n}\na:not(.btn) {\n    text-decoration: underline;\n}\nabbr[title]::after {\n    content: \" (\" attr(title) \")\";\n}\npre {\n    white-space: pre-wrap !important;\n}\npre,\n  blockquote {\n    border: 1px solid #adb5bd;\n    page-break-inside: avoid;\n}\ntr,\n  img {\n    page-break-inside: avoid;\n}\np,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n}\nh2,\n  h3 {\n    page-break-after: avoid;\n}\n@page {\n    size: a3;\n}\nbody {\n    min-width: 992px !important;\n}\n.container {\n    min-width: 992px !important;\n}\n.navbar {\n    display: none;\n}\n.badge {\n    border: 1px solid #000;\n}\n.table {\n    border-collapse: collapse !important;\n}\n.table td,\n  .table th {\n    background-color: #ffffff !important;\n}\n.table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6 !important;\n}\n.table-dark {\n    color: inherit;\n}\n.table-dark th,\n  .table-dark td,\n  .table-dark thead th,\n  .table-dark tbody + tbody {\n    border-color: #dee2e6;\n}\n.table .thead-dark th {\n    color: inherit;\n    border-color: #dee2e6;\n}\n}\n/*-------------------------------------------------------------------*/\n/* === Template mixins === */\n/* Animation Mixins */\n@keyframes dropdownAnimation {\nfrom {\n    opacity: 0;\n    transform: translate3d(0, -30px, 0);\n}\nto {\n    opacity: 1;\n    transform: none;\n    transform: translate3d(0, 0px, 0);\n}\n}\n.dropdownAnimation, .nav .nav-item.dropdown .navbar-dropdown,\n.navbar-nav .nav-item.dropdown .navbar-dropdown {\n  animation-name: dropdownAnimation;\n  animation-duration: 0.25s;\n  animation-fill-mode: both;\n}\n@keyframes fadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n.fadeOut {\n  animation-name: fadeOut;\n}\n.infinite-spin {\n  animation-name: spin;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n@keyframes spin {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n@keyframes fadeInUp {\nfrom {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n}\nto {\n    opacity: 1;\n    transform: none;\n}\n}\n.fadeInUp {\n  animation-name: fadeInUp;\n}\n.email-wrapper .message-body .attachments-sections ul li .details p.file-name, .email-wrapper .mail-sidebar .menu-bar .profile-list-item a .user .u-designation, .email-wrapper .mail-sidebar .menu-bar .profile-list-item a .user .u-name, .email-wrapper .mail-list-container .mail-list .content .sender-name, .new-accounts ul.chats li.chat-persons a div.user p.u-designation, .new-accounts ul.chats li.chat-persons a div.user p.u-name, .list-wrapper ul li .form-check .form-check-label, .list-wrapper ul li .form-check {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n  white-space: nowrap;\n}\n\n/*-------------------------------------------------------------------*/\n/* === Core Styles === */\n/* Reset Styles */\nbody {\n  padding: 0;\n  margin: 0;\n  overflow-x: hidden;\n}\n.form-control,\n.form-control:focus {\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n}\n.form-control {\n  box-shadow: none;\n}\n.form-control:focus {\n  outline: 0;\n  box-shadow: none;\n}\na,\ndiv,\nh1,\nh2,\nh3,\nh4,\nh5,\np,\nspan {\n  text-shadow: none;\n}\n[type=button]:focus,\na:active,\na:focus,\na:visited,\nbutton::-moz-focus-inner,\ninput[type=reset]::-moz-focus-inner,\ninput[type=button]::-moz-focus-inner,\ninput[type=submit]::-moz-focus-inner,\ninput[type=file] > input[type=button]::-moz-focus-inner,\nselect::-moz-focus-inner {\n  outline: 0;\n}\ninput,\n.form-control:focus,\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n  outline: none;\n  outline-width: 0;\n  outline-color: transparent;\n  box-shadow: none;\n  outline-style: none;\n}\ntextarea {\n  resize: none;\n  overflow-x: hidden;\n}\n.btn,\n.btn-group.open .dropdown-toggle,\n.btn:active,\n.btn:focus,\n.btn:hover,\n.btn:visited,\na,\na:active,\na:checked,\na:focus,\na:hover,\na:visited,\nbody,\nbutton,\nbutton:active,\nbutton:hover,\nbutton:visited,\ndiv,\ninput,\ninput:active,\ninput:focus,\ninput:hover,\ninput:visited,\nselect,\nselect:active,\nselect:focus,\nselect:visited,\ntextarea,\ntextarea:active,\ntextarea:focus,\ntextarea:hover,\ntextarea:visited {\n  box-shadow: none;\n}\n.btn.active.focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn:active:focus,\n.btn:focus,\nbutton,\nbutton:active,\nbutton:checked,\nbutton:focus,\nbutton:hover,\nbutton:visited {\n  outline: 0;\n  outline-offset: 0;\n}\n.bootstrap-select .dropdown-toggle:focus {\n  outline: 0 !important;\n  outline-offset: 0;\n}\n.dropdown-menu > li > a:active,\n.dropdown-menu > li > a:focus,\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:visited {\n  outline: 0 !important;\n}\na:focus,\ninput:focus {\n  border-color: transparent;\n  outline: none;\n}\n\n/* Fonts */\n.text-twitter {\n  color: #4DBFF5;\n}\n.text-facebook {\n  color: #648ACA;\n}\n.text-google {\n  color: #E55F4B;\n}\n.text-linkedin {\n  color: #0177b4;\n}\n.text-pinterest {\n  color: #cc2127;\n}\n.text-youtube {\n  color: #e52d27;\n}\n.text-github {\n  color: #333333;\n}\n.text-behance {\n  color: #1769ff;\n}\n.text-dribbble {\n  color: #ea4c89;\n}\n.text-reddit {\n  color: #ff4500;\n}\n.bg-twitter {\n  background: #4DBFF5;\n}\n.bg-facebook {\n  background: #648ACA;\n}\n.bg-google {\n  background: #E55F4B;\n}\n.bg-linkedin {\n  background: #0177b4;\n}\n.bg-pinterest {\n  background: #cc2127;\n}\n.bg-youtube {\n  background: #e52d27;\n}\n.bg-github {\n  background: #333333;\n}\n.bg-behance {\n  background: #1769ff;\n}\n.bg-dribbble {\n  background: #ea4c89;\n}\n.bg-reddit {\n  background: #ff4500;\n}\n\n/* Typography */\n:root,\nbody {\n  font-size: 1.12rem;\n  font-family: \"roboto\", sans-serif;\n  color: #212529;\n}\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"roboto\", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n}\np,\na:not([href]):not([tabindex]) {\n  color: #212529;\n  font-size: 0.875rem;\n}\n.h1,\nh1 {\n  font-size: 2.3125rem;\n}\n.h2,\nh2 {\n  font-size: 2rem;\n}\n.h3,\nh3 {\n  font-size: 1.6875rem;\n}\n.h4,\nh4 {\n  font-size: 1.25rem;\n}\n.h5,\nh5 {\n  font-size: 1.0625rem;\n}\n.h6,\nh6 {\n  font-size: 1rem;\n}\np {\n  font-size: 0.875rem;\n}\n.display-1 {\n  font-size: 3.75rem;\n}\n@media (max-width: 991px) {\n.display-1 {\n    font-size: 3rem;\n}\n}\n.display-2 {\n  font-size: 3.125rem;\n}\n@media (max-width: 991px) {\n.display-2 {\n    font-size: 2.5rem;\n}\n}\n.display-3 {\n  font-size: 2.5rem;\n}\n@media (max-width: 991px) {\n.display-3 {\n    font-size: 2rem;\n}\n}\n.display-4 {\n  font-size: 1.875rem;\n}\n@media (max-width: 991px) {\n.display-4 {\n    font-size: 1.5rem;\n}\n}\n.display-5 {\n  font-size: 1.25rem;\n}\n@media (max-width: 991px) {\n.display-5 {\n    font-size: 1rem;\n}\n}\n.blockquote {\n  padding: 1.25rem;\n  border: 1px solid #cdd6dc;\n}\naddress p {\n  margin-bottom: 0;\n}\n.blockquote-primary {\n  border-color: #3a8696;\n}\n.blockquote-primary .blockquote-footer {\n  color: #3a8696;\n}\n.blockquote-secondary {\n  border-color: #dde4eb;\n}\n.blockquote-secondary .blockquote-footer {\n  color: #dde4eb;\n}\n.blockquote-success {\n  border-color: #19d895;\n}\n.blockquote-success .blockquote-footer {\n  color: #19d895;\n}\n.blockquote-info {\n  border-color: #8862e0;\n}\n.blockquote-info .blockquote-footer {\n  color: #8862e0;\n}\n.blockquote-warning {\n  border-color: #ffaf00;\n}\n.blockquote-warning .blockquote-footer {\n  color: #ffaf00;\n}\n.blockquote-danger {\n  border-color: #ff6258;\n}\n.blockquote-danger .blockquote-footer {\n  color: #ff6258;\n}\n.blockquote-light {\n  border-color: #fbfbfb;\n}\n.blockquote-light .blockquote-footer {\n  color: #fbfbfb;\n}\n.blockquote-dark {\n  border-color: #252C46;\n}\n.blockquote-dark .blockquote-footer {\n  color: #252C46;\n}\n.page-title {\n  color: #212529;\n  margin: 0.38rem 0 0.75rem;\n}\n.card-title {\n  font-family: \"roboto\", sans-serif;\n  font-weight: 500;\n  color: #212229;\n  margin-bottom: 15px;\n  font-size: 14px;\n  text-transform: capitalize;\n}\n.rtl .card-title {\n  text-align: right;\n}\n.card-subtitle {\n  font-weight: 300;\n  font-family: \"roboto\", sans-serif;\n  margin-top: 0.625rem;\n  margin-bottom: 0.625rem;\n}\n.card-description {\n  margin-bottom: 0.9375rem;\n  font-family: \"roboto\", sans-serif;\n}\n.rtl .card-description {\n  text-align: right;\n}\n.font-weight-normal {\n  font-weight: 400;\n}\n.font-weight-medium {\n  font-weight: 500;\n}\n.font-weight-semibold {\n  font-weight: 600;\n}\nsmall,\n.text-small,\n.fc.fc-unthemed .fc-view-container .fc-view table tbody.fc-body tr td.fc-widget-content .fc-day-grid-container .fc-day-grid .fc-row .fc-content-skeleton table tbody tr td.fc-event-container .fc-h-event {\n  font-size: 12px;\n}\n.icon-lg {\n  font-size: 2.5rem;\n}\n.icon-md {\n  font-size: 1.875rem;\n}\n.icon-sm {\n  font-size: 1.3rem;\n}\n\n/* Utilities */\n.logo {\n  width: 150px;\n  max-width: 100%;\n}\n.grid-margin, .proBanner .purchase-popup {\n  margin-bottom: 25px;\n}\n@media (min-width: 576px) {\n.grid-margin-sm-0 {\n    margin-bottom: 0;\n}\n}\n@media (min-width: 768px) {\n.grid-margin-md-0 {\n    margin-bottom: 0;\n}\n}\n@media (min-width: 992px) {\n.grid-margin-lg-0 {\n    margin-bottom: 0;\n}\n}\n@media (min-width: 1200px) {\n.grid-margin-xl-0 {\n    margin-bottom: 0;\n}\n}\n.rounded-circle[class*=img] {\n  position: relative;\n  overflow: hidden;\n}\n.rounded-circle[class*=img] .flag-icon {\n  position: absolute;\n  top: auto;\n  left: -10px;\n  right: 0;\n  bottom: auto;\n  width: calc(100% + 20px);\n  height: 100%;\n  display: block;\n  margin: auto;\n}\n.img-curved {\n  border-radius: 10px;\n}\n.img-raised {\n  box-shadow: 0 4px 8px 0 rgba(42, 55, 71, 0.15);\n}\n.img-lg {\n  width: 92px;\n  min-width: 92px;\n  height: 92px;\n}\n.img-md {\n  width: 60px;\n  min-width: 60px;\n  height: 60px;\n}\n.img-sm {\n  width: 43px;\n  min-width: 43px;\n  height: 43px;\n}\n.img-xs {\n  width: 32px;\n  min-width: 32px;\n  height: 32px;\n}\n.img-ss, .table td img:not(.thumb-image),\n.table th img:not(.thumb-image), .image-grouped .text-avatar,\n.image-grouped img {\n  width: 35px;\n  min-width: 35px;\n  height: 35px;\n}\n.img-curved {\n  border-radius: 10px;\n}\n.display-avatar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 43px;\n  min-width: 43px;\n  height: 43px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 100%;\n}\n.stretch-card {\n  display: flex;\n  align-items: stretch;\n  justify-content: stretch;\n}\n.stretch-card > .card {\n  width: 100%;\n  min-width: 100%;\n}\n.dot-indicator {\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n}\n.dot-indicator.dot-indicator-sm {\n  width: 6px;\n  height: 6px;\n}\n.border-indicator {\n  width: 10px;\n  height: 10px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #cdd6dc;\n  border-radius: 100%;\n}\n.dropdown-divider {\n  border-color: #cdd6dc;\n}\n@media (min-width: 576px) {\n.border-right-sm {\n    border-right: 1px solid #cdd6dc;\n}\n}\n@media (min-width: 768px) {\n.border-right-md {\n    border-right: 1px solid #cdd6dc;\n}\n}\n@media (min-width: 992px) {\n.border-right-lg {\n    border-right: 1px solid #cdd6dc;\n}\n}\n@media (min-width: 576px) {\n.border-left-sm {\n    border-left: 1px solid #cdd6dc;\n}\n}\n.border-strong {\n  border-color: rgb(7, 8.8, 10);\n}\n.count-wrapper {\n  position: relative;\n}\n.count-wrapper .count {\n  position: absolute;\n  width: auto;\n  min-width: 8px;\n  min-height: 8px;\n  padding: 2px 4px;\n  font-size: 75%;\n  line-height: 1;\n  vertical-align: middle;\n  border-radius: 100%;\n  color: #ffffff;\n  font-weight: 500;\n}\n.count-wrapper .count.top-right {\n  top: -5px;\n  right: 0;\n}\n.count-wrapper .count.bottom-right {\n  bottom: -5px;\n  right: 0;\n}\n.count-wrapper .count.bottom-left {\n  bottom: -5px;\n  left: 0;\n}\n.count-wrapper .count.top-left {\n  top: -5px;\n  left: 0;\n}\n@media (min-width: 768px) {\n.border-left-md {\n    border-left: 1px solid #cdd6dc;\n}\n}\n@media (min-width: 992px) {\n.border-left-lg {\n    border-left: 1px solid #cdd6dc;\n}\n}\n.text-gray, .new-accounts ul.chats li.chat-persons a p.joined-date, .card-subtitle {\n  color: #212529;\n}\n.text-black {\n  color: #000;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.ellipsis, .chat-app-wrapper .chat-list-wrapper .chat-list-item-wrapper .list-item .user-name {\n  max-width: 95%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.no-wrap {\n  white-space: nowrap;\n}\n.status-indicator {\n  border-width: 2px;\n  border-style: solid;\n  border-color: #ffaf00;\n  border-radius: 100%;\n  display: inline-block;\n  height: 8px;\n  width: 8px;\n}\n.status-indicator.online {\n  border-color: #19d895;\n}\n.status-indicator.offline {\n  border-color: #3a8696;\n}\n.status-indicator.away {\n  border-color: #ffaf00;\n}\n.bg-transparent {\n  background: transparent;\n}\n.aligner-wrapper {\n  position: relative;\n}\n.aligner-wrapper .absolute {\n  position: absolute;\n}\n.aligner-wrapper .absolute.absolute-center {\n  top: 50%;\n  transform: translateY(-50%);\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n}\n.aligner-wrapper .absolute.left {\n  left: 0;\n}\n.aligner-wrapper .absolute.right {\n  right: 0;\n}\n.aligner-wrapper .absolute.bottom {\n  bottom: 0;\n}\n.aligner-wrapper .absolute.top {\n  top: 0;\n}\n.image-grouped {\n  display: flex;\n}\n.image-grouped .text-avatar,\n.image-grouped img {\n  border-radius: 100%;\n  margin-left: -10px;\n  z-index: 0;\n  border: 4px solid #dde4eb;\n  transform: scale(1);\n  transition-duration: 0.3s;\n  transition-timing-function: ease;\n  transition-property: \"box-shadow\", \"z-index\", \"transform\", \"border-width\";\n}\n.image-grouped .text-avatar:first-child,\n.image-grouped img:first-child {\n  margin-left: 0;\n}\n.image-grouped .text-avatar:hover,\n.image-grouped img:hover {\n  z-index: 1;\n  box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.5);\n  transform: scale(1.05);\n  border-width: 0;\n}\n.image-grouped .text-avatar {\n  color: #3a8696;\n  font-size: 11px;\n  font-weight: 600;\n}\n.v-strock-1 {\n  width: 2px;\n}\n.v-strock-2 {\n  width: 3px;\n}\n.v-strock-3 {\n  width: 4px;\n}\n.v-strock-4 {\n  width: 5px;\n}\n.h-strock-1 {\n  height: 2px;\n}\n.h-strock-2 {\n  height: 3px;\n}\n.h-strock-3 {\n  height: 4px;\n}\n.h-strock-4 {\n  height: 5px;\n}\n.bg-inverse-primary, .image-grouped .text-avatar {\n  background: rgba(58, 134, 150, 0.2);\n}\n.bg-inverse-secondary {\n  background: rgba(221, 228, 235, 0.2);\n}\n.bg-inverse-success {\n  background: rgba(25, 216, 149, 0.2);\n}\n.bg-inverse-info {\n  background: rgba(136, 98, 224, 0.2);\n}\n.bg-inverse-warning {\n  background: rgba(255, 175, 0, 0.2);\n}\n.bg-inverse-danger {\n  background: rgba(255, 98, 88, 0.2);\n}\n.bg-inverse-light {\n  background: rgba(251, 251, 251, 0.2);\n}\n.bg-inverse-dark {\n  background: rgba(37, 44, 70, 0.2);\n}\n.list {\n  padding-left: 0;\n}\n.list.list-noborders .list-item {\n  border: none;\n}\n.list .list-item {\n  display: flex;\n  align-items: center;\n  padding: 0 0 30px 0;\n}\n.list .list-item:first-child {\n  padding-top: 0;\n}\n.list .list-item:last-child {\n  padding-bottom: 0;\n}\n.text-transparent {\n  opacity: 0.6;\n}\n.text-avatar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n.user-avatar {\n  position: relative;\n  display: inline-block;\n}\n.user-avatar .edit-avatar-icon {\n  position: absolute;\n  bottom: 8%;\n  right: -10px;\n  height: 35px;\n  width: 35px;\n  border-radius: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #dde4eb;\n  color: #4d4c4c;\n  border: 3px solid #fff;\n}\n.user-avatar .edit-avatar-icon i {\n  font-size: 15px;\n}\n\n/* Demo Styles */\n.template-demo > .btn-group .btn {\n  margin: 0 !important;\n}\n.template-demo .progress {\n  margin-top: 1.5rem;\n}\n.template-demo > h2,\n.template-demo > h3,\n.template-demo > h4,\n.template-demo > h5,\n.template-demo > h6,\n.template-demo > h1 {\n  border-top: 1px solid #cdd6dc;\n  padding: 0.5rem 0 0;\n}\n.template-demo .ul-slider.noUi-horizontal {\n  margin-top: 2rem;\n}\n.template-demo .ul-slider.noUi-vertical {\n  margin-right: 2rem;\n}\n.template-demo .dropdown {\n  margin-bottom: 0.5rem;\n}\n.template-demo nav .breadcrumb {\n  margin-bottom: 1.375rem;\n}\n.template-demo nav:last-child .breadcrumb {\n  margin-bottom: 0;\n}\n.template-demo .editable-form > .form-group {\n  border-bottom: 1px solid #cdd6dc;\n  padding-bottom: 0.8rem;\n  margin-bottom: 0.8rem;\n}\n.template-demo .circle-progress {\n  padding: 15px;\n}\n.demo-modal {\n  position: static;\n  display: block;\n}\n.demo-modal .modal-dialog {\n  margin-top: 0 !important;\n}\n.demo-modal .modal-dialog.modal-lg {\n  max-width: 100%;\n}\n.documentation {\n  padding-top: 0;\n  max-width: 100%;\n}\n.documentation .content-wrapper {\n  padding-top: 0;\n  min-height: calc(100vh - 63px);\n}\n.doc-table-contents,\n.doc-header {\n  position: fixed;\n}\n.doc-header {\n  padding-top: 24px;\n  padding-bottom: 24px;\n  z-index: 2;\n  background: #F3F3F3;\n}\n.doc-content {\n  padding-top: 157px;\n}\n.doc-table-contents {\n  overflow: auto;\n  max-height: calc(100% - 157px);\n}\n.doc-table-contents ul li {\n  margin-top: 10px;\n}\n.doc-table-contents ul li:before {\n  font-size: 0.5rem;\n}\n.doc-credits ul li {\n  margin-bottom: 10px;\n}\n.doc-credits ul li a {\n  margin-left: 0.25rem;\n}\n.demo_blank_card.card-1 {\n  height: 100vh;\n  min-height: 400px;\n}\n.demo_blank_card.card-2 {\n  height: 320px;\n}\n.demo_blank_card.card-3 {\n  height: 500px;\n}\n.loader-demo-box {\n  width: 100%;\n  height: 200px;\n}\n#sales-statistics-legend .chartjs-legend {\n  margin-top: 20px;\n  margin-right: 20px;\n}\n#sales-statistics-legend .chartjs-legend ul li {\n  color: #212529;\n}\n#sales-statistics-legend .chartjs-legend ul li span {\n  width: 20px;\n  height: 3px;\n  border-radius: 0px;\n}\n#net-profit-legend .chartjs-legend li {\n  font-weight: 500;\n  color: #212529;\n}\n.average-price-card .card {\n  background: #002c5f;\n}\n.average-price-card h3 {\n  margin-bottom: 0;\n}\n.average-price-card .icon-holder {\n  border-radius: 5px;\n  border: 1px solid #002c5f;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #002c5f;\n  color: #fff;\n  font-size: 20px;\n}\n.average-price-card .icon-holder i {\n  line-height: 1;\n}\n#dashboard-vmap {\n  height: 161px;\n  width: 100%;\n}\n#dashboard-vmap .jvectormap-zoomin,\n#dashboard-vmap .jvectormap-zoomout {\n  display: none;\n}\n\n/* Dashboard */\n.card-statistics .highlight-icon {\n  height: 53px;\n  width: 53px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50px;\n}\n.card-statistics .highlight-icon i {\n  font-size: 27px;\n}\n.card-statistics .card-col {\n  border-right: 1px solid #cdd6dc;\n}\n.card-statistics .card-col:last-child {\n  border-right: none;\n}\n@media (max-width: 767.98px) {\n.card-statistics .card-col {\n    padding-left: 0;\n    padding-right: 0;\n    position: relative;\n    border: none;\n}\n.card-statistics .card-col:first-child:after, .card-statistics .card-col:first-child:before, .card-statistics .card-col:nth-child(2):after, .card-statistics .card-col:nth-child(2):before, .card-statistics .card-col:nth-child(3):after, .card-statistics .card-col:nth-child(3):before {\n    content: \"\";\n    position: absolute;\n    background: #cdd6dc;\n}\n.card-statistics .card-col:first-child:before {\n    bottom: 0;\n    width: 94.2%;\n    height: 1px;\n    right: 0;\n}\n.card-statistics .card-col:first-child:after {\n    bottom: 0;\n    width: 1px;\n    height: 100%;\n    right: 0;\n}\n.card-statistics .card-col:nth-child(2):before {\n    bottom: 0;\n    width: 94.2%;\n    height: 1px;\n    left: 0;\n}\n.card-statistics .card-col:nth-child(3):before {\n    width: 1px;\n    height: 100%;\n    right: 0;\n}\n}\n.card-revenue-table .revenue-item {\n  border-bottom: 1px solid #cdd6dc;\n}\n.card-revenue-table .revenue-item:last-child {\n  border-bottom: 0;\n}\n.card-revenue-table .revenue-item .revenue-desc {\n  margin-right: auto;\n  width: 80%;\n}\n.card-revenue-table .revenue-item .revenue-desc p {\n  margin-bottom: 0;\n}\n.card-revenue-table .revenue-item .revenue-amount {\n  margin-left: auto;\n  width: 40%;\n}\n.card-revenue-table .revenue-item .revenue-amount p {\n  font-size: 1.25rem;\n  font-family: \"roboto\", sans-serif;\n  font-weight: 600;\n  text-align: right;\n}\n.rtl .card-revenue-table .revenue-item .revenue-amount p {\n  text-align: left;\n}\n.card-revenue {\n  background: linear-gradient(120deg, #556cdc, #128bfc, #18bef1);\n  background-size: cover;\n  color: #ffffff;\n}\n.card-revenue .highlight-text {\n  font-size: 1.875rem;\n  font-family: \"roboto\", sans-serif;\n  font-weight: 500;\n}\n.card-revenue .badge {\n  background-color: rgba(255, 255, 255, 0.2);\n  font-size: 1.125rem;\n  padding: 0.5rem 1.25rem;\n}\n.card-weather {\n  background: #dde4eb;\n}\n.card-weather .card-body {\n  background: #ffffff;\n}\n.card-weather .card-body:first-child {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center;\n  background-size: cover;\n}\n.card-weather .weather-date-location {\n  padding: 0 0 38px;\n}\n.card-weather .weather-data {\n  padding: 0 0 4.75rem;\n}\n.card-weather .weather-data i {\n  font-size: 5.313rem;\n  line-height: 1;\n}\n.card-weather .weakly-weather {\n  background: #dde4eb;\n  overflow-x: auto;\n}\n.card-weather .weakly-weather .weakly-weather-item {\n  flex: 0 0 14.28%;\n  border-right: 1px solid #cdd6dc;\n  padding: 1rem;\n  text-align: center;\n}\n.card-weather .weakly-weather .weakly-weather-item i {\n  font-size: 1.2rem;\n}\n.card-weather .weakly-weather .weakly-weather-item:last-child {\n  border-right: 0;\n}\n.card-weather .weakly-weather .weakly-weather-item .symbol {\n  color: #6c757d;\n  font-size: 1.875rem;\n  font-weight: 300;\n}\n.product-chart-wrapper {\n  height: 92%;\n}\n#dashboardTrendingProgress {\n  width: 60px;\n}\n.dashboard-bar-chart-legend .col {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.dashboard-bar-chart-legend .col .bg {\n  margin-left: auto;\n  margin-right: auto;\n  height: 5px;\n  width: 30px;\n  display: block;\n  margin-top: 5px;\n}\n.dashboard-bar-chart-legend .col:nth-child(1) .bg {\n  background: #8862e0;\n}\n.dashboard-bar-chart-legend .col:nth-child(2) .bg {\n  background: #3a8696;\n}\n.dashboard-bar-chart-legend .col:nth-child(3) .bg {\n  background: #ff6258;\n}\n.intro-banner {\n  background: #dbe4ec;\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  border-radius: 2px;\n}\n.intro-banner .banner-image {\n  width: 24%;\n  max-width: 100%;\n}\n.intro-banner .banner-image img {\n  display: block;\n  margin: auto;\n}\n.intro-banner .content-area {\n  width: 58%;\n  color: #000;\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n}\n.sales-mini-tabs {\n  border-bottom: none;\n}\n.sales-mini-tabs .nav-item .nav-link {\n  border: none;\n  font-weight: 500;\n  padding: 5px 15px;\n  border-radius: 2px;\n  transition-duration: 0.7s;\n  transition-property: \"color\";\n}\n.sales-mini-tabs .nav-item .nav-link.active {\n  font-weight: 600;\n  background: rgb(233.8444444444, 238.2, 242.5555555556);\n  color: #3a8696;\n}\n.calendar-aside {\n  display: block;\n}\n.calendar-aside .list {\n  position: relative;\n  padding: 10px 8px;\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n  transition-duration: 0.25s;\n  transition-property: background;\n}\n.calendar-aside .list .user-text {\n  margin-bottom: 0;\n  margin-left: 20px;\n  font-size: 0.875rem;\n}\n.calendar-aside .list .count {\n  width: 20px;\n  height: 20px;\n  position: relative;\n  border-radius: 50px;\n  transition-duration: 0.25s;\n  transition-timing-function: ease;\n  transition-property: opacity;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.calendar-aside .list .count:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  display: block;\n  height: 10px;\n  width: 10px;\n  margin: auto;\n  border-radius: 50px;\n  transform: translateY(-50%);\n  transition-duration: 0.25s;\n  transition-timing-function: ease;\n}\n.calendar-aside .list .count.online:before {\n  background: #19d895;\n}\n.calendar-aside .list .count.offline:before {\n  background: #ff6258;\n}\n.calendar-aside .list .count .close {\n  font-size: 15px;\n  margin: auto;\n  opacity: 0;\n  color: #ff6258;\n  transition-duration: 0.25s;\n  transition-timing-function: ease;\n}\n.calendar-aside .list:hover {\n  background: #fbfbfb;\n}\n.calendar-aside .list:hover .count:before {\n  z-index: 0;\n  height: 20px;\n  width: 20px;\n  background: #fbfbfb;\n}\n.calendar-aside .list:hover .count .close {\n  z-index: 2;\n  opacity: 1;\n}\n.data-list {\n  width: 100%;\n  overflow: auto;\n}\n.data-list .list-item {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  width: 100%;\n  padding: 10px;\n  border-bottom: 1px solid #cdd6dc;\n}\n.data-list .list-item:last-child {\n  border-bottom: none;\n}\n.data-list .list-item .graph {\n  margin-left: auto;\n  width: 110px;\n}\n#sourceLineChartLegend {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n#sourceLineChartLegend li {\n  display: inline-block;\n  margin-right: 20px;\n  color: #6c757d;\n}\n#sourceLineChartLegend li .chart-color {\n  height: 10px;\n  width: 10px;\n  display: inline-block;\n  margin-right: 5px;\n  border-radius: 100%;\n}\n.rtl #sourceLineChartLegend li .chart-color {\n  margin-right: 0px;\n  margin-left: 5px;\n}\n#sourceLineChartLegend li:last-child {\n  margin-right: 0;\n}\n.rtl #sourceLineChartLegend li {\n  margin-right: 0px;\n  margin-left: 20px;\n}\n.rtl #sourceLineChartLegend li:last-child {\n  margin-left: 0px;\n}\n.social-card.card-default .action-bar i {\n  color: #dde4eb;\n}\n.social-card.card-default .comment {\n  color: #6c757d;\n}\n.social-card.card-default .posted-date {\n  color: #3a8696;\n}\n.social-card.card-colored .card-header {\n  background: inherit;\n}\n.social-card.card-colored.facebook-card {\n  background: #648ACA;\n}\n.social-card.card-colored.facebook-card .card-header {\n  border-bottom-color: rgb(80.9975961538, 123.65625, 195.5024038462);\n}\n.social-card.card-colored.twitter-card {\n  background: #4DBFF5;\n}\n.social-card.card-colored.twitter-card .card-header {\n  border-bottom-color: rgb(52.8563829787, 182.3191489362, 243.6436170213);\n}\n.social-card.card-colored.google-card {\n  background: #E55F4B;\n}\n.social-card.card-colored.google-card .card-header {\n  border-bottom-color: rgb(225.7815533981, 75.1941747573, 52.7184466019);\n}\n.social-card.card-colored.linkedin-card {\n  background: #0177b4;\n}\n.social-card.card-colored.linkedin-card .card-header {\n  border-bottom-color: rgb(0.8591160221, 102.2348066298, 154.6408839779);\n}\n.social-card.card-colored a,\n.social-card.card-colored .media-info,\n.social-card.card-colored .user-name,\n.social-card.card-colored .comment,\n.social-card.card-colored .posted-date,\n.social-card.card-colored .platform-name,\n.social-card.card-colored .headline,\n.social-card.card-colored .action-bar {\n  color: #ffffff;\n}\n.top-selling-card .column-wrapper {\n  display: flex;\n  justify-content: space-around;\n}\n.top-selling-card .column-wrapper .column {\n  width: 45%;\n  padding: 25px 26px;\n  border-radius: 3px;\n  background: #ffffff;\n  transform: translateY(-25px);\n  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n}\n.top-selling-card .column-wrapper .column i {\n  font-size: 20px;\n}\n.top-selling-card .item-wrapper {\n  max-height: 210px;\n  overflow-y: auto;\n}\n.review-card .comment-text {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n  white-space: nowrap;\n  max-width: 70%;\n}\n.list-item {\n  display: flex;\n  width: 100%;\n  padding: 20px 0;\n  border-bottom: 1px solid #cdd6dc;\n}\n.list-item:first-child {\n  padding-top: 30px;\n}\n.list-item:last-child {\n  border-bottom: none;\n}\n.list-item .preview-image {\n  max-width: 80px;\n  width: 80px;\n  min-width: 80px;\n}\n.list-item .preview-image img {\n  display: block;\n  margin: auto;\n}\n.list-item .content {\n  width: calc(100% - 80px);\n  padding-right: 30px;\n}\n.list-item .content .user-name {\n  margin-bottom: 0;\n  margin-right: 10px;\n  color: #6c757d;\n  white-space: nowrap;\n}\n.list-item .content .time {\n  color: #6c757d;\n  margin-bottom: 3px;\n}\n.list-item .content .product-name {\n  font-weight: 500;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n  white-space: nowrap;\n}\n.list-item .content .review-text {\n  margin-bottom: 0;\n  font-weight: 300;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n  white-space: nowrap;\n  max-width: 95%;\n}\n.todo-list .todo-item {\n  border: 1px solid #cdd6dc;\n  border-radius: 6px;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.todo-list .todo-item form {\n  display: flex;\n}\n.todo-list .todo-item form .checkbox {\n  width: 40px;\n}\n.todo-list .todo-item form .checkbox .form-check {\n  margin-left: 10px;\n}\n.todo-list .todo-item form .checkbox .form-check .input-helper:after {\n  line-height: 0px;\n}\n.todo-list .todo-item form .field-wrapper {\n  width: calc(100% - 40px);\n}\n.todo-list .todo-item form .field-wrapper .form-group .form-control {\n  font-weight: 500;\n}\n.todo-list .todo-item form .field-wrapper .form-group .tagsinput .tag {\n  color: #6c757d;\n}\n.todo-list .todo-item form .field-wrapper .form-group .tagsinput .tag:before {\n  content: \"#\";\n  display: inline-block;\n}\n.todo-list .todo-item form .field-wrapper .form-group .btn {\n  margin-right: 10px;\n}\n.todo-list .todo-item form .field-wrapper .form-group .btn:last-child {\n  margin-right: 0;\n}\n.todo-list .todo-item:not(.edit-mode) {\n  position: relative;\n}\n.todo-list .todo-item:not(.edit-mode) .edit-icon {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 10px;\n  cursor: pointer;\n}\n.todo-list .todo-item:not(.edit-mode):hover {\n  background: #fbfbfb;\n}\n.todo-list .todo-item:not(.edit-mode):hover .edit-icon {\n  display: block;\n}\n.todo-list .todo-item:not(.edit-mode):hover * {\n  background: #fbfbfb;\n}\n.todo-list .todo-item:not(.edit-mode) form .field-wrapper .form-group {\n  margin-bottom: 0;\n}\n.todo-list .todo-item:not(.edit-mode) form .field-wrapper .form-group .tagsinput {\n  border: none;\n  height: 25px;\n  max-height: 25px !important;\n  min-height: 25px !important;\n  padding: 0px 13px !important;\n}\n.todo-list .todo-item:not(.edit-mode) form .field-wrapper .form-group .tagsinput .tag {\n  background: transparent;\n  padding: 0;\n  margin-bottom: 0;\n}\n.todo-list .todo-item:not(.edit-mode) form .field-wrapper .form-group .tagsinput .tag a {\n  display: none;\n}\n.todo-list .todo-item:not(.edit-mode) form .field-wrapper .form-group .tagsinput #todo-tags-1_addTag,\n.todo-list .todo-item:not(.edit-mode) form .field-wrapper .form-group .tagsinput .tags_clear {\n  display: none;\n}\n.todo-list .todo-item:not(.edit-mode) form .field-wrapper .form-group .form-control {\n  border: none;\n}\n.todo-list .todo-item:not(.edit-mode) form .field-wrapper .form-group .btn {\n  display: none;\n}\n.todo-list .todo-item:not(.edit-mode) form .field-wrapper .form-group.hidden-field {\n  display: none;\n}\n.todo-list .todo-item.edit-mode form .field-wrapper .form-group .tagsinput .tag {\n  color: #ffffff;\n}\n\n/*-------------------------------------------------------------------*/\n/* === Components === */\n/* Accordions */\n.accordion .card {\n  margin-bottom: 15px;\n  border: 1px solid #cdd6dc;\n  border-radius: 4px;\n}\n.accordion .card .card-header {\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  font-size: 14px;\n}\n.accordion .card .card-header a {\n  display: block;\n  padding: 0.75rem 1.7rem 0.75rem 1.25rem;\n  background: rgb(233.8444444444, 238.2, 242.5555555556);\n  color: #212529;\n  text-decoration: none;\n  font-size: 0.875rem;\n  position: relative;\n  font-weight: 600;\n  transition-property: border-color, background;\n  transition-duration: 0.5s;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n  white-space: nowrap;\n}\n.accordion .card .card-header a:before {\n  font-family: \"Material Design Icons\";\n  position: absolute;\n  right: 8px;\n  top: 16px;\n  font-size: 16px;\n  display: block;\n  font-weight: 500;\n  color: #212529;\n}\n.accordion .card .card-header a .card-icon {\n  margin-right: 15px;\n  font-size: 20px;\n}\n.accordion .card .card-body {\n  font-size: 0.88rem;\n  padding: 12px 20px 26px;\n}\n.accordion .card .card-body i {\n  font-size: 1.25rem;\n}\n.accordion.basic-accordion .card .card-header a[aria-expanded=true] {\n  background: rgb(246.6888888889, 248.4, 250.1111111111);\n}\n.accordion.basic-accordion .card .card-header a[aria-expanded=true]:before {\n  content: \"\\f374\";\n}\n.accordion.basic-accordion .card .card-header a[aria-expanded=false]:before {\n  content: \"\\f415\";\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+1) {\n  border-color: #8862e0;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+1) .card-header a .card-icon {\n  color: #8862e0;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+1) .card-header a:before {\n  color: #8862e0;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+1) .card-header a[aria-expanded=true] {\n  border-bottom: 1px solid #8862e0;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+1) .card-header a[aria-expanded=false] {\n  border-bottom: 1px solid #ffffff;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+2) {\n  border-color: #19d895;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+2) .card-header a .card-icon {\n  color: #19d895;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+2) .card-header a:before {\n  color: #19d895;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+2) .card-header a[aria-expanded=true] {\n  border-bottom: 1px solid #19d895;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+2) .card-header a[aria-expanded=false] {\n  border-bottom: 1px solid #ffffff;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+3) {\n  border-color: #3a8696;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+3) .card-header a .card-icon {\n  color: #3a8696;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+3) .card-header a:before {\n  color: #3a8696;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+3) .card-header a[aria-expanded=true] {\n  border-bottom: 1px solid #3a8696;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+3) .card-header a[aria-expanded=false] {\n  border-bottom: 1px solid #ffffff;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+4) {\n  border-color: #ffaf00;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+4) .card-header a .card-icon {\n  color: #ffaf00;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+4) .card-header a:before {\n  color: #ffaf00;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+4) .card-header a[aria-expanded=true] {\n  border-bottom: 1px solid #ffaf00;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+4) .card-header a[aria-expanded=false] {\n  border-bottom: 1px solid #ffffff;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+5) {\n  border-color: #ff6258;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+5) .card-header a .card-icon {\n  color: #ff6258;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+5) .card-header a:before {\n  color: #ff6258;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+5) .card-header a[aria-expanded=true] {\n  border-bottom: 1px solid #ff6258;\n}\n.accordion.accordion-multiple-outline .card:nth-child(5n+5) .card-header a[aria-expanded=false] {\n  border-bottom: 1px solid #ffffff;\n}\n.accordion.accordion-multiple-outline .card .card-header a[aria-expanded=true]:before {\n  content: \"\\f143\";\n}\n.accordion.accordion-multiple-outline .card .card-header a[aria-expanded=false]:before {\n  content: \"\\f140\";\n}\n.accordion.accordion-multiple-filled .card {\n  overflow: hidden;\n}\n.accordion.accordion-multiple-filled .card:nth-child(5n+1) .card-header a {\n  background: #8862e0;\n}\n.accordion.accordion-multiple-filled .card:nth-child(5n+1) .card-header a[aria-expanded=true] {\n  background: #8862e0;\n}\n.accordion.accordion-multiple-filled .card:nth-child(5n+1) .card-header a[aria-expanded=false] {\n  background: #8862e0;\n}\n.accordion.accordion-multiple-filled .card:nth-child(5n+2) .card-header a {\n  background: #19d895;\n}\n.accordion.accordion-multiple-filled .card:nth-child(5n+2) .card-header a[aria-expanded=true] {\n  background: #19d895;\n}\n.accordion.accordion-multiple-filled .card:nth-child(5n+2) .card-header a[aria-expanded=false] {\n  background: #19d895;\n}\n.accordion.accordion-multiple-filled .card:nth-child(5n+3) .card-header a {\n  background: #3a8696;\n}\n.accordion.accordion-multiple-filled .card:nth-child(5n+3) .card-header a[aria-expanded=true] {\n  background: #3a8696;\n}\n.accordion.accordion-multiple-filled .card:nth-child(5n+3) .card-header a[aria-expanded=false] {\n  background: #3a8696;\n}\n.accordion.accordion-multiple-filled .card:nth-child(5n+4) .card-header a {\n  background: #ffaf00;\n}\n.accordion.accordion-multiple-filled .card:nth-child(5n+4) .card-header a[aria-expanded=true] {\n  background: #ffaf00;\n}\n.accordion.accordion-multiple-filled .card:nth-child(5n+4) .card-header a[aria-expanded=false] {\n  background: #ffaf00;\n}\n.accordion.accordion-multiple-filled .card:nth-child(5n+5) .card-header a {\n  background: #ff6258;\n}\n.accordion.accordion-multiple-filled .card:nth-child(5n+5) .card-header a[aria-expanded=true] {\n  background: #ff6258;\n}\n.accordion.accordion-multiple-filled .card:nth-child(5n+5) .card-header a[aria-expanded=false] {\n  background: #ff6258;\n}\n.accordion.accordion-multiple-filled .card .card-header a {\n  padding-left: 2.5rem;\n  padding-right: 1rem;\n  color: #ffffff;\n  font-weight: 300;\n}\n.accordion.accordion-multiple-filled .card .card-header a:before {\n  left: 10px;\n  right: unset;\n  top: 12px;\n  color: #ffffff;\n}\n.accordion.accordion-multiple-filled .card .card-header a[aria-expanded=true]:before {\n  content: \"\\f143\";\n}\n.accordion.accordion-multiple-filled .card .card-header a[aria-expanded=false]:before {\n  content: \"\\f140\";\n}\n.accordion.accordion-solid-bg .card {\n  background: #fbfbfb;\n}\n.accordion.accordion-solid-bg .card .card-header a {\n  color: #8862e0;\n  font-weight: 400;\n}\n.accordion.accordion-solid-bg .card .card-header a:before {\n  top: 12px;\n  color: #8862e0;\n}\n.accordion.accordion-solid-bg .card .card-header a[aria-expanded=true] {\n  background: #fbfbfb;\n}\n.accordion.accordion-solid-bg .card .card-header a[aria-expanded=true]:before {\n  content: \"\\f143\";\n}\n.accordion.accordion-solid-bg .card .card-header a[aria-expanded=false] {\n  background: #ffffff;\n}\n.accordion.accordion-solid-bg .card .card-header a[aria-expanded=false]:before {\n  content: \"\\f140\";\n}\n.accordion.accordion-body-filled .card {\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  margin-bottom: 0;\n}\n.accordion.accordion-body-filled .card .card-header a {\n  padding: 23px 10px 23px 2.5rem;\n  font-weight: 300;\n}\n.accordion.accordion-body-filled .card .card-header a:before {\n  right: unset;\n  left: 8px;\n  top: 22px;\n  font-size: 24px;\n  transition-duration: 0.3s;\n  transition-property: color;\n}\n.accordion.accordion-body-filled .card .card-header a[aria-expanded=true]:before {\n  content: \"\\f376\";\n  color: #3a8696;\n}\n.accordion.accordion-body-filled .card .card-header a[aria-expanded=false]:before {\n  content: \"\\f417\";\n  color: #dde4eb;\n}\n.accordion.accordion-body-filled .card .card-body {\n  background: #3a8696;\n  color: #ffffff;\n  border-radius: 4px;\n}\n.accordion.accordion-minimal .card {\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  margin-bottom: 0;\n}\n.accordion.accordion-minimal .card .card-header a {\n  padding: 23px 20px;\n  transition-duration: 0.4s;\n  transition-property: font-weight;\n}\n.accordion.accordion-minimal .card .card-header a[aria-expanded=true] {\n  font-weight: 600;\n}\n.accordion.accordion-minimal .card .card-header a[aria-expanded=false] {\n  font-weight: 300;\n}\n.accordion.accordion-minimal .card .card-body {\n  padding: 30px 0;\n}\n\n/* inverse buttons */\n.accordion-inverse-primary {\n  background: rgba(58, 134, 150, 0.16);\n  color: #3a8696;\n  border: none;\n}\n.accordion-inverse-primary .card-header {\n  color: #3a8696;\n  border: none;\n}\n.accordion-inverse-primary .card-header a,\n.accordion-inverse-primary .card-header h1,\n.accordion-inverse-primary .card-header h2,\n.accordion-inverse-primary .card-header h3,\n.accordion-inverse-primary .card-header h4,\n.accordion-inverse-primary .card-header h5,\n.accordion-inverse-primary .card-header h6,\n.accordion-inverse-primary .card-header p,\n.accordion-inverse-primary .card-header span {\n  color: #3a8696 !important;\n}\n.accordion-inverse-primary .card-header a {\n  border-color: #3a8696;\n}\n.accordion-inverse-primary .card-header a:before {\n  color: #3a8696 !important;\n}\n.accordion-inverse-primary .card-header a[aria-expanded=true] {\n  border-bottom: 1px solid rgba(58, 134, 150, 0.16);\n}\n.accordion-inverse-primary .card-header a[aria-expanded=false] {\n  border-bottom: 1px solid transparent;\n}\n.accordion-inverse-secondary {\n  background: rgba(221, 228, 235, 0.16);\n  color: #dde4eb;\n  border: none;\n}\n.accordion-inverse-secondary .card-header {\n  color: #dde4eb;\n  border: none;\n}\n.accordion-inverse-secondary .card-header a,\n.accordion-inverse-secondary .card-header h1,\n.accordion-inverse-secondary .card-header h2,\n.accordion-inverse-secondary .card-header h3,\n.accordion-inverse-secondary .card-header h4,\n.accordion-inverse-secondary .card-header h5,\n.accordion-inverse-secondary .card-header h6,\n.accordion-inverse-secondary .card-header p,\n.accordion-inverse-secondary .card-header span {\n  color: #dde4eb !important;\n}\n.accordion-inverse-secondary .card-header a {\n  border-color: #dde4eb;\n}\n.accordion-inverse-secondary .card-header a:before {\n  color: #dde4eb !important;\n}\n.accordion-inverse-secondary .card-header a[aria-expanded=true] {\n  border-bottom: 1px solid rgba(221, 228, 235, 0.16);\n}\n.accordion-inverse-secondary .card-header a[aria-expanded=false] {\n  border-bottom: 1px solid transparent;\n}\n.accordion-inverse-success {\n  background: rgba(25, 216, 149, 0.16);\n  color: #19d895;\n  border: none;\n}\n.accordion-inverse-success .card-header {\n  color: #19d895;\n  border: none;\n}\n.accordion-inverse-success .card-header a,\n.accordion-inverse-success .card-header h1,\n.accordion-inverse-success .card-header h2,\n.accordion-inverse-success .card-header h3,\n.accordion-inverse-success .card-header h4,\n.accordion-inverse-success .card-header h5,\n.accordion-inverse-success .card-header h6,\n.accordion-inverse-success .card-header p,\n.accordion-inverse-success .card-header span {\n  color: #19d895 !important;\n}\n.accordion-inverse-success .card-header a {\n  border-color: #19d895;\n}\n.accordion-inverse-success .card-header a:before {\n  color: #19d895 !important;\n}\n.accordion-inverse-success .card-header a[aria-expanded=true] {\n  border-bottom: 1px solid rgba(25, 216, 149, 0.16);\n}\n.accordion-inverse-success .card-header a[aria-expanded=false] {\n  border-bottom: 1px solid transparent;\n}\n.accordion-inverse-info {\n  background: rgba(136, 98, 224, 0.16);\n  color: #8862e0;\n  border: none;\n}\n.accordion-inverse-info .card-header {\n  color: #8862e0;\n  border: none;\n}\n.accordion-inverse-info .card-header a,\n.accordion-inverse-info .card-header h1,\n.accordion-inverse-info .card-header h2,\n.accordion-inverse-info .card-header h3,\n.accordion-inverse-info .card-header h4,\n.accordion-inverse-info .card-header h5,\n.accordion-inverse-info .card-header h6,\n.accordion-inverse-info .card-header p,\n.accordion-inverse-info .card-header span {\n  color: #8862e0 !important;\n}\n.accordion-inverse-info .card-header a {\n  border-color: #8862e0;\n}\n.accordion-inverse-info .card-header a:before {\n  color: #8862e0 !important;\n}\n.accordion-inverse-info .card-header a[aria-expanded=true] {\n  border-bottom: 1px solid rgba(136, 98, 224, 0.16);\n}\n.accordion-inverse-info .card-header a[aria-expanded=false] {\n  border-bottom: 1px solid transparent;\n}\n.accordion-inverse-warning {\n  background: rgba(255, 175, 0, 0.16);\n  color: #ffaf00;\n  border: none;\n}\n.accordion-inverse-warning .card-header {\n  color: #ffaf00;\n  border: none;\n}\n.accordion-inverse-warning .card-header a,\n.accordion-inverse-warning .card-header h1,\n.accordion-inverse-warning .card-header h2,\n.accordion-inverse-warning .card-header h3,\n.accordion-inverse-warning .card-header h4,\n.accordion-inverse-warning .card-header h5,\n.accordion-inverse-warning .card-header h6,\n.accordion-inverse-warning .card-header p,\n.accordion-inverse-warning .card-header span {\n  color: #ffaf00 !important;\n}\n.accordion-inverse-warning .card-header a {\n  border-color: #ffaf00;\n}\n.accordion-inverse-warning .card-header a:before {\n  color: #ffaf00 !important;\n}\n.accordion-inverse-warning .card-header a[aria-expanded=true] {\n  border-bottom: 1px solid rgba(255, 175, 0, 0.16);\n}\n.accordion-inverse-warning .card-header a[aria-expanded=false] {\n  border-bottom: 1px solid transparent;\n}\n.accordion-inverse-danger {\n  background: rgba(255, 98, 88, 0.16);\n  color: #ff6258;\n  border: none;\n}\n.accordion-inverse-danger .card-header {\n  color: #ff6258;\n  border: none;\n}\n.accordion-inverse-danger .card-header a,\n.accordion-inverse-danger .card-header h1,\n.accordion-inverse-danger .card-header h2,\n.accordion-inverse-danger .card-header h3,\n.accordion-inverse-danger .card-header h4,\n.accordion-inverse-danger .card-header h5,\n.accordion-inverse-danger .card-header h6,\n.accordion-inverse-danger .card-header p,\n.accordion-inverse-danger .card-header span {\n  color: #ff6258 !important;\n}\n.accordion-inverse-danger .card-header a {\n  border-color: #ff6258;\n}\n.accordion-inverse-danger .card-header a:before {\n  color: #ff6258 !important;\n}\n.accordion-inverse-danger .card-header a[aria-expanded=true] {\n  border-bottom: 1px solid rgba(255, 98, 88, 0.16);\n}\n.accordion-inverse-danger .card-header a[aria-expanded=false] {\n  border-bottom: 1px solid transparent;\n}\n.accordion-inverse-light {\n  background: rgba(251, 251, 251, 0.16);\n  color: #fbfbfb;\n  border: none;\n}\n.accordion-inverse-light .card-header {\n  color: #fbfbfb;\n  border: none;\n}\n.accordion-inverse-light .card-header a,\n.accordion-inverse-light .card-header h1,\n.accordion-inverse-light .card-header h2,\n.accordion-inverse-light .card-header h3,\n.accordion-inverse-light .card-header h4,\n.accordion-inverse-light .card-header h5,\n.accordion-inverse-light .card-header h6,\n.accordion-inverse-light .card-header p,\n.accordion-inverse-light .card-header span {\n  color: #fbfbfb !important;\n}\n.accordion-inverse-light .card-header a {\n  border-color: #fbfbfb;\n}\n.accordion-inverse-light .card-header a:before {\n  color: #fbfbfb !important;\n}\n.accordion-inverse-light .card-header a[aria-expanded=true] {\n  border-bottom: 1px solid rgba(251, 251, 251, 0.16);\n}\n.accordion-inverse-light .card-header a[aria-expanded=false] {\n  border-bottom: 1px solid transparent;\n}\n.accordion-inverse-dark {\n  background: rgba(37, 44, 70, 0.16);\n  color: #252C46;\n  border: none;\n}\n.accordion-inverse-dark .card-header {\n  color: #252C46;\n  border: none;\n}\n.accordion-inverse-dark .card-header a,\n.accordion-inverse-dark .card-header h1,\n.accordion-inverse-dark .card-header h2,\n.accordion-inverse-dark .card-header h3,\n.accordion-inverse-dark .card-header h4,\n.accordion-inverse-dark .card-header h5,\n.accordion-inverse-dark .card-header h6,\n.accordion-inverse-dark .card-header p,\n.accordion-inverse-dark .card-header span {\n  color: #252C46 !important;\n}\n.accordion-inverse-dark .card-header a {\n  border-color: #252C46;\n}\n.accordion-inverse-dark .card-header a:before {\n  color: #252C46 !important;\n}\n.accordion-inverse-dark .card-header a[aria-expanded=true] {\n  border-bottom: 1px solid rgba(37, 44, 70, 0.16);\n}\n.accordion-inverse-dark .card-header a[aria-expanded=false] {\n  border-bottom: 1px solid transparent;\n}\n.accordion-outline-primary .card {\n  border-color: #3a8696;\n}\n.accordion-outline-primary .card .card-header {\n  border: none;\n}\n.accordion-outline-primary .card .card-header a {\n  border-color: #3a8696;\n}\n.accordion-outline-primary .card .card-header a:before {\n  color: #3a8696;\n}\n.accordion-outline-secondary .card {\n  border-color: #dde4eb;\n}\n.accordion-outline-secondary .card .card-header {\n  border: none;\n}\n.accordion-outline-secondary .card .card-header a {\n  border-color: #dde4eb;\n}\n.accordion-outline-secondary .card .card-header a:before {\n  color: #dde4eb;\n}\n.accordion-outline-success .card {\n  border-color: #19d895;\n}\n.accordion-outline-success .card .card-header {\n  border: none;\n}\n.accordion-outline-success .card .card-header a {\n  border-color: #19d895;\n}\n.accordion-outline-success .card .card-header a:before {\n  color: #19d895;\n}\n.accordion-outline-info .card {\n  border-color: #8862e0;\n}\n.accordion-outline-info .card .card-header {\n  border: none;\n}\n.accordion-outline-info .card .card-header a {\n  border-color: #8862e0;\n}\n.accordion-outline-info .card .card-header a:before {\n  color: #8862e0;\n}\n.accordion-outline-warning .card {\n  border-color: #ffaf00;\n}\n.accordion-outline-warning .card .card-header {\n  border: none;\n}\n.accordion-outline-warning .card .card-header a {\n  border-color: #ffaf00;\n}\n.accordion-outline-warning .card .card-header a:before {\n  color: #ffaf00;\n}\n.accordion-outline-danger .card {\n  border-color: #ff6258;\n}\n.accordion-outline-danger .card .card-header {\n  border: none;\n}\n.accordion-outline-danger .card .card-header a {\n  border-color: #ff6258;\n}\n.accordion-outline-danger .card .card-header a:before {\n  color: #ff6258;\n}\n.accordion-outline-light .card {\n  border-color: #fbfbfb;\n}\n.accordion-outline-light .card .card-header {\n  border: none;\n}\n.accordion-outline-light .card .card-header a {\n  border-color: #fbfbfb;\n}\n.accordion-outline-light .card .card-header a:before {\n  color: #fbfbfb;\n}\n.accordion-outline-dark .card {\n  border-color: #252C46;\n}\n.accordion-outline-dark .card .card-header {\n  border: none;\n}\n.accordion-outline-dark .card .card-header a {\n  border-color: #252C46;\n}\n.accordion-outline-dark .card .card-header a:before {\n  color: #252C46;\n}\n\n/* Badges */\n.badge {\n  border-radius: 0.25rem;\n  font-size: 11px;\n  font-weight: initial;\n  line-height: 1;\n  padding: 4px 6px;\n  font-family: \"roboto\", sans-serif;\n  font-weight: 600;\n  letter-spacing: 0.04rem;\n}\n.badge:empty {\n  display: inline-block;\n  min-width: 10px;\n  min-height: 10px;\n  padding: 0;\n  margin-right: 10px;\n  border-radius: 100%;\n}\n.rtl .badge:empty {\n  margin-left: 10px;\n  margin-right: 0;\n}\n.badge.badge-pill {\n  border-radius: 10rem;\n}\n.badge.badge-fw {\n  min-width: 70px;\n}\n.badge.badge-lg {\n  padding: 0.4rem 0.9rem;\n}\n\n/*Badge variations*/\n.badge-primary {\n  border: 1px solid #3a8696;\n  color: #ffffff;\n}\n.badge-secondary {\n  border: 1px solid #dde4eb;\n  color: #ffffff;\n}\n.badge-success, .preview-list .preview-item .preview-thumbnail .badge.badge-online {\n  border: 1px solid #19d895;\n  color: #ffffff;\n}\n.badge-info, .preview-list .preview-item .preview-thumbnail .badge.badge-offline {\n  border: 1px solid #8862e0;\n  color: #ffffff;\n}\n.badge-warning, .preview-list .preview-item .preview-thumbnail .badge.badge-busy {\n  border: 1px solid #ffaf00;\n  color: #ffffff;\n}\n.badge-danger {\n  border: 1px solid #ff6258;\n  color: #ffffff;\n}\n.badge-light {\n  border: 1px solid #fbfbfb;\n  color: #ffffff;\n}\n.badge-dark {\n  border: 1px solid #252C46;\n  color: #ffffff;\n}\n\n/*Badge inverse variations*/\n.badge-inverse-primary {\n  background: rgba(58, 134, 150, 0.3);\n  color: #3a8696;\n}\n.badge-inverse-secondary {\n  background: rgba(221, 228, 235, 0.3);\n  color: #dde4eb;\n}\n.badge-inverse-success {\n  background: rgba(25, 216, 149, 0.3);\n  color: #19d895;\n}\n.badge-inverse-info {\n  background: rgba(136, 98, 224, 0.3);\n  color: #8862e0;\n}\n.badge-inverse-warning {\n  background: rgba(255, 175, 0, 0.3);\n  color: #ffaf00;\n}\n.badge-inverse-danger {\n  background: rgba(255, 98, 88, 0.3);\n  color: #ff6258;\n}\n.badge-inverse-light {\n  background: rgba(251, 251, 251, 0.3);\n  color: #fbfbfb;\n}\n.badge-inverse-dark {\n  background: rgba(37, 44, 70, 0.3);\n  color: #252C46;\n}\n\n/*Badge outlined variations*/\n.badge-outline-primary {\n  color: #3a8696;\n  border: 1px solid #3a8696;\n}\n.badge-outline-secondary {\n  color: #dde4eb;\n  border: 1px solid #dde4eb;\n}\n.badge-outline-success {\n  color: #19d895;\n  border: 1px solid #19d895;\n}\n.badge-outline-info {\n  color: #8862e0;\n  border: 1px solid #8862e0;\n}\n.badge-outline-warning {\n  color: #ffaf00;\n  border: 1px solid #ffaf00;\n}\n.badge-outline-danger {\n  color: #ff6258;\n  border: 1px solid #ff6258;\n}\n.badge-outline-light {\n  color: #fbfbfb;\n  border: 1px solid #fbfbfb;\n}\n.badge-outline-dark {\n  color: #252C46;\n  border: 1px solid #252C46;\n}\n\n/* Bootstrap Progress */\n.progress {\n  border-radius: 3px;\n  height: 8px;\n  background: rgb(230.25, 230.25, 230.25);\n}\n.progress .progress-bar {\n  border-radius: 3px;\n}\n.progress.grouped .progress-bar {\n  border-radius: 0px;\n}\n.progress.grouped .progress-bar:last-child {\n  border-radius: 0px 3px 3px 0px;\n}\n.progress.progress-sm {\n  height: 0.375rem;\n}\n.progress.progress-md {\n  height: 8px;\n}\n.progress.progress-lg {\n  height: 15px;\n}\n.progress.progress-xl {\n  height: 18px;\n}\n\n/* Breadcrumbs */\n.breadcrumb .breadcrumb-item {\n  font-size: 0.875rem;\n}\n.breadcrumb .breadcrumb-item.active {\n  color: rgba(33, 37, 41, 0.8);\n}\n.breadcrumb.breadcrumb-custom {\n  padding: 0 0;\n  border-color: #dbe3e6;\n}\n.breadcrumb.breadcrumb-custom .breadcrumb-item {\n  font-size: 0.875rem;\n  background: #dbe3e6;\n  padding: 0.56rem 10px;\n  color: #212529;\n  display: inline-block;\n  vertical-align: top;\n}\n.breadcrumb.breadcrumb-custom .breadcrumb-item.active {\n  color: #212529;\n}\n.breadcrumb.breadcrumb-custom .breadcrumb-item:last-child {\n  background: transparent;\n}\n.breadcrumb.breadcrumb-custom .breadcrumb-item:before {\n  content: \"\";\n}\n.breadcrumb.breadcrumb-custom .breadcrumb-item a {\n  position: relative;\n  color: inherit;\n  border: 1px solid #dbe3e6;\n  display: inline-block;\n  vertical-align: top;\n}\n.breadcrumb.breadcrumb-custom .breadcrumb-item a:after, .breadcrumb.breadcrumb-custom .breadcrumb-item a:before {\n  position: absolute;\n  top: -9px;\n  width: 0;\n  height: 0;\n  content: \"\";\n  border-top: 21px solid transparent;\n  border-bottom: 21px solid transparent;\n}\n.breadcrumb.breadcrumb-custom .breadcrumb-item a:before {\n  right: -22px;\n  z-index: 3;\n  border-left-color: #dbe3e6;\n  border-left-style: solid;\n  border-left-width: 12px;\n}\n.breadcrumb.breadcrumb-custom .breadcrumb-item a:after {\n  border-top: 21px solid transparent;\n  border-bottom: 22px solid transparent;\n  border-left: 12px solid #ffffff;\n  top: -9px;\n  right: -23px;\n}\n.breadcrumb.breadcrumb-custom .breadcrumb-item span {\n  display: inline-block;\n  vertical-align: top;\n}\n.breadcrumb.bg-danger, .breadcrumb.bg-dark, .breadcrumb.bg-info, .breadcrumb.bg-primary, .breadcrumb.bg-success, .breadcrumb.bg-warning {\n  border: none;\n}\n.breadcrumb.bg-danger .breadcrumb-item, .breadcrumb.bg-dark .breadcrumb-item, .breadcrumb.bg-info .breadcrumb-item, .breadcrumb.bg-primary .breadcrumb-item, .breadcrumb.bg-success .breadcrumb-item, .breadcrumb.bg-warning .breadcrumb-item {\n  color: #000;\n}\n.breadcrumb.bg-danger .breadcrumb-item:before, .breadcrumb.bg-dark .breadcrumb-item:before, .breadcrumb.bg-info .breadcrumb-item:before, .breadcrumb.bg-primary .breadcrumb-item:before, .breadcrumb.bg-success .breadcrumb-item:before, .breadcrumb.bg-warning .breadcrumb-item:before {\n  color: inherit;\n}\n.breadcrumb.bg-danger .breadcrumb-item a,\n.breadcrumb.bg-danger .breadcrumb-item span, .breadcrumb.bg-dark .breadcrumb-item a,\n.breadcrumb.bg-dark .breadcrumb-item span, .breadcrumb.bg-info .breadcrumb-item a,\n.breadcrumb.bg-info .breadcrumb-item span, .breadcrumb.bg-primary .breadcrumb-item a,\n.breadcrumb.bg-primary .breadcrumb-item span, .breadcrumb.bg-success .breadcrumb-item a,\n.breadcrumb.bg-success .breadcrumb-item span, .breadcrumb.bg-warning .breadcrumb-item a,\n.breadcrumb.bg-warning .breadcrumb-item span {\n  color: inherit;\n}\n\n/* inverse breadcrumb */\n.bg-inverse-primary .breadcrumb, .image-grouped .text-avatar .breadcrumb {\n  background: rgb(129.1586538462, 192.9182692308, 206.3413461538);\n  border-color: #3a8696;\n}\n.bg-inverse-primary .breadcrumb .breadcrumb-item, .image-grouped .text-avatar .breadcrumb .breadcrumb-item {\n  color: #3a8696;\n}\n.bg-inverse-primary .breadcrumb .breadcrumb-item:before, .image-grouped .text-avatar .breadcrumb .breadcrumb-item:before {\n  color: inherit;\n}\n.bg-inverse-primary .breadcrumb .breadcrumb-item a, .image-grouped .text-avatar .breadcrumb .breadcrumb-item a {\n  color: inherit;\n}\n.bg-inverse-primary .breadcrumb.breadcrumb-custom, .image-grouped .text-avatar .breadcrumb.breadcrumb-custom {\n  background: #3a8696;\n}\n.bg-inverse-primary .breadcrumb.breadcrumb-custom .breadcrumb-item, .image-grouped .text-avatar .breadcrumb.breadcrumb-custom .breadcrumb-item {\n  background: rgb(129.1586538462, 192.9182692308, 206.3413461538);\n}\n.bg-inverse-primary .breadcrumb.breadcrumb-custom .breadcrumb-item a, .image-grouped .text-avatar .breadcrumb.breadcrumb-custom .breadcrumb-item a {\n  color: #3a8696;\n  border: none;\n}\n.bg-inverse-primary .breadcrumb.breadcrumb-custom .breadcrumb-item a:before, .image-grouped .text-avatar .breadcrumb.breadcrumb-custom .breadcrumb-item a:before {\n  border-left-color: rgb(129.1586538462, 192.9182692308, 206.3413461538);\n}\n.bg-inverse-primary .breadcrumb.breadcrumb-custom .breadcrumb-item span, .image-grouped .text-avatar .breadcrumb.breadcrumb-custom .breadcrumb-item span {\n  color: #3a8696;\n}\n.bg-inverse-primary .breadcrumb.breadcrumb-custom .breadcrumb-item:last-child, .image-grouped .text-avatar .breadcrumb.breadcrumb-custom .breadcrumb-item:last-child {\n  background: transparent;\n}\n.bg-inverse-secondary .breadcrumb {\n  background: white;\n  border-color: #dde4eb;\n}\n.bg-inverse-secondary .breadcrumb .breadcrumb-item {\n  color: #dde4eb;\n}\n.bg-inverse-secondary .breadcrumb .breadcrumb-item:before {\n  color: inherit;\n}\n.bg-inverse-secondary .breadcrumb .breadcrumb-item a {\n  color: inherit;\n}\n.bg-inverse-secondary .breadcrumb.breadcrumb-custom {\n  background: #dde4eb;\n}\n.bg-inverse-secondary .breadcrumb.breadcrumb-custom .breadcrumb-item {\n  background: white;\n}\n.bg-inverse-secondary .breadcrumb.breadcrumb-custom .breadcrumb-item a {\n  color: #dde4eb;\n  border: none;\n}\n.bg-inverse-secondary .breadcrumb.breadcrumb-custom .breadcrumb-item a:before {\n  border-left-color: white;\n}\n.bg-inverse-secondary .breadcrumb.breadcrumb-custom .breadcrumb-item span {\n  color: #dde4eb;\n}\n.bg-inverse-secondary .breadcrumb.breadcrumb-custom .breadcrumb-item:last-child {\n  background: transparent;\n}\n.bg-inverse-success .breadcrumb {\n  background: rgb(128.1784232365, 240.3215767635, 200.9834024896);\n  border-color: #19d895;\n}\n.bg-inverse-success .breadcrumb .breadcrumb-item {\n  color: #19d895;\n}\n.bg-inverse-success .breadcrumb .breadcrumb-item:before {\n  color: inherit;\n}\n.bg-inverse-success .breadcrumb .breadcrumb-item a {\n  color: inherit;\n}\n.bg-inverse-success .breadcrumb.breadcrumb-custom {\n  background: #19d895;\n}\n.bg-inverse-success .breadcrumb.breadcrumb-custom .breadcrumb-item {\n  background: rgb(128.1784232365, 240.3215767635, 200.9834024896);\n}\n.bg-inverse-success .breadcrumb.breadcrumb-custom .breadcrumb-item a {\n  color: #19d895;\n  border: none;\n}\n.bg-inverse-success .breadcrumb.breadcrumb-custom .breadcrumb-item a:before {\n  border-left-color: rgb(128.1784232365, 240.3215767635, 200.9834024896);\n}\n.bg-inverse-success .breadcrumb.breadcrumb-custom .breadcrumb-item span {\n  color: #19d895;\n}\n.bg-inverse-success .breadcrumb.breadcrumb-custom .breadcrumb-item:last-child {\n  background: transparent;\n}\n.bg-inverse-info .breadcrumb {\n  background: rgb(216.704787234, 204.4760638298, 245.0239361702);\n  border-color: #8862e0;\n}\n.bg-inverse-info .breadcrumb .breadcrumb-item {\n  color: #8862e0;\n}\n.bg-inverse-info .breadcrumb .breadcrumb-item:before {\n  color: inherit;\n}\n.bg-inverse-info .breadcrumb .breadcrumb-item a {\n  color: inherit;\n}\n.bg-inverse-info .breadcrumb.breadcrumb-custom {\n  background: #8862e0;\n}\n.bg-inverse-info .breadcrumb.breadcrumb-custom .breadcrumb-item {\n  background: rgb(216.704787234, 204.4760638298, 245.0239361702);\n}\n.bg-inverse-info .breadcrumb.breadcrumb-custom .breadcrumb-item a {\n  color: #8862e0;\n  border: none;\n}\n.bg-inverse-info .breadcrumb.breadcrumb-custom .breadcrumb-item a:before {\n  border-left-color: rgb(216.704787234, 204.4760638298, 245.0239361702);\n}\n.bg-inverse-info .breadcrumb.breadcrumb-custom .breadcrumb-item span {\n  color: #8862e0;\n}\n.bg-inverse-info .breadcrumb.breadcrumb-custom .breadcrumb-item:last-child {\n  background: transparent;\n}\n.bg-inverse-warning .breadcrumb {\n  background: rgb(255, 215, 127.5);\n  border-color: #ffaf00;\n}\n.bg-inverse-warning .breadcrumb .breadcrumb-item {\n  color: #ffaf00;\n}\n.bg-inverse-warning .breadcrumb .breadcrumb-item:before {\n  color: inherit;\n}\n.bg-inverse-warning .breadcrumb .breadcrumb-item a {\n  color: inherit;\n}\n.bg-inverse-warning .breadcrumb.breadcrumb-custom {\n  background: #ffaf00;\n}\n.bg-inverse-warning .breadcrumb.breadcrumb-custom .breadcrumb-item {\n  background: rgb(255, 215, 127.5);\n}\n.bg-inverse-warning .breadcrumb.breadcrumb-custom .breadcrumb-item a {\n  color: #ffaf00;\n  border: none;\n}\n.bg-inverse-warning .breadcrumb.breadcrumb-custom .breadcrumb-item a:before {\n  border-left-color: rgb(255, 215, 127.5);\n}\n.bg-inverse-warning .breadcrumb.breadcrumb-custom .breadcrumb-item span {\n  color: #ffaf00;\n}\n.bg-inverse-warning .breadcrumb.breadcrumb-custom .breadcrumb-item:last-child {\n  background: transparent;\n}\n.bg-inverse-danger .breadcrumb {\n  background: rgb(255, 217.8652694611, 215.5);\n  border-color: #ff6258;\n}\n.bg-inverse-danger .breadcrumb .breadcrumb-item {\n  color: #ff6258;\n}\n.bg-inverse-danger .breadcrumb .breadcrumb-item:before {\n  color: inherit;\n}\n.bg-inverse-danger .breadcrumb .breadcrumb-item a {\n  color: inherit;\n}\n.bg-inverse-danger .breadcrumb.breadcrumb-custom {\n  background: #ff6258;\n}\n.bg-inverse-danger .breadcrumb.breadcrumb-custom .breadcrumb-item {\n  background: rgb(255, 217.8652694611, 215.5);\n}\n.bg-inverse-danger .breadcrumb.breadcrumb-custom .breadcrumb-item a {\n  color: #ff6258;\n  border: none;\n}\n.bg-inverse-danger .breadcrumb.breadcrumb-custom .breadcrumb-item a:before {\n  border-left-color: rgb(255, 217.8652694611, 215.5);\n}\n.bg-inverse-danger .breadcrumb.breadcrumb-custom .breadcrumb-item span {\n  color: #ff6258;\n}\n.bg-inverse-danger .breadcrumb.breadcrumb-custom .breadcrumb-item:last-child {\n  background: transparent;\n}\n.bg-inverse-light .breadcrumb {\n  background: white;\n  border-color: #fbfbfb;\n}\n.bg-inverse-light .breadcrumb .breadcrumb-item {\n  color: #fbfbfb;\n}\n.bg-inverse-light .breadcrumb .breadcrumb-item:before {\n  color: inherit;\n}\n.bg-inverse-light .breadcrumb .breadcrumb-item a {\n  color: inherit;\n}\n.bg-inverse-light .breadcrumb.breadcrumb-custom {\n  background: #fbfbfb;\n}\n.bg-inverse-light .breadcrumb.breadcrumb-custom .breadcrumb-item {\n  background: white;\n}\n.bg-inverse-light .breadcrumb.breadcrumb-custom .breadcrumb-item a {\n  color: #fbfbfb;\n  border: none;\n}\n.bg-inverse-light .breadcrumb.breadcrumb-custom .breadcrumb-item a:before {\n  border-left-color: white;\n}\n.bg-inverse-light .breadcrumb.breadcrumb-custom .breadcrumb-item span {\n  color: #fbfbfb;\n}\n.bg-inverse-light .breadcrumb.breadcrumb-custom .breadcrumb-item:last-child {\n  background: transparent;\n}\n.bg-inverse-dark .breadcrumb {\n  background: rgb(81.0887850467, 96.4299065421, 153.4112149533);\n  border-color: #252C46;\n}\n.bg-inverse-dark .breadcrumb .breadcrumb-item {\n  color: #252C46;\n}\n.bg-inverse-dark .breadcrumb .breadcrumb-item:before {\n  color: inherit;\n}\n.bg-inverse-dark .breadcrumb .breadcrumb-item a {\n  color: inherit;\n}\n.bg-inverse-dark .breadcrumb.breadcrumb-custom {\n  background: #252C46;\n}\n.bg-inverse-dark .breadcrumb.breadcrumb-custom .breadcrumb-item {\n  background: rgb(81.0887850467, 96.4299065421, 153.4112149533);\n}\n.bg-inverse-dark .breadcrumb.breadcrumb-custom .breadcrumb-item a {\n  color: #252C46;\n  border: none;\n}\n.bg-inverse-dark .breadcrumb.breadcrumb-custom .breadcrumb-item a:before {\n  border-left-color: rgb(81.0887850467, 96.4299065421, 153.4112149533);\n}\n.bg-inverse-dark .breadcrumb.breadcrumb-custom .breadcrumb-item span {\n  color: #252C46;\n}\n.bg-inverse-dark .breadcrumb.breadcrumb-custom .breadcrumb-item:last-child {\n  background: transparent;\n}\n\n/* Buttons */\n.btn {\n  font-size: 0.875rem;\n  line-height: 1;\n  font-family: \"roboto\", sans-serif;\n}\n.btn i {\n  margin-right: 0.3125rem;\n  font-size: inherit;\n}\n.btn .btn-label:before {\n  font-size: 1rem;\n  line-height: 5px;\n  vertical-align: middle;\n}\n.btn .btn-label.btn-label-left {\n  margin-right: 5px;\n}\n.btn .btn-label.btn-label-right {\n  margin-left: 5px;\n}\n.btn.btn-rounded {\n  border-radius: 50px;\n}\n.btn.btn-square {\n  border-radius: 0px;\n}\n.btn.btn-icons {\n  width: 40px;\n  height: 40px;\n  padding: 10px;\n  text-align: center;\n  vertical-align: middle;\n}\n.btn.btn-icons i {\n  margin: auto;\n  line-height: initial;\n}\n.btn.btn-fw {\n  min-width: 120px;\n}\n.btn.icon-btn i {\n  margin-right: 0;\n}\n.btn.social-btn {\n  padding: 13px;\n}\n.btn.social-btn i {\n  margin-right: 0;\n  font-size: 1rem;\n}\n.btn.btn-sm, .btn-group-sm > .btn {\n  font-size: 0.875rem;\n}\n.btn.btn-lg, .btn-group-lg > .btn {\n  font-size: 0.875rem;\n}\n.btn.btn-xs {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.625rem;\n}\n.btn.btn-transparent {\n  background: transparent;\n}\n.btn.btn-danger, .btn.btn-info, .btn.btn-success, .btn.btn-teal, .btn.btn-warning {\n  color: #ffffff;\n}\n.btn.btn-outline-light {\n  border-color: rgb(212.75, 212.75, 212.75);\n  color: rgb(212.75, 212.75, 212.75);\n}\n.btn.btn-outline-secondary {\n  color: rgba(0, 0, 0, 0.5);\n}\n.btn.btn-inverse-secondary {\n  background-color: rgba(221, 228, 235, 0.5);\n  color: rgba(0, 0, 0, 0.5);\n}\n.btn.btn-inverse-secondary:hover {\n  color: rgba(0, 0, 0, 0.5);\n}\n.btn.btn-inverse-light {\n  background-color: #ffffff;\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgb(216.75, 216.75, 216.75);\n}\n.btn.btn-inverse-light:hover {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgb(216.75, 216.75, 216.75);\n}\n.btn-group {\n  display: inline-flex;\n  border-radius: 0.1875rem;\n}\n.btn-group .btn:last-child {\n  border-right: none;\n}\n.btn-group .btn.btn-primary {\n  border-color: rgb(53.7336538462, 124.1432692308, 138.9663461538);\n}\n.btn-group .btn.btn-secondary {\n  border-color: rgb(211.3666666667, 220.35, 229.3333333333);\n}\n.btn-group .btn.btn-info {\n  border-color: rgb(126.3154255319, 85.2228723404, 221.4771276596);\n}\n.btn-group .btn.btn-warning {\n  border-color: rgb(239.7, 164.5, 0);\n}\n.btn-group .btn.btn-success {\n  border-color: rgb(23.4128630705, 202.2871369295, 139.5406639004);\n}\n.btn-group .btn.btn-danger {\n  border-color: rgb(255, 83.6161676647, 72.7);\n}\n.btn-group .btn.btn-dark {\n  border-color: rgb(31.7093457944, 37.708411215, 59.9906542056);\n}\n.btn-group .btn.btn-light {\n  border-color: rgb(243.35, 243.35, 243.35);\n}\n\n/*social buttons*/\n.btn-twitter {\n  background: #4DBFF5;\n  color: #ffffff;\n}\n.btn-twitter:hover {\n  background: rgb(28.7127659574, 173.6382978723, 242.2872340426);\n}\n.btn-twitter.btn-link {\n  background: none;\n  color: #4DBFF5;\n}\n.btn-twitter.btn-link:hover {\n  color: rgb(28.7127659574, 173.6382978723, 242.2872340426);\n}\n.btn-facebook {\n  background: #648ACA;\n  color: #ffffff;\n}\n.btn-facebook:hover {\n  background: rgb(63.9567307692, 109.8125, 187.0432692308);\n}\n.btn-facebook.btn-link {\n  background: none;\n  color: #648ACA;\n}\n.btn-facebook.btn-link:hover {\n  color: rgb(63.9567307692, 109.8125, 187.0432692308);\n}\n.btn-google {\n  background: #E55F4B;\n  color: #ffffff;\n}\n.btn-google:hover {\n  background: rgb(221.067961165, 56.4951456311, 31.932038835);\n}\n.btn-google.btn-link {\n  background: none;\n  color: #E55F4B;\n}\n.btn-google.btn-link:hover {\n  color: rgb(221.067961165, 56.4951456311, 31.932038835);\n}\n.btn-linkedin {\n  background: #0177b4;\n  color: #ffffff;\n}\n.btn-linkedin:hover {\n  background: rgb(0.7182320442, 85.4696132597, 129.2817679558);\n}\n.btn-linkedin.btn-link {\n  background: none;\n  color: #0177b4;\n}\n.btn-linkedin.btn-link:hover {\n  color: rgb(0.7182320442, 85.4696132597, 129.2817679558);\n}\n.btn-pinterest {\n  background: #cc2127;\n  color: #ffffff;\n}\n.btn-pinterest:hover {\n  background: rgb(160.1012658228, 25.8987341772, 30.6075949367);\n}\n.btn-pinterest.btn-link {\n  background: none;\n  color: #cc2127;\n}\n.btn-pinterest.btn-link:hover {\n  color: rgb(160.1012658228, 25.8987341772, 30.6075949367);\n}\n.btn-youtube {\n  background: #e52d27;\n  color: #ffffff;\n}\n.btn-youtube:hover {\n  background: rgb(193.6859504132, 28.694214876, 23.3140495868);\n}\n.btn-youtube.btn-link {\n  background: none;\n  color: #e52d27;\n}\n.btn-youtube.btn-link:hover {\n  color: rgb(193.6859504132, 28.694214876, 23.3140495868);\n}\n.btn-github {\n  background: #333333;\n  color: #ffffff;\n}\n.btn-github:hover {\n  background: rgb(25.5, 25.5, 25.5);\n}\n.btn-github.btn-link {\n  background: none;\n  color: #333333;\n}\n.btn-github.btn-link:hover {\n  color: rgb(25.5, 25.5, 25.5);\n}\n.btn-behance {\n  background: #1769ff;\n  color: #ffffff;\n}\n.btn-behance:hover {\n  background: rgb(0, 80.2327586207, 227);\n}\n.btn-behance.btn-link {\n  background: none;\n  color: #1769ff;\n}\n.btn-behance.btn-link:hover {\n  color: rgb(0, 80.2327586207, 227);\n}\n.btn-dribbble {\n  background: #ea4c89;\n  color: #ffffff;\n}\n.btn-dribbble:hover {\n  background: rgb(228.645, 30.355, 106.91);\n}\n.btn-dribbble.btn-link {\n  background: none;\n  color: #ea4c89;\n}\n.btn-dribbble.btn-link:hover {\n  color: rgb(228.645, 30.355, 106.91);\n}\n.btn-reddit {\n  background: #ff4500;\n  color: #ffffff;\n}\n.btn-reddit:hover {\n  background: rgb(204, 55.2, 0);\n}\n.btn-reddit.btn-link {\n  background: none;\n  color: #ff4500;\n}\n.btn-reddit.btn-link:hover {\n  color: rgb(204, 55.2, 0);\n}\n\n/*social buttons*/\n.btn-social-outline-twitter {\n  background: transparent;\n  border-color: #4DBFF5;\n  color: #4DBFF5;\n}\n.btn-social-outline-twitter:hover {\n  background: rgba(77, 191, 245, 0.2);\n}\n.btn-social-outline-facebook {\n  background: transparent;\n  border-color: #648ACA;\n  color: #648ACA;\n}\n.btn-social-outline-facebook:hover {\n  background: rgba(100, 138, 202, 0.2);\n}\n.btn-social-outline-google {\n  background: transparent;\n  border-color: #E55F4B;\n  color: #E55F4B;\n}\n.btn-social-outline-google:hover {\n  background: rgba(229, 95, 75, 0.2);\n}\n.btn-social-outline-linkedin {\n  background: transparent;\n  border-color: #0177b4;\n  color: #0177b4;\n}\n.btn-social-outline-linkedin:hover {\n  background: rgba(1, 119, 180, 0.2);\n}\n.btn-social-outline-pinterest {\n  background: transparent;\n  border-color: #cc2127;\n  color: #cc2127;\n}\n.btn-social-outline-pinterest:hover {\n  background: rgba(204, 33, 39, 0.2);\n}\n.btn-social-outline-youtube {\n  background: transparent;\n  border-color: #e52d27;\n  color: #e52d27;\n}\n.btn-social-outline-youtube:hover {\n  background: rgba(229, 45, 39, 0.2);\n}\n.btn-social-outline-github {\n  background: transparent;\n  border-color: #333333;\n  color: #333333;\n}\n.btn-social-outline-github:hover {\n  background: rgba(51, 51, 51, 0.2);\n}\n.btn-social-outline-behance {\n  background: transparent;\n  border-color: #1769ff;\n  color: #1769ff;\n}\n.btn-social-outline-behance:hover {\n  background: rgba(23, 105, 255, 0.2);\n}\n.btn-social-outline-dribbble {\n  background: transparent;\n  border-color: #ea4c89;\n  color: #ea4c89;\n}\n.btn-social-outline-dribbble:hover {\n  background: rgba(234, 76, 137, 0.2);\n}\n.btn-social-outline-reddit {\n  background: transparent;\n  border-color: #ff4500;\n  color: #ff4500;\n}\n.btn-social-outline-reddit:hover {\n  background: rgba(255, 69, 0, 0.2);\n}\n\n/* inverse buttons */\n.btn-inverse-primary {\n  color: #3a8696;\n  background-color: rgba(58, 134, 150, 0.2);\n  background-image: none;\n  border-color: rgba(58, 134, 150, 0);\n}\n.btn-inverse-primary:hover {\n  color: #ffffff;\n  background-color: #3a8696;\n  border-color: #3a8696;\n}\n.btn-inverse-primary.focus, .btn-inverse-primary:focus {\n  box-shadow: 0 0 0 3px rgba(58, 134, 150, 0.5);\n}\n.btn-inverse-primary.disabled, .btn-inverse-primary:disabled {\n  color: #3a8696;\n  background-color: transparent;\n}\n.btn-inverse-primary.active, .btn-inverse-primary:active, .show > .btn-inverse-primary.dropdown-toggle {\n  color: #ffffff;\n  background-color: #3a8696;\n  border-color: #3a8696;\n}\n.btn-inverse-secondary {\n  color: #dde4eb;\n  background-color: rgba(221, 228, 235, 0.2);\n  background-image: none;\n  border-color: rgba(221, 228, 235, 0);\n}\n.btn-inverse-secondary:hover {\n  color: #ffffff;\n  background-color: #dde4eb;\n  border-color: #dde4eb;\n}\n.btn-inverse-secondary.focus, .btn-inverse-secondary:focus {\n  box-shadow: 0 0 0 3px rgba(221, 228, 235, 0.5);\n}\n.btn-inverse-secondary.disabled, .btn-inverse-secondary:disabled {\n  color: #dde4eb;\n  background-color: transparent;\n}\n.btn-inverse-secondary.active, .btn-inverse-secondary:active, .show > .btn-inverse-secondary.dropdown-toggle {\n  color: #ffffff;\n  background-color: #dde4eb;\n  border-color: #dde4eb;\n}\n.btn-inverse-success {\n  color: #19d895;\n  background-color: rgba(25, 216, 149, 0.2);\n  background-image: none;\n  border-color: rgba(25, 216, 149, 0);\n}\n.btn-inverse-success:hover {\n  color: #ffffff;\n  background-color: #19d895;\n  border-color: #19d895;\n}\n.btn-inverse-success.focus, .btn-inverse-success:focus {\n  box-shadow: 0 0 0 3px rgba(25, 216, 149, 0.5);\n}\n.btn-inverse-success.disabled, .btn-inverse-success:disabled {\n  color: #19d895;\n  background-color: transparent;\n}\n.btn-inverse-success.active, .btn-inverse-success:active, .show > .btn-inverse-success.dropdown-toggle {\n  color: #ffffff;\n  background-color: #19d895;\n  border-color: #19d895;\n}\n.btn-inverse-info {\n  color: #8862e0;\n  background-color: rgba(136, 98, 224, 0.2);\n  background-image: none;\n  border-color: rgba(136, 98, 224, 0);\n}\n.btn-inverse-info:hover {\n  color: #ffffff;\n  background-color: #8862e0;\n  border-color: #8862e0;\n}\n.btn-inverse-info.focus, .btn-inverse-info:focus {\n  box-shadow: 0 0 0 3px rgba(136, 98, 224, 0.5);\n}\n.btn-inverse-info.disabled, .btn-inverse-info:disabled {\n  color: #8862e0;\n  background-color: transparent;\n}\n.btn-inverse-info.active, .btn-inverse-info:active, .show > .btn-inverse-info.dropdown-toggle {\n  color: #ffffff;\n  background-color: #8862e0;\n  border-color: #8862e0;\n}\n.btn-inverse-warning {\n  color: #ffaf00;\n  background-color: rgba(255, 175, 0, 0.2);\n  background-image: none;\n  border-color: rgba(255, 175, 0, 0);\n}\n.btn-inverse-warning:hover {\n  color: #ffffff;\n  background-color: #ffaf00;\n  border-color: #ffaf00;\n}\n.btn-inverse-warning.focus, .btn-inverse-warning:focus {\n  box-shadow: 0 0 0 3px rgba(255, 175, 0, 0.5);\n}\n.btn-inverse-warning.disabled, .btn-inverse-warning:disabled {\n  color: #ffaf00;\n  background-color: transparent;\n}\n.btn-inverse-warning.active, .btn-inverse-warning:active, .show > .btn-inverse-warning.dropdown-toggle {\n  color: #ffffff;\n  background-color: #ffaf00;\n  border-color: #ffaf00;\n}\n.btn-inverse-danger {\n  color: #ff6258;\n  background-color: rgba(255, 98, 88, 0.2);\n  background-image: none;\n  border-color: rgba(255, 98, 88, 0);\n}\n.btn-inverse-danger:hover {\n  color: #ffffff;\n  background-color: #ff6258;\n  border-color: #ff6258;\n}\n.btn-inverse-danger.focus, .btn-inverse-danger:focus {\n  box-shadow: 0 0 0 3px rgba(255, 98, 88, 0.5);\n}\n.btn-inverse-danger.disabled, .btn-inverse-danger:disabled {\n  color: #ff6258;\n  background-color: transparent;\n}\n.btn-inverse-danger.active, .btn-inverse-danger:active, .show > .btn-inverse-danger.dropdown-toggle {\n  color: #ffffff;\n  background-color: #ff6258;\n  border-color: #ff6258;\n}\n.btn-inverse-light {\n  color: #fbfbfb;\n  background-color: rgba(251, 251, 251, 0.2);\n  background-image: none;\n  border-color: rgba(251, 251, 251, 0);\n}\n.btn-inverse-light:hover {\n  color: #ffffff;\n  background-color: #fbfbfb;\n  border-color: #fbfbfb;\n}\n.btn-inverse-light.focus, .btn-inverse-light:focus {\n  box-shadow: 0 0 0 3px rgba(251, 251, 251, 0.5);\n}\n.btn-inverse-light.disabled, .btn-inverse-light:disabled {\n  color: #fbfbfb;\n  background-color: transparent;\n}\n.btn-inverse-light.active, .btn-inverse-light:active, .show > .btn-inverse-light.dropdown-toggle {\n  color: #ffffff;\n  background-color: #fbfbfb;\n  border-color: #fbfbfb;\n}\n.btn-inverse-dark {\n  color: #252C46;\n  background-color: rgba(37, 44, 70, 0.2);\n  background-image: none;\n  border-color: rgba(37, 44, 70, 0);\n}\n.btn-inverse-dark:hover {\n  color: #ffffff;\n  background-color: #252C46;\n  border-color: #252C46;\n}\n.btn-inverse-dark.focus, .btn-inverse-dark:focus {\n  box-shadow: 0 0 0 3px rgba(37, 44, 70, 0.5);\n}\n.btn-inverse-dark.disabled, .btn-inverse-dark:disabled {\n  color: #252C46;\n  background-color: transparent;\n}\n.btn-inverse-dark.active, .btn-inverse-dark:active, .show > .btn-inverse-dark.dropdown-toggle {\n  color: #ffffff;\n  background-color: #252C46;\n  border-color: #252C46;\n}\n\n/* Inverse Outlined Buttons */\n.btn-inverse-outline-primary {\n  color: #3a8696;\n  background-image: none;\n  background: transparent;\n  border-color: rgba(58, 134, 150, 0.2);\n}\n.btn-inverse-outline-primary:hover {\n  color: #3a8696;\n  background-color: rgba(58, 134, 150, 0.2);\n  border-color: rgba(58, 134, 150, 0.2);\n}\n.btn-inverse-outline-primary.focus, .btn-inverse-outline-primary:focus {\n  box-shadow: 0 0 0 3px rgba(58, 134, 150, 0.5);\n}\n.btn-inverse-outline-primary.disabled, .btn-inverse-outline-primary:disabled {\n  color: #3a8696;\n  background-color: transparent;\n}\n.btn-inverse-outline-primary.active, .btn-inverse-outline-primary:active, .show > .btn-inverse-outline-primary.dropdown-toggle {\n  color: #ffffff;\n  border-color: #3a8696;\n}\n.btn-inverse-outline-secondary {\n  color: #dde4eb;\n  background-image: none;\n  background: transparent;\n  border-color: rgba(221, 228, 235, 0.2);\n}\n.btn-inverse-outline-secondary:hover {\n  color: #dde4eb;\n  background-color: rgba(221, 228, 235, 0.2);\n  border-color: rgba(221, 228, 235, 0.2);\n}\n.btn-inverse-outline-secondary.focus, .btn-inverse-outline-secondary:focus {\n  box-shadow: 0 0 0 3px rgba(221, 228, 235, 0.5);\n}\n.btn-inverse-outline-secondary.disabled, .btn-inverse-outline-secondary:disabled {\n  color: #dde4eb;\n  background-color: transparent;\n}\n.btn-inverse-outline-secondary.active, .btn-inverse-outline-secondary:active, .show > .btn-inverse-outline-secondary.dropdown-toggle {\n  color: #ffffff;\n  border-color: #dde4eb;\n}\n.btn-inverse-outline-success {\n  color: #19d895;\n  background-image: none;\n  background: transparent;\n  border-color: rgba(25, 216, 149, 0.2);\n}\n.btn-inverse-outline-success:hover {\n  color: #19d895;\n  background-color: rgba(25, 216, 149, 0.2);\n  border-color: rgba(25, 216, 149, 0.2);\n}\n.btn-inverse-outline-success.focus, .btn-inverse-outline-success:focus {\n  box-shadow: 0 0 0 3px rgba(25, 216, 149, 0.5);\n}\n.btn-inverse-outline-success.disabled, .btn-inverse-outline-success:disabled {\n  color: #19d895;\n  background-color: transparent;\n}\n.btn-inverse-outline-success.active, .btn-inverse-outline-success:active, .show > .btn-inverse-outline-success.dropdown-toggle {\n  color: #ffffff;\n  border-color: #19d895;\n}\n.btn-inverse-outline-info {\n  color: #8862e0;\n  background-image: none;\n  background: transparent;\n  border-color: rgba(136, 98, 224, 0.2);\n}\n.btn-inverse-outline-info:hover {\n  color: #8862e0;\n  background-color: rgba(136, 98, 224, 0.2);\n  border-color: rgba(136, 98, 224, 0.2);\n}\n.btn-inverse-outline-info.focus, .btn-inverse-outline-info:focus {\n  box-shadow: 0 0 0 3px rgba(136, 98, 224, 0.5);\n}\n.btn-inverse-outline-info.disabled, .btn-inverse-outline-info:disabled {\n  color: #8862e0;\n  background-color: transparent;\n}\n.btn-inverse-outline-info.active, .btn-inverse-outline-info:active, .show > .btn-inverse-outline-info.dropdown-toggle {\n  color: #ffffff;\n  border-color: #8862e0;\n}\n.btn-inverse-outline-warning {\n  color: #ffaf00;\n  background-image: none;\n  background: transparent;\n  border-color: rgba(255, 175, 0, 0.2);\n}\n.btn-inverse-outline-warning:hover {\n  color: #ffaf00;\n  background-color: rgba(255, 175, 0, 0.2);\n  border-color: rgba(255, 175, 0, 0.2);\n}\n.btn-inverse-outline-warning.focus, .btn-inverse-outline-warning:focus {\n  box-shadow: 0 0 0 3px rgba(255, 175, 0, 0.5);\n}\n.btn-inverse-outline-warning.disabled, .btn-inverse-outline-warning:disabled {\n  color: #ffaf00;\n  background-color: transparent;\n}\n.btn-inverse-outline-warning.active, .btn-inverse-outline-warning:active, .show > .btn-inverse-outline-warning.dropdown-toggle {\n  color: #ffffff;\n  border-color: #ffaf00;\n}\n.btn-inverse-outline-danger {\n  color: #ff6258;\n  background-image: none;\n  background: transparent;\n  border-color: rgba(255, 98, 88, 0.2);\n}\n.btn-inverse-outline-danger:hover {\n  color: #ff6258;\n  background-color: rgba(255, 98, 88, 0.2);\n  border-color: rgba(255, 98, 88, 0.2);\n}\n.btn-inverse-outline-danger.focus, .btn-inverse-outline-danger:focus {\n  box-shadow: 0 0 0 3px rgba(255, 98, 88, 0.5);\n}\n.btn-inverse-outline-danger.disabled, .btn-inverse-outline-danger:disabled {\n  color: #ff6258;\n  background-color: transparent;\n}\n.btn-inverse-outline-danger.active, .btn-inverse-outline-danger:active, .show > .btn-inverse-outline-danger.dropdown-toggle {\n  color: #ffffff;\n  border-color: #ff6258;\n}\n.btn-inverse-outline-light {\n  color: #fbfbfb;\n  background-image: none;\n  background: transparent;\n  border-color: rgba(251, 251, 251, 0.2);\n}\n.btn-inverse-outline-light:hover {\n  color: #fbfbfb;\n  background-color: rgba(251, 251, 251, 0.2);\n  border-color: rgba(251, 251, 251, 0.2);\n}\n.btn-inverse-outline-light.focus, .btn-inverse-outline-light:focus {\n  box-shadow: 0 0 0 3px rgba(251, 251, 251, 0.5);\n}\n.btn-inverse-outline-light.disabled, .btn-inverse-outline-light:disabled {\n  color: #fbfbfb;\n  background-color: transparent;\n}\n.btn-inverse-outline-light.active, .btn-inverse-outline-light:active, .show > .btn-inverse-outline-light.dropdown-toggle {\n  color: #ffffff;\n  border-color: #fbfbfb;\n}\n.btn-inverse-outline-dark {\n  color: #252C46;\n  background-image: none;\n  background: transparent;\n  border-color: rgba(37, 44, 70, 0.2);\n}\n.btn-inverse-outline-dark:hover {\n  color: #252C46;\n  background-color: rgba(37, 44, 70, 0.2);\n  border-color: rgba(37, 44, 70, 0.2);\n}\n.btn-inverse-outline-dark.focus, .btn-inverse-outline-dark:focus {\n  box-shadow: 0 0 0 3px rgba(37, 44, 70, 0.5);\n}\n.btn-inverse-outline-dark.disabled, .btn-inverse-outline-dark:disabled {\n  color: #252C46;\n  background-color: transparent;\n}\n.btn-inverse-outline-dark.active, .btn-inverse-outline-dark:active, .show > .btn-inverse-outline-dark.dropdown-toggle {\n  color: #ffffff;\n  border-color: #252C46;\n}\n\n/* Cards */\n.card {\n  border: none;\n  background: #fff;\n}\n.card .card-header {\n  background: rgb(230.6333333333, 235.65, 240.6666666667);\n  padding: 1.88rem 1.81rem;\n  border-bottom: 1px solid #cdd6dc;\n}\n.card .card-header h1,\n.card .card-header h2,\n.card .card-header h3,\n.card .card-header h4,\n.card .card-header h5,\n.card .card-header h6,\n.card .card-header p,\n.card .card-header small {\n  margin-bottom: 0px;\n}\n.card .card-header.header-sm {\n  padding: 15px 1.81rem;\n  height: 60px;\n}\n.card .card-header.header-sm p,\n.card .card-header.header-sm .dropdown .dropdown-toggle i {\n  color: #6c757d;\n}\n.card .card-body {\n  padding: 1.88rem 1.81rem;\n}\n.card .card-body.no-gutter {\n  padding: 0;\n}\n.card .card-body + .card-body {\n  padding-top: 0;\n}\n.card.card-outline-success {\n  border: 1px solid #19d895;\n}\n.card.card-outline-primary {\n  border: 1px solid #3a8696;\n}\n.card.card-outline-warning {\n  border: 1px solid #ffaf00;\n}\n.card.card-outline-danger {\n  border: 1px solid #ff6258;\n}\n.card.card-rounded {\n  border-radius: 5px;\n}\n.card.card-faded {\n  background: #b5b0b2;\n  border-color: #b5b0b2;\n}\n.card .card-subtitle {\n  color: rgba(33, 37, 41, 0.7);\n}\n.card.card-circle-progress {\n  color: #ffffff;\n  text-align: center;\n}\n.card.bg-blue-gradient {\n  background: linear-gradient(to right, #065efd, #3169fd, #6f79fc);\n  color: #fff;\n}\n.card.bg-orange-gradient {\n  background: linear-gradient(to right, #ff7f2e, #fe7452);\n  color: #fff;\n}\n.card.bg-green-gradient {\n  background: linear-gradient(to right, #24e8a6, #09cdd1);\n  color: #fff;\n}\n.card.card-no-shadow {\n  box-shadow: none;\n}\n.card-inverse-primary {\n  background: rgba(58, 134, 150, 0.2);\n  border: 1px solid rgb(53.36, 123.28, 138);\n  color: rgb(44.08, 101.84, 114);\n}\n.card-inverse-secondary {\n  background: rgba(221, 228, 235, 0.2);\n  border: 1px solid rgb(203.32, 209.76, 216.2);\n  color: rgb(167.96, 173.28, 178.6);\n}\n.card-inverse-success {\n  background: rgba(25, 216, 149, 0.2);\n  border: 1px solid rgb(23, 198.72, 137.08);\n  color: rgb(19, 164.16, 113.24);\n}\n.card-inverse-info {\n  background: rgba(136, 98, 224, 0.2);\n  border: 1px solid rgb(125.12, 90.16, 206.08);\n  color: rgb(103.36, 74.48, 170.24);\n}\n.card-inverse-warning {\n  background: rgba(255, 175, 0, 0.2);\n  border: 1px solid rgb(234.6, 161, 0);\n  color: rgb(193.8, 133, 0);\n}\n.card-inverse-danger {\n  background: rgba(255, 98, 88, 0.2);\n  border: 1px solid rgb(234.6, 90.16, 80.96);\n  color: rgb(193.8, 74.48, 66.88);\n}\n.card-inverse-light {\n  background: rgba(251, 251, 251, 0.2);\n  border: 1px solid rgb(230.92, 230.92, 230.92);\n  color: rgb(190.76, 190.76, 190.76);\n}\n.card-inverse-dark {\n  background: rgba(37, 44, 70, 0.2);\n  border: 1px solid rgb(34.04, 40.48, 64.4);\n  color: rgb(28.12, 33.44, 53.2);\n}\n.carousel .carousel-inner .carousel-item img {\n  max-width: 100%;\n  width: 100%;\n}\n\n/* Checkboxes and Radios */\n.form-check,\n.form-radio {\n  position: relative;\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n.form-check .form-check-label,\n.form-radio .form-check-label {\n  display: block;\n  padding-left: 30px;\n  line-height: 1.5;\n}\n.rtl .form-check .form-check-label,\n.rtl .form-radio .form-check-label {\n  padding-left: 0;\n  padding-right: 30px;\n}\n.form-check .form-check-label input,\n.form-radio .form-check-label input {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px\\9 ;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  margin-top: 0;\n}\n.rtl .form-check .form-check-label input,\n.rtl .form-radio .form-check-label input {\n  left: auto;\n  right: 0;\n}\n.form-check .form-check-label {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding-left: 10px;\n}\n.form-check .form-check-label input:checked + .input-helper:before {\n  background-color: #fbfbfb;\n}\n.form-check .form-check-label input:checked + .input-helper:after {\n  width: 18px;\n  opacity: 1;\n  line-height: 18px;\n  transform: scale(1);\n}\n.form-check .form-check-label input:disabled + .input-helper:before {\n  border-color: #cdd6dc;\n}\n.form-check .form-check-label input:disabled:checked + .input-helper:after {\n  color: #cdd6dc;\n}\n.form-check .form-check-label .input-helper:before {\n  position: absolute;\n  content: \"\";\n  top: 50%;\n  transform: translateY(-50%);\n  width: 18px;\n  height: 18px;\n  border-radius: 2px;\n  left: 0;\n  border: 2px solid #cdd6dc;\n  transition: all;\n  transition-duration: 0s;\n  transition-duration: 250ms;\n}\n.rtl .form-check .form-check-label .input-helper:before {\n  left: auto;\n  right: 0;\n}\n.form-check .form-check-label .input-helper:after {\n  transition: all;\n  transition-duration: 0s;\n  transition-duration: 250ms;\n  font-family: Material Design Icons;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  transform: scale(0);\n  content: \"\\f12c\";\n  position: absolute;\n  font-size: 0.9375rem;\n  font-weight: bold;\n  left: 0;\n  top: 14%;\n  transform: translateY(-14%);\n  color: #8862e0;\n}\n.rtl .form-check .form-check-label .input-helper:after {\n  left: auto;\n  right: 0;\n}\n.form-check.form-check-flat label input:checked + .input-helper:before {\n  background-color: #19d895;\n  border: none;\n}\n.form-check.form-check-flat label input:disabled + .input-helper:after {\n  color: #fbfbfb;\n}\n.form-check.form-check-flat label input:disabled + .input-helper:before {\n  border-color: #cdd6dc;\n}\n.form-check.form-check-flat label input:disabled:checked + .input-helper:before {\n  background: #fbfbfb;\n}\n.form-check.form-check-flat label .input-helper:before {\n  border: 2px solid #cdd6dc;\n}\n.form-check.form-check-flat label .input-helper:after {\n  color: #fbfbfb;\n}\n.form-radio label input + .input-helper:before {\n  position: absolute;\n  content: \"\";\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  border: 2px solid #cdd6dc;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  transition: all;\n  transition-duration: 0s;\n  transition-duration: 250ms;\n}\n.rtl .form-radio label input + .input-helper:before {\n  left: auto;\n  right: 0;\n}\n.form-radio label input + .input-helper:after {\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  background: #ff6258;\n  border-radius: 50%;\n  top: 30%;\n  transform: translateY(-30%);\n  left: 6px;\n  transition: none;\n  transition-duration: 250s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  transform: scale(0);\n  position: absolute;\n}\n.rtl .form-radio label input + .input-helper:after {\n  left: auto;\n  right: 6px;\n}\n.form-radio label input:checked + .input-helper:before {\n  background-color: #fbfbfb;\n  border: 2px solid #cdd6dc;\n  top: 30%;\n  transform: translateY(-30%);\n}\n.form-radio label input:checked + .input-helper:after {\n  opacity: 1;\n  line-height: 1.5;\n  filter: alpha(opacity=100);\n  transform: scale(1);\n}\n.form-radio label input:disabled + .input-helper:before {\n  border-color: #cdd6dc;\n}\n.form-radio label input:disabled:checked + .input-helper:before {\n  background-color: #fbfbfb;\n  border-color: #cdd6dc;\n}\n.form-radio label input:disabled:checked + .input-helper:after {\n  background-color: #cdd6dc;\n}\n.form-radio.form-radio-flat label input:checked + .input-helper:before {\n  background: #19d895;\n  border-color: #19d895;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.form-radio.form-radio-flat label input:checked + .input-helper:after {\n  width: 20px;\n  height: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n  left: -2px;\n  color: #fbfbfb;\n  background: none;\n  content: \"\\f12c\";\n  font-family: Material Design Icons;\n  text-align: center;\n  font-weight: bold;\n}\n.rtl .form-radio.form-radio-flat label input:checked + .input-helper:after {\n  left: auto;\n  right: -2px;\n}\n.form-radio.form-radio-flat label input:disabled + .input-helper:before {\n  background: rgba(25, 216, 149, 0.4);\n  border-color: rgba(25, 216, 149, 0.05);\n}\n\n/* Dropdowns */\n.dropdown .dropdown-toggle {\n  display: flex;\n  align-items: center;\n}\n.dropdown .dropdown-toggle:after {\n  border: none;\n  content: \"\\f140\";\n  font-family: \"Material Design Icons\";\n  font-size: 20px;\n  color: inherit;\n  text-rendering: auto;\n  line-height: inherit;\n  vertical-align: 0;\n}\n.dropdown .dropdown-toggle.arrow-disabled {\n  border: none;\n  outline: none;\n  box-shadow: none;\n}\n.dropdown .dropdown-toggle.arrow-disabled:focus, .dropdown .dropdown-toggle.arrow-disabled:visited, .dropdown .dropdown-toggle.arrow-disabled:active {\n  outline: none;\n  box-shadow: none;\n}\n.dropdown .dropdown-toggle.arrow-disabled:after {\n  display: none;\n}\n.dropdown-menu {\n  font-size: 0.875rem;\n  border: 1px solid #cdd6dc;\n}\n.dropdown-menu .dropdown-header {\n  background: #fff;\n  color: #212529;\n}\n.dropdown-menu .dropdown-header * {\n  background: inherit;\n  color: inherit;\n}\n.dropdown-menu a:not([href]):not([tabindex]):hover.dropdown-item,\n.dropdown-menu a:not([href]):not([tabindex]):focus.dropdown-item {\n  background: #fff;\n  color: #212529;\n}\n.dropdown-menu a:not([href]):not([tabindex]):hover.dropdown-item:hover,\n.dropdown-menu a:not([href]):not([tabindex]):focus.dropdown-item:hover {\n  background: #fbfbfb;\n  color: #212529;\n}\n.dropdown-menu a:not([href]):not([tabindex]):hover.dropdown-item:active,\n.dropdown-menu a:not([href]):not([tabindex]):focus.dropdown-item:active {\n  background: initial;\n}\n.dropdown-menu .dropdown-item {\n  background: #fff;\n  color: #212529;\n}\n.dropdown-menu .dropdown-item:hover {\n  background: #fbfbfb;\n  color: #212529;\n}\n.dropdown-menu .dropdown-item:active {\n  background: initial;\n}\n.dropdown-menu.dropdown-menu-left {\n  left: 0 !important;\n  right: auto !important;\n}\n@media (max-width: 991px) {\n.dropdown-menu.dropdown-menu-left {\n    right: 0 !important;\n}\n}\n.dropdown-menu.dropdown-menu-right {\n  left: auto !important;\n  right: 0 !important;\n}\n@media (max-width: 991px) {\n.dropdown-menu.dropdown-menu-right {\n    left: 0 !important;\n}\n}\n\n/* Forms */\n.input-group-append,\n.input-group-prepend {\n  background: #fff;\n  color: #6c757d;\n  width: auto;\n  border: none;\n}\n.input-group-append .input-group-text,\n.input-group-prepend .input-group-text {\n  background: transparent;\n  border-color: #cdd6dc;\n}\n.form-control {\n  display: inline-block;\n  border: 1px solid #cdd6dc;\n  font-family: \"roboto\", sans-serif;\n  font-size: 0.85rem;\n  color: #212529;\n  padding: 0 0.75rem;\n  line-height: 14px;\n  font-weight: 300;\n  height: 44px;\n}\n.form-control.form-control-lg {\n  padding: 0.5rem 0.75rem;\n}\n.form-control.form-control-sm {\n  padding: 0.25rem 0.75rem;\n}\ntextarea.form-control {\n  height: auto;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\nselect.form-control {\n  padding: 0.4375rem 0.75rem;\n}\n.form-group label {\n  font-size: 0.875rem;\n  vertical-align: top;\n}\n.form-group.has-danger .form-control {\n  border-color: #ff6258;\n}\n.form-group .file-upload-default {\n  visibility: hidden;\n  position: absolute;\n}\n.form-group .file-upload-info {\n  background: transparent;\n}\n\n/* Icons */\n.icons-list {\n  border-left: 1px solid #cdd6dc;\n  border-bottom: 1px solid #cdd6dc;\n}\n.icons-list > div {\n  background: #dde4eb;\n  border-top: 1px solid #cdd6dc;\n  border-right: 1px solid #cdd6dc;\n  display: flex;\n  align-items: center;\n  padding: 15px;\n  font-family: \"roboto\", sans-serif;\n  font-size: 0.875rem;\n}\n.icons-list > div i {\n  display: inline-block;\n  font-size: 20px;\n  width: 40px;\n  text-align: left;\n  color: #3a8696;\n}\n\n/* Pagination */\n.pagination .page-item .page-link {\n  border-color: #cdd6dc;\n  color: #212529;\n  font-size: 0.875rem;\n  transition-duration: 0.3s;\n  background: rgb(233.8444444444, 238.2, 242.5555555556);\n}\n.pagination .page-item .page-link:focus {\n  background: inherit;\n}\n.pagination .page-item .page-link i:before {\n  font-size: inherit;\n  line-height: 1;\n  vertical-align: middle;\n}\n.pagination .page-item.active .page-link, .pagination .page-item:active .page-link, .pagination .page-item:focus .page-link, .pagination .page-item:hover .page-link {\n  background: #3a8696;\n  border-color: #3a8696;\n  color: #ffffff;\n}\n.pagination.flat .page-item .page-link {\n  border: none;\n  border-radius: 2px;\n}\n.pagination.separated .page-item {\n  margin-left: 2px;\n  margin-right: 2px;\n}\n.pagination.separated .page-item:first-child {\n  margin-left: 0;\n}\n.pagination.separated .page-item:last-child {\n  margin-right: 0;\n}\n.pagination.separated .page-item .page-link {\n  border-radius: 2px;\n}\n.pagination.rounded .page-item:first-child .page-link, .pagination.loader-demo-box .page-item:first-child .page-link {\n  border-radius: 25px 0 0 25px;\n}\n.pagination.rounded .page-item:last-child .page-link, .pagination.loader-demo-box .page-item:last-child .page-link {\n  border-radius: 0 25px 25px 0;\n}\n.pagination.rounded-flat .page-item {\n  margin-right: 3px;\n  margin-left: 3px;\n}\n.pagination.rounded-flat .page-item .page-link {\n  border: none;\n  border-radius: 50px;\n}\n.pagination.rounded-separated .page-item {\n  margin-left: 2px;\n  margin-right: 2px;\n}\n.pagination.rounded-separated .page-item:first-child {\n  margin-left: 0;\n}\n.pagination.rounded-separated .page-item:first-child .page-link {\n  border-radius: 10px 0 0 10px;\n}\n.pagination.rounded-separated .page-item:last-child {\n  margin-right: 0;\n}\n.pagination.rounded-separated .page-item:last-child .page-link {\n  border-radius: 0 10px 10px 0;\n}\n.pagination.rounded-separated .page-item .page-link {\n  border-radius: 2px;\n}\n\n/* pagination variations */\n.pagination-primary .page-item.active .page-link {\n  background: #3a8696;\n  border-color: #3a8696;\n}\n.pagination-primary .page-item .page-link:hover {\n  background: rgb(65.1105769231, 150.4278846154, 168.3894230769);\n  border-color: #3a8696;\n  color: #ffffff;\n}\n.pagination-secondary .page-item.active .page-link {\n  background: #dde4eb;\n  border-color: #dde4eb;\n}\n.pagination-secondary .page-item .page-link:hover {\n  background: rgb(237.0555555556, 240.75, 244.4444444444);\n  border-color: #dde4eb;\n  color: #ffffff;\n}\n.pagination-success .page-item.active .page-link {\n  background: #19d895;\n  border-color: #19d895;\n}\n.pagination-success .page-item .page-link:hover {\n  background: rgb(36.7593360996, 229.7406639004, 162.0456431535);\n  border-color: #19d895;\n  color: #ffffff;\n}\n.pagination-info .page-item.active .page-link {\n  background: #8862e0;\n  border-color: #8862e0;\n}\n.pagination-info .page-item .page-link:hover {\n  background: rgb(152.1409574468, 119.295212766, 228.204787234);\n  border-color: #8862e0;\n  color: #ffffff;\n}\n.pagination-warning .page-item.active .page-link {\n  background: #ffaf00;\n  border-color: #ffaf00;\n}\n.pagination-warning .page-item .page-link:hover {\n  background: rgb(255, 183, 25.5);\n  border-color: #ffaf00;\n  color: #ffffff;\n}\n.pagination-danger .page-item.active .page-link {\n  background: #ff6258;\n  border-color: #ff6258;\n}\n.pagination-danger .page-item .page-link:hover {\n  background: rgb(255, 121.9730538922, 113.5);\n  border-color: #ff6258;\n  color: #ffffff;\n}\n.pagination-light .page-item.active .page-link {\n  background: #fbfbfb;\n  border-color: #fbfbfb;\n}\n.pagination-light .page-item .page-link:hover {\n  background: white;\n  border-color: #fbfbfb;\n  color: #ffffff;\n}\n.pagination-dark .page-item.active .page-link {\n  background: #252C46;\n  border-color: #252C46;\n}\n.pagination-dark .page-item .page-link:hover {\n  background: rgb(45.8177570093, 54.4859813084, 86.6822429907);\n  border-color: #252C46;\n  color: #ffffff;\n}\n\n/* Preview */\n.preview-list .preview-item {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  font-size: 0.875rem;\n  border-bottom: 1px solid #cdd6dc;\n}\n.preview-list .preview-item:last-child {\n  border-bottom: 0;\n}\n.preview-list .preview-item .form-check {\n  margin-top: 8px;\n  margin-right: 1rem;\n}\n.preview-list .preview-item .preview-thumbnail {\n  color: #ffffff;\n  position: relative;\n}\n.preview-list .preview-item .preview-thumbnail .preview-icon,\n.preview-list .preview-item .preview-thumbnail img {\n  border-radius: 100%;\n}\n.preview-list .preview-item .preview-thumbnail .preview-icon {\n  padding: 6px;\n  text-align: center;\n}\n.preview-list .preview-item .preview-thumbnail .preview-icon i {\n  font-size: 1.125rem;\n}\n.preview-list .preview-item .preview-thumbnail .badge {\n  border: 2px solid #cdd6dc;\n  border-radius: 100%;\n  bottom: 5px;\n  display: block;\n  height: 14px;\n  left: -5px;\n  padding: 0;\n  position: absolute;\n  width: 14px;\n}\n.preview-list .preview-item .preview-item-content {\n  line-height: 1;\n  padding-left: 1.5rem;\n  color: #212529;\n}\n.rtl .preview-list .preview-item .preview-item-content {\n  padding-left: 0;\n  padding-right: 1.5rem;\n}\n.preview-list .preview-item .preview-item-content:first-child {\n  padding-left: 0;\n}\n.rtl .preview-list .preview-item .preview-item-content:first-child {\n  padding-right: 0;\n}\n.preview-list .preview-item .preview-item-content p {\n  margin-bottom: 10px;\n}\n.preview-list .preview-item .preview-item-content p .content-category {\n  font-family: \"roboto\", sans-serif;\n  padding-right: 15px;\n  border-right: 1px solid #cdd6dc;\n}\n.preview-list .preview-item .preview-actions {\n  display: flex;\n  flex-direction: row;\n}\n.preview-list .preview-item .preview-actions i {\n  width: 29px;\n  color: #f7f7f9;\n  height: 29px;\n  border: 2px solid #f7f7f9;\n  border-radius: 100%;\n  padding: 3px 6px;\n  display: inline-block;\n}\n.preview-list .preview-item .preview-actions i:first-child {\n  margin-right: 10px;\n}\n.preview-list.comment-preview .preview-item {\n  padding: 0.87rem 0;\n}\n.preview-list.comment-preview .preview-item:first-child {\n  padding-top: 0;\n}\n.preview-list.comment-preview .preview-item p {\n  line-height: 27px;\n}\n.preview-list.bordered .preview-item {\n  border-bottom: 1px solid #cdd6dc;\n}\n.preview-list.bordered .preview-item:last-child {\n  border-bottom: 0;\n}\n\n/* Tables */\n.table {\n  margin-bottom: 0;\n}\n.table thead th {\n  border-top: 0;\n  border-bottom-width: 1px;\n  font-family: \"roboto\", sans-serif;\n  font-weight: 500;\n  color: #212529;\n  border-bottom-color: #cdd6dc;\n}\n.table thead th i {\n  margin-left: 0.325rem;\n}\n.table tbody td {\n  border-top-color: #cdd6dc;\n}\n.table td,\n.table th {\n  vertical-align: middle;\n  font-size: 0.875rem;\n  line-height: 1;\n  white-space: nowrap;\n  height: 35px;\n  padding: 12px 15px;\n}\n.table td img:not(.thumb-image),\n.table th img:not(.thumb-image) {\n  border-radius: 100%;\n}\n.table td img.thumb-image,\n.table th img.thumb-image {\n  width: 50px;\n  height: 50px;\n  border: 1px solid #cdd6dc;\n}\n.table td .badge,\n.table th .badge {\n  margin-bottom: 0;\n}\n.table td .form-check,\n.table td .form-radio,\n.table th .form-check,\n.table th .form-radio {\n  margin-top: 0;\n  margin-bottom: 0px;\n}\n.table td {\n  color: #212529;\n}\n.table td .form-check .form-check-label input:checked + .input-helper:after {\n  line-height: 1px;\n}\n.table.table-borderless {\n  border: none;\n}\n.table.table-borderless td,\n.table.table-borderless th,\n.table.table-borderless tr {\n  border: none;\n}\n.table.table-bordered thead {\n  border: 1px solid #cdd6dc;\n  border-bottom: none;\n}\n.table.table-bordered thead tr:not(.enable-border) th {\n  border-left: none;\n  border-right: none;\n}\n.table.table-bordered td {\n  border-color: #cdd6dc;\n}\n.table.table-bordered.table-edge-border-0 {\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n}\n.table.table-bordered.table-edge-border-0 thead {\n  border-left: none;\n  border-right: none;\n}\n.table.table-bordered.table-edge-border-0 th:first-child,\n.table.table-bordered.table-edge-border-0 td:first-child {\n  border-left: 1px solid transparent;\n}\n.table.table-bordered.table-edge-border-0 th:last-child,\n.table.table-bordered.table-edge-border-0 td:last-child {\n  border-right: 1px solid transparent;\n}\n.table.table-striped tbody tr:nth-child(odd) {\n  background: rgba(0, 0, 0, 0.05);\n}\n.table.table-striped tbody tr:nth-child(even) {\n  background: transparent;\n}\n.table.table-stretched thead tr th:first-child,\n.table.table-stretched thead tr td:first-child,\n.table.table-stretched tbody tr th:first-child,\n.table.table-stretched tbody tr td:first-child {\n  padding-left: 0;\n}\n.table.table-stretched thead tr th:last-child,\n.table.table-stretched thead tr td:last-child,\n.table.table-stretched tbody tr th:last-child,\n.table.table-stretched tbody tr td:last-child {\n  padding-right: 0;\n  text-align: right;\n}\n\n/* Tabs */\n.nav-pills .nav-item .nav-link,\n.nav-tabs .nav-item .nav-link {\n  font-family: \"roboto\", sans-serif;\n  line-height: 1;\n  font-size: 0.875rem;\n  color: #212529;\n  text-align: center;\n  display: flex;\n}\n.nav-pills .nav-item .nav-link i,\n.nav-tabs .nav-item .nav-link i {\n  margin-right: 10px;\n}\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #3a8696;\n}\n.tab-content {\n  font-family: \"roboto\", sans-serif;\n  font-size: 0.875rem;\n  line-height: 1.71;\n}\n.tab-basic {\n  border-bottom: none;\n  margin-bottom: 20px;\n}\n.tab-basic .nav-item {\n  margin-right: 7%;\n}\n.tab-basic .nav-item .nav-link {\n  color: #6c757d;\n  padding: 0 0 7px;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  border-bottom: 2px solid #cdd6dc;\n}\n.tab-basic .nav-item .nav-link.active {\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  border-bottom: 2px solid #19d895;\n  color: #19d895;\n  background: #dde4eb;\n}\n.tab-solid {\n  border: none;\n  margin-bottom: 30px;\n}\n.tab-solid .nav-item .nav-link {\n  border: none;\n  padding: 10px 16px;\n  border-radius: 4px;\n}\n.tab-solid .nav-item .nav-link:nth(fist-child) {\n  padding-left: 0;\n}\n.tab-solid .nav-item .nav-link.active {\n  border: none;\n  color: #ffffff;\n}\n.tab-content-solid {\n  border: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n.tab-solid-primary .nav-link.active {\n  background: #3a8696;\n}\n.tab-solid-secondary .nav-link.active {\n  background: #dde4eb;\n}\n.tab-solid-success .nav-link.active {\n  background: #19d895;\n}\n.tab-solid-info .nav-link.active {\n  background: #8862e0;\n}\n.tab-solid-warning .nav-link.active {\n  background: #ffaf00;\n}\n.tab-solid-danger .nav-link.active {\n  background: #ff6258;\n}\n.tab-solid-light .nav-link.active {\n  background: #fbfbfb;\n}\n.tab-solid-dark .nav-link.active {\n  background: #252C46;\n}\n.tab-minimal .nav-tabs {\n  border: none;\n}\n.tab-minimal .nav-tabs .nav-item .nav-link {\n  border: none;\n  font-size: 14px;\n}\n.tab-minimal .nav-tabs .nav-item .nav-link.active {\n  font-weight: 600;\n  background: #dde4eb;\n  color: #212529;\n}\n.tab-minimal .nav-tabs .nav-item .nav-link:first-child {\n  padding-left: 0;\n}\n.tab-simple-styled {\n  border-bottom: none;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.tab-simple-styled .nav-item {\n  margin-right: 30px;\n}\n.tab-simple-styled .nav-item .nav-link {\n  border: none;\n  padding: 0;\n  color: #6c757d;\n}\n.tab-simple-styled .nav-item .nav-link.active {\n  background: #dde4eb;\n  color: #8862e0;\n}\n.tab-tile-style {\n  display: flex;\n  justify-content: space-around;\n  border-bottom: none;\n  margin-bottom: 30px;\n}\n.tab-tile-style .nav-item .nav-link {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 15px 25px;\n  border-radius: 0px;\n  border: none;\n}\n.tab-tile-style .nav-item .nav-link p {\n  margin-bottom: 0;\n}\n.tab-tile-style .nav-item:hover {\n  border: none;\n}\n.tab-tile-style .nav-item.active .nav-link {\n  background: rgba(230, 236, 245, 0.4);\n}\n.tab-tile-style .nav-item.active .nav-link:before {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  left: 0;\n  height: 2px;\n  background: #ff6258;\n  right: 0;\n}\n.vertical-tab {\n  display: flex;\n}\n.vertical-tab .nav-tabs {\n  flex-direction: column;\n  margin-bottom: 0;\n}\n.vertical-tab .tab-content {\n  margin-bottom: 0;\n}\n\n/* Tabs */\n.add-items {\n  margin-bottom: 1.5rem;\n  overflow: hidden;\n}\n.add-items input[type=text] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  width: 100%;\n}\n.add-items .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.list-wrapper {\n  height: 100%;\n  max-height: 100%;\n}\n.list-wrapper ul {\n  padding: 0;\n  text-align: left;\n  list-style: none;\n  margin-bottom: 0;\n}\n.list-wrapper ul li {\n  font-size: 0.9375rem;\n  padding: 0.4rem 0;\n  border-bottom: 1px solid #cdd6dc;\n}\n.list-wrapper ul li .form-check {\n  max-width: 90%;\n}\n.list-wrapper ul li .col-content {\n  width: 100%;\n}\n.list-wrapper ul li .col-content > div {\n  width: 100%;\n}\n.list-wrapper input[type=checkbox] {\n  margin-right: 15px;\n}\n.list-wrapper .remove {\n  margin-left: auto;\n  cursor: pointer;\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #3a8696;\n  width: 1.25rem;\n  height: 1.25rem;\n  line-height: 20px;\n  text-align: center;\n}\n.rtl .list-wrapper .remove {\n  margin-right: auto;\n  margin-left: 0;\n}\n.list-wrapper .completed {\n  text-decoration: line-through;\n  -webkit-text-decoration-color: #3a8696;\n          text-decoration-color: #3a8696;\n}\n.list-wrapper .completed .remove {\n  text-decoration: none;\n}\n\n/* Lists */\ndl,\nol,\nul {\n  padding-left: 1rem;\n  font-size: 0.875rem;\n}\ndl li,\nol li,\nul li {\n  line-height: 1.8;\n}\n.list-arrow,\n.list-star,\n.list-ticked {\n  list-style: none;\n  padding: 0;\n}\n.list-arrow li,\n.list-star li,\n.list-ticked li {\n  padding-left: 1.5rem;\n}\n.list-arrow li:before,\n.list-star li:before,\n.list-ticked li:before {\n  font-family: \"Material Design Icons\";\n  margin-left: -1.5rem;\n  width: 1.5rem;\n  margin-right: 0.5rem;\n}\n.list-ticked li:before {\n  content: \"\\f12d\";\n  color: #ff6258;\n}\n.list-arrow li:before {\n  content: \"\\f142\";\n  color: #19d895;\n}\n.list-star li:before {\n  content: \"\\f4ce\";\n  color: #ffaf00;\n}\n.bullet-line-list {\n  padding-left: 30px;\n  margin-bottom: 0;\n  position: relative;\n  list-style-type: none;\n}\n.rtl .bullet-line-list {\n  padding-right: 0px;\n}\n.bullet-line-list li {\n  position: relative;\n  line-height: 1;\n  padding-bottom: 10px;\n}\n.bullet-line-list li:before {\n  content: \"\";\n  position: absolute;\n  border-radius: 100%;\n  width: 12px;\n  height: 12px;\n  left: -28px;\n  top: 6px;\n  border: 3px solid #3a8696;\n  margin-right: 15px;\n  z-index: 2;\n  background: #ffffff;\n}\n.bullet-line-list li:after {\n  content: \"\";\n  border: 1px solid #cdd6dc;\n  position: absolute;\n  bottom: 0;\n  left: -23px;\n  height: 100%;\n}\n.bullet-line-list li:first-child:after {\n  content: \"\";\n  height: 80%;\n}\n.bullet-line-list li:last-child {\n  padding-bottom: 0;\n}\n.bullet-line-list li:last-child:after {\n  content: \"\";\n  top: 0;\n  height: 30%;\n}\n\n/* Loaders */\n#pgloading {\n  position: static;\n}\n#pgloading .bokeh {\n  font-size: 100px;\n  width: 1em;\n  height: 1em;\n  position: relative;\n  margin: 0 auto;\n  border-radius: 50%;\n  border: 0.01em solid #cdd6dc;\n  list-style: none;\n  padding: 0;\n}\n#pgloading .bokeh li {\n  position: absolute;\n  width: 0.2em;\n  height: 0.2em;\n  border-radius: 50%;\n}\n#pgloading .bokeh li:nth-child(1) {\n  left: 50%;\n  top: 0;\n  margin: 0 0 0 -0.1em;\n  background: #19d895;\n  transform-origin: 50% 250%;\n  animation: rota 1.13s linear infinite, opa 3.67s ease-in-out infinite alternate;\n}\n#pgloading .bokeh li:nth-child(2) {\n  top: 50%;\n  right: 0;\n  margin: -0.1em 0 0;\n  background: #ff6258;\n  transform-origin: -150% 50%;\n  animation: rota 1.86s linear infinite, opa 4.29s ease-in-out infinite alternate;\n}\n#pgloading .bokeh li:nth-child(3) {\n  left: 50%;\n  bottom: 0;\n  margin: 0 0 0 -0.1em;\n  background: #ffaf00;\n  transform-origin: 50% -150%;\n  animation: rota 1.45s linear infinite, opa 5.12s ease-in-out infinite alternate;\n}\n#pgloading .bokeh li:nth-child(4) {\n  top: 50%;\n  left: 0;\n  margin: -0.1em 0 0;\n  background: #3a8696;\n  transform-origin: 250% 50%;\n  animation: rota 1.72s linear infinite, opa 5.25s ease-in-out infinite alternate;\n}\n@keyframes rota {\nto {\n    transform: rotate(360deg);\n}\n}\n@keyframes opa {\n12.0% {\n    opacity: 0.8;\n}\n19.5% {\n    opacity: 0.88;\n}\n37.2% {\n    opacity: 0.64;\n}\n40.5% {\n    opacity: 0.52;\n}\n52.7% {\n    opacity: 0.69;\n}\n60.2% {\n    opacity: 0.6;\n}\n66.6% {\n    opacity: 0.52;\n}\n70.0% {\n    opacity: 0.63;\n}\n79.9% {\n    opacity: 0.6;\n}\n84.2% {\n    opacity: 0.75;\n}\n91.0% {\n    opacity: 0.87;\n}\n}\n.glowing-loader {\n  position: relative;\n}\n.s2 {\n  position: absolute;\n  height: 70px;\n  width: 70px;\n  top: 50px;\n  background-color: transparent;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.s1 {\n  position: absolute;\n  height: 70px;\n  width: 70px;\n  left: 50%;\n  top: 50px;\n  transform-origin: center;\n  transform: translate(-50%, -50%) rotate(45deg);\n  background-color: transparent;\n}\n.bigcon {\n  position: absolute;\n  height: 75px;\n  width: 75px;\n  left: 50%;\n  top: 50px;\n  transform-origin: center;\n  transform: translate(-50%, -50%) rotate(-45deg);\n  background-color: transparent;\n  animation: bigcon 2s infinite linear;\n  animation-delay: 0.25s;\n}\n.b {\n  border-radius: 50%;\n  position: absolute;\n}\n.s {\n  width: 15px;\n  height: 15px;\n  animation: small 2s infinite ease;\n  box-shadow: 0 2px rgba(0, 0, 0, 0.3);\n  background-color: #3a8696;\n}\n.s:nth-child(1) {\n  top: 0;\n  left: 0;\n}\n.s:nth-child(2) {\n  top: 0;\n  right: 0;\n}\n.s:nth-child(3) {\n  right: 0;\n  bottom: 0;\n}\n.s:nth-child(4) {\n  bottom: 0;\n  left: 0;\n}\n.big {\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n  box-shadow: 0 0 10px #3a8696, 0 0 20px #3a8696, 0 0 30px #3a8696, 0 0 50px #3a8696, 0 0 60px #3a8696;\n  z-index: 1;\n  background-color: #3a8696;\n  animation: bigball 1s infinite linear;\n}\n.sb1 {\n  animation-delay: -1.75s;\n}\n.sb6 {\n  animation-delay: -1.5s;\n}\n.sb2 {\n  animation-delay: -1.25s;\n}\n.sb7 {\n  animation-delay: -1s;\n}\n.sb3 {\n  animation-delay: -0.75s;\n}\n.sb8 {\n  animation-delay: -0.5s;\n}\n.sb4 {\n  animation-delay: -0.25s;\n}\n.sb5 {\n  animation-delay: 0s;\n}\n@keyframes bigcon {\n0% {\n    transform-origin: center;\n    transform: translate(-50%, -50%) rotate(45deg);\n}\n100% {\n    transform-origin: center;\n    transform: translate(-50%, -50%) rotate(405deg);\n}\n}\n@keyframes small {\n0% {\n    transform: scale(1);\n    background-color: rgb(110.7692307692, 183.8461538462, 199.2307692308);\n}\n10% {\n    transform: scale(1.3);\n    background-color: #3a8696;\n}\n15% {\n    transform: scale(1);\n}\n25% {\n    transform: scale(1);\n    background-color: #3a8696;\n}\n100% {\n    transform: scale(1);\n    background-color: #3a8696;\n}\n}\n/* Pixel loader */\n.pixel-loader {\n  width: 10px;\n  height: 10px;\n  background: #ffaf00;\n  color: #ffaf00;\n  margin: 80px auto;\n  box-shadow: 15px 15px 0 0, -15px -15px 0 0, 15px -15px 0 0, -15px 15px 0 0, 0 15px 0 0, 15px 0 0 0, -15px 0 0 0, 0 -15px 0 0;\n  animation: anim 2s linear infinite;\n}\n@keyframes anim {\n0% {\n    -webkit-filter: hue-rotate(0deg);\n}\n50% {\n    box-shadow: 20px 20px 0 0, -20px -20px 0 0, 20px -20px 0 0, -20px 20px 0 0, 0 10px 0 0, 10px 0 0 0, -10px 0 0 0, 0 -10px 0 0;\n}\n75% {\n    box-shadow: 20px 20px 0 0, -20px -20px 0 0, 20px -20px 0 0, -20px 20px 0 0, 0 10px 0 0, 10px 0 0 0, -10px 0 0 0, 0 -10px 0 0;\n}\n100% {\n    transform: rotate(360deg);\n    -webkit-filter: hue-rotate(360deg);\n}\n}\n/* Square box loader */\n@keyframes dyinglight {\n15% {\n    transform: scale(1.6);\n}\n50% {\n    transform: rotate(-89deg);\n}\n100% {\n    transform: rotate(-90deg);\n}\n}\n.square-box-loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: inline-block;\n}\n.square-box-loader-square {\n  display: block;\n  width: 30px;\n  height: 30px;\n  background: #3a8696;\n}\n.square-box-loader-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  transform-origin: 50% 50% 0;\n  animation: dyinglight 1s ease infinite;\n  backface-visibility: hidden;\n}\n.square-box-loader-corner-bottom:after,\n.square-box-loader-corner-bottom:before,\n.square-box-loader-corner-top:after,\n.square-box-loader-corner-top:before {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  color: #3a8696;\n  content: \"\";\n}\n.square-box-loader-corner-top:before {\n  border-left: 1px solid;\n  border-top: 1px solid;\n  top: -4px;\n  left: -4px;\n}\n.square-box-loader-corner-top:after {\n  border-right: 1px solid;\n  border-top: 1px solid;\n  top: -4px;\n  right: -4px;\n}\n.square-box-loader-corner-bottom:before {\n  border-left: 1px solid;\n  border-bottom: 1px solid;\n  bottom: -4px;\n  left: -4px;\n}\n.square-box-loader-corner-bottom:after {\n  border-right: 1px solid;\n  border-bottom: 1px solid;\n  bottom: -4px;\n  right: -4px;\n}\n\n/* Circle loader */\n.circle-loader {\n  width: 70px;\n  height: 70px;\n  border-radius: 100%;\n  position: relative;\n  margin: 0 auto;\n}\n.circle-loader:after,\n.circle-loader:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  border: 10px solid transparent;\n  border-top-color: #ffaf00;\n}\n.circle-loader:before {\n  z-index: 100;\n  animation: spin 1s infinite;\n}\n.circle-loader:after {\n  border: 10px solid #dde4eb;\n}\n@keyframes spin {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n/* Jumping dots loader */\n.jumping-dots-loader {\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n  position: relative;\n  margin: 0 auto;\n}\n.jumping-dots-loader span {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  background-color: rgba(255, 98, 88, 0.8);\n  margin: 35px 5px;\n}\n.jumping-dots-loader span:nth-child(1) {\n  animation: bounce 1s ease-in-out infinite;\n}\n.jumping-dots-loader span:nth-child(2) {\n  animation: bounce 1s ease-in-out 0.33s infinite;\n}\n.jumping-dots-loader span:nth-child(3) {\n  animation: bounce 1s ease-in-out 0.66s infinite;\n}\n@keyframes bounce {\n0%, 100%, 75% {\n    transform: translateY(0);\n}\n25% {\n    transform: translateY(-20px);\n}\n}\n/* Bar loader */\n.bar-loader {\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  position: relative;\n  margin: 0 auto;\n}\n.bar-loader span {\n  display: inline-block;\n  width: 5px;\n  height: 30px;\n  background-color: rgba(255, 98, 88, 0.7);\n}\n.bar-loader span:nth-child(1) {\n  animation: grow 1s ease-in-out infinite;\n}\n.bar-loader span:nth-child(2) {\n  animation: grow 1s ease-in-out 0.15s infinite;\n}\n.bar-loader span:nth-child(3) {\n  animation: grow 1s ease-in-out 0.3s infinite;\n}\n.bar-loader span:nth-child(4) {\n  animation: grow 1s ease-in-out 0.45s infinite;\n}\n@keyframes grow {\n0%, 100% {\n    transform: scaleY(1);\n}\n50% {\n    transform: scaleY(1.8);\n}\n}\n/* Square path loader */\n.square-path-loader {\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n  position: relative;\n  margin: 0 auto;\n}\n.square-path-loader:after,\n.square-path-loader:before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  top: 0;\n  left: calc(50% - 10px);\n  background-color: rgba(25, 216, 149, 0.7);\n  animation: squaremove 1s ease-in-out infinite;\n}\n.square-path-loader:after {\n  bottom: 0;\n  animation-delay: 0.5s;\n}\n@keyframes squaremove {\n0%, 100% {\n    transform: translate(0, 0) rotate(0);\n}\n25% {\n    transform: translate(40px, 40px) rotate(45deg);\n}\n50% {\n    transform: translate(0px, 80px) rotate(0deg);\n}\n75% {\n    transform: translate(-40px, 40px) rotate(45deg);\n}\n}\n/* Dot opacity loader */\n.dot-opacity-loader {\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n  position: relative;\n  margin: 0 auto;\n}\n.dot-opacity-loader span {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  background-color: #3a8696;\n  margin: 35px 5px;\n  opacity: 0;\n}\n.dot-opacity-loader span:nth-child(1) {\n  animation: opacitychange 1s ease-in-out infinite;\n}\n.dot-opacity-loader span:nth-child(2) {\n  animation: opacitychange 1s ease-in-out 0.33s infinite;\n}\n.dot-opacity-loader span:nth-child(3) {\n  animation: opacitychange 1s ease-in-out 0.66s infinite;\n}\n@keyframes opacitychange {\n0%, 100% {\n    opacity: 0;\n}\n60% {\n    opacity: 1;\n}\n}\n/* Flip square */\n.flip-square-loader {\n  -ms-perspective: 120px;\n  perspective: 120px;\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n  position: relative;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.flip-square-loader:before {\n  content: \"\";\n  position: absolute;\n  left: 25px;\n  top: 25px;\n  width: 50px;\n  height: 50px;\n  background-color: rgba(25, 216, 149, 0.7);\n  animation: flip 1s infinite;\n}\n@keyframes flip {\n0% {\n    transform: rotate(0);\n}\n50% {\n    transform: rotateY(180deg);\n}\n100% {\n    transform: rotateY(180deg) rotateX(180deg);\n}\n}\n/* Moving square loader */\n.moving-square-loader {\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n  position: relative;\n  margin: 0 auto;\n}\n.moving-square-loader:before {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  top: calc(50% - 10px);\n  left: 0;\n  background-color: rgba(255, 98, 88, 0.7);\n  animation: rotatemove 1s infinite;\n}\n@keyframes rotatemove {\n0% {\n    transform: scale(1) translateX(0px);\n}\n100% {\n    transform: scale(2) translateX(45px);\n}\n}\n/* New Account */\n.new-accounts {\n  overflow: hidden;\n  position: relative;\n}\n.new-accounts ul.chats {\n  height: 100%;\n  padding: 0;\n  margin-bottom: 0;\n  overflow-x: hidden;\n}\n.new-accounts ul.chats li.chat-persons {\n  padding: 15px 0;\n  display: block;\n  border-bottom: 1px solid #cdd6dc;\n}\n.new-accounts ul.chats li.chat-persons:last-child {\n  border-bottom: none;\n}\n.new-accounts ul.chats li.chat-persons .btn.btn-xs {\n  padding: 0.2rem 0.75rem;\n}\n.new-accounts ul.chats li.chat-persons a {\n  text-decoration: none;\n}\n.new-accounts ul.chats li.chat-persons a span.pro-pic {\n  display: inline-block;\n  padding: 0;\n  width: 20%;\n  max-width: 40px;\n}\n.new-accounts ul.chats li.chat-persons a span.pro-pic img {\n  max-width: 100%;\n  width: 100%;\n  border-radius: 100%;\n}\n.new-accounts ul.chats li.chat-persons a div.user {\n  width: 60%;\n  padding: 5px 10px 0 15px;\n}\n.new-accounts ul.chats li.chat-persons a div.user p.u-name {\n  margin: 0;\n  color: #212529;\n}\n.new-accounts ul.chats li.chat-persons a div.user p.u-designation {\n  margin: 0;\n  color: #212529;\n  font-size: 12px;\n}\n.new-accounts ul.chats li.chat-persons a p.joined-date {\n  text-align: right;\n  margin-left: auto;\n  margin-bottom: 0;\n  font-size: 12px;\n}\n.rtl .new-accounts ul.chats li.chat-persons a p.joined-date {\n  margin-left: 0;\n  margin-right: auto;\n}\n.horizontal-timeline .time-frame {\n  border-bottom: 1px solid #cdd6dc;\n  padding-top: 20px;\n}\n.horizontal-timeline .time-frame:last-child {\n  border-bottom: none;\n}\n.horizontal-timeline .time-frame .section-time-frame {\n  margin-bottom: 30px;\n}\n.horizontal-timeline .time-frame .event {\n  border-left: 1px solid #cdd6dc;\n  padding-left: 2rem;\n  padding-bottom: 30px;\n  position: relative;\n}\n.horizontal-timeline .time-frame .event:last-child {\n  border-left: none;\n}\n.horizontal-timeline .time-frame .event .event-text {\n  line-height: 1;\n  font-weight: 400;\n  margin-bottom: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n  white-space: nowrap;\n}\n.horizontal-timeline .time-frame .event .tumbnail-views {\n  display: inline-block;\n}\n.horizontal-timeline .time-frame .event .tumbnail-views .thumbnail {\n  float: left;\n  margin-right: 16px;\n  margin-top: 1rem;\n}\n.horizontal-timeline .time-frame .event .tumbnail-views .thumbnail img {\n  max-width: 100%;\n  border-radius: 4px;\n}\n.horizontal-timeline .time-frame .event .event-alert {\n  margin-top: 1rem;\n  padding: 11px 25px;\n  background: #fbfbfb;\n  width: 80%;\n  font-family: \"roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 300;\n  border-radius: 4px;\n}\n.horizontal-timeline .time-frame .event .event-info {\n  margin-top: 0.8rem;\n  font-family: \"roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  color: #6c757d;\n}\n.horizontal-timeline .time-frame .event:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -5px;\n  height: 10px;\n  width: 10px;\n  border-radius: 100%;\n}\n.horizontal-timeline .time-frame .event:nth-child(3n+1):before {\n  background: #8862e0;\n}\n.horizontal-timeline .time-frame .event:nth-child(3n+2):before {\n  background: #19d895;\n}\n.horizontal-timeline .time-frame .event:nth-child(3n+3):before {\n  background: #3a8696;\n}\n\n/* Timeline */\n.vertical-timeline {\n  list-style: none;\n  padding: 0;\n  position: relative;\n}\n.vertical-timeline:before {\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 3px;\n  background-color: #dde4eb;\n  left: 50%;\n  margin-left: -1.5px;\n}\n.vertical-timeline .timeline-wrapper {\n  display: block;\n  margin-bottom: 20px;\n  position: relative;\n  width: 100%;\n  padding-right: 90px;\n}\n.vertical-timeline .timeline-wrapper:before {\n  content: \" \";\n  display: table;\n}\n.vertical-timeline .timeline-wrapper:after {\n  content: \" \";\n  display: table;\n  clear: both;\n}\n.vertical-timeline .timeline-wrapper .timeline-panel {\n  border-radius: 2px;\n  padding: 20px;\n  position: relative;\n  background: #ffffff;\n  border-radius: 6px;\n  box-shadow: 1px 2px 35px 0 rgba(1, 1, 1, 0.1);\n  width: 35%;\n  margin-left: 15%;\n}\n.vertical-timeline .timeline-wrapper .timeline-panel:before {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 2px;\n  content: \"\";\n  left: 0;\n  right: 0;\n}\n.vertical-timeline .timeline-wrapper .timeline-panel:after {\n  position: absolute;\n  top: 7px;\n  right: -14px;\n  display: inline-block;\n  border-top: 14px solid transparent;\n  border-left: 14px solid #ffffff;\n  border-right: 0 solid #ffffff;\n  border-bottom: 14px solid transparent;\n  content: \" \";\n}\n.vertical-timeline .timeline-wrapper .timeline-panel .timeline-title {\n  margin-top: 0;\n  color: #252C46;\n  text-transform: uppercase;\n}\n.vertical-timeline .timeline-wrapper .timeline-panel .timeline-body p {\n  margin-bottom: 0;\n}\n.vertical-timeline .timeline-wrapper .timeline-panel .timeline-body p + p {\n  margin-top: 5px;\n}\n.vertical-timeline .timeline-wrapper .timeline-panel .timeline-body ul {\n  margin-bottom: 0;\n}\n.vertical-timeline .timeline-wrapper .timeline-panel .timeline-footer span {\n  font-size: 0.6875rem;\n}\n.vertical-timeline .timeline-wrapper .timeline-panel .timeline-footer i {\n  font-size: 1.5rem;\n}\n.vertical-timeline .timeline-wrapper .timeline-badge {\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  top: 16px;\n  left: calc(50% - 7px);\n  z-index: 100;\n  border-top-right-radius: 50%;\n  border-top-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border: 2px solid #ffffff;\n}\n.vertical-timeline .timeline-wrapper .timeline-badge i {\n  color: #ffffff;\n}\n.vertical-timeline .timeline-wrapper.timeline-inverted {\n  padding-right: 0;\n  padding-left: 90px;\n}\n.vertical-timeline .timeline-wrapper.timeline-inverted .timeline-panel {\n  margin-left: auto;\n  margin-right: 15%;\n}\n.vertical-timeline .timeline-wrapper.timeline-inverted .timeline-panel:after {\n  border-left-width: 0;\n  border-right-width: 14px;\n  left: -14px;\n  right: auto;\n}\n@media (max-width: 767px) {\n.timeline .timeline-wrapper {\n    padding-right: 150px;\n}\n.timeline .timeline-wrapper.timeline-inverted {\n    padding-left: 150px;\n}\n.timeline .timeline-wrapper .timeline-panel {\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n}\n.timeline-wrapper-primary .timeline-panel:before {\n  background: #3a8696;\n}\n.timeline-wrapper-primary .timeline-badge {\n  background: #3a8696;\n}\n.timeline-wrapper-secondary .timeline-panel:before {\n  background: #dde4eb;\n}\n.timeline-wrapper-secondary .timeline-badge {\n  background: #dde4eb;\n}\n.timeline-wrapper-success .timeline-panel:before {\n  background: #19d895;\n}\n.timeline-wrapper-success .timeline-badge {\n  background: #19d895;\n}\n.timeline-wrapper-info .timeline-panel:before {\n  background: #8862e0;\n}\n.timeline-wrapper-info .timeline-badge {\n  background: #8862e0;\n}\n.timeline-wrapper-warning .timeline-panel:before {\n  background: #ffaf00;\n}\n.timeline-wrapper-warning .timeline-badge {\n  background: #ffaf00;\n}\n.timeline-wrapper-danger .timeline-panel:before {\n  background: #ff6258;\n}\n.timeline-wrapper-danger .timeline-badge {\n  background: #ff6258;\n}\n.timeline-wrapper-light .timeline-panel:before {\n  background: #fbfbfb;\n}\n.timeline-wrapper-light .timeline-badge {\n  background: #fbfbfb;\n}\n.timeline-wrapper-dark .timeline-panel:before {\n  background: #252C46;\n}\n.timeline-wrapper-dark .timeline-badge {\n  background: #252C46;\n}\n\n/* Portfolio */\n.portfolio-grid figure {\n  position: relative;\n  float: left;\n  overflow: hidden;\n  width: 100%;\n  background: #ffaf00;\n  text-align: center;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n.portfolio-grid figure {\n    width: 270px;\n}\n}\n.portfolio-grid figure img {\n  position: relative;\n  display: block;\n  min-height: 100%;\n  max-width: 100%;\n  width: 100%;\n  opacity: 0.8;\n}\n.portfolio-grid figure figcaption {\n  padding: 2em;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 1.25em;\n  backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.portfolio-grid figure figcaption:after, .portfolio-grid figure figcaption:before {\n  pointer-events: none;\n}\n.portfolio-grid figure.effect-text-in {\n  border-radius: 0.25rem;\n}\n.portfolio-grid figure.effect-text-in h4,\n.portfolio-grid figure.effect-text-in img {\n  transition: transform 0.35s;\n}\n.portfolio-grid figure.effect-text-in img {\n  backface-visibility: hidden;\n}\n.portfolio-grid figure.effect-text-in h4,\n.portfolio-grid figure.effect-text-in p {\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  padding: 10px;\n  margin-bottom: 0;\n  width: 100%;\n}\n.portfolio-grid figure.effect-text-in p {\n  text-transform: none;\n  opacity: 0;\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(0, 50px, 0);\n}\n.portfolio-grid figure.effect-text-in:hover img {\n  transform: translate3d(0, -80px, 0);\n}\n.portfolio-grid figure.effect-text-in:hover h4 {\n  transform: translate3d(0, -100px, 0);\n}\n.portfolio-grid figure.effect-text-in:hover p {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n/* Pricing table */\n.pricing-table .pricing-card .pricing-card-body {\n  padding: 50px 56px 43px;\n}\n.pricing-table .pricing-card .pricing-card-body .plan-features {\n  width: 100%;\n  margin-bottom: 32px;\n}\n.pricing-table .pricing-card .pricing-card-body .plan-features li {\n  text-align: left;\n  padding: 4px 0;\n  font-family: \"roboto\", sans-serif;\n  font-size: 0.875rem;\n}\n.timeline {\n  list-style: none;\n  padding-left: 0;\n}\n.timeline .timeline-item {\n  border-left: 1px solid #cdd6dc;\n  color: #6c757d;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  position: relative;\n}\n.timeline .timeline-item:before {\n  content: \"\";\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  position: absolute;\n  top: 0px;\n  left: -5px;\n}\n.timeline .timeline-item:nth-child(4n+1):before {\n  background: #19d895;\n}\n.timeline .timeline-item:nth-child(4n+2):before {\n  background: #3a8696;\n}\n.timeline .timeline-item:nth-child(4n+3):before {\n  background: #ffaf00;\n}\n.timeline .timeline-item:nth-child(4n+4):before {\n  background: #8862e0;\n}\n.timeline .timeline-item:last-child {\n  border-left: none;\n  padding-bottom: 0;\n}\n.timeline .timeline-item .timeline-content {\n  margin-bottom: 0;\n  line-height: 10px;\n}\n.timeline .timeline-item .event-time {\n  margin-bottom: 0;\n}\n.product-nav-wrapper {\n  display: flex;\n  align-items: center;\n}\n.product-nav-wrapper .product-filter-nav {\n  list-style: none;\n  margin-bottom: 30px;\n}\n.product-nav-wrapper .product-filter-nav li {\n  display: inline-block;\n}\n.product-nav-wrapper .product-filter-nav li a {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 500;\n  margin-right: 20px;\n  color: #212529;\n}\n.product-nav-wrapper .product-filter-nav li.active a {\n  color: #3a8696;\n}\n.product-nav-wrapper .product-filter-options {\n  margin-left: auto;\n  padding-left: 0;\n  display: flex;\n  align-items: center;\n}\n.product-nav-wrapper .product-filter-options .account-user-info {\n  list-style: none;\n  margin-bottom: 30px;\n}\n.product-nav-wrapper .product-filter-options .account-user-info li {\n  display: inline-block;\n}\n.product-nav-wrapper .product-filter-options .account-user-info li a {\n  display: inline-block;\n  font-size: 16px;\n  margin-right: 10px;\n  padding-right: 10px;\n  line-height: 1;\n  color: #212529;\n  border-right: 1px solid #cdd6dc;\n}\n.product-nav-wrapper .product-filter-options .account-user-info li:last-child a {\n  border-right: none;\n}\n.product-nav-wrapper .product-filter-options .account-user-info {\n  list-style: none;\n  margin-bottom: 30px;\n}\n.product-nav-wrapper .product-filter-options .account-user-info li {\n  display: inline-block;\n}\n.product-nav-wrapper .product-filter-options .account-user-info li a {\n  display: inline-block;\n  font-size: 16px;\n  margin-right: 10px;\n  padding-right: 10px;\n  line-height: 1;\n  color: #212529;\n  border-right: 1px solid #cdd6dc;\n  text-decoration: none;\n}\n.product-nav-wrapper .product-filter-options .account-user-info li:last-child a {\n  border-right: none;\n}\n.product-nav-wrapper .product-filter-options .account-user-link {\n  list-style: none;\n  margin-bottom: 30px;\n}\n.product-nav-wrapper .product-filter-options .account-user-link li {\n  display: inline-block;\n}\n.product-nav-wrapper .product-filter-options .account-user-link li a {\n  display: inline-block;\n  font-size: 16px;\n  line-height: 1;\n  color: #212529;\n  text-decoration: none;\n}\n.product-nav-wrapper .product-filter-options .account-user-link li a:after {\n  content: \"/\";\n  display: inline-block;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.product-nav-wrapper .product-filter-options .account-user-link li:last-child a:after {\n  display: none;\n  margin-left: 0px;\n}\n.product-nav-wrapper .product-filter-options .account-user-actions {\n  list-style: none;\n  margin-bottom: 30px;\n}\n.product-nav-wrapper .product-filter-options .account-user-actions li {\n  display: inline-block;\n  margin-right: 15px;\n  position: relative;\n}\n.product-nav-wrapper .product-filter-options .account-user-actions li .badge {\n  position: absolute;\n  top: -12px;\n  right: -7px;\n}\n.product-nav-wrapper .product-filter-options .account-user-actions li a {\n  display: inline-block;\n  font-size: 16px;\n  line-height: 1;\n  color: #212529;\n  text-decoration: none;\n}\n.product-nav-wrapper .product-filter-options .account-user-actions li:last-child {\n  margin-right: 0;\n}\n.product-item-wrapper {\n  margin-bottom: -15px;\n}\n.product-item-wrapper .product-item {\n  box-shadow: none;\n  margin-bottom: 20px;\n}\n.product-item-wrapper .product-item .card {\n  box-shadow: none;\n}\n.product-item-wrapper .product-item .card-body {\n  padding: 20px 25px;\n  display: grid;\n  position: relative;\n  grid-template-columns: 70% 30%;\n  grid-template-rows: auto;\n  grid-template-areas: \"product-image product-image\" \"product-title product-price\" \"product-variation product-actual-price\" \"product-description product-description\";\n}\n.product-item-wrapper .product-item .card-body .action-holder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  padding: 35px 40px;\n  display: flex;\n  align-items: center;\n  z-index: 2;\n}\n.product-item-wrapper .product-item .card-body .action-holder .sale-badge {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 500;\n}\n.product-item-wrapper .product-item .card-body .action-holder .favorite-button {\n  margin-left: auto;\n  color: #fff;\n  font-size: 22px;\n}\n.product-item-wrapper .product-item .card-body .product_image {\n  width: 100%;\n  max-width: 100%;\n  min-width: 100%;\n  grid-area: product-image;\n  margin-bottom: 15px;\n  transform: scale(1);\n  z-index: 1;\n  border-radius: 0px;\n  box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0);\n  transition-duration: 0.3s;\n  transition-timing-function: \"ease\";\n  transition-property: \"transform\", \"border-radius\", \"box-shadow\";\n}\n.product-item-wrapper .product-item .card-body .product-title {\n  grid-area: product-title;\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n.product-item-wrapper .product-item .card-body .product-price {\n  grid-area: product-price;\n  font-size: 20px;\n  font-weight: 500;\n  text-align: right;\n  margin-bottom: 10px;\n}\n.product-item-wrapper .product-item .card-body .product-actual-price {\n  grid-area: product-actual-price;\n  font-size: 15px;\n  color: #4d4c4c;\n  text-align: right;\n  text-decoration: line-through;\n}\n.product-item-wrapper .product-item .card-body .product-variation {\n  grid-area: product-variation;\n  list-style-type: none;\n  display: inline-block;\n  padding-left: 0;\n  padding-bottom: 0;\n}\n.product-item-wrapper .product-item .card-body .product-variation li {\n  display: inline-block;\n  border: 1px solid #cdd6dc;\n  padding: 0px 15px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  transition-duration: 0.3s;\n  transition-property: \"background\";\n}\n.product-item-wrapper .product-item .card-body .product-variation li a {\n  color: inherit;\n  text-decoration: none;\n}\n.product-item-wrapper .product-item .card-body .product-variation li:hover {\n  background: #dde4eb;\n}\n.product-item-wrapper .product-item .card-body .product-description {\n  grid-area: product-description;\n  line-height: 1.71;\n}\n.product-item-wrapper .product-item:hover .product_image {\n  transform: scale(1.1);\n  border-radius: 4px;\n  box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.58);\n}\n.chat-app-wrapper {\n  position: relative;\n  overflow: hidden;\n}\n.chat-app-wrapper .chat-list-wrapper {\n  overflow-y: auto;\n  border-right: 1px solid #cdd6dc;\n  padding-bottom: 30px;\n}\n@media (max-width: 768px) {\n.chat-app-wrapper .chat-list-wrapper {\n    position: absolute;\n    left: -300px;\n    top: 0;\n    z-index: 99;\n    bottom: 0px;\n    background: #dde4eb;\n    width: 300px;\n    height: 100%;\n    border-right: none;\n    transition-duration: 0.3s;\n    transition-property: \"box-shadow\", \"left\";\n}\n.chat-app-wrapper .chat-list-wrapper.menu-open {\n    left: 0px;\n    box-shadow: 6px 4px 15px -5px rgba(0, 0, 0, 0.25);\n}\n}\n.chat-app-wrapper .chat-list-wrapper .chat-list-item-wrapper {\n  padding-top: 20px;\n  padding-bottom: 40px;\n}\n.chat-app-wrapper .chat-list-wrapper .chat-list-item-wrapper .list-item {\n  display: grid;\n  grid-template-columns: 45px auto auto;\n  grid-template-rows: 30px auto;\n  padding: 15px 20px;\n  transition-duration: 0.5s;\n  transition-property: \"background\";\n}\n.chat-app-wrapper .chat-list-wrapper .chat-list-item-wrapper .list-item .profile-image {\n  position: relative;\n}\n.chat-app-wrapper .chat-list-wrapper .chat-list-item-wrapper .list-item .profile-image .dot-indicator {\n  position: absolute;\n  top: 15px;\n  right: -5px;\n  z-index: 1;\n  height: 12px;\n  width: 12px;\n  border: 2px solid #dde4eb;\n}\n.chat-app-wrapper .chat-list-wrapper .chat-list-item-wrapper .list-item .user-name {\n  color: #6c757d;\n  padding-left: 20px;\n  margin-bottom: 0;\n}\n.chat-app-wrapper .chat-list-wrapper .chat-list-item-wrapper .list-item .chat-time {\n  color: #6c757d;\n  text-align: right;\n}\n.chat-app-wrapper .chat-list-wrapper .chat-list-item-wrapper .list-item .chat-text {\n  padding-left: 20px;\n  grid-column-start: 2;\n  grid-column-end: 4;\n  grid-row-start: 2;\n  margin-bottom: 0;\n}\n.chat-app-wrapper .chat-list-wrapper .chat-list-item-wrapper .list-item:hover {\n  background: rgba(58, 134, 150, 0.1);\n}\n.chat-app-wrapper .chat-search-input {\n  padding-top: 30px;\n  padding-bottom: 10px;\n}\n.chat-app-wrapper .chat-search-input .form-control {\n  height: 40px;\n  border-right: none;\n  border-radius: 4px 0px 0px 4px;\n  color: #6c757d;\n}\n.chat-app-wrapper .chat-search-input .input-group-text {\n  padding: 8px 15px;\n  font-size: 20px;\n  border-radius: 0px 4px 4px 0px;\n}\n.chat-app-wrapper .chat-search-input .input-group-text i {\n  color: #6c757d;\n}\n.chat-app-wrapper .sidebar-spacer {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.chat-app-wrapper .chat-container-wrapper {\n  height: 100%;\n  min-height: 100vh;\n  max-height: 950px;\n  overflow-y: auto;\n  padding-bottom: 20px;\n  padding: 0 15px 30px 15px;\n}\n.chat-app-wrapper .chat-container-wrapper .chat-bubble {\n  margin-top: 30px;\n}\n.chat-app-wrapper .chat-container-wrapper .chat-bubble .chat-message {\n  border-radius: 4px;\n  padding: 20px;\n}\n.chat-app-wrapper .chat-container-wrapper .chat-bubble .chat-message p:last-child {\n  margin-bottom: 0;\n}\n.chat-app-wrapper .chat-container-wrapper .chat-bubble .sender-details {\n  display: flex;\n  align-items: center;\n  padding-top: 10px;\n}\n.chat-app-wrapper .chat-container-wrapper .chat-bubble .sender-details .seen-text {\n  margin-bottom: 0;\n  color: #6c757d;\n}\n.chat-app-wrapper .chat-container-wrapper .chat-bubble.incoming-chat .chat-message {\n  background: #F3F3F3;\n  margin-left: 45px;\n}\n.chat-app-wrapper .chat-container-wrapper .chat-bubble.incoming-chat .sender-details .seen-text {\n  padding-left: 10px;\n}\n.chat-app-wrapper .chat-container-wrapper .chat-bubble.outgoing-chat .chat-message {\n  background: #3a8696;\n  margin-left: auto;\n  max-width: 290px;\n  margin-right: 45px;\n}\n.chat-app-wrapper .chat-container-wrapper .chat-bubble.outgoing-chat .chat-message p {\n  color: #fff;\n}\n.chat-app-wrapper .chat-container-wrapper .chat-bubble.outgoing-chat .sender-details {\n  flex-direction: row-reverse;\n}\n.chat-app-wrapper .chat-container-wrapper .chat-bubble.outgoing-chat .sender-details .seen-text {\n  padding-right: 10px;\n}\n.chat-app-wrapper .chat-sidebar {\n  height: 100%;\n  max-height: 950px;\n  overflow-y: auto;\n  border-left: 1px solid #cdd6dc;\n}\n.chat-app-wrapper .chat-text-field {\n  border-top: 1px solid #cdd6dc;\n  padding: 10px 0;\n}\n.chat-app-wrapper .chat-text-field .input-group .input-group-prepend .input-group-text,\n.chat-app-wrapper .chat-text-field .input-group .input-group-append .input-group-text {\n  border: none;\n}\n.chat-app-wrapper .chat-text-field .input-group .form-control {\n  height: 45px;\n  border: none;\n}\n.card {\n  box-shadow: 0 0 0 0 rgba(90, 113, 208, 0.11), 0 4px 16px 0 rgba(167, 175, 183, 0.33);\n  border: solid 1px #dde4eb;\n  border-radius: 0px;\n}\n.card .card-title {\n  color: #212529;\n}\n.card .card-header {\n  background: #fff;\n  padding: 1em 1rem;\n}\n#sales-statistics-legend .chartjs-legend {\n  margin-top: 20px;\n  margin-right: 20px;\n}\n#sales-statistics-legend .chartjs-legend ul li {\n  color: #212529;\n}\n#sales-statistics-legend .chartjs-legend ul li span {\n  width: 20px;\n  height: 3px;\n  border-radius: 0px;\n}\n#net-profit-legend .chartjs-legend li {\n  font-weight: 500;\n  color: #212529;\n}\n.average-price-card .card {\n  background: #002c5f;\n}\n.average-price-card h3 {\n  margin-bottom: 0;\n}\n.average-price-card .icon-holder {\n  border-radius: 5px;\n  border: 1px solid #002c5f;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #002c5f;\n  color: #fff;\n  font-size: 20px;\n}\n.average-price-card .icon-holder i {\n  line-height: 1;\n}\n#dashboard-vmap {\n  height: 161px;\n  width: 100%;\n}\n#dashboard-vmap .jvectormap-zoomin,\n#dashboard-vmap .jvectormap-zoomout {\n  display: none;\n}\n.proBanner {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 9999;\n}\n.proBanner .purchase-popup {\n  background: #000;\n  color: #fff;\n  padding: 15px 20px;\n  border-radius: 3px;\n}\n.proBanner .purchase-popup .btn {\n  margin-right: 20px;\n  font-weight: 500;\n  color: #ffffff;\n  border-radius: 5px;\n  transition-duration: 0.2s;\n}\n.proBanner .purchase-popup .btn.download-button {\n  background: rgba(249, 249, 249, 0.7);\n  color: #969292;\n  border: 1px solid rgb(215.25, 215.25, 215.25);\n}\n.proBanner .purchase-popup .btn.purchase-button {\n  background-color: #8862e0;\n  color: #ffffff;\n  border: none;\n  line-height: 1;\n  vertical-align: middle;\n}\n.proBanner .purchase-popup p {\n  margin-bottom: auto;\n  margin-top: auto;\n  color: #b1b1b1;\n  font-weight: 400;\n  vertical-align: middle;\n  line-height: 1;\n}\n.proBanner .purchase-popup i {\n  vertical-align: middle;\n  line-height: 1;\n  margin: auto 0;\n  color: #b1b1b1;\n}\n.proBanner .purchase-popup .bannerClose {\n  cursor: pointer;\n}\n.proBanner.hide {\n  display: none;\n}\n.pro-banner-collapse .proBanner {\n  display: none;\n}\n\n/* Footer */\n.footer {\n  background: #dbdbdb;\n  padding: 20px 1rem;\n  transition: all 0.25s ease;\n  -moz-transition: all 0.25s ease;\n  -webkit-transition: all 0.25s ease;\n  -ms-transition: all 0.25s ease;\n  border-top: 1px solid #cdd6dc;\n  font-size: calc(0.875rem - 0.05rem);\n  font-family: \"roboto\", sans-serif;\n}\n.footer a {\n  font-size: inherit;\n}\n@media (max-width: 991px) {\n.footer {\n    margin-left: 0;\n    width: 100%;\n}\n}\n.nav .nav-item,\n.navbar-nav .nav-item {\n  line-height: 1;\n}\n@media (max-width: 992px) {\n.nav .nav-item.dropdown,\n  .navbar-nav .nav-item.dropdown {\n    position: unset;\n}\n}\n.nav .nav-item.dropdown:not(.user-dropdown):not(.language-dropdown) .dropdown-toggle:after,\n.navbar-nav .nav-item.dropdown:not(.user-dropdown):not(.language-dropdown) .dropdown-toggle:after {\n  display: none;\n}\n.nav .nav-item.dropdown .dropdown-toggle:after,\n.navbar-nav .nav-item.dropdown .dropdown-toggle:after {\n  content: \"\\f140\";\n  display: block;\n  border: none;\n  font-family: \"Material Design Icons\";\n  font-size: 20px;\n  color: grey;\n  text-rendering: auto;\n  line-height: inherit;\n  vertical-align: 0;\n}\n.nav .nav-item.dropdown .count-indicator,\n.navbar-nav .nav-item.dropdown .count-indicator {\n  position: relative;\n  text-align: center;\n}\n.nav .nav-item.dropdown .count-indicator i,\n.navbar-nav .nav-item.dropdown .count-indicator i {\n  font-size: 21px;\n  margin-right: 0;\n  vertical-align: middle;\n}\n.nav .nav-item.dropdown .count-indicator .count,\n.navbar-nav .nav-item.dropdown .count-indicator .count {\n  position: absolute;\n  left: 50%;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 100%;\n  background: #FF0017;\n  color: #ffffff;\n  font-size: 11px;\n  top: -1px;\n  font-weight: 600;\n  line-height: 1rem;\n  border: none;\n  text-align: center;\n}\n.nav .nav-item.dropdown .count-indicator:after,\n.navbar-nav .nav-item.dropdown .count-indicator:after {\n  display: none;\n}\n.nav .nav-item.dropdown i,\n.navbar-nav .nav-item.dropdown i {\n  font-size: 17px;\n  margin-left: auto;\n  color: #6c757d;\n  vertical-align: middle;\n}\n.rtl .nav .nav-item.dropdown i,\n.rtl .navbar-nav .nav-item.dropdown i {\n  margin-right: auto;\n  margin-left: 0;\n}\n.nav .nav-item.dropdown .dropdown-item,\n.navbar-nav .nav-item.dropdown .dropdown-item {\n  display: flex;\n  align-items: center;\n}\n.nav .nav-item.dropdown .dropdown-item .badge,\n.navbar-nav .nav-item.dropdown .dropdown-item .badge {\n  margin-left: 0.5rem;\n}\n.rtl .nav .nav-item.dropdown .dropdown-item .badge,\n.rtl .navbar-nav .nav-item.dropdown .dropdown-item .badge {\n  margin-left: 0;\n  margin-right: 1.25rem;\n}\n@media (max-width: 991px) {\n.nav .nav-item.dropdown .dropdown-item .badge,\n  .navbar-nav .nav-item.dropdown .dropdown-item .badge {\n    margin-right: 0.5rem;\n}\n.rtl .nav .nav-item.dropdown .dropdown-item .badge,\n  .rtl .navbar-nav .nav-item.dropdown .dropdown-item .badge {\n    margin-left: 0.5rem;\n    margin-right: 0;\n}\n}\n.nav .nav-item.dropdown .navbar-dropdown,\n.navbar-nav .nav-item.dropdown .navbar-dropdown {\n  font-size: 0.9rem;\n  margin-top: 15px;\n  position: absolute;\n  right: 0;\n  left: auto;\n  border: 1px solid rgba(182, 182, 182, 0.1);\n  padding: 0 0 20px;\n  min-width: 100%;\n  border-radius: 2px;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.13);\n  overflow-x: hidden;\n  max-height: 350px;\n  overflow-y: auto;\n  overflow: hidden;\n}\n.rtl .nav .nav-item.dropdown .navbar-dropdown,\n.rtl .navbar-nav .nav-item.dropdown .navbar-dropdown {\n  right: auto;\n  left: 0;\n}\n@media (max-width: 991px) {\n.nav .nav-item.dropdown .navbar-dropdown,\n  .navbar-nav .nav-item.dropdown .navbar-dropdown {\n    right: -85px;\n}\n}\n.nav .nav-item.dropdown .navbar-dropdown.dropdown-left,\n.navbar-nav .nav-item.dropdown .navbar-dropdown.dropdown-left {\n  left: 0;\n  right: auto;\n}\n.nav .nav-item.dropdown .navbar-dropdown .dropdown-item,\n.navbar-nav .nav-item.dropdown .navbar-dropdown .dropdown-item {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0;\n  padding: 5px 25px;\n}\n.nav .nav-item.dropdown .navbar-dropdown .dropdown-item .ellipsis, .nav .nav-item.dropdown .navbar-dropdown .dropdown-item .chat-app-wrapper .chat-list-wrapper .chat-list-item-wrapper .list-item .user-name, .chat-app-wrapper .chat-list-wrapper .chat-list-item-wrapper .list-item .nav .nav-item.dropdown .navbar-dropdown .dropdown-item .user-name,\n.navbar-nav .nav-item.dropdown .navbar-dropdown .dropdown-item .ellipsis,\n.navbar-nav .nav-item.dropdown .navbar-dropdown .dropdown-item .chat-app-wrapper .chat-list-wrapper .chat-list-item-wrapper .list-item .user-name,\n.chat-app-wrapper .chat-list-wrapper .chat-list-item-wrapper .list-item .navbar-nav .nav-item.dropdown .navbar-dropdown .dropdown-item .user-name {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav .nav-item.dropdown .navbar-dropdown .dropdown-item .preview-icon,\n.navbar-nav .nav-item.dropdown .navbar-dropdown .dropdown-item .preview-icon {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nav .nav-item.dropdown .navbar-dropdown .dropdown-item .small-text,\n.navbar-nav .nav-item.dropdown .navbar-dropdown .dropdown-item .small-text {\n  font-size: 0.75rem;\n}\n.nav .nav-item.dropdown .navbar-dropdown .dropdown-divider,\n.navbar-nav .nav-item.dropdown .navbar-dropdown .dropdown-divider {\n  margin: 0;\n}\n\n/* Navbar */\n.navbar.default-layout {\n  font-family: \"roboto\", sans-serif;\n  background: #fff;\n  transition: background 0.25s ease;\n  -webkit-transition: background 0.25s ease;\n  -moz-transition: background 0.25s ease;\n  -ms-transition: background 0.25s ease;\n}\n.navbar.default-layout .navbar-brand-wrapper {\n  transition: width 0.25s ease, background 0.25s ease;\n  -webkit-transition: width 0.25s ease, background 0.25s ease;\n  -moz-transition: width 0.25s ease, background 0.25s ease;\n  -ms-transition: width 0.25s ease, background 0.25s ease;\n  background: #002c5f;\n  width: 270px;\n  height: 63px;\n}\n.navbar.default-layout .navbar-brand-wrapper .navbar-brand {\n  color: #ffffff;\n  font-size: 1.2rem;\n  line-height: 48px;\n  margin-right: 0;\n  padding: 0.25rem 0;\n  display: flex;\n}\n.navbar.default-layout .navbar-brand-wrapper .navbar-brand:active, .navbar.default-layout .navbar-brand-wrapper .navbar-brand:focus, .navbar.default-layout .navbar-brand-wrapper .navbar-brand:hover {\n  color: rgb(65.6, 68.8, 70.4);\n}\n.navbar.default-layout .navbar-brand-wrapper .navbar-brand img {\n  width: 170px;\n  max-width: 100%;\n  margin: auto;\n  vertical-align: middle;\n}\n.navbar.default-layout .navbar-brand-wrapper .brand-logo-mini {\n  display: none;\n}\n.navbar.default-layout .navbar-brand-wrapper .brand-logo-mini img {\n  width: 40px;\n  max-width: 100%;\n  margin: auto;\n}\n.navbar.default-layout .navbar-menu-wrapper {\n  transition: width 0.25s ease;\n  -webkit-transition: width 0.25s ease;\n  -moz-transition: width 0.25s ease;\n  -ms-transition: width 0.25s ease;\n  color: #002c5f;\n  padding-left: 15px;\n  padding-right: 15px;\n  width: calc(100% - 270px);\n  height: 63px;\n  box-shadow: 0 4px 16px 0 rgba(167, 175, 183, 0.33);\n}\n@media (max-width: 991px) {\n.navbar.default-layout .navbar-menu-wrapper {\n    width: calc(100% - 70px);\n}\n}\n.navbar.default-layout .navbar-menu-wrapper .navbar-toggler {\n  border: 0;\n  color: inherit;\n  display: block;\n}\n@media (max-width: 991px) {\n.navbar.default-layout .navbar-menu-wrapper .navbar-toggler {\n    display: none;\n}\n}\n.navbar.default-layout .navbar-menu-wrapper .navbar-toggler.navbar-toggler-right {\n  display: none;\n}\n@media (max-width: 991px) {\n.navbar.default-layout .navbar-menu-wrapper .navbar-toggler.navbar-toggler-right {\n    display: block;\n}\n}\n.navbar.default-layout .navbar-menu-wrapper .search-form {\n  width: 60%;\n  margin-right: 30px;\n}\n.navbar.default-layout .navbar-menu-wrapper .search-form .form-group {\n  margin-bottom: 0;\n}\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav {\n  flex-direction: row;\n  align-items: center;\n}\n@media (max-width: 992px) {\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav .nav-item {\n    margin-left: 10px;\n    margin-right: 0px;\n}\n}\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav .nav-item .nav-link {\n  color: inherit;\n  font-size: 15px;\n  vertical-align: middle;\n  padding-right: 0;\n}\n@media (max-width: 767px) {\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav .nav-item .nav-link {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n}\n}\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav .nav-item .nav-link i {\n  font-size: 1.25rem;\n  vertical-align: middle;\n  margin-right: 0;\n}\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav .nav-item.user-dropdown {\n  margin-left: 35px;\n}\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav .nav-item.user-dropdown:before {\n  position: relative;\n  top: 2px;\n  font-size: 20px;\n  color: grey;\n}\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav .nav-item.user-dropdown .dropdown-menu {\n  min-width: 250px;\n  margin-top: 9px;\n}\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav .nav-item.user-dropdown .dropdown-menu .dropdown-header {\n  padding: 20px;\n}\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav .nav-item.user-dropdown .dropdown-menu .dropdown-item {\n  padding: 5px 15px;\n}\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav .nav-item.user-dropdown .dropdown-toggle:after {\n  position: relative;\n  top: 50%;\n}\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav .nav-item.language-dropdown .dropdown-menu {\n  width: 170px;\n  left: -7px !important;\n}\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav .nav-item.language-dropdown .dropdown-menu .dropdown-item {\n  padding-left: 22px;\n  padding-right: 12px;\n}\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav .nav-item.language-dropdown .dropdown-menu .dropdown-item .flag-icon-holder {\n  margin-right: 15px;\n}\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav .nav-item.language-dropdown .flag-icon-holder {\n  height: 25px;\n  width: 25px;\n  border-radius: 100%;\n  overflow: hidden;\n}\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav .nav-item.language-dropdown .flag-icon-holder i {\n  font-size: 25px;\n}\n@media (min-width: 992px) {\n.navbar.default-layout .navbar-menu-wrapper .navbar-nav.navbar-nav-right {\n    margin-left: auto;\n    width: 60%;\n}\n.rtl .navbar.default-layout .navbar-menu-wrapper .navbar-nav.navbar-nav-right {\n    margin-left: 0;\n    margin-right: auto;\n}\n}\n@media (max-width: 991px) {\n.navbar.default-layout {\n    flex-direction: row;\n}\n.navbar.default-layout .navbar-brand-wrapper {\n    width: 70px;\n}\n.navbar.default-layout .navbar-brand-wrapper .brand-logo {\n    display: none;\n}\n.navbar.default-layout .navbar-brand-wrapper .brand-logo-mini {\n    display: inline-block;\n}\n.navbar-collapse {\n    display: flex;\n    margin-top: 0.5rem;\n}\n}\n/* Sidebar */\n.app-sidebar {\n  background: #002c5f;\n}\na, a:hover {\n  color: #002c5f;\n}\n.text-primary {\n  color: #002c5f !important;\n}\n.btn-success {\n  background-color: #002c5f;\n  border-color: #002c5f;\n}\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\n  background-color: #002c5f;\n  border-color: #002c5f;\n}\n.page-link:hover, .page-item:hover {\n  background-color: #002c5f !important;\n}\n.sidebar > .nav .nav-item:not(.hover-open) .collapse .sub-menu .nav-item .active:before, .sidebar > .nav .nav-item:not(.hover-open) .collapsing .sub-menu .nav-item .active:before {\n  color: #fff !important;\n  background: #fff !important;\n}\n.btn-group .btn.btn-success {\n  border-color: #002c5f !important;\n}\n.btn-success:hover {\n  background-color: #002c5f;\n  border-color: #002c5f;\n}\n.sidebar {\n  min-height: calc(100vh - 63px);\n  font-family: \"roboto\", sans-serif;\n  background: linear-gradient(to top, #002c5f, #002c5f);\n  padding: 0;\n  width: 270px;\n  z-index: 11;\n  transition: width 0.25s ease, background 0.25s ease;\n  -webkit-transition: width 0.25s ease, background 0.25s ease;\n  -moz-transition: width 0.25s ease, background 0.25s ease;\n  -ms-transition: width 0.25s ease, background 0.25s ease;\n}\n.sidebar > .nav {\n  overflow: hidden;\n  flex-wrap: nowrap;\n  flex-direction: column;\n}\n.sidebar > .nav .nav-item .collapse {\n  z-index: 999;\n}\n.sidebar > .nav .nav-item:not(.hover-open) .collapse .sub-menu,\n.sidebar > .nav .nav-item:not(.hover-open) .collapsing .sub-menu {\n  margin: 5px 0;\n}\n.rtl .sidebar > .nav .nav-item:not(.hover-open) .collapse .sub-menu,\n.rtl .sidebar > .nav .nav-item:not(.hover-open) .collapsing .sub-menu {\n  padding: 0 3.45rem 0 0;\n}\n.sidebar > .nav .nav-item:not(.hover-open) .collapse .sub-menu .nav-item .nav-link,\n.sidebar > .nav .nav-item:not(.hover-open) .collapsing .sub-menu .nav-item .nav-link {\n  padding: 10px 0px 10px 70px;\n  position: relative;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: calc(15px - 2px);\n  font-weight: 500;\n  transition-duration: 0.5s;\n  transition-timing-function: \"ease-in-out\";\n  transition-property: \"background\", \"color\", \"box-shadow\", \"padding\";\n}\n.sidebar > .nav .nav-item:not(.hover-open) .collapse .sub-menu .nav-item .nav-link:before,\n.sidebar > .nav .nav-item:not(.hover-open) .collapsing .sub-menu .nav-item .nav-link:before {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 35px;\n  display: block;\n  height: 100%;\n  width: 2px;\n  background: rgb(0, 1.4821052632, 3.2);\n}\n.rtl .sidebar > .nav .nav-item:not(.hover-open) .collapse .sub-menu .nav-item .nav-link:before,\n.rtl .sidebar > .nav .nav-item:not(.hover-open) .collapsing .sub-menu .nav-item .nav-link:before {\n  right: -5px;\n  left: unset;\n}\n.sidebar > .nav .nav-item:not(.hover-open) .collapse .sub-menu .nav-item .nav-link:hover,\n.sidebar > .nav .nav-item:not(.hover-open) .collapsing .sub-menu .nav-item .nav-link:hover {\n  color: #fff;\n}\n.sidebar > .nav .nav-item:not(.hover-open) .collapse .sub-menu .nav-item .nav-link:hover:before,\n.sidebar > .nav .nav-item:not(.hover-open) .collapsing .sub-menu .nav-item .nav-link:hover:before {\n  background: #fff;\n}\n.rtl .sidebar > .nav .nav-item:not(.hover-open) .collapse .sub-menu .nav-item .nav-link,\n.rtl .sidebar > .nav .nav-item:not(.hover-open) .collapsing .sub-menu .nav-item .nav-link {\n  padding: 10px 15px 10px 0px;\n}\n.sidebar > .nav .nav-item:not(.hover-open) .collapse .sub-menu .nav-item:first-child .nav-link,\n.sidebar > .nav .nav-item:not(.hover-open) .collapsing .sub-menu .nav-item:first-child .nav-link {\n  padding-top: 0;\n}\n.sidebar > .nav .nav-item:not(.hover-open) .collapse .sub-menu .nav-item:last-child .nav-link,\n.sidebar > .nav .nav-item:not(.hover-open) .collapsing .sub-menu .nav-item:last-child .nav-link {\n  padding-bottom: 0;\n}\n.sidebar > .nav .nav-item .nav-link {\n  align-items: center;\n  display: flex;\n  padding: 15px 30px 15px 55px;\n  white-space: nowrap;\n  color: #fff;\n}\n.rtl .sidebar > .nav .nav-item .nav-link {\n  padding: 15px 70px 15px 30px;\n}\n.sidebar > .nav .nav-item .nav-link i.menu-arrow {\n  margin-left: auto;\n  margin-right: 0;\n  transition-duration: 0.2s;\n  transition-property: transform;\n  transition-timing-function: ease-in;\n}\n.sidebar > .nav .nav-item .nav-link i.menu-arrow:before {\n  content: \"\\f054\";\n  font-family: \"Material Design Icons\";\n  font-size: 18px;\n  line-height: 1;\n  font-style: normal;\n  vertical-align: middle;\n  color: #bfccda;\n}\n.sidebar > .nav .nav-item .nav-link[aria-expanded=true] i.menu-arrow {\n  transform: rotate(90deg);\n}\n.sidebar > .nav .nav-item .nav-link .menu-icon {\n  display: none;\n  margin-right: 1.25rem;\n  width: 16px;\n  line-height: 1;\n  font-size: 18px;\n  color: #fff;\n}\n.rtl .sidebar > .nav .nav-item .nav-link .menu-icon {\n  margin-right: 0;\n  margin-left: 1.25rem;\n}\n.sidebar > .nav .nav-item .nav-link .menu-title {\n  color: inherit;\n  display: inline-block;\n  font-size: 15px;\n  line-height: 1;\n  vertical-align: middle;\n  font-weight: 500;\n}\n.sidebar > .nav .nav-item .nav-link .badge {\n  margin-left: auto;\n}\n.sidebar > .nav .nav-item .nav-link:hover {\n  color: rgb(242.25, 242.25, 242.25);\n}\n.sidebar > .nav .nav-item.active > .nav-link {\n  color: #fff;\n}\n.sidebar > .nav .nav-item.active > .nav-link .menu-title,\n.sidebar > .nav .nav-item.active > .nav-link i {\n  color: inherit;\n}\n.sidebar > .nav .nav-item.nav-profile {\n  max-width: 270px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.sidebar > .nav .nav-item.nav-profile .nav-link {\n  display: flex;\n  border-radius: 3px;\n  border: 1px solid rgba(255, 255, 255, 0.11);\n  background-color: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  padding: 15px 25px;\n}\n.sidebar > .nav .nav-item.nav-profile .nav-link .profile-image {\n  margin-right: 15px;\n  position: relative;\n}\n.rtl .sidebar > .nav .nav-item.nav-profile .nav-link .profile-image {\n  margin-right: 0;\n  margin-left: 15px;\n}\n.sidebar > .nav .nav-item.nav-profile .nav-link .dot-indicator {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n}\n.sidebar > .nav .nav-item.nav-profile .nav-link .profile-name {\n  margin-bottom: 5px;\n  font-weight: 500;\n  font-size: 15px;\n  color: #fff;\n}\n.sidebar > .nav .nav-item.nav-profile .nav-link .designation {\n  margin-bottom: 0;\n  font-weight: 400;\n  color: #fff;\n}\n.sidebar > .nav .nav-item.nav-category {\n  color: rgba(255, 255, 255, 0.7);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.13);\n  margin: 0 30px;\n  font-size: 15px;\n  font-weight: 500;\n  padding: 10px 0px 15px 0px;\n}\n.sidebar > .nav > .nav-item > .nav-link {\n  height: 52px;\n}\n.sidebar > .nav > .nav-item:not(.nav-profile) > .nav-link {\n  position: relative;\n}\n.sidebar > .nav > .nav-item:not(.nav-profile) > .nav-link:before {\n  content: \"\";\n  position: absolute;\n  left: 30px;\n  right: 50%;\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n  border: 2px solid #fff;\n  display: block;\n}\n.rtl .sidebar > .nav > .nav-item:not(.nav-profile) > .nav-link:before {\n  left: auto;\n  right: 45px;\n}\n.sidebar > .nav:not(.sub-menu) > .nav-item > .nav-link {\n  background: transparent;\n  transition-duration: 0.3s;\n  transition-timing-function: \"ease-in-out\";\n  transition-property: \"background\", \"color\", \"box-shadow\", \"padding\";\n}\n.sidebar > .nav:not(.sub-menu) > .nav-item:hover:not(.nav-profile):not(.hover-open) > .nav-link:not([aria-expanded=true]) {\n  background: rgb(0, 32.1894736842, 69.5);\n  padding-left: 65px;\n}\n.rtl .sidebar > .nav:not(.sub-menu) > .nav-item:hover:not(.nav-profile):not(.hover-open) > .nav-link:not([aria-expanded=true]) {\n  padding-left: 30px;\n  padding-right: 80px;\n}\n.sidebar > .nav:not(.sub-menu) > .nav-item:hover:not(.nav-profile):not(.hover-open) > .nav-link:not([aria-expanded=true]):before {\n  border-color: #fff;\n}\n.sidebar > .nav:not(.sub-menu) > .nav-item:hover:not(.nav-profile):not(.hover-open) > .nav-link:not([aria-expanded=true]) .menu-title {\n  color: #fff;\n}\n.sidebar > .nav:not(.sub-menu) > .nav-item:hover:not(.nav-profile):not(.hover-open) > .nav-link:not([aria-expanded=true]) .menu-arrow:before {\n  color: #bfccda;\n}\n\n/* style for off-canvas menu*/\n@media screen and (max-width: 991px) {\n.sidebar-offcanvas {\n    position: fixed;\n    max-height: calc(100vh - 63px);\n    top: 63px;\n    bottom: 0;\n    overflow: auto;\n    right: -270px;\n    transition: all 0.25s ease-out;\n}\n.sidebar-offcanvas.active {\n    right: 0;\n}\n}\n.page-body-wrapper {\n  min-height: calc(100vh - 63px);\n  display: flex;\n  flex-direction: row;\n  padding-left: 0;\n  padding-right: 0;\n}\n.page-body-wrapper.full-page-wrapper {\n  width: 100%;\n  min-height: 100vh;\n}\n.main-panel {\n  transition: width 0.25s ease, margin 0.25s ease;\n  width: calc(100% - 270px);\n  min-height: calc(100vh - 63px);\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 991px) {\n.main-panel {\n    margin-left: 0;\n    width: 100%;\n}\n}\n.content-wrapper {\n  background: #F3F3F3;\n  padding: 1.5rem 1.7rem;\n  width: 100%;\n  flex-grow: 1;\n}\n.container-scroller {\n  overflow: hidden;\n}\n.page-header {\n  display: flex;\n  width: 100%;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #cdd6dc;\n  margin-bottom: 15px;\n}\n@media (max-width: 992px) {\n.page-header {\n    display: inline-block;\n}\n}\n.page-title {\n  margin-top: 0;\n  margin-bottom: 2px;\n}\n@media (max-width: 992px) {\n.page-title {\n    margin-botttom: 15px;\n}\n}\n.quick-links {\n  list-style: none;\n  margin-bottom: 0;\n  display: inline-flex;\n  align-items: center;\n  margin-top: 4px;\n  padding-left: 0;\n}\n@media (min-width: 992px) {\n.quick-links {\n    padding-left: 10px;\n}\n}\n.quick-links li {\n  margin-right: 10px;\n  border-right: 1px solid #212529;\n  line-height: 1;\n}\n.quick-links li a {\n  display: inline-block;\n  color: #212529;\n  text-decoration: none;\n  padding-right: 10px;\n}\n.quick-links li:last-child {\n  margin-right: 0;\n  border-right: none;\n}\n.quick-links li:last-child a {\n  padding-right: 0;\n}\n.page-title-header {\n  margin-bottom: 20px;\n}\n.page-header-toolbar {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n@media (max-width: 992px) {\n.page-header-toolbar {\n    display: inline-block;\n}\n.page-header-toolbar .toolbar-item {\n    margin-top: 20px;\n}\n}\n.page-header-toolbar .btn-group,\n.page-header-toolbar .btn {\n  border: none;\n}\n.page-header-toolbar .btn-group i,\n.page-header-toolbar .btn i {\n  font-size: 1.24rem;\n  color: #3a8696;\n}\n.page-header-toolbar .btn-group.dropdown-toggle:after,\n.page-header-toolbar .btn.dropdown-toggle:after {\n  color: #3a8696;\n}\n.filter-wrapper {\n  display: flex;\n  margin-left: 15px;\n}\n@media (max-width: 992px) {\n.filter-wrapper {\n    margin-left: 0;\n}\n}\n.sort-wrapper {\n  display: flex;\n  width: 46%;\n}\n@media (max-width: 992px) {\n.sort-wrapper {\n    width: 100%;\n}\n}\n.advanced-link {\n  display: flex;\n  align-items: center;\n  margin-left: 30px;\n  margin-right: 20px;\n  white-space: nowrap;\n}\n.navbar.fixed-top + .page-body-wrapper {\n  padding-top: 63px;\n}\n.auth form .submit-btn, .auth .login-half-bg {\n  background-image: linear-gradient(120deg, #002c5f, rgba(0, 0, 0, 0.8)) !important;\n}\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #002c5f !important;\n}\n.was-validated .custom-select:valid, .custom-select.is-valid {\n  border-color: #002c5f !important;\n}\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  border-color: #002c5f !important;\n  background-color: #002c5f !important;\n}\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #002c5f !important;\n}\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n  border-color: #002c5f;\n}\n@media (min-width: 992px) {\n.sidebar-icon-only .navbar .navbar-brand-wrapper {\n    width: 70px;\n}\n.sidebar-icon-only .navbar .navbar-brand-wrapper .brand-logo {\n    display: none;\n}\n.sidebar-icon-only .navbar .navbar-brand-wrapper .brand-logo-mini {\n    display: flex;\n}\n.sidebar-icon-only .navbar .navbar-menu-wrapper {\n    width: calc(100% - 70px);\n}\n.sidebar-icon-only .sidebar {\n    width: 70px;\n}\n.sidebar-icon-only .sidebar .nav {\n    overflow: visible;\n}\n.sidebar-icon-only .sidebar .nav .nav-item {\n    position: relative;\n}\n.sidebar-icon-only .sidebar .nav .nav-item .nav-link {\n    display: block;\n    text-align: center;\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.sidebar-icon-only .sidebar .nav .nav-item .nav-link .badge,\n  .sidebar-icon-only .sidebar .nav .nav-item .nav-link .menu-title, .sidebar-icon-only .sidebar .nav .nav-item .nav-link:before {\n    display: none;\n}\n.sidebar-icon-only .sidebar .nav .nav-item .nav-link i.menu-icon {\n    display: inline-block;\n    margin-right: 0;\n    font-size: 22px;\n}\n.sidebar-icon-only .sidebar .nav .nav-item .nav-link i.menu-arrow {\n    display: none;\n}\n.sidebar-icon-only .sidebar .nav .nav-item.nav-profile, .sidebar-icon-only .sidebar .nav .nav-item.nav-category {\n    display: none;\n}\n.sidebar-icon-only .sidebar .nav .nav-item .collapse {\n    display: none;\n}\n.sidebar-icon-only .sidebar .nav .nav-item.hover-open .nav-link {\n    background: rgb(0, 55.8105263158, 120.5);\n}\n.sidebar-icon-only .sidebar .nav .nav-item.hover-open .nav-link .menu-title {\n    display: flex;\n    align-items: center;\n    background: rgb(0, 55.8105263158, 120.5);\n    color: #9F9EA3;\n    padding: 12px 0 10px 25px;\n    left: 70px;\n    position: absolute;\n    text-align: left;\n    top: 0;\n    width: 200px;\n    z-index: 1;\n    height: 52px;\n    line-height: 1.8;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n.rtl.sidebar-icon-only .sidebar .nav .nav-item.hover-open .nav-link .menu-title {\n    padding: 12px 25px 10px 0px;\n    left: auto;\n    right: 70px;\n    text-align: right;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n}\n.sidebar-icon-only .sidebar .nav .nav-item.hover-open .nav-link .menu-title:after {\n    display: none;\n}\n.sidebar-icon-only .sidebar .nav .nav-item.hover-open .nav-link[data-toggle=collapse] .menu-title {\n    border-bottom-right-radius: 0;\n}\n.rtl.sidebar-icon-only .sidebar .nav .nav-item.hover-open .nav-link[data-toggle=collapse] .menu-title {\n    border-bottom-left-radius: 0;\n}\n.sidebar-icon-only .sidebar .nav .nav-item.hover-open .collapse,\n  .sidebar-icon-only .sidebar .nav .nav-item.hover-open .collapse,\n  .sidebar-icon-only .sidebar .nav .nav-item.hover-open .collapsing {\n    display: block;\n    padding: 0;\n    background: rgb(0, 32.1894736842, 69.5);\n    color: #fff;\n    position: absolute;\n    top: 52px;\n    left: 70px;\n    width: 200px;\n    border-bottom-right-radius: 5px;\n    box-shadow: 0 1px 15px 1px rgba(113, 106, 202, 0.08);\n}\n.rtl.sidebar-icon-only .sidebar .nav .nav-item.hover-open .collapse, .rtl.sidebar-icon-only .sidebar .nav .nav-item.hover-open .collapse, .rtl.sidebar-icon-only .sidebar .nav .nav-item.hover-open .collapsing {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 5px;\n}\n.rtl.sidebar-icon-only .sidebar .nav .nav-item.hover-open .collapse, .rtl.sidebar-icon-only .sidebar .nav .nav-item.hover-open .collapse, .rtl.sidebar-icon-only .sidebar .nav .nav-item.hover-open .collapsing {\n    left: auto;\n    right: 70px;\n}\n.sidebar-icon-only .sidebar .nav.sub-menu .nav-item .nav-link {\n    text-align: left;\n    color: #fff;\n}\n.sidebar-icon-only .sidebar .nav.sub-menu .nav-item .nav-link:before {\n    display: none;\n}\n.sidebar-icon-only .sidebar .nav.sub-menu .nav-item .nav-link:hover {\n    color: #cccccc;\n}\n.rtl.sidebar-icon-only .sidebar .nav.sub-menu .nav-item .nav-link {\n    text-align: right;\n}\n.sidebar-icon-only .sidebar .nav:not(.sub-menu) > .nav-item:hover:not(.nav-profile):not(.hover-open) > .nav-link:not([aria-expanded=true]) {\n    padding-left: 25px;\n}\n.rtl .sidebar-icon-only .sidebar .nav:not(.sub-menu) > .nav-item:hover:not(.nav-profile):not(.hover-open) > .nav-link:not([aria-expanded=true]) {\n    padding-right: 25px;\n}\n.sidebar-icon-only .main-panel {\n    width: calc(100% - 70px);\n}\n}\n/* Full Calendar */\n.fc.fc-unthemed {\n  background: #000;\n}\n.fc.fc-unthemed .fc-header-toolbar {\n  background: #ffffff;\n  padding: 28px 0 80px;\n  margin-bottom: 0;\n}\n.fc.fc-unthemed .fc-header-toolbar .fc-button-group {\n  border-radius: 5px;\n}\n.fc.fc-unthemed .fc-header-toolbar .fc-button-group .fc-button {\n  box-shadow: none;\n  padding: 1px 12px;\n  margin-right: 0;\n  font-size: 0.9375rem;\n  font-weight: 400;\n  line-height: 1.33;\n  border: none;\n  background: #3a8696;\n  color: #ffffff;\n  text-shadow: none;\n  transition-duration: 0.3s;\n}\n.fc.fc-unthemed .fc-header-toolbar .fc-button-group .fc-button:first-letter {\n  text-transform: uppercase;\n}\n.fc.fc-unthemed .fc-header-toolbar .fc-button-group .fc-button.fc-state-active {\n  background: rgb(50.8894230769, 117.5721153846, 131.6105769231);\n  color: #ffffff;\n}\n.fc.fc-unthemed .fc-header-toolbar .fc-button-group .fc-button.fc-next-button, .fc.fc-unthemed .fc-header-toolbar .fc-button-group .fc-button.fc-prev-button {\n  background: #ffffff;\n  color: #3a8696;\n  margin-right: 7px;\n  height: 2.0625rem;\n  width: 2.25rem;\n  border: none;\n}\n.fc.fc-unthemed .fc-header-toolbar .fc-button-group .fc-button.fc-next-button span, .fc.fc-unthemed .fc-header-toolbar .fc-button-group .fc-button.fc-prev-button span {\n  top: -3px;\n  right: 9px;\n}\n.fc.fc-unthemed .fc-header-toolbar .fc-button-group .fc-button.fc-next-button span:after, .fc.fc-unthemed .fc-header-toolbar .fc-button-group .fc-button.fc-prev-button span:after {\n  font: normal normal normal 24px/1 \"Material Design Icons\";\n  display: block;\n  line-height: 21px;\n}\n.fc.fc-unthemed .fc-header-toolbar .fc-button-group .fc-button.fc-prev-button span:after {\n  content: \"\\f141\";\n}\n.fc.fc-unthemed .fc-header-toolbar .fc-button-group .fc-button.fc-next-button span:after {\n  content: \"\\f142\";\n}\n.fc.fc-unthemed .fc-header-toolbar .fc-today-button {\n  box-shadow: none;\n  padding: 1px 12px;\n  border-radius: 2px;\n  margin-right: 4px;\n  font-size: 0.9375rem;\n  font-weight: 400;\n  line-height: 1.33;\n  border: none;\n  background: #3a8696;\n  color: #ffffff;\n  text-shadow: none;\n  transition-duration: 0.3s;\n}\n.fc.fc-unthemed .fc-header-toolbar .fc-today-button:first-letter {\n  text-transform: uppercase;\n}\n.fc.fc-unthemed .fc-header-toolbar .fc-center h2 {\n  font-size: 1.125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.fc.fc-unthemed .fc-view-container .fc-view {\n  background: #F3F3F3;\n}\n.fc.fc-unthemed .fc-view-container .fc-view table thead.fc-head {\n  border: none;\n}\n.fc.fc-unthemed .fc-view-container .fc-view table thead.fc-head tr td .fc-widget-header {\n  border: none;\n}\n.fc.fc-unthemed .fc-view-container .fc-view table thead.fc-head tr td .fc-widget-header table thead {\n  border: none;\n}\n.fc.fc-unthemed .fc-view-container .fc-view table thead.fc-head tr td .fc-widget-header table thead tr th.fc-day-header {\n  text-transform: uppercase;\n  padding: 0.4375rem 0;\n  border-color: #cdd6dc;\n  font-size: 0.875rem;\n}\n.fc.fc-unthemed .fc-view-container .fc-view table thead.fc-head tr td.fc-head-container {\n  border-color: #f7f7f7;\n  border-bottom: none;\n}\n.fc.fc-unthemed .fc-view-container .fc-view table tbody.fc-body {\n  background: #ffffff;\n}\n.fc.fc-unthemed .fc-view-container .fc-view table tbody.fc-body tr td.fc-widget-content {\n  border-color: #cdd6dc;\n}\n.fc.fc-unthemed .fc-view-container .fc-view table tbody.fc-body tr td.fc-widget-content .fc-day-grid-container .fc-day-grid .fc-row {\n  border-color: #cdd6dc;\n}\n.fc.fc-unthemed .fc-view-container .fc-view table tbody.fc-body tr td.fc-widget-content .fc-day-grid-container .fc-day-grid .fc-row .fc-bg table tr td {\n  border-color: #cdd6dc;\n}\n.fc.fc-unthemed .fc-view-container .fc-view table tbody.fc-body tr td.fc-widget-content .fc-day-grid-container .fc-day-grid .fc-row .fc-content-skeleton table thead tr td.fc-day-top {\n  padding: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.fc.fc-unthemed .fc-view-container .fc-view table tbody.fc-body tr td.fc-widget-content .fc-day-grid-container .fc-day-grid .fc-row .fc-content-skeleton table tbody tr td.fc-event-container .fc-h-event {\n  background: #19d895;\n  border: none;\n  padding: 6px 12px 6px 22px;\n  font-weight: 500;\n  color: #ffffff;\n  border-radius: 4px;\n}\n.fc.fc-unthemed .fc-view-container .fc-view table tbody.fc-body tr td.fc-widget-content .fc-day-grid-container .fc-day-grid .fc-row .fc-content-skeleton table tbody tr td.fc-more-cell {\n  font-weight: 600;\n  color: #252C46;\n  padding: 0 7px;\n}\n.vdp-datepicker .vdp-datepicker__calendar {\n  width: 100%;\n}\n.snotifyToast {\n  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.13);\n}\n.snotifyToast__progressBar {\n  height: 5px;\n  background-color: #c7c7c7;\n}\n.snotifyToast__progressBar__percentage {\n  height: 5px;\n}\n#chartjs-tooltip {\n  background: rgb(233.8444444444, 238.2, 242.5555555556);\n  border-radius: 4px;\n  padding: 10px;\n  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);\n  transition: 0.3s ease;\n}\n#chartjs-tooltip table tr th {\n  color: #6c757d;\n}\n#chartjs-tooltip table tr td {\n  display: flex;\n  align-items: center;\n  line-height: 1px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n#chartjs-tooltip table tr td:first-letter {\n  text-transform: uppercase;\n}\n#chartjs-tooltip table tr td span {\n  width: 7px;\n  height: 7px;\n  display: inline-block;\n  border-radius: 100px;\n  margin-right: 7px;\n  color: #212529;\n}\n.chartjs-legend ul {\n  list-style: none;\n  padding-left: 0;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0;\n}\n.chartjs-legend ul li {\n  margin-right: 8%;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  color: #6c757d;\n}\n.chartjs-legend ul li span {\n  height: 10px;\n  width: 10px;\n  border-radius: 100%;\n  margin-right: 10px;\n  display: inline-block;\n  font-size: 0.875rem;\n}\n.rtl .chartjs-legend ul {\n  padding-right: 0;\n}\n.rtl .chartjs-legend ul li {\n  margin-right: 0;\n  margin-left: 8%;\n}\n.rtl .chartjs-legend ul li span {\n  margin-right: 0;\n  margin-left: 1rem;\n}\n\n/*-------------------------------------------------------------------*/\n/* === Landing screens === */\n.auth .login-half-bg {\n  background-image: linear-gradient(120deg, rgba(58, 134, 150, 0.8), rgba(0, 0, 0, 0.8));\n  background-size: cover;\n}\n.auth .lock-profile-img {\n  width: 90px;\n  height: 90px;\n  border-radius: 100%;\n}\n.auth .auth-form-dark {\n  background: rgba(0, 0, 0, 0.6);\n  color: #ffffff;\n}\n.auth .auth-form-dark .form-control {\n  border-color: rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n}\n.auth .auth-form-dark .form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.auth .auth-form-dark .form-control:-moz-placeholder {\n  color: #ffffff;\n}\n.auth .auth-form-dark .form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.auth .auth-form-dark .form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.auth .auth-form-light {\n  background: #ffffff;\n}\n.auth .auth-form-light select {\n  color: #6c757d;\n}\n.auth .auth-form-light .input-group .form-control:focus, .auth .auth-form-light .input-group .form-control:active {\n  border-color: #cdd6dc;\n}\n.auth .auth-form-transparent {\n  background: transparent;\n}\n.auth .auth-form-transparent .form-control,\n.auth .auth-form-transparent .input-group-text {\n  border-color: #dde4eb;\n}\n.auth .auth-form-transparent .form-control:focus, .auth .auth-form-transparent .form-control:active,\n.auth .auth-form-transparent .input-group-text:focus,\n.auth .auth-form-transparent .input-group-text:active {\n  border-color: #dde4eb;\n}\n.auth .auth-form-transparent select {\n  outline-color: #dde4eb;\n}\n.auth.auth-img-bg {\n  padding: 0;\n}\n@media (min-width: 768px) {\n.auth.auth-img-bg .auth-form-transparent {\n    width: 78%;\n    margin: auto;\n}\n}\n.auth .brand-logo {\n  margin-bottom: 1rem;\n}\n.auth .brand-logo img {\n  width: 80px;\n}\n.auth form .form-group {\n  margin-bottom: 0.18rem;\n}\n.auth form .form-group label {\n  font-size: 0.8125rem;\n}\n.auth form .form-group .form-control {\n  background: transparent;\n  border-radius: 4px 4px;\n  font-size: 0.9375rem;\n  line-height: 44px;\n  height: auto;\n}\n.auth form .auth-form-btn {\n  height: 50px;\n  line-height: 1.5;\n}\n.auth form .auth-link {\n  font-size: 0.875rem;\n}\n.auth form .auth-link:hover {\n  color: initial;\n}\n.auth form .submit-btn {\n  font-family: \"roboto\", sans-serif;\n  font-size: 14px;\n  padding: 16px 34px;\n  font-weight: 600;\n  background-image: linear-gradient(120deg, rgba(58, 134, 150, 0.8), rgba(0, 0, 0, 0.8));\n}\n\n/* Error */\n.error-page h1 {\n  font-size: 9.375rem;\n  line-height: 1;\n}\n@media (max-width: 991px) {\n.error-page h1 {\n    font-size: 8rem;\n}\n}\n.error-page h2 {\n  font-size: 4.375rem;\n  line-height: 1;\n}\n@media (min-width: 992px) {\n.error-page .error-page-divider {\n    border-left: 3px solid rgba(255, 255, 255, 0.2);\n}\n}\n.profile-page .profile-header {\n  width: 100%;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center;\n  background-size: cover;\n  padding: 60px 0;\n  border-radius: 5px;\n}\n.profile-page .profile-header .profile-info .profile-user-name {\n  margin-bottom: 0;\n  font-family: \"roboto\", sans-serif;\n  font-weight: 600;\n}\n.profile-page .profile-header .profile-info .profile-user-designation {\n  margin-bottom: 0;\n  font-family: \"roboto\", sans-serif;\n}\n.profile-page .profile-header .profile-info .br-wrapper {\n  padding-left: 15px;\n}\n.profile-page .profile-header .profile-info .br-wrapper .br-widget {\n  height: auto;\n  transform: translateY(-5px);\n}\n.profile-page .profile-header .profile-info .br-wrapper .br-widget a {\n  font-size: 18px;\n  margin-right: 0;\n}\n.profile-page .profile-header .details {\n  display: flex;\n  align-items: center;\n}\n.profile-page .profile-header .details .detail-col {\n  padding-right: 20%;\n  border-right: 1px solid rgba(205, 214, 220, 0.3);\n  margin-right: 20%;\n}\n.profile-page .profile-header .details .detail-col:last-child {\n  border-right: none;\n  margin-right: 0;\n}\n.profile-page .profile-header .details .detail-col p {\n  margin-bottom: 0;\n  font-weight: 400;\n}\n.profile-page .profile-header .details .detail-col p:first-child {\n  font-weight: 700;\n}\n.profile-page .profile-body {\n  padding-top: 50px;\n}\n.profile-page .profile-body .tab-switch {\n  border-bottom: 1px solid #cdd6dc;\n}\n.profile-page .profile-body .tab-switch .nav-item .nav-link {\n  color: #6c757d;\n  font-size: 1rem;\n  padding-bottom: 1.2rem;\n  font-weight: 600;\n  border-bottom: 3px solid #ffffff;\n  transition-duration: 0.4s;\n  transition-timing-function: ease-in;\n  transition-property: color, border-color;\n}\n.profile-page .profile-body .tab-switch .nav-item .nav-link.active {\n  color: #000;\n  border-bottom: 3px solid #3a8696;\n}\n.profile-page .profile-body .tab-body {\n  border: none;\n  padding: 10px 0;\n}\n.profile-page .profile-body .tab-body .stages {\n  position: relative;\n}\n.profile-page .profile-body .tab-body .stages .stage-badge {\n  position: absolute;\n  top: 0;\n  left: -20px;\n}\n.profile-page .profile-body .tab-body .stages .file-icon-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.profile-page .profile-body .tab-body .stages .file-icon-wrapper .file-icon {\n  height: 77px;\n  width: 69px;\n  padding: 5px;\n  margin-right: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.profile-page .profile-body .tab-body .stages .file-icon-wrapper .file-icon i {\n  font-size: 43px;\n  margin-right: 0;\n}\n.invoice-page .invoice-banner {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center center;\n  background-size: cover;\n  width: 100%;\n  margin-top: 20px;\n  border-radius: 4px;\n  padding: 50px;\n  color: #fff;\n}\n.invoice-page .invoice-banner hr {\n  border-top: solid 1px rgba(255, 255, 255, 0.2);\n}\n.invoice-page.invoice-2 table {\n  width: 950px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.invoice-page.invoice-2 table tr th,\n.invoice-page.invoice-2 table tr td {\n  text-align: right;\n  padding: 25px 10px;\n}\n.invoice-page.invoice-2 table tr th:first-child,\n.invoice-page.invoice-2 table tr td:first-child {\n  text-align: left;\n}\n.invoice-page.invoice-2 table tr th:last-child,\n.invoice-page.invoice-2 table tr td:last-child {\n  padding-right: 50px;\n}\n.invoice-page.invoice-2 table tr th {\n  font-weight: 400;\n  color: #6c757d;\n}\n.invoice-page.invoice-2 table tr td {\n  font-weight: 600;\n}\n@media print {\n.invoice-page .navbar,\n  .invoice-page .sidebar,\n  .invoice-page .footer,\n  .invoice-page .right-sidebar-toggler-wrapper,\n  .invoice-page .btn,\n  .invoice-page .card-title {\n    display: none !important;\n}\n}\n\n/* Mail List Container */\n.email-wrapper .mail-list-container {\n  border-left: 1px solid #cdd6dc;\n  height: 100%;\n  padding-left: 0;\n  padding-right: 0;\n}\n.email-wrapper .mail-list-container a {\n  text-decoration: none;\n}\n.email-wrapper .mail-list-container .mail-list {\n  border-bottom: 1px solid #cdd6dc;\n  display: flex;\n  flex-direction: row;\n  padding: 10px 15px;\n  width: 100%;\n}\n.email-wrapper .mail-list-container .mail-list:last-child {\n  border-bottom: none;\n}\n.email-wrapper .mail-list-container .mail-list .form-check {\n  margin-top: 12px;\n  width: 11%;\n  min-width: 20px;\n}\n.email-wrapper .mail-list-container .mail-list .content {\n  width: 83%;\n  padding-left: 0;\n  padding-right: 0;\n}\n.email-wrapper .mail-list-container .mail-list .content .sender-name {\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  font-family: \"roboto\", sans-serif;\n  max-width: 95%;\n}\n.email-wrapper .mail-list-container .mail-list .content .message_text {\n  margin: 0;\n  max-width: 93%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.email-wrapper .mail-list-container .mail-list .details {\n  width: 5.5%;\n}\n.email-wrapper .mail-list-container .mail-list .details .date {\n  text-align: right;\n  margin: auto 15px auto 0;\n  white-space: nowrap;\n}\n.email-wrapper .mail-list-container .mail-list .details i {\n  margin: auto 0;\n  color: #ddd;\n}\n.email-wrapper .mail-list-container .mail-list .details i.favorite {\n  color: #ffaf00;\n}\n.email-wrapper .mail-list-container .mail-list.new_mail {\n  background: rgba(58, 134, 150, 0.3);\n}\n/* Mail Sidebar */\n@media (max-width: 769px) {\n.email-wrapper .mail-sidebar {\n    position: relative;\n}\n}\n@media (max-width: 576px) {\n.email-wrapper .mail-sidebar {\n    position: fixed;\n    z-index: 99;\n    background: #ffffff;\n    width: 45%;\n    min-width: 300px;\n    left: -100%;\n    display: block;\n    transition: 0.4s ease;\n    -webkit-transition: 0.4s ease;\n    -moz-transition: 0.4s ease;\n}\n}\n.email-wrapper .mail-sidebar .menu-bar {\n  width: 100%;\n  float: right;\n  height: 100%;\n  min-height: 100%;\n}\n@media (max-width: 576px) {\n.email-wrapper .mail-sidebar .menu-bar {\n    min-height: 100vh;\n    max-height: 100%;\n    height: auto;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n}\n.email-wrapper .mail-sidebar .menu-bar .menu-items {\n  padding: 0;\n  margin-bottom: 0;\n  height: auto;\n  list-style-type: none;\n}\n.email-wrapper .mail-sidebar .menu-bar .menu-items li {\n  padding: 10px 15px;\n  transition: 0.4s;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.email-wrapper .mail-sidebar .menu-bar .menu-items li:hover {\n  background: rgba(240, 244, 249, 0.8);\n}\n.email-wrapper .mail-sidebar .menu-bar .menu-items li a {\n  color: #252C46;\n  font-size: 0.875rem;\n  text-decoration: none;\n}\n.email-wrapper .mail-sidebar .menu-bar .menu-items li a i {\n  margin-right: 8px;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.email-wrapper .mail-sidebar .menu-bar .menu-items li.active {\n  background: rgba(58, 134, 150, 0.3);\n  border-radius: 4px;\n}\n.email-wrapper .mail-sidebar .menu-bar .menu-items li.active a {\n  color: #3a8696;\n}\n.email-wrapper .mail-sidebar .menu-bar .menu-items li.compose:hover {\n  background: transparent;\n}\n.email-wrapper .mail-sidebar .menu-bar .online-status {\n  margin-top: 1rem;\n}\n.email-wrapper .mail-sidebar .menu-bar .online-status .chat {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-bottom: 0;\n  font-family: \"roboto\", sans-serif;\n}\n.email-wrapper .mail-sidebar .menu-bar .online-status .status {\n  height: 10px;\n  width: 10px;\n  border-radius: 100%;\n  display: inline-flex;\n  justify-content: flex-start;\n  transform: translateX(-43px) translateY(2px);\n}\n.email-wrapper .mail-sidebar .menu-bar .online-status .status:after {\n  font-size: 12px;\n  color: #6c757d;\n  margin: -5px 0 0 18px;\n}\n.email-wrapper .mail-sidebar .menu-bar .online-status .status.offline {\n  background: #ff6258;\n}\n.email-wrapper .mail-sidebar .menu-bar .online-status .status.offline:after {\n  content: \"Offline\";\n}\n.email-wrapper .mail-sidebar .menu-bar .online-status .status.online {\n  background: #19d895;\n}\n.email-wrapper .mail-sidebar .menu-bar .online-status .status.online:after {\n  content: \"Online\";\n}\n.email-wrapper .mail-sidebar .menu-bar .profile-list {\n  padding: 10px 0;\n}\n.email-wrapper .mail-sidebar .menu-bar .profile-list-item {\n  border-bottom: 1px solid #cdd6dc;\n  padding: 6px 0;\n  display: block;\n}\n.email-wrapper .mail-sidebar .menu-bar .profile-list-item:last-child {\n  border-bottom: 0;\n}\n.email-wrapper .mail-sidebar .menu-bar .profile-list-item a {\n  text-decoration: none;\n}\n.email-wrapper .mail-sidebar .menu-bar .profile-list-item a .pro-pic {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  width: 20%;\n  max-width: 40px;\n}\n.email-wrapper .mail-sidebar .menu-bar .profile-list-item a .pro-pic img {\n  max-width: 100%;\n  width: 100%;\n  border-radius: 100%;\n}\n.email-wrapper .mail-sidebar .menu-bar .profile-list-item a .user {\n  width: 100%;\n  padding: 5px 10px 0 15px;\n}\n.email-wrapper .mail-sidebar .menu-bar .profile-list-item a .user .u-name {\n  margin: 0;\n  font-family: \"roboto\", sans-serif;\n  font-size: 0.875rem;\n  line-height: 1;\n  color: #252C46;\n  font-weight: 500;\n}\n.email-wrapper .mail-sidebar .menu-bar .profile-list-item a .user .u-designation {\n  font-size: calc(0.875rem - 0.1rem);\n  color: #252C46;\n  margin-bottom: 0;\n}\n.email-wrapper .sidebar.open {\n  left: 0;\n}\n\n/* Message Content */\n.email-wrapper .message-body .sender-details {\n  padding: 20px 15px 0;\n  border-bottom: 1px solid #dee2e6;\n  display: flex;\n}\n.email-wrapper .message-body .sender-details .details {\n  padding-bottom: 0;\n}\n.email-wrapper .message-body .sender-details .details .msg-subject {\n  margin-bottom: 0;\n  font-family: \"roboto\", sans-serif;\n}\n.email-wrapper .message-body .sender-details .details .sender-email {\n  margin-bottom: 20px;\n  font-family: \"roboto\", sans-serif;\n}\n.email-wrapper .message-body .sender-details .details .sender-email i {\n  font-size: 1rem;\n  font-family: \"roboto\", sans-serif;\n  margin: 0 1px 0 7px;\n}\n.email-wrapper .message-body .message-content {\n  padding: 50px 15px;\n}\n.email-wrapper .message-body .attachments-sections ul {\n  list-style: none;\n  border-top: 1px solid #dee2e6;\n  padding: 30px 15px 20px;\n}\n.email-wrapper .message-body .attachments-sections ul li {\n  padding: 10px;\n  margin-right: 20px;\n  border: 1px solid #dee2e6;\n  border-radius: 5px;\n}\n.email-wrapper .message-body .attachments-sections ul li .thumb {\n  display: inline-block;\n  margin-right: 10px;\n}\n.email-wrapper .message-body .attachments-sections ul li .thumb i {\n  font-size: 30px;\n  margin: 0;\n  color: #252C46;\n}\n.email-wrapper .message-body .attachments-sections ul li .details p.file-name {\n  display: block;\n  margin-bottom: 0;\n  color: #252C46;\n}\n.email-wrapper .message-body .attachments-sections ul li .details .buttons .file-size {\n  margin-right: 10px;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n}\n.email-wrapper .message-body .attachments-sections ul li .details .buttons a {\n  font-size: 0.875rem;\n  margin-right: 10px;\n}\n.email-wrapper .message-body .attachments-sections ul li .details .buttons a:last-child {\n  margin-right: 0;\n}\n\n/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.7.0\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2018 Daniel Eden\n */\n@keyframes bounce {\nfrom, 20%, 53%, 80%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0);\n}\n40%, 43% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -30px, 0);\n}\n70% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -15px, 0);\n}\n90% {\n    transform: translate3d(0, -4px, 0);\n}\n}\n.bounce {\n  animation-name: bounce;\n  transform-origin: center bottom;\n}\n@keyframes flash {\nfrom, 50%, to {\n    opacity: 1;\n}\n25%, 75% {\n    opacity: 0;\n}\n}\n.flash {\n  animation-name: flash;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes pulse {\nfrom {\n    transform: scale3d(1, 1, 1);\n}\n50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n}\nto {\n    transform: scale3d(1, 1, 1);\n}\n}\n.pulse {\n  animation-name: pulse;\n}\n@keyframes rubberBand {\nfrom {\n    transform: scale3d(1, 1, 1);\n}\n30% {\n    transform: scale3d(1.25, 0.75, 1);\n}\n40% {\n    transform: scale3d(0.75, 1.25, 1);\n}\n50% {\n    transform: scale3d(1.15, 0.85, 1);\n}\n65% {\n    transform: scale3d(0.95, 1.05, 1);\n}\n75% {\n    transform: scale3d(1.05, 0.95, 1);\n}\nto {\n    transform: scale3d(1, 1, 1);\n}\n}\n.rubberBand {\n  animation-name: rubberBand;\n}\n@keyframes shake {\nfrom, to {\n    transform: translate3d(0, 0, 0);\n}\n10%, 30%, 50%, 70%, 90% {\n    transform: translate3d(-10px, 0, 0);\n}\n20%, 40%, 60%, 80% {\n    transform: translate3d(10px, 0, 0);\n}\n}\n.shake {\n  animation-name: shake;\n}\n@keyframes headShake {\n0% {\n    transform: translateX(0);\n}\n6.5% {\n    transform: translateX(-6px) rotateY(-9deg);\n}\n18.5% {\n    transform: translateX(5px) rotateY(7deg);\n}\n31.5% {\n    transform: translateX(-3px) rotateY(-5deg);\n}\n43.5% {\n    transform: translateX(2px) rotateY(3deg);\n}\n50% {\n    transform: translateX(0);\n}\n}\n.headShake {\n  animation-timing-function: ease-in-out;\n  animation-name: headShake;\n}\n@keyframes swing {\n20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n}\n40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n}\n60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n}\n80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n}\nto {\n    transform: rotate3d(0, 0, 1, 0deg);\n}\n}\n.swing {\n  transform-origin: top center;\n  animation-name: swing;\n}\n@keyframes tada {\nfrom {\n    transform: scale3d(1, 1, 1);\n}\n10%, 20% {\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n}\n30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n}\n40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n}\nto {\n    transform: scale3d(1, 1, 1);\n}\n}\n.tada {\n  animation-name: tada;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes wobble {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\n15% {\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n}\n30% {\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n}\n45% {\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n}\n60% {\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n}\n75% {\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n.wobble {\n  animation-name: wobble;\n}\n@keyframes jello {\nfrom, 11.1%, to {\n    transform: translate3d(0, 0, 0);\n}\n22.2% {\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n}\n33.3% {\n    transform: skewX(6.25deg) skewY(6.25deg);\n}\n44.4% {\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n}\n55.5% {\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n}\n66.6% {\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n}\n77.7% {\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n}\n88.8% {\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n}\n}\n.jello {\n  animation-name: jello;\n  transform-origin: center;\n}\n@keyframes heartBeat {\n0% {\n    transform: scale(1);\n}\n14% {\n    transform: scale(1.3);\n}\n28% {\n    transform: scale(1);\n}\n42% {\n    transform: scale(1.3);\n}\n70% {\n    transform: scale(1);\n}\n}\n.heartBeat {\n  animation-name: heartBeat;\n  animation-duration: 1.3s;\n  animation-timing-function: ease-in-out;\n}\n@keyframes bounceIn {\nfrom, 20%, 40%, 60%, 80%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n0% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n}\n20% {\n    transform: scale3d(1.1, 1.1, 1.1);\n}\n40% {\n    transform: scale3d(0.9, 0.9, 0.9);\n}\n60% {\n    opacity: 1;\n    transform: scale3d(1.03, 1.03, 1.03);\n}\n80% {\n    transform: scale3d(0.97, 0.97, 0.97);\n}\nto {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n}\n}\n.bounceIn {\n  animation-duration: 0.75s;\n  animation-name: bounceIn;\n}\n@keyframes bounceInDown {\nfrom, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0);\n}\n60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0);\n}\n75% {\n    transform: translate3d(0, -10px, 0);\n}\n90% {\n    transform: translate3d(0, 5px, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n.bounceInDown {\n  animation-name: bounceInDown;\n}\n@keyframes bounceInLeft {\nfrom, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0);\n}\n60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0);\n}\n75% {\n    transform: translate3d(-10px, 0, 0);\n}\n90% {\n    transform: translate3d(5px, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n.bounceInLeft {\n  animation-name: bounceInLeft;\n}\n@keyframes bounceInRight {\nfrom, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\nfrom {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0);\n}\n60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n}\n75% {\n    transform: translate3d(10px, 0, 0);\n}\n90% {\n    transform: translate3d(-5px, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n.bounceInRight {\n  animation-name: bounceInRight;\n}\n@keyframes bounceInUp {\nfrom, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\nfrom {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0);\n}\n60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n}\n75% {\n    transform: translate3d(0, 10px, 0);\n}\n90% {\n    transform: translate3d(0, -5px, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n.bounceInUp {\n  animation-name: bounceInUp;\n}\n@keyframes bounceOut {\n20% {\n    transform: scale3d(0.9, 0.9, 0.9);\n}\n50%, 55% {\n    opacity: 1;\n    transform: scale3d(1.1, 1.1, 1.1);\n}\nto {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n}\n}\n.bounceOut {\n  animation-duration: 0.75s;\n  animation-name: bounceOut;\n}\n@keyframes bounceOutDown {\n20% {\n    transform: translate3d(0, 10px, 0);\n}\n40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n}\nto {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n}\n}\n.bounceOutDown {\n  animation-name: bounceOutDown;\n}\n@keyframes bounceOutLeft {\n20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0);\n}\nto {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n}\n}\n.bounceOutLeft {\n  animation-name: bounceOutLeft;\n}\n@keyframes bounceOutRight {\n20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0);\n}\nto {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n}\n}\n.bounceOutRight {\n  animation-name: bounceOutRight;\n}\n@keyframes bounceOutUp {\n20% {\n    transform: translate3d(0, -10px, 0);\n}\n40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0);\n}\nto {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n}\n}\n.bounceOutUp {\n  animation-name: bounceOutUp;\n}\n@keyframes fadeIn {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n@keyframes fadeInDown {\nfrom {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n}\nto {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n}\n}\n.fadeInDown {\n  animation-name: fadeInDown;\n}\n@keyframes fadeInDownBig {\nfrom {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n}\nto {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n}\n}\n.fadeInDownBig {\n  animation-name: fadeInDownBig;\n}\n@keyframes fadeInLeft {\nfrom {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n}\nto {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n}\n}\n.fadeInLeft {\n  animation-name: fadeInLeft;\n}\n@keyframes fadeInLeftBig {\nfrom {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n}\nto {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n}\n}\n.fadeInLeftBig {\n  animation-name: fadeInLeftBig;\n}\n@keyframes fadeInRight {\nfrom {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n}\nto {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n}\n}\n.fadeInRight {\n  animation-name: fadeInRight;\n}\n@keyframes fadeInRightBig {\nfrom {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n}\nto {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n}\n}\n.fadeInRightBig {\n  animation-name: fadeInRightBig;\n}\n@keyframes fadeInUp {\nfrom {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n}\nto {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n}\n}\n.fadeInUp {\n  animation-name: fadeInUp;\n}\n@keyframes fadeInUpBig {\nfrom {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n}\nto {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n}\n}\n.fadeInUpBig {\n  animation-name: fadeInUpBig;\n}\n@keyframes fadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n.fadeOut {\n  animation-name: fadeOut;\n}\n@keyframes fadeOutDown {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n}\n}\n.fadeOutDown {\n  animation-name: fadeOutDown;\n}\n@keyframes fadeOutDownBig {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n}\n}\n.fadeOutDownBig {\n  animation-name: fadeOutDownBig;\n}\n@keyframes fadeOutLeft {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n}\n}\n.fadeOutLeft {\n  animation-name: fadeOutLeft;\n}\n@keyframes fadeOutLeftBig {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n}\n}\n.fadeOutLeftBig {\n  animation-name: fadeOutLeftBig;\n}\n@keyframes fadeOutRight {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n}\n}\n.fadeOutRight {\n  animation-name: fadeOutRight;\n}\n@keyframes fadeOutRightBig {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n}\n}\n.fadeOutRightBig {\n  animation-name: fadeOutRightBig;\n}\n@keyframes fadeOutUp {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n}\n}\n.fadeOutUp {\n  animation-name: fadeOutUp;\n}\n@keyframes fadeOutUpBig {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n}\n}\n.fadeOutUpBig {\n  animation-name: fadeOutUpBig;\n}\n@keyframes flip {\nfrom {\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);\n    animation-timing-function: ease-out;\n}\n40% {\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    animation-timing-function: ease-out;\n}\n50% {\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    animation-timing-function: ease-in;\n}\n80% {\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);\n    animation-timing-function: ease-in;\n}\nto {\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);\n    animation-timing-function: ease-in;\n}\n}\n.animated.flip {\n  backface-visibility: visible;\n  animation-name: flip;\n}\n@keyframes flipInX {\nfrom {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n}\n40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in;\n}\n60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n}\n80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n}\nto {\n    transform: perspective(400px);\n}\n}\n.flipInX {\n  backface-visibility: visible !important;\n  animation-name: flipInX;\n}\n@keyframes flipInY {\nfrom {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n}\n40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    animation-timing-function: ease-in;\n}\n60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n}\n80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n}\nto {\n    transform: perspective(400px);\n}\n}\n.flipInY {\n  backface-visibility: visible !important;\n  animation-name: flipInY;\n}\n@keyframes flipOutX {\nfrom {\n    transform: perspective(400px);\n}\n30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n}\nto {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n}\n}\n.flipOutX {\n  animation-duration: 0.75s;\n  animation-name: flipOutX;\n  backface-visibility: visible !important;\n}\n@keyframes flipOutY {\nfrom {\n    transform: perspective(400px);\n}\n30% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n}\nto {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n}\n}\n.flipOutY {\n  animation-duration: 0.75s;\n  backface-visibility: visible !important;\n  animation-name: flipOutY;\n}\n@keyframes lightSpeedIn {\nfrom {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n}\n60% {\n    transform: skewX(20deg);\n    opacity: 1;\n}\n80% {\n    transform: skewX(-5deg);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n.lightSpeedIn {\n  animation-name: lightSpeedIn;\n  animation-timing-function: ease-out;\n}\n@keyframes lightSpeedOut {\nfrom {\n    opacity: 1;\n}\nto {\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n}\n}\n.lightSpeedOut {\n  animation-name: lightSpeedOut;\n  animation-timing-function: ease-in;\n}\n@keyframes rotateIn {\nfrom {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n}\nto {\n    transform-origin: center;\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n}\n}\n.rotateIn {\n  animation-name: rotateIn;\n}\n@keyframes rotateInDownLeft {\nfrom {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n}\nto {\n    transform-origin: left bottom;\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n}\n}\n.rotateInDownLeft {\n  animation-name: rotateInDownLeft;\n}\n@keyframes rotateInDownRight {\nfrom {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n}\nto {\n    transform-origin: right bottom;\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n}\n}\n.rotateInDownRight {\n  animation-name: rotateInDownRight;\n}\n@keyframes rotateInUpLeft {\nfrom {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n}\nto {\n    transform-origin: left bottom;\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n}\n}\n.rotateInUpLeft {\n  animation-name: rotateInUpLeft;\n}\n@keyframes rotateInUpRight {\nfrom {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n}\nto {\n    transform-origin: right bottom;\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n}\n}\n.rotateInUpRight {\n  animation-name: rotateInUpRight;\n}\n@keyframes rotateOut {\nfrom {\n    transform-origin: center;\n    opacity: 1;\n}\nto {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n}\n}\n.rotateOut {\n  animation-name: rotateOut;\n}\n@keyframes rotateOutDownLeft {\nfrom {\n    transform-origin: left bottom;\n    opacity: 1;\n}\nto {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n}\n}\n.rotateOutDownLeft {\n  animation-name: rotateOutDownLeft;\n}\n@keyframes rotateOutDownRight {\nfrom {\n    transform-origin: right bottom;\n    opacity: 1;\n}\nto {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n}\n}\n.rotateOutDownRight {\n  animation-name: rotateOutDownRight;\n}\n@keyframes rotateOutUpLeft {\nfrom {\n    transform-origin: left bottom;\n    opacity: 1;\n}\nto {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n}\n}\n.rotateOutUpLeft {\n  animation-name: rotateOutUpLeft;\n}\n@keyframes rotateOutUpRight {\nfrom {\n    transform-origin: right bottom;\n    opacity: 1;\n}\nto {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n}\n}\n.rotateOutUpRight {\n  animation-name: rotateOutUpRight;\n}\n@keyframes hinge {\n0% {\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n}\n20%, 60% {\n    transform: rotate3d(0, 0, 1, 80deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n}\n40%, 80% {\n    transform: rotate3d(0, 0, 1, 60deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n}\nto {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n}\n}\n.hinge {\n  animation-duration: 2s;\n  animation-name: hinge;\n}\n@keyframes jackInTheBox {\nfrom {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n}\n50% {\n    transform: rotate(-10deg);\n}\n70% {\n    transform: rotate(3deg);\n}\nto {\n    opacity: 1;\n    transform: scale(1);\n}\n}\n.jackInTheBox {\n  animation-name: jackInTheBox;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes rollIn {\nfrom {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n}\nto {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n}\n}\n.rollIn {\n  animation-name: rollIn;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes rollOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n}\n}\n.rollOut {\n  animation-name: rollOut;\n}\n@keyframes zoomIn {\nfrom {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n}\n50% {\n    opacity: 1;\n}\n}\n.zoomIn {\n  animation-name: zoomIn;\n}\n@keyframes zoomInDown {\nfrom {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n}\n}\n.zoomInDown {\n  animation-name: zoomInDown;\n}\n@keyframes zoomInLeft {\nfrom {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n}\n}\n.zoomInLeft {\n  animation-name: zoomInLeft;\n}\n@keyframes zoomInRight {\nfrom {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n}\n}\n.zoomInRight {\n  animation-name: zoomInRight;\n}\n@keyframes zoomInUp {\nfrom {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n}\n}\n.zoomInUp {\n  animation-name: zoomInUp;\n}\n@keyframes zoomOut {\nfrom {\n    opacity: 1;\n}\n50% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n}\nto {\n    opacity: 0;\n}\n}\n.zoomOut {\n  animation-name: zoomOut;\n}\n@keyframes zoomOutDown {\n40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\nto {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n}\n}\n.zoomOutDown {\n  animation-name: zoomOutDown;\n}\n@keyframes zoomOutLeft {\n40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n}\nto {\n    opacity: 0;\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform-origin: left center;\n}\n}\n.zoomOutLeft {\n  animation-name: zoomOutLeft;\n}\n@keyframes zoomOutRight {\n40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n}\nto {\n    opacity: 0;\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform-origin: right center;\n}\n}\n.zoomOutRight {\n  animation-name: zoomOutRight;\n}\n@keyframes zoomOutUp {\n40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\nto {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n}\n}\n.zoomOutUp {\n  animation-name: zoomOutUp;\n}\n@keyframes slideInDown {\nfrom {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n.slideInDown {\n  animation-name: slideInDown;\n}\n@keyframes slideInLeft {\nfrom {\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n.slideInLeft {\n  animation-name: slideInLeft;\n}\n@keyframes slideInRight {\nfrom {\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n.slideInRight {\n  animation-name: slideInRight;\n}\n@keyframes slideInUp {\nfrom {\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n.slideInUp {\n  animation-name: slideInUp;\n}\n@keyframes slideOutDown {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    visibility: hidden;\n    transform: translate3d(0, 100%, 0);\n}\n}\n.slideOutDown {\n  animation-name: slideOutDown;\n}\n@keyframes slideOutLeft {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    visibility: hidden;\n    transform: translate3d(-100%, 0, 0);\n}\n}\n.slideOutLeft {\n  animation-name: slideOutLeft;\n}\n@keyframes slideOutRight {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    visibility: hidden;\n    transform: translate3d(100%, 0, 0);\n}\n}\n.slideOutRight {\n  animation-name: slideOutRight;\n}\n@keyframes slideOutUp {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    visibility: hidden;\n    transform: translate3d(0, -100%, 0);\n}\n}\n.slideOutUp {\n  animation-name: slideOutUp;\n}\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n.animated.infinite {\n  animation-iteration-count: infinite;\n}\n.animated.delay-1s {\n  animation-delay: 1s;\n}\n.animated.delay-2s {\n  animation-delay: 2s;\n}\n.animated.delay-3s {\n  animation-delay: 3s;\n}\n.animated.delay-4s {\n  animation-delay: 4s;\n}\n.animated.delay-5s {\n  animation-delay: 5s;\n}\n.animated.fast {\n  animation-duration: 800ms;\n}\n.animated.faster {\n  animation-duration: 500ms;\n}\n.animated.slow {\n  animation-duration: 2s;\n}\n.animated.slower {\n  animation-duration: 3s;\n}\n@media (prefers-reduced-motion) {\n.animated {\n    animation: unset !important;\n    transition: none !important;\n}\n}\n.level {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.level-left {\n  -webkit-box-align: center;\n  -webkit-box-pack: start;\n  align-items: center;\n  justify-content: flex-start;\n}\n.level-right {\n  align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  justify-content: flex-end;\n  display: flex;\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n}\n.level-left .level-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.level-item {\n  align-items: center;\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: center;\n  -webkit-box-align: center;\n}\n.level .level-item .title {\n  margin-bottom: 0;\n}\n.level .level-item .title .is-5 {\n  font-size: 1.25rem !important;\n}\n.breadcrumb .is-small {\n  font-size: 0.75rem;\n}\n.is_bold {\n  font-weight: 700;\n}\n.breadcrumb ul {\n  list-style: none;\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  -webkit-box-pack: start;\n}\n.breadcrumb li {\n  align-items: center;\n  display: flex;\n}\n.breadcrumb li:first-child a {\n  padding-left: 0;\n}\n.breadcrumb li.is-active a {\n  color: #363636;\n  cursor: default;\n  pointer-events: none;\n}\n.breadcrumb a {\n  align-items: center;\n  justify-content: center;\n  padding: 2px 0.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn.social-btn {\n  padding: 6px !important;\n}\n.vue-daterange-picker .form-control {\n  height: 30px;\n}\n.vbt-global-search .form-group .form-control {\n  height: 30px;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(3px) !important;\n          backdrop-filter: blur(3px) !important;\n}\n.invalid-feedback {\n  font-size: 0.775rem !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppFooter.vue?vue&type=style&index=0&id=1e787acf&scoped=true&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/partials/AppFooter.vue?vue&type=style&index=0&id=1e787acf&scoped=true&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppHeader.vue?vue&type=style&index=0&id=3faadec1&scoped=true&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/partials/AppHeader.vue?vue&type=style&index=0&id=3faadec1&scoped=true&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppSidebar.vue?vue&type=style&index=0&id=59415b58&scoped=true&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/partials/AppSidebar.vue?vue&type=style&index=0&id=59415b58&scoped=true&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/PrivacyPolicy.vue?vue&type=style&index=0&id=92a58be0&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/PrivacyPolicy.vue?vue&type=style&index=0&id=92a58be0&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".brand-logo[data-v-92a58be0] {\n  margin-bottom: 1rem;\n}\n.brand-logo img[data-v-92a58be0] {\n  width: 80px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/TermAndCondition.vue?vue&type=style&index=0&id=eba7d86c&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/TermAndCondition.vue?vue&type=style&index=0&id=eba7d86c&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".brand-logo[data-v-eba7d86c] {\n  margin-bottom: 1rem;\n}\n.brand-logo img[data-v-eba7d86c] {\n  width: 100px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/change.vue?vue&type=style&index=0&id=c9d31366&scoped=true&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/auth/change.vue?vue&type=style&index=0&id=c9d31366&scoped=true&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/forget.vue?vue&type=style&index=0&id=123843ec&scoped=true&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/auth/forget.vue?vue&type=style&index=0&id=123843ec&scoped=true&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mainview.vue?vue&type=style&index=0&id=0a40daf8&scoped=true&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/mainview.vue?vue&type=style&index=0&id=0a40daf8&scoped=true&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ps": "./node_modules/moment/locale/ar-ps.js",
	"./ar-ps.js": "./node_modules/moment/locale/ar-ps.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku-kmr": "./node_modules/moment/locale/ku-kmr.js",
	"./ku-kmr.js": "./node_modules/moment/locale/ku-kmr.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
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
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7d06c284", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=1&id=7ba5bd90&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=1&id=7ba5bd90&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=1&id=7ba5bd90&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=1&id=7ba5bd90&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("58127ddc", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppFooter.vue?vue&type=style&index=0&id=1e787acf&scoped=true&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/partials/AppFooter.vue?vue&type=style&index=0&id=1e787acf&scoped=true&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=style&index=0&id=1e787acf&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppFooter.vue?vue&type=style&index=0&id=1e787acf&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("26aee3ec", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppHeader.vue?vue&type=style&index=0&id=3faadec1&scoped=true&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/partials/AppHeader.vue?vue&type=style&index=0&id=3faadec1&scoped=true&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeader.vue?vue&type=style&index=0&id=3faadec1&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppHeader.vue?vue&type=style&index=0&id=3faadec1&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7a218d28", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppSidebar.vue?vue&type=style&index=0&id=59415b58&scoped=true&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/partials/AppSidebar.vue?vue&type=style&index=0&id=59415b58&scoped=true&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppSidebar.vue?vue&type=style&index=0&id=59415b58&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppSidebar.vue?vue&type=style&index=0&id=59415b58&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("33c441d6", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/PrivacyPolicy.vue?vue&type=style&index=0&id=92a58be0&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/PrivacyPolicy.vue?vue&type=style&index=0&id=92a58be0&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./PrivacyPolicy.vue?vue&type=style&index=0&id=92a58be0&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/PrivacyPolicy.vue?vue&type=style&index=0&id=92a58be0&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c31e7cfa", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/TermAndCondition.vue?vue&type=style&index=0&id=eba7d86c&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/TermAndCondition.vue?vue&type=style&index=0&id=eba7d86c&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./TermAndCondition.vue?vue&type=style&index=0&id=eba7d86c&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/TermAndCondition.vue?vue&type=style&index=0&id=eba7d86c&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1b454466", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/change.vue?vue&type=style&index=0&id=c9d31366&scoped=true&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/auth/change.vue?vue&type=style&index=0&id=c9d31366&scoped=true&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./change.vue?vue&type=style&index=0&id=c9d31366&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/change.vue?vue&type=style&index=0&id=c9d31366&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("485a6e11", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/forget.vue?vue&type=style&index=0&id=123843ec&scoped=true&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/auth/forget.vue?vue&type=style&index=0&id=123843ec&scoped=true&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./forget.vue?vue&type=style&index=0&id=123843ec&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/forget.vue?vue&type=style&index=0&id=123843ec&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("ce192126", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mainview.vue?vue&type=style&index=0&id=0a40daf8&scoped=true&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/mainview.vue?vue&type=style&index=0&id=0a40daf8&scoped=true&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./mainview.vue?vue&type=style&index=0&id=0a40daf8&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mainview.vue?vue&type=style&index=0&id=0a40daf8&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1264047e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90&lang=html */ "./src/App.vue?vue&type=template&id=7ba5bd90&lang=html");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css");
/* harmony import */ var _App_vue_vue_type_style_index_1_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=1&id=7ba5bd90&lang=scss */ "./src/App.vue?vue&type=style&index=1&id=7ba5bd90&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  script,
  _App_vue_vue_type_template_id_7ba5bd90_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7ba5bd90_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!*****************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--7-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/App.vue?vue&type=style&index=1&id=7ba5bd90&lang=scss":
/*!******************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=1&id=7ba5bd90&lang=scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--9-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=1&id=7ba5bd90&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=1&id=7ba5bd90&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&lang=html":
/*!*************************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90&lang=html ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../node_modules/cache-loader/dist/cjs.js??ref--13-0!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90&lang=html */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/assets/images/samples/invoice_banner.jpg":
/*!******************************************************!*\
  !*** ./src/assets/images/samples/invoice_banner.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/invoice_banner.30aa78c1.jpg";

/***/ }),

/***/ "./src/assets/images/samples/profile_page/profile_header_banner.jpg":
/*!**************************************************************************!*\
  !*** ./src/assets/images/samples/profile_page/profile_header_banner.jpg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/profile_header_banner.9a629c6c.jpg";

/***/ }),

/***/ "./src/assets/images/samples/weather.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/samples/weather.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/weather.b208f279.svg";

/***/ }),

/***/ "./src/components/auth/Change.vue":
/*!****************************************!*\
  !*** ./src/components/auth/Change.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Change_vue_vue_type_template_id_15190e92_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Change.vue?vue&type=template&id=15190e92&scoped=true */ "./src/components/auth/Change.vue?vue&type=template&id=15190e92&scoped=true");
/* harmony import */ var _Change_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Change.vue?vue&type=script&lang=js */ "./src/components/auth/Change.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Change_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Change_vue_vue_type_template_id_15190e92_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Change_vue_vue_type_template_id_15190e92_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "15190e92",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/auth/Change.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/auth/Change.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/components/auth/Change.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Change_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Change.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/auth/Change.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Change_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/auth/Change.vue?vue&type=template&id=15190e92&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/components/auth/Change.vue?vue&type=template&id=15190e92&scoped=true ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Change_vue_vue_type_template_id_15190e92_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Change.vue?vue&type=template&id=15190e92&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/auth/Change.vue?vue&type=template&id=15190e92&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Change_vue_vue_type_template_id_15190e92_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Change_vue_vue_type_template_id_15190e92_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/auth/Forget.vue":
/*!****************************************!*\
  !*** ./src/components/auth/Forget.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Forget_vue_vue_type_template_id_5140e074_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forget.vue?vue&type=template&id=5140e074&scoped=true */ "./src/components/auth/Forget.vue?vue&type=template&id=5140e074&scoped=true");
/* harmony import */ var _Forget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forget.vue?vue&type=script&lang=js */ "./src/components/auth/Forget.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Forget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Forget_vue_vue_type_template_id_5140e074_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Forget_vue_vue_type_template_id_5140e074_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5140e074",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/auth/Forget.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/auth/Forget.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/components/auth/Forget.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Forget.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/auth/Forget.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/auth/Forget.vue?vue&type=template&id=5140e074&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/components/auth/Forget.vue?vue&type=template&id=5140e074&scoped=true ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forget_vue_vue_type_template_id_5140e074_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Forget.vue?vue&type=template&id=5140e074&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/auth/Forget.vue?vue&type=template&id=5140e074&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forget_vue_vue_type_template_id_5140e074_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forget_vue_vue_type_template_id_5140e074_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/auth/Login.vue":
/*!***************************************!*\
  !*** ./src/components/auth/Login.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_6bab3132_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=6bab3132&scoped=true */ "./src/components/auth/Login.vue?vue&type=template&id=6bab3132&scoped=true");
/* harmony import */ var _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js */ "./src/components/auth/Login.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_6bab3132_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_6bab3132_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6bab3132",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/auth/Login.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/auth/Login.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/auth/Login.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/auth/Login.vue?vue&type=template&id=6bab3132&scoped=true":
/*!*********************************************************************************!*\
  !*** ./src/components/auth/Login.vue?vue&type=template&id=6bab3132&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bab3132_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=6bab3132&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/auth/Login.vue?vue&type=template&id=6bab3132&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bab3132_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bab3132_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/partials/AppFooter.vue":
/*!***********************************************!*\
  !*** ./src/components/partials/AppFooter.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppFooter_vue_vue_type_template_id_1e787acf_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=template&id=1e787acf&scoped=true&lang=html */ "./src/components/partials/AppFooter.vue?vue&type=template&id=1e787acf&scoped=true&lang=html");
/* harmony import */ var _AppFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=script&lang=js */ "./src/components/partials/AppFooter.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _AppFooter_vue_vue_type_style_index_0_id_1e787acf_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=style&index=0&id=1e787acf&scoped=true&lang=scss */ "./src/components/partials/AppFooter.vue?vue&type=style&index=0&id=1e787acf&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppFooter_vue_vue_type_template_id_1e787acf_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppFooter_vue_vue_type_template_id_1e787acf_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e787acf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/partials/AppFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/partials/AppFooter.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/components/partials/AppFooter.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppFooter.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/partials/AppFooter.vue?vue&type=style&index=0&id=1e787acf&scoped=true&lang=scss":
/*!********************************************************************************************************!*\
  !*** ./src/components/partials/AppFooter.vue?vue&type=style&index=0&id=1e787acf&scoped=true&lang=scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_1e787acf_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=style&index=0&id=1e787acf&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppFooter.vue?vue&type=style&index=0&id=1e787acf&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_1e787acf_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_1e787acf_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_1e787acf_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_1e787acf_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/partials/AppFooter.vue?vue&type=template&id=1e787acf&scoped=true&lang=html":
/*!***************************************************************************************************!*\
  !*** ./src/components/partials/AppFooter.vue?vue&type=template&id=1e787acf&scoped=true&lang=html ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_1e787acf_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=template&id=1e787acf&scoped=true&lang=html */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppFooter.vue?vue&type=template&id=1e787acf&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_1e787acf_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_1e787acf_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/partials/AppHeader.vue":
/*!***********************************************!*\
  !*** ./src/components/partials/AppHeader.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppHeader_vue_vue_type_template_id_3faadec1_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=template&id=3faadec1&scoped=true&lang=html */ "./src/components/partials/AppHeader.vue?vue&type=template&id=3faadec1&scoped=true&lang=html");
/* harmony import */ var _AppHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=script&lang=js */ "./src/components/partials/AppHeader.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _AppHeader_vue_vue_type_style_index_0_id_3faadec1_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=style&index=0&id=3faadec1&scoped=true&lang=scss */ "./src/components/partials/AppHeader.vue?vue&type=style&index=0&id=3faadec1&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppHeader_vue_vue_type_template_id_3faadec1_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppHeader_vue_vue_type_template_id_3faadec1_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3faadec1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/partials/AppHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/partials/AppHeader.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/components/partials/AppHeader.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeader.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppHeader.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/partials/AppHeader.vue?vue&type=style&index=0&id=3faadec1&scoped=true&lang=scss":
/*!********************************************************************************************************!*\
  !*** ./src/components/partials/AppHeader.vue?vue&type=style&index=0&id=3faadec1&scoped=true&lang=scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_3faadec1_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeader.vue?vue&type=style&index=0&id=3faadec1&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppHeader.vue?vue&type=style&index=0&id=3faadec1&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_3faadec1_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_3faadec1_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_3faadec1_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_3faadec1_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/partials/AppHeader.vue?vue&type=template&id=3faadec1&scoped=true&lang=html":
/*!***************************************************************************************************!*\
  !*** ./src/components/partials/AppHeader.vue?vue&type=template&id=3faadec1&scoped=true&lang=html ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_3faadec1_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeader.vue?vue&type=template&id=3faadec1&scoped=true&lang=html */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppHeader.vue?vue&type=template&id=3faadec1&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_3faadec1_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_3faadec1_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/partials/AppSidebar.vue":
/*!************************************************!*\
  !*** ./src/components/partials/AppSidebar.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppSidebar_vue_vue_type_template_id_59415b58_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSidebar.vue?vue&type=template&id=59415b58&scoped=true&lang=html */ "./src/components/partials/AppSidebar.vue?vue&type=template&id=59415b58&scoped=true&lang=html");
/* harmony import */ var _AppSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppSidebar.vue?vue&type=script&lang=js */ "./src/components/partials/AppSidebar.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _AppSidebar_vue_vue_type_style_index_0_id_59415b58_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppSidebar.vue?vue&type=style&index=0&id=59415b58&scoped=true&lang=scss */ "./src/components/partials/AppSidebar.vue?vue&type=style&index=0&id=59415b58&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppSidebar_vue_vue_type_template_id_59415b58_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppSidebar_vue_vue_type_template_id_59415b58_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "59415b58",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/partials/AppSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/partials/AppSidebar.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/components/partials/AppSidebar.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppSidebar.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppSidebar.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/partials/AppSidebar.vue?vue&type=style&index=0&id=59415b58&scoped=true&lang=scss":
/*!*********************************************************************************************************!*\
  !*** ./src/components/partials/AppSidebar.vue?vue&type=style&index=0&id=59415b58&scoped=true&lang=scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_style_index_0_id_59415b58_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppSidebar.vue?vue&type=style&index=0&id=59415b58&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppSidebar.vue?vue&type=style&index=0&id=59415b58&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_style_index_0_id_59415b58_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_style_index_0_id_59415b58_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_style_index_0_id_59415b58_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_style_index_0_id_59415b58_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/partials/AppSidebar.vue?vue&type=template&id=59415b58&scoped=true&lang=html":
/*!****************************************************************************************************!*\
  !*** ./src/components/partials/AppSidebar.vue?vue&type=template&id=59415b58&scoped=true&lang=html ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_template_id_59415b58_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppSidebar.vue?vue&type=template&id=59415b58&scoped=true&lang=html */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/partials/AppSidebar.vue?vue&type=template&id=59415b58&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_template_id_59415b58_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_template_id_59415b58_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/helpers/PermissionCheck.js":
/*!****************************************!*\
  !*** ./src/helpers/PermissionCheck.js ***!
  \****************************************/
/*! exports provided: checkPermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPermission", function() { return checkPermission; });
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/useAuth */ "./src/store/useAuth.js");




const checkPermission = permissions => {
  const auth = Object(_store_useAuth__WEBPACK_IMPORTED_MODULE_3__["useAuth"])();
  let rolePer = auth.getRolePermissions;
  let allowedPer = permissions;
  if (permissions) {
    const result = rolePer.map(name => allowedPer.includes(name.slug)).find(name => name === true);
    if (!result) return false;
    return result;
  }
  return false;
};

/***/ }),

/***/ "./src/helpers/auth.js":
/*!*****************************!*\
  !*** ./src/helpers/auth.js ***!
  \*****************************/
/*! exports provided: baseApi, authApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseApi", function() { return baseApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authApi", function() { return authApi; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const BASE_URL = "http://localhost:8080/v1/";
const baseApi = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  mode: "no-cors",
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
  //  withCredentials: true,
});
const authApi = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  mode: "no-cors",
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
  // withCredentials: true,
});

/***/ }),

/***/ "./src/helpers/authHook.js":
/*!*********************************!*\
  !*** ./src/helpers/authHook.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./src/helpers/auth.js");
/* harmony import */ var _store_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/useAuth */ "./src/store/useAuth.js");
/* harmony import */ var _store_refToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/refToken */ "./src/store/refToken.js");



const useAuthapi = () => {
  const auth = Object(_store_useAuth__WEBPACK_IMPORTED_MODULE_1__["useAuth"])();
  const refreshState = Object(_store_refToken__WEBPACK_IMPORTED_MODULE_2__["refreshAuth"])();
  _auth__WEBPACK_IMPORTED_MODULE_0__["authApi"].interceptors.response.use(response => response, async error => {
    var _error$response;
    //const { config: originalRequest } = error;
    const prevReq = error === null || error === void 0 ? void 0 : error.config;
    if ((error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 401 && !(prevReq !== null && prevReq !== void 0 && prevReq.sent)) {
      prevReq.sent = true;
      const reAuth = await refreshState.refresh();
      //  console.log("reAuth", reAuth);
      prevReq.headers["Authorization"] = `Bearer ${reAuth}`;
      return Object(_auth__WEBPACK_IMPORTED_MODULE_0__["authApi"])(prevReq);
    }
    return Promise.reject(error);
  });
  _auth__WEBPACK_IMPORTED_MODULE_0__["authApi"].interceptors.request.use(config => {
    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${auth.authToken.accessToken}`;
    }
    return config;
  }, error => Promise.reject(error));
  return _auth__WEBPACK_IMPORTED_MODULE_0__["authApi"];
};
/* harmony default export */ __webpack_exports__["default"] = (useAuthapi);

/***/ }),

/***/ "./src/helpers/utils.js":
/*!******************************!*\
  !*** ./src/helpers/utils.js ***!
  \******************************/
/*! exports provided: getCurrentDate, getDateFormat, getTimeFormat, getFirstLetters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentDate", function() { return getCurrentDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateFormat", function() { return getDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeFormat", function() { return getTimeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstLetters", function() { return getFirstLetters; });
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/useAuth */ "./src/store/useAuth.js");



//import { useApp } from "../store/useApp";

const getCurrentDate = () => {
  const auth = Object(_store_useAuth__WEBPACK_IMPORTED_MODULE_2__["useAuth"])();
  const TZ = auth.general.timezone;
  return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()().tz(TZ);
};
const getDateFormat = (date, format = "lll", tz = "Asia/Kolkata") => {
  const auth = Object(_store_useAuth__WEBPACK_IMPORTED_MODULE_2__["useAuth"])();
  const TZ = auth.general.timezone ? auth.general.timezone : tz;
  return date ? moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(date).tz(TZ).format(format) : "-";
};
const getTimeFormat = (date, format = "HH:mm A", tz = "Asia/Kolkata") => {
  const auth = Object(_store_useAuth__WEBPACK_IMPORTED_MODULE_2__["useAuth"])();
  const TZ = auth.general.timezone ? auth.general.timezone : tz;
  return date ? moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(date).tz(TZ).format(format) : "-";
};
const getFirstLetters = inputString => {
  const words = inputString.split(" ");
  const firstLetters = words.map(word => word.charAt(0)).join("");
  return firstLetters;
};

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.vue");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue_sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-sweetalert2 */ "./node_modules/vue-sweetalert2/dist/index.js");
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-toast-notification */ "./node_modules/vue-toast-notification/dist/index.js");
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_toast_notification__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var vue_good_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-good-table */ "./node_modules/vue-good-table/dist/vue-good-table.esm.js");
/* harmony import */ var vue_meta__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-meta */ "./node_modules/vue-meta/dist/vue-meta.esm.js");
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue2-google-maps */ "./node_modules/vue2-google-maps/dist/main.js");
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue2_google_maps__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var one_colorpicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! one-colorpicker */ "./node_modules/one-colorpicker/dist/build.js");
/* harmony import */ var one_colorpicker__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(one_colorpicker__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var vue_lazyload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-lazyload */ "./node_modules/vue-lazyload/vue-lazyload.esm.js");
/* harmony import */ var vue_country_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-country-dropdown */ "./node_modules/vue-country-dropdown/dist/vue-country-dropdown.js");
/* harmony import */ var vue_country_dropdown__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(vue_country_dropdown__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _store_useApp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/useApp */ "./src/store/useApp.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_min_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.min.css */ "./node_modules/sweetalert2/dist/sweetalert2.min.css");
/* harmony import */ var sweetalert2_dist_sweetalert2_min_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_min_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var vue_good_table_dist_vue_good_table_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vue-good-table/dist/vue-good-table.css */ "./node_modules/vue-good-table/dist/vue-good-table.css");
/* harmony import */ var vue_good_table_dist_vue_good_table_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(vue_good_table_dist_vue_good_table_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var vue_toast_notification_dist_theme_sugar_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vue-toast-notification/dist/theme-sugar.css */ "./node_modules/vue-toast-notification/dist/theme-sugar.css");
/* harmony import */ var vue_toast_notification_dist_theme_sugar_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(vue_toast_notification_dist_theme_sugar_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_21__);



















// eslint-disable-next-line
let $ = jquery__WEBPACK_IMPORTED_MODULE_8___default.a;
const options = {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674"
};

// import the styles





vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["default"], options);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuelidate__WEBPACK_IMPORTED_MODULE_7___default.a);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_toast_notification__WEBPACK_IMPORTED_MODULE_10___default.a);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_meta__WEBPACK_IMPORTED_MODULE_12__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_lazyload__WEBPACK_IMPORTED_MODULE_15__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_country_dropdown__WEBPACK_IMPORTED_MODULE_16___default.a);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_good_table__WEBPACK_IMPORTED_MODULE_11__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(one_colorpicker__WEBPACK_IMPORTED_MODULE_14__["ColorPanel"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(one_colorpicker__WEBPACK_IMPORTED_MODULE_14__["ColorPicker"]);

//add router to pinia
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(pinia__WEBPACK_IMPORTED_MODULE_2__["PiniaVuePlugin"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(_store__WEBPACK_IMPORTED_MODULE_5__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]);
const app = Object(_store_useApp__WEBPACK_IMPORTED_MODULE_17__["useApp"])();
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue2_google_maps__WEBPACK_IMPORTED_MODULE_13__, {
  load: {
    key: app.googleKey ? app.googleKey : "",
    //process.env.GOOGLE_MAPS_API_KEY,
    libraries: "places,directions",
    // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
    // region: "IN",
    language: "en"
  }
});
vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$year = new Date().getFullYear();
vue__WEBPACK_IMPORTED_MODULE_0__["default"].config.productionTip = true;
new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  router: _router__WEBPACK_IMPORTED_MODULE_4__["default"],
  pinia: _store__WEBPACK_IMPORTED_MODULE_5__["default"],
  render: h => h(_App__WEBPACK_IMPORTED_MODULE_1__["default"])
}).$mount("#app");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/useAuth */ "./src/store/useAuth.js");
/* harmony import */ var _helpers_PermissionCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/PermissionCheck */ "./src/helpers/PermissionCheck.js");
/* harmony import */ var _views_mainview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/mainview */ "./src/views/mainview.vue");
/* harmony import */ var _views_auth_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/auth/login */ "./src/views/auth/login.vue");
/* harmony import */ var _views_auth_forget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/auth/forget */ "./src/views/auth/forget.vue");
/* harmony import */ var _views_auth_change__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/auth/change */ "./src/views/auth/change.vue");
/* harmony import */ var _views_TermAndCondition_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/TermAndCondition.vue */ "./src/views/TermAndCondition.vue");
/* harmony import */ var _views_PrivacyPolicy_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/PrivacyPolicy.vue */ "./src/views/PrivacyPolicy.vue");
//import Vue from "vue";


nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.configure({
  easing: "ease",
  speed: 3000,
  showSpinner: true
});


// Dashboard Components
//import store from "../store";

//  Admin Components


//import register from "../views/auth/register";




const routes = [{
  path: "/",
  redirect: "/dashboard",
  component: _views_mainview__WEBPACK_IMPORTED_MODULE_4__["default"],
  children: [{
    path: "dashboard",
    name: "dashboard",
    component: () => __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ../views/admin/dashboard */ "./src/views/admin/dashboard.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "manage.dashboard"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403",
      title: "Dashboard"
    }
  }, {
    path: "my-profile",
    name: "profile",
    component: () => __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! ../views/auth/profile.vue */ "./src/views/auth/profile.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "auth.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "bus-seat-plan",
    name: "bus-seat-plan",
    component: () => __webpack_require__.e(/*! import() */ 61).then(__webpack_require__.bind(null, /*! ../views/bus-seat-plans/Seat.vue */ "./src/views/bus-seat-plans/Seat.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "auth.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "eagles-eyes",
    name: "eagleeye",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, /*! ../views/admin/EagleEye.vue */ "./src/views/admin/EagleEye.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "buses",
    name: "bus",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(43)]).then(__webpack_require__.bind(null, /*! ../views/admin/buses */ "./src/views/admin/buses/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "bus.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "bus/create",
    name: "buscreate",
    component: () => __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ../views/admin/buses/create */ "./src/views/admin/buses/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "bus.create"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "bus/:id",
    name: "busedit",
    component: () => __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ../views/admin/buses/edit */ "./src/views/admin/buses/edit.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "bus.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "bustypes",
    name: "bustype",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(53)]).then(__webpack_require__.bind(null, /*! ../views/admin/bustypes */ "./src/views/admin/bustypes/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "bus.type.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "bustype/create",
    name: "bustypecreate",
    component: () => __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ../views/admin/bustypes/create */ "./src/views/admin/bustypes/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "bus.type.create"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "bustype/:id",
    name: "bustypeedit",
    component: () => __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! ../views/admin/bustypes/edit */ "./src/views/admin/bustypes/edit.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "bus.type.edit"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "locations",
    name: "location",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(54)]).then(__webpack_require__.bind(null, /*! ../views/admin/locations */ "./src/views/admin/locations/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "stop.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "location/create",
    name: "locationcreate",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ../views/admin/locations/create */ "./src/views/admin/locations/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "stop.create"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "location/:id",
    name: "locationedit",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ../views/admin/locations/create */ "./src/views/admin/locations/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "stop.edit"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "routes",
    name: "route",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(44)]).then(__webpack_require__.bind(null, /*! ../views/admin/routes */ "./src/views/admin/routes/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "route.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "route/create",
    name: "routecreate",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(59)]).then(__webpack_require__.bind(null, /*! ../views/admin/routes/create */ "./src/views/admin/routes/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "route.create"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "route/:id",
    name: "routeedit",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(60)]).then(__webpack_require__.bind(null, /*! ../views/admin/routes/edit */ "./src/views/admin/routes/edit.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "route.edit"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "drivers",
    name: "driver",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, /*! ../views/admin/drivers */ "./src/views/admin/drivers/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "driver.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "driver/create",
    name: "drivercreate",
    component: () => __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ../views/admin/drivers/create */ "./src/views/admin/drivers/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "driver.create"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "driver/:id",
    name: "driveredit",
    component: () => __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ../views/admin/drivers/edit */ "./src/views/admin/drivers/edit.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "driver.edit"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "agents",
    name: "agent",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(50)]).then(__webpack_require__.bind(null, /*! ../views/admin/agents */ "./src/views/admin/agents/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "agent.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "agent/create",
    name: "agentcreate",
    component: () => __webpack_require__.e(/*! import() */ 31).then(__webpack_require__.bind(null, /*! ../views/admin/agents/create */ "./src/views/admin/agents/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "agent.create"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "users",
    name: "user",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, /*! ../views/admin/users */ "./src/views/admin/users/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin"],
      redirect: {
        name: "login"
      },
      permission: ["master.admin", "user.view"],
      forbiddenRedirect: "/403"
    }
  }, {
    path: "user/create",
    name: "usercreate",
    component: () => __webpack_require__.e(/*! import() */ 39).then(__webpack_require__.bind(null, /*! ../views/admin/users/create */ "./src/views/admin/users/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin"],
      redirect: {
        name: "login"
      },
      permission: ["master.admin", "user.create"],
      forbiddenRedirect: "/403"
    }
  }, {
    path: "user/:id",
    name: "useredit",
    component: () => __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ../views/admin/users/edit */ "./src/views/admin/users/edit.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin"],
      redirect: {
        name: "login"
      },
      permission: ["master.admin", "user.edit"],
      forbiddenRedirect: "/403"
    }
  }, {
    path: "buslayouts",
    name: "buslayout",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, /*! ../views/admin/buslayout */ "./src/views/admin/buslayout/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "bus.layout.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "buslayout/create",
    name: "buslayoutcreate",
    component: () => __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ../views/admin/buslayout/create */ "./src/views/admin/buslayout/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "bus.layout.create"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "buslayout/:id",
    name: "buslayoutedit",
    component: () => __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! ../views/admin/buslayout/edit */ "./src/views/admin/buslayout/edit.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "bus.layout.edit"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "help-and-support",
    name: "helpandsupport",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, /*! ../views/admin/helpAndSupport */ "./src/views/admin/helpAndSupport.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "help.support.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "administration-tools/application-settings",
    name: "applicationsetting",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(7), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! ../views/admin/applicationSetting */ "./src/views/admin/applicationSetting.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin"],
      permission: ["master.admin", "manage.application.settings"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "administration-tools/currency",
    name: "currency",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(9), __webpack_require__.e(29)]).then(__webpack_require__.bind(null, /*! ../views/admin/currencies */ "./src/views/admin/currencies/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin"],
      permission: ["master.admin", "currency.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "administration-tools/payment-settings",
    name: "payment-settings",
    component: () => __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.bind(null, /*! ../views/admin/payment-settings */ "./src/views/admin/payment-settings/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin"],
      permission: ["master.admin"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "administration-tools/country",
    name: "country",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(9), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, /*! ../views/admin/countries */ "./src/views/admin/countries/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin"],
      permission: ["master.admin"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "trips/assign/list",
    name: "tripassignlist",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(73)]).then(__webpack_require__.bind(null, /*! ../views/trips/assign/list */ "./src/views/trips/assign/list.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "booking.assigns.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "trips/assign/create",
    name: "tripassigncreate",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(10), __webpack_require__.e(42)]).then(__webpack_require__.bind(null, /*! ../views/trips/assign/create */ "./src/views/trips/assign/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "booking.assigns.create"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "trips/assign/:id",
    name: "tripassignedit",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(10), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, /*! ../views/trips/assign/edit */ "./src/views/trips/assign/edit.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "booking.assigns.edit"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "bus-schedules/create",
    name: "bus-schedule-create",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(51)]).then(__webpack_require__.bind(null, /*! ../views/admin/bus-schedules/create */ "./src/views/admin/bus-schedules/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "bus-schedule.create"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "bus-schedules",
    name: "bus-schedules",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(52)]).then(__webpack_require__.bind(null, /*! ../views/admin/bus-schedules */ "./src/views/admin/bus-schedules/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "bus-schedule.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "bus-schedules/:id",
    name: "bus-scheduleedit",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, /*! ../views/admin/bus-schedules/edit */ "./src/views/admin/bus-schedules/edit.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "bus-schedule.edit"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "offers",
    name: "offer",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(55)]).then(__webpack_require__.bind(null, /*! ../views/admin/offers */ "./src/views/admin/offers/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "offer.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "offer/create",
    name: "offercreate",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(41)]).then(__webpack_require__.bind(null, /*! ../views/admin/offers/create */ "./src/views/admin/offers/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "offer.create"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "offer/:id",
    name: "offeredit",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(62)]).then(__webpack_require__.bind(null, /*! ../views/admin/offers/edit */ "./src/views/admin/offers/edit.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "offer.edit"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "passes",
    name: "pass",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(56)]).then(__webpack_require__.bind(null, /*! ../views/admin/passes */ "./src/views/admin/passes/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "pass.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "pass/create",
    name: "passcreate",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(63)]).then(__webpack_require__.bind(null, /*! ../views/admin/passes/create */ "./src/views/admin/passes/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "pass.create"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "pass/:id",
    name: "passedit",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(64)]).then(__webpack_require__.bind(null, /*! ../views/admin/passes/edit */ "./src/views/admin/passes/edit.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "pass.edit"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "roles",
    name: "role",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(37)]).then(__webpack_require__.bind(null, /*! ../views/admin/roles */ "./src/views/admin/roles/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin"],
      permission: ["master.admin", "roles"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "role/create",
    name: "rolecreate",
    component: () => __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! ../views/admin/roles/create */ "./src/views/admin/roles/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin"],
      permission: ["master.admin", "roles"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "role/:id",
    name: "roleedit",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(58)]).then(__webpack_require__.bind(null, /*! ../views/admin/roles/edit */ "./src/views/admin/roles/edit.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin"],
      permission: ["master.admin", "roles"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "role-permission/:id",
    name: "rolepermission",
    component: () => __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! ../views/admin/roles/permission */ "./src/views/admin/roles/permission.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin"],
      permission: ["master.admin", "permissions"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "assign-role",
    name: "assignrole",
    component: () => __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ../views/admin/roles/assign/create */ "./src/views/admin/roles/assign/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin"],
      permission: ["master.admin", "permissions"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "bookings/:travel_status",
    name: "booking",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(6), __webpack_require__.e(46)]).then(__webpack_require__.bind(null, /*! ../views/admin/bookings */ "./src/views/admin/bookings/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "booking.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "booking-details/:id",
    name: "bookingdetail",
    component: () => __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ../views/admin/bookings/detail */ "./src/views/admin/bookings/detail.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "booking.edit"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "payments/:travel_status",
    name: "payment",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(65)]).then(__webpack_require__.bind(null, /*! ../views/admin/payments */ "./src/views/admin/payments/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "payment.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "referrals",
    name: "referral",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(71)]).then(__webpack_require__.bind(null, /*! ../views/referrals */ "./src/views/referrals/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "referrals"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "referrals/:userId",
    name: "referralview",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(72)]).then(__webpack_require__.bind(null, /*! ../views/referrals/view */ "./src/views/referrals/view.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "referrals.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "customers",
    name: "customer",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(6), __webpack_require__.e(45)]).then(__webpack_require__.bind(null, /*! ../views/customers */ "./src/views/customers/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      redirect: {
        name: "login"
      },
      permission: ["master.admin", "customer.view"],
      forbiddenRedirect: "/403"
    }
  }, {
    path: "customer/create",
    name: "customercreate",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(66)]).then(__webpack_require__.bind(null, /*! ../views/customers/create */ "./src/views/customers/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin"],
      permission: ["master.admin", "customer.create"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "customer/:id",
    name: "customeredit",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(67)]).then(__webpack_require__.bind(null, /*! ../views/customers/edit */ "./src/views/customers/edit.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "customer.edit"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "customer-wallet-history/:userId/:walletId",
    name: "customerwallethistory",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(68)]).then(__webpack_require__.bind(null, /*! ../views/customers/wallet/history */ "./src/views/customers/wallet/history.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "customer.wallet.history.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "customers/wallet-recharge",
    name: "customerwalletrecharge",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(48)]).then(__webpack_require__.bind(null, /*! ../views/customers/wallet/create */ "./src/views/customers/wallet/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "customer.wallet.create"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "customer-booking-history/:userId",
    name: "customerbookinghistory",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(47)]).then(__webpack_require__.bind(null, /*! ../views/customers/bookings/Histories.vue */ "./src/views/customers/bookings/Histories.vue")),
    meta: {
      title: "Customer Booking Histories",
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "booking.history.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "suggests",
    name: "suggest",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(6), __webpack_require__.e(57)]).then(__webpack_require__.bind(null, /*! ../views/admin/suggests */ "./src/views/admin/suggests/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "suggests"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "notifications/create",
    name: "notification-create",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(7), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, /*! ../views/notifications/create */ "./src/views/notifications/create.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "notification.create"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }, {
    path: "notifications",
    name: "notification-list",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(49)]).then(__webpack_require__.bind(null, /*! ../views/notifications */ "./src/views/notifications/index.vue")),
    meta: {
      requiresAuth: true,
      authorize: ["admin", "staff"],
      permission: ["master.admin", "notification.view"],
      redirect: {
        name: "login"
      },
      forbiddenRedirect: "/403"
    }
  }]
}, {
  path: "/403",
  name: "403",
  component: () => __webpack_require__.e(/*! import() */ 69).then(__webpack_require__.bind(null, /*! ../views/errors/403 */ "./src/views/errors/403.vue")),
  meta: {
    requiresAuth: false
  }
}, {
  path: "/404",
  name: "404",
  component: () => __webpack_require__.e(/*! import() */ 70).then(__webpack_require__.bind(null, /*! ../views/errors/404 */ "./src/views/errors/404.vue")),
  meta: {
    requiresAuth: false
  }
}, {
  path: "*",
  // redirect: "/auth/error_404",
  component: {
    render(c) {
      return c("router-view");
    }
  },
  children: [{
    path: "/auth/login",
    name: "login",
    component: _views_auth_login__WEBPACK_IMPORTED_MODULE_5__["default"],
    meta: {
      requiresAuth: false
    }
  }, {
    path: "/auth/forget-password",
    name: "forget",
    component: _views_auth_forget__WEBPACK_IMPORTED_MODULE_6__["default"],
    meta: {
      requiresAuth: false
    }
  }, {
    path: "/auth/new-password/:resetToken",
    name: "change",
    component: _views_auth_change__WEBPACK_IMPORTED_MODULE_7__["default"],
    meta: {
      requiresAuth: false
    }
  }, {
    path: "/terms",
    name: "term",
    component: _views_TermAndCondition_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    meta: {
      requiresAuth: false
    }
  }, {
    path: "/privacy-policy",
    name: "policy",
    component: _views_PrivacyPolicy_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    meta: {
      requiresAuth: false
    }
  }]
}];
const router = new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]({
  linkActiveClass: "active",
  mode: "hash",
  //  base: process.env.BASE_URL,
  routes
});
router.beforeEach(async (to, from, next) => {
  const auth = Object(_store_useAuth__WEBPACK_IMPORTED_MODULE_2__["useAuth"])();
  const isAuthenticated = auth.isAuth;
  const userAccess = Object(_helpers_PermissionCheck__WEBPACK_IMPORTED_MODULE_3__["checkPermission"])(to.meta.permission);
  //console.log(" to.fullPath ", isAuthenticated, "to.meta.requiresAuth", to);
  let exceptionalRoutes = ["login", "forget", "change", "policy", "term"];
  if (!isAuthenticated && to.meta.requiresAuth) {
    // console.log(" to.fullPath 111", isAuthenticated);
    return next("/auth/login"); //next("/auth/login");
  } else {
    if (exceptionalRoutes.includes(to.name)) {
      next();
    }
  }
  if (to.meta.permission && isAuthenticated && !userAccess) {
    //  console.log(" to.fullPath ", to.meta.permission);
    return next("/403");
  }
  if (isAuthenticated && to.path === "/auth/login") {
    return {
      name: from.fullPath
    };
  }
  //  if (isAuthenticated && to.path === "/register") return { name: from.fullPath}
  next();
});
router.beforeResolve((to, from, next) => {
  if (to.name) {
    nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
  }
  next();
});
router.afterEach(() => {
  nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     console.log("router isAuthenticated: ", store.getters.isAuthenticated);
//     if (store.getters.isAuthenticated) {
//       next();
//       return;
//     }
//     next("/auth/login");
//   } else {
//     next();
//   }
// });

// router.beforeEach(async (to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = [
//     "/auth/login",
//     "/auth/forget-password",
//     "/auth/register",
//     "/terms",
//     "/cookies-&-policy",
//   ];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("user");
//   //let loggedIn = await store.dispatch("auth/isLoggedIn");

//   const { authorize } = to.meta;
//   //console.log("router.meta", to.meta);
//   // /forbiddenRedirect
//   console.log("authRequired", authorize);
//   const role = localStorage.getItem("role");
//   if (to.name == "change" && !loggedIn) {
//     next();
//   } else if (authRequired && !loggedIn) {
//     return next("/auth/login");
//   } else if (authorize && !authorize.includes(role)) {
//     console.log("sadasdas ");
//     return next("/403");
//   }
//   // console.log("34234 ");

//   //  else if (
//   //   authorize &&
//   //   authorize.length &&
//   //   !authorize.includes(this.$store.auth.role)
//   // ) {
//   //   console.log("to.path", to.path, "authorize", authorize, forbiddenRedirect);
//   //   router.push({ path: forbiddenRedirect });
//   // }

//   next();
// });

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/services/agent.service.js":
/*!***************************************!*\
  !*** ./src/services/agent.service.js ***!
  \***************************************/
/*! exports provided: agentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agentService", function() { return agentService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");





const agentService = {
  getAll,
  tranform,
  create,
  deleteAgent
};
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Objparams.role = "agent";
    const response = await privateAuth.get("agents", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("agents", Objparams);
    console.log("response ", response);
    return response.data;
    //return Objparams;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      profile_picture: item.picture,
      firstname: item.firstname,
      lastname: item.lastname,
      email: item.email,
      phone: item.phone,
      city: item.city,
      company: item.company,
      address_1: item.address_1,
      address_2: item.address_2,
      pincode: item.pincode,
      status: item.is_active,
      last_login: item.last_login,
      createdAt: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(item.createdAt)
    });
  });
  return selectableItems;
}
async function deleteAgent(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("agents/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

/***/ }),

/***/ "./src/services/assign.service.js":
/*!****************************************!*\
  !*** ./src/services/assign.service.js ***!
  \****************************************/
/*! exports provided: assignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignService", function() { return assignService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");




//import moment from "moment-timezone";

const assignService = {
  create,
  getAll,
  transform,
  deleteAssign,
  update,
  find
};
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("booking-assigns/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("booking-assigns", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("booking-assigns/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("booking-assigns/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function deleteAssign(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("booking-assigns/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function transform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      vendor_name: item.admin_name,
      route_name: item.route_name,
      driver_name: item.driver_name,
      date_time: item.date_time,
      assistantId: item.assistantId
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/auth.service.js":
/*!**************************************!*\
  !*** ./src/services/auth.service.js ***!
  \**************************************/
/*! exports provided: authService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authService", function() { return authService; });
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/auth */ "./src/helpers/auth.js");
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/services/token.service.js");



// import router from "@/router";
// import Vue from "vue";

const authService = {
  getAll,
  login,
  logout,
  register,
  sendPasswordRest,
  resetPassword,
  getAgents,
  updateProfile,
  profile
};
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const response = await privateAuth.get("users", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function profile(id) {
  try {
    const response = await _helpers_auth__WEBPACK_IMPORTED_MODULE_0__["authApi"].get("auth/" + id);
    return response.data.data;
  } catch (e) {
    return e.response;
  }
}
async function updateProfile(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const response = await privateAuth.patch("users/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAgents(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const response = await privateAuth.get("agents", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function login(email, password) {
  try {
    return _helpers_auth__WEBPACK_IMPORTED_MODULE_0__["baseApi"].post("/auth/login", {
      email,
      password
    }).then(response => {
      let user = response.data;
      // let accessToken = response.data.token.accessToken;
      // let refreshToken = response.data.token.refreshToken;
      // TokenService.setUser(user);
      // TokenService.setLocalRefreshToken(refreshToken);
      // TokenService.setLocalAccessToken(accessToken);
      // TokenService.setRole(user.role);

      return user;
    });
  } catch (e) {
    if (e.response.status === 401) {
      return e.response.data;
    }
  }
}
function logout() {
  _token_service__WEBPACK_IMPORTED_MODULE_2__["default"].removeAccessToken();
  _token_service__WEBPACK_IMPORTED_MODULE_2__["default"].removeRefreshToken();
  _token_service__WEBPACK_IMPORTED_MODULE_2__["default"].removeUser();
  _token_service__WEBPACK_IMPORTED_MODULE_2__["default"].removeRole();
}
async function register(user) {
  try {
    const register = await _helpers_auth__WEBPACK_IMPORTED_MODULE_0__["baseApi"].post("auth/register", user);
    return register;
  } catch (e) {
    return e.response;
  }
}
async function sendPasswordRest(email) {
  try {
    const response = await _helpers_auth__WEBPACK_IMPORTED_MODULE_0__["baseApi"].post("auth/send-password-reset", {
      email
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function resetPassword(email, password, resetToken) {
  try {
    const response = await _helpers_auth__WEBPACK_IMPORTED_MODULE_0__["baseApi"].post("auth/reset-password", {
      email,
      password,
      resetToken
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

/***/ }),

/***/ "./src/services/booking.service.js":
/*!*****************************************!*\
  !*** ./src/services/booking.service.js ***!
  \*****************************************/
/*! exports provided: bookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookingService", function() { return bookingService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");





const bookingService = {
  getAll,
  //   create,
  //   update,
  //   deleteBus,
  tranform,
  find,
  bookingCount
  //   load,
};
async function bookingCount(status, start_date, end_date) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get(`bookings/count/${status}/${start_date}/${end_date}`);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

// async function load() {
//   try {
//     const response = await baseURL.get("buses");
//     return response.data;
//   } catch (e) {
//     if (e.response.status === 401) {
//       return e.response.data;
//     }
//   }
// }

async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("bookings/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("bookings/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      pnr_no: item.pnr_no,
      has_return: item.has_return ? "Yes" : "No",
      customer_name: item.customer_name,
      customer_phone: item.customer_phone,
      customer_email: item.customer_email,
      customer_gender: item.customer_gender,
      stopping_points: item.stopping_points,
      distance: item.distance,
      passengers: item.passengers,
      bus_name: item.bus_name,
      bus_model_no: item.bus_model_no,
      seat_nos: item.seat_nos,
      tax_amount: item.tax_amount,
      tax: item.tax,
      fee: item.fee,
      final_total_fare: item.final_total_fare,
      orderId: item.orderId,
      travel_status: item.travel_status,
      payment_status: item.payment_status,
      payment_created: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(item.payment_created)
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/bus.service.js":
/*!*************************************!*\
  !*** ./src/services/bus.service.js ***!
  \*************************************/
/*! exports provided: busService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "busService", function() { return busService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");





const busService = {
  getAll,
  create,
  update,
  deleteBus,
  tranform,
  find,
  load,
  loadBusByRoute,
  isBusExists
};
async function isBusExists(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("buses/is-exists", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function loadBusByRoute() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("buses/route");
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function load() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("buses");
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("buses/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("buses", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("buses/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("buses/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function deleteBus(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("buses/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      name: item.name,
      reg_no: item.reg_no,
      chassis_no: item.chassis_no,
      model_no: item.model_no,
      brand: item.brand,
      type: item.type ? item.type : "",
      created_by: item.created_by ? item.created_by : "",
      max_seats: item.max_seats,
      picture: item.picture,
      amenities: item.amenities,
      status: item.status == true ? "Active" : "Inactive",
      certificate_registration: item.certificate_registration,
      certificate_pollution: item.certificate_pollution,
      certificate_pollution_expiry_date: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(item.certificate_pollution_expiry_date),
      certificate_insurance: item.certificate_insurance,
      certificate_insurance_expiry_date: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(item.certificate_insurance_expiry_date),
      certificate_fitness: item.certificate_fitness,
      certificate_fitness_expiry_date: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(item.certificate_fitness_expiry_date),
      certificate_permit: item.certificate_permit,
      certificate_permit_expiry_date: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(item.certificate_permit_expiry_date),
      createdAt: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(item.createdAt)
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/buslayout.service.js":
/*!*******************************************!*\
  !*** ./src/services/buslayout.service.js ***!
  \*******************************************/
/*! exports provided: buslayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buslayoutService", function() { return buslayoutService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");




const buslayoutService = {
  getAll,
  create,
  update,
  deleteBustype,
  tranform,
  find,
  load,
  searchSeat
};
async function load() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("buslayouts");
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("buslayouts/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("buslayouts", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("buslayouts/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function searchSeat(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("buslayouts/searchseat/" + id, {
      params: {
        "scheduleId": Objparams
      }
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("buslayouts/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function deleteBustype(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("buslayouts/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      name: item.name,
      status: item.status == true ? "Active" : "Inactive",
      createdAt: item.createdAt
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/busschedule.service.js":
/*!*********************************************!*\
  !*** ./src/services/busschedule.service.js ***!
  \*********************************************/
/*! exports provided: busScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "busScheduleService", function() { return busScheduleService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");





const busScheduleService = {
  getAll,
  create,
  update,
  remove,
  find,
  status,
  q,
  tranform
};
async function q(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("bus-schedules", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function status(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("bus-schedules/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("bus-schedules/list", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("bus-schedules", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("bus-schedules/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("bus-schedules/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function remove(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("bus-schedules/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      route_name: item.route_name,
      bus_name: item.bus_name,
      departure_time: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getTimeFormat"])(item.departure_time),
      arrival_time: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getTimeFormat"])(item.arrival_time),
      start_to_end: item.start_to_end,
      status: item.status,
      createdAt: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(item.createdAt)
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/bustype.service.js":
/*!*****************************************!*\
  !*** ./src/services/bustype.service.js ***!
  \*****************************************/
/*! exports provided: bustypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bustypeService", function() { return bustypeService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");




const bustypeService = {
  getAll,
  create,
  update,
  deleteBustype,
  tranform,
  find,
  load
};
async function load() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("bustypes");
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("bustypes/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("bustypes", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("bustypes/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("bustypes/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function deleteBustype(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("bustypes/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      name: item.name,
      status: item.status == true ? "Active" : "Inactive",
      createdAt: item.createdAt
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/city.service.js":
/*!**************************************!*\
  !*** ./src/services/city.service.js ***!
  \**************************************/
/*! exports provided: cityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityService", function() { return cityService; });
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");

const cityService = {
  load
};
async function load() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.get("cities");
    return response.data;
  } catch (e) {
    return e.response;
  }
}

/***/ }),

/***/ "./src/services/country.service.js":
/*!*****************************************!*\
  !*** ./src/services/country.service.js ***!
  \*****************************************/
/*! exports provided: countryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryService", function() { return countryService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");




const countryService = {
  getAll,
  create,
  update,
  remove,
  tranform,
  find,
  load,
  fetch
};
async function fetch() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("countries/list");
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function load(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("countries", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("countries/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("countries", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("countries/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("countries/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function remove(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("countries/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      name: item.name,
      code: item.code,
      status: item.status == true ? "Active" : "Inactive",
      createdAt: item.createdAt
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/currency.service.js":
/*!******************************************!*\
  !*** ./src/services/currency.service.js ***!
  \******************************************/
/*! exports provided: currencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyService", function() { return currencyService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");




const currencyService = {
  getAll,
  create,
  update,
  remove,
  tranform,
  find,
  load,
  fetch
};
async function fetch(name) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("currencies/list?name=" + name);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function load() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("currencies");
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("currencies/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("currencies", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("currencies/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("currencies/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function remove(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("currencies/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      name: item.name,
      code: item.code,
      symbol: item.symbol,
      status: item.status == true ? "Active" : "Inactive",
      createdAt: item.createdAt
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/customer.service.js":
/*!******************************************!*\
  !*** ./src/services/customer.service.js ***!
  \******************************************/
/*! exports provided: customerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerService", function() { return customerService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");





const customerService = {
  getAll,
  tranform,
  deleteUser,
  create,
  update,
  find,
  walletHistory,
  bookingHistory,
  q,
  //load,
  isExists
};

// async function load() {
//   try {
//     const response = await baseURL.get("roles");
//     return response.data;
//   } catch (e) {
//     if (e.response.status === 401) {
//       return e.response.data;
//     }
//   }
// }

async function walletHistory(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("users/wallet-histories", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function bookingHistory(customerId, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("bookings/histories/" + customerId, {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("users/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("users/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function isExists(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("users/is-exists", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function q(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("users/q", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(user => {
    selectableItems.push({
      id: i++,
      fullname: user.fullname,
      gender: user.gender,
      email: user.email,
      phone: user.phone,
      mode: user.mode,
      refercode: user.refercode,
      ProfilePic: user.ProfilePic,
      home_address: user.home_address,
      home_lat: user.home_lat,
      home_lng: user.home_lng,
      home_timing: user.home_timing,
      office_timing: user.office_timing,
      office_address: user.office_address,
      office_lat: user.office_lat,
      office_lng: user.office_lng,
      status: user.status,
      createdAt: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(user.createdAt)
    });
  });
  return selectableItems;
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("users", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("users/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function deleteUser(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("users/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

/***/ }),

/***/ "./src/services/dashboard.service.js":
/*!*******************************************!*\
  !*** ./src/services/dashboard.service.js ***!
  \*******************************************/
/*! exports provided: dashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardService", function() { return dashboardService; });
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");
///import baseURL from "../helpers/baseurl";

//import moment from "moment-timezone";

const dashboardService = {
  loadCountData
};
async function loadCountData() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.get("dashboard/count");
    return response.data;
  } catch (e) {
    console.log("dashboard", e);
    return e.response;
  }
}

/***/ }),

/***/ "./src/services/driver.service.js":
/*!****************************************!*\
  !*** ./src/services/driver.service.js ***!
  \****************************************/
/*! exports provided: driverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "driverService", function() { return driverService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");





const driverService = {
  getAll,
  create,
  tranform,
  find,
  update,
  deleteDriver,
  changeStatus,
  q,
  isExists
};
async function isExists(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("drivers/is-exists", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function changeStatus(status, type, id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("drivers/" + id + "/status", {
      status,
      type
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function q(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("drivers/q", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("drivers", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("drivers", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("drivers/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("drivers/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function deleteDriver(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("drivers/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      agents: item.agent_name,
      firstname: item.firstname,
      lastname: item.lastname,
      email: item.email,
      phone: item.phone,
      national_id: item.national_id,
      type: item.type,
      profile_picture: item.picture,
      licence: item.document_licence,
      licence_expiry_date: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(item.licence_expiry_date),
      adhar_card: item.document_adhar_card,
      police_vertification: item.document_police_vertification,
      police_vertification_expiry_date: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(item.police_vertification_expiry_date),
      status: item.status == true ? "Active" : "Inactive",
      createdAt: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(item.createdAt)
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/helper.service.js":
/*!****************************************!*\
  !*** ./src/services/helper.service.js ***!
  \****************************************/
/*! exports provided: helperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helperService", function() { return helperService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");




const helperService = {
  getAll,
  deleteHelper,
  update,
  tranform
};
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("helpers/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("helpers/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function deleteHelper(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("helpers/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      ticket_no: item.ticket_no,
      firstname: item.firstname,
      lastname: item.lastname,
      email: item.email,
      phone: item.phone,
      gender: item.gender,
      helpemail: item.helpemail,
      description: item.description,
      createdAt: item.createdAt
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! exports provided: authService, userService, agentService, locationService, routeService, busService, buslayoutService, bustypeService, driverService, helperService, settingService, timetableService, offerService, passService, currencyService, countryService, roleService, resourceService, bookingService, customerService, dashboardService, cityService, suggestService, paymentService, referralService, uploadService, assignService, walletService, notificationService, permissionService, paymentGatewayService, mapService, busScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/services/auth.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["authService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/services/user.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["userService"]; });

/* harmony import */ var _agent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agent.service */ "./src/services/agent.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "agentService", function() { return _agent_service__WEBPACK_IMPORTED_MODULE_2__["agentService"]; });

/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.service */ "./src/services/location.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationService", function() { return _location_service__WEBPACK_IMPORTED_MODULE_3__["locationService"]; });

/* harmony import */ var _route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route.service */ "./src/services/route.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routeService", function() { return _route_service__WEBPACK_IMPORTED_MODULE_4__["routeService"]; });

/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bus.service */ "./src/services/bus.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "busService", function() { return _bus_service__WEBPACK_IMPORTED_MODULE_5__["busService"]; });

/* harmony import */ var _buslayout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buslayout.service */ "./src/services/buslayout.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buslayoutService", function() { return _buslayout_service__WEBPACK_IMPORTED_MODULE_6__["buslayoutService"]; });

/* harmony import */ var _bustype_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bustype.service */ "./src/services/bustype.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bustypeService", function() { return _bustype_service__WEBPACK_IMPORTED_MODULE_7__["bustypeService"]; });

/* harmony import */ var _driver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./driver.service */ "./src/services/driver.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "driverService", function() { return _driver_service__WEBPACK_IMPORTED_MODULE_8__["driverService"]; });

/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helper.service */ "./src/services/helper.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperService", function() { return _helper_service__WEBPACK_IMPORTED_MODULE_9__["helperService"]; });

/* harmony import */ var _setting_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setting.service */ "./src/services/setting.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "settingService", function() { return _setting_service__WEBPACK_IMPORTED_MODULE_10__["settingService"]; });

/* harmony import */ var _timetable_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timetable.service */ "./src/services/timetable.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timetableService", function() { return _timetable_service__WEBPACK_IMPORTED_MODULE_11__["timetableService"]; });

/* harmony import */ var _offer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./offer.service */ "./src/services/offer.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offerService", function() { return _offer_service__WEBPACK_IMPORTED_MODULE_12__["offerService"]; });

/* harmony import */ var _pass_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pass.service */ "./src/services/pass.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passService", function() { return _pass_service__WEBPACK_IMPORTED_MODULE_13__["passService"]; });

/* harmony import */ var _currency_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./currency.service */ "./src/services/currency.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currencyService", function() { return _currency_service__WEBPACK_IMPORTED_MODULE_14__["currencyService"]; });

/* harmony import */ var _country_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./country.service */ "./src/services/country.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countryService", function() { return _country_service__WEBPACK_IMPORTED_MODULE_15__["countryService"]; });

/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./role.service */ "./src/services/role.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roleService", function() { return _role_service__WEBPACK_IMPORTED_MODULE_16__["roleService"]; });

/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resource.service */ "./src/services/resource.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resourceService", function() { return _resource_service__WEBPACK_IMPORTED_MODULE_17__["resourceService"]; });

/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./booking.service */ "./src/services/booking.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bookingService", function() { return _booking_service__WEBPACK_IMPORTED_MODULE_18__["bookingService"]; });

/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customer.service */ "./src/services/customer.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customerService", function() { return _customer_service__WEBPACK_IMPORTED_MODULE_19__["customerService"]; });

/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard.service */ "./src/services/dashboard.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dashboardService", function() { return _dashboard_service__WEBPACK_IMPORTED_MODULE_20__["dashboardService"]; });

/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./city.service */ "./src/services/city.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cityService", function() { return _city_service__WEBPACK_IMPORTED_MODULE_21__["cityService"]; });

/* harmony import */ var _suggest_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./suggest.service */ "./src/services/suggest.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "suggestService", function() { return _suggest_service__WEBPACK_IMPORTED_MODULE_22__["suggestService"]; });

/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./payment.service */ "./src/services/payment.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paymentService", function() { return _payment_service__WEBPACK_IMPORTED_MODULE_23__["paymentService"]; });

/* harmony import */ var _referral_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./referral.service */ "./src/services/referral.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "referralService", function() { return _referral_service__WEBPACK_IMPORTED_MODULE_24__["referralService"]; });

/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./upload.service */ "./src/services/upload.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadService", function() { return _upload_service__WEBPACK_IMPORTED_MODULE_25__["uploadService"]; });

/* harmony import */ var _assign_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assign.service */ "./src/services/assign.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignService", function() { return _assign_service__WEBPACK_IMPORTED_MODULE_26__["assignService"]; });

/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./wallet.service */ "./src/services/wallet.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "walletService", function() { return _wallet_service__WEBPACK_IMPORTED_MODULE_27__["walletService"]; });

/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./notification.service */ "./src/services/notification.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationService", function() { return _notification_service__WEBPACK_IMPORTED_MODULE_28__["notificationService"]; });

/* harmony import */ var _permission_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./permission.service */ "./src/services/permission.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permissionService", function() { return _permission_service__WEBPACK_IMPORTED_MODULE_29__["permissionService"]; });

/* harmony import */ var _paymentgateway_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./paymentgateway.service */ "./src/services/paymentgateway.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paymentGatewayService", function() { return _paymentgateway_service__WEBPACK_IMPORTED_MODULE_30__["paymentGatewayService"]; });

/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./map.service */ "./src/services/map.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapService", function() { return _map_service__WEBPACK_IMPORTED_MODULE_31__["mapService"]; });

/* harmony import */ var _busschedule_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./busschedule.service */ "./src/services/busschedule.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "busScheduleService", function() { return _busschedule_service__WEBPACK_IMPORTED_MODULE_32__["busScheduleService"]; });



































/***/ }),

/***/ "./src/services/location.service.js":
/*!******************************************!*\
  !*** ./src/services/location.service.js ***!
  \******************************************/
/*! exports provided: locationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationService", function() { return locationService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");





const locationService = {
  getAll,
  tranform,
  create,
  search,
  update,
  deleteLocation,
  find,
  markers,
  searchLocation
};
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("locations/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("locations", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("locations", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("locations/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function deleteLocation(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("locations/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      title: item.title,
      type: item.type,
      address: item.location_address,
      latitude: item.location_lat,
      longitude: item.location_lng,
      status: item.status,
      createdAt: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(item.createdAt)
    });
  });
  return selectableItems;
}
async function markers() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("locations/markers");
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function search(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    //locations/search
    const response = await privateAuth.get("locations/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function searchLocation(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    //locations/search
    const response = await privateAuth.get("locations/search-location", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

/***/ }),

/***/ "./src/services/map.service.js":
/*!*************************************!*\
  !*** ./src/services/map.service.js ***!
  \*************************************/
/*! exports provided: mapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapService", function() { return mapService; });
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");

const mapService = {
  mapData
};
async function mapData(duty_status, search) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.get("map/data?duty_status=" + duty_status + "&search=" + search);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

/***/ }),

/***/ "./src/services/notification.service.js":
/*!**********************************************!*\
  !*** ./src/services/notification.service.js ***!
  \**********************************************/
/*! exports provided: notificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationService", function() { return notificationService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");





const notificationService = {
  create,
  deleteNotification,
  getAll,
  tranform,
  updateStatus
};
async function updateStatus(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("notifications/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("notifications/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("notifications", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function deleteNotification(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("notifications/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      to: item.to,
      user_type: item.user_type,
      days: item.days,
      time: item.time,
      schedule: item.schedule,
      notification_title: item.notification.title,
      notification_body: item.notification.body,
      notification_picture: item.notification.picture,
      createdAt: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(item.createdAt)
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/offer.service.js":
/*!***************************************!*\
  !*** ./src/services/offer.service.js ***!
  \***************************************/
/*! exports provided: offerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offerService", function() { return offerService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");




const offerService = {
  getAll,
  create,
  update,
  deleteOffer,
  tranform,
  find,
  load
};
async function load() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("offers");
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("offers/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("offers", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("offers/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("offers/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function deleteOffer(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("offers/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      name: item.name,
      start_date: item.start_date,
      end_date: item.end_date,
      code: item.code,
      discount: item.discount,
      type: item.type ? item.type : "",
      terms: item.terms,
      picture: item.picture,
      status: item.status == true ? "Active" : "Inactive",
      createdAt: item.createdAt
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/pass.service.js":
/*!**************************************!*\
  !*** ./src/services/pass.service.js ***!
  \**************************************/
/*! exports provided: passService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passService", function() { return passService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");




const passService = {
  getAll,
  create,
  update,
  deletePass,
  tranform,
  find,
  load
};
async function load() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("passes");
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("passes/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("passes", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("passes/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("passes/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function deletePass(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("passes/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      no_of_rides: item.no_of_rides,
      no_of_valid_days: item.no_of_valid_days,
      price_per_km: item.price_per_km,
      discount: item.discount,
      terms: item.terms,
      description: item.description,
      status: item.status == true ? "Active" : "Inactive",
      createdAt: item.createdAt
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/payment.service.js":
/*!*****************************************!*\
  !*** ./src/services/payment.service.js ***!
  \*****************************************/
/*! exports provided: paymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentService", function() { return paymentService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");




//import moment from "moment-timezone";

const paymentService = {
  getAll,
  tranform,
  checkStatus,
  find,
  walletCount
};
async function walletCount(status, start_date, end_date, is_wallet) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get(`payments/count/${status}/${start_date}/${end_date}/${is_wallet}`);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("payments/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function checkStatus(orderId, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("payments/check/" + orderId, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("payments/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      booking_pnr: item.booking_pnr,
      customer_name: item.customer_name,
      customer_phone: item.customer_phone,
      orderId: item.orderId,
      paymentId: item.paymentId,
      amount: item.amount,
      refund_amount: item.refund_amount,
      method: item.method,
      travel_status: item.travel_status,
      is_pass: item.is_pass,
      payment_status: item.payment_status,
      createdAt: item.createdAt
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/paymentgateway.service.js":
/*!************************************************!*\
  !*** ./src/services/paymentgateway.service.js ***!
  \************************************************/
/*! exports provided: paymentGatewayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentGatewayService", function() { return paymentGatewayService; });
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");

const paymentGatewayService = {
  update,
  fetch,
  isEnabled
};
async function isEnabled() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.get("payment-gateways/is-enabled");
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function fetch(site) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.get("payment-gateways/" + site);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(site, Objparams) {
  try {
    console.log("site, Objparams", site, Objparams);
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.patch("payment-gateways/" + site, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

/***/ }),

/***/ "./src/services/permission.service.js":
/*!********************************************!*\
  !*** ./src/services/permission.service.js ***!
  \********************************************/
/*! exports provided: permissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permissionService", function() { return permissionService; });
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");

const permissionService = {
  load
};
async function load() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.get("permissions");
    return response.data;
  } catch (e) {
    return e.response;
  }
}

/***/ }),

/***/ "./src/services/referral.service.js":
/*!******************************************!*\
  !*** ./src/services/referral.service.js ***!
  \******************************************/
/*! exports provided: referralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "referralService", function() { return referralService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");




//import moment from "moment-timezone";

const referralService = {
  getAll,
  transform,
  getSingle
};
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("referrals/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getSingle(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("referrals/cust", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function transform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      customer_name: item.user.firstname + " " + item.user.lastname,
      customer_phone: item.user.phone,
      referral_name: item.referral.firstname + " " + item.user.lastname,
      referral_phone: item.referral.phone,
      income_earned: item.amount,
      created_at: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(item.createdAt)
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/resource.service.js":
/*!******************************************!*\
  !*** ./src/services/resource.service.js ***!
  \******************************************/
/*! exports provided: resourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceService", function() { return resourceService; });
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");

const resourceService = {
  //   getAll,
  //   create,
  //   update,
  //   deleteOffer,
  //   tranform,
  //   find,
  load
};
async function load(role) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.get("resources/" + role);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

/***/ }),

/***/ "./src/services/role.service.js":
/*!**************************************!*\
  !*** ./src/services/role.service.js ***!
  \**************************************/
/*! exports provided: roleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roleService", function() { return roleService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_4__);





const roleService = {
  getAll,
  create,
  update,
  deleteRole,
  tranform,
  find,
  load,
  attachPermission
};
async function attachPermission(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("roles/attach/" + id + "/permissions", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function load() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("roles");
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("roles/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("roles", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("roles/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("roles/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function deleteRole(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("roles/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      name: item.name,
      slug: item.slug,
      createdAt: moment_timezone__WEBPACK_IMPORTED_MODULE_4___default.a.utc(item.createdAt).tz("Asia/Kolkata").format("LLL")
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/route.service.js":
/*!***************************************!*\
  !*** ./src/services/route.service.js ***!
  \***************************************/
/*! exports provided: routeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeService", function() { return routeService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");





const routeService = {
  getAll,
  tranform,
  create,
  find,
  update,
  changeStatus,
  deleteRoute,
  deleteRouteStop,
  load,
  getLocationRoutes,
  formatedData,
  search,
  findStops,
  dataRoutes,
  searchRoute
};
async function dataRoutes() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("routes/data");
    return response.data;
  } catch (e) {
    if (e.response.status === 401) {
      return e.response.data;
    }
  }
}
async function findStops(routeId) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("routes/stops/" + routeId);
    return response.data;
  } catch (e) {
    if (e.response.status === 401) {
      return e.response.data;
    }
  }
}
async function search(name) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("routes/find/" + name);
    return response.data;
  } catch (e) {
    if (e.response.status === 401) {
      return e.response.data;
    }
  }
}
async function load() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("routes");
    return response.data;
  } catch (e) {
    if (e.response.status === 401) {
      return e.response.data;
    }
  }
}
async function changeStatus(status, id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("routes/" + id + "/status", {
      status
    });
    return response.data;
  } catch (e) {
    if (e.response.status === 401) {
      return e.response.data;
    }
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("routes/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    if (e.response.status === 401) {
      return e.response.data;
    }
  }
}
async function searchRoute(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("routes/route-search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    if (e.response.status === 401) {
      return e.response.data;
    }
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("routes", Objparams);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("routes/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("routes/" + id);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}
async function getLocationRoutes(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("routes/" + id + "/options");
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}
async function deleteRoute(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("routes/" + id);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}
async function deleteRouteStop(stopId) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("routes/route-stop/" + stopId);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}
function formatedData(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      title: item.title,
      busname: item.busId,
      location_name: item.locationId ? item.locationId.name : "",
      location_type: item.locationId ? item.locationId.type : "",
      stops: item.routedetails ? item.routedetails : [{}],
      status: item.status
    });
  });
  return selectableItems;
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      title: item.title,
      // type: item.type,
      // address: item.location.address,
      // latitude: item.location.coordinates[1],
      // longitude: item.location.coordinates[0],
      status: item.status,
      createdAt: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(item.createdAt)
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/setting.service.js":
/*!*****************************************!*\
  !*** ./src/services/setting.service.js ***!
  \*****************************************/
/*! exports provided: settingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingService", function() { return settingService; });
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");

const settingService = {
  get,
  find,
  update,
  updateNotification
};
async function get() {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.get("settings/");
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function find(type) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.get("settings/" + type);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.patch("settings/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function updateNotification(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.patch(`settings/${id}/notifications`, Objparams, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

/***/ }),

/***/ "./src/services/suggest.service.js":
/*!*****************************************!*\
  !*** ./src/services/suggest.service.js ***!
  \*****************************************/
/*! exports provided: suggestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestService", function() { return suggestService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");




const suggestService = {
  getAll,
  find,
  transform
};
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("suggests/search", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("suggests/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function transform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      pickup_address: item.pickup_address,
      drop_address: item.drop_address,
      customer_name: item.userId_firstname,
      createdAt: item.createdAt
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/timetable.service.js":
/*!*******************************************!*\
  !*** ./src/services/timetable.service.js ***!
  \*******************************************/
/*! exports provided: timetableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timetableService", function() { return timetableService; });
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");

const timetableService = {
  getAll,
  create,
  update,
  deleteTimeTable,
  find,
  changeStatus
};
async function changeStatus(status, id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.patch("timetables/" + id + "/status", {
      status
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.get("timetables", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.post("timetables", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.patch("timetables/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.get("timetables/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function deleteTimeTable(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.delete("timetables/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

/***/ }),

/***/ "./src/services/token.service.js":
/*!***************************************!*\
  !*** ./src/services/token.service.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class TokenService {
  getLocalRefreshToken() {
    return localStorage.getItem("refreshToken");
  }
  getLocalAccessToken() {
    return localStorage.getItem("accessToken");
  }
  updateLocalAccessToken(accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }
  updateLocalRefreshToken(refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
  }
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
  setUser(user) {
    // console.log(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
  }
  setRole(role) {
    localStorage.setItem("role", role);
  }
  getRole() {
    return localStorage.getItem("role");
  }
  setLocalRefreshToken(refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
  }
  setLocalAccessToken(accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }
  removeUser() {
    localStorage.removeItem("user");
  }
  removeRole() {
    localStorage.removeItem("role");
  }
  removeAccessToken() {
    localStorage.removeItem("accessToken");
  }
  removeRefreshToken() {
    localStorage.removeItem("refreshToken");
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new TokenService());

/***/ }),

/***/ "./src/services/upload.service.js":
/*!****************************************!*\
  !*** ./src/services/upload.service.js ***!
  \****************************************/
/*! exports provided: uploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadService", function() { return uploadService; });
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");

//import moment from "moment-timezone";

const uploadService = {
  store,
  remove
};
async function store(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.post("uploads/store", Objparams);
    console.log("response ", response);
    return response.data;
    //return Objparams;
  } catch (e) {
    return e.response.data;
  }
}
async function remove(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.delete("uploads/delete", Objparams);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

/***/ }),

/***/ "./src/services/user.service.js":
/*!**************************************!*\
  !*** ./src/services/user.service.js ***!
  \**************************************/
/*! exports provided: userService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return userService; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");





const userService = {
  getAll,
  tranform,
  create,
  changeStatus,
  update,
  find,
  deleteUser
};
async function find(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("auth/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function changeStatus(status, role, id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("auth/" + id + "/status", {
      status,
      role
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    //Objparams.role = "agent";
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.get("auth", {
      params: Objparams
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.post("auth", Objparams);
    console.log("response ", response);
    return response.data;
    //return Objparams;
  } catch (e) {
    return e.response;
  }
}
async function update(id, Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.patch("auth/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function deleteUser(id) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const response = await privateAuth.delete("auth/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach(item => {
    selectableItems.push({
      id: i++,
      profile_picture: item.picture,
      firstname: item.firstname,
      lastname: item.lastname,
      email: item.email,
      phone: item.phone,
      city: item.city,
      role: item.role,
      address_1: item.address_1,
      address_2: item.address_2,
      pincode: item.pincode,
      status: item.is_active,
      last_login: item.last_login,
      createdAt: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(item.createdAt)
    });
  });
  return selectableItems;
}

/***/ }),

/***/ "./src/services/wallet.service.js":
/*!****************************************!*\
  !*** ./src/services/wallet.service.js ***!
  \****************************************/
/*! exports provided: walletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walletService", function() { return walletService; });
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");

const walletService = {
  create
};
async function create(Objparams) {
  try {
    const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const response = await privateAuth.post("wallets", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

/***/ }),

/***/ "./src/store/fetchUsers.js":
/*!*********************************!*\
  !*** ./src/store/fetchUsers.js ***!
  \*********************************/
/*! exports provided: fetchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _helpers_authHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/authHook */ "./src/helpers/authHook.js");



const fetchUsers = Object(pinia__WEBPACK_IMPORTED_MODULE_1__["defineStore"])("fetch", {
  state: () => ({
    getUser: {},
    getName: "",
    userRole: "",
    userRoleId: "",
    oneUser: {}
  }),
  actions: {
    async fetchAll() {
      const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_2__["default"])();
      try {
        const users = await privateAuth.get("/user");
        return users.data.users;
      } catch (error) {
        var _error$response;
        if (error !== null && error !== void 0 && (_error$response = error.response) !== null && _error$response !== void 0 && (_error$response = _error$response.data) !== null && _error$response !== void 0 && _error$response.err) {
          alert(error.response.data.err);
        } else alert(error.message);
      }
    },
    async showUser(userId) {
      const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_2__["default"])();
      try {
        const showUser = await privateAuth.get(`/auth/${userId}`);
        this.getUser = showUser.data.user;
        this.getName = showUser.data.fullname;
        this.userRole = showUser.data.user.role;
        return showUser.data.user;
      } catch (error) {
        var _error$response2;
        if (error !== null && error !== void 0 && (_error$response2 = error.response) !== null && _error$response2 !== void 0 && (_error$response2 = _error$response2.data) !== null && _error$response2 !== void 0 && _error$response2.err) {
          alert(error.response.data.err);
        } else alert(error.message);
      }
    },
    async getListUser(user) {
      const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_2__["default"])();
      try {
        const showUser = await privateAuth.get(`/user/${user}`);
        let fullname = showUser.data.fullname;
        this.oneUser = {
          ...showUser.data.user,
          fullname
        };
        return showUser.data.user;
      } catch (error) {
        var _error$response3;
        if (error !== null && error !== void 0 && (_error$response3 = error.response) !== null && _error$response3 !== void 0 && (_error$response3 = _error$response3.data) !== null && _error$response3 !== void 0 && _error$response3.err) {
          alert(error.response.data.err);
        } else alert(error.message);
      }
    },
    async updateUser(user, data) {
      const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_2__["default"])();
      try {
        const updateUser = await privateAuth.put(`/auth/${user}`, data);
        this.getUser = updateUser.data.updatedInfo;
        this.getName = updateUser.data.fullname;
        this.$router.push({
          name: "profile"
        });
        //alert("User details updated!!");
        this.$toast.open({
          message: "Update profile successfully",
          type: "success",
          position: "top-right",
          duration: 3000
        });
      } catch (error) {
        var _error$response4;
        if (error !== null && error !== void 0 && (_error$response4 = error.response) !== null && _error$response4 !== void 0 && (_error$response4 = _error$response4.data) !== null && _error$response4 !== void 0 && _error$response4.err) {
          alert(error.response.data.err);
        } else alert(error.message);
      }
    },
    async delUser(user) {
      const privateAuth = Object(_helpers_authHook__WEBPACK_IMPORTED_MODULE_2__["default"])();
      try {
        const delUser = await privateAuth.delete(`/user/${user}`);
        this.fetchAll();
        alert(delUser.data.message);
      } catch (error) {
        var _error$response5;
        if (error !== null && error !== void 0 && (_error$response5 = error.response) !== null && _error$response5 !== void 0 && (_error$response5 = _error$response5.data) !== null && _error$response5 !== void 0 && _error$response5.err) {
          alert(error.response.data.err);
        } else alert(error.message);
      }
    }
  },
  persist: true
});

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../router */ "./src/router/index.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var pinia_plugin_persistedstate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia-plugin-persistedstate */ "./node_modules/pinia-plugin-persistedstate/dist/index.js");



const pinia = Object(pinia__WEBPACK_IMPORTED_MODULE_1__["createPinia"])();
pinia.use(pinia_plugin_persistedstate__WEBPACK_IMPORTED_MODULE_2__["default"]);
//add router to pinia

pinia.use(({
  store
}) => {
  return store.$router = _router__WEBPACK_IMPORTED_MODULE_0__["default"];
});
/* harmony default export */ __webpack_exports__["default"] = (pinia);

/***/ }),

/***/ "./src/store/refToken.js":
/*!*******************************!*\
  !*** ./src/store/refToken.js ***!
  \*******************************/
/*! exports provided: refreshAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshAuth", function() { return refreshAuth; });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/auth */ "./src/helpers/auth.js");
/* harmony import */ var _fetchUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchUsers */ "./src/store/fetchUsers.js");
/* harmony import */ var _useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useAuth */ "./src/store/useAuth.js");




const refreshAuth = Object(pinia__WEBPACK_IMPORTED_MODULE_0__["defineStore"])("refreshId", {
  state: () => {
    return {
      refID: ""
    };
  },
  actions: {
    async refresh() {
      try {
        const token = Object(_useAuth__WEBPACK_IMPORTED_MODULE_3__["useAuth"])();
        const fetchUser = Object(_fetchUsers__WEBPACK_IMPORTED_MODULE_2__["fetchUsers"])();
        const email = fetchUser.getUser.email;
        const refreshToken = token.authToken.refreshToken;
        //  console.log("refresh email", email, "refreshToken", refreshToken);
        const refresh = await _helpers_auth__WEBPACK_IMPORTED_MODULE_1__["baseApi"].post("/auth/refresh-token", {
          email,
          refreshToken
        });
        fetchUser.getUser = refresh.data.user;
        fetchUser.getName = `${refresh.data.user.firstname} ${refresh.data.user.lastname}`;
        fetchUser.userRole = refresh.data.user.role;
        fetchUser.userRoleId = refresh.data.user.roleId;
        token.authToken = refresh.data.token;
        this.refID = refresh.data.token.accessToken;
        token.isAuth = true;
        return refresh.data.token.accessToken;
      } catch (error) {
        var _error$response;
        if (error !== null && error !== void 0 && (_error$response = error.response) !== null && _error$response !== void 0 && (_error$response = _error$response.data) !== null && _error$response !== void 0 && _error$response.message) {
          Object(_useAuth__WEBPACK_IMPORTED_MODULE_3__["useAuth"])().signOut();
        } else Object(_useAuth__WEBPACK_IMPORTED_MODULE_3__["useAuth"])().signOut();
      }
    }
  }
});

/***/ }),

/***/ "./src/store/useApp.js":
/*!*****************************!*\
  !*** ./src/store/useApp.js ***!
  \*****************************/
/*! exports provided: useApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApp", function() { return useApp; });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/auth */ "./src/helpers/auth.js");


const useApp = Object(pinia__WEBPACK_IMPORTED_MODULE_0__["defineStore"])("useApp", {
  state: () => ({
    appName: "",
    appShortName: "",
    appLogo: "",
    appEmail: "",
    appAddress: "",
    appPhone: "",
    timezone: "",
    googleKey: "",
    dateFormat: "",
    timeFormat: "",
    defaultCurrency: "",
    defaultCountry: ""
  }),
  actions: {
    updateApp(obj) {
      this.appName = obj.appName;
      this.appShortName = obj.appShortName;
      this.appLogo = obj.appLogo;
      this.appEmail = obj.appEmail;
      this.appAddress = obj.appAddress;
      this.appPhone = obj.appPhone;
      this.defaultCountry = obj.defaultCountry;
      this.defaultCurrency = obj.defaultCurrency;
      this.timezone = obj.timezone;
      this.googleKey = obj.googleKey;
      this.dateFormat = obj.dateFormat;
      this.timeFormat = obj.timeFormat;
    },
    async getApp() {
      try {
        const {
          data
        } = await _helpers_auth__WEBPACK_IMPORTED_MODULE_1__["baseApi"].get("/settings/app/general");
        this.appName = data.appName;
        this.appShortName = data.appShortName;
        this.appLogo = data.appLogo;
        this.appEmail = data.appEmail;
        this.appAddress = data.appAddress;
        this.appPhone = data.appPhone;
        this.timezone = data.timezone;
        this.googleKey = data.googleKey;
        this.dateFormat = data.dateFormat;
        this.timeFormat = data.timeFormat;
        this.defaultCountry = data.defaultCountry;
        this.defaultCurrency = data.defaultCurrency;
      } catch (error) {
        var _error$response;
        if (error !== null && error !== void 0 && (_error$response = error.response) !== null && _error$response !== void 0 && (_error$response = _error$response.data) !== null && _error$response !== void 0 && _error$response.message) {
          alert(error.response.data.message);
        } else alert(error.message);
      }
    }
  },
  persist: true
});

/***/ }),

/***/ "./src/store/useAuth.js":
/*!******************************!*\
  !*** ./src/store/useAuth.js ***!
  \******************************/
/*! exports provided: useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/auth */ "./src/helpers/auth.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/services/index.js");
/* harmony import */ var _fetchUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchUsers */ "./src/store/fetchUsers.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");





const useAuth = Object(pinia__WEBPACK_IMPORTED_MODULE_0__["defineStore"])("userAuth", {
  state: () => ({
    authToken: {},
    isAuth: false,
    getRolePermissions: [],
    general: {}
  }),
  getters: {},
  actions: {
    setTimezone(timezone) {
      this.general.timezone = timezone;
    },
    async UacPermission(roleId) {
      try {
        const getPerms = await _helpers_auth__WEBPACK_IMPORTED_MODULE_1__["authApi"].post("/auth/access", {
          roleId
        });
        this.getRolePermissions = getPerms.data.permissions;
        this.general = getPerms.data.general;
      } catch (error) {
        var _error$response;
        if (error !== null && error !== void 0 && (_error$response = error.response) !== null && _error$response !== void 0 && (_error$response = _error$response.data) !== null && _error$response !== void 0 && _error$response.message) {
          this.signOut();
        } else alert(error.message);
      }
    },
    async UserLogin(email, password) {
      try {
        const getUser = Object(_fetchUsers__WEBPACK_IMPORTED_MODULE_3__["fetchUsers"])();
        const response = await _services__WEBPACK_IMPORTED_MODULE_2__["authService"].login(email, password);
        this.authToken = response.token;
        let user = await Object(jwt_decode__WEBPACK_IMPORTED_MODULE_4__["default"])(this.authToken.accessToken);
        await this.UacPermission(user.roleId);
        if (this.getRolePermissions.length > 0) {
          await getUser.showUser(user.sub);
          getUser.userRoleId = user.roleId;
          this.isAuth = true;
          this.$router.replace({
            name: "dashboard"
          });
          //   alert("LOGGED IN!!");
        }
      } catch (error) {
        var _error$response2;
        if (error !== null && error !== void 0 && (_error$response2 = error.response) !== null && _error$response2 !== void 0 && (_error$response2 = _error$response2.data) !== null && _error$response2 !== void 0 && _error$response2.message) {
          alert(error.response.data.message);
        } else alert(error.message);
      }
    },
    // async UserReg(data) {
    //   try {
    //     const getUser = fetchUsers();
    //     const response = await baseURL.post("/register", {
    //       data: data,
    //     });

    //     this.authToken = response.data.authToken;
    //     let user = await jwtDecode(this.authToken);
    //     const getPer_ = await this.UacPermission(user.role, user.Email);
    //     if (this.getRolePermissions.length > 0) {
    //       await getUser.showUser(user.Email);
    //       getUser.userRole = user.role;
    //       this.isAuth = true;
    //       this.$router.replace({ name: "home", params: { user: user.Email } });
    //       alert("USER CREATED!!");
    //     }
    //   } catch (error) {
    //     if (error?.response?.data?.message) {
    //       alert(error.response.data.message);
    //     } else alert(error.message);
    //   }
    // },
    async signOut() {
      try {
        const getUser = Object(_fetchUsers__WEBPACK_IMPORTED_MODULE_3__["fetchUsers"])();
        // const response = await baseURL.post("/logout");
        getUser.$reset();
        this.$reset();
        this.$router.replace({
          path: "/auth/login"
        });
      } catch (error) {
        var _error$response3;
        if (error !== null && error !== void 0 && (_error$response3 = error.response) !== null && _error$response3 !== void 0 && (_error$response3 = _error$response3.data) !== null && _error$response3 !== void 0 && _error$response3.message) {
          alert(error.response.data.message);
        } else alert(error.message);
      }
    }
  },
  persist: true
});

/***/ }),

/***/ "./src/views/PrivacyPolicy.vue":
/*!*************************************!*\
  !*** ./src/views/PrivacyPolicy.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrivacyPolicy_vue_vue_type_template_id_92a58be0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrivacyPolicy.vue?vue&type=template&id=92a58be0&scoped=true */ "./src/views/PrivacyPolicy.vue?vue&type=template&id=92a58be0&scoped=true");
/* harmony import */ var _PrivacyPolicy_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrivacyPolicy.vue?vue&type=script&setup=true&lang=js */ "./src/views/PrivacyPolicy.vue?vue&type=script&setup=true&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _PrivacyPolicy_vue_vue_type_style_index_0_id_92a58be0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrivacyPolicy.vue?vue&type=style&index=0&id=92a58be0&lang=scss&scoped=true */ "./src/views/PrivacyPolicy.vue?vue&type=style&index=0&id=92a58be0&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PrivacyPolicy_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrivacyPolicy_vue_vue_type_template_id_92a58be0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrivacyPolicy_vue_vue_type_template_id_92a58be0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "92a58be0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/PrivacyPolicy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/PrivacyPolicy.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************!*\
  !*** ./src/views/PrivacyPolicy.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./PrivacyPolicy.vue?vue&type=script&setup=true&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/PrivacyPolicy.vue?vue&type=script&setup=true&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/PrivacyPolicy.vue?vue&type=style&index=0&id=92a58be0&lang=scss&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/views/PrivacyPolicy.vue?vue&type=style&index=0&id=92a58be0&lang=scss&scoped=true ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_style_index_0_id_92a58be0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./PrivacyPolicy.vue?vue&type=style&index=0&id=92a58be0&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/PrivacyPolicy.vue?vue&type=style&index=0&id=92a58be0&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_style_index_0_id_92a58be0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_style_index_0_id_92a58be0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_style_index_0_id_92a58be0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_style_index_0_id_92a58be0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/PrivacyPolicy.vue?vue&type=template&id=92a58be0&scoped=true":
/*!*******************************************************************************!*\
  !*** ./src/views/PrivacyPolicy.vue?vue&type=template&id=92a58be0&scoped=true ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_template_id_92a58be0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./PrivacyPolicy.vue?vue&type=template&id=92a58be0&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/PrivacyPolicy.vue?vue&type=template&id=92a58be0&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_template_id_92a58be0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_template_id_92a58be0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/TermAndCondition.vue":
/*!****************************************!*\
  !*** ./src/views/TermAndCondition.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TermAndCondition_vue_vue_type_template_id_eba7d86c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TermAndCondition.vue?vue&type=template&id=eba7d86c&scoped=true */ "./src/views/TermAndCondition.vue?vue&type=template&id=eba7d86c&scoped=true");
/* harmony import */ var _TermAndCondition_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TermAndCondition.vue?vue&type=script&setup=true&lang=js */ "./src/views/TermAndCondition.vue?vue&type=script&setup=true&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _TermAndCondition_vue_vue_type_style_index_0_id_eba7d86c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TermAndCondition.vue?vue&type=style&index=0&id=eba7d86c&lang=scss&scoped=true */ "./src/views/TermAndCondition.vue?vue&type=style&index=0&id=eba7d86c&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TermAndCondition_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TermAndCondition_vue_vue_type_template_id_eba7d86c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _TermAndCondition_vue_vue_type_template_id_eba7d86c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eba7d86c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/TermAndCondition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/TermAndCondition.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************!*\
  !*** ./src/views/TermAndCondition.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TermAndCondition_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./TermAndCondition.vue?vue&type=script&setup=true&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/TermAndCondition.vue?vue&type=script&setup=true&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TermAndCondition_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/TermAndCondition.vue?vue&type=style&index=0&id=eba7d86c&lang=scss&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./src/views/TermAndCondition.vue?vue&type=style&index=0&id=eba7d86c&lang=scss&scoped=true ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TermAndCondition_vue_vue_type_style_index_0_id_eba7d86c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./TermAndCondition.vue?vue&type=style&index=0&id=eba7d86c&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/TermAndCondition.vue?vue&type=style&index=0&id=eba7d86c&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TermAndCondition_vue_vue_type_style_index_0_id_eba7d86c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TermAndCondition_vue_vue_type_style_index_0_id_eba7d86c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TermAndCondition_vue_vue_type_style_index_0_id_eba7d86c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TermAndCondition_vue_vue_type_style_index_0_id_eba7d86c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/TermAndCondition.vue?vue&type=template&id=eba7d86c&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/views/TermAndCondition.vue?vue&type=template&id=eba7d86c&scoped=true ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TermAndCondition_vue_vue_type_template_id_eba7d86c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./TermAndCondition.vue?vue&type=template&id=eba7d86c&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/TermAndCondition.vue?vue&type=template&id=eba7d86c&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TermAndCondition_vue_vue_type_template_id_eba7d86c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TermAndCondition_vue_vue_type_template_id_eba7d86c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/auth/change.vue":
/*!***********************************!*\
  !*** ./src/views/auth/change.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _change_vue_vue_type_template_id_c9d31366_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change.vue?vue&type=template&id=c9d31366&scoped=true&lang=html */ "./src/views/auth/change.vue?vue&type=template&id=c9d31366&scoped=true&lang=html");
/* harmony import */ var _change_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change.vue?vue&type=script&lang=js */ "./src/views/auth/change.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _change_vue_vue_type_style_index_0_id_c9d31366_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change.vue?vue&type=style&index=0&id=c9d31366&scoped=true&lang=scss */ "./src/views/auth/change.vue?vue&type=style&index=0&id=c9d31366&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _change_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _change_vue_vue_type_template_id_c9d31366_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _change_vue_vue_type_template_id_c9d31366_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c9d31366",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/auth/change.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/auth/change.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/views/auth/change.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./change.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/change.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/auth/change.vue?vue&type=style&index=0&id=c9d31366&scoped=true&lang=scss":
/*!********************************************************************************************!*\
  !*** ./src/views/auth/change.vue?vue&type=style&index=0&id=c9d31366&scoped=true&lang=scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_vue_vue_type_style_index_0_id_c9d31366_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./change.vue?vue&type=style&index=0&id=c9d31366&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/change.vue?vue&type=style&index=0&id=c9d31366&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_vue_vue_type_style_index_0_id_c9d31366_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_vue_vue_type_style_index_0_id_c9d31366_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_vue_vue_type_style_index_0_id_c9d31366_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_vue_vue_type_style_index_0_id_c9d31366_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/auth/change.vue?vue&type=template&id=c9d31366&scoped=true&lang=html":
/*!***************************************************************************************!*\
  !*** ./src/views/auth/change.vue?vue&type=template&id=c9d31366&scoped=true&lang=html ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_vue_vue_type_template_id_c9d31366_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./change.vue?vue&type=template&id=c9d31366&scoped=true&lang=html */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/change.vue?vue&type=template&id=c9d31366&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_vue_vue_type_template_id_c9d31366_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_vue_vue_type_template_id_c9d31366_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/auth/forget.vue":
/*!***********************************!*\
  !*** ./src/views/auth/forget.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forget_vue_vue_type_template_id_123843ec_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget.vue?vue&type=template&id=123843ec&scoped=true&lang=html */ "./src/views/auth/forget.vue?vue&type=template&id=123843ec&scoped=true&lang=html");
/* harmony import */ var _forget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget.vue?vue&type=script&lang=js */ "./src/views/auth/forget.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _forget_vue_vue_type_style_index_0_id_123843ec_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forget.vue?vue&type=style&index=0&id=123843ec&scoped=true&lang=scss */ "./src/views/auth/forget.vue?vue&type=style&index=0&id=123843ec&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _forget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _forget_vue_vue_type_template_id_123843ec_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _forget_vue_vue_type_template_id_123843ec_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "123843ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/auth/forget.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/auth/forget.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/views/auth/forget.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./forget.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/forget.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/auth/forget.vue?vue&type=style&index=0&id=123843ec&scoped=true&lang=scss":
/*!********************************************************************************************!*\
  !*** ./src/views/auth/forget.vue?vue&type=style&index=0&id=123843ec&scoped=true&lang=scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_style_index_0_id_123843ec_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./forget.vue?vue&type=style&index=0&id=123843ec&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/forget.vue?vue&type=style&index=0&id=123843ec&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_style_index_0_id_123843ec_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_style_index_0_id_123843ec_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_style_index_0_id_123843ec_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_style_index_0_id_123843ec_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/auth/forget.vue?vue&type=template&id=123843ec&scoped=true&lang=html":
/*!***************************************************************************************!*\
  !*** ./src/views/auth/forget.vue?vue&type=template&id=123843ec&scoped=true&lang=html ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_template_id_123843ec_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./forget.vue?vue&type=template&id=123843ec&scoped=true&lang=html */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/forget.vue?vue&type=template&id=123843ec&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_template_id_123843ec_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_template_id_123843ec_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/auth/login.vue":
/*!**********************************!*\
  !*** ./src/views/auth/login.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_fcf1ae48_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=fcf1ae48&scoped=true&lang=html */ "./src/views/auth/login.vue?vue&type=template&id=fcf1ae48&scoped=true&lang=html");
/* harmony import */ var _login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js */ "./src/views/auth/login.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_fcf1ae48_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_fcf1ae48_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fcf1ae48",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/auth/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/auth/login.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/views/auth/login.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/login.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/auth/login.vue?vue&type=template&id=fcf1ae48&scoped=true&lang=html":
/*!**************************************************************************************!*\
  !*** ./src/views/auth/login.vue?vue&type=template&id=fcf1ae48&scoped=true&lang=html ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_fcf1ae48_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=fcf1ae48&scoped=true&lang=html */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/login.vue?vue&type=template&id=fcf1ae48&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_fcf1ae48_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_fcf1ae48_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/mainview.vue":
/*!********************************!*\
  !*** ./src/views/mainview.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainview_vue_vue_type_template_id_0a40daf8_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainview.vue?vue&type=template&id=0a40daf8&scoped=true&lang=html */ "./src/views/mainview.vue?vue&type=template&id=0a40daf8&scoped=true&lang=html");
/* harmony import */ var _mainview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainview.vue?vue&type=script&lang=js */ "./src/views/mainview.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _mainview_vue_vue_type_style_index_0_id_0a40daf8_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainview.vue?vue&type=style&index=0&id=0a40daf8&scoped=true&lang=scss */ "./src/views/mainview.vue?vue&type=style&index=0&id=0a40daf8&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mainview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _mainview_vue_vue_type_template_id_0a40daf8_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _mainview_vue_vue_type_template_id_0a40daf8_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0a40daf8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/mainview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/mainview.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/views/mainview.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./mainview.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mainview.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/mainview.vue?vue&type=style&index=0&id=0a40daf8&scoped=true&lang=scss":
/*!*****************************************************************************************!*\
  !*** ./src/views/mainview.vue?vue&type=style&index=0&id=0a40daf8&scoped=true&lang=scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainview_vue_vue_type_style_index_0_id_0a40daf8_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./mainview.vue?vue&type=style&index=0&id=0a40daf8&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mainview.vue?vue&type=style&index=0&id=0a40daf8&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainview_vue_vue_type_style_index_0_id_0a40daf8_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainview_vue_vue_type_style_index_0_id_0a40daf8_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainview_vue_vue_type_style_index_0_id_0a40daf8_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainview_vue_vue_type_style_index_0_id_0a40daf8_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/mainview.vue?vue&type=template&id=0a40daf8&scoped=true&lang=html":
/*!************************************************************************************!*\
  !*** ./src/views/mainview.vue?vue&type=template&id=0a40daf8&scoped=true&lang=html ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainview_vue_vue_type_template_id_0a40daf8_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./mainview.vue?vue&type=template&id=0a40daf8&scoped=true&lang=html */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mainview.vue?vue&type=template&id=0a40daf8&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainview_vue_vue_type_template_id_0a40daf8_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainview_vue_vue_type_template_id_0a40daf8_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map