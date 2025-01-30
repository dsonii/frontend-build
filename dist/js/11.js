(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/PrivacyPolicy.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/settings/PrivacyPolicy.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "term",
  data() {
    return {
      form: {
        type: "privacypolicy",
        id: "",
        privacypolicy: ""
      },
      submitted: false
    };
  },
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_2__["VueEditor"]
  },
  methods: {
    async getSetting() {
      try {
        const response = await _services__WEBPACK_IMPORTED_MODULE_3__["settingService"].find("privacypolicy");
        if (response.status) {
          this.form = response.data;
        }
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 5000
        });
      }
    },
    async updateTerms() {
      try {
        this.submitted = true;
        const response = await _services__WEBPACK_IMPORTED_MODULE_3__["settingService"].update(this.form.id, this.form);
        if (response.status) {
          this.submitted = false;
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 2000
            // all of other options may go here
          });
        }
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 4000
        });
      }
    }
  },
  mounted() {
    this.getSetting();
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/general.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/settings/general.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_useApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/useApp */ "./src/store/useApp.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var timezones_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! timezones-list */ "./node_modules/timezones-list/dist/index.js");
/* harmony import */ var timezones_list__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(timezones_list__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vue_select_src_scss_vue_select_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-select/src/scss/vue-select.scss */ "./node_modules/vue-select/src/scss/vue-select.scss");
/* harmony import */ var vue_select_src_scss_vue_select_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_select_src_scss_vue_select_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _helpers_dateFormat_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helpers/dateFormat.json */ "./src/helpers/dateFormat.json");
var _helpers_dateFormat_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../helpers/dateFormat.json */ "./src/helpers/dateFormat.json", 1);
/* harmony import */ var _helpers_timeFormat_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../helpers/timeFormat.json */ "./src/helpers/timeFormat.json");
var _helpers_timeFormat_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../helpers/timeFormat.json */ "./src/helpers/timeFormat.json", 1);














/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_6__["validationMixin"]],
  name: "general",
  data() {
    return {
      submitted: false,
      timezones: (timezones_list__WEBPACK_IMPORTED_MODULE_8___default()),
      general: {
        id: "",
        name: "",
        logo: "",
        email: "",
        address: "",
        phone: "",
        default_country: "",
        default_currency: "",
        timezone: "",
        date_format: "",
        time_format: "",
        google_key: "",
        tax: "",
        fee: "",
        api_base_url: "",
        background_location_update_interval: 1000,
        driver_online_location_update_interval: 1000,
        prebooking_time: 30,
        max_distance: 2000
      },
      dateFormat: _helpers_dateFormat_json__WEBPACK_IMPORTED_MODULE_12__,
      timeFormat: _helpers_timeFormat_json__WEBPACK_IMPORTED_MODULE_13__,
      countries: [],
      currencies: []
    };
  },
  components: {
    vSelect: (vue_select__WEBPACK_IMPORTED_MODULE_9___default())
  },
  validations: {
    general: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["email"]
      },
      phone: {
        numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["numeric"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["minLength"])(10)
      },
      tax: {
        numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["numeric"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["minLength"])(1)
      },
      default_country: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
      }
    }
  },
  methods: {
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_4__["mapActions"])(_store_useApp__WEBPACK_IMPORTED_MODULE_5__["useApp"], ["updateApp"]),
    async loadCountries() {
      const response = await _services__WEBPACK_IMPORTED_MODULE_3__["countryService"].fetch();
      this.countries = response.data;
    },
    async fetchCurrency() {
      const response = await _services__WEBPACK_IMPORTED_MODULE_3__["currencyService"].fetch();
      this.currencies = response.data;
    },
    searchTimezone(search, loading) {
      if (search.length) {
        loading(true);
        this.search(loading, search, this);
      }
    },
    search: lodash__WEBPACK_IMPORTED_MODULE_11___default.a.debounce(async (loading, search, vm) => {
      try {
        console.log("search : ", search);
        const foundTimezones = undefined.timezones.filter(timezone => {
          const label = timezone.tzCode.toLowerCase();
          const query = search.toLowerCase();
          for (let i = 0; i < query.length; i++) {
            if (!label.includes(query[i])) {
              return false;
            }
          }
          return true;
        });
        console.log("foundTimezones", foundTimezones);
        if (foundTimezones.length > 0) {
          vm.options = foundTimezones;
        } else {
          vm.options = ""; // Return null if no matching labels are found
        }
        loading(false);
      } catch (err) {
        console.log("err", err);
      }
    }, 350),
    validateState(name) {
      const {
        $dirty,
        $error
      } = this.$v.general[name];
      return $dirty ? !$error : null;
    },
    onFileChange(e, fileTitle) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0], fileTitle);
    },
    createImage(file, fileTitle) {
      // var picture = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = e => {
        vm.general[fileTitle] = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (titlename) {
      this.general[titlename] = "";
    },
    async getSetting() {
      try {
        const response = await _services__WEBPACK_IMPORTED_MODULE_3__["settingService"].find("general");
        if (response.status) {
          this.general = response.data;
          // this.general.google_key = response.data.google_key.replace(
          //   /[a-zA-Z]/g,
          //   "X"
          // );
        }
      } catch (e) {
        console.log("params", e);
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 5000
        });
      }
    },
    async updateGeneral() {
      try {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitted = false;
          return;
        }
        const response = await _services__WEBPACK_IMPORTED_MODULE_3__["settingService"].update(this.general.id, {
          type: "general",
          general: this.general
        });
        if (response.status) {
          this.updateApp(response.data);
          this.submitted = false;
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 2000
            // all of other options may go here
          });
        }
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 4000
        });
      }
    }
  },
  mounted() {
    this.getSetting();
    this.loadCountries();
    this.fetchCurrency();
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/notification.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/settings/notification.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_3__["validationMixin"]],
  name: "notification",
  data() {
    return {
      form: {
        id: "",
        otp_validation_via: false,
        firebase_database_url: "",
        firebase_key: null
        //apple_key: "",
        // apple_key_name: "",
        // apple_key_id: "",
        // apple_team_id: "",
      },
      submitted: false
    };
  },
  validations: {
    form: {
      otp_validation_via: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      firebase_database_url: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      }
      // apple_key_id: { required },
      // apple_team_id: { required },
      // apple_key: { required },
    }
  },
  methods: {
    validateState(name) {
      const {
        $dirty,
        $error
      } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    async getSetting() {
      try {
        const response = await _services__WEBPACK_IMPORTED_MODULE_2__["settingService"].find("notifications");
        if (response.status) {
          this.form = response.data;
        }
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 5000
        });
      }
    },
    async updateNotification() {
      try {
        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
        this.submitted = true;
        const formData = new FormData();
        formData.append("type", "notifications");
        formData.append("otp_validation_via", this.form.otp_validation_via);
        formData.append("apple_key", this.form.apple_key);
        formData.append("apple_key_id", this.form.apple_key_id);
        formData.append("apple_team_id", this.form.apple_team_id);
        formData.append("firebase_database_url", this.form.firebase_database_url);
        formData.append("firebase_key", this.form.firebase_key);
        const response = await _services__WEBPACK_IMPORTED_MODULE_2__["settingService"].updateNotification(this.form.id, formData);
        if (response.status) {
          this.submitted = false;
          this.getSetting();
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 2000
            // all of other options may go here
          });
        }
      } catch (e) {
        this.submitted = false;
        this.$toast.open({
          message: e.message,
          type: "error",
          position: "top-right",
          duration: 4000
        });
      }
    }
  },
  mounted() {
    this.getSetting();
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/refund.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/settings/refund.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_4__["validationMixin"]],
  name: "refund",
  data() {
    return {
      typeOptions: [{
        text: "Percentage",
        value: "percentage"
      }, {
        text: "Fixed",
        value: "number"
      }],
      customToolbar: [["bold", "italic", "underline"], [{
        list: "ordered"
      }, {
        list: "bullet"
      }], ["code-block"]],
      submitted: false,
      form: {
        type: "refunds",
        refunds: {
          id: "",
          amount: "",
          type: "",
          contents: ""
        }
      }
    };
  },
  validations: {
    form: {
      refunds: {
        type: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
        },
        amount: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"],
          numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["numeric"]
        }
      }
    }
  },
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_2__["VueEditor"]
  },
  methods: {
    validateState(name) {
      const {
        $dirty,
        $error
      } = this.$v.form.refunds[name];
      return $dirty ? !$error : null;
    },
    async getSetting() {
      try {
        const response = await _services__WEBPACK_IMPORTED_MODULE_3__["settingService"].find("refunds");
        if (response.status) {
          this.form.refunds = response.data;
        }
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 5000
        });
      }
    },
    async updatePayment() {
      try {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitted = false;
          return;
        }
        const response = await _services__WEBPACK_IMPORTED_MODULE_3__["settingService"].update(this.form.refunds.id, this.form);
        if (response.status) {
          this.submitted = false;
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 2000
            // all of other options may go here
          });
        }
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 4000
        });
      }
    }
  },
  mounted() {
    this.getSetting();
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/smtp.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/settings/smtp.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_3__["validationMixin"]],
  name: "smtp",
  data() {
    return {
      statusOptions: [{
        text: "Activated",
        value: true
      }, {
        text: "Deactivated",
        value: false
      }],
      engineOptions: [{
        text: "SMTP",
        value: "SMTP"
      }
      // { text: "SENDMAIL", value: "SENDMAIL" },
      ],
      form: {
        type: "smtp",
        smtp: {
          id: "",
          is_production: "",
          type: "",
          username: "",
          host: "",
          port: "",
          encryption: "",
          password: "",
          name: "",
          email: ""
        }
      },
      submitted: false
    };
  },
  validations: {
    form: {
      smtp: {
        is_production: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
        },
        name: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"],
          alpha: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["alpha"]
        },
        password: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
        },
        email: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"],
          email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["email"]
        },
        username: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
        },
        host: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
        },
        port: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"],
          numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["numeric"]
        }
      }
    }
  },
  methods: {
    validateState(name) {
      const {
        $dirty,
        $error
      } = this.$v.form.smtp[name];
      return $dirty ? !$error : null;
    },
    async getSetting() {
      try {
        const response = await _services__WEBPACK_IMPORTED_MODULE_2__["settingService"].find("smtp");
        if (response.status) {
          this.form.smtp = response.data;
        }
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 5000
        });
      }
    },
    async updateSMTP() {
      try {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitted = false;
          return;
        }
        const response = await _services__WEBPACK_IMPORTED_MODULE_2__["settingService"].update(this.form.smtp.id, this.form);
        if (response.status) {
          this.submitted = false;
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 2000
            // all of other options may go here
          });
        }
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 4000
        });
      }
    }
  },
  mounted() {
    this.getSetting();
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/term.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/settings/term.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "term",
  data() {
    return {
      form: {
        type: "terms",
        id: "",
        terms: ""
      },
      submitted: false
    };
  },
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_2__["VueEditor"]
  },
  methods: {
    async getSetting() {
      try {
        const response = await _services__WEBPACK_IMPORTED_MODULE_3__["settingService"].find("terms");
        if (response.status) {
          console.log("response", response);
          this.form = response.data;
        }
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 5000
        });
      }
    },
    async updateTerms() {
      try {
        this.submitted = true;
        const response = await _services__WEBPACK_IMPORTED_MODULE_3__["settingService"].update(this.form.id, this.form);
        if (response.status) {
          this.submitted = false;
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 2000
            // all of other options may go here
          });
        }
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 4000
        });
      }
    }
  },
  mounted() {
    this.getSetting();
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/applicationSetting.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/applicationSetting.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/breadcrumb */ "./src/components/breadcrumb/index.vue");
/* harmony import */ var _components_settings_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/settings/general */ "./src/components/settings/general.vue");
/* harmony import */ var _components_settings_term__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/settings/term */ "./src/components/settings/term.vue");
/* harmony import */ var _components_settings_PrivacyPolicy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/settings/PrivacyPolicy */ "./src/components/settings/PrivacyPolicy.vue");
/* harmony import */ var _components_settings_smtp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/settings/smtp */ "./src/components/settings/smtp.vue");
/* harmony import */ var _components_settings_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/settings/notification */ "./src/components/settings/notification.vue");
/* harmony import */ var _components_settings_refund__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/settings/refund */ "./src/components/settings/refund.vue");




// import AWS from "../../components/settings/aws";

