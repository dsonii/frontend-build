(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/bookings/ModalView.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/bookings/ModalView.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_useApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/useApp */ "./src/store/useApp.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "modelView",
  props: ["modalData"],
  computed: {
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_0__["mapState"])(_store_useApp__WEBPACK_IMPORTED_MODULE_1__["useApp"], ["dateFormat", "timeFormat", "defaultCurrency"])
  },
  methods: {
    dateConvert(createdAt, format) {
      return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["getDateFormat"])(createdAt, format);
    },
    layoutName(name) {
      if (name == "layout-1") {
        return "1 X 1";
      } else if (name == "layout-2") {
        return "1 X 2";
      } else if (name == "layout-3") {
        return "2 X 1";
      } else if (name == "layout-4") {
        return "2 X 2";
      } else if (name == "layout-5") {
        return "2 X 3";
      } else if (name == "layout-6") {
        return "3 X 2";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/customers/bookings/Histories.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/customers/bookings/Histories.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services */ "./src/services/index.js");
/* harmony import */ var vue_bootstrap4_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-bootstrap4-table */ "./node_modules/vue-bootstrap4-table/dist/vue-bootstrap4-table.esm.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_useApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/useApp */ "./src/store/useApp.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _components_bookings_ModalView_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/bookings/ModalView.vue */ "./src/components/bookings/ModalView.vue");






