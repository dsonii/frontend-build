(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/drivers/index.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/drivers/index.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_bootstrap4_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-bootstrap4-table */ "./node_modules/vue-bootstrap4-table/dist/vue-bootstrap4-table.esm.js");
/* harmony import */ var vue_json_excel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-json-excel */ "./node_modules/vue-json-excel/dist/vue-json-excel.esm.js");
/* harmony import */ var _store_fetchUsers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/fetchUsers.js */ "./src/store/fetchUsers.js");
/* harmony import */ var _modelView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modelView */ "./src/views/admin/drivers/modelView.vue");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_useApp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/useApp */ "./src/store/useApp.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../helpers/utils */ "./src/helpers/utils.js");













/* harmony default export */ __webpack_exports__["default"] = ({
  name: "drivers",
  data() {
    return {
      title: "",
      breadcrumbs: {
        title: "Driver Lists",
        b1: "Manage Drivers",
        b2: "Drivers",
        b3: "Index",
        link: false,
        name: "Drivers"
      },
      options: [{
        text: "Active",
        value: "Active"
      }, {
        text: "Inactive",
        value: "Inactive"
      }],
      showLoader: false,
      columns: [{
        label: "Full name",
        name: "fullname",
        sort: true
      }, {
        label: "Phone",
        name: "phone",
        sort: true
      }, {
        label: "National ID",
        name: "national_id",
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
        label: "CreatedAt",
        name: "createdAt"
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
          placeholder: "Enter search agent",
          visibility: true,
          case_sensitive: false,
          showClearButton: false,
          searchOnPressEnter: false,
          searchDebounceRate: 1000
        },
        per_page_options: [10, 20, 30, 50, 100],
        highlight_row_hover_color: "silver",
        // card_title: "Vue Bootsrap 4 advanced table",
        card_mode: true
      },
      dropdowns: [],
      classes: {
        table: "  table-bordered  table-striped"
      },
      queryParams: {
        sort: [],
        filters: [],
        global_search: "",
        per_page: 10,
        page: 1
      },
      total_rows: 0,
      form: {
        id: "",
        adminId: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        status: "",
        picture: "",
        document_licence: "",
        document_adhar_card: "",
        document_police_vertification: "",
        createdAt: ""
      },
      modalEdit: false,
      modalView: false,
      modalData: {},
      modaloktitle: ""
    };
  },
  // add to component
  components: {
    modalView: _modelView__WEBPACK_IMPORTED_MODULE_9__["default"],
    downloadExcel: vue_json_excel__WEBPACK_IMPORTED_MODULE_7__["default"],
    VueBootstrap4Table: vue_bootstrap4_table__WEBPACK_IMPORTED_MODULE_6__["default"],
    Breadcrumb: _components_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    excelDownload() {
      return _services__WEBPACK_IMPORTED_MODULE_4__["driverService"].tranform(this.rows);
    },
    excelName() {
      return this.breadcrumbs.title + "_" + moment_timezone__WEBPACK_IMPORTED_MODULE_5___default()().local().unix();
    },
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_10__["mapState"])(_store_fetchUsers_js__WEBPACK_IMPORTED_MODULE_8__["fetchUsers"], ["getUser"]),
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_10__["mapState"])(_store_useApp__WEBPACK_IMPORTED_MODULE_11__["useApp"], ["dateFormat"])
  },
  methods: {
    dateFormated(createdAt, format) {
      return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_12__["getDateFormat"])(createdAt, format); //"DD MMM, YYYY"
    },
    updateStatus(status, type, id) {
      _services__WEBPACK_IMPORTED_MODULE_4__["driverService"].changeStatus(status, type, id).then(response => {
        if (response.status) {
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 3000
          });
        } else {
          this.$toast.open({
            message: response.message,
            type: "danger",
            position: "top-right",
            duration: 3000
          });
        }
      });
    },
    viewRow(data) {
      console.log("view data", data);
      this.title = "Driver Details";
      this.modalView = true;
      this.modalEdit = false;
      this.modaloktitle = "Ok";
      this.$refs.myModalRefDriver.show();
      this.modalData = data;
    },
    editRow(data) {
      this.title = "Driver Edit";
      this.modalEdit = true;
      this.modalView = false;
      this.modaloktitle = "Update";
      this.$refs.myModalRefDriver.show();
      console.log(data);
      this.form = data;
    },
    hideModal() {
      this.$refs.myModalRefDriver.hide();
      this.modalEdit = false;
      this.modalView = false;
    },
    handleOk() {
      // Prevent modal from closing
      this.$refs.myModalRefBus.hide();
      this.modalEdit = false;
      this.modalView = false;
      // Trigger submit handler
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
            _services__WEBPACK_IMPORTED_MODULE_4__["driverService"].deleteDriver(id, name).then(response => {
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
    onRefreshData() {
      this.showLoader = true;
      this.loadItems();
    },
    onChangeQuery(queryParams) {
      this.queryParams = queryParams;
      this.showLoader = true;
      this.loadItems();
    },
    // load items is what brings back the rows from server
    loadItems() {
      _services__WEBPACK_IMPORTED_MODULE_4__["driverService"].getAll(this.queryParams).then(response => {
        this.total_rows = response.data.totalRecords;
        this.rows = response.data.drivers;
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

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/drivers/modelView.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/drivers/modelView.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_useApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/useApp */ "./src/store/useApp.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/utils */ "./src/helpers/utils.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "modelView",
  props: ["modalData"],
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

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/drivers/index.vue?vue&type=template&id=c6a819b8&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/drivers/index.vue?vue&type=template&id=c6a819b8&scoped=true ***!
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
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("Breadcrumb", {
    attrs: {
      breadcrumbs: _vm.breadcrumbs
    }
  })], 1), _c("div", {
    staticClass: "col-lg-12 grid-margin stretch-card"
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
      key: "fullname",
      fn: function (props) {
        return [_c("div", {
          staticClass: "d-flex align-items-center"
        }, [_c("b-avatar", {
          staticClass: "mr-2",
          attrs: {
            variant: "primary",
            text: `${props.row.firstname.charAt(0)}${props.row.lastname.charAt(0)}`,
            src: props.row.picture
          }
        }), _c("span", {
          staticClass: "mr-auto"
        }, [_vm._v(_vm._s(props.row.fullname))])], 1)];
      }
    }, {
      key: "status",
      fn: function (props) {
        return [props.column.name == "status" ? _c("span", [props.row.status == "Active" ? _c("b-badge", {
          attrs: {
            variant: "success"
          }
        }, [_vm._v("Active")]) : props.row.status == "InActive" ? _c("b-badge", {
          attrs: {
            variant: "warning"
          }
        }, [_vm._v("InActive")]) : _vm._e()], 1) : _vm._e()];
      }
    }, {
      key: "createdAt",
      fn: function (props) {
        return [_vm._v(" " + _vm._s(_vm.dateFormated(props.row.createdAt, _vm.dateFormat.value)) + " ")];
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
            href: "#/driver/" + props.row.ids
          }
        }, [_c("span", {
          staticClass: "text-primary"
        }, [_c("i", {
          staticClass: "mdi mdi-pencil"
        }), _vm._v(" Edit ")])]), _vm.getUser.role == "admin" ? _c("b-dropdown-item", {
          on: {
            click: function ($event) {
              $event.stopPropagation();
              return _vm.deleteRow(props.row.ids, props.row.firstname);
            }
          }
        }, [_c("span", {
          staticClass: "text-danger"
        }, [_c("i", {
          staticClass: "mdi mdi-delete"
        }), _vm._v(" Delete ")])]) : _vm._e()], 1)], 1) : _vm._e()];
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
    ref: "myModalRefDriver",
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
      modalData: _vm.modalData
    }
  })], 1) : _vm._e()])], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/drivers/modelView.vue?vue&type=template&id=1d79c680":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/drivers/modelView.vue?vue&type=template&id=1d79c680 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "table table-bordered table-striped styledClass"
  }, [_vm._m(0), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.modalData.firstname) + " " + _vm._s(_vm.modalData.lastname))]), _c("td", [_vm._v(_vm._s(_vm.modalData.email))]), _c("td", [_vm._v(_vm._s(_vm.modalData.phone))]), _c("td", [_c("a", {
    attrs: {
      href: `${_vm.modalData.picture}`,
      target: "_blank"
    }
  }, [_c("b-img", {
    attrs: {
      width: "60",
      height: "60",
      src: _vm.modalData.picture
    }
  })], 1)]), _c("td", [_c("a", {
    attrs: {
      href: `${_vm.modalData.document_licence}`,
      target: "_blank"
    }
  }, [_c("b-img", {
    attrs: {
      width: "60",
      height: "60",
      src: _vm.modalData.document_licence
    }
  })], 1), _c("br"), _c("br"), _vm._v("Exp.: " + _vm._s(_vm.dateConvert(_vm.modalData.licence_expiry_date, "Y-MM-DD")))]), _c("td", [_c("a", {
    attrs: {
      href: `${_vm.modalData.document_national_icard}`,
      target: "_blank"
    }
  }, [_c("b-img", {
    attrs: {
      width: "60",
      height: "60",
      src: _vm.modalData.document_national_icard
    }
  })], 1)]), _c("td", [_c("a", {
    attrs: {
      href: `${_vm.modalData.document_police_vertification}`,
      target: "_blank"
    }
  }, [_c("b-img", {
    attrs: {
      width: "60",
      height: "60",
      src: _vm.modalData.document_police_vertification
    }
  })], 1), _c("br"), _c("br"), _vm._v(" Exp.: " + _vm._s(_vm.dateConvert(_vm.modalData.police_vertification_expiry_date, "Y-MM-DD")) + " ")])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_vm._v("Full Name")]), _c("td", [_vm._v("Email Address")]), _c("td", [_vm._v("Phone")]), _c("td", [_vm._v("Profile Picture")]), _c("td", [_vm._v("Licence")]), _c("td", [_vm._v("National ID Card")]), _c("td", [_vm._v("Police vertification")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/drivers/index.vue?vue&type=style&index=0&id=c6a819b8&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/drivers/index.vue?vue&type=style&index=0&id=c6a819b8&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.form-control[data-v-c6a819b8] {\r\n  height: 28px !important;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/drivers/modelView.vue?vue&type=style&index=0&id=1d79c680&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/drivers/modelView.vue?vue&type=style&index=0&id=1d79c680&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.styledClass img {\r\n  width: 100% !important;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    height: 150px !important;\r\n    border-radius: 0 !important;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/drivers/index.vue?vue&type=style&index=0&id=c6a819b8&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/drivers/index.vue?vue&type=style&index=0&id=c6a819b8&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=c6a819b8&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/drivers/index.vue?vue&type=style&index=0&id=c6a819b8&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("41ad3163", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/drivers/modelView.vue?vue&type=style&index=0&id=1d79c680&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/drivers/modelView.vue?vue&type=style&index=0&id=1d79c680&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./modelView.vue?vue&type=style&index=0&id=1d79c680&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/drivers/modelView.vue?vue&type=style&index=0&id=1d79c680&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("186cdfd0", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/admin/drivers/index.vue":
/*!*******************************************!*\
  !*** ./src/views/admin/drivers/index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_c6a819b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=c6a819b8&scoped=true */ "./src/views/admin/drivers/index.vue?vue&type=template&id=c6a819b8&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/views/admin/drivers/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_c6a819b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=c6a819b8&scoped=true&lang=css */ "./src/views/admin/drivers/index.vue?vue&type=style&index=0&id=c6a819b8&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_c6a819b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_c6a819b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c6a819b8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/admin/drivers/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/admin/drivers/index.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/views/admin/drivers/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/drivers/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/admin/drivers/index.vue?vue&type=style&index=0&id=c6a819b8&scoped=true&lang=css":
/*!***************************************************************************************************!*\
  !*** ./src/views/admin/drivers/index.vue?vue&type=style&index=0&id=c6a819b8&scoped=true&lang=css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c6a819b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=c6a819b8&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/drivers/index.vue?vue&type=style&index=0&id=c6a819b8&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c6a819b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c6a819b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c6a819b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c6a819b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/admin/drivers/index.vue?vue&type=template&id=c6a819b8&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/views/admin/drivers/index.vue?vue&type=template&id=c6a819b8&scoped=true ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c6a819b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=c6a819b8&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/drivers/index.vue?vue&type=template&id=c6a819b8&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c6a819b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c6a819b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/admin/drivers/modelView.vue":
/*!***********************************************!*\
  !*** ./src/views/admin/drivers/modelView.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modelView_vue_vue_type_template_id_1d79c680__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modelView.vue?vue&type=template&id=1d79c680 */ "./src/views/admin/drivers/modelView.vue?vue&type=template&id=1d79c680");
/* harmony import */ var _modelView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modelView.vue?vue&type=script&lang=js */ "./src/views/admin/drivers/modelView.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _modelView_vue_vue_type_style_index_0_id_1d79c680_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modelView.vue?vue&type=style&index=0&id=1d79c680&lang=css */ "./src/views/admin/drivers/modelView.vue?vue&type=style&index=0&id=1d79c680&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _modelView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _modelView_vue_vue_type_template_id_1d79c680__WEBPACK_IMPORTED_MODULE_0__["render"],
  _modelView_vue_vue_type_template_id_1d79c680__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/admin/drivers/modelView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/admin/drivers/modelView.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/views/admin/drivers/modelView.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modelView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./modelView.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/drivers/modelView.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modelView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/admin/drivers/modelView.vue?vue&type=style&index=0&id=1d79c680&lang=css":
/*!*******************************************************************************************!*\
  !*** ./src/views/admin/drivers/modelView.vue?vue&type=style&index=0&id=1d79c680&lang=css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modelView_vue_vue_type_style_index_0_id_1d79c680_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./modelView.vue?vue&type=style&index=0&id=1d79c680&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/drivers/modelView.vue?vue&type=style&index=0&id=1d79c680&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modelView_vue_vue_type_style_index_0_id_1d79c680_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modelView_vue_vue_type_style_index_0_id_1d79c680_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modelView_vue_vue_type_style_index_0_id_1d79c680_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modelView_vue_vue_type_style_index_0_id_1d79c680_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/admin/drivers/modelView.vue?vue&type=template&id=1d79c680":
/*!*****************************************************************************!*\
  !*** ./src/views/admin/drivers/modelView.vue?vue&type=template&id=1d79c680 ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modelView_vue_vue_type_template_id_1d79c680__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./modelView.vue?vue&type=template&id=1d79c680 */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/drivers/modelView.vue?vue&type=template&id=1d79c680");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modelView_vue_vue_type_template_id_1d79c680__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modelView_vue_vue_type_template_id_1d79c680__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=24.js.map