//import SMS from "../../components/settings/sms";
// import Payment from "../../components/settings/payment";


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "applicationSettings",
  data() {
    return {
      breadcrumbs: {
        title: "Application Settings",
        b1: "Manage Application Settings",
        b2: "Application Settings",
        b3: "Index",
        link: false,
        name: "Application Settings"
      }
    };
  },
  components: {
    Breadcrumb: _components_breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"],
    General: _components_settings_general__WEBPACK_IMPORTED_MODULE_1__["default"],
    Term: _components_settings_term__WEBPACK_IMPORTED_MODULE_2__["default"],
    // AWS,
    SMTP: _components_settings_smtp__WEBPACK_IMPORTED_MODULE_4__["default"],
    // SMS,
    Notification: _components_settings_notification__WEBPACK_IMPORTED_MODULE_5__["default"],
    Refund: _components_settings_refund__WEBPACK_IMPORTED_MODULE_6__["default"],
    PrivacyPolicy: _components_settings_PrivacyPolicy__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/PrivacyPolicy.vue?vue&type=template&id=efbeae44&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/settings/PrivacyPolicy.vue?vue&type=template&id=efbeae44&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("router-link", {
    staticClass: "text-small forgot-password text-black mr-3 float-right",
    attrs: {
      target: "_blank",
      to: "/privacy-policy"
    }
  }, [_c("b-badge", {
    attrs: {
      variant: "primary"
    }
  }, [_c("i", {
    staticClass: "mdi mdi-eye"
  }), _vm._v(" Preview")])], 1), _c("b-form", {
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.updateTerms.apply(null, arguments);
      }
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.id,
      expression: "form.id"
    }],
    attrs: {
      type: "hidden"
    },
    domProps: {
      value: _vm.form.id
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "id", $event.target.value);
      }
    }
  }), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Privacy Policy",
      "label-for": "term-input",
      "label-cols-sm": "4",
      "label-cols-lg": "2",
      "content-cols-sm": "",
      "content-cols-lg": "10"
    }
  }, [_c("vue-editor", {
    staticClass: "mt-3",
    model: {
      value: _vm.form.privacypolicy,
      callback: function ($$v) {
        _vm.$set(_vm.form, "privacypolicy", $$v);
      },
      expression: "form.privacypolicy"
    }
  })], 1), _c("b-form-group", {
    staticClass: "col-md-6 offset-md-4"
  }, [_c("b-button", {
    staticClass: "btn btn-success btn-lg text-center",
    attrs: {
      type: "submit"
    }
  }, [_vm.submitted ? _c("b-spinner", {
    attrs: {
      small: "",
      label: "Loading..."
    }
  }) : _vm._e(), _vm._v("Submit")], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/general.vue?vue&type=template&id=6c22250c&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/settings/general.vue?vue&type=template&id=6c22250c&scoped=true ***!
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
  return _c("div", [_c("b-form", {
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.updateGeneral.apply(null, arguments);
      }
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.general.id,
      expression: "general.id"
    }],
    attrs: {
      type: "hidden"
    },
    domProps: {
      value: _vm.general.id
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.general, "id", $event.target.value);
      }
    }
  }), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Name",
      "label-for": "name-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.general.name.$error
    },
    attrs: {
      placeholder: "name",
      state: _vm.validateState("name"),
      readonly: ""
    },
    model: {
      value: _vm.$v.general.name.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.general.name, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.general.name.$model"
    }
  }), _vm.submitted && !_vm.$v.general.name.required ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" name is required ")]) : _vm._e()], 1), _c("b-form-group", {
    attrs: {
      label: "Logo",
      "label-for": "general-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [!_vm.general.logo ? _c("div", [_c("b-form-file", {
    attrs: {
      id: "general-input",
      accept: "image/jpeg, image/png, image/jpg",
      placeholder: "Choose a logo or drop it here..."
    },
    on: {
      change: function ($event) {
        return _vm.onFileChange($event, "logo");
      }
    }
  })], 1) : _c("div", [_c("img", {
    staticClass: "img-fluid",
    attrs: {
      src: _vm.general.logo,
      width: "150",
      height: "150"
    }
  }), _c("button", {
    staticClass: "btn social-btn btn-rounded btn-danger mr-4",
    on: {
      click: function ($event) {
        return _vm.removeImage("logo");
      }
    }
  }, [_c("i", {
    staticClass: "mdi mdi-close"
  })])])]), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Email",
      "label-for": "email-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.general.email.$error
    },
    attrs: {
      placeholder: "Enter email address",
      state: _vm.validateState("email"),
      readonly: ""
    },
    model: {
      value: _vm.$v.general.email.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.general.email, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.general.email.$model"
    }
  }), _vm.submitted && !_vm.$v.general.email.required ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" email address is required ")]) : _vm._e()], 1), _c("b-form-group", {
    attrs: {
      label: "Address",
      "label-for": "address-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-textarea", {
    attrs: {
      id: "address-1-input",
      placeholder: "Enter address...",
      rows: "5",
      "max-rows": "8",
      readonly: ""
    },
    model: {
      value: _vm.general.address,
      callback: function ($$v) {
        _vm.$set(_vm.general, "address", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "general.address"
    }
  })], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Phone Number",
      "label-for": "phone-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7",
      readonly: ""
    }
  }, [_c("b-input", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.general.phone.$error
    },
    attrs: {
      placeholder: "phone Number",
      state: _vm.validateState("phone"),
      readonly: ""
    },
    model: {
      value: _vm.$v.general.phone.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.general.phone, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.general.phone.$model"
    }
  }), _vm.submitted && !_vm.$v.general.phone.required ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" phone number is required ")]) : _vm._e(), !_vm.$v.general.phone.minLength ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" Name must have at least " + _vm._s(_vm.$v.general.phone.$params.minLength.min) + " letters. ")]) : _vm._e()], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Default Country",
      "label-for": "default-country-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-select", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.general.default_country.$error
    },
    attrs: {
      options: _vm.countries,
      state: _vm.validateState("default_country")
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function () {
        return [_c("b-form-select-option", {
          attrs: {
            value: null,
            disabled: ""
          }
        }, [_vm._v("-- Please select default country --")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.general.default_country,
      callback: function ($$v) {
        _vm.$set(_vm.general, "default_country", $$v);
      },
      expression: "general.default_country"
    }
  })], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Default Currency",
      "label-for": "default-currency-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.currencies
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function () {
        return [_c("b-form-select-option", {
          attrs: {
            value: null,
            disabled: ""
          }
        }, [_vm._v("-- Please select default currency --")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.general.default_currency,
      callback: function ($$v) {
        _vm.$set(_vm.general, "default_currency", $$v);
      },
      expression: "general.default_currency"
    }
  })], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Default Timezone",
      "label-for": "timezone-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("v-select", {
    attrs: {
      label: "tzCode",
      filterable: true,
      options: _vm.timezones
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function (option) {
        return [_c("div", {
          staticClass: "d-center"
        }, [_vm._v(" " + _vm._s(option.tzCode) + " ")])];
      }
    }, {
      key: "selected-option",
      fn: function (option) {
        return [_c("div", {
          staticClass: "selected d-center"
        }, [_vm._v(" " + _vm._s(option.tzCode) + " ")])];
      }
    }]),
    model: {
      value: _vm.general.timezone,
      callback: function ($$v) {
        _vm.$set(_vm.general, "timezone", $$v);
      },
      expression: "general.timezone"
    }
  }, [_c("template", {
    slot: "no-options"
  }, [_vm._v(" type default timezone ")])], 2)], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Date Format",
      "label-for": "date-format-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("v-select", {
    attrs: {
      label: "text",
      value: "value",
      filterable: true,
      options: _vm.dateFormat
    },
    scopedSlots: _vm._u([{
      key: "selected-option",
      fn: function (option) {
        return [_c("div", {
          staticClass: "selected d-center"
        }, [_vm._v(" " + _vm._s(option.text) + " ")])];
      }
    }]),
    model: {
      value: _vm.general.date_format,
      callback: function ($$v) {
        _vm.$set(_vm.general, "date_format", $$v);
      },
      expression: "general.date_format"
    }
  }, [_c("template", {
    slot: "no-options"
  }, [_vm._v(" type date format ")])], 2)], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Time Format",
      "label-for": "time-format-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("v-select", {
    attrs: {
      label: "text",
      value: "value",
      filterable: true,
      options: _vm.timeFormat
    },
    scopedSlots: _vm._u([{
      key: "selected-option",
      fn: function (option) {
        return [_c("div", {
          staticClass: "selected d-center"
        }, [_vm._v(" " + _vm._s(option.text) + " ")])];
      }
    }]),
    model: {
      value: _vm.general.time_format,
      callback: function ($$v) {
        _vm.$set(_vm.general, "time_format", $$v);
      },
      expression: "general.time_format"
    }
  }, [_c("template", {
    slot: "no-options"
  }, [_vm._v(" type time format ")])], 2)], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Google Key",
      "label-for": "googlekey-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    attrs: {
      placeholder: "google secret key"
    },
    model: {
      value: _vm.general.google_key,
      callback: function ($$v) {
        _vm.$set(_vm.general, "google_key", $$v);
      },
      expression: "general.google_key"
    }
  })], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Tax (%)",
      "label-for": "tax-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.general.tax.$error
    },
    attrs: {
      placeholder: "Enter tax percent number",
      state: _vm.validateState("tax")
    },
    model: {
      value: _vm.$v.general.tax.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.general.tax, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.general.tax.$model"
    }
  }), _vm.submitted && !_vm.$v.general.tax.required ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" tax is required ")]) : _vm._e(), !_vm.$v.general.tax.minLength ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" Name must have at least " + _vm._s(_vm.$v.general.tax.$params.minLength.min) + " letters. ")]) : _vm._e()], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Service Fee",
      "label-for": "fee-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    attrs: {
      type: "number",
      min: "0",
      step: "0.01",
      pattern: "^\\d+(?:\\.\\d{1,2})?$",
      placeholder: "Enter fee"
    },
    model: {
      value: _vm.general.fee,
      callback: function ($$v) {
        _vm.$set(_vm.general, "fee", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "general.fee"
    }
  })], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Api Base Url",
      "label-for": "api-base-url-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    attrs: {
      placeholder: "Api Base Url",
      readonly: ""
    },
    model: {
      value: _vm.general.api_base_url,
      callback: function ($$v) {
        _vm.$set(_vm.general, "api_base_url", $$v);
      },
      expression: "general.api_base_url"
    }
  })], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Background Location Update Interval (Millisecond)",
      "label-for": "api-base-url-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    attrs: {
      type: "number",
      min: "1000",
      placeholder: "Background Location Update Interval "
    },
    model: {
      value: _vm.general.background_location_update_interval,
      callback: function ($$v) {
        _vm.$set(_vm.general, "background_location_update_interval", $$v);
      },
      expression: "general.background_location_update_interval"
    }
  })], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Driver Online Location Update Interval (Millisecond)",
      "label-for": "api-base-url-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    attrs: {
      type: "number",
      min: "1000",
      placeholder: "Driver Online Location Update Interval"
    },
    model: {
      value: _vm.general.driver_online_location_update_interval,
      callback: function ($$v) {
        _vm.$set(_vm.general, "driver_online_location_update_interval", $$v);
      },
      expression: "general.driver_online_location_update_interval"
    }
  })], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Radius Range  for Stops Distance (Meters)",
      "label-for": "api-base-url-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    attrs: {
      type: "number",
      min: "1000",
      placeholder: "max distance in (meters)"
    },
    model: {
      value: _vm.general.max_distance,
      callback: function ($$v) {
        _vm.$set(_vm.general, "max_distance", $$v);
      },
      expression: "general.max_distance"
    }
  })], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Last Advance Booking time (Minutes)",
      "label-for": "pre-booking-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    attrs: {
      type: "number",
      min: "30",
      placeholder: "pre booking in (minutes)"
    },
    model: {
      value: _vm.general.prebooking_time,
      callback: function ($$v) {
        _vm.$set(_vm.general, "prebooking_time", $$v);
      },
      expression: "general.prebooking_time"
    }
  })], 1), _c("b-form-group", {
    staticClass: "col-md-6 offset-md-4"
  }, [_c("b-button", {
    staticClass: "btn btn-success btn-lg text-center",
    attrs: {
      type: "submit"
    }
  }, [_vm.submitted ? _c("b-spinner", {
    attrs: {
      small: "",
      label: "Loading..."
    }
  }) : _vm._e(), _vm._v("Submit")], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/notification.vue?vue&type=template&id=63877012&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/settings/notification.vue?vue&type=template&id=63877012&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.updateNotification.apply(null, arguments);
      }
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.id,
      expression: "form.id"
    }],
    attrs: {
      type: "hidden"
    },
    domProps: {
      value: _vm.form.id
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "id", $event.target.value);
      }
    }
  }), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "OTP validation via Firebase",
      "label-for": "otp-validation-via-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-checkbox", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.otp_validation_via.$error
    },
    attrs: {
      state: _vm.validateState("otp_validation_via"),
      switch: "",
      readonly: ""
    },
    model: {
      value: _vm.$v.form.otp_validation_via.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.otp_validation_via, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.otp_validation_via.$model"
    }
  })], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Firebase Database Url",
      "label-for": "firebase-database-url-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.firebase_database_url.$error
    },
    attrs: {
      placeholder: "Firebase Database url",
      state: _vm.validateState("firebase_database_url"),
      readonly: ""
    },
    model: {
      value: _vm.$v.form.firebase_database_url.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.firebase_database_url, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.firebase_database_url.$model"
    }
  }), _vm.submitted || !_vm.$v.form.firebase_database_url.required ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" firebase database url is required ")]) : _vm._e()], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Firebase Admin Sdk Json",
      "label-for": "firbase-key-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7",
      description: "Note: Generate private key from firebase console >> project setting >> service account"
    }
  }, [_c("b-form-file", {
    attrs: {
      placeholder: "Select a firebase json file or drop it here..."
    },
    model: {
      value: _vm.form.firebase_key,
      callback: function ($$v) {
        _vm.$set(_vm.form, "firebase_key", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "form.firebase_key"
    }
  })], 1), _c("b-form-group", {
    staticClass: "col-md-6 offset-md-4"
  }, [_c("b-button", {
    staticClass: "btn btn-success btn-lg text-center",
    attrs: {
      type: "submit"
    }
  }, [_vm.submitted ? _c("b-spinner", {
    attrs: {
      small: "",
      label: "Loading..."
    }
  }) : _vm._e(), _vm._v(" Submit")], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/refund.vue?vue&type=template&id=b7fdd1f8&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/settings/refund.vue?vue&type=template&id=b7fdd1f8&scoped=true ***!
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
  return _c("div", [_c("b-form", {
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.updatePayment.apply(null, arguments);
      }
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.refunds.id,
      expression: "form.refunds.id"
    }],
    attrs: {
      type: "hidden"
    },
    domProps: {
      value: _vm.form.refunds.id
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.refunds, "id", $event.target.value);
      }
    }
  }), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Type",
      "label-for": "type-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-radio-group", {
    class: {
      "is-invalid": _vm.submitted || _vm.$v.form.refunds.type.$error
    },
    attrs: {
      options: _vm.typeOptions,
      state: _vm.validateState("type")
    },
    model: {
      value: _vm.$v.form.refunds.type.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.refunds.type, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.refunds.type.$model"
    }
  }), _vm.submitted || !_vm.$v.form.refunds.type.required ? _c("b-form-invalid-feedback", [_vm._v(" type is required ")]) : _vm._e()], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Amount",
      "label-for": "amount-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-input", {
    class: {
      "is-invalid": _vm.submitted || _vm.$v.form.refunds.amount.$error
    },
    attrs: {
      id: "lastname-input",
      type: "text",
      placeholder: "Enter amount",
      state: _vm.validateState("amount")
    },
    model: {
      value: _vm.$v.form.refunds.amount.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.refunds.amount, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.refunds.amount.$model"
    }
  }), _vm.submitted || !_vm.$v.form.refunds.amount.required ? _c("b-form-invalid-feedback", [_vm._v(" amount is required ")]) : _vm._e(), !_vm.$v.form.refunds.amount.numeric ? _c("b-form-invalid-feedback", [_vm._v(" only numeric values are allowed ")]) : _vm._e()], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Message ",
      "label-for": "contents-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("vue-editor", {
    staticClass: "mt-3",
    attrs: {
      "editor-toolbar": _vm.customToolbar
    },
    model: {
      value: _vm.form.refunds.contents,
      callback: function ($$v) {
        _vm.$set(_vm.form.refunds, "contents", $$v);
      },
      expression: "form.refunds.contents"
    }
  })], 1), _c("b-form-group", {
    staticClass: "col-md-6 offset-md-4"
  }, [_c("b-button", {
    staticClass: "btn btn-success btn-lg text-center",
    attrs: {
      type: "submit"
    }
  }, [_vm.submitted ? _c("b-spinner", {
    attrs: {
      small: "",
      label: "Loading..."
    }
  }) : _vm._e(), _vm._v("Submit")], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/smtp.vue?vue&type=template&id=0737983c&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/settings/smtp.vue?vue&type=template&id=0737983c&scoped=true ***!
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
  return _c("div", [_c("b-form", {
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.updateSMTP.apply(null, arguments);
      }
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.smtp.id,
      expression: "form.smtp.id"
    }],
    attrs: {
      type: "hidden"
    },
    domProps: {
      value: _vm.form.smtp.id
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.smtp, "id", $event.target.value);
      }
    }
  }), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Is production",
      "label-for": "status-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-radio-group", {
    class: {
      "is-invalid": _vm.submitted || _vm.$v.form.smtp.is_production.$error
    },
    attrs: {
      options: _vm.statusOptions,
      state: _vm.validateState("is_production")
    },
    model: {
      value: _vm.$v.form.smtp.is_production.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.smtp.is_production, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.smtp.is_production.$model"
    }
  }), _vm.submitted || !_vm.$v.form.smtp.is_production.required ? _c("b-form-invalid-feedback", [_vm._v(" is_production is required ")]) : _vm._e()], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Email Engine",
      "label-for": "email-engine-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-radio-group", {
    attrs: {
      options: _vm.engineOptions
    },
    model: {
      value: _vm.form.smtp.type,
      callback: function ($$v) {
        _vm.$set(_vm.form.smtp, "type", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "form.smtp.type"
    }
  })], 1), _c("b-form-group", {
    attrs: {
      label: "Host",
      "label-for": "host-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    class: {
      "is-invalid": _vm.submitted || _vm.$v.form.smtp.host.$error
    },
    attrs: {
      placeholder: "Host",
      state: _vm.validateState("host")
    },
    model: {
      value: _vm.$v.form.smtp.host.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.smtp.host, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.smtp.host.$model"
    }
  }), _vm.submitted || !_vm.$v.form.smtp.host.required ? _c("b-form-invalid-feedback", [_vm._v(" host is required ")]) : _vm._e()], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Port",
      "label-for": "port-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    class: {
      "is-invalid": _vm.submitted || _vm.$v.form.smtp.port.$error
    },
    attrs: {
      state: _vm.validateState("port"),
      placeholder: "port"
    },
    model: {
      value: _vm.$v.form.smtp.port.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.smtp.port, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.smtp.port.$model"
    }
  }), _vm.submitted || !_vm.$v.form.smtp.port.required ? _c("b-form-invalid-feedback", [_vm._v(" port is required ")]) : _vm._e(), !_vm.$v.form.smtp.port.numeric ? _c("b-form-invalid-feedback", [_vm._v(" only numeric is allowed ")]) : _vm._e()], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Encryption",
      "label-for": "encryption-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    attrs: {
      placeholder: "Encryption"
    },
    model: {
      value: _vm.form.smtp.encryption,
      callback: function ($$v) {
        _vm.$set(_vm.form.smtp, "encryption", $$v);
      },
      expression: "form.smtp.encryption"
    }
  })], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Username",
      "label-for": "username-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    class: {
      "is-invalid": _vm.submitted || _vm.$v.form.smtp.username.$error
    },
    attrs: {
      placeholder: "username",
      state: _vm.validateState("username")
    },
    model: {
      value: _vm.$v.form.smtp.username.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.smtp.username, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.smtp.username.$model"
    }
  }), _vm.submitted || !_vm.$v.form.smtp.username.required ? _c("b-form-invalid-feedback", [_vm._v(" username is required ")]) : _vm._e()], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Password",
      "label-for": "password-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    class: {
      "is-invalid": _vm.submitted || _vm.$v.form.smtp.password.$error
    },
    attrs: {
      state: _vm.validateState("password"),
      placeholder: "password"
    },
    model: {
      value: _vm.$v.form.smtp.password.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.smtp.password, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.smtp.password.$model"
    }
  }), _vm.submitted || !_vm.$v.form.smtp.password.required ? _c("b-form-invalid-feedback", [_vm._v(" username is required ")]) : _vm._e()], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Name",
      "label-for": "name-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    class: {
      "is-invalid": _vm.submitted || _vm.$v.form.smtp.name.$error
    },
    attrs: {
      state: _vm.validateState("name"),
      placeholder: "Name"
    },
    model: {
      value: _vm.$v.form.smtp.name.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.smtp.name, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.smtp.name.$model"
    }
  }), _vm.submitted || !_vm.$v.form.smtp.name.required ? _c("b-form-invalid-feedback", [_vm._v(" name is required ")]) : _vm._e(), !_vm.$v.form.smtp.name.alpha ? _c("b-form-invalid-feedback", [_vm._v(" only alphabet characters is allowed. ")]) : _vm._e()], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Email",
      "label-for": "email-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-input", {
    attrs: {
      placeholder: "Email Address"
    },
    model: {
      value: _vm.form.smtp.email,
      callback: function ($$v) {
        _vm.$set(_vm.form.smtp, "email", $$v);
      },
      expression: "form.smtp.email"
    }
  })], 1), _c("b-form-group", {
    staticClass: "col-md-6 offset-md-4"
  }, [_c("b-button", {
    staticClass: "btn btn-success btn-lg text-center",
    attrs: {
      type: "submit"
    }
  }, [_vm.submitted ? _c("b-spinner", {
    attrs: {
      small: "",
      label: "Loading..."
    }
  }) : _vm._e(), _vm._v("Submit")], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/term.vue?vue&type=template&id=8d00e210&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/settings/term.vue?vue&type=template&id=8d00e210&scoped=true ***!
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
  return _c("div", [_c("router-link", {
    staticClass: "text-small forgot-password text-black mr-3 float-right",
    attrs: {
      target: "_blank",
      to: "/terms"
    }
  }, [_c("b-badge", {
    attrs: {
      variant: "primary"
    }
  }, [_c("i", {
    staticClass: "mdi mdi-eye"
  }), _vm._v(" Preview")])], 1), _c("b-form", {
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.updateTerms.apply(null, arguments);
      }
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.id,
      expression: "form.id"
    }],
    attrs: {
      type: "hidden"
    },
    domProps: {
      value: _vm.form.id
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "id", $event.target.value);
      }
    }
  }), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Terms & Conditions ",
      "label-for": "term-input",
      "label-cols-sm": "4",
      "label-cols-lg": "2",
      "content-cols-sm": "",
      "content-cols-lg": "10"
    }
  }, [_c("vue-editor", {
    staticClass: "mt-3",
    model: {
      value: _vm.form.terms,
      callback: function ($$v) {
        _vm.$set(_vm.form, "terms", $$v);
      },
      expression: "form.terms"
    }
  })], 1), _c("b-form-group", {
    staticClass: "col-md-6 offset-md-4"
  }, [_c("b-button", {
    staticClass: "btn btn-success btn-lg text-center",
    attrs: {
      type: "submit"
    }
  }, [_vm.submitted ? _c("b-spinner", {
    attrs: {
      small: "",
      label: "Loading..."
    }
  }) : _vm._e(), _vm._v("Submit")], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/applicationSetting.vue?vue&type=template&id=6ea7308c&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/applicationSetting.vue?vue&type=template&id=6ea7308c&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "tables"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("Breadcrumb", {
    attrs: {
      breadcrumbs: _vm.breadcrumbs
    }
  }), _c("div", {
    staticClass: "col-lg-12 grid-margin stretch-card"
  }, [_c("b-card", {
    attrs: {
      "no-body": ""
    }
  }, [_c("b-tabs", {
    attrs: {
      pills: "",
      card: "",
      vertical: "",
      "nav-wrapper-class": "w-40",
      "active-nav-item-class": "font-weight-bold"
    }
  }, [_c("b-tab", {
    attrs: {
      title: "General",
      active: ""
    }
  }, [_c("b-card-text", [_c("General")], 1)], 1), _c("b-tab", {
    attrs: {
      title: "Email"
    }
  }, [_c("b-card-text", [_c("SMTP")], 1)], 1), _c("b-tab", {
    attrs: {
      title: "Refunds"
    }
  }, [_c("b-card-text", [_c("Refund")], 1)], 1), _c("b-tab", {
    attrs: {
      title: "Notifications"
    }
  }, [_c("b-card-text", [_c("Notification")], 1)], 1), _c("b-tab", {
    attrs: {
      title: "Terms And Condition"
    }
  }, [_c("b-card-text", [_c("Term")], 1)], 1), _c("b-tab", {
    attrs: {
      title: "Privacy and Policy"
    }
  }, [_c("b-card-text", [_c("PrivacyPolicy")], 1)], 1)], 1)], 1)], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/core-js/modules/es.iterator.filter.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.iterator.filter.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__(/*! ../internals/get-iterator-direct */ "./node_modules/core-js/internals/get-iterator-direct.js");
var createIteratorProxy = __webpack_require__(/*! ../internals/iterator-create-proxy */ "./node_modules/core-js/internals/iterator-create-proxy.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var predicate = this.predicate;
  var next = this.next;
  var result, done, value;
  while (true) {
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
    value = result.value;
    if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
  }
});

// `Iterator.prototype.filter` method
// https://tc39.es/ecma262/#sec-iterator.prototype.filter
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  filter: function filter(predicate) {
    anObject(this);
    aCallable(predicate);
    return new IteratorProxy(getIteratorDirect(this), {
      predicate: predicate
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.iterator.filter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.iterator.filter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(/*! ../modules/es.iterator.filter */ "./node_modules/core-js/modules/es.iterator.filter.js");


/***/ }),

/***/ "./node_modules/timezones-list/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/timezones-list/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const timezones_json_1 = __importDefault(__webpack_require__(/*! ./timezones.json */ "./node_modules/timezones-list/dist/timezones.json"));
exports.default = timezones_json_1.default;


/***/ }),

/***/ "./node_modules/timezones-list/dist/timezones.json":
/*!*********************************************************!*\
  !*** ./node_modules/timezones-list/dist/timezones.json ***!
  \*********************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"label\":\"Pacific/Midway (GMT-11:00)\",\"tzCode\":\"Pacific/Midway\",\"name\":\"(GMT-11:00) Midway\",\"utc\":\"-11:00\"},{\"label\":\"Pacific/Niue (GMT-11:00)\",\"tzCode\":\"Pacific/Niue\",\"name\":\"(GMT-11:00) Alofi\",\"utc\":\"-11:00\"},{\"label\":\"Pacific/Pago_Pago (GMT-11:00)\",\"tzCode\":\"Pacific/Pago_Pago\",\"name\":\"(GMT-11:00) Pago Pago, Tāfuna, Ta`ū, Taulaga\",\"utc\":\"-11:00\"},{\"label\":\"America/Adak (GMT-10:00)\",\"tzCode\":\"America/Adak\",\"name\":\"(GMT-10:00) Adak\",\"utc\":\"-10:00\"},{\"label\":\"Pacific/Honolulu (GMT-10:00)\",\"tzCode\":\"Pacific/Honolulu\",\"name\":\"(GMT-10:00) Honolulu, East Honolulu, Pearl City, Hilo, Kailua\",\"utc\":\"-10:00\"},{\"label\":\"Pacific/Rarotonga (GMT-10:00)\",\"tzCode\":\"Pacific/Rarotonga\",\"name\":\"(GMT-10:00) Avarua\",\"utc\":\"-10:00\"},{\"label\":\"Pacific/Tahiti (GMT-10:00)\",\"tzCode\":\"Pacific/Tahiti\",\"name\":\"(GMT-10:00) Faaa, Papeete, Punaauia, Pirae, Mahina\",\"utc\":\"-10:00\"},{\"label\":\"Pacific/Marquesas (GMT-09:30)\",\"tzCode\":\"Pacific/Marquesas\",\"name\":\"(GMT-09:30) Taiohae\",\"utc\":\"-09:30\"},{\"label\":\"America/Anchorage (GMT-09:00)\",\"tzCode\":\"America/Anchorage\",\"name\":\"(GMT-09:00) Anchorage, Fairbanks, Eagle River, Badger, Knik-Fairview\",\"utc\":\"-09:00\"},{\"label\":\"America/Juneau (GMT-09:00)\",\"tzCode\":\"America/Juneau\",\"name\":\"(GMT-09:00) Juneau\",\"utc\":\"-09:00\"},{\"label\":\"America/Metlakatla (GMT-09:00)\",\"tzCode\":\"America/Metlakatla\",\"name\":\"(GMT-09:00) Metlakatla\",\"utc\":\"-09:00\"},{\"label\":\"America/Nome (GMT-09:00)\",\"tzCode\":\"America/Nome\",\"name\":\"(GMT-09:00) Nome\",\"utc\":\"-09:00\"},{\"label\":\"America/Sitka (GMT-09:00)\",\"tzCode\":\"America/Sitka\",\"name\":\"(GMT-09:00) Sitka, Ketchikan\",\"utc\":\"-09:00\"},{\"label\":\"America/Yakutat (GMT-09:00)\",\"tzCode\":\"America/Yakutat\",\"name\":\"(GMT-09:00) Yakutat\",\"utc\":\"-09:00\"},{\"label\":\"Pacific/Gambier (GMT-09:00)\",\"tzCode\":\"Pacific/Gambier\",\"name\":\"(GMT-09:00) Gambier\",\"utc\":\"-09:00\"},{\"label\":\"America/Los_Angeles (GMT-08:00)\",\"tzCode\":\"America/Los_Angeles\",\"name\":\"(GMT-08:00) Los Angeles, San Diego, San Jose, San Francisco, Seattle\",\"utc\":\"-08:00\"},{\"label\":\"America/Tijuana (GMT-08:00)\",\"tzCode\":\"America/Tijuana\",\"name\":\"(GMT-08:00) Tijuana, Mexicali, Ensenada, Rosarito, Tecate\",\"utc\":\"-08:00\"},{\"label\":\"America/Vancouver (GMT-08:00)\",\"tzCode\":\"America/Vancouver\",\"name\":\"(GMT-08:00) Vancouver, Surrey, Okanagan, Victoria, Burnaby\",\"utc\":\"-08:00\"},{\"label\":\"Pacific/Pitcairn (GMT-08:00)\",\"tzCode\":\"Pacific/Pitcairn\",\"name\":\"(GMT-08:00) Adamstown\",\"utc\":\"-08:00\"},{\"label\":\"America/Boise (GMT-07:00)\",\"tzCode\":\"America/Boise\",\"name\":\"(GMT-07:00) Boise, Meridian, Nampa, Idaho Falls, Pocatello\",\"utc\":\"-07:00\"},{\"label\":\"America/Cambridge_Bay (GMT-07:00)\",\"tzCode\":\"America/Cambridge_Bay\",\"name\":\"(GMT-07:00) Cambridge Bay\",\"utc\":\"-07:00\"},{\"label\":\"America/Chihuahua (GMT-07:00)\",\"tzCode\":\"America/Chihuahua\",\"name\":\"(GMT-07:00) Chihuahua, Ciudad Delicias, Cuauhtémoc, Parral, Nuevo Casas Grandes\",\"utc\":\"-07:00\"},{\"label\":\"America/Creston (GMT-07:00)\",\"tzCode\":\"America/Creston\",\"name\":\"(GMT-07:00) Creston\",\"utc\":\"-07:00\"},{\"label\":\"America/Dawson (GMT-07:00)\",\"tzCode\":\"America/Dawson\",\"name\":\"(GMT-07:00) Dawson\",\"utc\":\"-07:00\"},{\"label\":\"America/Dawson_Creek (GMT-07:00)\",\"tzCode\":\"America/Dawson_Creek\",\"name\":\"(GMT-07:00) Fort St. John, Dawson Creek\",\"utc\":\"-07:00\"},{\"label\":\"America/Denver (GMT-07:00)\",\"tzCode\":\"America/Denver\",\"name\":\"(GMT-07:00) Denver, El Paso, Albuquerque, Colorado Springs, Aurora\",\"utc\":\"-07:00\"},{\"label\":\"America/Edmonton (GMT-07:00)\",\"tzCode\":\"America/Edmonton\",\"name\":\"(GMT-07:00) Calgary, Edmonton, Fort McMurray, Red Deer, Lethbridge\",\"utc\":\"-07:00\"},{\"label\":\"America/Fort_Nelson (GMT-07:00)\",\"tzCode\":\"America/Fort_Nelson\",\"name\":\"(GMT-07:00) Fort Nelson\",\"utc\":\"-07:00\"},{\"label\":\"America/Hermosillo (GMT-07:00)\",\"tzCode\":\"America/Hermosillo\",\"name\":\"(GMT-07:00) Hermosillo, Ciudad Obregón, Nogales, San Luis Río Colorado, Navojoa\",\"utc\":\"-07:00\"},{\"label\":\"America/Inuvik (GMT-07:00)\",\"tzCode\":\"America/Inuvik\",\"name\":\"(GMT-07:00) Inuvik\",\"utc\":\"-07:00\"},{\"label\":\"America/Mazatlan (GMT-07:00)\",\"tzCode\":\"America/Mazatlan\",\"name\":\"(GMT-07:00) Culiacán, Mazatlán, Tepic, Los Mochis, La Paz\",\"utc\":\"-07:00\"},{\"label\":\"America/Ojinaga (GMT-07:00)\",\"tzCode\":\"America/Ojinaga\",\"name\":\"(GMT-07:00) Ciudad Juárez, Manuel Ojinaga, Ojinaga\",\"utc\":\"-07:00\"},{\"label\":\"America/Phoenix (GMT-07:00)\",\"tzCode\":\"America/Phoenix\",\"name\":\"(GMT-07:00) Phoenix, Tucson, Mesa, Chandler, Gilbert\",\"utc\":\"-07:00\"},{\"label\":\"America/Whitehorse (GMT-07:00)\",\"tzCode\":\"America/Whitehorse\",\"name\":\"(GMT-07:00) Whitehorse\",\"utc\":\"-07:00\"},{\"label\":\"America/Yellowknife (GMT-07:00)\",\"tzCode\":\"America/Yellowknife\",\"name\":\"(GMT-07:00) Yellowknife\",\"utc\":\"-07:00\"},{\"label\":\"America/Bahia_Banderas (GMT-06:00)\",\"tzCode\":\"America/Bahia_Banderas\",\"name\":\"(GMT-06:00) Mezcales, San Vicente, Bucerías, Valle de Banderas\",\"utc\":\"-06:00\"},{\"label\":\"America/Belize (GMT-06:00)\",\"tzCode\":\"America/Belize\",\"name\":\"(GMT-06:00) Belize City, San Ignacio, Orange Walk, Belmopan, Dangriga\",\"utc\":\"-06:00\"},{\"label\":\"America/Chicago (GMT-06:00)\",\"tzCode\":\"America/Chicago\",\"name\":\"(GMT-06:00) Chicago, Houston, San Antonio, Dallas, Austin\",\"utc\":\"-06:00\"},{\"label\":\"America/Costa_Rica (GMT-06:00)\",\"tzCode\":\"America/Costa_Rica\",\"name\":\"(GMT-06:00) San José, Limón, San Francisco, Alajuela, Liberia\",\"utc\":\"-06:00\"},{\"label\":\"America/El_Salvador (GMT-06:00)\",\"tzCode\":\"America/El_Salvador\",\"name\":\"(GMT-06:00) San Salvador, Soyapango, Santa Ana, San Miguel, Mejicanos\",\"utc\":\"-06:00\"},{\"label\":\"America/Guatemala (GMT-06:00)\",\"tzCode\":\"America/Guatemala\",\"name\":\"(GMT-06:00) Guatemala City, Mixco, Villa Nueva, Petapa, San Juan Sacatepéquez\",\"utc\":\"-06:00\"},{\"label\":\"America/Indiana/Knox (GMT-06:00)\",\"tzCode\":\"America/Indiana/Knox\",\"name\":\"(GMT-06:00) Knox\",\"utc\":\"-06:00\"},{\"label\":\"America/Indiana/Tell_City (GMT-06:00)\",\"tzCode\":\"America/Indiana/Tell_City\",\"name\":\"(GMT-06:00) Tell City\",\"utc\":\"-06:00\"},{\"label\":\"America/Managua (GMT-06:00)\",\"tzCode\":\"America/Managua\",\"name\":\"(GMT-06:00) Managua, León, Masaya, Chinandega, Matagalpa\",\"utc\":\"-06:00\"},{\"label\":\"America/Matamoros (GMT-06:00)\",\"tzCode\":\"America/Matamoros\",\"name\":\"(GMT-06:00) Reynosa, Heroica Matamoros, Nuevo Laredo, Piedras Negras, Ciudad Acuña\",\"utc\":\"-06:00\"},{\"label\":\"America/Menominee (GMT-06:00)\",\"tzCode\":\"America/Menominee\",\"name\":\"(GMT-06:00) Menominee, Iron Mountain, Kingsford, Ironwood, Iron River\",\"utc\":\"-06:00\"},{\"label\":\"America/Merida (GMT-06:00)\",\"tzCode\":\"America/Merida\",\"name\":\"(GMT-06:00) Mérida, Campeche, Ciudad del Carmen, Kanasín, Valladolid\",\"utc\":\"-06:00\"},{\"label\":\"America/Mexico_City (GMT-06:00)\",\"tzCode\":\"America/Mexico_City\",\"name\":\"(GMT-06:00) Mexico City, Iztapalapa, Ecatepec de Morelos, Guadalajara, Puebla\",\"utc\":\"-06:00\"},{\"label\":\"America/Monterrey (GMT-06:00)\",\"tzCode\":\"America/Monterrey\",\"name\":\"(GMT-06:00) Monterrey, Saltillo, Guadalupe, Torreón, Victoria de Durango\",\"utc\":\"-06:00\"},{\"label\":\"America/North_Dakota/Beulah (GMT-06:00)\",\"tzCode\":\"America/North_Dakota/Beulah\",\"name\":\"(GMT-06:00) Beulah\",\"utc\":\"-06:00\"},{\"label\":\"America/North_Dakota/Center (GMT-06:00)\",\"tzCode\":\"America/North_Dakota/Center\",\"name\":\"(GMT-06:00) Center\",\"utc\":\"-06:00\"},{\"label\":\"America/North_Dakota/New_Salem (GMT-06:00)\",\"tzCode\":\"America/North_Dakota/New_Salem\",\"name\":\"(GMT-06:00) Mandan\",\"utc\":\"-06:00\"},{\"label\":\"America/Rainy_River (GMT-06:00)\",\"tzCode\":\"America/Rainy_River\",\"name\":\"(GMT-06:00) Rainy River\",\"utc\":\"-06:00\"},{\"label\":\"America/Rankin_Inlet (GMT-06:00)\",\"tzCode\":\"America/Rankin_Inlet\",\"name\":\"(GMT-06:00) Rankin Inlet\",\"utc\":\"-06:00\"},{\"label\":\"America/Regina (GMT-06:00)\",\"tzCode\":\"America/Regina\",\"name\":\"(GMT-06:00) Saskatoon, Regina, Prince Albert, Moose Jaw, North Battleford\",\"utc\":\"-06:00\"},{\"label\":\"America/Resolute (GMT-06:00)\",\"tzCode\":\"America/Resolute\",\"name\":\"(GMT-06:00) Resolute\",\"utc\":\"-06:00\"},{\"label\":\"America/Swift_Current (GMT-06:00)\",\"tzCode\":\"America/Swift_Current\",\"name\":\"(GMT-06:00) Swift Current\",\"utc\":\"-06:00\"},{\"label\":\"America/Tegucigalpa (GMT-06:00)\",\"tzCode\":\"America/Tegucigalpa\",\"name\":\"(GMT-06:00) Tegucigalpa, San Pedro Sula, Choloma, La Ceiba, El Progreso\",\"utc\":\"-06:00\"},{\"label\":\"America/Winnipeg (GMT-06:00)\",\"tzCode\":\"America/Winnipeg\",\"name\":\"(GMT-06:00) Winnipeg, Brandon, Kenora, Portage la Prairie, Thompson\",\"utc\":\"-06:00\"},{\"label\":\"Pacific/Easter (GMT-06:00)\",\"tzCode\":\"Pacific/Easter\",\"name\":\"(GMT-06:00) Easter\",\"utc\":\"-06:00\"},{\"label\":\"Pacific/Galapagos (GMT-06:00)\",\"tzCode\":\"Pacific/Galapagos\",\"name\":\"(GMT-06:00) Puerto Ayora, Puerto Baquerizo Moreno\",\"utc\":\"-06:00\"},{\"label\":\"America/Atikokan (GMT-05:00)\",\"tzCode\":\"America/Atikokan\",\"name\":\"(GMT-05:00) Atikokan\",\"utc\":\"-05:00\"},{\"label\":\"America/Bogota (GMT-05:00)\",\"tzCode\":\"America/Bogota\",\"name\":\"(GMT-05:00) Bogotá, Cali, Medellín, Barranquilla, Cartagena\",\"utc\":\"-05:00\"},{\"label\":\"America/Cancun (GMT-05:00)\",\"tzCode\":\"America/Cancun\",\"name\":\"(GMT-05:00) Cancún, Chetumal, Playa del Carmen, Cozumel, Felipe Carrillo Puerto\",\"utc\":\"-05:00\"},{\"label\":\"America/Cayman (GMT-05:00)\",\"tzCode\":\"America/Cayman\",\"name\":\"(GMT-05:00) George Town, West Bay, Bodden Town, East End, North Side\",\"utc\":\"-05:00\"},{\"label\":\"America/Detroit (GMT-05:00)\",\"tzCode\":\"America/Detroit\",\"name\":\"(GMT-05:00) Detroit, Grand Rapids, Warren, Sterling Heights, Ann Arbor\",\"utc\":\"-05:00\"},{\"label\":\"America/Eirunepe (GMT-05:00)\",\"tzCode\":\"America/Eirunepe\",\"name\":\"(GMT-05:00) Eirunepé, Benjamin Constant, Envira\",\"utc\":\"-05:00\"},{\"label\":\"America/Grand_Turk (GMT-05:00)\",\"tzCode\":\"America/Grand_Turk\",\"name\":\"(GMT-05:00) Cockburn Town\",\"utc\":\"-05:00\"},{\"label\":\"America/Guayaquil (GMT-05:00)\",\"tzCode\":\"America/Guayaquil\",\"name\":\"(GMT-05:00) Guayaquil, Quito, Cuenca, Santo Domingo de los Colorados, Machala\",\"utc\":\"-05:00\"},{\"label\":\"America/Havana (GMT-05:00)\",\"tzCode\":\"America/Havana\",\"name\":\"(GMT-05:00) Havana, Santiago de Cuba, Camagüey, Holguín, Guantánamo\",\"utc\":\"-05:00\"},{\"label\":\"America/Indiana/Indianapolis (GMT-05:00)\",\"tzCode\":\"America/Indiana/Indianapolis\",\"name\":\"(GMT-05:00) Indianapolis, Fort Wayne, South Bend, Carmel, Bloomington\",\"utc\":\"-05:00\"},{\"label\":\"America/Indiana/Marengo (GMT-05:00)\",\"tzCode\":\"America/Indiana/Marengo\",\"name\":\"(GMT-05:00) Marengo\",\"utc\":\"-05:00\"},{\"label\":\"America/Indiana/Petersburg (GMT-05:00)\",\"tzCode\":\"America/Indiana/Petersburg\",\"name\":\"(GMT-05:00) Petersburg\",\"utc\":\"-05:00\"},{\"label\":\"America/Indiana/Vevay (GMT-05:00)\",\"tzCode\":\"America/Indiana/Vevay\",\"name\":\"(GMT-05:00) Vevay\",\"utc\":\"-05:00\"},{\"label\":\"America/Indiana/Vincennes (GMT-05:00)\",\"tzCode\":\"America/Indiana/Vincennes\",\"name\":\"(GMT-05:00) Vincennes, Jasper, Washington, Huntingburg\",\"utc\":\"-05:00\"},{\"label\":\"America/Indiana/Winamac (GMT-05:00)\",\"tzCode\":\"America/Indiana/Winamac\",\"name\":\"(GMT-05:00) Winamac\",\"utc\":\"-05:00\"},{\"label\":\"America/Iqaluit (GMT-05:00)\",\"tzCode\":\"America/Iqaluit\",\"name\":\"(GMT-05:00) Iqaluit\",\"utc\":\"-05:00\"},{\"label\":\"America/Jamaica (GMT-05:00)\",\"tzCode\":\"America/Jamaica\",\"name\":\"(GMT-05:00) Kingston, New Kingston, Spanish Town, Portmore, Montego Bay\",\"utc\":\"-05:00\"},{\"label\":\"America/Kentucky/Louisville (GMT-05:00)\",\"tzCode\":\"America/Kentucky/Louisville\",\"name\":\"(GMT-05:00) Louisville, Jeffersonville, New Albany, Jeffersontown, Pleasure Ridge Park\",\"utc\":\"-05:00\"},{\"label\":\"America/Kentucky/Monticello (GMT-05:00)\",\"tzCode\":\"America/Kentucky/Monticello\",\"name\":\"(GMT-05:00) Monticello\",\"utc\":\"-05:00\"},{\"label\":\"America/Lima (GMT-05:00)\",\"tzCode\":\"America/Lima\",\"name\":\"(GMT-05:00) Lima, Arequipa, Callao, Trujillo, Chiclayo\",\"utc\":\"-05:00\"},{\"label\":\"America/Nassau (GMT-05:00)\",\"tzCode\":\"America/Nassau\",\"name\":\"(GMT-05:00) Nassau, Lucaya, Freeport, West End, Cooper’s Town\",\"utc\":\"-05:00\"},{\"label\":\"America/New_York (GMT-05:00)\",\"tzCode\":\"America/New_York\",\"name\":\"(GMT-05:00) New York City, Brooklyn, Queens, Philadelphia, Manhattan\",\"utc\":\"-05:00\"},{\"label\":\"America/Nipigon (GMT-05:00)\",\"tzCode\":\"America/Nipigon\",\"name\":\"(GMT-05:00) Nipigon\",\"utc\":\"-05:00\"},{\"label\":\"America/Panama (GMT-05:00)\",\"tzCode\":\"America/Panama\",\"name\":\"(GMT-05:00) Panamá, San Miguelito, Juan Díaz, David, Arraiján\",\"utc\":\"-05:00\"},{\"label\":\"America/Pangnirtung (GMT-05:00)\",\"tzCode\":\"America/Pangnirtung\",\"name\":\"(GMT-05:00) Pangnirtung\",\"utc\":\"-05:00\"},{\"label\":\"America/Port-au-Prince (GMT-05:00)\",\"tzCode\":\"America/Port-au-Prince\",\"name\":\"(GMT-05:00) Port-au-Prince, Carrefour, Delmas 73, Pétionville, Port-de-Paix\",\"utc\":\"-05:00\"},{\"label\":\"America/Rio_Branco (GMT-05:00)\",\"tzCode\":\"America/Rio_Branco\",\"name\":\"(GMT-05:00) Rio Branco, Cruzeiro do Sul, Sena Madureira, Tarauacá, Feijó\",\"utc\":\"-05:00\"},{\"label\":\"America/Thunder_Bay (GMT-05:00)\",\"tzCode\":\"America/Thunder_Bay\",\"name\":\"(GMT-05:00) Thunder Bay\",\"utc\":\"-05:00\"},{\"label\":\"America/Toronto (GMT-05:00)\",\"tzCode\":\"America/Toronto\",\"name\":\"(GMT-05:00) Toronto, Montréal, Ottawa, Mississauga, Québec\",\"utc\":\"-05:00\"},{\"label\":\"America/Anguilla (GMT-04:00)\",\"tzCode\":\"America/Anguilla\",\"name\":\"(GMT-04:00) The Valley, Blowing Point Village, Sandy Ground Village, The Quarter, Sandy Hill\",\"utc\":\"-04:00\"},{\"label\":\"America/Antigua (GMT-04:00)\",\"tzCode\":\"America/Antigua\",\"name\":\"(GMT-04:00) Saint John’s, Piggotts, Bolands, Codrington, Parham\",\"utc\":\"-04:00\"},{\"label\":\"America/Aruba (GMT-04:00)\",\"tzCode\":\"America/Aruba\",\"name\":\"(GMT-04:00) Oranjestad, Tanki Leendert, San Nicolas, Santa Cruz, Paradera\",\"utc\":\"-04:00\"},{\"label\":\"America/Asuncion (GMT-04:00)\",\"tzCode\":\"America/Asuncion\",\"name\":\"(GMT-04:00) Asunción, Ciudad del Este, San Lorenzo, Capiatá, Lambaré\",\"utc\":\"-04:00\"},{\"label\":\"America/Barbados (GMT-04:00)\",\"tzCode\":\"America/Barbados\",\"name\":\"(GMT-04:00) Bridgetown, Speightstown, Oistins, Bathsheba, Holetown\",\"utc\":\"-04:00\"},{\"label\":\"America/Blanc-Sablon (GMT-04:00)\",\"tzCode\":\"America/Blanc-Sablon\",\"name\":\"(GMT-04:00) Lévis\",\"utc\":\"-04:00\"},{\"label\":\"America/Boa_Vista (GMT-04:00)\",\"tzCode\":\"America/Boa_Vista\",\"name\":\"(GMT-04:00) Boa Vista\",\"utc\":\"-04:00\"},{\"label\":\"America/Campo_Grande (GMT-04:00)\",\"tzCode\":\"America/Campo_Grande\",\"name\":\"(GMT-04:00) Campo Grande, Dourados, Corumbá, Três Lagoas, Ponta Porã\",\"utc\":\"-04:00\"},{\"label\":\"America/Caracas (GMT-04:00)\",\"tzCode\":\"America/Caracas\",\"name\":\"(GMT-04:00) Caracas, Maracaibo, Maracay, Valencia, Barquisimeto\",\"utc\":\"-04:00\"},{\"label\":\"America/Cuiaba (GMT-04:00)\",\"tzCode\":\"America/Cuiaba\",\"name\":\"(GMT-04:00) Cuiabá, Várzea Grande, Rondonópolis, Sinop, Barra do Garças\",\"utc\":\"-04:00\"},{\"label\":\"America/Curacao (GMT-04:00)\",\"tzCode\":\"America/Curacao\",\"name\":\"(GMT-04:00) Willemstad, Sint Michiel Liber\",\"utc\":\"-04:00\"},{\"label\":\"America/Dominica (GMT-04:00)\",\"tzCode\":\"America/Dominica\",\"name\":\"(GMT-04:00) Roseau, Portsmouth, Berekua, Saint Joseph, Wesley\",\"utc\":\"-04:00\"},{\"label\":\"America/Glace_Bay (GMT-04:00)\",\"tzCode\":\"America/Glace_Bay\",\"name\":\"(GMT-04:00) Sydney, Glace Bay, Sydney Mines\",\"utc\":\"-04:00\"},{\"label\":\"America/Goose_Bay (GMT-04:00)\",\"tzCode\":\"America/Goose_Bay\",\"name\":\"(GMT-04:00) Labrador City, Happy Valley-Goose Bay\",\"utc\":\"-04:00\"},{\"label\":\"America/Grenada (GMT-04:00)\",\"tzCode\":\"America/Grenada\",\"name\":\"(GMT-04:00) Saint George's, Gouyave, Grenville, Victoria, Saint David’s\",\"utc\":\"-04:00\"},{\"label\":\"America/Guadeloupe (GMT-04:00)\",\"tzCode\":\"America/Guadeloupe\",\"name\":\"(GMT-04:00) Les Abymes, Baie-Mahault, Le Gosier, Petit-Bourg, Sainte-Anne\",\"utc\":\"-04:00\"},{\"label\":\"America/Guyana (GMT-04:00)\",\"tzCode\":\"America/Guyana\",\"name\":\"(GMT-04:00) Georgetown, Linden, New Amsterdam, Anna Regina, Bartica\",\"utc\":\"-04:00\"},{\"label\":\"America/Halifax (GMT-04:00)\",\"tzCode\":\"America/Halifax\",\"name\":\"(GMT-04:00) Halifax, Dartmouth, Charlottetown, Lower Sackville, Truro\",\"utc\":\"-04:00\"},{\"label\":\"America/Kralendijk (GMT-04:00)\",\"tzCode\":\"America/Kralendijk\",\"name\":\"(GMT-04:00) Kralendijk, Oranjestad, The Bottom\",\"utc\":\"-04:00\"},{\"label\":\"America/La_Paz (GMT-04:00)\",\"tzCode\":\"America/La_Paz\",\"name\":\"(GMT-04:00) Santa Cruz de la Sierra, Cochabamba, La Paz, Sucre, Oruro\",\"utc\":\"-04:00\"},{\"label\":\"America/Lower_Princes (GMT-04:00)\",\"tzCode\":\"America/Lower_Princes\",\"name\":\"(GMT-04:00) Cul de Sac, Lower Prince’s Quarter, Koolbaai, Philipsburg\",\"utc\":\"-04:00\"},{\"label\":\"America/Manaus (GMT-04:00)\",\"tzCode\":\"America/Manaus\",\"name\":\"(GMT-04:00) Manaus, Itacoatiara, Parintins, Manacapuru, Coari\",\"utc\":\"-04:00\"},{\"label\":\"America/Marigot (GMT-04:00)\",\"tzCode\":\"America/Marigot\",\"name\":\"(GMT-04:00) Marigot\",\"utc\":\"-04:00\"},{\"label\":\"America/Martinique (GMT-04:00)\",\"tzCode\":\"America/Martinique\",\"name\":\"(GMT-04:00) Fort-de-France, Le Lamentin, Le Robert, Sainte-Marie, Le François\",\"utc\":\"-04:00\"},{\"label\":\"America/Moncton (GMT-04:00)\",\"tzCode\":\"America/Moncton\",\"name\":\"(GMT-04:00) Moncton, Saint John, Fredericton, Dieppe, Miramichi\",\"utc\":\"-04:00\"},{\"label\":\"America/Montserrat (GMT-04:00)\",\"tzCode\":\"America/Montserrat\",\"name\":\"(GMT-04:00) Brades, Saint Peters, Plymouth\",\"utc\":\"-04:00\"},{\"label\":\"America/Porto_Velho (GMT-04:00)\",\"tzCode\":\"America/Porto_Velho\",\"name\":\"(GMT-04:00) Porto Velho, Ji Paraná, Vilhena, Ariquemes, Cacoal\",\"utc\":\"-04:00\"},{\"label\":\"America/Port_of_Spain (GMT-04:00)\",\"tzCode\":\"America/Port_of_Spain\",\"name\":\"(GMT-04:00) Chaguanas, Mon Repos, San Fernando, Port of Spain, Rio Claro\",\"utc\":\"-04:00\"},{\"label\":\"America/Puerto_Rico (GMT-04:00)\",\"tzCode\":\"America/Puerto_Rico\",\"name\":\"(GMT-04:00) San Juan, Bayamón, Carolina, Ponce, Caguas\",\"utc\":\"-04:00\"},{\"label\":\"America/Santiago (GMT-04:00)\",\"tzCode\":\"America/Santiago\",\"name\":\"(GMT-04:00) Santiago, Puente Alto, Antofagasta, Viña del Mar, Valparaíso\",\"utc\":\"-04:00\"},{\"label\":\"America/Santo_Domingo (GMT-04:00)\",\"tzCode\":\"America/Santo_Domingo\",\"name\":\"(GMT-04:00) Santo Domingo, Santiago de los Caballeros, Santo Domingo Oeste, Santo Domingo Este, San Pedro de Macorís\",\"utc\":\"-04:00\"},{\"label\":\"America/St_Barthelemy (GMT-04:00)\",\"tzCode\":\"America/St_Barthelemy\",\"name\":\"(GMT-04:00) Gustavia\",\"utc\":\"-04:00\"},{\"label\":\"America/St_Kitts (GMT-04:00)\",\"tzCode\":\"America/St_Kitts\",\"name\":\"(GMT-04:00) Basseterre, Fig Tree, Market Shop, Saint Paul’s, Middle Island\",\"utc\":\"-04:00\"},{\"label\":\"America/St_Lucia (GMT-04:00)\",\"tzCode\":\"America/St_Lucia\",\"name\":\"(GMT-04:00) Castries, Bisee, Vieux Fort, Micoud, Soufrière\",\"utc\":\"-04:00\"},{\"label\":\"America/St_Thomas (GMT-04:00)\",\"tzCode\":\"America/St_Thomas\",\"name\":\"(GMT-04:00) Saint Croix, Charlotte Amalie, Cruz Bay\",\"utc\":\"-04:00\"},{\"label\":\"America/St_Vincent (GMT-04:00)\",\"tzCode\":\"America/St_Vincent\",\"name\":\"(GMT-04:00) Kingstown, Kingstown Park, Georgetown, Barrouallie, Port Elizabeth\",\"utc\":\"-04:00\"},{\"label\":\"America/Thule (GMT-04:00)\",\"tzCode\":\"America/Thule\",\"name\":\"(GMT-04:00) Thule\",\"utc\":\"-04:00\"},{\"label\":\"America/Tortola (GMT-04:00)\",\"tzCode\":\"America/Tortola\",\"name\":\"(GMT-04:00) Road Town\",\"utc\":\"-04:00\"},{\"label\":\"Atlantic/Bermuda (GMT-04:00)\",\"tzCode\":\"Atlantic/Bermuda\",\"name\":\"(GMT-04:00) Hamilton\",\"utc\":\"-04:00\"},{\"label\":\"America/St_Johns (GMT-03:30)\",\"tzCode\":\"America/St_Johns\",\"name\":\"(GMT-03:30) St. John's, Mount Pearl, Corner Brook, Conception Bay South, Bay Roberts\",\"utc\":\"-03:30\"},{\"label\":\"America/Araguaina (GMT-03:00)\",\"tzCode\":\"America/Araguaina\",\"name\":\"(GMT-03:00) Palmas, Araguaína, Gurupi, Miracema do Tocantins, Porto Franco\",\"utc\":\"-03:00\"},{\"label\":\"America/Argentina/Buenos_Aires (GMT-03:00)\",\"tzCode\":\"America/Argentina/Buenos_Aires\",\"name\":\"(GMT-03:00) Buenos Aires, La Plata, Mar del Plata, Morón, Bahía Blanca\",\"utc\":\"-03:00\"},{\"label\":\"America/Argentina/Catamarca (GMT-03:00)\",\"tzCode\":\"America/Argentina/Catamarca\",\"name\":\"(GMT-03:00) San Fernando del Valle de Catamarca, Trelew, Puerto Madryn, Esquel, Rawson\",\"utc\":\"-03:00\"},{\"label\":\"America/Argentina/Cordoba (GMT-03:00)\",\"tzCode\":\"America/Argentina/Cordoba\",\"name\":\"(GMT-03:00) Córdoba, Rosario, Santa Fe, Resistencia, Santiago del Estero\",\"utc\":\"-03:00\"},{\"label\":\"America/Argentina/Jujuy (GMT-03:00)\",\"tzCode\":\"America/Argentina/Jujuy\",\"name\":\"(GMT-03:00) San Salvador de Jujuy, San Pedro de Jujuy, Libertador General San Martín, Palpalá, La Quiaca\",\"utc\":\"-03:00\"},{\"label\":\"America/Argentina/La_Rioja (GMT-03:00)\",\"tzCode\":\"America/Argentina/La_Rioja\",\"name\":\"(GMT-03:00) La Rioja, Chilecito, Arauco, Chamical\",\"utc\":\"-03:00\"},{\"label\":\"America/Argentina/Mendoza (GMT-03:00)\",\"tzCode\":\"America/Argentina/Mendoza\",\"name\":\"(GMT-03:00) Mendoza, San Rafael, San Martín\",\"utc\":\"-03:00\"},{\"label\":\"America/Argentina/Rio_Gallegos (GMT-03:00)\",\"tzCode\":\"America/Argentina/Rio_Gallegos\",\"name\":\"(GMT-03:00) Comodoro Rivadavia, Río Gallegos, Caleta Olivia, Pico Truncado, Puerto Deseado\",\"utc\":\"-03:00\"},{\"label\":\"America/Argentina/Salta (GMT-03:00)\",\"tzCode\":\"America/Argentina/Salta\",\"name\":\"(GMT-03:00) Salta, Neuquén, Santa Rosa, San Carlos de Bariloche, Cipolletti\",\"utc\":\"-03:00\"},{\"label\":\"America/Argentina/San_Juan (GMT-03:00)\",\"tzCode\":\"America/Argentina/San_Juan\",\"name\":\"(GMT-03:00) San Juan, Chimbas, Santa Lucía, Pocito, Caucete\",\"utc\":\"-03:00\"},{\"label\":\"America/Argentina/San_Luis (GMT-03:00)\",\"tzCode\":\"America/Argentina/San_Luis\",\"name\":\"(GMT-03:00) San Luis, Villa Mercedes, La Punta, Merlo, Justo Daract\",\"utc\":\"-03:00\"},{\"label\":\"America/Argentina/Tucuman (GMT-03:00)\",\"tzCode\":\"America/Argentina/Tucuman\",\"name\":\"(GMT-03:00) San Miguel de Tucumán, Yerba Buena, Tafí Viejo, Alderetes, Aguilares\",\"utc\":\"-03:00\"},{\"label\":\"America/Argentina/Ushuaia (GMT-03:00)\",\"tzCode\":\"America/Argentina/Ushuaia\",\"name\":\"(GMT-03:00) Ushuaia, Río Grande\",\"utc\":\"-03:00\"},{\"label\":\"America/Bahia (GMT-03:00)\",\"tzCode\":\"America/Bahia\",\"name\":\"(GMT-03:00) Salvador, Feira de Santana, Vitória da Conquista, Itabuna, Camaçari\",\"utc\":\"-03:00\"},{\"label\":\"America/Belem (GMT-03:00)\",\"tzCode\":\"America/Belem\",\"name\":\"(GMT-03:00) Belém, Ananindeua, Macapá, Parauapebas, Marabá\",\"utc\":\"-03:00\"},{\"label\":\"America/Cayenne (GMT-03:00)\",\"tzCode\":\"America/Cayenne\",\"name\":\"(GMT-03:00) Cayenne, Matoury, Saint-Laurent-du-Maroni, Kourou, Rémire-Montjoly\",\"utc\":\"-03:00\"},{\"label\":\"America/Fortaleza (GMT-03:00)\",\"tzCode\":\"America/Fortaleza\",\"name\":\"(GMT-03:00) Fortaleza, São Luís, Natal, Teresina, João Pessoa\",\"utc\":\"-03:00\"},{\"label\":\"America/Godthab (GMT-03:00)\",\"tzCode\":\"America/Godthab\",\"name\":\"(GMT-03:00) Nuuk, Sisimiut, Ilulissat, Qaqortoq, Aasiaat\",\"utc\":\"-03:00\"},{\"label\":\"America/Maceio (GMT-03:00)\",\"tzCode\":\"America/Maceio\",\"name\":\"(GMT-03:00) Maceió, Aracaju, Arapiraca, Nossa Senhora do Socorro, São Cristóvão\",\"utc\":\"-03:00\"},{\"label\":\"America/Miquelon (GMT-03:00)\",\"tzCode\":\"America/Miquelon\",\"name\":\"(GMT-03:00) Saint-Pierre, Miquelon\",\"utc\":\"-03:00\"},{\"label\":\"America/Montevideo (GMT-03:00)\",\"tzCode\":\"America/Montevideo\",\"name\":\"(GMT-03:00) Montevideo, Salto, Paysandú, Las Piedras, Rivera\",\"utc\":\"-03:00\"},{\"label\":\"America/Paramaribo (GMT-03:00)\",\"tzCode\":\"America/Paramaribo\",\"name\":\"(GMT-03:00) Paramaribo, Lelydorp, Brokopondo, Nieuw Nickerie, Moengo\",\"utc\":\"-03:00\"},{\"label\":\"America/Punta_Arenas (GMT-03:00)\",\"tzCode\":\"America/Punta_Arenas\",\"name\":\"(GMT-03:00) Punta Arenas, Puerto Natales\",\"utc\":\"-03:00\"},{\"label\":\"America/Recife (GMT-03:00)\",\"tzCode\":\"America/Recife\",\"name\":\"(GMT-03:00) Recife, Jaboatão, Jaboatão dos Guararapes, Olinda, Paulista\",\"utc\":\"-03:00\"},{\"label\":\"America/Santarem (GMT-03:00)\",\"tzCode\":\"America/Santarem\",\"name\":\"(GMT-03:00) Santarém, Altamira, Itaituba, Oriximiná, Alenquer\",\"utc\":\"-03:00\"},{\"label\":\"America/Sao_Paulo (GMT-03:00)\",\"tzCode\":\"America/Sao_Paulo\",\"name\":\"(GMT-03:00) São Paulo, Rio de Janeiro, Belo Horizonte, Brasília, Curitiba\",\"utc\":\"-03:00\"},{\"label\":\"Antarctica/Palmer (GMT-03:00)\",\"tzCode\":\"Antarctica/Palmer\",\"name\":\"(GMT-03:00) Palmer\",\"utc\":\"-03:00\"},{\"label\":\"Antarctica/Rothera (GMT-03:00)\",\"tzCode\":\"Antarctica/Rothera\",\"name\":\"(GMT-03:00) Rothera\",\"utc\":\"-03:00\"},{\"label\":\"Atlantic/Stanley (GMT-03:00)\",\"tzCode\":\"Atlantic/Stanley\",\"name\":\"(GMT-03:00) Stanley\",\"utc\":\"-03:00\"},{\"label\":\"America/Noronha (GMT-02:00)\",\"tzCode\":\"America/Noronha\",\"name\":\"(GMT-02:00) Itamaracá\",\"utc\":\"-02:00\"},{\"label\":\"Atlantic/South_Georgia (GMT-02:00)\",\"tzCode\":\"Atlantic/South_Georgia\",\"name\":\"(GMT-02:00) Grytviken\",\"utc\":\"-02:00\"},{\"label\":\"America/Scoresbysund (GMT-01:00)\",\"tzCode\":\"America/Scoresbysund\",\"name\":\"(GMT-01:00) Scoresbysund\",\"utc\":\"-01:00\"},{\"label\":\"Atlantic/Azores (GMT-01:00)\",\"tzCode\":\"Atlantic/Azores\",\"name\":\"(GMT-01:00) Ponta Delgada, Lagoa, Angra do Heroísmo, Rosto de Cão, Rabo de Peixe\",\"utc\":\"-01:00\"},{\"label\":\"Atlantic/Cape_Verde (GMT-01:00)\",\"tzCode\":\"Atlantic/Cape_Verde\",\"name\":\"(GMT-01:00) Praia, Mindelo, Santa Maria, Cova Figueira, Santa Cruz\",\"utc\":\"-01:00\"},{\"label\":\"Africa/Abidjan (GMT+00:00)\",\"tzCode\":\"Africa/Abidjan\",\"name\":\"(GMT+00:00) Abidjan, Abobo, Bouaké, Daloa, San-Pédro\",\"utc\":\"+00:00\"},{\"label\":\"Africa/Accra (GMT+00:00)\",\"tzCode\":\"Africa/Accra\",\"name\":\"(GMT+00:00) Accra, Kumasi, Tamale, Takoradi, Atsiaman\",\"utc\":\"+00:00\"},{\"label\":\"Africa/Bamako (GMT+00:00)\",\"tzCode\":\"Africa/Bamako\",\"name\":\"(GMT+00:00) Bamako, Sikasso, Mopti, Koutiala, Ségou\",\"utc\":\"+00:00\"},{\"label\":\"Africa/Banjul (GMT+00:00)\",\"tzCode\":\"Africa/Banjul\",\"name\":\"(GMT+00:00) Serekunda, Brikama, Bakau, Banjul, Farafenni\",\"utc\":\"+00:00\"},{\"label\":\"Africa/Bissau (GMT+00:00)\",\"tzCode\":\"Africa/Bissau\",\"name\":\"(GMT+00:00) Bissau, Bafatá, Gabú, Bissorã, Bolama\",\"utc\":\"+00:00\"},{\"label\":\"Africa/Casablanca (GMT+00:00)\",\"tzCode\":\"Africa/Casablanca\",\"name\":\"(GMT+00:00) Casablanca, Rabat, Fès, Sale, Marrakesh\",\"utc\":\"+00:00\"},{\"label\":\"Africa/Conakry (GMT+00:00)\",\"tzCode\":\"Africa/Conakry\",\"name\":\"(GMT+00:00) Camayenne, Conakry, Nzérékoré, Kindia, Kankan\",\"utc\":\"+00:00\"},{\"label\":\"Africa/Dakar (GMT+00:00)\",\"tzCode\":\"Africa/Dakar\",\"name\":\"(GMT+00:00) Dakar, Pikine, Touba, Thiès, Thiès Nones\",\"utc\":\"+00:00\"},{\"label\":\"Africa/El_Aaiun (GMT+00:00)\",\"tzCode\":\"Africa/El_Aaiun\",\"name\":\"(GMT+00:00) Laayoune, Dakhla, Laayoune Plage\",\"utc\":\"+00:00\"},{\"label\":\"Africa/Freetown (GMT+00:00)\",\"tzCode\":\"Africa/Freetown\",\"name\":\"(GMT+00:00) Freetown, Bo, Kenema, Koidu, Makeni\",\"utc\":\"+00:00\"},{\"label\":\"Africa/Lome (GMT+00:00)\",\"tzCode\":\"Africa/Lome\",\"name\":\"(GMT+00:00) Lomé, Sokodé, Kara, Atakpamé, Kpalimé\",\"utc\":\"+00:00\"},{\"label\":\"Africa/Monrovia (GMT+00:00)\",\"tzCode\":\"Africa/Monrovia\",\"name\":\"(GMT+00:00) Monrovia, Gbarnga, Kakata, Bensonville, Harper\",\"utc\":\"+00:00\"},{\"label\":\"Africa/Nouakchott (GMT+00:00)\",\"tzCode\":\"Africa/Nouakchott\",\"name\":\"(GMT+00:00) Nouakchott, Nouadhibou, Néma, Kaédi, Rosso\",\"utc\":\"+00:00\"},{\"label\":\"Africa/Ouagadougou (GMT+00:00)\",\"tzCode\":\"Africa/Ouagadougou\",\"name\":\"(GMT+00:00) Ouagadougou, Bobo-Dioulasso, Koudougou, Ouahigouya, Banfora\",\"utc\":\"+00:00\"},{\"label\":\"Africa/Sao_Tome (GMT+00:00)\",\"tzCode\":\"Africa/Sao_Tome\",\"name\":\"(GMT+00:00) São Tomé, Santo António\",\"utc\":\"+00:00\"},{\"label\":\"America/Danmarkshavn (GMT+00:00)\",\"tzCode\":\"America/Danmarkshavn\",\"name\":\"(GMT+00:00) Danmarkshavn\",\"utc\":\"+00:00\"},{\"label\":\"Antarctica/Troll (GMT+00:00)\",\"tzCode\":\"Antarctica/Troll\",\"name\":\"(GMT+00:00) Troll\",\"utc\":\"+00:00\"},{\"label\":\"Atlantic/Canary (GMT+00:00)\",\"tzCode\":\"Atlantic/Canary\",\"name\":\"(GMT+00:00) Las Palmas de Gran Canaria, Santa Cruz de Tenerife, La Laguna, Telde, Arona\",\"utc\":\"+00:00\"},{\"label\":\"Atlantic/Faroe (GMT+00:00)\",\"tzCode\":\"Atlantic/Faroe\",\"name\":\"(GMT+00:00) Tórshavn, Klaksvík, Fuglafjørður, Tvøroyri, Miðvágur\",\"utc\":\"+00:00\"},{\"label\":\"Atlantic/Madeira (GMT+00:00)\",\"tzCode\":\"Atlantic/Madeira\",\"name\":\"(GMT+00:00) Funchal, Câmara de Lobos, São Martinho, Caniço, Machico\",\"utc\":\"+00:00\"},{\"label\":\"Atlantic/Reykjavik (GMT+00:00)\",\"tzCode\":\"Atlantic/Reykjavik\",\"name\":\"(GMT+00:00) Reykjavík, Kópavogur, Hafnarfjörður, Akureyri, Garðabær\",\"utc\":\"+00:00\"},{\"label\":\"Atlantic/St_Helena (GMT+00:00)\",\"tzCode\":\"Atlantic/St_Helena\",\"name\":\"(GMT+00:00) Jamestown, Georgetown, Edinburgh of the Seven Seas\",\"utc\":\"+00:00\"},{\"label\":\"Europe/Dublin (GMT+00:00)\",\"tzCode\":\"Europe/Dublin\",\"name\":\"(GMT+00:00) Dublin, Cork, Luimneach, Gaillimh, Tallaght\",\"utc\":\"+00:00\"},{\"label\":\"Europe/Guernsey (GMT+00:00)\",\"tzCode\":\"Europe/Guernsey\",\"name\":\"(GMT+00:00) Saint Peter Port, St Martin, Saint Sampson, St Anne, Saint Saviour\",\"utc\":\"+00:00\"},{\"label\":\"Europe/Isle_of_Man (GMT+00:00)\",\"tzCode\":\"Europe/Isle_of_Man\",\"name\":\"(GMT+00:00) Douglas, Ramsey, Peel, Port Erin, Castletown\",\"utc\":\"+00:00\"},{\"label\":\"Europe/Jersey (GMT+00:00)\",\"tzCode\":\"Europe/Jersey\",\"name\":\"(GMT+00:00) Saint Helier, Le Hocq\",\"utc\":\"+00:00\"},{\"label\":\"Europe/Lisbon (GMT+00:00)\",\"tzCode\":\"Europe/Lisbon\",\"name\":\"(GMT+00:00) Lisbon, Porto, Amadora, Braga, Setúbal\",\"utc\":\"+00:00\"},{\"label\":\"Europe/London (GMT+00:00)\",\"tzCode\":\"Europe/London\",\"name\":\"(GMT+00:00) London, Birmingham, Liverpool, Sheffield, Bristol\",\"utc\":\"+00:00\"},{\"label\":\"Africa/Algiers (GMT+01:00)\",\"tzCode\":\"Africa/Algiers\",\"name\":\"(GMT+01:00) Algiers, Boumerdas, Oran, Tébessa, Constantine\",\"utc\":\"+01:00\"},{\"label\":\"Africa/Bangui (GMT+01:00)\",\"tzCode\":\"Africa/Bangui\",\"name\":\"(GMT+01:00) Bangui, Bimbo, Mbaïki, Berbérati, Kaga Bandoro\",\"utc\":\"+01:00\"},{\"label\":\"Africa/Brazzaville (GMT+01:00)\",\"tzCode\":\"Africa/Brazzaville\",\"name\":\"(GMT+01:00) Brazzaville, Pointe-Noire, Dolisie, Kayes, Owando\",\"utc\":\"+01:00\"},{\"label\":\"Africa/Ceuta (GMT+01:00)\",\"tzCode\":\"Africa/Ceuta\",\"name\":\"(GMT+01:00) Ceuta, Melilla\",\"utc\":\"+01:00\"},{\"label\":\"Africa/Douala (GMT+01:00)\",\"tzCode\":\"Africa/Douala\",\"name\":\"(GMT+01:00) Douala, Yaoundé, Garoua, Kousséri, Bamenda\",\"utc\":\"+01:00\"},{\"label\":\"Africa/Kinshasa (GMT+01:00)\",\"tzCode\":\"Africa/Kinshasa\",\"name\":\"(GMT+01:00) Kinshasa, Masina, Kikwit, Mbandaka, Matadi\",\"utc\":\"+01:00\"},{\"label\":\"Africa/Lagos (GMT+01:00)\",\"tzCode\":\"Africa/Lagos\",\"name\":\"(GMT+01:00) Lagos, Kano, Ibadan, Kaduna, Port Harcourt\",\"utc\":\"+01:00\"},{\"label\":\"Africa/Libreville (GMT+01:00)\",\"tzCode\":\"Africa/Libreville\",\"name\":\"(GMT+01:00) Libreville, Port-Gentil, Franceville, Oyem, Moanda\",\"utc\":\"+01:00\"},{\"label\":\"Africa/Luanda (GMT+01:00)\",\"tzCode\":\"Africa/Luanda\",\"name\":\"(GMT+01:00) Luanda, N’dalatando, Huambo, Lobito, Benguela\",\"utc\":\"+01:00\"},{\"label\":\"Africa/Malabo (GMT+01:00)\",\"tzCode\":\"Africa/Malabo\",\"name\":\"(GMT+01:00) Bata, Malabo, Ebebiyin, Aconibe, Añisoc\",\"utc\":\"+01:00\"},{\"label\":\"Africa/Ndjamena (GMT+01:00)\",\"tzCode\":\"Africa/Ndjamena\",\"name\":\"(GMT+01:00) N'Djamena, Moundou, Sarh, Abéché, Kelo\",\"utc\":\"+01:00\"},{\"label\":\"Africa/Niamey (GMT+01:00)\",\"tzCode\":\"Africa/Niamey\",\"name\":\"(GMT+01:00) Niamey, Zinder, Maradi, Agadez, Alaghsas\",\"utc\":\"+01:00\"},{\"label\":\"Africa/Porto-Novo (GMT+01:00)\",\"tzCode\":\"Africa/Porto-Novo\",\"name\":\"(GMT+01:00) Cotonou, Abomey-Calavi, Djougou, Porto-Novo, Parakou\",\"utc\":\"+01:00\"},{\"label\":\"Africa/Tunis (GMT+01:00)\",\"tzCode\":\"Africa/Tunis\",\"name\":\"(GMT+01:00) Tunis, Sfax, Sousse, Kairouan, Bizerte\",\"utc\":\"+01:00\"},{\"label\":\"Africa/Windhoek (GMT+01:00)\",\"tzCode\":\"Africa/Windhoek\",\"name\":\"(GMT+01:00) Windhoek, Rundu, Walvis Bay, Oshakati, Swakopmund\",\"utc\":\"+01:00\"},{\"label\":\"Arctic/Longyearbyen (GMT+01:00)\",\"tzCode\":\"Arctic/Longyearbyen\",\"name\":\"(GMT+01:00) Longyearbyen, Olonkinbyen\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Amsterdam (GMT+01:00)\",\"tzCode\":\"Europe/Amsterdam\",\"name\":\"(GMT+01:00) Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Andorra (GMT+01:00)\",\"tzCode\":\"Europe/Andorra\",\"name\":\"(GMT+01:00) Andorra la Vella, les Escaldes, Encamp, Sant Julià de Lòria, la Massana\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Belgrade (GMT+01:00)\",\"tzCode\":\"Europe/Belgrade\",\"name\":\"(GMT+01:00) Belgrade, Pristina, Niš, Novi Sad, Prizren\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Berlin (GMT+01:00)\",\"tzCode\":\"Europe/Berlin\",\"name\":\"(GMT+01:00) Berlin, Hamburg, Munich, Köln, Frankfurt am Main\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Bratislava (GMT+01:00)\",\"tzCode\":\"Europe/Bratislava\",\"name\":\"(GMT+01:00) Bratislava, Košice, Prešov, Nitra, Žilina\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Brussels (GMT+01:00)\",\"tzCode\":\"Europe/Brussels\",\"name\":\"(GMT+01:00) Brussels, Antwerpen, Gent, Charleroi, Liège\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Budapest (GMT+01:00)\",\"tzCode\":\"Europe/Budapest\",\"name\":\"(GMT+01:00) Budapest, Debrecen, Miskolc, Szeged, Pécs\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Copenhagen (GMT+01:00)\",\"tzCode\":\"Europe/Copenhagen\",\"name\":\"(GMT+01:00) Copenhagen, Århus, Odense, Aalborg, Frederiksberg\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Gibraltar (GMT+01:00)\",\"tzCode\":\"Europe/Gibraltar\",\"name\":\"(GMT+01:00) Gibraltar\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Ljubljana (GMT+01:00)\",\"tzCode\":\"Europe/Ljubljana\",\"name\":\"(GMT+01:00) Ljubljana, Maribor, Celje, Kranj, Velenje\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Luxembourg (GMT+01:00)\",\"tzCode\":\"Europe/Luxembourg\",\"name\":\"(GMT+01:00) Luxembourg, Esch-sur-Alzette, Dudelange, Schifflange, Bettembourg\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Madrid (GMT+01:00)\",\"tzCode\":\"Europe/Madrid\",\"name\":\"(GMT+01:00) Madrid, Barcelona, Valencia, Sevilla, Zaragoza\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Malta (GMT+01:00)\",\"tzCode\":\"Europe/Malta\",\"name\":\"(GMT+01:00) Birkirkara, Qormi, Mosta, Żabbar, San Pawl il-Baħar\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Monaco (GMT+01:00)\",\"tzCode\":\"Europe/Monaco\",\"name\":\"(GMT+01:00) Monaco, Monte-Carlo, La Condamine\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Oslo (GMT+01:00)\",\"tzCode\":\"Europe/Oslo\",\"name\":\"(GMT+01:00) Oslo, Bergen, Trondheim, Stavanger, Drammen\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Paris (GMT+01:00)\",\"tzCode\":\"Europe/Paris\",\"name\":\"(GMT+01:00) Paris, Marseille, Lyon, Toulouse, Nice\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Podgorica (GMT+01:00)\",\"tzCode\":\"Europe/Podgorica\",\"name\":\"(GMT+01:00) Podgorica, Nikšić, Herceg Novi, Pljevlja, Budva\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Prague (GMT+01:00)\",\"tzCode\":\"Europe/Prague\",\"name\":\"(GMT+01:00) Prague, Brno, Ostrava, Pilsen, Olomouc\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Rome (GMT+01:00)\",\"tzCode\":\"Europe/Rome\",\"name\":\"(GMT+01:00) Rome, Milan, Naples, Turin, Palermo\",\"utc\":\"+01:00\"},{\"label\":\"Europe/San_Marino (GMT+01:00)\",\"tzCode\":\"Europe/San_Marino\",\"name\":\"(GMT+01:00) Serravalle, Borgo Maggiore, San Marino, Domagnano, Fiorentino\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Sarajevo (GMT+01:00)\",\"tzCode\":\"Europe/Sarajevo\",\"name\":\"(GMT+01:00) Sarajevo, Banja Luka, Zenica, Tuzla, Mostar\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Skopje (GMT+01:00)\",\"tzCode\":\"Europe/Skopje\",\"name\":\"(GMT+01:00) Skopje, Bitola, Kumanovo, Prilep, Tetovo\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Stockholm (GMT+01:00)\",\"tzCode\":\"Europe/Stockholm\",\"name\":\"(GMT+01:00) Stockholm, Göteborg, Malmö, Uppsala, Sollentuna\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Tirane (GMT+01:00)\",\"tzCode\":\"Europe/Tirane\",\"name\":\"(GMT+01:00) Tirana, Durrës, Elbasan, Vlorë, Shkodër\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Vaduz (GMT+01:00)\",\"tzCode\":\"Europe/Vaduz\",\"name\":\"(GMT+01:00) Schaan, Vaduz, Triesen, Balzers, Eschen\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Vatican (GMT+01:00)\",\"tzCode\":\"Europe/Vatican\",\"name\":\"(GMT+01:00) Vatican City\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Vienna (GMT+01:00)\",\"tzCode\":\"Europe/Vienna\",\"name\":\"(GMT+01:00) Vienna, Graz, Linz, Favoriten, Donaustadt\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Warsaw (GMT+01:00)\",\"tzCode\":\"Europe/Warsaw\",\"name\":\"(GMT+01:00) Warsaw, Łódź, Kraków, Wrocław, Poznań\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Zagreb (GMT+01:00)\",\"tzCode\":\"Europe/Zagreb\",\"name\":\"(GMT+01:00) Zagreb, Split, Rijeka, Osijek, Zadar\",\"utc\":\"+01:00\"},{\"label\":\"Europe/Zurich (GMT+01:00)\",\"tzCode\":\"Europe/Zurich\",\"name\":\"(GMT+01:00) Zürich, Genève, Basel, Lausanne, Bern\",\"utc\":\"+01:00\"},{\"label\":\"Africa/Blantyre (GMT+02:00)\",\"tzCode\":\"Africa/Blantyre\",\"name\":\"(GMT+02:00) Lilongwe, Blantyre, Mzuzu, Zomba, Kasungu\",\"utc\":\"+02:00\"},{\"label\":\"Africa/Bujumbura (GMT+02:00)\",\"tzCode\":\"Africa/Bujumbura\",\"name\":\"(GMT+02:00) Bujumbura, Muyinga, Gitega, Ruyigi, Ngozi\",\"utc\":\"+02:00\"},{\"label\":\"Africa/Cairo (GMT+02:00)\",\"tzCode\":\"Africa/Cairo\",\"name\":\"(GMT+02:00) Cairo, Alexandria, Giza, Port Said, Suez\",\"utc\":\"+02:00\"},{\"label\":\"Africa/Gaborone (GMT+02:00)\",\"tzCode\":\"Africa/Gaborone\",\"name\":\"(GMT+02:00) Gaborone, Francistown, Molepolole, Selebi-Phikwe, Maun\",\"utc\":\"+02:00\"},{\"label\":\"Africa/Harare (GMT+02:00)\",\"tzCode\":\"Africa/Harare\",\"name\":\"(GMT+02:00) Harare, Bulawayo, Chitungwiza, Mutare, Gweru\",\"utc\":\"+02:00\"},{\"label\":\"Africa/Johannesburg (GMT+02:00)\",\"tzCode\":\"Africa/Johannesburg\",\"name\":\"(GMT+02:00) Cape Town, Durban, Johannesburg, Soweto, Pretoria\",\"utc\":\"+02:00\"},{\"label\":\"Africa/Juba (GMT+02:00)\",\"tzCode\":\"Africa/Juba\",\"name\":\"(GMT+02:00) Juba, Winejok, Malakal, Wau, Kuacjok\",\"utc\":\"+02:00\"},{\"label\":\"Africa/Khartoum (GMT+02:00)\",\"tzCode\":\"Africa/Khartoum\",\"name\":\"(GMT+02:00) Khartoum, Omdurman, Nyala, Port Sudan, Kassala\",\"utc\":\"+02:00\"},{\"label\":\"Africa/Kigali (GMT+02:00)\",\"tzCode\":\"Africa/Kigali\",\"name\":\"(GMT+02:00) Kigali, Butare, Gitarama, Musanze, Gisenyi\",\"utc\":\"+02:00\"},{\"label\":\"Africa/Lubumbashi (GMT+02:00)\",\"tzCode\":\"Africa/Lubumbashi\",\"name\":\"(GMT+02:00) Lubumbashi, Mbuji-Mayi, Kisangani, Kananga, Likasi\",\"utc\":\"+02:00\"},{\"label\":\"Africa/Lusaka (GMT+02:00)\",\"tzCode\":\"Africa/Lusaka\",\"name\":\"(GMT+02:00) Lusaka, Kitwe, Ndola, Kabwe, Chingola\",\"utc\":\"+02:00\"},{\"label\":\"Africa/Maputo (GMT+02:00)\",\"tzCode\":\"Africa/Maputo\",\"name\":\"(GMT+02:00) Maputo, Matola, Beira, Nampula, Chimoio\",\"utc\":\"+02:00\"},{\"label\":\"Africa/Maseru (GMT+02:00)\",\"tzCode\":\"Africa/Maseru\",\"name\":\"(GMT+02:00) Maseru, Mafeteng, Leribe, Maputsoe, Mohale’s Hoek\",\"utc\":\"+02:00\"},{\"label\":\"Africa/Mbabane (GMT+02:00)\",\"tzCode\":\"Africa/Mbabane\",\"name\":\"(GMT+02:00) Manzini, Mbabane, Big Bend, Malkerns, Nhlangano\",\"utc\":\"+02:00\"},{\"label\":\"Africa/Tripoli (GMT+02:00)\",\"tzCode\":\"Africa/Tripoli\",\"name\":\"(GMT+02:00) Tripoli, Benghazi, Mişrātah, Tarhuna, Al Khums\",\"utc\":\"+02:00\"},{\"label\":\"Asia/Amman (GMT+02:00)\",\"tzCode\":\"Asia/Amman\",\"name\":\"(GMT+02:00) Amman, Zarqa, Irbid, Russeifa, Wādī as Sīr\",\"utc\":\"+02:00\"},{\"label\":\"Asia/Beirut (GMT+02:00)\",\"tzCode\":\"Asia/Beirut\",\"name\":\"(GMT+02:00) Beirut, Ra’s Bayrūt, Tripoli, Sidon, Tyre\",\"utc\":\"+02:00\"},{\"label\":\"Asia/Damascus (GMT+02:00)\",\"tzCode\":\"Asia/Damascus\",\"name\":\"(GMT+02:00) Aleppo, Damascus, Homs, Ḩamāh, Latakia\",\"utc\":\"+02:00\"},{\"label\":\"Asia/Famagusta (GMT+02:00)\",\"tzCode\":\"Asia/Famagusta\",\"name\":\"(GMT+02:00) Famagusta, Kyrenia, Protaras, Paralímni, Lápithos\",\"utc\":\"+02:00\"},{\"label\":\"Asia/Gaza (GMT+02:00)\",\"tzCode\":\"Asia/Gaza\",\"name\":\"(GMT+02:00) Gaza, Khān Yūnis, Jabālyā, Rafaḩ, Dayr al Balaḩ\",\"utc\":\"+02:00\"},{\"label\":\"Asia/Hebron (GMT+02:00)\",\"tzCode\":\"Asia/Hebron\",\"name\":\"(GMT+02:00) East Jerusalem, Hebron, Nablus, Battir, Ţūlkarm\",\"utc\":\"+02:00\"},{\"label\":\"Asia/Jerusalem (GMT+02:00)\",\"tzCode\":\"Asia/Jerusalem\",\"name\":\"(GMT+02:00) Jerusalem, Tel Aviv, West Jerusalem, Haifa, Ashdod\",\"utc\":\"+02:00\"},{\"label\":\"Asia/Nicosia (GMT+02:00)\",\"tzCode\":\"Asia/Nicosia\",\"name\":\"(GMT+02:00) Nicosia, Limassol, Larnaca, Stróvolos, Paphos\",\"utc\":\"+02:00\"},{\"label\":\"Europe/Athens (GMT+02:00)\",\"tzCode\":\"Europe/Athens\",\"name\":\"(GMT+02:00) Athens, Thessaloníki, Pátra, Piraeus, Lárisa\",\"utc\":\"+02:00\"},{\"label\":\"Europe/Bucharest (GMT+02:00)\",\"tzCode\":\"Europe/Bucharest\",\"name\":\"(GMT+02:00) Bucharest, Sector 3, Sector 6, Sector 2, Iaşi\",\"utc\":\"+02:00\"},{\"label\":\"Europe/Chisinau (GMT+02:00)\",\"tzCode\":\"Europe/Chisinau\",\"name\":\"(GMT+02:00) Chisinau, Tiraspol, Bălţi, Bender, Rîbniţa\",\"utc\":\"+02:00\"},{\"label\":\"Europe/Helsinki (GMT+02:00)\",\"tzCode\":\"Europe/Helsinki\",\"name\":\"(GMT+02:00) Helsinki, Espoo, Tampere, Vantaa, Turku\",\"utc\":\"+02:00\"},{\"label\":\"Europe/Kaliningrad (GMT+02:00)\",\"tzCode\":\"Europe/Kaliningrad\",\"name\":\"(GMT+02:00) Kaliningrad, Chernyakhovsk, Sovetsk, Baltiysk, Gusev\",\"utc\":\"+02:00\"},{\"label\":\"Europe/Kyiv (GMT+02:00)\",\"tzCode\":\"Europe/Kyiv\",\"name\":\"(GMT+02:00) Kyiv, Kharkiv, Donetsk, Odesa, Dnipro\",\"utc\":\"+02:00\"},{\"label\":\"Europe/Mariehamn (GMT+02:00)\",\"tzCode\":\"Europe/Mariehamn\",\"name\":\"(GMT+02:00) Mariehamn\",\"utc\":\"+02:00\"},{\"label\":\"Europe/Riga (GMT+02:00)\",\"tzCode\":\"Europe/Riga\",\"name\":\"(GMT+02:00) Riga, Daugavpils, Liepāja, Jelgava, Jūrmala\",\"utc\":\"+02:00\"},{\"label\":\"Europe/Sofia (GMT+02:00)\",\"tzCode\":\"Europe/Sofia\",\"name\":\"(GMT+02:00) Sofia, Plovdiv, Varna, Burgas, Ruse\",\"utc\":\"+02:00\"},{\"label\":\"Europe/Tallinn (GMT+02:00)\",\"tzCode\":\"Europe/Tallinn\",\"name\":\"(GMT+02:00) Tallinn, Tartu, Narva, Kohtla-Järve, Pärnu\",\"utc\":\"+02:00\"},{\"label\":\"Europe/Uzhgorod (GMT+02:00)\",\"tzCode\":\"Europe/Uzhgorod\",\"name\":\"(GMT+02:00) Uzhgorod, Mukachevo, Khust, Berehove, Tyachiv\",\"utc\":\"+02:00\"},{\"label\":\"Europe/Vilnius (GMT+02:00)\",\"tzCode\":\"Europe/Vilnius\",\"name\":\"(GMT+02:00) Vilnius, Kaunas, Klaipėda, Šiauliai, Panevėžys\",\"utc\":\"+02:00\"},{\"label\":\"Europe/Zaporizhzhia (GMT+02:00)\",\"tzCode\":\"Europe/Zaporizhzhia\",\"name\":\"(GMT+02:00) Luhansk, Sevastopol, Sievierodonetsk, Alchevsk, Lysychansk\",\"utc\":\"+02:00\"},{\"label\":\"Africa/Addis_Ababa (GMT+03:00)\",\"tzCode\":\"Africa/Addis_Ababa\",\"name\":\"(GMT+03:00) Addis Ababa, Dire Dawa, Mek'ele, Nazrēt, Bahir Dar\",\"utc\":\"+03:00\"},{\"label\":\"Africa/Asmara (GMT+03:00)\",\"tzCode\":\"Africa/Asmara\",\"name\":\"(GMT+03:00) Asmara, Keren, Massawa, Assab, Mendefera\",\"utc\":\"+03:00\"},{\"label\":\"Africa/Dar_es_Salaam (GMT+03:00)\",\"tzCode\":\"Africa/Dar_es_Salaam\",\"name\":\"(GMT+03:00) Dar es Salaam, Mwanza, Zanzibar, Arusha, Mbeya\",\"utc\":\"+03:00\"},{\"label\":\"Africa/Djibouti (GMT+03:00)\",\"tzCode\":\"Africa/Djibouti\",\"name\":\"(GMT+03:00) Djibouti, 'Ali Sabieh, Tadjourah, Obock, Dikhil\",\"utc\":\"+03:00\"},{\"label\":\"Africa/Kampala (GMT+03:00)\",\"tzCode\":\"Africa/Kampala\",\"name\":\"(GMT+03:00) Kampala, Gulu, Lira, Mbarara, Jinja\",\"utc\":\"+03:00\"},{\"label\":\"Africa/Mogadishu (GMT+03:00)\",\"tzCode\":\"Africa/Mogadishu\",\"name\":\"(GMT+03:00) Mogadishu, Hargeysa, Berbera, Kismayo, Marka\",\"utc\":\"+03:00\"},{\"label\":\"Africa/Nairobi (GMT+03:00)\",\"tzCode\":\"Africa/Nairobi\",\"name\":\"(GMT+03:00) Nairobi, Mombasa, Nakuru, Eldoret, Kisumu\",\"utc\":\"+03:00\"},{\"label\":\"Antarctica/Syowa (GMT+03:00)\",\"tzCode\":\"Antarctica/Syowa\",\"name\":\"(GMT+03:00) Syowa\",\"utc\":\"+03:00\"},{\"label\":\"Asia/Aden (GMT+03:00)\",\"tzCode\":\"Asia/Aden\",\"name\":\"(GMT+03:00) Sanaa, Al Ḩudaydah, Taiz, Aden, Mukalla\",\"utc\":\"+03:00\"},{\"label\":\"Asia/Baghdad (GMT+03:00)\",\"tzCode\":\"Asia/Baghdad\",\"name\":\"(GMT+03:00) Baghdad, Basrah, Al Mawşil al Jadīdah, Al Başrah al Qadīmah, Mosul\",\"utc\":\"+03:00\"},{\"label\":\"Asia/Bahrain (GMT+03:00)\",\"tzCode\":\"Asia/Bahrain\",\"name\":\"(GMT+03:00) Manama, Al Muharraq, Ar Rifā‘, Dār Kulayb, Madīnat Ḩamad\",\"utc\":\"+03:00\"},{\"label\":\"Asia/Kuwait (GMT+03:00)\",\"tzCode\":\"Asia/Kuwait\",\"name\":\"(GMT+03:00) Al Aḩmadī, Ḩawallī, As Sālimīyah, Şabāḩ as Sālim, Al Farwānīyah\",\"utc\":\"+03:00\"},{\"label\":\"Asia/Qatar (GMT+03:00)\",\"tzCode\":\"Asia/Qatar\",\"name\":\"(GMT+03:00) Doha, Ar Rayyān, Umm Şalāl Muḩammad, Al Wakrah, Al Khawr\",\"utc\":\"+03:00\"},{\"label\":\"Asia/Riyadh (GMT+03:00)\",\"tzCode\":\"Asia/Riyadh\",\"name\":\"(GMT+03:00) Riyadh, Jeddah, Mecca, Medina, Sulţānah\",\"utc\":\"+03:00\"},{\"label\":\"Europe/Istanbul (GMT+03:00)\",\"tzCode\":\"Europe/Istanbul\",\"name\":\"(GMT+03:00) Istanbul, Ankara, İzmir, Bursa, Adana\",\"utc\":\"+03:00\"},{\"label\":\"Europe/Kirov (GMT+03:00)\",\"tzCode\":\"Europe/Kirov\",\"name\":\"(GMT+03:00) Kirov, Kirovo-Chepetsk, Vyatskiye Polyany, Slobodskoy, Kotel’nich\",\"utc\":\"+03:00\"},{\"label\":\"Europe/Minsk (GMT+03:00)\",\"tzCode\":\"Europe/Minsk\",\"name\":\"(GMT+03:00) Minsk, Homyel', Mahilyow, Vitebsk, Hrodna\",\"utc\":\"+03:00\"},{\"label\":\"Europe/Moscow (GMT+03:00)\",\"tzCode\":\"Europe/Moscow\",\"name\":\"(GMT+03:00) Moscow, Saint Petersburg, Nizhniy Novgorod, Kazan, Rostov-na-Donu\",\"utc\":\"+03:00\"},{\"label\":\"Europe/Simferopol (GMT+03:00)\",\"tzCode\":\"Europe/Simferopol\",\"name\":\"(GMT+03:00) Simferopol, Kerch, Yevpatoriya, Yalta, Feodosiya\",\"utc\":\"+03:00\"},{\"label\":\"Europe/Volgograd (GMT+03:00)\",\"tzCode\":\"Europe/Volgograd\",\"name\":\"(GMT+03:00) Volgograd, Volzhskiy, Kamyshin, Mikhaylovka, Uryupinsk\",\"utc\":\"+03:00\"},{\"label\":\"Indian/Antananarivo (GMT+03:00)\",\"tzCode\":\"Indian/Antananarivo\",\"name\":\"(GMT+03:00) Antananarivo, Toamasina, Antsirabe, Fianarantsoa, Mahajanga\",\"utc\":\"+03:00\"},{\"label\":\"Indian/Comoro (GMT+03:00)\",\"tzCode\":\"Indian/Comoro\",\"name\":\"(GMT+03:00) Moroni, Moutsamoudou, Fomboni, Domoni, Tsimbeo\",\"utc\":\"+03:00\"},{\"label\":\"Indian/Mayotte (GMT+03:00)\",\"tzCode\":\"Indian/Mayotte\",\"name\":\"(GMT+03:00) Mamoudzou, Koungou, Dzaoudzi, Dembeni, Sada\",\"utc\":\"+03:00\"},{\"label\":\"Asia/Tehran (GMT+03:30)\",\"tzCode\":\"Asia/Tehran\",\"name\":\"(GMT+03:30) Tehran, Mashhad, Isfahan, Karaj, Tabriz\",\"utc\":\"+03:30\"},{\"label\":\"Asia/Baku (GMT+04:00)\",\"tzCode\":\"Asia/Baku\",\"name\":\"(GMT+04:00) Baku, Ganja, Sumqayıt, Lankaran, Yevlakh\",\"utc\":\"+04:00\"},{\"label\":\"Asia/Dubai (GMT+04:00)\",\"tzCode\":\"Asia/Dubai\",\"name\":\"(GMT+04:00) Dubai, Sharjah, Abu Dhabi, Ajman City, Ras Al Khaimah City\",\"utc\":\"+04:00\"},{\"label\":\"Asia/Muscat (GMT+04:00)\",\"tzCode\":\"Asia/Muscat\",\"name\":\"(GMT+04:00) Muscat, Seeb, Şalālah, Bawshar, Sohar\",\"utc\":\"+04:00\"},{\"label\":\"Asia/Tbilisi (GMT+04:00)\",\"tzCode\":\"Asia/Tbilisi\",\"name\":\"(GMT+04:00) Tbilisi, Kutaisi, Batumi, Sokhumi, Zugdidi\",\"utc\":\"+04:00\"},{\"label\":\"Asia/Yerevan (GMT+04:00)\",\"tzCode\":\"Asia/Yerevan\",\"name\":\"(GMT+04:00) Yerevan, Gyumri, Vanadzor, Vagharshapat, Hrazdan\",\"utc\":\"+04:00\"},{\"label\":\"Europe/Astrakhan (GMT+04:00)\",\"tzCode\":\"Europe/Astrakhan\",\"name\":\"(GMT+04:00) Astrakhan, Akhtubinsk, Znamensk, Kharabali, Kamyzyak\",\"utc\":\"+04:00\"},{\"label\":\"Europe/Samara (GMT+04:00)\",\"tzCode\":\"Europe/Samara\",\"name\":\"(GMT+04:00) Samara, Togliatti-on-the-Volga, Izhevsk, Syzran’, Novokuybyshevsk\",\"utc\":\"+04:00\"},{\"label\":\"Europe/Saratov (GMT+04:00)\",\"tzCode\":\"Europe/Saratov\",\"name\":\"(GMT+04:00) Saratov, Balakovo, Engel’s, Balashov, Vol’sk\",\"utc\":\"+04:00\"},{\"label\":\"Europe/Ulyanovsk (GMT+04:00)\",\"tzCode\":\"Europe/Ulyanovsk\",\"name\":\"(GMT+04:00) Ulyanovsk, Dimitrovgrad, Inza, Barysh, Novoul’yanovsk\",\"utc\":\"+04:00\"},{\"label\":\"Indian/Mahe (GMT+04:00)\",\"tzCode\":\"Indian/Mahe\",\"name\":\"(GMT+04:00) Victoria, Anse Boileau, Bel Ombre, Beau Vallon, Cascade\",\"utc\":\"+04:00\"},{\"label\":\"Indian/Mauritius (GMT+04:00)\",\"tzCode\":\"Indian/Mauritius\",\"name\":\"(GMT+04:00) Port Louis, Beau Bassin-Rose Hill, Vacoas, Curepipe, Quatre Bornes\",\"utc\":\"+04:00\"},{\"label\":\"Indian/Reunion (GMT+04:00)\",\"tzCode\":\"Indian/Reunion\",\"name\":\"(GMT+04:00) Saint-Denis, Saint-Paul, Saint-Pierre, Le Tampon, Saint-André\",\"utc\":\"+04:00\"},{\"label\":\"Asia/Kabul (GMT+04:30)\",\"tzCode\":\"Asia/Kabul\",\"name\":\"(GMT+04:30) Kabul, Kandahār, Mazār-e Sharīf, Herāt, Jalālābād\",\"utc\":\"+04:30\"},{\"label\":\"Antarctica/Mawson (GMT+05:00)\",\"tzCode\":\"Antarctica/Mawson\",\"name\":\"(GMT+05:00) Mawson\",\"utc\":\"+05:00\"},{\"label\":\"Asia/Aqtau (GMT+05:00)\",\"tzCode\":\"Asia/Aqtau\",\"name\":\"(GMT+05:00) Shevchenko, Zhanaozen, Beyneu, Shetpe, Yeraliyev\",\"utc\":\"+05:00\"},{\"label\":\"Asia/Aqtobe (GMT+05:00)\",\"tzCode\":\"Asia/Aqtobe\",\"name\":\"(GMT+05:00) Aktobe, Kandyagash, Shalqar, Khromtau, Embi\",\"utc\":\"+05:00\"},{\"label\":\"Asia/Ashgabat (GMT+05:00)\",\"tzCode\":\"Asia/Ashgabat\",\"name\":\"(GMT+05:00) Ashgabat, Türkmenabat, Daşoguz, Mary, Balkanabat\",\"utc\":\"+05:00\"},{\"label\":\"Asia/Atyrau (GMT+05:00)\",\"tzCode\":\"Asia/Atyrau\",\"name\":\"(GMT+05:00) Atyrau, Qulsary, Shalkar, Balykshi, Maqat\",\"utc\":\"+05:00\"},{\"label\":\"Asia/Dushanbe (GMT+05:00)\",\"tzCode\":\"Asia/Dushanbe\",\"name\":\"(GMT+05:00) Dushanbe, Khujand, Kŭlob, Bokhtar, Istaravshan\",\"utc\":\"+05:00\"},{\"label\":\"Asia/Karachi (GMT+05:00)\",\"tzCode\":\"Asia/Karachi\",\"name\":\"(GMT+05:00) Karachi, Lahore, Faisalabad, Rawalpindi, Multan\",\"utc\":\"+05:00\"},{\"label\":\"Asia/Oral (GMT+05:00)\",\"tzCode\":\"Asia/Oral\",\"name\":\"(GMT+05:00) Oral, Aqsay, Zhänibek, Tasqala, Zhumysker\",\"utc\":\"+05:00\"},{\"label\":\"Asia/Qyzylorda (GMT+05:00)\",\"tzCode\":\"Asia/Qyzylorda\",\"name\":\"(GMT+05:00) Kyzylorda, Baikonur, Novokazalinsk, Aral, Chiili\",\"utc\":\"+05:00\"},{\"label\":\"Asia/Samarkand (GMT+05:00)\",\"tzCode\":\"Asia/Samarkand\",\"name\":\"(GMT+05:00) Samarkand, Bukhara, Nukus, Qarshi, Jizzax\",\"utc\":\"+05:00\"},{\"label\":\"Asia/Tashkent (GMT+05:00)\",\"tzCode\":\"Asia/Tashkent\",\"name\":\"(GMT+05:00) Tashkent, Namangan, Andijon, Qo‘qon, Chirchiq\",\"utc\":\"+05:00\"},{\"label\":\"Asia/Yekaterinburg (GMT+05:00)\",\"tzCode\":\"Asia/Yekaterinburg\",\"name\":\"(GMT+05:00) Yekaterinburg, Chelyabinsk, Ufa, Perm, Orenburg\",\"utc\":\"+05:00\"},{\"label\":\"Indian/Kerguelen (GMT+05:00)\",\"tzCode\":\"Indian/Kerguelen\",\"name\":\"(GMT+05:00) Port-aux-Français\",\"utc\":\"+05:00\"},{\"label\":\"Indian/Maldives (GMT+05:00)\",\"tzCode\":\"Indian/Maldives\",\"name\":\"(GMT+05:00) Male, Fuvahmulah, Hithadhoo, Kulhudhuffushi, Thinadhoo\",\"utc\":\"+05:00\"},{\"label\":\"Asia/Colombo (GMT+05:30)\",\"tzCode\":\"Asia/Colombo\",\"name\":\"(GMT+05:30) Colombo, Dehiwala-Mount Lavinia, Moratuwa, Jaffna, Negombo\",\"utc\":\"+05:30\"},{\"label\":\"Asia/Kolkata (GMT+05:30)\",\"tzCode\":\"Asia/Kolkata\",\"name\":\"(GMT+05:30) Mumbai, Delhi, Bengaluru, Kolkata, Chennai\",\"utc\":\"+05:30\"},{\"label\":\"Asia/Kathmandu (GMT+05:45)\",\"tzCode\":\"Asia/Kathmandu\",\"name\":\"(GMT+05:45) Kathmandu, Pokhara, Pātan, Biratnagar, Birgañj\",\"utc\":\"+05:45\"},{\"label\":\"Antarctica/Vostok (GMT+06:00)\",\"tzCode\":\"Antarctica/Vostok\",\"name\":\"(GMT+06:00) Vostok\",\"utc\":\"+06:00\"},{\"label\":\"Asia/Almaty (GMT+05:00)\",\"tzCode\":\"Asia/Almaty\",\"name\":\"(GMT+05:00) Almaty, Karagandy, Shymkent, Taraz, Nur-Sultan\",\"utc\":\"+05:00\"},{\"label\":\"Asia/Bishkek (GMT+06:00)\",\"tzCode\":\"Asia/Bishkek\",\"name\":\"(GMT+06:00) Bishkek, Osh, Jalal-Abad, Karakol, Tokmok\",\"utc\":\"+06:00\"},{\"label\":\"Asia/Dhaka (GMT+06:00)\",\"tzCode\":\"Asia/Dhaka\",\"name\":\"(GMT+06:00) Dhaka, Chattogram, Khulna, Rājshāhi, Comilla\",\"utc\":\"+06:00\"},{\"label\":\"Asia/Omsk (GMT+06:00)\",\"tzCode\":\"Asia/Omsk\",\"name\":\"(GMT+06:00) Omsk, Tara, Kalachinsk, Znamenskoye, Tavricheskoye\",\"utc\":\"+06:00\"},{\"label\":\"Asia/Qostanay (GMT+06:00)\",\"tzCode\":\"Asia/Qostanay\",\"name\":\"(GMT+06:00) Kostanay, Rudnyy, Dzhetygara, Arkalyk, Lisakovsk\",\"utc\":\"+06:00\"},{\"label\":\"Asia/Thimphu (GMT+06:00)\",\"tzCode\":\"Asia/Thimphu\",\"name\":\"(GMT+06:00) himphu, Punākha, Tsirang, Phuntsholing, Pemagatshel\",\"utc\":\"+06:00\"},{\"label\":\"Asia/Urumqi (GMT+06:00)\",\"tzCode\":\"Asia/Urumqi\",\"name\":\"(GMT+06:00) Zhongshan, Ürümqi, Zhanjiang, Shihezi, Huocheng\",\"utc\":\"+06:00\"},{\"label\":\"Indian/Chagos (GMT+06:00)\",\"tzCode\":\"Indian/Chagos\",\"name\":\"(GMT+06:00) British Indian Ocean Territory\",\"utc\":\"+06:00\"},{\"label\":\"Asia/Yangon (GMT+06:30)\",\"tzCode\":\"Asia/Yangon\",\"name\":\"(GMT+06:30) Yangon, Mandalay, Nay Pyi Taw, Mawlamyine, Kyain Seikgyi Township\",\"utc\":\"+06:30\"},{\"label\":\"Indian/Cocos (GMT+06:30)\",\"tzCode\":\"Indian/Cocos\",\"name\":\"(GMT+06:30) West Island\",\"utc\":\"+06:30\"},{\"label\":\"Antarctica/Davis (GMT+07:00)\",\"tzCode\":\"Antarctica/Davis\",\"name\":\"(GMT+07:00) Davis\",\"utc\":\"+07:00\"},{\"label\":\"Asia/Bangkok (GMT+07:00)\",\"tzCode\":\"Asia/Bangkok\",\"name\":\"(GMT+07:00) Bangkok, Hanoi, Haiphong, Samut Prakan, Mueang Nonthaburi\",\"utc\":\"+07:00\"},{\"label\":\"Asia/Barnaul (GMT+07:00)\",\"tzCode\":\"Asia/Barnaul\",\"name\":\"(GMT+07:00) Barnaul, Biysk, Rubtsovsk, Novoaltaysk, Gorno-Altaysk\",\"utc\":\"+07:00\"},{\"label\":\"Asia/Hovd (GMT+07:00)\",\"tzCode\":\"Asia/Hovd\",\"name\":\"(GMT+07:00) Khovd, Ölgii, Ulaangom, Uliastay, Altai\",\"utc\":\"+07:00\"},{\"label\":\"Asia/Ho_Chi_Minh (GMT+07:00)\",\"tzCode\":\"Asia/Ho_Chi_Minh\",\"name\":\"(GMT+07:00) Ho Chi Minh City, Da Nang, Biên Hòa, Nha Trang, Cần Thơ\",\"utc\":\"+07:00\"},{\"label\":\"Asia/Jakarta (GMT+07:00)\",\"tzCode\":\"Asia/Jakarta\",\"name\":\"(GMT+07:00) Jakarta, Surabaya, Medan, Bandung, Bekasi\",\"utc\":\"+07:00\"},{\"label\":\"Asia/Krasnoyarsk (GMT+07:00)\",\"tzCode\":\"Asia/Krasnoyarsk\",\"name\":\"(GMT+07:00) Krasnoyarsk, Abakan, Norilsk, Achinsk, Kyzyl\",\"utc\":\"+07:00\"},{\"label\":\"Asia/Novokuznetsk (GMT+07:00)\",\"tzCode\":\"Asia/Novokuznetsk\",\"name\":\"(GMT+07:00) Novokuznetsk, Kemerovo, Prokop’yevsk, Leninsk-Kuznetsky, Kiselëvsk\",\"utc\":\"+07:00\"},{\"label\":\"Asia/Novosibirsk (GMT+07:00)\",\"tzCode\":\"Asia/Novosibirsk\",\"name\":\"(GMT+07:00) Novosibirsk, Berdsk, Iskitim, Akademgorodok, Kuybyshev\",\"utc\":\"+07:00\"},{\"label\":\"Asia/Phnom_Penh (GMT+07:00)\",\"tzCode\":\"Asia/Phnom_Penh\",\"name\":\"(GMT+07:00) Phnom Penh, Takeo, Sihanoukville, Battambang, Siem Reap\",\"utc\":\"+07:00\"},{\"label\":\"Asia/Pontianak (GMT+07:00)\",\"tzCode\":\"Asia/Pontianak\",\"name\":\"(GMT+07:00) Pontianak, Tanjung Pinang, Palangkaraya, Singkawang, Sampit\",\"utc\":\"+07:00\"},{\"label\":\"Asia/Tomsk (GMT+07:00)\",\"tzCode\":\"Asia/Tomsk\",\"name\":\"(GMT+07:00) Tomsk, Seversk, Strezhevoy, Kolpashevo, Asino\",\"utc\":\"+07:00\"},{\"label\":\"Asia/Vientiane (GMT+07:00)\",\"tzCode\":\"Asia/Vientiane\",\"name\":\"(GMT+07:00) Vientiane, Pakse, Thakhèk, Savannakhet, Luang Prabang\",\"utc\":\"+07:00\"},{\"label\":\"Indian/Christmas (GMT+07:00)\",\"tzCode\":\"Indian/Christmas\",\"name\":\"(GMT+07:00) Flying Fish Cove\",\"utc\":\"+07:00\"},{\"label\":\"Asia/Brunei (GMT+08:00)\",\"tzCode\":\"Asia/Brunei\",\"name\":\"(GMT+08:00) Bandar Seri Begawan, Kuala Belait, Seria, Tutong, Bangar\",\"utc\":\"+08:00\"},{\"label\":\"Asia/Choibalsan (GMT+08:00)\",\"tzCode\":\"Asia/Choibalsan\",\"name\":\"(GMT+08:00) Baruun-Urt, Choibalsan\",\"utc\":\"+08:00\"},{\"label\":\"Asia/Hong_Kong (GMT+08:00)\",\"tzCode\":\"Asia/Hong_Kong\",\"name\":\"(GMT+08:00) Hong Kong, Kowloon, Tsuen Wan, Yuen Long Kau Hui, Tung Chung\",\"utc\":\"+08:00\"},{\"label\":\"Asia/Irkutsk (GMT+08:00)\",\"tzCode\":\"Asia/Irkutsk\",\"name\":\"(GMT+08:00) Irkutsk, Ulan-Ude, Bratsk, Angarsk, Ust’-Ilimsk\",\"utc\":\"+08:00\"},{\"label\":\"Asia/Kuala_Lumpur (GMT+08:00)\",\"tzCode\":\"Asia/Kuala_Lumpur\",\"name\":\"(GMT+08:00) Kota Bharu, Kuala Lumpur, Klang, Kampung Baru Subang, Johor Bahru\",\"utc\":\"+08:00\"},{\"label\":\"Asia/Kuching (GMT+08:00)\",\"tzCode\":\"Asia/Kuching\",\"name\":\"(GMT+08:00) Kuching, Kota Kinabalu, Sandakan, Tawau, Miri\",\"utc\":\"+08:00\"},{\"label\":\"Asia/Macau (GMT+08:00)\",\"tzCode\":\"Asia/Macau\",\"name\":\"(GMT+08:00) Macau\",\"utc\":\"+08:00\"},{\"label\":\"Asia/Makassar (GMT+08:00)\",\"tzCode\":\"Asia/Makassar\",\"name\":\"(GMT+08:00) Makassar, Denpasar, City of Balikpapan, Banjarmasin, Manado\",\"utc\":\"+08:00\"},{\"label\":\"Asia/Manila (GMT+08:00)\",\"tzCode\":\"Asia/Manila\",\"name\":\"(GMT+08:00) Quezon City, Manila, Caloocan City, Budta, Davao\",\"utc\":\"+08:00\"},{\"label\":\"Asia/Shanghai (GMT+08:00)\",\"tzCode\":\"Asia/Shanghai\",\"name\":\"(GMT+08:00) Shanghai, Beijing, Tianjin, Guangzhou, Shenzhen\",\"utc\":\"+08:00\"},{\"label\":\"Asia/Singapore (GMT+08:00)\",\"tzCode\":\"Asia/Singapore\",\"name\":\"(GMT+08:00) Singapore, Woodlands\",\"utc\":\"+08:00\"},{\"label\":\"Asia/Taipei (GMT+08:00)\",\"tzCode\":\"Asia/Taipei\",\"name\":\"(GMT+08:00) Taipei, Kaohsiung, Taichung, Tainan, Banqiao\",\"utc\":\"+08:00\"},{\"label\":\"Asia/Ulaanbaatar (GMT+08:00)\",\"tzCode\":\"Asia/Ulaanbaatar\",\"name\":\"(GMT+08:00) Ulan Bator, Erdenet, Darhan, Hovd, Mörön\",\"utc\":\"+08:00\"},{\"label\":\"Australia/Perth (GMT+08:00)\",\"tzCode\":\"Australia/Perth\",\"name\":\"(GMT+08:00) Perth, Rockingham, Mandurah, Bunbury, Albany\",\"utc\":\"+08:00\"},{\"label\":\"Australia/Eucla (GMT+08:45)\",\"tzCode\":\"Australia/Eucla\",\"name\":\"(GMT+08:45) Eucla\",\"utc\":\"+08:45\"},{\"label\":\"Asia/Chita (GMT+09:00)\",\"tzCode\":\"Asia/Chita\",\"name\":\"(GMT+09:00) Chita, Krasnokamensk, Borzya, Petrovsk-Zabaykal’skiy, Aginskoye\",\"utc\":\"+09:00\"},{\"label\":\"Asia/Dili (GMT+09:00)\",\"tzCode\":\"Asia/Dili\",\"name\":\"(GMT+09:00) Dili, Maliana, Suai, Likisá, Aileu\",\"utc\":\"+09:00\"},{\"label\":\"Asia/Jayapura (GMT+09:00)\",\"tzCode\":\"Asia/Jayapura\",\"name\":\"(GMT+09:00) Ambon, Jayapura, Sorong, Ternate, Abepura\",\"utc\":\"+09:00\"},{\"label\":\"Asia/Khandyga (GMT+09:00)\",\"tzCode\":\"Asia/Khandyga\",\"name\":\"(GMT+09:00) Khandyga\",\"utc\":\"+09:00\"},{\"label\":\"Asia/Pyongyang (GMT+09:00)\",\"tzCode\":\"Asia/Pyongyang\",\"name\":\"(GMT+09:00) Pyongyang, Hamhŭng, Namp’o, Sunch’ŏn, Hŭngnam\",\"utc\":\"+09:00\"},{\"label\":\"Asia/Seoul (GMT+09:00)\",\"tzCode\":\"Asia/Seoul\",\"name\":\"(GMT+09:00) Seoul, Busan, Incheon, Daegu, Daejeon\",\"utc\":\"+09:00\"},{\"label\":\"Asia/Tokyo (GMT+09:00)\",\"tzCode\":\"Asia/Tokyo\",\"name\":\"(GMT+09:00) Tokyo, Yokohama, Osaka, Nagoya, Sapporo\",\"utc\":\"+09:00\"},{\"label\":\"Asia/Yakutsk (GMT+09:00)\",\"tzCode\":\"Asia/Yakutsk\",\"name\":\"(GMT+09:00) Yakutsk, Blagoveshchensk, Belogorsk, Neryungri, Svobodnyy\",\"utc\":\"+09:00\"},{\"label\":\"Pacific/Palau (GMT+09:00)\",\"tzCode\":\"Pacific/Palau\",\"name\":\"(GMT+09:00) Koror, Koror Town, Kloulklubed, Ulimang, Mengellang\",\"utc\":\"+09:00\"},{\"label\":\"Australia/Adelaide (GMT+09:30)\",\"tzCode\":\"Australia/Adelaide\",\"name\":\"(GMT+09:30) Adelaide, Adelaide Hills, Mount Gambier, Morphett Vale, Gawler\",\"utc\":\"+09:30\"},{\"label\":\"Australia/Broken_Hill (GMT+09:30)\",\"tzCode\":\"Australia/Broken_Hill\",\"name\":\"(GMT+09:30) Broken Hill\",\"utc\":\"+09:30\"},{\"label\":\"Australia/Darwin (GMT+09:30)\",\"tzCode\":\"Australia/Darwin\",\"name\":\"(GMT+09:30) Darwin, Alice Springs, Palmerston, Howard Springs\",\"utc\":\"+09:30\"},{\"label\":\"Antarctica/DumontDUrville (GMT+10:00)\",\"tzCode\":\"Antarctica/DumontDUrville\",\"name\":\"(GMT+10:00) DumontDUrville\",\"utc\":\"+10:00\"},{\"label\":\"Antarctica/Macquarie (GMT+10:00)\",\"tzCode\":\"Antarctica/Macquarie\",\"name\":\"(GMT+10:00) Macquarie\",\"utc\":\"+10:00\"},{\"label\":\"Asia/Ust-Nera (GMT+10:00)\",\"tzCode\":\"Asia/Ust-Nera\",\"name\":\"(GMT+10:00) Ust-Nera\",\"utc\":\"+10:00\"},{\"label\":\"Asia/Vladivostok (GMT+10:00)\",\"tzCode\":\"Asia/Vladivostok\",\"name\":\"(GMT+10:00) Vladivostok, Khabarovsk, Khabarovsk Vtoroy, Komsomolsk-on-Amur, Ussuriysk\",\"utc\":\"+10:00\"},{\"label\":\"Australia/Brisbane (GMT+10:00)\",\"tzCode\":\"Australia/Brisbane\",\"name\":\"(GMT+10:00) Brisbane, Gold Coast, Logan City, Townsville, Cairns\",\"utc\":\"+10:00\"},{\"label\":\"Australia/Currie (GMT+10:00)\",\"tzCode\":\"Australia/Currie\",\"name\":\"(GMT+10:00) Currie\",\"utc\":\"+10:00\"},{\"label\":\"Australia/Hobart (GMT+10:00)\",\"tzCode\":\"Australia/Hobart\",\"name\":\"(GMT+10:00) Hobart, Launceston, Burnie, Devonport, Sandy Bay\",\"utc\":\"+10:00\"},{\"label\":\"Australia/Lindeman (GMT+10:00)\",\"tzCode\":\"Australia/Lindeman\",\"name\":\"(GMT+10:00) Lindeman\",\"utc\":\"+10:00\"},{\"label\":\"Australia/Melbourne (GMT+10:00)\",\"tzCode\":\"Australia/Melbourne\",\"name\":\"(GMT+10:00) Melbourne, Geelong, Bendigo, Ballarat, Melbourne City Centre\",\"utc\":\"+10:00\"},{\"label\":\"Australia/Sydney (GMT+10:00)\",\"tzCode\":\"Australia/Sydney\",\"name\":\"(GMT+10:00) Sydney, Canberra, Newcastle, Wollongong, Maitland\",\"utc\":\"+10:00\"},{\"label\":\"Pacific/Chuuk (GMT+10:00)\",\"tzCode\":\"Pacific/Chuuk\",\"name\":\"(GMT+10:00) Weno, Colonia\",\"utc\":\"+10:00\"},{\"label\":\"Pacific/Guam (GMT+10:00)\",\"tzCode\":\"Pacific/Guam\",\"name\":\"(GMT+10:00) Dededo Village, Yigo Village, Tamuning, Tamuning-Tumon-Harmon Village, Mangilao Village\",\"utc\":\"+10:00\"},{\"label\":\"Pacific/Port_Moresby (GMT+10:00)\",\"tzCode\":\"Pacific/Port_Moresby\",\"name\":\"(GMT+10:00) Port Moresby, Lae, Mount Hagen, Popondetta, Madang\",\"utc\":\"+10:00\"},{\"label\":\"Pacific/Saipan (GMT+10:00)\",\"tzCode\":\"Pacific/Saipan\",\"name\":\"(GMT+10:00) Saipan, San Jose Village\",\"utc\":\"+10:00\"},{\"label\":\"Australia/Lord_Howe (GMT+10:30)\",\"tzCode\":\"Australia/Lord_Howe\",\"name\":\"(GMT+10:30) Lord Howe\",\"utc\":\"+10:30\"},{\"label\":\"Antarctica/Casey (GMT+8:00)\",\"tzCode\":\"Antarctica/Casey\",\"name\":\"(GMT+8:00) Casey\",\"utc\":\"+8:00\"},{\"label\":\"Asia/Magadan (GMT+11:00)\",\"tzCode\":\"Asia/Magadan\",\"name\":\"(GMT+11:00) Magadan, Ust-Nera, Susuman, Ola\",\"utc\":\"+11:00\"},{\"label\":\"Asia/Sakhalin (GMT+11:00)\",\"tzCode\":\"Asia/Sakhalin\",\"name\":\"(GMT+11:00) Yuzhno-Sakhalinsk, Korsakov, Kholmsk, Okha, Nevel’sk\",\"utc\":\"+11:00\"},{\"label\":\"Asia/Srednekolymsk (GMT+11:00)\",\"tzCode\":\"Asia/Srednekolymsk\",\"name\":\"(GMT+11:00) Srednekolymsk\",\"utc\":\"+11:00\"},{\"label\":\"Pacific/Bougainville (GMT+11:00)\",\"tzCode\":\"Pacific/Bougainville\",\"name\":\"(GMT+11:00) Arawa, Buka\",\"utc\":\"+11:00\"},{\"label\":\"Pacific/Efate (GMT+11:00)\",\"tzCode\":\"Pacific/Efate\",\"name\":\"(GMT+11:00) Port-Vila, Luganville, Isangel, Sola, Lakatoro\",\"utc\":\"+11:00\"},{\"label\":\"Pacific/Guadalcanal (GMT+11:00)\",\"tzCode\":\"Pacific/Guadalcanal\",\"name\":\"(GMT+11:00) Honiara, Malango, Auki, Gizo, Buala\",\"utc\":\"+11:00\"},{\"label\":\"Pacific/Kosrae (GMT+11:00)\",\"tzCode\":\"Pacific/Kosrae\",\"name\":\"(GMT+11:00) Tofol\",\"utc\":\"+11:00\"},{\"label\":\"Pacific/Norfolk (GMT+11:00)\",\"tzCode\":\"Pacific/Norfolk\",\"name\":\"(GMT+11:00) Kingston\",\"utc\":\"+11:00\"},{\"label\":\"Pacific/Noumea (GMT+11:00)\",\"tzCode\":\"Pacific/Noumea\",\"name\":\"(GMT+11:00) Nouméa, Mont-Dore, Dumbéa, Païta, Wé\",\"utc\":\"+11:00\"},{\"label\":\"Pacific/Pohnpei (GMT+11:00)\",\"tzCode\":\"Pacific/Pohnpei\",\"name\":\"(GMT+11:00) Kolonia, Kolonia Town, Palikir - National Government Center\",\"utc\":\"+11:00\"},{\"label\":\"Antarctica/McMurdo (GMT+12:00)\",\"tzCode\":\"Antarctica/McMurdo\",\"name\":\"(GMT+12:00) McMurdo\",\"utc\":\"+12:00\"},{\"label\":\"Asia/Anadyr (GMT+12:00)\",\"tzCode\":\"Asia/Anadyr\",\"name\":\"(GMT+12:00) Anadyr, Bilibino\",\"utc\":\"+12:00\"},{\"label\":\"Asia/Kamchatka (GMT+12:00)\",\"tzCode\":\"Asia/Kamchatka\",\"name\":\"(GMT+12:00) Petropavlovsk-Kamchatsky, Yelizovo, Vilyuchinsk, Klyuchi, Mil’kovo\",\"utc\":\"+12:00\"},{\"label\":\"Pacific/Auckland (GMT+12:00)\",\"tzCode\":\"Pacific/Auckland\",\"name\":\"(GMT+12:00) Auckland, Wellington, Christchurch, Manukau City, North Shore\",\"utc\":\"+12:00\"},{\"label\":\"Pacific/Fiji (GMT+12:00)\",\"tzCode\":\"Pacific/Fiji\",\"name\":\"(GMT+12:00) Suva, Lautoka, Nadi, Labasa, Ba\",\"utc\":\"+12:00\"},{\"label\":\"Pacific/Funafuti (GMT+12:00)\",\"tzCode\":\"Pacific/Funafuti\",\"name\":\"(GMT+12:00) Funafuti, Savave Village, Tanrake Village, Toga Village, Asau Village\",\"utc\":\"+12:00\"},{\"label\":\"Pacific/Kwajalein (GMT+12:00)\",\"tzCode\":\"Pacific/Kwajalein\",\"name\":\"(GMT+12:00) Ebaye, Jabat\",\"utc\":\"+12:00\"},{\"label\":\"Pacific/Majuro (GMT+12:00)\",\"tzCode\":\"Pacific/Majuro\",\"name\":\"(GMT+12:00) Majuro, Arno, Jabor, Wotje, Mili\",\"utc\":\"+12:00\"},{\"label\":\"Pacific/Nauru (GMT+12:00)\",\"tzCode\":\"Pacific/Nauru\",\"name\":\"(GMT+12:00) Yaren, Baiti, Anabar, Uaboe, Ijuw\",\"utc\":\"+12:00\"},{\"label\":\"Pacific/Tarawa (GMT+12:00)\",\"tzCode\":\"Pacific/Tarawa\",\"name\":\"(GMT+12:00) Tarawa, Betio Village, Bikenibeu Village\",\"utc\":\"+12:00\"},{\"label\":\"Pacific/Wake (GMT+12:00)\",\"tzCode\":\"Pacific/Wake\",\"name\":\"(GMT+12:00) Wake\",\"utc\":\"+12:00\"},{\"label\":\"Pacific/Wallis (GMT+12:00)\",\"tzCode\":\"Pacific/Wallis\",\"name\":\"(GMT+12:00) Mata-Utu, Leava, Alo\",\"utc\":\"+12:00\"},{\"label\":\"Pacific/Chatham (GMT+12:45)\",\"tzCode\":\"Pacific/Chatham\",\"name\":\"(GMT+12:45) Waitangi\",\"utc\":\"+12:45\"},{\"label\":\"Pacific/Apia (GMT+13:00)\",\"tzCode\":\"Pacific/Apia\",\"name\":\"(GMT+13:00) Apia, Asau, Mulifanua, Afega, Leulumoega\",\"utc\":\"+13:00\"},{\"label\":\"Pacific/Enderbury (GMT+13:00)\",\"tzCode\":\"Pacific/Enderbury\",\"name\":\"(GMT+13:00) Enderbury\",\"utc\":\"+13:00\"},{\"label\":\"Pacific/Fakaofo (GMT+13:00)\",\"tzCode\":\"Pacific/Fakaofo\",\"name\":\"(GMT+13:00) Atafu Village, Nukunonu, Fale old settlement\",\"utc\":\"+13:00\"},{\"label\":\"Pacific/Tongatapu (GMT+13:00)\",\"tzCode\":\"Pacific/Tongatapu\",\"name\":\"(GMT+13:00) Nuku‘alofa, Lapaha, Neiafu, Pangai, ‘Ohonua\",\"utc\":\"+13:00\"},{\"label\":\"Pacific/Kiritimati (GMT+14:00)\",\"tzCode\":\"Pacific/Kiritimati\",\"name\":\"(GMT+14:00) Kiritimati\",\"utc\":\"+14:00\"}]");

/***/ }),

