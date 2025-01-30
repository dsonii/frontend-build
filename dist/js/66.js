(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/customers/create.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/customers/create.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/breadcrumb */ "./src/components/breadcrumb/index.vue");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "customercreate",
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_2__["validationMixin"]],
  data() {
    return {
      show: false,
      breadcrumbs: {
        title: "Create Customer",
        b1: "Manage Customers",
        b2: "Customers",
        b3: "Index",
        link: true,
        name: "customers"
      },
      locationOptions: [],
      loading: false,
      form: {
        company: "",
        customer_code: "",
        firstname: "",
        lastname: "",
        email: "",
        country_code: null,
        phone: "",
        gender: "",
        time_for_user: "",
        is_active: "",
        busScheduleId: "",
        refercode: "",
        pickup_location: [{
          location: [{}]
        }],
        drop_location: [{
          location: [{}]
        }],
        route: null,
        bus: null,
        seat: null,
        return_route: null,
        return_bus: null,
        return_seat: null,
        has_return: ""
      },
      submitted: false,
      options: [{
        text: "Active",
        value: "true"
      }, {
        text: "Inactive",
        value: "false",
        default: true
      }],
      countries: [],
      routeOption: [],
      return_routeOption: [],
      buses: [],
      return_buses: [],
      seats: [],
      return_seats: [],
      gender_options: [{
        text: "Male",
        value: "Male",
        default: 'Male'
      }, {
        text: "Female",
        value: "Female"
      }],
      isLoading: false
    };
  },
  components: {
    Breadcrumb: _components_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: (vue_multiselect__WEBPACK_IMPORTED_MODULE_6___default())
  },
  validations: {
    form: {
      company: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      customer_code: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["email"]
      },
      firstname: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        alpha: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["alpha"]
      },
      lastname: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        alpha: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["alpha"]
      },
      phone: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["numeric"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["minLength"])(10),
        maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(10),
        async uniquePhone(value) {
          if (value === "") return true;
          const {
            status
          } = await _services__WEBPACK_IMPORTED_MODULE_4__["customerService"].isExists({
            phone: value,
            id: ''
          });
          return status;
        }
      },
      is_active: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      country_code: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      gender: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      route: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      bus: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      seat: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      time_for_user: {},
      busScheduleId: {},
      refercode: {},
      has_return: {},
      return_route: {},
      return_bus: {},
      return_seat: {}
    }
  },
  mounted() {
    this.loadCountries();
  },
  methods: {
    isReturn: function () {
      if (this.form.has_return == 1) {
        this.show = true;
        this.searchReturnRoute();
      } else {
        this.show = false;
      }
    },
    validateState(name) {
      const {
        $dirty,
        $error
      } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    async loadCountries() {
      const response = await _services__WEBPACK_IMPORTED_MODULE_4__["countryService"].load({
        search: ""
      });
      this.countries = response.items;
    },
    fetchLocations(search, loading) {
      if (search.length) {
        let type = "PD";
        this.search(loading, search, type, this);
      }
    },
    search: lodash__WEBPACK_IMPORTED_MODULE_5___default.a.debounce(async (loading, search, type, vm) => {
      try {
        const response = await _services__WEBPACK_IMPORTED_MODULE_4__["locationService"].searchLocation({
          type: type,
          search: search
        });
        vm.locationOptions = response.items;
      } catch (err) {
        undefined.$toast.open({
          message: err,
          type: "error",
          position: "top-right",
          duration: 5000
        });
      }
    }, 350),
    searchReturnRoute() {
      _services__WEBPACK_IMPORTED_MODULE_4__["routeService"].searchRoute({
        drop_lat: this.form.pickup_location[0].location.coordinates[1],
        drop_long: this.form.pickup_location[0].location.coordinates[0],
        pickup_lat: this.form.drop_location[0].location.coordinates[1],
        pickup_long: this.form.drop_location[0].location.coordinates[0]
      }).then(response => {
        this.return_routeOption = response.data;
      });
    },
    onDropLocationSelect() {
      _services__WEBPACK_IMPORTED_MODULE_4__["routeService"].searchRoute({
        pickup_lat: this.form.pickup_location[0].location.coordinates[1],
        pickup_long: this.form.pickup_location[0].location.coordinates[0],
        drop_lat: this.form.drop_location[0].location.coordinates[1],
        drop_long: this.form.drop_location[0].location.coordinates[0]
      }).then(response => {
        this.routeOption = response.data;
      });
    },
    getBuses() {
      if (this.routeOption.length > 0) {
        for (let i = 0; i < this.routeOption.length; i++) {
          if (this.routeOption[i].value == this.form.route) {
            this.buses = [{
              "text": this.routeOption[i].bus_details.name,
              "value": this.routeOption[i].route_busId
            }];
          }
        }
      }
    },
    getReturnBuses() {
      if (this.return_routeOption.length > 0) {
        for (let i = 0; i < this.return_routeOption.length; i++) {
          if (this.return_routeOption[i].value == this.form.return_route) {
            this.return_buses = [{
              "text": this.return_routeOption[i].bus_details.name,
              "value": this.return_routeOption[i].route_busId
            }];
          }
        }
      }
    },
    getAvaialbleSeats() {
      let busScheduleId = "";
      if (this.routeOption.length > 0) {
        for (let i = 0; i < this.routeOption.length; i++) {
          if (this.routeOption[i].value == this.form.route) {
            busScheduleId = this.routeOption[i].busScheduleId;
            this.form.busScheduleId = this.routeOption[i].busScheduleId;
          }
        }
      }
      _services__WEBPACK_IMPORTED_MODULE_4__["buslayoutService"].searchSeat(this.form.bus, busScheduleId).then(response => {
        this.seats = response.data;
      });
    },
    getReturnAvaialbleSeats() {
      let returnBusScheduleId = "";
      if (this.return_routeOption.length > 0) {
        for (let i = 0; i < this.return_routeOption.length; i++) {
          if (this.return_routeOption[i].value == this.form.return_route) {
            returnBusScheduleId = this.return_routeOption[i].busScheduleId;
            this.form.return_busScheduleId = this.return_routeOption[i].busScheduleId;
          }
        }
      }
      _services__WEBPACK_IMPORTED_MODULE_4__["buslayoutService"].searchSeat(this.form.bus, returnBusScheduleId).then(response => {
        this.return_seats = response.data;
      });
    },
    async createUser() {
      try {
        this.submitted = true;
        this.form.refercode = Date.now().toString(36) + Math.random().toString(36).substr(2);
        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitted = false;
          return;
        }
        const response = await _services__WEBPACK_IMPORTED_MODULE_4__["customerService"].create(this.form);
        if (response.status) {
          this.submitted = false;
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 3000
          });
          setTimeout(() => this.$router.push({
            path: `/customers`
          }), 3000);
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

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/customers/create.vue?vue&type=template&id=5be3c5e0&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/customers/create.vue?vue&type=template&id=5be3c5e0&scoped=true ***!
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
        return _vm.createUser.apply(null, arguments);
      }
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Company Name",
      "label-for": "company-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-input", {
    class: {
      "is-invalid": _vm.submitted || _vm.$v.form.company.$error
    },
    attrs: {
      id: "company-input",
      type: "text",
      placeholder: "Enter company name",
      state: _vm.validateState("company")
    },
    model: {
      value: _vm.$v.form.company.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.company, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.company.$model"
    }
  }), _vm.submitted || !_vm.$v.form.company.required ? _c("b-form-invalid-feedback", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" company name is required ")]) : _vm._e(), !_vm.$v.form.company.alpha ? _c("b-form-invalid-feedback", {
    attrs: {
      id: "input-1-live-feedback"
    }
  }, [_vm._v("Only alphabetic characters are allowed")]) : _vm._e()], 1), _c("b-form-group", {
    attrs: {
      label: "Customer Code",
      "label-for": "customer-code-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-input", {
    class: {
      "is-invalid": _vm.submitted || _vm.$v.form.customer_code.$error
    },
    attrs: {
      id: "customer-code-input",
      type: "text",
      placeholder: "Enter customer code",
      state: _vm.validateState("customer_code")
    },
    model: {
      value: _vm.$v.form.customer_code.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.customer_code, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.customer_code.$model"
    }
  }), _vm.submitted || !_vm.$v.form.customer_code.required ? _c("b-form-invalid-feedback", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" customer code name is required ")]) : _vm._e(), !_vm.$v.form.customer_code.alpha ? _c("b-form-invalid-feedback", {
    attrs: {
      id: "input-1-live-feedback"
    }
  }, [_vm._v("Only alphabetic characters are allowed")]) : _vm._e()], 1), _c("b-form-group", {
    attrs: {
      label: "First Name",
      "label-for": "firstname-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-input", {
    class: {
      "is-invalid": _vm.submitted || _vm.$v.form.firstname.$error
    },
    attrs: {
      id: "firstname-input",
      type: "text",
      placeholder: "Enter first name",
      state: _vm.validateState("firstname")
    },
    model: {
      value: _vm.$v.form.firstname.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.firstname, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.firstname.$model"
    }
  }), _vm.submitted || !_vm.$v.form.firstname.required ? _c("b-form-invalid-feedback", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" first name is required ")]) : _vm._e(), !_vm.$v.form.firstname.alpha ? _c("b-form-invalid-feedback", {
    attrs: {
      id: "input-1-live-feedback"
    }
  }, [_vm._v("Only alphabetic characters are allowed")]) : _vm._e()], 1), _c("b-form-group", {
    attrs: {
      label: "Last Name",
      "label-for": "lastname-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-input", {
    class: {
      "is-invalid": _vm.submitted || _vm.$v.form.lastname.$error
    },
    attrs: {
      id: "lastname-input",
      type: "text",
      placeholder: "Enter last name",
      state: _vm.validateState("lastname")
    },
    model: {
      value: _vm.$v.form.lastname.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.lastname, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.lastname.$model"
    }
  }), _vm.submitted || !_vm.$v.form.lastname.required ? _c("b-form-invalid-feedback", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" last name is required ")]) : _vm._e(), !_vm.$v.form.lastname.alpha ? _c("b-form-invalid-feedback", {
    attrs: {
      id: "input-1-live-feedback"
    }
  }, [_vm._v("Only alphabetic characters are allowed")]) : _vm._e()], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Gender",
      "label-for": "gender-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-radio-group", {
    class: {
      "is-invalid": _vm.submitted || _vm.$v.form.gender.$error
    },
    attrs: {
      options: _vm.gender_options,
      state: _vm.validateState("gender"),
      name: "gender"
    },
    model: {
      value: _vm.$v.form.gender.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.gender, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.gender.$model"
    }
  }), _vm.submitted || !_vm.$v.form.gender.required ? _c("b-form-invalid-feedback", [_vm._v("Please select Gender")]) : _vm._e()], 1), _c("b-form-group", {
    attrs: {
      label: "Email Address",
      "label-for": "email-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-input", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.email.$error
    },
    attrs: {
      id: "email-input",
      type: "email",
      placeholder: "Enter email address",
      state: _vm.validateState("email")
    },
    model: {
      value: _vm.$v.form.email.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.email, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.email.$model"
    }
  }), _vm.submitted || !_vm.$v.form.email.required ? _c("b-form-invalid-feedback", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" email address is required ")]) : _vm._e()], 1), _c("b-form-group", {
    attrs: {
      label: "Country code",
      "label-for": "country-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-select", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.country_code.$error
    },
    attrs: {
      options: _vm.countries,
      state: _vm.validateState("country_code")
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function () {
        return [_c("b-form-select-option", {
          staticClass: "text-sm",
          attrs: {
            value: null,
            disabled: ""
          }
        }, [_vm._v("-- Please select an country code --")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.$v.form.country_code.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.country_code, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.country_code.$model"
    }
  })], 1), _c("b-form-group", {
    attrs: {
      label: "Mobile Number",
      "label-for": "phone-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-input", {
    class: {
      "is-invalid": _vm.submitted || _vm.$v.form.phone.$error
    },
    attrs: {
      id: "phone-input",
      placeholder: "Enter phone number",
      state: _vm.validateState("phone")
    },
    model: {
      value: _vm.$v.form.phone.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.phone, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.phone.$model"
    }
  }), _vm.submitted || !_vm.$v.form.phone.required ? _c("b-form-invalid-feedback", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" mobile number is required ")]) : _vm._e(), !_vm.$v.form.phone.minLength ? _c("b-form-invalid-feedback", [_vm._v(" mobile number must have at least " + _vm._s(_vm.$v.form.phone.$params.minLength.min) + " letters. ")]) : _vm._e(), !_vm.$v.form.phone.maxLength ? _c("b-form-invalid-feedback", [_vm._v(" mobile number must have at least " + _vm._s(_vm.$v.form.phone.$params.maxLength.max) + " letters. ")]) : _vm._e(), !_vm.$v.form.phone.uniquePhone ? _c("b-form-invalid-feedback", [_vm._v(" Phone number already exists. ")]) : _vm._e()], 1), _c("b-form-group", {
    attrs: {
      label: "Pickup Location",
      "label-for": "title-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("multiselect", {
    attrs: {
      options: _vm.locationOptions,
      placeholder: "Pickup Location",
      label: "title",
      "track-by": "title",
      searchable: true,
      loading: _vm.submitted
    },
    on: {
      "search-change": _vm.fetchLocations
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function (props) {
        return [_vm._v(" " + _vm._s(props.option.title) + " ")];
      }
    }]),
    model: {
      value: _vm.form.pickup_location[0].location,
      callback: function ($$v) {
        _vm.$set(_vm.form.pickup_location[0], "location", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "form.pickup_location[0].location"
    }
  }, [_c("template", {
    slot: "noOptions"
  }, [_vm._v(" No stop found.")]), _c("template", {
    slot: "noResult"
  }, [_vm._v(" stop searched not matched.")])], 2)], 1), _c("b-form-group", {
    attrs: {
      label: "Drop Location",
      "label-for": "title-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("multiselect", {
    attrs: {
      options: _vm.locationOptions,
      placeholder: "Drop Location",
      label: "title",
      "track-by": "title",
      searchable: true,
      loading: _vm.submitted
    },
    on: {
      "search-change": _vm.fetchLocations,
      select: _vm.onDropLocationSelect
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function (props) {
        return [_vm._v(" " + _vm._s(props.option.title) + " ")];
      }
    }]),
    model: {
      value: _vm.form.drop_location[0].location,
      callback: function ($$v) {
        _vm.$set(_vm.form.drop_location[0], "location", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "form.drop_location[0].location"
    }
  }, [_c("template", {
    slot: "noOptions"
  }, [_vm._v(" No stop found.")]), _c("template", {
    slot: "noResult"
  }, [_vm._v(" stop searched not matched.")])], 2)], 1), _c("b-form-group", {
    attrs: {
      label: "Route",
      "label-for": "route-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-select", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.route.$error
    },
    attrs: {
      options: _vm.routeOption,
      state: _vm.validateState("route")
    },
    on: {
      change: _vm.getBuses
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function () {
        return [_c("b-form-select-option", {
          staticClass: "text-sm",
          attrs: {
            value: null,
            disabled: ""
          }
        }, [_vm._v("-- Please select an Route --")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.$v.form.route.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.route, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.route.$model"
    }
  })], 1), _c("b-form-group", {
    attrs: {
      label: "Vehicle",
      "label-for": "bus-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-select", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.bus.$error
    },
    attrs: {
      options: _vm.buses,
      state: _vm.validateState("bus")
    },
    on: {
      change: _vm.getAvaialbleSeats
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function () {
        return [_c("b-form-select-option", {
          staticClass: "text-sm",
          attrs: {
            value: null,
            disabled: ""
          }
        }, [_vm._v("-- Please select an Vehicle --")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.$v.form.bus.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.bus, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.bus.$model"
    }
  })], 1), _c("b-form-group", {
    attrs: {
      label: "Seat",
      "label-for": "seat-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-select", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.seat.$error
    },
    attrs: {
      options: _vm.seats,
      state: _vm.validateState("seat")
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function () {
        return [_c("b-form-select-option", {
          staticClass: "text-sm",
          attrs: {
            value: null,
            disabled: ""
          }
        }, [_vm._v("-- Please select an Seat --")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.$v.form.seat.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.seat, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.seat.$model"
    }
  })], 1), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.show,
      expression: "show"
    }]
  }, [_c("b-form-group", {
    attrs: {
      label: "Return Route",
      "label-for": "returnroute-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-select", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.return_route.$error
    },
    attrs: {
      options: _vm.return_routeOption,
      state: _vm.validateState("return_route")
    },
    on: {
      change: _vm.getReturnBuses
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function () {
        return [_c("b-form-select-option", {
          staticClass: "text-sm",
          attrs: {
            value: null,
            disabled: ""
          }
        }, [_vm._v("-- Please select an Route --")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.$v.form.return_route.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.return_route, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.return_route.$model"
    }
  })], 1), _c("b-form-group", {
    attrs: {
      label: "Return Vehicle",
      "label-for": "returnbus-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-select", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.return_bus.$error
    },
    attrs: {
      options: _vm.return_buses,
      state: _vm.validateState("return_bus")
    },
    on: {
      change: _vm.getReturnAvaialbleSeats
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function () {
        return [_c("b-form-select-option", {
          staticClass: "text-sm",
          attrs: {
            value: null,
            disabled: ""
          }
        }, [_vm._v("-- Please select an Vehicle --")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.$v.form.return_bus.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.return_bus, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.return_bus.$model"
    }
  })], 1), _c("b-form-group", {
    attrs: {
      label: "Return Seat",
      "label-for": "returnseat-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-select", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.return_seat.$error
    },
    attrs: {
      options: _vm.return_seats,
      state: _vm.validateState("return_seat")
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function () {
        return [_c("b-form-select-option", {
          staticClass: "text-sm",
          attrs: {
            value: null,
            disabled: ""
          }
        }, [_vm._v("-- Please select an Seat --")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.$v.form.return_seat.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.return_seat, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.return_seat.$model"
    }
  })], 1)], 1), _c("b-form-group", {
    attrs: {
      label: "Is Return?",
      "label-for": "return-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-checkbox", {
    attrs: {
      id: "checkbox-1",
      name: "checkbox-1",
      value: "1",
      "unchecked-value": "0"
    },
    on: {
      change: function ($event) {
        return _vm.isReturn();
      }
    },
    model: {
      value: _vm.$v.form.has_return.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.has_return, "$model", $$v);
      },
      expression: "$v.form.has_return.$model"
    }
  })], 1), _c("b-form-group", {
    attrs: {
      label: "Time",
      "label-for": "time-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-input", {
    class: {
      "is-invalid": _vm.submitted || _vm.$v.form.time_for_user.$error
    },
    attrs: {
      id: "time-input",
      type: "time",
      placeholder: "Enter time",
      state: _vm.validateState("time_for_user")
    },
    model: {
      value: _vm.$v.form.time_for_user.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.time_for_user, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.time_for_user.$model"
    }
  }), _vm.submitted || !_vm.$v.form.time_for_user.required ? _c("b-form-invalid-feedback", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" Time is required ")]) : _vm._e()], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Status ",
      "label-for": "status-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "7"
    }
  }, [_c("b-form-radio-group", {
    class: {
      "is-invalid": _vm.submitted || _vm.$v.form.is_active.$error
    },
    attrs: {
      options: _vm.options,
      state: _vm.validateState("is_active"),
      name: "status"
    },
    model: {
      value: _vm.$v.form.is_active.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.is_active, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.is_active.$model"
    }
  }), _vm.submitted || !_vm.$v.form.is_active.required ? _c("b-form-invalid-feedback", [_vm._v("Please select status")]) : _vm._e()], 1), _c("b-form-group", {
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

/***/ "./src/views/customers/create.vue":
/*!****************************************!*\
  !*** ./src/views/customers/create.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_5be3c5e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=5be3c5e0&scoped=true */ "./src/views/customers/create.vue?vue&type=template&id=5be3c5e0&scoped=true");
/* harmony import */ var _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js */ "./src/views/customers/create.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_1_lang_css_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=1&lang=css&external */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=1&lang=css&external");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_5be3c5e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_5be3c5e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5be3c5e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/customers/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/customers/create.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/views/customers/create.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/customers/create.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/customers/create.vue?vue&type=template&id=5be3c5e0&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/views/customers/create.vue?vue&type=template&id=5be3c5e0&scoped=true ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_5be3c5e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=5be3c5e0&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/customers/create.vue?vue&type=template&id=5be3c5e0&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_5be3c5e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_5be3c5e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=66.js.map