/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      optionStatus: [{
        text: "Completed",
        value: "COMPLETED"
      }, {
        text: "Scheduled",
        value: "SCHEDULED"
      }, {
        text: "Onboarded",
        value: "ONBOARDED"
      }, {
        text: "Expired",
        value: "EXPIRED"
      }, {
        text: "Cancelled",
        value: "CANCELLED"
      }, {
        text: "Processing",
        value: "PROCESSING"
      }],
      rows: [],
      columns: [{
        label: "PNR",
        name: "pnr_no",
        sort: true
      }, {
        label: "Date/Time",
        name: "date_time",
        sort: true
      }, {
        label: "Stop/Route",
        name: "stopping_points",
        sort: true
      }, {
        label: "Vehicle Name",
        name: "bus_name",
        //   filter: {
        //     type: "simple",
        //     placeholder: "Enter bus name",
        //   },
        sort: true
      }, {
        label: "Total Passengers",
        name: "passengers",
        sort: true
      }, {
        label: "Total Fare",
        name: "final_total_fare",
        sort: true
      }, {
        label: "Action",
        name: "action",
        sort: false
      }],
      config: {
        server_mode: true,
        // by default false
        loaderText: "Updating...",
        // by default 'Loading...'
        pagination: true,
        global_search: {
          placeholder: "Enter search customer histories",
          visibility: true,
          case_sensitive: false,
          showClearButton: false,
          searchOnPressEnter: false,
          searchDebounceRate: 1000
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
      sortType: "desc",
      sortBy: "createdAt",
      travel_status: "COMPLETED",
      total_rows: 0,
      showLoader: true,
      modalView: false,
      modalData: {},
      modaloktitle: "",
      customer_details: {}
    };
  },
  components: {
    VueBootstrap4Table: vue_bootstrap4_table__WEBPACK_IMPORTED_MODULE_1__["default"],
    ModalView: _components_bookings_ModalView_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  computed: {
    ...Object(pinia__WEBPACK_IMPORTED_MODULE_2__["mapState"])(_store_useApp__WEBPACK_IMPORTED_MODULE_3__["useApp"], ["dateFormat", "timeFormat"])
  },
  methods: {
    dateFormated(createdAt, format) {
      return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFormat"])(createdAt, format);
    },
    viewRow(data) {
      this.title = "Customer Booking History Details";
      this.modalView = true;
      this.modalEdit = false;
      this.modaloktitle = "Ok";
      this.$refs.myModalRefBookingHistory.show();
      this.modalData = data;
    },
    hideModal() {
      this.$refs.myModalRefBookingHistory.hide();
      this.modalEdit = false;
      this.modalView = false;
    },
    handleOk() {
      // Prevent modal from closing
      //  bvModalEvt.preventDefault();
      this.$refs.myModalRefBookingHistory.hide();
      this.modalEdit = false;
      this.modalView = false;
      // Trigger submit handler
    },
    loadItems() {
      this.showLoader = true;
      this.queryParams.travel_status = this.travel_status;
      this.queryParams.sortType = this.sortType;
      this.queryParams.sortBy = this.sortBy;
      _services__WEBPACK_IMPORTED_MODULE_0__["customerService"].bookingHistory(this.$route.params.userId, this.queryParams).then(response => {
        this.total_rows = response.data.totalRecords;
        this.rows = response.data.bookinghistories;
        this.showLoader = false;
        this.customer_details = response.data.customer_details;
      });
    },
    onRefreshData() {
      this.showLoader = true;
      this.loadItems();
    },
    onChangeQuery(queryParams) {
      queryParams.travel_status = this.travel_status;
      queryParams.sortType = this.sortType;
      queryParams.sortBy = this.sortBy;
      this.queryParams = queryParams;
      this.showLoader = true;
      this.loadItems();
    }
  },
  mounted() {
    this.loadItems();
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/bookings/ModalView.vue?vue&type=template&id=0b0bbc66":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/bookings/ModalView.vue?vue&type=template&id=0b0bbc66 ***!
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
  return _c("div", [_c("b-tabs", {
    attrs: {
      pills: "",
      "content-class": "mt-3"
    }
  }, [_c("b-tab", {
    attrs: {
      title: "Booking Details",
      active: ""
    }
  }, [_c("b-container", [_c("b-row", [_c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("PNR No")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.modalData.pnr_no))])]), _c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("Date / Time")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(" " + _vm._s(_vm.dateConvert(_vm.modalData.booking_date, _vm.dateFormat.value)) + " "), _c("br"), _vm._v(" " + _vm._s(_vm.modalData.start_time) + " - " + _vm._s(_vm.modalData.drop_time) + " ")])]), _c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("Stops / Route")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(" " + _vm._s(_vm.modalData.location.pickup_location) + " - " + _vm._s(_vm.modalData.location.drop_location) + " "), _c("br"), _vm._v(" from "), _c("b", [_vm._v(_vm._s(_vm.modalData.location.route_name))])])]), _c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("Vehicle")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(" Name : " + _vm._s(_vm.modalData.bus_reg_no)), _c("br"), _vm._v(" Model Number : " + _vm._s(_vm.modalData.bus_model_no)), _c("br"), _vm._v(" Plate/Registration Number : " + _vm._s(_vm.modalData.bus_reg_no) + " "), _c("br"), _vm._v(" Type : " + _vm._s(_vm.modalData.bus_type_name)), _c("br"), _vm._v(" Layout Name : " + _vm._s(_vm.modalData.bus_layout_name)), _c("br"), _vm._v(" Layout : " + _vm._s(_vm.layoutName(_vm.modalData.bus_layout_layout)) + " ")])]), _c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("Is Pass")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.modalData.is_pass))])]), _vm.modalData.is_pass === "Yes" ? _c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("No of Pass")]) : _vm._e(), _vm.modalData.is_pass === "Yes" ? _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.modalData.no_of_pass))])]) : _vm._e(), _c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("Total Passengers")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.modalData.passengers))])]), _c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("Seat Number")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.modalData.seat_nos.toString()))])]), _c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("Travel status")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.modalData.travel_status))])]), _c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("Created By")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(" " + _vm._s(_vm.dateConvert(_vm.modalData.createdAt, `${_vm.dateFormat.value} ${_vm.timeFormat.value}`)) + " ")])])], 1)], 1)], 1), _c("b-tab", {
    attrs: {
      title: "Passenger Details"
    }
  }, [_c("b-table", {
    attrs: {
      striped: "",
      hover: "",
      items: _vm.modalData.passenger_details
    }
  })], 1), _c("b-tab", {
    attrs: {
      title: "Payment Details"
    }
  }, [_c("b-container", [_c("b-row", [_c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("Payment Status")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.modalData.payment_status))])]), _c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("OrderID")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.modalData.orderId))])]), _c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("Method")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.modalData.payment_details.method))])]), _c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("Payment created")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(" " + _vm._s(_vm.dateConvert(_vm.modalData.payment_details.payment_created_date, `${_vm.dateFormat.value} ${_vm.timeFormat.value}`)) + " ")])]), _c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("Sub Total")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.defaultCurrency) + _vm._s(_vm.modalData.sub_total))])]), _c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("Tax (" + _vm._s(_vm.modalData.tax) + "%)")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.defaultCurrency) + _vm._s(_vm.modalData.tax_amount))])]), _c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("Fee")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.defaultCurrency) + _vm._s(_vm.modalData.fee))])]), _c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_vm._v("Total (round off)")]), _c("b-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("p", [_vm._v(" " + _vm._s(_vm.defaultCurrency) + _vm._s(_vm.modalData.payment_details.amount) + " ")])])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/customers/bookings/Histories.vue?vue&type=template&id=6a6cfdde&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/customers/bookings/Histories.vue?vue&type=template&id=6a6cfdde&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("vue-bootstrap4-table", {
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
      key: "location",
      fn: function (props) {
        return [_c("b", [_vm._v("Route Name :")]), _vm._v(" " + _vm._s(props.row.location.route_name) + " "), _c("br"), _c("b", [_vm._v(" Pickup :")]), _vm._v(" " + _vm._s(props.row.location.pickup_location)), _c("br"), _c("b", [_vm._v(" Dropoff:")]), _vm._v(" " + _vm._s(props.row.location.drop_location) + " ")];
      }
    }, {
      key: "date_time",
      fn: function (props) {
        return [_vm._v(" " + _vm._s(_vm.dateFormated(props.row.booking_date, _vm.dateFormat.value)) + " "), _c("br"), _c("small", [_vm._v(_vm._s(props.row.start_time) + " - " + _vm._s(props.row.drop_time))]), _vm._v("` ")];
      }
    }, {
      key: "stopping_points",
      fn: function (props) {
        return [_c("span", [_c("small", [_vm._v(_vm._s(props.row.location.pickup_location))]), _vm._v(" - "), _c("small", [_vm._v(" " + _vm._s(props.row.location.drop_location))])]), _c("br"), _c("small", [_vm._v("from "), _c("b", [_vm._v(_vm._s(props.row.location.route_name))])])];
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
        return [props.column.name == "action" && (_vm.travel_status === "COMPLETED" || _vm.travel_status === "ONBOARDED" || _vm.travel_status === "SCHEDULED") ? _c("span", [_c("b-button", {
          attrs: {
            variant: "outline-dark",
            size: "sm"
          },
          on: {
            click: function ($event) {
              return _vm.viewRow(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "mdi mdi-eye"
        }), _vm._v(" Details")])], 1) : _c("span", [_vm._v("-")])];
      }
    }])
  }, [_c("template", {
    slot: "card-header"
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("p", {
    staticClass: "float-left"
  }, [_vm._v(" Customer Name : " + _vm._s(_vm.customer_details.firstname) + " " + _vm._s(_vm.customer_details.lastname) + " ")])]), _c("b-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("p", {
    staticClass: "float-right"
  }, [_vm._v(" Customer Phone : +" + _vm._s(_vm.customer_details.country_code) + " " + _vm._s(_vm.customer_details.phone) + " ")])])], 1)], 1), _c("template", {
    slot: "vbt-action-buttons"
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "5",
      sm: "5",
      lg: "5"
    }
  }), _c("b-col", {
    attrs: {
      md: "4",
      sm: "5",
      lg: "4"
    }
  }, [_c("label", [_vm._v("Booking Status Filters :")]), _c("b-form-select", {
    attrs: {
      label: "Booking Status Filters :",
      options: _vm.optionStatus,
      size: "md"
    },
    on: {
      change: _vm.loadItems
    },
    model: {
      value: _vm.travel_status,
      callback: function ($$v) {
        _vm.travel_status = $$v;
      },
      expression: "travel_status"
    }
  })], 1)], 1)], 1)], 2), _c("b-modal", {
    ref: "myModalRefBookingHistory",
    attrs: {
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
  })], 1) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./src/components/bookings/ModalView.vue":