/***/ "./src/components/settings/PrivacyPolicy.vue":
/*!***************************************************!*\
  !*** ./src/components/settings/PrivacyPolicy.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrivacyPolicy_vue_vue_type_template_id_efbeae44_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrivacyPolicy.vue?vue&type=template&id=efbeae44&scoped=true */ "./src/components/settings/PrivacyPolicy.vue?vue&type=template&id=efbeae44&scoped=true");
/* harmony import */ var _PrivacyPolicy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrivacyPolicy.vue?vue&type=script&lang=js */ "./src/components/settings/PrivacyPolicy.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PrivacyPolicy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrivacyPolicy_vue_vue_type_template_id_efbeae44_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrivacyPolicy_vue_vue_type_template_id_efbeae44_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "efbeae44",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/settings/PrivacyPolicy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/settings/PrivacyPolicy.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/components/settings/PrivacyPolicy.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PrivacyPolicy.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/PrivacyPolicy.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/settings/PrivacyPolicy.vue?vue&type=template&id=efbeae44&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./src/components/settings/PrivacyPolicy.vue?vue&type=template&id=efbeae44&scoped=true ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_template_id_efbeae44_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PrivacyPolicy.vue?vue&type=template&id=efbeae44&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/PrivacyPolicy.vue?vue&type=template&id=efbeae44&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_template_id_efbeae44_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_template_id_efbeae44_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/settings/general.vue":
/*!*********************************************!*\
  !*** ./src/components/settings/general.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _general_vue_vue_type_template_id_6c22250c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general.vue?vue&type=template&id=6c22250c&scoped=true */ "./src/components/settings/general.vue?vue&type=template&id=6c22250c&scoped=true");
