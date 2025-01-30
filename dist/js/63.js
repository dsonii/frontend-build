(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/passes/create.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/passes/create.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/breadcrumb */ "./src/components/breadcrumb/index.vue");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services */ "./src/services/index.js");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "passcreate",
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_2__["validationMixin"]],
  data() {
    return {
      breadcrumbs: {
        title: "Create Pass",
        b1: "Manage Passes",
        b2: "Passes",
        b3: "Index",
        link: true,
        name: "pass"
      },
      form: {
        no_of_rides: "",
        no_of_valid_days: "",
        price_per_km: "",
        discount: "",
        status: "",
        terms: "",
        description: ""
      },
      submitted: false,
      options: [{
        text: "Active",
        value: true
      }, {
        text: "Inactive",
        value: false,
        default: true
      }]
    };
  },
  components: {
    Breadcrumb: _components_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"],
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_5__["VueEditor"]
  },
  validations: {
    form: {
      no_of_valid_days: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      price_per_km: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      discount: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["numeric"]
      },
      description: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      terms: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      }
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
    async createPass() {
      try {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
        const response = await _services__WEBPACK_IMPORTED_MODULE_4__["passService"].create(this.form);
        if (response.status) {
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 3000
            // all of other options may go here
          });
          setTimeout(() => this.$router.push({
            path: `/passes`
          }), 2000);
        }
      } catch (e) {
        console.log("e", e);
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 5000
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/passes/create.vue?vue&type=template&id=6a2021a2&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/passes/create.vue?vue&type=template&id=6a2021a2&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("section", {
    staticClass: "tables"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("Breadcrumb", {
    attrs: {
      breadcrumbs: _vm.breadcrumbs
    }
  }), _c("div", {
    staticClass: "col-lg-8 offset-lg-2 grid-margin stretch-card"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("b-form", {
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.createPass.apply(null, arguments);
      }
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "No of Ride",
      "label-for": "no-of-ride-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "4"
    }
  }, [_c("b-form-spinbutton", {
    attrs: {
      id: "demo-sb",
      min: "1",
      max: "100"
    },
    model: {
      value: _vm.form.no_of_rides,
      callback: function ($$v) {
        _vm.$set(_vm.form, "no_of_rides", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "form.no_of_rides"
    }
  })], 1), _c("b-form-group", {
    attrs: {
      label: "Valid days",
      "label-for": "no-of-valid-days-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "4"
    }
  }, [_c("b-form-input", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.no_of_valid_days.$error
    },
    attrs: {
      id: "no-of-valid-days-input",
      type: "number",
      placeholder: "Enter no of valid days",
      state: _vm.validateState("no_of_valid_days")
    },
    model: {
      value: _vm.$v.form.no_of_valid_days.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.no_of_valid_days, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.no_of_valid_days.$model"
    }
  }), _vm.submitted && !_vm.$v.form.no_of_valid_days.required ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" no of days is required ")]) : _vm._e()], 1), _c("b-form-group", {
    attrs: {
      label: "Price per km",
      "label-for": "price-per-km-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "4"
    }
  }, [_c("b-form-input", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.price_per_km.$error
    },
    attrs: {
      id: "price-per-km-input",
      type: "number",
      step: "0.01",
      value: "0.00",
      placeholder: "Enter price per km",
      state: _vm.validateState("price_per_km")
    },
    model: {
      value: _vm.$v.form.price_per_km.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.price_per_km, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.price_per_km.$model"
    }
  }), _vm.submitted && !_vm.$v.form.price_per_km.required ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" price per km is required ")]) : _vm._e()], 1), _c("b-form-group", {
    attrs: {
      label: "Discount(%)",
      "label-for": "discount-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "4"
    }
  }, [_c("b-form-input", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.discount.$error
    },
    attrs: {
      id: "discount-input",
      type: "number",
      placeholder: "Enter discount",
      state: _vm.validateState("discount")
    },
    model: {
      value: _vm.$v.form.discount.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.discount, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.discount.$model"
    }
  }), _vm.submitted && !_vm.$v.form.discount.required ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" discount is required ")]) : _vm._e()], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Description",
      "label-for": "description-input",
      "invalid-feedback": "description is required",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "9"
    }
  }, [_c("vue-editor", {
    staticClass: "mt-3",
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.description.$error
    },
    attrs: {
      state: _vm.validateState("description")
    },
    model: {
      value: _vm.form.description,
      callback: function ($$v) {
        _vm.$set(_vm.form, "description", $$v);
      },
      expression: "form.description"
    }
  })], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: " terms",
      "label-for": "terms-input",
      "invalid-feedback": "terms is required",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "9"
    }
  }, [_c("vue-editor", {
    staticClass: "mt-3",
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.terms.$error
    },
    attrs: {
      state: _vm.validateState("terms")
    },
    model: {
      value: _vm.form.terms,
      callback: function ($$v) {
        _vm.$set(_vm.form, "terms", $$v);
      },
      expression: "form.terms"
    }
  })], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Status ",
      "label-for": "status-input",
      "invalid-feedback": "status is required",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-radio-group", {
    attrs: {
      options: _vm.options,
      name: "status"
    },
    model: {
      value: _vm.form.status,
      callback: function ($$v) {
        _vm.$set(_vm.form, "status", $$v);
      },
      expression: "form.status"
    }
  })], 1), _c("b-form-group", {
    staticClass: "col-md-6 offset-md-4"
  }, [_c("b-button", {
    staticClass: "btn btn-lg btn-success text-center",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Submit")])], 1)], 1)], 1)])])], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./src/views/admin/passes/create.vue":
/*!*******************************************!*\
  !*** ./src/views/admin/passes/create.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_6a2021a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=6a2021a2&scoped=true */ "./src/views/admin/passes/create.vue?vue&type=template&id=6a2021a2&scoped=true");
/* harmony import */ var _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js */ "./src/views/admin/passes/create.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_6a2021a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_6a2021a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6a2021a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/admin/passes/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/admin/passes/create.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/views/admin/passes/create.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/passes/create.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/admin/passes/create.vue?vue&type=template&id=6a2021a2&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/views/admin/passes/create.vue?vue&type=template&id=6a2021a2&scoped=true ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_6a2021a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=6a2021a2&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/passes/create.vue?vue&type=template&id=6a2021a2&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_6a2021a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_6a2021a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=63.js.map