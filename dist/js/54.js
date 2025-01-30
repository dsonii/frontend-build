(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/locations/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/locations/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/breadcrumb */ "./src/components/breadcrumb/index.vue");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services */ "./src/services/index.js");
/* harmony import */ var vue_bootstrap4_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-bootstrap4-table */ "./node_modules/vue-bootstrap4-table/dist/vue-bootstrap4-table.esm.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_json_excel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-json-excel */ "./node_modules/vue-json-excel/dist/vue-json-excel.esm.js");
/* harmony import */ var _modelView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modelView */ "./src/views/admin/locations/modelView.vue");









/* harmony default export */ __webpack_exports__["default"] = ({
  name: "location",
  data() {
    return {
      breadcrumbs: {
        title: "Stops",
        b1: "Manage Routes",
        b2: "Stops",
        b3: "Index",
        link: false,
        name: "Stop lists"
      },
      showLoader: false,
      columns: [{
        label: "Title",
        name: "title",
        sort: true
      }, {
        label: "Type",
        name: "type",
        sort: true
      }, {
        label: "Status",
        name: "status",
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
          placeholder: "Enter search location",
          visibility: true,
          case_sensitive: false,
          showClearButton: false,
          searchOnPressEnter: false,
          searchDebounceRate: 5000
        },
        per_page_options: [10, 20, 30, 50, 100],
        highlight_row_hover_color: "silver",
        highlight_row_hover: true,
        card_mode: true
      },
      dropdowns: [],
      classes: {
        table: "table-bordered table-striped"
      },
      queryParams: {
        sort: [],
        filters: [],
        global_search: "",
        per_page: 10,
        page: 1
      },
      total_rows: 0,
      modalEdit: false,
      modalView: false,
      modaloktitle: "",
      title: ""
    };
  },
  components: {
    Breadcrumb: _components_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["default"],
    downloadExcel: vue_json_excel__WEBPACK_IMPORTED_MODULE_7__["default"],
    VueBootstrap4Table: vue_bootstrap4_table__WEBPACK_IMPORTED_MODULE_5__["default"],
    modalView: _modelView__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  computed: {
    excelDownload() {
      return _services__WEBPACK_IMPORTED_MODULE_4__["locationService"].tranform(this.rows);
    },
    excelName() {
      return this.breadcrumbs.title + "_" + moment_timezone__WEBPACK_IMPORTED_MODULE_6___default()().local().unix();
    }
  },
  methods: {
    viewRow(data) {
      this.title = "Location Details";
      this.modalView = true;
      this.modalEdit = false;
      this.modaloktitle = "Ok";
      this.$refs.myModalRefLocation.show();
      this.form = data;
    },
    deleteRow(id, name) {
      try {
        this.$swal.fire({
          title: `Are you sure you want to delete ${name}?`,
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(result => {
          if (result.isConfirmed) {
            _services__WEBPACK_IMPORTED_MODULE_4__["locationService"].deleteLocation(id).then(response => {
              if (typeof response.data === "object" && response.data.status === 403) {
                this.$swal.fire(response.data.message, "", "error");
                this.$toast.open({
                  message: response.data.message,
                  type: "error",
                  position: "top-right",
                  duration: 3000
                  // all of other options may go here
                });
                this.showLoader = false;
              } else if (response.status) {
                this.$swal.fire("Deleted!", response.message, "success");
                this.$toast.open({
                  message: response.message,
                  type: "success",
                  position: "top-right",
                  duration: 3000
                  // all of other options may go here
                });
                this.showLoader = true;
                this.loadItems();
              } else {
                this.$swal.fire("Failed!", response.message, "danger");
                this.$toast.open({
                  message: response.message,
                  type: "danger",
                  position: "top-right",
                  duration: 3000
                  // all of other options may go here
                });
                this.showLoader = true;
                this.loadItems();
              }
            });
          }
        });
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 5000
        });
      }
    },
    editRow(data) {
      this.title = "Location Edit";
      this.modalEdit = true;
      this.modalView = false;
      this.modaloktitle = "Update";
      this.$refs.myModalRefLocation.show();
      console.log(data);
      this.form = data;
    },
    hideModal() {
      this.$refs.myModalRefLocation.hide();
      this.modalEdit = false;
      this.modalView = false;
    },
    handleOk() {
      // Prevent modal from closing
      this.$refs.myModalRefLocation.hide();
      this.modalEdit = false;
      this.modalView = false;
      // Trigger submit handler
    },
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    onChangeQuery(queryParams) {
      this.queryParams = queryParams;
      this.showLoader = true;
      this.loadItems();
    },
    onRefreshData() {
      this.showLoader = true;
      this.loadItems();
    },
    // load items is what brings back the rows from server
    loadItems() {
      _services__WEBPACK_IMPORTED_MODULE_4__["locationService"].getAll(this.queryParams).then(response => {
        this.total_rows = response.data.totalRecords;
        this.rows = response.data.locations;
        this.showLoader = false;
      });
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
  mounted() {
    this.loadItems();
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

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/locations/modelView.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/locations/modelView.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_useApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/useApp */ "./src/store/useApp.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/utils */ "./src/helpers/utils.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "modelView",
  props: ["form"],
  computed: {
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_0__["mapState"])(_store_useApp__WEBPACK_IMPORTED_MODULE_1__["useApp"], ["dateFormat", "timeFormat"])
  },
  methods: {
    dateConvert(createdAt, format) {
      return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["getDateFormat"])(createdAt, format);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/locations/index.vue?vue&type=template&id=564f0c12":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/locations/index.vue?vue&type=template&id=564f0c12 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "col-lg-12"
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
      "on-change-query": _vm.onChangeQuery,
      "refresh-data": _vm.onRefreshData
    },
    scopedSlots: _vm._u([{
      key: "status",
      fn: function (props) {
        return [props.column.name == "status" ? _c("span", [props.row.status == "Active" ? _c("b-badge", {
          attrs: {
            variant: "success"
          }
        }, [_vm._v("Active")]) : _vm._e(), props.row.status == "Inactive" ? _c("b-badge", {
          attrs: {
            variant: "danger"
          }
        }, [_vm._v("Inactive")]) : _vm._e()], 1) : _vm._e()];
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
              return _vm.viewRow(props.row);
            }
          }
        }, [_c("span", {
          staticClass: "text-dark"
        }, [_c("i", {
          staticClass: "mdi mdi-eye"
        }), _vm._v(" View ")])]), _c("b-dropdown-item", {
          attrs: {
            href: "#/location/" + props.row.ids
          }
        }, [_c("span", {
          staticClass: "text-primary"
        }, [_c("i", {
          staticClass: "mdi mdi-pencil"
        }), _vm._v(" Edit ")])]), _c("b-dropdown-item", {
          on: {
            click: function ($event) {
              $event.stopPropagation();
              return _vm.deleteRow(props.row.ids, props.row.title);
            }
          }
        }, [_c("span", {
          staticClass: "text-danger"
        }, [_c("i", {
          staticClass: "mdi mdi-delete"
        }), _vm._v(" Delete ")])])], 1)], 1) : _vm._e()];
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
    slot: "vbt-action-buttons"
  }, [_c("div", {
    staticClass: "btn-group float-right",
    attrs: {
      role: "group",
      "aria-label": "Basic example"
    }
  }, [_c("download-excel", {
    staticClass: "btn btn-success",
    attrs: {
      data: _vm.excelDownload,
      name: _vm.excelName
    }
  }, [_vm._v(" Excel "), _c("i", {
    staticClass: "mdi mdi-file-excel-box"
  })])], 1)])], 2), _c("b-modal", {
    ref: "myModalRefLocation",
    attrs: {
      title: _vm.title,
      size: "xl",
      "ok-title": _vm.modaloktitle
    },
    on: {
      hidden: _vm.hideModal,
      ok: _vm.handleOk
    }
  }, [_vm.modalView == true ? _c("span", [_c("modalView", {
    attrs: {
      form: _vm.form
    }
  })], 1) : _vm._e()])], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/locations/modelView.vue?vue&type=template&id=c14bfbda":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/locations/modelView.vue?vue&type=template&id=c14bfbda ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("table", {
    staticClass: "table table-bordered table-striped"
  }, [_vm._m(0), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.form.title))]), _c("td", [_vm._v(_vm._s(_vm.form.location_address))]), _c("td", [_vm._v(_vm._s(_vm.form.location_lat))]), _c("td", [_vm._v(_vm._s(_vm.form.location_lng))]), _c("td", [_vm._v(_vm._s(_vm.form.status))]), _c("td", [_vm._v(_vm._s(_vm.form.type == "DA" ? "Departure / Arrival location" : "Pick-up / Drop off location"))]), _c("td", [_vm._v(_vm._s(_vm.dateConvert(_vm.form.createdAt, `${_vm.dateFormat.value} ${_vm.timeFormat.value}`)))])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_vm._v("Title")]), _c("td", [_vm._v("Address")]), _c("td", [_vm._v("Latitude")]), _c("td", [_vm._v("Longitude")]), _c("td", [_vm._v("Status")]), _c("td", [_vm._v("Type")]), _c("td", [_vm._v("Created At")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./src/views/admin/locations/index.vue":
/*!*********************************************!*\
  !*** ./src/views/admin/locations/index.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_564f0c12__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=564f0c12 */ "./src/views/admin/locations/index.vue?vue&type=template&id=564f0c12");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/views/admin/locations/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_564f0c12__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_564f0c12__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/admin/locations/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/admin/locations/index.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/views/admin/locations/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/locations/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/admin/locations/index.vue?vue&type=template&id=564f0c12":
/*!***************************************************************************!*\
  !*** ./src/views/admin/locations/index.vue?vue&type=template&id=564f0c12 ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_564f0c12__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=564f0c12 */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/locations/index.vue?vue&type=template&id=564f0c12");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_564f0c12__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_564f0c12__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/admin/locations/modelView.vue":
/*!*************************************************!*\
  !*** ./src/views/admin/locations/modelView.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modelView_vue_vue_type_template_id_c14bfbda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modelView.vue?vue&type=template&id=c14bfbda */ "./src/views/admin/locations/modelView.vue?vue&type=template&id=c14bfbda");
/* harmony import */ var _modelView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modelView.vue?vue&type=script&lang=js */ "./src/views/admin/locations/modelView.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modelView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _modelView_vue_vue_type_template_id_c14bfbda__WEBPACK_IMPORTED_MODULE_0__["render"],
  _modelView_vue_vue_type_template_id_c14bfbda__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/admin/locations/modelView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/admin/locations/modelView.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./src/views/admin/locations/modelView.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modelView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./modelView.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/locations/modelView.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modelView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/admin/locations/modelView.vue?vue&type=template&id=c14bfbda":
/*!*******************************************************************************!*\
  !*** ./src/views/admin/locations/modelView.vue?vue&type=template&id=c14bfbda ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modelView_vue_vue_type_template_id_c14bfbda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./modelView.vue?vue&type=template&id=c14bfbda */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/locations/modelView.vue?vue&type=template&id=c14bfbda");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modelView_vue_vue_type_template_id_c14bfbda__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modelView_vue_vue_type_template_id_c14bfbda__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=54.js.map