/* harmony import */ var _general_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general.vue?vue&type=script&lang=js */ "./src/components/settings/general.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _general_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _general_vue_vue_type_template_id_6c22250c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _general_vue_vue_type_template_id_6c22250c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6c22250c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/settings/general.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/settings/general.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/components/settings/general.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./general.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/general.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/settings/general.vue?vue&type=template&id=6c22250c&scoped=true":
/*!***************************************************************************************!*\
  !*** ./src/components/settings/general.vue?vue&type=template&id=6c22250c&scoped=true ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_template_id_6c22250c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./general.vue?vue&type=template&id=6c22250c&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/general.vue?vue&type=template&id=6c22250c&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_template_id_6c22250c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_template_id_6c22250c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/settings/notification.vue":
/*!**************************************************!*\
  !*** ./src/components/settings/notification.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_vue_vue_type_template_id_63877012_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.vue?vue&type=template&id=63877012&scoped=true */ "./src/components/settings/notification.vue?vue&type=template&id=63877012&scoped=true");
/* harmony import */ var _notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.vue?vue&type=script&lang=js */ "./src/components/settings/notification.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _notification_vue_vue_type_template_id_63877012_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _notification_vue_vue_type_template_id_63877012_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "63877012",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/settings/notification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/settings/notification.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./src/components/settings/notification.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./notification.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/notification.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/settings/notification.vue?vue&type=template&id=63877012&scoped=true":
/*!********************************************************************************************!*\
  !*** ./src/components/settings/notification.vue?vue&type=template&id=63877012&scoped=true ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_template_id_63877012_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./notification.vue?vue&type=template&id=63877012&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/notification.vue?vue&type=template&id=63877012&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_template_id_63877012_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_template_id_63877012_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/settings/refund.vue":
/*!********************************************!*\
  !*** ./src/components/settings/refund.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _refund_vue_vue_type_template_id_b7fdd1f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refund.vue?vue&type=template&id=b7fdd1f8&scoped=true */ "./src/components/settings/refund.vue?vue&type=template&id=b7fdd1f8&scoped=true");