/*!***********************************************!*\
  !*** ./src/components/bookings/ModalView.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalView_vue_vue_type_template_id_0b0bbc66__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalView.vue?vue&type=template&id=0b0bbc66 */ "./src/components/bookings/ModalView.vue?vue&type=template&id=0b0bbc66");
/* harmony import */ var _ModalView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalView.vue?vue&type=script&lang=js */ "./src/components/bookings/ModalView.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalView_vue_vue_type_template_id_0b0bbc66__WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalView_vue_vue_type_template_id_0b0bbc66__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/bookings/ModalView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/bookings/ModalView.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/components/bookings/ModalView.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalView.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/bookings/ModalView.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/bookings/ModalView.vue?vue&type=template&id=0b0bbc66":
/*!*****************************************************************************!*\
  !*** ./src/components/bookings/ModalView.vue?vue&type=template&id=0b0bbc66 ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalView_vue_vue_type_template_id_0b0bbc66__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalView.vue?vue&type=template&id=0b0bbc66 */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/bookings/ModalView.vue?vue&type=template&id=0b0bbc66");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalView_vue_vue_type_template_id_0b0bbc66__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalView_vue_vue_type_template_id_0b0bbc66__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/customers/bookings/Histories.vue":
/*!****************************************************!*\
  !*** ./src/views/customers/bookings/Histories.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Histories_vue_vue_type_template_id_6a6cfdde_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Histories.vue?vue&type=template&id=6a6cfdde&scoped=true */ "./src/views/customers/bookings/Histories.vue?vue&type=template&id=6a6cfdde&scoped=true");
/* harmony import */ var _Histories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Histories.vue?vue&type=script&lang=js */ "./src/views/customers/bookings/Histories.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Histories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Histories_vue_vue_type_template_id_6a6cfdde_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Histories_vue_vue_type_template_id_6a6cfdde_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6a6cfdde",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/customers/bookings/Histories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/customers/bookings/Histories.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./src/views/customers/bookings/Histories.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Histories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Histories.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/customers/bookings/Histories.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Histories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/customers/bookings/Histories.vue?vue&type=template&id=6a6cfdde&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/views/customers/bookings/Histories.vue?vue&type=template&id=6a6cfdde&scoped=true ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Histories_vue_vue_type_template_id_6a6cfdde_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Histories.vue?vue&type=template&id=6a6cfdde&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/customers/bookings/Histories.vue?vue&type=template&id=6a6cfdde&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Histories_vue_vue_type_template_id_6a6cfdde_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Histories_vue_vue_type_template_id_6a6cfdde_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=47.js.map