(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/payments/index.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/payments/index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "./src/services/index.js");
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/breadcrumb */ "./src/components/breadcrumb/index.vue");
/* harmony import */ var vue_bootstrap4_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-bootstrap4-table */ "./node_modules/vue-bootstrap4-table/dist/vue-bootstrap4-table.esm.js");
/* harmony import */ var vue_json_excel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-json-excel */ "./node_modules/vue-json-excel/dist/vue-json-excel.esm.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_useApp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/useApp */ "./src/store/useApp.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../helpers/utils */ "./src/helpers/utils.js");











/* harmony default export */ __webpack_exports__["default"] = ({
  name: "payments",
  data() {
    return {
      title: "",
      breadcrumbs: {
        title: "Payment Lists",
        b1: "Manage Payments",
        b2: "Payments",
        b3: "Index",
        link: false,
        name: "Payment lists"
      },
      paymentStatus: "",
      columns: [{
        label: "Customer",
        name: "customer_name",
        sort: true
      }, {
        label: "PNR",
        name: "booking_pnr",
        sort: true
      }, {
        label: "Amount",
        name: "amount",
        sort: true
      }, {
        label: "Refund",
        name: "refund_amount",
        sort: true
      }, {
        label: "OrderId",
        name: "orderId",
        sort: true
      }, {
        label: "CreatedAt",
        name: "createdAt",
        sort: true
      }, {
        label: "Action",
        name: "action",
        sort: false
      }],
      rows: [],
      config: {
        server_mode: true,
        // by default false
        loaderText: "Updating...",
        // by default 'Loading...'
        pagination: true,
        global_search: {
          placeholder: "Enter search offers",
          visibility: true,
          case_sensitive: false,
          showClearButton: false,
          searchOnPressEnter: false,
          searchDebounceRate: 1000
        },
        per_page_options: [10, 20, 30, 50, 100]
        //highlight_row_hover_color: "grey",
        // card_title: "Vue Bootsrap 4 advanced table",
        // card_mode: false,
      },
      dropdowns: [],
      classes: {
        table: "table-bordered table-striped"
      },
      queryParams: {
        sort: [],
        filters: "",
        //"SEARCHING",
        global_search: "",
        per_page: 10,
        page: 1
      },
      total_rows: 0,
      form: {
        id: "",
        name: "",
        slug: "",
        createdAt: ""
      },
      showLoader: false
    };
  },
  components: {
    VueBootstrap4Table: vue_bootstrap4_table__WEBPACK_IMPORTED_MODULE_5__["default"],
    Breadcrumb: _components_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["default"],
    downloadExcel: vue_json_excel__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  computed: {
    excelDownload() {
      return _services__WEBPACK_IMPORTED_MODULE_3__["paymentService"].tranform(this.rows);
    },
    excelName() {
      return this.breadcrumbs.title + "_" + moment_timezone__WEBPACK_IMPORTED_MODULE_7___default()().local().unix();
    },
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_8__["mapState"])(_store_useApp__WEBPACK_IMPORTED_MODULE_9__["useApp"], ["dateFormat"])
  },
  watch: {
    "$route.params.travel_status"(val) {
      // call the method which loads your initial state
      this.paymentStatus = val;
      this.loadItems();
    }
  },
  mounted() {
    this.paymentStatus = this.$route.params.travel_status;
    this.loadItems();
  },
  methods: {
    dateFormated(createdAt, format) {
      return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_10__["getDateFormat"])(createdAt, format); //"DD MMM, YYYY"
    },
    onRefreshData() {
      this.showLoader = true;
      this.loadItems();
    },
    async checkStatus(row) {
      try {
        const response = await _services__WEBPACK_IMPORTED_MODULE_3__["paymentService"].checkStatus(row.orderId, {
          paymentId: row.ids
        });
        if (response.status === 200) {
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 5000
          });
          this.showLoader = true;
          this.loadItems();
        } else {
          this.$toast.open({
            message: response.message,
            type: "error",
            position: "top-right",
            duration: 5000
          });
          this.showLoader = true;
          this.loadItems();
        }
      } catch (e) {
        this.$toast.open({
          message: e.message,
          type: "error",
          position: "top-right",
          duration: 5000
        });
      }
    },
    onChangeQuery(queryParams) {
      this.queryParams = queryParams;
      this.showLoader = true;
      this.loadItems();
    },
    loadItems() {
      this.queryParams.filters = this.capitalizeFirstLetter(this.$route.params.travel_status); // travel_status completed/searching,assigned/started
      _services__WEBPACK_IMPORTED_MODULE_3__["paymentService"].getAll(this.queryParams).then(response => {
        this.total_rows = response.data.totalRecords;
        this.rows = response.data.payments;
        this.showLoader = false;
      });
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    enableDropdowns() {
      this.$el.querySelectorAll('[data-toggle="dropdown"]').forEach($dropdownToggle => {
        const $dropdown = $dropdownToggle.nextElementSibling;
        let isShown = false;
        function setIsShown(state) {
          isShown = state;
          $dropdown.classList.toggle("show", isShown);
        }
        if (!this.dropdowns.includes($dropdown)) {
          this.dropdowns.push($dropdown);
          $dropdownToggle.addEventListener("click", event => {
            event.preventDefault();
            setIsShown(!isShown);
          });
          $dropdown.addEventListener("click", event => {
            event.preventDefault();
            setIsShown(false);
          });
          $dropdown.clickOutsideEvent = event => {
            const isDropdownOrChildren = $dropdown === event.target || $dropdown.contains(event.target);
            const isDropdownToggleOrChildren = $dropdownToggle === event.target || $dropdownToggle.contains(event.target);
            if (!isDropdownOrChildren && !isDropdownToggleOrChildren) {
              setIsShown(false);
            }
          };
          document.addEventListener("click", $dropdown.clickOutsideEvent);
        }
      });
    }
  },
  updated() {
    this.enableDropdowns();
  },
  destroyed() {
    this.dropdowns.forEach($dropdown => {
      document.removeEventListener("click", $dropdown.clickOutsideEvent);
    });
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/payments/index.vue?vue&type=template&id=1e9f314a&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/payments/index.vue?vue&type=template&id=1e9f314a&scoped=true ***!
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
  return _c("div", [_c("section", {
    staticClass: "tables"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("Breadcrumb", {
    attrs: {
      breadcrumbs: _vm.breadcrumbs
    }
  })], 1), _c("div", {
    staticClass: "col-lg-12 stretch-card"
  }, [_c("vue-bootstrap4-table", {
    attrs: {
      rows: _vm.rows,
      columns: _vm.columns,
      config: _vm.config,
      "total-rows": _vm.total_rows,
      classes: _vm.classes,
      "show-loader": _vm.showLoader
    },
    on: {
      "refresh-data": _vm.onRefreshData,
      "on-change-query": _vm.onChangeQuery
    },
    scopedSlots: _vm._u([{
      key: "customer_name",
      fn: function (props) {
        return [_c("p", [_vm._v(_vm._s(props.row.customer_name))]), _c("small", [_vm._v(_vm._s(props.row.customer_phone))])];
      }
    }, {
      key: "createdAt",
      fn: function (props) {
        return [_vm._v(" " + _vm._s(_vm.dateFormated(props.row.createdAt, _vm.dateFormat.value)) + " ")];
      }
    }, {
      key: "payment_status",
      fn: function (props) {
        return [props.column.name == "payment_status" ? _c("span", [props.row.payment_status == "Completed" ? _c("b-badge", {
          attrs: {
            variant: "success"
          }
        }, [_vm._v("Completed")]) : props.row.payment_status == "Processing" ? _c("b-badge", {
          attrs: {
            variant: "warning"
          }
        }, [_vm._v("Processing")]) : props.row.payment_status == "Pending" ? _c("b-badge", {
          attrs: {
            variant: "info"
          }
        }, [_vm._v("Pending")]) : props.row.payment_status == "Failed" ? _c("b-badge", {
          attrs: {
            variant: "danger"
          }
        }, [_vm._v("Failed")]) : _vm._e()], 1) : _vm._e()];
      }
    }, {
      key: "action",
      fn: function (props) {
        return [props.column.name == "action" ? _c("span", [_c("b-dropdown", {
          staticClass: "m-2",
          attrs: {
            id: "dropdown-left",
            text: "Actions",
            variant: "outline-info"
          }
        }, [_c("b-dropdown-item", {
          on: {
            click: function ($event) {
              $event.preventDefault();
              return _vm.checkStatus(props.row);
            }
          }
        }, [_c("span", {
          staticClass: "text-primary"
        }, [_c("b", [_c("i", {
          staticClass: "mdi mdi-access-point"
        }), _vm._v(" Check Status")])])])], 1)], 1) : _vm._e()];
      }
    }])
  }, [_c("template", {
    slot: "global-search-clear-icon"
  }, [_c("i", {
    staticClass: "mdi mdi-account-search"
  })]), _c("template", {
    slot: "refresh-button-text"
  }, [_c("i", {
    staticClass: "mdi mdi-sync-alert"
  }), _vm._v(" Refresh ")]), _c("template", {
    slot: "reset-button-text"
  }, [_c("i", {
    staticClass: "mdi mdi-broom"
  }), _vm._v(" Reset filters ")]), _c("template", {
    slot: "paginataion-previous-button"
  }, [_vm._v(" Previous ")]), _c("template", {
    slot: "paginataion-next-button"
  }, [_vm._v(" Next ")]), _c("template", {
    slot: "card-header"
  }, [_vm._v(" Payment - " + _vm._s(_vm.paymentStatus.toUpperCase()) + " ")]), _c("template", {
    slot: "vbt-action-buttons"
  }, [_c("div", {
    staticClass: "float-right"
  }, [_c("download-excel", {
    staticClass: "btn btn-success",
    attrs: {
      data: _vm.excelDownload,
      name: _vm.excelName
    }
  }, [_vm._v(" Excel "), _c("i", {
    staticClass: "mdi mdi-file-excel-box"
  })])], 1)])], 2)], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./src/views/admin/payments/index.vue":
/*!********************************************!*\
  !*** ./src/views/admin/payments/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1e9f314a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1e9f314a&scoped=true */ "./src/views/admin/payments/index.vue?vue&type=template&id=1e9f314a&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/views/admin/payments/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1e9f314a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1e9f314a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e9f314a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/admin/payments/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/admin/payments/index.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./src/views/admin/payments/index.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/payments/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/admin/payments/index.vue?vue&type=template&id=1e9f314a&scoped=true":
/*!**************************************************************************************!*\
  !*** ./src/views/admin/payments/index.vue?vue&type=template&id=1e9f314a&scoped=true ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1e9f314a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1e9f314a&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/payments/index.vue?vue&type=template&id=1e9f314a&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1e9f314a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1e9f314a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=65.js.map