/* harmony import */ var _refund_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refund.vue?vue&type=script&lang=js */ "./src/components/settings/refund.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _refund_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _refund_vue_vue_type_template_id_b7fdd1f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _refund_vue_vue_type_template_id_b7fdd1f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b7fdd1f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/settings/refund.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/settings/refund.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./src/components/settings/refund.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_refund_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./refund.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/refund.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_refund_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/settings/refund.vue?vue&type=template&id=b7fdd1f8&scoped=true":
/*!**************************************************************************************!*\
  !*** ./src/components/settings/refund.vue?vue&type=template&id=b7fdd1f8&scoped=true ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_refund_vue_vue_type_template_id_b7fdd1f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./refund.vue?vue&type=template&id=b7fdd1f8&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/refund.vue?vue&type=template&id=b7fdd1f8&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_refund_vue_vue_type_template_id_b7fdd1f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_refund_vue_vue_type_template_id_b7fdd1f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/settings/smtp.vue":
/*!******************************************!*\
  !*** ./src/components/settings/smtp.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _smtp_vue_vue_type_template_id_0737983c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smtp.vue?vue&type=template&id=0737983c&scoped=true */ "./src/components/settings/smtp.vue?vue&type=template&id=0737983c&scoped=true");
/* harmony import */ var _smtp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smtp.vue?vue&type=script&lang=js */ "./src/components/settings/smtp.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _smtp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _smtp_vue_vue_type_template_id_0737983c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _smtp_vue_vue_type_template_id_0737983c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0737983c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/settings/smtp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/settings/smtp.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/components/settings/smtp.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_smtp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./smtp.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/smtp.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_smtp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/settings/smtp.vue?vue&type=template&id=0737983c&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/components/settings/smtp.vue?vue&type=template&id=0737983c&scoped=true ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_smtp_vue_vue_type_template_id_0737983c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./smtp.vue?vue&type=template&id=0737983c&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/smtp.vue?vue&type=template&id=0737983c&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_smtp_vue_vue_type_template_id_0737983c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_smtp_vue_vue_type_template_id_0737983c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/settings/term.vue":
/*!******************************************!*\
  !*** ./src/components/settings/term.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _term_vue_vue_type_template_id_8d00e210_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./term.vue?vue&type=template&id=8d00e210&scoped=true */ "./src/components/settings/term.vue?vue&type=template&id=8d00e210&scoped=true");
/* harmony import */ var _term_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./term.vue?vue&type=script&lang=js */ "./src/components/settings/term.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _term_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _term_vue_vue_type_template_id_8d00e210_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _term_vue_vue_type_template_id_8d00e210_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8d00e210",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/settings/term.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/settings/term.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/components/settings/term.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_term_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./term.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/term.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_term_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/settings/term.vue?vue&type=template&id=8d00e210&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/components/settings/term.vue?vue&type=template&id=8d00e210&scoped=true ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_term_vue_vue_type_template_id_8d00e210_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./term.vue?vue&type=template&id=8d00e210&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/settings/term.vue?vue&type=template&id=8d00e210&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_term_vue_vue_type_template_id_8d00e210_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_term_vue_vue_type_template_id_8d00e210_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/helpers/dateFormat.json":
/*!*************************************!*\
  !*** ./src/helpers/dateFormat.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"text\":\"MM-DD-YYYY (2023-12-01)\",\"value\":\"MM-DD-YYYY\"},{\"text\":\"DD-MM-YYYY (12-01-2023)\",\"value\":\"DD-MM-YYYY\"},{\"text\":\"YYYY-DD-MM (2023-12-01)\",\"value\":\"YYYY-DD-MM\"},{\"text\":\"YYYY-MM-DD (2023-01-12)\",\"value\":\"YYYY-MM-DD\"},{\"text\":\"DD/MM/YY (13/04/23)\",\"value\":\"DD/MM/YY\"},{\"text\":\"DD/MM/YYYY (13/04/2023)\",\"value\":\"DD/MM/YYYY\"},{\"text\":\"MM/DD/YYYY (04/13/2023)\",\"value\":\"MM/DD/YYYY\"},{\"text\":\"DD MMM YY (04 Aug 23)\",\"value\":\"DD MMM YY\"},{\"text\":\"DD MMM YYYY (04 Aug 2023)\",\"value\":\"DD MMM YYYY\"},{\"text\":\"DD MMMM YYYY (04 August 2023)\",\"value\":\"DD MMMM YYYY\"},{\"text\":\"MMM D, YY (Aug 5, 23)\",\"value\":\"MMM D, YY\"},{\"text\":\"MMM D, YYYY (Aug 5, 2023)\",\"value\":\"MMM D, YYYY\"},{\"text\":\"MMM DD, YYYY (Aug 05, 2023)\",\"value\":\"MMM DD, YYYY\"},{\"text\":\"MMMM DD, YYYY (August 05, 2023)\",\"value\":\"MMMM DD, YYYY\"},{\"text\":\"ddd MMM DD, YY (Wed Aug 05, 23)\",\"value\":\"ddd MMM DD, YY\"},{\"text\":\"dddd MMM D, YYYY (Wednesday Aug 5, 2023)\",\"value\":\"dddd MMM D, YYYY\"},{\"text\":\"dddd, MMMM DD, YYYY (Wednesday, August 05, 2023)\",\"value\":\"dddd, MMMM DD, YYYY\"}]");

/***/ }),

/***/ "./src/helpers/timeFormat.json":
/*!*************************************!*\
  !*** ./src/helpers/timeFormat.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"text\":\"hh:mm:ss A (1:15:30 PM)\",\"value\":\"hh:mm:ss A\"},{\"text\":\"h:mm A (1:15 PM)\",\"value\":\"h:mm A\"},{\"text\":\"hh:mm A (01:15 PM)\",\"value\":\"hh:mm A\"}]");

/***/ }),

/***/ "./src/views/admin/applicationSetting.vue":
/*!************************************************!*\
  !*** ./src/views/admin/applicationSetting.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applicationSetting_vue_vue_type_template_id_6ea7308c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applicationSetting.vue?vue&type=template&id=6ea7308c&scoped=true */ "./src/views/admin/applicationSetting.vue?vue&type=template&id=6ea7308c&scoped=true");
/* harmony import */ var _applicationSetting_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applicationSetting.vue?vue&type=script&lang=js */ "./src/views/admin/applicationSetting.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _applicationSetting_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _applicationSetting_vue_vue_type_template_id_6ea7308c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _applicationSetting_vue_vue_type_template_id_6ea7308c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6ea7308c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/admin/applicationSetting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/admin/applicationSetting.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/views/admin/applicationSetting.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_applicationSetting_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./applicationSetting.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/applicationSetting.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_applicationSetting_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/admin/applicationSetting.vue?vue&type=template&id=6ea7308c&scoped=true":
/*!******************************************************************************************!*\
  !*** ./src/views/admin/applicationSetting.vue?vue&type=template&id=6ea7308c&scoped=true ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_applicationSetting_vue_vue_type_template_id_6ea7308c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./applicationSetting.vue?vue&type=template&id=6ea7308c&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/applicationSetting.vue?vue&type=template&id=6ea7308c&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_applicationSetting_vue_vue_type_template_id_6ea7308c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_applicationSetting_vue_vue_type_template_id_6ea7308c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=11.js.map