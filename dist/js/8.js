(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-image-lightbox-carousel/src/App.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-image-lightbox-carousel/src/App.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_VueImageLightboxCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/VueImageLightboxCarousel */ "./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  data() {
    return {
      showLightbox: false,
      images: [{
        path: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
        caption: 'Elephant'
      }, {
        path: 'https://i-kinhdoanh.vnecdn.net/2018/06/18/1-1529296929_680x0.jpg',
        caption: 'Messi'
      }, {
        path: 'https://i-thethao.vnecdn.net/2018/05/27/775162441-MR-2031-8E033EFCEBB928DC12A2A0AA3CEC4C33-21885-1527376486_680x0.jpg',
        caption: 'Bale and Marcelo'
      }, {
        path: 'https://i-thethao.vnecdn.net/2018/05/27/Screen-Shot-2018-05-27-at-7-1527379562_680x0.png',
        caption: 'Madrid crowd'
      }, {
        path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0DG-1527379049_680x0.jpg',
        caption: 'Zidane'
      }, {
        path: 'https://i-thethao.vnecdn.net/2018/05/27/Screen-Shot-2018-05-27-at-7-1527379346_680x0.png',
        caption: 'Bale kissed the cup'
      }, {
        path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D9SR-1527378710_680x0.jpg',
        caption: 'Ronaldo showed off'
      }, {
        path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D9PD-1527378584_680x0.jpg',
        caption: 'Benzema and Varane'
      }, {
        path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E01C-1527378364_680x0.jpg',
        caption: 'Nacho'
      }, {
        path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D9DX-1527378233_680x0.jpg',
        caption: 'Ramos'
      }, {
        path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D921-1527377928_680x0.jpg',
        caption: 'Ceremony'
      }, {
        path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D8R8-1527377973_680x0.jpg',
        caption: 'Champion'
      }, {
        path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0FA-1527377507_680x0.jpg',
        caption: 'Kiss'
      }]
    };
  },
  components: {
    VueImageLightboxCarousel: _components_VueImageLightboxCarousel__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    openLightbox() {
      this.showLightbox = true;
      this.$refs.lightbox.showImage(1);
    },
    changeImage(index) {
      console.log(index);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/dist/css/swiper.css */ "./node_modules/swiper/dist/css/swiper.css");
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    showThumbs: {
      type: Boolean,
      default: true
    },
    showCaption: {
      type: Boolean,
      default: true
    },
    images: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  data() {
    return {
      activeIndex: 0,
      swiperOptionTop: {
        centeredSlides: true,
        slidesPerView: 1,
        navigation: {
          nextEl: '.vue-lightbox-right',
          prevEl: '.vue-lightbox-left'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.vue-lightbox-thumbnail-right',
          prevEl: '.vue-lightbox-thumbnail-left'
        }
      }
    };
  },
  components: {
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiper"],
    swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiperSlide"]
  },
  methods: {
    close() {
      this.$emit('close');
    },
    showImage(index = 0) {
      this.$nextTick(() => {
        this.$refs.swiperTop.swiper.slideTo(index);
        this.$refs.swiperThumbs.swiper.slideTo(index);
        this.activeIndex = index;
      });
    }
  },
  mounted() {
    document.addEventListener('keydown', e => {
      if (this.show && e.keyCode == 27) {
        this.close();
      }
    });
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
      swiperTop.on('slideChange', () => {
        this.$emit('change', swiperTop.activeIndex);
        this.activeIndex = swiperTop.activeIndex;
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-upload-multiple-image/src/App.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-upload-multiple-image/src/App.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_VueUploadMultipleImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/VueUploadMultipleImage */ "./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/vue-upload-multiple-image/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  data() {
    return {};
  },
  components: {
    VueUploadMultipleImage: _components_VueUploadMultipleImage__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log('data', formData, index, fileList);
      // Upload image api
      // axios.post('http://gostore.gostore-api.test/api/items/upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove(index, done, fileList) {
      console.log('index', index, fileList);
      var r = confirm("remove image");
      if (r == true) {
        done();
      } else {}
    },
    editImage(formData, index, fileList) {
      console.log('edit data', formData, index, fileList);
    },
    dataChange(data) {
      console.log(data);
    },
    limitExceeded(amount) {
      console.log(amount);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_popperjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-popperjs */ "./node_modules/vue-popperjs/dist/js/vue-popper.js");
/* harmony import */ var vue_popperjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_popperjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_popperjs_dist_css_vue_popper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-popperjs/dist/css/vue-popper.css */ "./node_modules/vue-popperjs/dist/css/vue-popper.css");
/* harmony import */ var vue_popperjs_dist_css_vue_popper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_popperjs_dist_css_vue_popper_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_image_lightbox_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-image-lightbox-carousel */ "./node_modules/vue-image-lightbox-carousel/src/main.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VueUploadMultipleImage',
  props: {
    dragText: {
      type: String,
      default: 'Kéo hình ảnh(nhiều)'
    },
    browseText: {
      type: String,
      default: '(hoặc) Chọn'
    },
    primaryText: {
      type: String,
      default: 'Mặc định'
    },
    markIsPrimaryText: {
      type: String,
      default: 'Đặt làm mặc định'
    },
    popupText: {
      type: String,
      default: 'Hình ảnh này sẽ được hiển thị làm mặc định'
    },
    dropText: {
      type: String,
      default: 'Thả tệp của bạn ở đây ...'
    },
    accept: {
      type: String,
      default: 'image/gif,image/jpeg,image/png,image/bmp,image/jpg'
    },
    dataImages: {
      type: Array,
      default: () => {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: true
    },
    showPrimary: {
      type: Boolean,
      default: true
    },
    maxImage: {
      type: Number,
      default: 5
    },
    idUpload: {
      type: String,
      default: 'image-upload'
    },
    idEdit: {
      type: String,
      default: 'image-edit'
    },
    showEdit: {
      type: Boolean,
      default: true
    },
    showDelete: {
      type: Boolean,
      default: true
    },
    showAdd: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentIndexImage: 0,
      images: [],
      isDragover: false,
      showLightbox: false,
      arrLightBox: []
    };
  },
  components: {
    Popper: (vue_popperjs__WEBPACK_IMPORTED_MODULE_3___default()),
    VueImageLightboxCarousel: vue_image_lightbox_carousel__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  computed: {
    imagePreview() {
      let index = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"])(this.images, {
        highlight: 1
      });
      if (index > -1) {
        return this.images[index].path;
      } else {
        return this.images.length ? this.images[0].path : '';
      }
    },
    imageDefault() {
      if (this.images[this.currentIndexImage]) {
        return this.images[this.currentIndexImage].default;
      }
    }
  },
  methods: {
    preventEvent(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    onDrop(e) {
      this.isDragover = false;
      e.stopPropagation();
      e.preventDefault();
      let files = e.dataTransfer.files;
      if (!files.length) {
        return false;
      }
      if (!this.isValidNumberOfImages(files.length)) {
        return false;
      }
      Object(lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(files, (value, index) => {
        this.createImage(value);
        if (!this.multiple) {
          return false;
        }
      });
      if (document.getElementById(this.idUpload)) {
        document.getElementById(this.idUpload).value = [];
      }
    },
    onDragover() {
      this.isDragover = true;
    },
    createImage(file) {
      if (this.disabled) return;
      let reader = new FileReader();
      let formData = new FormData();
      formData.append('file', file);
      reader.onload = e => {
        let dataURI = e.target.result;
        if (dataURI) {
          if (!this.images.length) {
            this.images.push({
              name: file.name,
              path: dataURI,
              highlight: 1,
              default: 1
            });
            this.currentIndexImage = 0;
          } else {
            this.images.push({
              name: file.name,
              path: dataURI,
              highlight: 0,
              default: 0
            });
          }
          this.$emit('upload-success', formData, this.images.length - 1, this.images);
        }
      };
      reader.readAsDataURL(file);
    },
    editImage(file) {
      if (this.disabled) return;
      let reader = new FileReader();
      let formData = new FormData();
      formData.append('file', file);
      reader.onload = e => {
        let dataURI = e.target.result;
        if (dataURI) {
          if (this.images.length && this.images[this.currentIndexImage]) {
            this.images[this.currentIndexImage].path = dataURI;
            this.images[this.currentIndexImage].name = file.name;
          }
        }
      };
      reader.readAsDataURL(file);
      this.$emit('edit-image', formData, this.currentIndexImage, this.images);
    },
    uploadFieldChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return false;
      }
      if (!this.isValidNumberOfImages(files.length)) {
        return false;
      }
      Object(lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(files, (value, index) => {
        this.createImage(value);
      });
      if (document.getElementById(this.idUpload)) {
        document.getElementById(this.idUpload).value = [];
      }
    },
    editFieldChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return false;
      }
      if (!this.isValidNumberOfImages(files.length)) {
        return false;
      }
      Object(lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(files, (value, index) => {
        this.editImage(value);
      });
      if (document.getElementById(this.idEdit)) {
        document.getElementById(this.idEdit).value = '';
      }
    },
    changeHighlight(currentIndex) {
      this.currentIndexImage = currentIndex;
      let arr = this.images;
      this.images = [];
      arr.map((item, index) => {
        if (currentIndex === index) {
          item.highlight = 1;
        } else {
          item.highlight = 0;
        }
        return item;
      });
      this.images = arr;
    },
    markIsPrimary(currentIndex) {
      this.images.map((item, index) => {
        if (currentIndex === index) {
          item.highlight = 1;
          item.default = 1;
        } else {
          item.highlight = 0;
          item.default = 0;
        }
        return item;
      });
      this.currentIndexImage = 0;
      this.images = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["orderBy"])(this.images, 'default', 'desc');
      this.$emit('mark-is-primary', currentIndex, this.images);
    },
    deleteImage(currentIndex) {
      this.$emit('before-remove', currentIndex, () => {
        if (this.images[currentIndex].default === 1) {
          this.images[0].default = 1;
        }
        this.images.splice(currentIndex, 1);
        this.currentIndexImage = 0;
        if (this.images.length) {
          this.images[0].highlight = 1;
        }
      }, this.images);
    },
    openGallery(index) {
      this.showLightbox = true;
      this.$refs.lightbox.showImage(index);
    },
    onOpenedLightBox(value) {
      if (value) {
        this.showLightbox = true;
      } else {
        this.showLightbox = false;
      }
    },
    isValidNumberOfImages(amount) {
      if (amount > this.maxImage) {
        this.$emit('limit-exceeded', amount);
        return false;
      } else {
        return true;
      }
    }
  },
  watch: {
    dataImages: {
      handler: function (newVal) {
        this.images = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(newVal);
      },
      deep: true
    }
  },
  mounted() {
    document.body.addEventListener('dragleave', event => {
      event.stopPropagation();
      event.preventDefault();
      this.isDragover = false;
    });
  },
  created() {
    this.images = [];
    this.images = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.dataImages);
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/locations/create.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/locations/create.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services */ "./src/services/index.js");
/* harmony import */ var _mapStyle_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapStyle.json */ "./src/views/admin/locations/mapStyle.json");
var _mapStyle_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mapStyle.json */ "./src/views/admin/locations/mapStyle.json", 1);
/* harmony import */ var vue_upload_multiple_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-upload-multiple-image */ "./node_modules/vue-upload-multiple-image/src/main.js");



//import Breadcrumb from "../../../components/breadcrumb";


 //uploadService


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_3__["validationMixin"]],
  name: "locationCreate",
  data() {
    return {
      breadcrumbs: {
        title: "CREATE STOP",
        b1: "Manage Routes",
        b2: "stops",
        b3: "Index",
        link: true,
        name: "stop"
      },
      button: {
        text: "Create Stop"
      },
      mapStyle: _mapStyle_json__WEBPACK_IMPORTED_MODULE_6__,
      options: [{
        text: "Active",
        value: "true"
      }, {
        text: "Inactive",
        value: "false",
        default: true
      }],
      images: [],
      form: {
        id: "",
        title: "",
        address: "",
        lat: "",
        lng: "",
        type: null,
        status: "",
        files: []
      },
      submitted: false,
      loading: false,
      markers: [],
      shape: {
        coords: [10, 10, 10, 15, 15, 15, 15, 10],
        type: "poly"
      },
      infoContent: "",
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      center: {
        lat: 0,
        lng: 0
      },
      centerError: ""
    };
  },
  validations: {
    form: {
      title: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      address: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      type: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      status: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      }
    }
  },
  components: {
    VueUploadMultipleImage: vue_upload_multiple_image__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  methods: {
    getCenter() {
      this.loading = true;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.loading = false;
        }, error => {
          this.centerError = "Error retrieving location: " + error.message;
          this.loading = false;
        });
      } else {
        this.centerError = "Geolocation is not supported by this browser.";
        this.loading = false;
      }
    },
    uploadImageSuccess(formData, index, fileList) {
      this.form.files = fileList;
      // console.log("success ", formData, fileList);
    },
    beforeRemove(index, done, fileList) {
      console.log("index", index, fileList);
      // var r = confirm("remove image");
      // if (r == true) {
      //    this.form.files.splice(index, 1);
      //   done();
      // }
      this.$swal.fire({
        title: "Are you sure you want to remove?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.isConfirmed) {
          this.form.files.splice(index, 1);
          done();
        }
      });
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    },
    resetForm() {
      this.button.text = "Create Stop";
      this.breadcrumbs.title = "CREATE STOP";
      this.form = {
        id: "",
        title: "",
        address: "",
        lat: "",
        lng: "",
        type: null,
        status: ""
      };
    },
    async getLocation() {
      try {
        const response = await _services__WEBPACK_IMPORTED_MODULE_5__["locationService"].find(this.$route.params.id);
        if (response.status) {
          this.$refs.gmapAutocomplete.$refs.input.value = response.data.address;
          this.form = response.data;
          this.breadcrumbs.title = "UPDATE STOP";
          this.button.text = "Update Stop";
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
    async loadMarkerItems() {
      const response = await _services__WEBPACK_IMPORTED_MODULE_5__["locationService"].markers();
      if (typeof response.status != 'undefined' && response.status) {
        this.markers = response.data;
      }
    },
    toggleInfo(marker, key, location, event) {
      console.log("markers ", marker, event);
      this.$refs.gmapAutocomplete.$refs.input.value = marker.address;
      this.form = {
        lat: location.lat() ? location.lat() : marker.lat,
        lng: location.lng() ? location.lng() : marker.lng,
        id: marker.id,
        title: marker.title,
        address: marker.address,
        type: marker.type,
        status: marker.status
      };
      this.button.text = "Update Stop";
      this.breadcrumbs.title = "UPDATE STOP";
      this.infoWindowPos = marker.position;
      this.infoContent = `<p>${marker.title}</p><p>${marker.type}</p>`;
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == key) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = key;
      }
    },
    validateState(name) {
      const {
        $dirty,
        $error
      } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    getAddressData: function (addressData) {
      this.form.address = addressData.formatted_address;
      this.form.lat = addressData.geometry.location.lat();
      this.form.lng = addressData.geometry.location.lng();
    },
    async createLocation() {
      try {
        this.submitted = true;
        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
        if (this.form.id != "") {
          const response = await _services__WEBPACK_IMPORTED_MODULE_5__["locationService"].update(this.form.id, this.form);
          if (response.status) {
            this.$toast.open({
              message: response.message,
              type: "success",
              position: "top-right",
              duration: 2000
              // all of other options may go here
            });
            setTimeout(() => this.$router.push({
              path: `/locations`
            }), 2000);
          }
        } else {
          const response = await _services__WEBPACK_IMPORTED_MODULE_5__["locationService"].create(this.form);
          if (response.status) {
            this.$toast.open({
              message: response.message,
              type: "success",
              position: "top-right",
              duration: 2000
              // all of other options may go here
            });
            setTimeout(() => this.$router.push({
              path: `/locations`
            }), 2000);
          }
        }
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 5000
        });
      }
    }
  },
  mounted() {
    this.loadMarkerItems();
    this.getLocation();
    this.getCenter();
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-image-lightbox-carousel/src/App.vue?vue&type=template&id=61e9b30f&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-image-lightbox-carousel/src/App.vue?vue&type=template&id=61e9b30f&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      id: "my-strictly-unique-vue-image-lightbox-carousel"
    }
  }, [_c("button", {
    on: {
      click: _vm.openLightbox
    }
  }, [_vm._v("Open Lightbox")]), _c("vue-image-lightbox-carousel", {
    ref: "lightbox",
    attrs: {
      show: _vm.showLightbox,
      images: _vm.images
    },
    on: {
      close: function ($event) {
        _vm.showLightbox = false;
      },
      change: _vm.changeImage
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=template&id=1884afde&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=template&id=1884afde&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("transition", {
    attrs: {
      name: "modal"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.show,
      expression: "show"
    }],
    staticClass: "modal-mask",
    on: {
      click: _vm.close
    }
  }, [_c("div", {
    staticClass: "modal-container",
    on: {
      click: function ($event) {
        $event.stopPropagation();
      }
    }
  }, [_c("div", {
    staticClass: "vue-lightbox-content"
  }, [_c("div", {
    staticClass: "vue-lightbox-header"
  }, [_c("span"), _c("button", {
    staticClass: "vue-lightbox-close",
    attrs: {
      type: "button",
      title: "Close (Esc)"
    },
    on: {
      click: _vm.close
    }
  }, [_c("span", [_c("svg", {
    attrs: {
      fill: "white",
      x: "0px",
      y: "0px",
      width: "100%",
      height: "100%",
      viewBox: "0 0 512 512"
    }
  }, [_c("path", {
    attrs: {
      d: "M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"
    }
  })])])])]), _c("div", {
    staticClass: "vue-lightbox-figure"
  }, [_c("swiper", {
    ref: "swiperTop",
    staticClass: "vue-lightbox-figure",
    attrs: {
      options: _vm.swiperOptionTop
    }
  }, _vm._l(_vm.images, function (image, index) {
    return _c("swiper-slide", {
      key: index
    }, [_c("img", {
      staticClass: "vue-lightbox-modal-image",
      attrs: {
        src: image.path,
        srcset: ""
      }
    }), _vm.showCaption ? _c("div", {
      staticClass: "vue-lightbox-info"
    }, [_c("h4", [_vm._v(_vm._s(image.caption))])]) : _vm._e()]);
  }), 1), _c("div", {
    staticClass: "vue-lightbox-footer"
  }, [_c("div", {
    staticClass: "vue-lightbox-footer-info"
  }), _c("div", {
    staticClass: "vue-lightbox-footer-count"
  }, [_vm._v(" " + _vm._s(_vm.activeIndex + 1) + "/" + _vm._s(_vm.images.length) + " ")])])], 1)]), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.images.length > 1 && _vm.showThumbs,
      expression: "images.length > 1 && showThumbs"
    }],
    staticClass: "vue-lightbox-thumbnail-wrapper"
  }, [_c("div", {
    staticClass: "vue-lightbox-thumbnail"
  }, [_c("button", {
    staticClass: "swiper-button-prev vue-lightbox-thumbnail-arrow vue-lightbox-thumbnail-left",
    attrs: {
      type: "button",
      title: "Previous"
    }
  }, [_c("span", [_c("svg", {
    attrs: {
      fill: "white",
      x: "0px",
      y: "0px",
      width: "100%",
      height: "100%",
      viewBox: "0 0 512 512"
    }
  }, [_c("path", {
    attrs: {
      d: "M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"
    }
  })])])]), _c("swiper", {
    ref: "swiperThumbs",
    attrs: {
      options: _vm.swiperOptionThumbs
    }
  }, _vm._l(_vm.images, function (image, index) {
    return _c("swiper-slide", {
      key: index
    }, [_c("div", {
      directives: [{
        name: "lazy",
        rawName: "v-lazy:background-image",
        value: image.path,
        expression: "image.path",
        arg: "background-image"
      }],
      staticClass: "vue-lightbox-modal-thumbnail vue-lightbox-modal-thumbnail-active",
      style: `background-image: url("${image.path}");`,
      attrs: {
        "data-src": image.path
      }
    })]);
  }), 1), _c("button", {
    staticClass: "swiper-button-next vue-lightbox-thumbnail-arrow vue-lightbox-thumbnail-right",
    attrs: {
      type: "button",
      title: "Next"
    }
  }, [_c("span", [_c("svg", {
    attrs: {
      fill: "white",
      x: "0px",
      y: "0px",
      width: "100%",
      height: "100%",
      viewBox: "0 0 512 512"
    }
  }, [_c("path", {
    attrs: {
      d: "M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"
    }
  })])])])], 1)]), _c("button", {
    staticClass: "swiper-button-prev vue-lightbox-arrow vue-lightbox-left",
    attrs: {
      type: "button",
      title: "Previous"
    }
  }, [_c("span", [_c("svg", {
    attrs: {
      fill: "white",
      x: "0px",
      y: "0px",
      width: "100%",
      height: "100%",
      viewBox: "0 0 512 512"
    }
  }, [_c("path", {
    attrs: {
      d: "M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"
    }
  })])])]), _c("button", {
    staticClass: "swiper-button-next vue-lightbox-arrow vue-lightbox-right",
    attrs: {
      type: "button",
      title: "Next"
    }
  }, [_c("span", [_c("svg", {
    attrs: {
      fill: "white",
      x: "0px",
      y: "0px",
      width: "100%",
      height: "100%",
      viewBox: "0 0 512 512",
      "xml:space": "preserve"
    }
  }, [_c("path", {
    attrs: {
      d: "M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"
    }
  })])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-upload-multiple-image/src/App.vue?vue&type=template&id=4d01061a":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-upload-multiple-image/src/App.vue?vue&type=template&id=4d01061a ***!
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
  return _c("div", {
    staticStyle: {
      display: "flex",
      "justify-content": "center"
    },
    attrs: {
      id: "my-strictly-unique-vue-upload-multiple-image"
    }
  }, [_c("vue-upload-multiple-image", {
    on: {
      "upload-success": _vm.uploadImageSuccess,
      "before-remove": _vm.beforeRemove,
      "edit-image": _vm.editImage,
      "data-change": _vm.dataChange,
      "limit-exceeded": _vm.limitExceeded
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=template&id=10e59822&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=template&id=10e59822&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticStyle: {
      outline: "none"
    },
    on: {
      drag: _vm.preventEvent,
      dragstart: _vm.preventEvent,
      dragend: _vm.preventEvent,
      dragover: _vm.preventEvent,
      dragenter: _vm.preventEvent,
      dragleave: _vm.preventEvent,
      drop: _vm.preventEvent
    }
  }, [!_vm.images.length ? _c("div", {
    staticClass: "image-container position-relative text-center"
  }, [_vm.isDragover ? _c("div", {
    staticClass: "drag-upload-cover position-absolute",
    on: {
      drop: _vm.onDrop
    }
  }, [_c("div", {
    staticClass: "centered full-width text-center text-primary"
  }, [_c("svg", {
    staticClass: "icon-drag-drop",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }
  }, [_c("path", {
    attrs: {
      d: "M444.5 15C407.7 15 378 44.8 378 81.5s29.8 66.5 66.5 66.5S511 118.2 511 81.5 481.2 15 444.5 15zm29.4 72.4h-23.5l.1 25.9c0 3.2-2.6 5.8-5.8 5.9-3.2 0-5.8-2.6-5.8-5.8l-.1-26h-23.6c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8h23.5l-.1-25.9c0-3.2 2.6-5.8 5.8-5.9 3.2 0 5.8 2.6 5.8 5.8l.1 26h23.6c3.3 0 5.8 2.6 5.8 5.8s-2.6 5.8-5.8 5.8zM199.3 191.3c21.5 0 38.9 17.6 38.9 39.3s-17.4 39.3-38.9 39.3-38.9-17.6-38.9-39.3c0-21.7 17.5-39.3 38.9-39.3zm185.4 201.3H86.3c-6.5 0-11.9-5.3-11.9-11.9v-32.4c0-2.5.7-4.8 2.1-6.9l41.3-58.4c3.7-5.2 10.8-6.5 16.1-3.1l56.4 36.8c4.5 3 10.3 2.5 14.4-1L313 220.1c5.1-4.5 13.1-3.8 17.2 1.7l61.5 79.7c1.6 2 2.5 4.6 2.5 7.2v74.4c0 5.2-4.3 9.5-9.5 9.5zm7.9 117.6h-58.8v-12h58.8v12zm-78.4 0h-58.8v-12h58.8v12zm-78.5 0h-58.8v-12h58.8v12zm-78.4 0H98.4v-12h58.8v12h.1zm-78.5 0H57.7c-14.3 0-27.9-5.4-38.3-15.3l8.3-8.7c8.2 7.8 18.8 12 30.1 12h21.1l-.1 12zm333.6-.1l-.3-12c17.8-.4 33.4-11.5 39.8-28.2l11.2 4.3c-8.1 21.3-28 35.4-50.7 35.9zM6.8 477c-3.2-7.1-4.7-14.7-4.7-22.5v-38.2h12v38.2c0 6.1 1.3 12.1 3.7 17.6l-11 4.9zm459.9-24.1h-12v-58.8h12v58.8zM14.1 396.7h-12v-58.8h12v58.8zm452.6-22.3h-12v-58.8h12v58.8zM14.1 318.3h-12v-58.8h12v58.8zM466.7 296h-12v-58.8h12V296zM14.1 239.8h-12V181h12v58.8zm452.6-22.2h-12v-58.8h12v58.8zM14.1 161.4h-12v-58.8h12v58.8zm2.4-76.1L5.3 81.2C13 59.9 33.4 45.5 56.1 45.5h.2v12h-.2c-17.7 0-33.6 11.2-39.6 27.8zm353.6-27.8h-58.8v-12h58.8v12zm-78.5 0h-58.8v-12h58.8v12zm-78.4 0h-58.8v-12h58.8v12zm-78.5 0H75.9v-12h58.8v12z"
    }
  })]), _c("h4", {
    staticClass: "drop-text-here"
  }, [_c("b", [_vm._v(_vm._s(_vm.dropText))])])])]) : _c("div", {
    staticClass: "image-center position-absolute display-flex flex-column justify-content-center align-items-center",
    on: {
      dragover: function ($event) {
        $event.preventDefault();
        return _vm.onDragover.apply(null, arguments);
      }
    }
  }, [_c("div", [_c("svg", {
    staticClass: "image-icon-drag",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }
  }, [_c("path", {
    attrs: {
      d: "M383.6 229l-.5 1.5.7 1.7c-.2-1.1-.2-2.2-.2-3.2zm-119.7-5.4l-.3 1.4.6 1.3c-.2-.8-.3-1.8-.3-2.7zm62.4 3.8l-.2 1 .5 1.1-.3-2.1z"
    }
  }), _c("path", {
    attrs: {
      d: "M483 326.2l-43.5-100.5c-3.6-8.4-10.3-14.9-18.7-18.4-8.5-3.6-17.8-3.5-26.1.1L391 209c-3.3 1.4-6.1 3.6-8.4 6.3-3.6-8.2-10.2-14.6-18.6-18-8.5-3.4-17.7-3.3-26.1.3-6.1 2.7-10.9 6.8-13.9 12-3.7-8-10.2-14.3-18.4-17.6-8.5-3.4-17.8-3.3-26.1.3l-3.7 1.6c-6.3 2.7-11.2 7.1-14.3 12.4l-20.3-46.9c-4.2-9.8-10.7-16.8-18.7-20.2-8.1-3.5-17.2-3.2-26.5.8l-3.7 1.6c-8 3.5-13.3 9.3-15.5 16.9-2.1 7.3-1 16.2 3.1 25.6l83.4 188.2-64.7-39.8c-11.2-6.8-25.7-4.7-34.4 5.1-11.3 12.5-10.3 31.9 2 43.3l55.8 51.5 50.8 43.4c17.6 16.7 38.2 28.1 59.6 32.9 7.7 1.7 15.5 2.5 23.2 2.5 14.9 0 29.7-3.1 44.2-9.4l27.9-12.1c31.2-13.5 52.8-37.1 62.6-68.4 9.2-29.2 6.6-63-7.3-95.1zM383.6 229c0 1 .1 2.1.2 3.1l-.7-1.7.5-1.4zM281.7 466.6c-.2-.2-.5-.5-.7-.6l-50.4-43.1-55.6-51.5c-7.3-6.7-7.9-18.2-1.2-25.6 4.7-5.3 12.5-6.4 18.5-2.6l65.6 40.2c4.7 2.9 10.4 2.4 14.5-1.3 4.1-3.6 5.3-9.2 3.2-14.2l-83.7-189c-3.2-7.4-3.9-13.4-2.1-18.1 1.7-4.3 5.2-6.5 7.9-7.7l3.7-1.6c12.3-5.3 22.8-.6 28.6 12.9L310.2 350c1.4 3.2 5.1 4.6 8.3 3.3 3.2-1.4 4.7-5.1 3.3-8.3l-48.7-112.5c-2.2-5.2-3-10.8-2-15.4 1.1-5.4 4.5-9.3 9.9-11.7l3.7-1.6c5.3-2.3 11.1-2.3 16.4-.2 5.3 2.2 9.5 6.3 11.8 11.6l43.9 101.5c.7 1.6 1.9 2.7 3.5 3.4 1.6.6 3.3.6 4.8-.1 3.2-1.4 4.7-5.1 3.3-8.3l-32.8-75.9c-8.2-18.9 4.8-25.6 7.5-26.8 10.8-4.7 23.5.4 28.2 11.3l28.9 66.7c1.4 3.2 5.1 4.7 8.3 3.3 3.2-1.4 4.7-5.1 3.3-8.3l-19.4-44.8c-1.3-3-4.9-13.2 3.8-16.9l3.7-1.6c5.2-2.3 11.1-2.3 16.4 0 5.3 2.3 9.6 6.4 11.9 11.8L471.7 331c12.7 29.3 15.1 59.9 6.8 86.3-8.7 27.6-27.9 48.5-55.6 60.5L395 489.9c-38.9 16.9-80.1 8.4-113.3-23.3zm44.6-239.2l.3 2.1-.5-1.1.2-1zm-62.4-3.8l.3 2.7-.6-1.3.3-1.4zM31 217c3.2 0 6-2.6 6-5.7v-40c0-3.2-2.8-5.7-6-5.7s-6 2.6-6 5.7v40c0 3.2 2.8 5.7 6 5.7zm0-66.3c3.2 0 6-2.6 6-5.7v-40c0-3.2-2.8-5.7-6-5.7s-6 2.6-6 5.7v40c0 3.1 2.8 5.7 6 5.7zM148 296h-40c-3.2 0-5.7 2.3-5.7 5.5s2.6 5.5 5.7 5.5h40c3.2 0 5.7-2.3 5.7-5.5s-2.6-5.5-5.7-5.5zM37 237.6c0-3.2-2.8-5.7-6-5.7s-6 2.6-6 5.7v40c0 3.2 2.8 5.7 6 5.7s6-2.6 6-5.7v-40zM31 84.4c3.2 0 6-2.6 6-5.7v-40c0-3.2-2.8-5.7-6-5.7s-6 2.6-6 5.7v40c0 3.1 2.8 5.7 6 5.7zM81.6 296H49.1c-1.7 0-3.4-.6-5-1.3-2.9-1.3-6.3-.1-7.5 2.8-1.3 2.9 0 6.3 2.9 7.5 3 1.3 6.3 2 9.6 2h32.5c3.2 0 5.7-2.3 5.7-5.5s-2.5-5.5-5.7-5.5zm60.6-281c3.2 0 5.7-2.8 5.7-6s-2.6-6-5.7-6h-40c-3.2 0-5.7 2.8-5.7 6s2.6 6 5.7 6h40z"
    }
  }), _c("path", {
    attrs: {
      d: "M323 122.4c-3.2 0-6 2.6-6 5.7v39.2c0 3.2 2.8 5.7 6 5.7s6-2.6 6-5.7v-39.2c0-3.1-2.8-5.7-6-5.7zm6-60.6c0-3.2-2.8-5.7-6-5.7s-6 2.6-6 5.7v40c0 3.2 2.8 5.7 6 5.7s6-2.6 6-5.7v-40zM301.2 15h3.6c6.8 0 12.2 5.6 12.2 12.4v8.1c0 3.2 2.8 5.7 6 5.7s6-2.6 6-5.7v-8.1C329 14.3 317.9 3 304.8 3h-3.6c-3.2 0-5.7 2.8-5.7 6s2.5 6 5.7 6zm-66.3 0h40c3.2 0 5.7-2.8 5.7-6s-2.6-6-5.7-6h-40c-3.2 0-5.7 2.8-5.7 6s2.5 6 5.7 6zm-60.6 292h40c3.2 0 5.7-2.3 5.7-5.5s-2.6-5.5-5.7-5.5h-40c-3.2 0-5.7 2.3-5.7 5.5s2.5 5.5 5.7 5.5zm-5.8-292h40c3.2 0 5.7-2.8 5.7-6s-2.6-6-5.7-6h-40c-3.2 0-5.7 2.8-5.7 6s2.6 6 5.7 6zM37.1 19.8c1.4 0 2.7-.6 3.8-1.5 2.3-2 5.2-3.2 8.2-3.2h26.8c3.2 0 5.7-2.8 5.7-6s-2.6-6-5.7-6H49.1c-5.9 0-11.5 2.5-15.9 6.5-2.3 2.1-2.5 5.9-.4 8.2 1.1 1.2 2.7 2 4.3 2z"
    }
  })])]), _c("div", {
    staticClass: "text-center"
  }, [_c("label", {
    staticClass: "drag-text"
  }, [_vm._v(_vm._s(_vm.dragText))]), _c("br"), _c("a", {
    staticClass: "browse-text"
  }, [_vm._v(_vm._s(_vm.browseText))])]), _c("div", {
    staticClass: "image-input position-absolute full-width full-height"
  }, [_c("label", {
    staticClass: "full-width full-height cursor-pointer",
    attrs: {
      for: _vm.idUpload
    }
  })])])]) : _c("div", {
    staticClass: "image-container position-relative text-center image-list"
  }, [_vm.isDragover ? _c("div", {
    staticClass: "drag-upload-cover position-absolute",
    on: {
      drop: _vm.onDrop
    }
  }, [_c("div", {
    staticClass: "centered full-width text-center text-primary"
  }, [_c("svg", {
    staticClass: "icon-drag-drop",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }
  }, [_c("path", {
    attrs: {
      d: "M444.5 15C407.7 15 378 44.8 378 81.5s29.8 66.5 66.5 66.5S511 118.2 511 81.5 481.2 15 444.5 15zm29.4 72.4h-23.5l.1 25.9c0 3.2-2.6 5.8-5.8 5.9-3.2 0-5.8-2.6-5.8-5.8l-.1-26h-23.6c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8h23.5l-.1-25.9c0-3.2 2.6-5.8 5.8-5.9 3.2 0 5.8 2.6 5.8 5.8l.1 26h23.6c3.3 0 5.8 2.6 5.8 5.8s-2.6 5.8-5.8 5.8zM199.3 191.3c21.5 0 38.9 17.6 38.9 39.3s-17.4 39.3-38.9 39.3-38.9-17.6-38.9-39.3c0-21.7 17.5-39.3 38.9-39.3zm185.4 201.3H86.3c-6.5 0-11.9-5.3-11.9-11.9v-32.4c0-2.5.7-4.8 2.1-6.9l41.3-58.4c3.7-5.2 10.8-6.5 16.1-3.1l56.4 36.8c4.5 3 10.3 2.5 14.4-1L313 220.1c5.1-4.5 13.1-3.8 17.2 1.7l61.5 79.7c1.6 2 2.5 4.6 2.5 7.2v74.4c0 5.2-4.3 9.5-9.5 9.5zm7.9 117.6h-58.8v-12h58.8v12zm-78.4 0h-58.8v-12h58.8v12zm-78.5 0h-58.8v-12h58.8v12zm-78.4 0H98.4v-12h58.8v12h.1zm-78.5 0H57.7c-14.3 0-27.9-5.4-38.3-15.3l8.3-8.7c8.2 7.8 18.8 12 30.1 12h21.1l-.1 12zm333.6-.1l-.3-12c17.8-.4 33.4-11.5 39.8-28.2l11.2 4.3c-8.1 21.3-28 35.4-50.7 35.9zM6.8 477c-3.2-7.1-4.7-14.7-4.7-22.5v-38.2h12v38.2c0 6.1 1.3 12.1 3.7 17.6l-11 4.9zm459.9-24.1h-12v-58.8h12v58.8zM14.1 396.7h-12v-58.8h12v58.8zm452.6-22.3h-12v-58.8h12v58.8zM14.1 318.3h-12v-58.8h12v58.8zM466.7 296h-12v-58.8h12V296zM14.1 239.8h-12V181h12v58.8zm452.6-22.2h-12v-58.8h12v58.8zM14.1 161.4h-12v-58.8h12v58.8zm2.4-76.1L5.3 81.2C13 59.9 33.4 45.5 56.1 45.5h.2v12h-.2c-17.7 0-33.6 11.2-39.6 27.8zm353.6-27.8h-58.8v-12h58.8v12zm-78.5 0h-58.8v-12h58.8v12zm-78.4 0h-58.8v-12h58.8v12zm-78.5 0H75.9v-12h58.8v12z"
    }
  })]), _c("h4", {
    staticClass: "drop-text-here"
  }, [_c("b", [_vm._v(_vm._s(_vm.dropText))])])])]) : _c("div", {
    on: {
      dragover: function ($event) {
        $event.preventDefault();
        return _vm.onDragover.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "preview-image full-width position-relative cursor-pointer",
    on: {
      click: function ($event) {
        return _vm.openGallery(_vm.currentIndexImage);
      }
    }
  }, [_c("div", {
    staticClass: "image-overlay position-relative full-width full-height"
  }), _c("div", {
    staticClass: "image-overlay-details full-width"
  }, [_c("svg", {
    staticClass: "icon-overlay",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }
  }, [_c("path", {
    attrs: {
      d: "M283.9 186.4h-64.6l-.4-71.1c-.1-8.8-7.2-15.9-16-15.9h-.1c-8.8.1-16 7.3-15.9 16.1l.4 70.9h-64.4c-8.8 0-16 7.2-16 16s7.2 16 16 16h64.6l.4 71.1c.1 8.8 7.2 15.9 16 15.9h.1c8.8-.1 16-7.3 15.9-16.1l-.4-70.9h64.4c8.8 0 16-7.2 16-16s-7.1-16-16-16z"
    }
  }), _c("path", {
    attrs: {
      d: "M511.3 465.3L371.2 325.2c-1-1-2.6-1-3.6 0l-11.5 11.5c31.6-35.9 50.8-82.9 50.8-134.3C406.9 90.3 315.6-1 203.4-1 91.3-1 0 90.3 0 202.4s91.3 203.4 203.4 203.4c51.4 0 98.5-19.2 134.3-50.8l-11.5 11.5c-1 1-1 2.6 0 3.6l140.1 140.1c1 1 2.6 1 3.6 0l41.4-41.4c.9-.9.9-2.5 0-3.5zm-307.9-92.5C109.5 372.8 33 296.4 33 202.4S109.5 32.1 203.4 32.1s170.4 76.4 170.4 170.4-76.4 170.3-170.4 170.3z"
    }
  })])]), _c("div", {
    staticClass: "show-image centered"
  }, [_c("img", {
    staticClass: "show-img img-responsive",
    attrs: {
      src: _vm.imagePreview
    }
  })])]), _c("div", {
    staticClass: "image-bottom display-flex position-absolute full-width align-items-center justify-content-between",
    class: !_vm.showPrimary && "justify-content-end"
  }, [_vm.showPrimary ? _c("div", {
    staticClass: "image-bottom-left display-flex align-items-center"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.imageDefault,
      expression: "imageDefault"
    }],
    staticClass: "display-flex align-items-center"
  }, [_c("span", {
    staticClass: "image-primary display-flex align-items-center"
  }, [_c("svg", {
    staticClass: "image-icon-primary",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }
  }, [_c("circle", {
    attrs: {
      fill: "#10BC83",
      cx: "256",
      cy: "256",
      r: "256"
    }
  }), _c("path", {
    attrs: {
      fill: "#FFF",
      d: "M216.7 350.9h-.1c-5.1 0-9.9-2.1-13.4-5.7l-74.2-76c-7.4-7.5-7.2-19.5.4-26.8 7.5-7.4 19.5-7.2 26.8.4L217 305l139.7-138.5c7.5-7.4 19.5-7.4 26.8.1s7.4 19.5-.1 26.8l-153.2 152c-3.7 3.5-8.5 5.5-13.5 5.5z"
    }
  })]), _vm._v(" " + _vm._s(_vm.primaryText) + " ")]), _c("popper", {
    attrs: {
      trigger: "click",
      options: {
        placement: "top"
      }
    }
  }, [_c("div", {
    staticClass: "popper popper-custom"
  }, [_vm._v(" " + _vm._s(_vm.popupText) + " ")]), _c("i", {
    staticClass: "cursor-pointer display-flex align-items-center",
    attrs: {
      slot: "reference"
    },
    slot: "reference"
  }, [_c("svg", {
    staticClass: "image-icon-info",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }
  }, [_c("path", {
    attrs: {
      d: "M256 32c30.3 0 59.6 5.9 87.2 17.6 26.7 11.3 50.6 27.4 71.2 48s36.7 44.5 48 71.2c11.7 27.6 17.6 56.9 17.6 87.2s-5.9 59.6-17.6 87.2c-11.3 26.7-27.4 50.6-48 71.2s-44.5 36.7-71.2 48C315.6 474.1 286.3 480 256 480s-59.6-5.9-87.2-17.6c-26.7-11.3-50.6-27.4-71.2-48s-36.7-44.5-48-71.2C37.9 315.6 32 286.3 32 256s5.9-59.6 17.6-87.2c11.3-26.7 27.4-50.6 48-71.2s44.5-36.7 71.2-48C196.4 37.9 225.7 32 256 32m0-32C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0z"
    }
  }), _c("path", {
    attrs: {
      d: "M304.2 352H296c-4.4 0-8-3.6-8-8v-94.8c0-15.3-11.5-28.1-26.7-29.8-2.5-.3-4.8-.5-6.7-.5-23.7 0-44.6 11.9-57 30.1l-.1.1v-.1c-1 2-1.7 5.3.7 6.5.6.3 1.2.5 1.8.5h16c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-8.2c-8.7 0-15.8 7.1-15.8 15.8v.3c0 8.7 7.1 15.8 15.8 15.8h96.4c8.7 0 15.8-7.1 15.8-15.8v-.3c0-8.7-7.1-15.8-15.8-15.8zM256 128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"
    }
  })])])])], 1), _c("a", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.imageDefault,
      expression: "!imageDefault"
    }],
    staticClass: "text-small mark-text-primary cursor-pointer",
    on: {
      click: function ($event) {
        $event.preventDefault();
        return _vm.markIsPrimary(_vm.currentIndexImage);
      }
    }
  }, [_vm._v(_vm._s(_vm.markIsPrimaryText))])]) : _vm._e(), _c("div", {
    staticClass: "display-flex"
  }, [_vm.showEdit ? _c("label", {
    staticClass: "image-edit display-flex cursor-pointer",
    attrs: {
      for: _vm.idEdit
    }
  }, [_c("svg", {
    staticClass: "image-icon-edit",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "512",
      viewBox: "0 0 512 512"
    }
  }, [_c("path", {
    attrs: {
      d: "M469.56 42.433C420.927-6.199 382.331-.168 378.087.68l-4.8.96L36.895 338.001 0 512l173.985-36.894 336.431-336.399.941-4.86c.826-4.257 6.65-42.984-41.797-91.414zM41.944 470.057L64.3 364.617c12.448 3.347 31.968 11.255 50.51 29.794 18.96 18.963 27.84 39.986 31.875 53.436l-104.741 22.21zm132.504-41.134c-6.167-16.597-17.199-37.794-36.775-57.371C119 352.88 99.435 342.57 83.739 336.879l155.156-155.15 97.066-97.051c11.069 2.074 34.864 8.95 57.253 31.338 22.708 22.708 30.95 48.358 33.734 60.428l-96.685 96.663-155.815 155.816zm278.41-278.383c-6.167-16.6-17.196-37.8-36.781-57.384-18.669-18.667-38.228-28.977-53.92-34.668l26.118-26.113c8.785.484 30.373 4.87 58.423 32.918l.001.002c28.085 28.074 32.467 49.675 32.946 58.463l-26.787 26.782z"
    }
  })])]) : _vm._e(), _vm.showDelete ? _c("a", {
    staticClass: "image-delete display-flex cursor-pointer",
    on: {
      click: function ($event) {
        $event.preventDefault();
        return _vm.deleteImage(_vm.currentIndexImage);
      }
    }
  }, [_c("svg", {
    staticClass: "image-icon-delete",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "512",
      viewBox: "0 0 512 512"
    }
  }, [_c("path", {
    attrs: {
      d: "M448 64h-96V0H159.9l.066 64H32v32h32v416h384V96h32V64h-32zM192 32h128v32H192V32zm224 448H96V96h320v384zM192 160h32v256h-32V160zm96 0h32v256h-32V160z"
    }
  })])]) : _vm._e()])])])]), _vm.images.length && _vm.multiple ? _c("div", {
    staticClass: "image-list-container display-flex flex-wrap"
  }, [_vm._l(_vm.images, function (image, index) {
    return _c("div", {
      key: index,
      staticClass: "image-list-item position-relative cursor-pointer",
      class: image.highlight && "image-highlight",
      on: {
        click: function ($event) {
          return _vm.changeHighlight(index);
        }
      }
    }, [_c("div", {
      staticClass: "centered"
    }, [_c("img", {
      staticClass: "show-img img-responsive",
      attrs: {
        src: image.path
      }
    })])]);
  }), _vm.images.length < _vm.maxImage && _vm.showAdd ? _c("div", {
    staticClass: "image-list-item position-relative cursor-pointer display-flex justify-content-center align-items-center"
  }, [_c("svg", {
    staticClass: "icon add-image-svg",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "512",
      viewBox: "0 0 512 512"
    }
  }, [_c("path", {
    attrs: {
      d: "M511.5 227.5h-227V.5h-57v227H-.5v57h228v228h57v-228h227z"
    }
  })]), _c("div", {
    staticClass: "input-add-image position-absolute full-width full-height"
  }, [_c("label", {
    staticClass: "display-block full-width full-height cursor-pointer",
    attrs: {
      for: _vm.idUpload
    }
  })])]) : _vm._e()], 2) : _vm._e(), _c("div", [_c("input", {
    staticClass: "display-none",
    attrs: {
      id: _vm.idUpload,
      name: "images",
      multiple: _vm.multiple,
      accept: _vm.accept,
      type: "file",
      disabled: _vm.disabled
    },
    on: {
      change: _vm.uploadFieldChange
    }
  }), _c("input", {
    staticClass: "display-none",
    attrs: {
      id: _vm.idEdit,
      name: "image",
      accept: _vm.accept,
      type: "file",
      disabled: _vm.disabled
    },
    on: {
      change: _vm.editFieldChange
    }
  })]), _c("vue-image-lightbox-carousel", {
    ref: "lightbox",
    attrs: {
      show: _vm.showLightbox,
      images: _vm.images,
      showCaption: false
    },
    on: {
      close: function ($event) {
        _vm.showLightbox = false;
      },
      change: _vm.changeHighlight
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/locations/create.vue?vue&type=template&id=2429e0b2&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/locations/create.vue?vue&type=template&id=2429e0b2&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("GmapMap", {
    staticStyle: {
      height: "650px",
      position: "relative"
    },
    attrs: {
      options: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false,
        styles: this.mapStyle
      },
      center: _vm.center,
      zoom: 10
    }
  }, [_vm._l(_vm.markers, function (m, index) {
    return _c("GmapMarker", {
      key: index,
      attrs: {
        position: m.position,
        clickable: true,
        draggable: true,
        animation: 2,
        icon: {
          url: __webpack_require__(/*! ../../../assets/images/bus-marker-logo.svg */ "./src/assets/images/bus-marker-logo.svg")
        }
      },
      on: {
        click: function ($event) {
          return _vm.toggleInfo(m, index, $event.latLng, $event);
        }
      }
    });
  }), _c("gmap-info-window", {
    attrs: {
      options: _vm.infoOptions,
      position: _vm.infoWindowPos,
      opened: _vm.infoWinOpen
    },
    on: {
      closeclick: function ($event) {
        _vm.infoWinOpen = false;
      }
    }
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.infoContent)
    }
  })])], 2)], 1), _c("div", {
    staticClass: "col-lg-3 offset-lg-0",
    staticStyle: {
      position: "absolute"
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-title text-center"
  }, [_vm._v(_vm._s(_vm.breadcrumbs.title))]), _c("b-form", {
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.createLocation.apply(null, arguments);
      }
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: _vm.form.id,
      expression: "form.id",
      modifiers: {
        trim: true
      }
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
        _vm.$set(_vm.form, "id", $event.target.value.trim());
      },
      blur: function ($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _c("b-form-group", {
    attrs: {
      label: "Name",
      "label-for": "title-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "9"
    }
  }, [_c("b-form-input", {
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.title.$error
    },
    attrs: {
      id: "title-input",
      type: "text",
      placeholder: "Enter Name ",
      state: _vm.validateState("title")
    },
    model: {
      value: _vm.$v.form.title.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.title, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.title.$model"
    }
  }), _vm.submitted && !_vm.$v.form.title.required ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" title is required ")]) : _vm._e()], 1), _c("b-form-group", {
    attrs: {
      label: "Address",
      "label-for": "address-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "9"
    }
  }, [_c("gmap-autocomplete", {
    ref: "gmapAutocomplete",
    staticClass: "form-control",
    class: {
      "is-invalid": _vm.submitted && _vm.$v.form.address.$error
    },
    attrs: {
      placeholder: "Start typing address",
      state: _vm.validateState("address")
    },
    on: {
      keyup: function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.useAddressData.apply(null, arguments);
      },
      place_changed: _vm.getAddressData
    }
  }), _vm.submitted && !_vm.$v.form.address.required ? _c("b-form-invalid-feedback", [_vm._v("Address is a required field.")]) : _vm._e()], 1), _c("b-form-group", {
    attrs: {
      label: "Type",
      "label-for": "type-input",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "9"
    }
  }, [_c("b-form-select", {
    staticClass: "mb-3",
    attrs: {
      state: _vm.validateState("type")
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function () {
        return [_c("b-form-select-option", {
          attrs: {
            value: null,
            disabled: ""
          }
        }, [_vm._v("-- select an type --")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.$v.form.type.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.type, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.type.$model"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: "DA"
    }
  }, [_vm._v("Departure / Arrival location")]), _c("b-form-select-option", {
    attrs: {
      value: "PD"
    }
  }, [_vm._v("Pick-up / Drop off location")])], 1), _vm.submitted && !_vm.$v.form.type.required ? _c("b-form-invalid-feedback", [_vm._v("Type is a required field.")]) : _vm._e()], 1), _c("b-form-group", {
    staticClass: "mt-3",
    attrs: {
      label: "Status ",
      "label-for": "status-input",
      "invalid-feedback": "status is required",
      "label-cols-sm": "4",
      "label-cols-lg": "3",
      "content-cols-sm": "",
      "content-cols-lg": "9"
    }
  }, [_c("b-form-radio-group", {
    attrs: {
      options: _vm.options,
      state: _vm.validateState("status")
    },
    model: {
      value: _vm.$v.form.status.$model,
      callback: function ($$v) {
        _vm.$set(_vm.$v.form.status, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.status.$model"
    }
  })], 1), _c("br"), _c("b-form-group", {
    attrs: {
      label: "Pictures",
      "label-for": "type-input",
      "label-cols-sm": "3",
      "label-cols-lg": "0",
      "content-cols-sm": "",
      "content-cols-lg": "12"
    }
  }, [_c("vue-upload-multiple-image", {
    attrs: {
      "data-images": _vm.form.files,
      browseText: "Select file",
      dragText: "Drop files here",
      accept: "image/jpeg,image/png,image/jpg",
      popupText: "",
      primaryText: "",
      markIsPrimaryText: ""
    },
    on: {
      "upload-success": _vm.uploadImageSuccess,
      "before-remove": _vm.beforeRemove,
      "edit-image": _vm.editImage
    }
  })], 1), _c("br"), _c("b-form-group", {
    staticClass: "col-md-12"
  }, [_c("b-button", {
    staticClass: "btn btn-primary btn-md text-center",
    attrs: {
      type: "submit",
      name: "location-submit"
    }
  }, [_vm._v(_vm._s(_vm.button.text))]), _c("b-button", {
    staticClass: "btn btn-default btn-md text-center ml-2",
    attrs: {
      type: "button",
      name: "location-reset"
    },
    on: {
      click: _vm.resetForm
    }
  }, [_vm._v("Reset")])], 1)], 1)], 1)])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/swiper/dist/css/swiper.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-3-1!./node_modules/postcss-loader/src??ref--7-oneOf-3-2!./node_modules/swiper/dist/css/swiper.css ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/**\n * Swiper 4.5.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2019 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: September 13, 2019\n */\n.swiper-container {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-container-no-flexbox .swiper-slide {\n  float: left;\n}\n.swiper-container-vertical > .swiper-wrapper {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n}\n.swiper-container-android .swiper-slide,\n.swiper-wrapper {\n  -webkit-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-container-multirow > .swiper-wrapper {\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.swiper-container-free-mode > .swiper-wrapper {\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-slide {\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-container-autoheight,\n.swiper-container-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-container-autoheight .swiper-wrapper {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -webkit-transition-property: height, -webkit-transform;\n  transition-property: height, -webkit-transform;\n  transition-property: transform, height;\n  transition-property: transform, height, -webkit-transform;\n}\n/* 3D Effects */\n.swiper-container-3d {\n  -webkit-perspective: 1200px;\n  perspective: 1200px;\n}\n.swiper-container-3d .swiper-wrapper,\n.swiper-container-3d .swiper-slide,\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom,\n.swiper-container-3d .swiper-cube-shadow {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-container-3d .swiper-slide-shadow-left {\n  background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-right {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-top {\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n/* IE10 Windows Phone 8 Fixes */\n.swiper-container-wp8-horizontal,\n.swiper-container-wp8-horizontal > .swiper-wrapper {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n.swiper-container-wp8-vertical,\n.swiper-container-wp8-vertical > .swiper-wrapper {\n  -ms-touch-action: pan-x;\n  touch-action: pan-x;\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: 50%;\n  width: 27px;\n  height: 44px;\n  margin-top: -22px;\n  z-index: 10;\n  cursor: pointer;\n  background-size: 27px 44px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev,\n.swiper-container-rtl .swiper-button-next {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  left: 10px;\n  right: auto;\n}\n.swiper-button-next,\n.swiper-container-rtl .swiper-button-prev {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  right: 10px;\n  left: auto;\n}\n.swiper-button-prev.swiper-button-white,\n.swiper-container-rtl .swiper-button-next.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-next.swiper-button-white,\n.swiper-container-rtl .swiper-button-prev.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-prev.swiper-button-black,\n.swiper-container-rtl .swiper-button-next.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-next.swiper-button-black,\n.swiper-container-rtl .swiper-button-prev.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-lock {\n  display: none;\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  -webkit-transition: 300ms opacity;\n  transition: 300ms opacity;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  -webkit-transform: scale(0.66);\n  -ms-transform: scale(0.66);\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  -webkit-transform: scale(0.66);\n  -ms-transform: scale(0.66);\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: #000;\n  opacity: 0.2;\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #007aff;\n}\n.swiper-container-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translate3d(0px, -50%, 0);\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 6px 0;\n  display: block;\n}\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  -webkit-transition: 200ms top, 200ms -webkit-transform;\n  transition: 200ms top, 200ms -webkit-transform;\n  transition: 200ms transform, 200ms top;\n  transition: 200ms transform, 200ms top, 200ms -webkit-transform;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 4px;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transition: 200ms left, 200ms -webkit-transform;\n  transition: 200ms left, 200ms -webkit-transform;\n  transition: 200ms transform, 200ms left;\n  transition: 200ms transform, 200ms left, 200ms -webkit-transform;\n}\n.swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transition: 200ms right, 200ms -webkit-transform;\n  transition: 200ms right, 200ms -webkit-transform;\n  transition: 200ms transform, 200ms right;\n  transition: 200ms transform, 200ms right, 200ms -webkit-transform;\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: #007aff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: scale(0);\n  -ms-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform-origin: left top;\n  -ms-transform-origin: left top;\n  transform-origin: left top;\n}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  -webkit-transform-origin: right top;\n  -ms-transform-origin: right top;\n  transform-origin: right top;\n}\n.swiper-container-horizontal > .swiper-pagination-progressbar,\n.swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-container-vertical > .swiper-pagination-progressbar,\n.swiper-container-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-white .swiper-pagination-bullet-active {\n  background: #ffffff;\n}\n.swiper-pagination-progressbar.swiper-pagination-white {\n  background: rgba(255, 255, 255, 0.25);\n}\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill {\n  background: #ffffff;\n}\n.swiper-pagination-black .swiper-pagination-bullet-active {\n  background: #000000;\n}\n.swiper-pagination-progressbar.swiper-pagination-black {\n  background: rgba(0, 0, 0, 0.25);\n}\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill {\n  background: #000000;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n/* Scrollbar */\n.swiper-scrollbar {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n.swiper-container-horizontal > .swiper-scrollbar {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n.swiper-container-vertical > .swiper-scrollbar {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: contain;\n  object-fit: contain;\n}\n.swiper-slide-zoomed {\n  cursor: move;\n}\n/* Preloader */\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  -webkit-transform-origin: 50%;\n  -ms-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-animation: swiper-preloader-spin 1s steps(12, end) infinite;\n  animation: swiper-preloader-spin 1s steps(12, end) infinite;\n}\n.swiper-lazy-preloader:after {\n  display: block;\n  content: '';\n  width: 100%;\n  height: 100%;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-position: 50%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.swiper-lazy-preloader-white:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n@-webkit-keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n/* a11y */\n.swiper-container .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide {\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.swiper-container-fade .swiper-slide {\n  pointer-events: none;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n}\n.swiper-container-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-fade .swiper-slide-active,\n.swiper-container-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube {\n  overflow: visible;\n}\n.swiper-container-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  -webkit-transform-origin: 0 0;\n  -ms-transform-origin: 0 0;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-container-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-cube.swiper-container-rtl .swiper-slide {\n  -webkit-transform-origin: 100% 0;\n  -ms-transform-origin: 100% 0;\n  transform-origin: 100% 0;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-next,\n.swiper-container-cube .swiper-slide-prev,\n.swiper-container-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-container-cube .swiper-slide-shadow-top,\n.swiper-container-cube .swiper-slide-shadow-bottom,\n.swiper-container-cube .swiper-slide-shadow-left,\n.swiper-container-cube .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-container-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.6;\n  -webkit-filter: blur(50px);\n  filter: blur(50px);\n  z-index: 0;\n}\n.swiper-container-flip {\n  overflow: visible;\n}\n.swiper-container-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-container-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-flip .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-flip .swiper-slide-shadow-top,\n.swiper-container-flip .swiper-slide-shadow-bottom,\n.swiper-container-flip .swiper-slide-shadow-left,\n.swiper-container-flip .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-container-coverflow .swiper-wrapper {\n  /* Windows 8 IE 10 fix */\n  -ms-perspective: 1200px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-popperjs/dist/css/vue-popper.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-3-1!./node_modules/postcss-loader/src??ref--7-oneOf-3-2!./node_modules/vue-popperjs/dist/css/vue-popper.css ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.popper {\n  width: auto;\n  background-color: #fafafa;\n  color: #212121;\n  text-align: center;\n  padding: 2px;\n  display: inline-block;\n  border-radius: 3px;\n  position: absolute;\n  font-size: 14px;\n  font-weight: normal;\n  border: 1px #ebebeb solid;\n  z-index: 200000;\n  box-shadow: rgb(58, 58, 58) 0 0 6px 0;\n}\n\n.popper .popper__arrow {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  position: absolute;\n  margin: 5px;\n}\n\n.popper[x-placement^=\"top\"] {\n  margin-bottom: 5px;\n}\n\n.popper[x-placement^=\"top\"] .popper__arrow {\n  border-width: 5px 5px 0 5px;\n  border-color: #fafafa transparent transparent transparent;\n  bottom: -5px;\n  left: calc(50% - 5px);\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.popper[x-placement^=\"bottom\"] {\n  margin-top: 5px;\n}\n\n.popper[x-placement^=\"bottom\"] .popper__arrow {\n  border-width: 0 5px 5px 5px;\n  border-color: transparent transparent #fafafa transparent;\n  top: -5px;\n  left: calc(50% - 5px);\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.popper[x-placement^=\"right\"] {\n  margin-left: 5px;\n}\n\n.popper[x-placement^=\"right\"] .popper__arrow {\n  border-width: 5px 5px 5px 0;\n  border-color: transparent #fafafa transparent transparent;\n  left: -5px;\n  top: calc(50% - 5px);\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.popper[x-placement^=\"left\"] {\n  margin-right: 5px;\n}\n\n.popper[x-placement^=\"left\"] .popper__arrow {\n  border-width: 5px 0 5px 5px;\n  border-color: transparent transparent transparent #fafafa;\n  right: -5px;\n  top: calc(50% - 5px);\n  margin-left: 0;\n  margin-right: 0;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=style&index=0&id=1884afde&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=style&index=0&id=1884afde&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n*[data-v-1884afde] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.modal-mask[data-v-1884afde] {\n  color: #fff;\n  background-color: rgba(0, 0, 0, .8);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  padding: 10px;\n  z-index: 9998;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  box-align: center;\n  box-pack: center;\n  -webkit-transition: opacity .3s ease;\n  transition: opacity .3s ease;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.modal-container[data-v-1884afde] {\n}\n\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n.modal-enter[data-v-1884afde] {\n  opacity: 0;\n}\n.modal-leave-active[data-v-1884afde] {\n  opacity: 0;\n}\n.modal-enter .modal-container[data-v-1884afde],\n.modal-leave-active .modal-container[data-v-1884afde] {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n.swiper-container[data-v-1884afde] {\n  background-color: #000;\n}\n.swiper-slide[data-v-1884afde] {\n  background-size: cover;\n  background-position: center;\n}\n.swiper-button-prev.swiper-button-disabled[data-v-1884afde], .swiper-button-next.swiper-button-disabled[data-v-1884afde] {\n  opacity: 0;\n}\n\n/*\n * Lightbox\n */\n*[data-v-1884afde] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.vue-lightbox-content[data-v-1884afde] {\n  margin-bottom: 60px;\n  max-width: calc(100vw - 30px);\n  position: relative;\n}\n.vue-lightbox-header[data-v-1884afde] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 40px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.vue-lightbox-close[data-v-1884afde] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  top: 0;\n  vertical-align: bottom;\n  height: 40px;\n  margin-right: -10px;\n  padding: 10px;\n  width: 40px;\n}\n.vue-lightbox-figure[data-v-1884afde] {\n  margin: 0;\n  display: block;\n  position: relative;\n}\n.vue-lightbox-figure .swiper-slide[data-v-1884afde] {\n  margin: auto;\n}\nimg.vue-lightbox-modal-image[data-v-1884afde] {\n  max-height: calc(100vh - 140px);\n  cursor: pointer;\n  display: block;\n  height: auto;\n  margin: 0 auto;\n  max-width: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vue-lightbox-info[data-v-1884afde] {\n  visibility: initial;\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  background-color: rgba(0,0,0,.7);\n  height: 40px;\n  width: 100%;\n  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n  text-align: center;\n}\n.vue-lightbox-info h4[data-v-1884afde] {\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.vue-lightbox-footer[data-v-1884afde] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  cursor: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 0;\n  line-height: 1.3;\n  padding: 5px 0;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.vue-lightbox-footer-info[data-v-1884afde] {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0;\n}\n.vue-lightbox-footer-count[data-v-1884afde] {\n  color: hsla(0,0%,100%,.75);\n  font-size: .85em;\n  padding-left: 1em;\n}\n.vue-lightbox-thumbnail-wrapper[data-v-1884afde] {\n  bottom: 10px;\n  height: 50px;\n  left: 0;\n  margin: 0 auto;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: auto;\n}\n.vue-lightbox-thumbnail[data-v-1884afde] {\n  bottom: 10px;\n  height: 50px;\n  padding: 0 50px;\n  text-align: center;\n  white-space: nowrap;\n  display: inline-block;\n  position: relative;\n  width: 300px;\n}\n.vue-lightbox-thumbnail .swiper-container[data-v-1884afde] {\n  background: transparent;\n}\n.vue-lightbox-thumbnail-arrow[data-v-1884afde] {\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  outline: none;\n  padding: 10px;\n  position: absolute;\n  top: 50%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 50px;\n  margin-top: -23px;\n  width: 30px;\n}\n.vue-lightbox-thumbnail-left[data-v-1884afde] {\n  left: 10px;\n}\n.vue-lightbox-thumbnail-right[data-v-1884afde] {\n  right: 10px;\n}\n.vue-lightbox-modal-thumbnail[data-v-1884afde], .vue-lightbox-modal-thumbnail-active[data-v-1884afde] {\n  background-position: 50%;\n  background-size: cover;\n  border-radius: 2px;\n  cursor: pointer;\n  display: inline-block;\n  height: 50px;\n  margin: 2px;\n  overflow: hidden;\n  width: 50px;\n  float: left;\n}\n.vue-lightbox-modal-thumbnail[data-v-1884afde] {\n  -webkit-box-shadow: inset 0 0 0 1px hsla(0,0%,100%,.2);\n          box-shadow: inset 0 0 0 1px hsla(0,0%,100%,.2);\n}\n.swiper-slide-active .vue-lightbox-modal-thumbnail[data-v-1884afde] {\n  -webkit-box-shadow: inset 0 0 0 2px #fff;\n          box-shadow: inset 0 0 0 2px #fff;\n}\n.vue-lightbox-arrow[data-v-1884afde] {\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  outline: none;\n  padding: 10px;\n  position: absolute;\n  top: 50%;\n  height: 120px;\n  margin-top: -60px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 40px;\n}\n.vue-lightbox-left[data-v-1884afde] {\n  left: 10px;\n}\n.vue-lightbox-right[data-v-1884afde] {\n  right: 10px;\n}\n@media (min-width: 1200px) {\n.vue-lightbox-content[data-v-1884afde] {\n    max-width: 1024px;\n}\n}\n@media (min-width: 768px) {\n.vue-lightbox-arrow[data-v-1884afde] {\n    width: 70px;\n}\n}\n@media (min-width: 500px) {\n.vue-lightbox-thumbnail-arrow[data-v-1884afde] {\n    width: 40px;\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=0&id=10e59822&lang=css&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=0&id=10e59822&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.text-small[data-v-10e59822] {\n  font-size: 11px;\n}\n.position-relative[data-v-10e59822] {\n  position: relative;\n}\n.position-absolute[data-v-10e59822] {\n  position: absolute;\n}\n.text-center[data-v-10e59822] {\n  text-align: center;\n}\n.text-primary[data-v-10e59822] {\n  color: #2fa3e6;\n}\n.display-flex[data-v-10e59822] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flex-column[data-v-10e59822] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.flex-wrap[data-v-10e59822] {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.justify-content-center[data-v-10e59822] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.justify-content-between[data-v-10e59822] {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.justify-content-end[data-v-10e59822] {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.align-items-center[data-v-10e59822] {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.full-width[data-v-10e59822] {\n  width: 100%;\n}\n.full-height[data-v-10e59822] {\n  height: 100%;\n}\n.cursor-pointer[data-v-10e59822] {\n  cursor: pointer;\n}\n.centered[data-v-10e59822] {\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  position: absolute;\n  display: block;\n}\n.image-container[data-v-10e59822] {\n  width: 190px;\n  height: 180px;\n  border: 1px dashed #d6d6d6;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.image-center[data-v-10e59822] {\n  width: 100%;\n  height: 100%;\n}\n.image-icon-drag[data-v-10e59822] {\n  fill: #c9c8c8;\n  height: 50px;\n  width: 50px;\n}\n.drag-text[data-v-10e59822] {\n  padding-top: 5px;\n  color: #777;\n  font-weight: 400;\n  line-height: 1.5;\n}\n.browse-text[data-v-10e59822] {\n  font-size: 86%;\n  color: #206ec5;\n  text-decoration: none;\n}\n.image-input[data-v-10e59822] {\n  overflow: hidden;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  bottom: 0;\n}\n.image-input label[data-v-10e59822] {\n  display: block;\n}\n.drag-upload-cover[data-v-10e59822] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #fcfeff;\n  opacity: 0.9;\n  z-index: 1;\n  margin: 5px;\n  border: 2px dashed #268ddd;\n}\n.drag-upload-cover[data-v-10e59822] {\n  font-weight: 400;\n  font-size: 20px;\n}\n.icon-drag-drop[data-v-10e59822] {\n  height: 50px;\n  width: 50px;\n  fill: #2fa3e6;\n}\n.drop-text-here[data-v-10e59822] {\n  margin: 0;\n  line-height: 1.5;\n}\n.display-none[data-v-10e59822] {\n  display: none;\n}\n\n/* list images*/\n.image-list[data-v-10e59822] {\n  border: 1px solid #d6d6d6;\n}\n.preview-image[data-v-10e59822] {\n  height: 140px;\n  padding: 5px;\n  border-radius: 15px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.image-overlay[data-v-10e59822] {\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 10;\n  border-radius: 5px;\n  opacity: 0;\n  -webkit-transition: all 0.3s ease-in-out 0s;\n  transition: all 0.3s ease-in-out 0s;\n}\n.image-overlay-details[data-v-10e59822] {\n  position: absolute;\n  z-index: 11;\n  opacity: 0;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  top: 50%;\n}\n.icon-overlay[data-v-10e59822] {\n  width: 40px;\n  height: 40px;\n  fill: #fff;\n}\n.preview-image:hover .image-overlay[data-v-10e59822],\n.preview-image:hover .image-overlay-details[data-v-10e59822] {\n  opacity: 1;\n}\n.img-responsive[data-v-10e59822] {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.show-img[data-v-10e59822] {\n  max-height: 100px;\n  max-width: 140px;\n  display: block;\n  vertical-align: middle;\n}\n/*image bottom*/\n.image-bottom[data-v-10e59822] {\n  bottom: 0;\n  left: 0;\n  height: 40px;\n  padding: 5px 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.image-primary[data-v-10e59822] {\n  border-radius: 4px;\n  background-color: #e3edf7;\n  padding: 3px 7px;\n  font-size: 11px;\n  margin-right: 5px;\n}\n.image-icon-primary[data-v-10e59822] {\n  width: 10px;\n  height: 10px;\n  margin-right: 2px;\n}\n.image-icon-delete[data-v-10e59822] {\n  height: 14px;\n  width: 14px;\n  fill: #222;\n}\n.image-edit[data-v-10e59822] {\n  margin-right: 10px;\n}\n.image-icon-edit[data-v-10e59822] {\n  height: 14px;\n  width: 14px;\n  fill: #222;\n}\n.image-list-container[data-v-10e59822] {\n  max-width: 190px;\n  min-height: 50px;\n  margin-top: 10px;\n}\n.image-list-container .image-list-item[data-v-10e59822] {\n  height: 32px;\n  width: 32px;\n  border-radius: 4px;\n  border: 1px solid #d6d6d6;\n}\n.image-list-container .image-list-item[data-v-10e59822]:not(:last-child) {\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n.image-list-container .image-list-item .show-img[data-v-10e59822] {\n  max-width: 25px;\n  max-height: 17px;\n}\n.image-list-container .image-highlight[data-v-10e59822] {\n  border: 1px solid #2fa3e7;\n}\n.add-image-svg[data-v-10e59822] {\n  width: 12px;\n  height: 12px;\n  fill: #222;\n}\n.input-add-image[data-v-10e59822] {\n  overflow: hidden;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 11;\n}\n.input-add-image label[data-v-10e59822] {\n  display: block;\n}\n.image-icon-info[data-v-10e59822] {\n  width: 14px;\n  height: 14px;\n  fill: #222;\n}\n.mark-text-primary[data-v-10e59822] {\n  color: #034694;\n}\n.popper-custom[data-v-10e59822] {\n  background: #000;\n  padding: 10px;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: white;\n  text-align: left;\n  font-size: 12px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=1&id=10e59822&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=1&id=10e59822&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.popper-custom .popper__arrow {\n  border-color: #000 transparent transparent transparent !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/locations/create.vue?vue&type=style&index=0&id=2429e0b2&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/locations/create.vue?vue&type=style&index=0&id=2429e0b2&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.mt-6[data-v-2429e0b2] {\r\n  margin-top: 5rem !important;\n}\n#my-strictly-unique-vue-upload-multiple-image[data-v-2429e0b2] {\r\n  font-family: \"Avenir\", Helvetica, Arial, sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  text-align: center;\r\n  color: #2c3e50;\r\n  margin-top: 60px;\n}\nh1[data-v-2429e0b2],\r\nh2[data-v-2429e0b2] {\r\n  font-weight: normal;\n}\nul[data-v-2429e0b2] {\r\n  list-style-type: none;\r\n  padding: 0;\n}\nli[data-v-2429e0b2] {\r\n  display: inline-block;\r\n  margin: 0 10px;\n}\na[data-v-2429e0b2] {\r\n  color: #42b983;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/swiper/dist/css/swiper.css":
/*!*************************************************!*\
  !*** ./node_modules/swiper/dist/css/swiper.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--7-oneOf-3-1!../../../postcss-loader/src??ref--7-oneOf-3-2!./swiper.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/swiper/dist/css/swiper.css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("a7fd9252", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/swiper/dist/js/swiper.js":
/*!***********************************************!*\
  !*** ./node_modules/swiper/dist/js/swiper.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Swiper 4.5.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 13, 2019
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  /**
   * SSR Window 1.0.1
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2018, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: July 18, 2018
   */
  var doc = (typeof document === 'undefined') ? {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: '',
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {},
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        },
      };
    },
    location: { hash: '' },
  } : document; // eslint-disable-line

  var win = (typeof window === 'undefined') ? {
    document: doc,
    navigator: {
      userAgent: '',
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        },
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
  } : window; // eslint-disable-line

  /**
   * Dom7 2.1.3
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * http://framework7.io/docs/dom.html
   *
   * Copyright 2019, Vladimir Kharlampidi
   * The iDangero.us
   * http://www.idangero.us/
   *
   * Licensed under MIT
   *
   * Released on: February 11, 2019
   */

  var Dom7 = function Dom7(arr) {
    var self = this;
    // Create array-like object
    for (var i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    // Return collection with methods
    return this;
  };

  function $(selector, context) {
    var arr = [];
    var i = 0;
    if (selector && !context) {
      if (selector instanceof Dom7) {
        return selector;
      }
    }
    if (selector) {
        // String
      if (typeof selector === 'string') {
        var els;
        var tempParent;
        var html = selector.trim();
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          var toCreate = 'div';
          if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
          if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
          if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
          if (html.indexOf('<option') === 0) { toCreate = 'select'; }
          tempParent = doc.createElement(toCreate);
          tempParent.innerHTML = html;
          for (i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
            // Pure ID selector
            els = [doc.getElementById(selector.trim().split('#')[1])];
          } else {
            // Other selectors
            els = (context || doc).querySelectorAll(selector.trim());
          }
          for (i = 0; i < els.length; i += 1) {
            if (els[i]) { arr.push(els[i]); }
          }
        }
      } else if (selector.nodeType || selector === win || selector === doc) {
        // Node/element
        arr.push(selector);
      } else if (selector.length > 0 && selector[0].nodeType) {
        // Array of elements or instance of Dom
        for (i = 0; i < selector.length; i += 1) {
          arr.push(selector[i]);
        }
      }
    }
    return new Dom7(arr);
  }

  $.fn = Dom7.prototype;
  $.Class = Dom7;
  $.Dom7 = Dom7;

  function unique(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); }
    }
    return uniqueArray;
  }

  // Classes and attributes
  function addClass(className) {
    if (typeof className === 'undefined') {
      return this;
    }
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.add(classes[i]); }
      }
    }
    return this;
  }
  function removeClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.remove(classes[i]); }
      }
    }
    return this;
  }
  function hasClass(className) {
    if (!this[0]) { return false; }
    return this[0].classList.contains(className);
  }
  function toggleClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.toggle(classes[i]); }
      }
    }
    return this;
  }
  function attr(attrs, value) {
    var arguments$1 = arguments;

    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) { return this[0].getAttribute(attrs); }
      return undefined;
    }

    // Set attrs
    for (var i = 0; i < this.length; i += 1) {
      if (arguments$1.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        // eslint-disable-next-line
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  // eslint-disable-next-line
  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }
    return this;
  }
  function data(key, value) {
    var el;
    if (typeof value === 'undefined') {
      el = this[0];
      // Get value
      if (el) {
        if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
          return el.dom7ElementDataStorage[key];
        }

        var dataKey = el.getAttribute(("data-" + key));
        if (dataKey) {
          return dataKey;
        }
        return undefined;
      }
      return undefined;
    }

    // Set value
    for (var i = 0; i < this.length; i += 1) {
      el = this[i];
      if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
      el.dom7ElementDataStorage[key] = value;
    }
    return this;
  }
  // Transforms
  // eslint-disable-next-line
  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransform = transform;
      elStyle.transform = transform;
    }
    return this;
  }
  function transition(duration) {
    if (typeof duration !== 'string') {
      duration = duration + "ms"; // eslint-disable-line
    }
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransitionDuration = duration;
      elStyle.transitionDuration = duration;
    }
    return this;
  }
  // Events
  function on() {
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    function handleLiveEvent(e) {
      var target = e.target;
      if (!target) { return; }
      var eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($(target).is(targetSelector)) { listener.apply(target, eventData); }
      else {
        var parents = $(target).parents(); // eslint-disable-line
        for (var k = 0; k < parents.length; k += 1) {
          if ($(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); }
        }
      }
    }
    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    var events = eventType.split(' ');
    var j;
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners) { el.dom7Listeners = {}; }
          if (!el.dom7Listeners[event]) { el.dom7Listeners[event] = []; }
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent,
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var event$1 = events[j];
          if (!el.dom7LiveListeners) { el.dom7LiveListeners = {}; }
          if (!el.dom7LiveListeners[event$1]) { el.dom7LiveListeners[event$1] = []; }
          el.dom7LiveListeners[event$1].push({
            listener: listener,
            proxyListener: handleLiveEvent,
          });
          el.addEventListener(event$1, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off() {
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    var events = eventType.split(' ');
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = (void 0);
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }
        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var events = args[0].split(' ');
    var eventData = args[1];
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var evt = (void 0);
        try {
          evt = new win.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true,
          });
        } catch (e) {
          evt = doc.createEvent('Event');
          evt.initEvent(event, true, true);
          evt.detail = eventData;
        }
        // eslint-disable-next-line
        el.dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    var events = ['webkitTransitionEnd', 'transitionend'];
    var dom = this;
    var i;
    function fireCallBack(e) {
      /* jshint validthis:true */
      if (e.target !== this) { return; }
      callback.call(this, e);
      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }
    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = doc.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === win ? win.scrollY : el.scrollTop;
      var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
      return {
        top: (box.top + scrollTop) - clientTop,
        left: (box.left + scrollLeft) - clientLeft,
      };
    }

    return null;
  }
  function styles() {
    if (this[0]) { return win.getComputedStyle(this[0], null); }
    return {};
  }
  function css(props, value) {
    var i;
    if (arguments.length === 1) {
      if (typeof props === 'string') {
        if (this[0]) { return win.getComputedStyle(this[0], null).getPropertyValue(props); }
      } else {
        for (i = 0; i < this.length; i += 1) {
          // eslint-disable-next-line
          for (var prop in props) {
            this[i].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === 'string') {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  // Iterate over the collection passing elements to `callback`
  function each(callback) {
    // Don't bother continuing without a callback
    if (!callback) { return this; }
    // Iterate over the current collection
    for (var i = 0; i < this.length; i += 1) {
      // If the callback returns false
      if (callback.call(this[i], i, this[i]) === false) {
        // End the loop early
        return this;
      }
    }
    // Return `this` to allow chained DOM operations
    return this;
  }
  // eslint-disable-next-line
  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : undefined;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }
    return this;
  }
  // eslint-disable-next-line
  function text(text) {
    if (typeof text === 'undefined') {
      if (this[0]) {
        return this[0].textContent.trim();
      }
      return null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }
    return this;
  }
  function is(selector) {
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === 'undefined') { return false; }
    if (typeof selector === 'string') {
      if (el.matches) { return el.matches(selector); }
      else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); }
      else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }

      compareWith = $(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    } else if (selector === doc) { return el === doc; }
    else if (selector === win) { return el === win; }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    }
    return false;
  }
  function index() {
    var child = this[0];
    var i;
    if (child) {
      i = 0;
      // eslint-disable-next-line
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) { i += 1; }
      }
      return i;
    }
    return undefined;
  }
  // eslint-disable-next-line
  function eq(index) {
    if (typeof index === 'undefined') { return this; }
    var length = this.length;
    var returnIndex;
    if (index > length - 1) {
      return new Dom7([]);
    }
    if (index < 0) {
      returnIndex = length + index;
      if (returnIndex < 0) { return new Dom7([]); }
      return new Dom7([this[returnIndex]]);
    }
    return new Dom7([this[index]]);
  }
  function append() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var newChild;

    for (var k = 0; k < args.length; k += 1) {
      newChild = args[k];
      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = doc.createElement('div');
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }

    return this;
  }
  function prepend(newChild) {
    var i;
    var j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = doc.createElement('div');
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return new Dom7([this[0].nextElementSibling]);
        }
        return new Dom7([]);
      }

      if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.nextElementSibling) {
      var next = el.nextElementSibling; // eslint-disable-line
      if (selector) {
        if ($(next).is(selector)) { nextEls.push(next); }
      } else { nextEls.push(next); }
      el = next;
    }
    return new Dom7(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];
      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return new Dom7([el.previousElementSibling]);
        }
        return new Dom7([]);
      }

      if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.previousElementSibling) {
      var prev = el.previousElementSibling; // eslint-disable-line
      if (selector) {
        if ($(prev).is(selector)) { prevEls.push(prev); }
      } else { prevEls.push(prev); }
      el = prev;
    }
    return new Dom7(prevEls);
  }
  function parent(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) { parents.push(this[i].parentNode); }
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }
    return $(unique(parents));
  }
  function parents(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var parent = this[i].parentNode; // eslint-disable-line
      while (parent) {
        if (selector) {
          if ($(parent).is(selector)) { parents.push(parent); }
        } else {
          parents.push(parent);
        }
        parent = parent.parentNode;
      }
    }
    return $(unique(parents));
  }
  function closest(selector) {
    var closest = this; // eslint-disable-line
    if (typeof selector === 'undefined') {
      return new Dom7([]);
    }
    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }
    return closest;
  }
  function find(selector) {
    var foundElements = [];
    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);
      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return new Dom7(foundElements);
  }
  function children(selector) {
    var children = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].childNodes;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector) {
          if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); }
        } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }
    return new Dom7(unique(children));
  }
  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) { this[i].parentNode.removeChild(this[i]); }
    }
    return this;
  }
  function add() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var dom = this;
    var i;
    var j;
    for (i = 0; i < args.length; i += 1) {
      var toAdd = $(args[i]);
      for (j = 0; j < toAdd.length; j += 1) {
        dom[dom.length] = toAdd[j];
        dom.length += 1;
      }
    }
    return dom;
  }

  var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    data: data,
    transform: transform,
    transition: transition,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    remove: remove,
    add: add,
    styles: styles,
  };

  Object.keys(Methods).forEach(function (methodName) {
    $.fn[methodName] = $.fn[methodName] || Methods[methodName];
  });

  var Utils = {
    deleteProps: function deleteProps(obj) {
      var object = obj;
      Object.keys(object).forEach(function (key) {
        try {
          object[key] = null;
        } catch (e) {
          // no getter for object
        }
        try {
          delete object[key];
        } catch (e) {
          // something got wrong
        }
      });
    },
    nextTick: function nextTick(callback, delay) {
      if ( delay === void 0 ) delay = 0;

      return setTimeout(callback, delay);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(el, axis) {
      if ( axis === void 0 ) axis = 'x';

      var matrix;
      var curTransform;
      var transformMatrix;

      var curStyle = win.getComputedStyle(el, null);

      if (win.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
        }
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[4]); }
      }
      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[5]); }
      }
      return curTransform || 0;
    },
    parseUrlQuery: function parseUrlQuery(url) {
      var query = {};
      var urlToParse = url || win.location.href;
      var i;
      var params;
      var param;
      var length;
      if (typeof urlToParse === 'string' && urlToParse.length) {
        urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
        params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
        length = params.length;

        for (i = 0; i < length; i += 1) {
          param = params[i].replace(/#\S+/g, '').split('=');
          query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
        }
      }
      return query;
    },
    isObject: function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    },
    extend: function extend() {
      var args = [], len$1 = arguments.length;
      while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];

      var to = Object(args[0]);
      for (var i = 1; i < args.length; i += 1) {
        var nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null) {
          var keysArray = Object.keys(Object(nextSource));
          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                to[nextKey] = {};
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
      return to;
    },
  };

  var Support = (function Support() {
    var testDiv = doc.createElement('div');
    return {
      touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
        return !!((win.navigator.maxTouchPoints > 0) || ('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
      }()),

      pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent || ('maxTouchPoints' in win.navigator && win.navigator.maxTouchPoints > 0)),
      prefixedPointerEvents: !!win.navigator.msPointerEnabled,

      transition: (function checkTransition() {
        var style = testDiv.style;
        return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
      }()),
      transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
        var style = testDiv.style;
        return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
      }()),

      flexbox: (function checkFlexbox() {
        var style = testDiv.style;
        var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
        for (var i = 0; i < styles.length; i += 1) {
          if (styles[i] in style) { return true; }
        }
        return false;
      }()),

      observer: (function checkObserver() {
        return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
      }()),

      passiveListener: (function checkPassiveListener() {
        var supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line
            get: function get() {
              supportsPassive = true;
            },
          });
          win.addEventListener('testPassiveListener', null, opts);
        } catch (e) {
          // No support
        }
        return supportsPassive;
      }()),

      gestures: (function checkGestures() {
        return 'ongesturestart' in win;
      }()),
    };
  }());

  var Browser = (function Browser() {
    function isSafari() {
      var ua = win.navigator.userAgent.toLowerCase();
      return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
    }
    return {
      isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g),
      isEdge: !!win.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
    };
  }());

  var SwiperClass = function SwiperClass(params) {
    if ( params === void 0 ) params = {};

    var self = this;
    self.params = params;

    // Events
    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  };

  var staticAccessors = { components: { configurable: true } };

  SwiperClass.prototype.on = function on (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
      self.eventsListeners[event][method](handler);
    });
    return self;
  };

  SwiperClass.prototype.once = function once (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    function onceHandler() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

      handler.apply(self, args);
      self.off(events, onceHandler);
      if (onceHandler.f7proxy) {
        delete onceHandler.f7proxy;
      }
    }
    onceHandler.f7proxy = handler;
    return self.on(events, onceHandler, priority);
  };

  SwiperClass.prototype.off = function off (events, handler) {
    var self = this;
    if (!self.eventsListeners) { return self; }
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.emit = function emit () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

    var self = this;
    if (!self.eventsListeners) { return self; }
    var events;
    var data;
    var context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsListeners && self.eventsListeners[event]) {
        var handlers = [];
        self.eventsListeners[event].forEach(function (eventHandler) {
          handlers.push(eventHandler);
        });
        handlers.forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.useModulesParams = function useModulesParams (instanceParams) {
    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      // Extend params
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  };

  SwiperClass.prototype.useModules = function useModules (modulesParams) {
      if ( modulesParams === void 0 ) modulesParams = {};

    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {};
      // Extend instance methods and props
      if (module.instance) {
        Object.keys(module.instance).forEach(function (modulePropName) {
          var moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === 'function') {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      // Add event listeners
      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }

      // Module create callback
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  };

  staticAccessors.components.set = function (components) {
    var Class = this;
    if (!Class.use) { return; }
    Class.use(components);
  };

  SwiperClass.installModule = function installModule (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (!Class.prototype.modules) { Class.prototype.modules = {}; }
    var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
    Class.prototype.modules[name] = module;
    // Prototype
    if (module.proto) {
      Object.keys(module.proto).forEach(function (key) {
        Class.prototype[key] = module.proto[key];
      });
    }
    // Class
    if (module.static) {
      Object.keys(module.static).forEach(function (key) {
        Class[key] = module.static[key];
      });
    }
    // Callback
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  };

  SwiperClass.use = function use (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (Array.isArray(module)) {
      module.forEach(function (m) { return Class.installModule(m); });
      return Class;
    }
    return Class.installModule.apply(Class, [ module ].concat( params ));
  };

  Object.defineProperties( SwiperClass, staticAccessors );

  function updateSize () {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined') {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined') {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
      return;
    }

    // Subtract paddings
    width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
    height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

    Utils.extend(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height,
    });
  }

  function updateSlides () {
    var swiper = this;
    var params = swiper.params;

    var $wrapperEl = swiper.$wrapperEl;
    var swiperSize = swiper.size;
    var rtl = swiper.rtlTranslate;
    var wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];

    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }

    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }

    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.snapGrid.length;

    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;
    if (typeof swiperSize === 'undefined') {
      return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
    }

    swiper.virtualSize = -spaceBetween;

    // reset margins
    if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); }
    else { slides.css({ marginRight: '', marginBottom: '' }); }

    var slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
      }
      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
      }
    }

    // Calc slides
    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);
      if (params.slidesPerColumn > 1) {
        // Set slides order
        var newSlideOrderIndex = (void 0);
        var column = (void 0);
        var row = (void 0);
        if (
          (params.slidesPerColumnFill === 'column')
          || (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1)
        ) {
          if (params.slidesPerColumnFill === 'column') {
            column = Math.floor(i / slidesPerColumn);
            row = i - (column * slidesPerColumn);
            if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
              row += 1;
              if (row >= slidesPerColumn) {
                row = 0;
                column += 1;
              }
            }
          } else {
            var groupIndex = Math.floor(i / params.slidesPerGroup);
            row = Math.floor(i / params.slidesPerView) - groupIndex * params.slidesPerColumn;
            column = i - row * params.slidesPerView - groupIndex * params.slidesPerView;
          }
          newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
          slide
            .css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              order: newSlideOrderIndex,
            });
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - (row * slidesPerRow);
        }
        slide
          .css(
            ("margin-" + (swiper.isHorizontal() ? 'top' : 'left')),
            (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))
          )
          .attr('data-swiper-column', column)
          .attr('data-swiper-row', row);
      }
      if (slide.css('display') === 'none') { continue; } // eslint-disable-line

      if (params.slidesPerView === 'auto') {
        var slideStyles = win.getComputedStyle(slide[0], null);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = 'none';
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = 'none';
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal()
            ? slide.outerWidth(true)
            : slide.outerHeight(true);
        } else {
          // eslint-disable-next-line
          if (swiper.isHorizontal()) {
            var width = parseFloat(slideStyles.getPropertyValue('width'));
            var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
            var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
            var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
            var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
            var boxSizing = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing && boxSizing === 'border-box' && !Browser.isIE) {
              slideSize = width + marginLeft + marginRight;
            } else {
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
            }
          } else {
            var height = parseFloat(slideStyles.getPropertyValue('height'));
            var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
            var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
            var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
            var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
            var boxSizing$1 = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing$1 && boxSizing$1 === 'border-box' && !Browser.isIE) {
              slideSize = height + marginTop + marginBottom;
            } else {
              slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
            }
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }
      } else {
        slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }

        if (slides[i]) {
          if (swiper.isHorizontal()) {
            slides[i].style.width = slideSize + "px";
          } else {
            slides[i].style.height = slideSize + "px";
          }
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);


      if (params.centeredSlides) {
        slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }

      swiper.virtualSize += slideSize + spaceBetween;

      prevSlideSize = slideSize;

      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;

    if (
      rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") });
    }
    if (!Support.flexbox || params.setWrapperSize) {
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
    }

    if (params.slidesPerColumn > 1) {
      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      if (params.centeredSlides) {
        newSlidesGrid = [];
        for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
          var slidesGridItem = snapGrid[i$1];
          if (params.roundLengths) { slidesGridItem = Math.floor(slidesGridItem); }
          if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(slidesGridItem); }
        }
        snapGrid = newSlidesGrid;
      }
    }

    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
      newSlidesGrid = [];
      for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
        var slidesGridItem$1 = snapGrid[i$2];
        if (params.roundLengths) { slidesGridItem$1 = Math.floor(slidesGridItem$1); }
        if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem$1);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0) { snapGrid = [0]; }

    if (params.spaceBetween !== 0) {
      if (swiper.isHorizontal()) {
        if (rtl) { slides.css({ marginLeft: (spaceBetween + "px") }); }
        else { slides.css({ marginRight: (spaceBetween + "px") }); }
      } else { slides.css({ marginBottom: (spaceBetween + "px") }); }
    }

    if (params.centerInsufficientSlides) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      if (allSlidesSize < swiperSize) {
        var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }

    Utils.extend(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid,
    });

    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) { swiper.checkOverflow(); }
      swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }

    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }

  function updateAutoHeight (speed) {
    var swiper = this;
    var activeSlides = [];
    var newHeight = 0;
    var i;
    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length) { break; }
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    } else {
      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    }

    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }

    // Update Height
    if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
  }

  function updateSlidesOffset () {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }

  function updateSlidesProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var slides = swiper.slides;
    var rtl = swiper.rtlTranslate;

    if (slides.length === 0) { return; }
    if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }

    var offsetCenter = -translate;
    if (rtl) { offsetCenter = translate; }

    // Visible Slides
    slides.removeClass(params.slideVisibleClass);

    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];

    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress = (
        (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
      ) / (slide.swiperSlideSize + params.spaceBetween);
      if (params.watchSlidesVisibility) {
        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        var isVisible = (slideBefore >= 0 && slideBefore < swiper.size - 1)
                  || (slideAfter > 1 && slideAfter <= swiper.size)
                  || (slideBefore <= 0 && slideAfter >= swiper.size);
        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = $(swiper.visibleSlides);
  }

  function updateProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress;
    var isBeginning = swiper.isBeginning;
    var isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / (translatesDiff);
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Utils.extend(swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd,
    });

    if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesProgress(translate); }

    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }
    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
      swiper.emit('fromEdge');
    }

    swiper.emit('progress', progress);
  }

  function updateSlidesClasses () {
    var swiper = this;

    var slides = swiper.slides;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;
    var realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;

    slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));

    var activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
    } else {
      activeSlide = slides.eq(activeIndex);
    }

    // Active classes
    activeSlide.addClass(params.slideActiveClass);

    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      }
    }
    // Next Slide
    var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    // Prev Slide
    var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      }
    }
  }

  function updateActiveIndex (newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var params = swiper.params;
    var previousIndex = swiper.activeIndex;
    var previousRealIndex = swiper.realIndex;
    var previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    if (typeof activeIndex === 'undefined') {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      // Normalize slideIndex
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; }
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }
      return;
    }

    // Get real index
    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

    Utils.extend(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex,
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    if (swiper.initialized || swiper.runCallbacksOnInit) {
      swiper.emit('slideChange');
    }
  }

  function updateClickedSlide (e) {
    var swiper = this;
    var params = swiper.params;
    var slide = $(e.target).closest(("." + (params.slideClass)))[0];
    var slideFound = false;
    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) { slideFound = true; }
      }
    }

    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = $(slide).index();
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide,
  };

  function getTranslate (axis) {
    if ( axis === void 0 ) axis = this.isHorizontal() ? 'x' : 'y';

    var swiper = this;

    var params = swiper.params;
    var rtl = swiper.rtlTranslate;
    var translate = swiper.translate;
    var $wrapperEl = swiper.$wrapperEl;

    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }

    var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
    if (rtl) { currentTranslate = -currentTranslate; }

    return currentTranslate || 0;
  }

  function setTranslate (translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;

    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }

    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }

    if (!params.virtualTranslate) {
      if (Support.transforms3d) { $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)")); }
      else { $wrapperEl.transform(("translate(" + x + "px, " + y + "px)")); }
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;

    // Check if we need to update progress
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }

    swiper.emit('setTranslate', swiper.translate, byController);
  }

  function minTranslate () {
    return (-this.snapGrid[0]);
  }

  function maxTranslate () {
    return (-this.snapGrid[this.snapGrid.length - 1]);
  }

  var translate = {
    getTranslate: getTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
  };

  function setTransition (duration, byController) {
    var swiper = this;

    swiper.$wrapperEl.transition(duration);

    swiper.emit('setTransition', duration, byController);
  }

  function transitionStart (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var params = swiper.params;
    var previousIndex = swiper.previousIndex;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionStart');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionStart');
        return;
      }
      swiper.emit('slideChangeTransitionStart');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionStart');
      } else {
        swiper.emit('slidePrevTransitionStart');
      }
    }
  }

  function transitionEnd$1 (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var previousIndex = swiper.previousIndex;
    swiper.animating = false;
    swiper.setTransition(0);

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionEnd');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionEnd');
        return;
      }
      swiper.emit('slideChangeTransitionEnd');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionEnd');
      } else {
        swiper.emit('slidePrevTransitionEnd');
      }
    }
  }

  var transition$1 = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd$1,
  };

  function slideTo (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) { slideIndex = 0; }

    var params = swiper.params;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var previousIndex = swiper.previousIndex;
    var activeIndex = swiper.activeIndex;
    var rtl = swiper.rtlTranslate;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }

    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }

    var translate = -snapGrid[snapIndex];

    // Update progress
    swiper.updateProgress(translate);

    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) { return false; }
      }
    }

    var direction;
    if (slideIndex > activeIndex) { direction = 'next'; }
    else if (slideIndex < activeIndex) { direction = 'prev'; }
    else { direction = 'reset'; }


    // Update Index
    if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      // Update Height
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }
      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }

    if (speed === 0 || !Support.transition) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
      }
    }

    return true;
  }

  function slideToLoop (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var newIndex = index;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }

    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideNext (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var rtlTranslate = swiper.rtlTranslate;

    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) { return -Math.floor(Math.abs(val)); }
      return Math.floor(val);
    }
    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) { return normalize(val); });
    var normalizedSlidesGrid = slidesGrid.map(function (val) { return normalize(val); });

    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    var prevIndex;
    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) { prevIndex = swiper.activeIndex - 1; }
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var index = swiper.activeIndex;
    var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

    if (snapIndex < swiper.snapGrid.length - 1) {
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];

      if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
        index = swiper.params.slidesPerGroup;
      }
    }

    return swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;

    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    if (params.loop) {
      if (swiper.animating) { return; }
      realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      if (params.centeredSlides) {
        if (
          (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
          || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
        ) {
          swiper.loopFix();
          slideToIndex = $wrapperEl
            .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
            .eq(0)
            .index();

          Utils.nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
          .eq(0)
          .index();

        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide,
  };

  function loopCreate () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    // Remove duplicated slides
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();

    var slides = $wrapperEl.children(("." + (params.slideClass)));

    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = $(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
          $wrapperEl.append(blankNode);
        }
        slides = $wrapperEl.children(("." + (params.slideClass)));
      }
    }

    if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }

    swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }

    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (index, el) {
      var slide = $(el);
      if (index < swiper.loopedSlides) { appendSlides.push(el); }
      if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
      slide.attr('data-swiper-slide-index', index);
    });
    for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
      $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
      $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  function loopFix () {
    var swiper = this;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var slides = swiper.slides;
    var loopedSlides = swiper.loopedSlides;
    var allowSlidePrev = swiper.allowSlidePrev;
    var allowSlideNext = swiper.allowSlideNext;
    var snapGrid = swiper.snapGrid;
    var rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;

    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate();


    // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
      newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged$1 && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
  }

  function loopDestroy () {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var slides = swiper.slides;
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + ",." + (params.slideClass) + "." + (params.slideBlankClass))).remove();
    slides.removeAttr('data-swiper-slide-index');
  }

  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy,
  };

  function setGrabCursor (moving) {
    var swiper = this;
    if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
    var el = swiper.el;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
  }

  function unsetGrabCursor () {
    var swiper = this;
    if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
    swiper.el.style.cursor = '';
  }

  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor,
  };

  function appendSlide (slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.append(slides[i]); }
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
  }

  function prependSlide (slides) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    if (params.loop) {
      swiper.loopDestroy();
    }
    var newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.prepend(slides[i]); }
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }

  function addSlide (index, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

    var slidesBuffer = [];
    for (var i = baseLength - 1; i >= index; i -= 1) {
      var currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (slides[i$1]) { $wrapperEl.append(slides[i$1]); }
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }

    for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
      $wrapperEl.append(slidesBuffer[i$2]);
    }

    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeSlide (slidesIndexes) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;

    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
        if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
      if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      newActiveIndex = Math.max(newActiveIndex, 0);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeAllSlides () {
    var swiper = this;

    var slidesIndexes = [];
    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }

  var manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    addSlide: addSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides,
  };

  var Device = (function Device() {
    var ua = win.navigator.userAgent;

    var device = {
      ios: false,
      android: false,
      androidChrome: false,
      desktop: false,
      windows: false,
      iphone: false,
      ipod: false,
      ipad: false,
      cordova: win.cordova || win.phonegap,
      phonegap: win.cordova || win.phonegap,
    };

    var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);


    // Windows
    if (windows) {
      device.os = 'windows';
      device.osVersion = windows[2];
      device.windows = true;
    }
    // Android
    if (android && !windows) {
      device.os = 'android';
      device.osVersion = android[2];
      device.android = true;
      device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
    }
    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    }
    // iOS
    if (iphone && !ipod) {
      device.osVersion = iphone[2].replace(/_/g, '.');
      device.iphone = true;
    }
    if (ipad) {
      device.osVersion = ipad[2].replace(/_/g, '.');
      device.ipad = true;
    }
    if (ipod) {
      device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
      device.iphone = true;
    }
    // iOS 8+ changed UA
    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
      if (device.osVersion.split('.')[0] === '10') {
        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
      }
    }

    // Desktop
    device.desktop = !(device.os || device.android || device.webView);

    // Webview
    device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

    // Minimal UI
    if (device.os && device.os === 'ios') {
      var osVersionArr = device.osVersion.split('.');
      var metaViewport = doc.querySelector('meta[name="viewport"]');
      device.minimalUi = !device.webView
        && (ipod || iphone)
        && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7)
        && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
    }

    // Pixel Ratio
    device.pixelRatio = win.devicePixelRatio || 1;

    // Export object
    return device;
  }());

  function onTouchStart (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
    if (!data.isTouchEvent && 'button' in e && e.button > 0) { return; }
    if (data.isTouched && data.isMoved) { return; }
    if (params.noSwiping && $(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$(e).closest(params.swipeHandler)[0]) { return; }
    }

    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY;

    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (
      edgeSwipeDetection
      && ((startX <= edgeSwipeThreshold)
      || (startX >= win.screen.width - edgeSwipeThreshold))
    ) {
      return;
    }

    Utils.extend(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined,
    });

    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = Utils.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) { data.allowThresholdMove = false; }
    if (e.type !== 'touchstart') {
      var preventDefault = true;
      if ($(e.target).is(data.formElements)) { preventDefault = false; }
      if (
        doc.activeElement
        && $(doc.activeElement).is(data.formElements)
        && doc.activeElement !== e.target
      ) {
        doc.activeElement.blur();
      }

      var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
      if (params.touchStartForcePreventDefault || shouldPreventDefault) {
        e.preventDefault();
      }
    }
    swiper.emit('touchStart', e);
  }

  function onTouchMove (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      return;
    }
    if (data.isTouchEvent && e.type === 'mousemove') { return; }
    var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      // isMoved = true;
      swiper.allowClick = false;
      if (data.isTouched) {
        Utils.extend(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY,
        });
        data.touchStartTime = Utils.now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (
          (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
          || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
        ) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (
        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
        || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      ) {
        return;
      }
    }
    if (data.isTouchEvent && doc.activeElement) {
      if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }
    if (e.targetTouches && e.targetTouches.length > 1) { return; }

    touches.currentX = pageX;
    touches.currentY = pageY;

    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt((Math.pow( diffX, 2 )) + (Math.pow( diffY, 2 ))) < swiper.params.threshold) { return; }

    if (typeof data.isScrolling === 'undefined') {
      var touchAngle;
      if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if ((diffX * diffX) + (diffY * diffY) >= 25) {
          touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }

    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
      }
      data.allowMomentumBounce = false;
      // Grab Cursor
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;

    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;

    diff *= params.touchRatio;
    if (rtl) { diff = -diff; }

    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;

    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow( (-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio )); }
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow( (swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio )); }
    }

    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }

    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }


    // Threshold
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }

    if (!params.followFinger) { return; }

    // Update active index in free mode
    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime,
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
        time: Utils.now(),
      });
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd (event) {
    var swiper = this;
    var data = swiper.touchEventsData;

    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var $wrapperEl = swiper.$wrapperEl;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }

    // Time diff
    var touchEndTime = Utils.now();
    var timeDiff = touchEndTime - data.touchStartTime;

    // Tap, doubleTap, Click
    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit('tap', e);
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
        data.clickTimeout = Utils.nextTick(function () {
          if (!swiper || swiper.destroyed) { return; }
          swiper.emit('click', e);
        }, 300);
      }
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
        swiper.emit('doubleTap', e);
      }
    }

    data.lastClickTime = Utils.now();
    Utils.nextTick(function () {
      if (!swiper.destroyed) { swiper.allowClick = true; }
    });

    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;

    var currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }

    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }

      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();

          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          }
          // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.
          if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeModeMomentumVelocityRatio;

        data.velocities.length = 0;
        var momentumDuration = 1000 * params.freeModeMomentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;

        var newPosition = swiper.translate + momentumDistance;
        if (rtl) { newPosition = -newPosition; }

        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (params.freeModeSticky) {
          var nextSlide;
          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }

          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          swiper.once('transitionEnd', function () {
            swiper.loopFix();
          });
        }
        // Fix duration
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }

        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) { return; }
            swiper.emit('momentumBounce');

            swiper.setTransition(params.speed);
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }

        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      return;
    }

    // Find current slide
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
      if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
          stopIndex = i;
          groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }

    // Find current slide size
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
      if (swiper.swipeDirection === 'prev') {
        if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + params.slidesPerGroup);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize () {
    var swiper = this;

    var params = swiper.params;
    var el = swiper.el;

    if (el && el.offsetWidth === 0) { return; }

    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Save locks
    var allowSlideNext = swiper.allowSlideNext;
    var allowSlidePrev = swiper.allowSlidePrev;
    var snapGrid = swiper.snapGrid;

    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;

    swiper.updateSize();
    swiper.updateSlides();

    if (params.freeMode) {
      var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      swiper.updateSlidesClasses();
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      swiper.autoplay.run();
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;

    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  function onClick (e) {
    var swiper = this;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) { e.preventDefault(); }
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function attachEvents() {
    var swiper = this;
    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    {
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);
    }

    swiper.onClick = onClick.bind(swiper);

    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;

    // Touch Events
    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
          target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.addEventListener('mousedown', swiper.onTouchStart, false);
          doc.addEventListener('mousemove', swiper.onTouchMove, capture);
          doc.addEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        target.addEventListener('click', swiper.onClick, true);
      }
    }

    // Resize handler
    swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
  }

  function detachEvents() {
    var swiper = this;

    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;

    // Touch Events
    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
          target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.removeEventListener('mousedown', swiper.onTouchStart, false);
          doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
          doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        target.removeEventListener('click', swiper.onClick, true);
      }
    }

    // Resize handler
    swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
  }

  var events = {
    attachEvents: attachEvents,
    detachEvents: detachEvents,
  };

  function setBreakpoint () {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var initialized = swiper.initialized;
    var loopedSlides = swiper.loopedSlides; if ( loopedSlides === void 0 ) loopedSlides = 0;
    var params = swiper.params;
    var breakpoints = params.breakpoints;
    if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }

    // Set breakpoint for window width and update parameters
    var breakpoint = swiper.getBreakpoint(breakpoints);

    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
      var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      if (breakpointOnlyParams) {
        ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(function (param) {
          var paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === 'undefined') { return; }
          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
            breakpointOnlyParams[param] = 'auto';
          } else if (param === 'slidesPerView') {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }

      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
      var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

      if (directionChanged && initialized) {
        swiper.changeDirection();
      }

      Utils.extend(swiper.params, breakpointParams);

      Utils.extend(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
      });

      swiper.currentBreakpoint = breakpoint;

      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
      }

      swiper.emit('breakpoint', breakpointParams);
    }
  }

  function getBreakpoint (breakpoints) {
    var swiper = this;
    // Get breakpoint for window width
    if (!breakpoints) { return undefined; }
    var breakpoint = false;
    var points = [];
    Object.keys(breakpoints).forEach(function (point) {
      points.push(point);
    });
    points.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });
    for (var i = 0; i < points.length; i += 1) {
      var point = points[i];
      if (swiper.params.breakpointsInverse) {
        if (point <= win.innerWidth) {
          breakpoint = point;
        }
      } else if (point >= win.innerWidth && !breakpoint) {
        breakpoint = point;
      }
    }
    return breakpoint || 'max';
  }

  var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };

  function addClasses () {
    var swiper = this;
    var classNames = swiper.classNames;
    var params = swiper.params;
    var rtl = swiper.rtl;
    var $el = swiper.$el;
    var suffixes = [];

    suffixes.push('initialized');
    suffixes.push(params.direction);

    if (params.freeMode) {
      suffixes.push('free-mode');
    }
    if (!Support.flexbox) {
      suffixes.push('no-flexbox');
    }
    if (params.autoHeight) {
      suffixes.push('autoheight');
    }
    if (rtl) {
      suffixes.push('rtl');
    }
    if (params.slidesPerColumn > 1) {
      suffixes.push('multirow');
    }
    if (Device.android) {
      suffixes.push('android');
    }
    if (Device.ios) {
      suffixes.push('ios');
    }
    // WP8 Touch Events Fix
    if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      suffixes.push(("wp8-" + (params.direction)));
    }

    suffixes.forEach(function (suffix) {
      classNames.push(params.containerModifierClass + suffix);
    });

    $el.addClass(classNames.join(' '));
  }

  function removeClasses () {
    var swiper = this;
    var $el = swiper.$el;
    var classNames = swiper.classNames;

    $el.removeClass(classNames.join(' '));
  }

  var classes = { addClasses: addClasses, removeClasses: removeClasses };

  function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
    var image;
    function onReady() {
      if (callback) { callback(); }
    }
    if (!imageEl.complete || !checkForComplete) {
      if (src) {
        image = new win.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }

  function preloadImages () {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) { return; }
      if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) { swiper.update(); }
        swiper.emit('imagesReady');
      }
    }
    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(
        imageEl,
        imageEl.currentSrc || imageEl.getAttribute('src'),
        imageEl.srcset || imageEl.getAttribute('srcset'),
        imageEl.sizes || imageEl.getAttribute('sizes'),
        true,
        onReady
      );
    }
  }

  var images = {
    loadImage: loadImage,
    preloadImages: preloadImages,
  };

  function checkOverflow() {
    var swiper = this;
    var wasLocked = swiper.isLocked;

    swiper.isLocked = swiper.snapGrid.length === 1;
    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked;

    // events
    if (wasLocked !== swiper.isLocked) { swiper.emit(swiper.isLocked ? 'lock' : 'unlock'); }

    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      swiper.navigation.update();
    }
  }

  var checkOverflow$1 = { checkOverflow: checkOverflow };

  var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    //
    preventInteractionOnTransition: false,

    // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,

    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,

    // Autoheight
    autoHeight: false,

    // Set wrapper width
    setWrapperSize: false,

    // Virtual Translate
    virtualTranslate: false,

    // Effects
    effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

    // Breakpoints
    breakpoints: undefined,
    breakpointsInverse: false,

    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0, // in px
    slidesOffsetAfter: 0, // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,

    // Disable swiper and hide navigation when container not overflow
    watchOverflow: false,

    // Round length
    roundLengths: false,

    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,

    // Unique Navigation Elements
    uniqueNavElements: true,

    // Resistance
    resistance: true,
    resistanceRatio: 0.85,

    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,

    // Cursor
    grabCursor: false,

    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,

    // Images
    preloadImages: true,
    updateOnImagesReady: true,

    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,

    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null, // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,

    // Passive Listeners
    passiveListeners: true,

    // NS
    containerModifierClass: 'swiper-container-', // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',

    // Callbacks
    runCallbacksOnInit: true,
  };

  /* eslint no-param-reassign: "off" */

  var prototypes = {
    update: update,
    translate: translate,
    transition: transition$1,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images,
  };

  var extendedDefaults = {};

  var Swiper = /*@__PURE__*/(function (SwiperClass) {
    function Swiper() {
      var assign;

      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      var el;
      var params;
      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
        params = args[0];
      } else {
        (assign = args, el = assign[0], params = assign[1]);
      }
      if (!params) { params = {}; }

      params = Utils.extend({}, params);
      if (el && !params.el) { params.el = el; }

      SwiperClass.call(this, params);

      Object.keys(prototypes).forEach(function (prototypeGroup) {
        Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
          if (!Swiper.prototype[protoMethod]) {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
          }
        });
      });

      // Swiper Instance
      var swiper = this;
      if (typeof swiper.modules === 'undefined') {
        swiper.modules = {};
      }
      Object.keys(swiper.modules).forEach(function (moduleName) {
        var module = swiper.modules[moduleName];
        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== 'object' || moduleParams === null) { return; }
          if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
          if (params[moduleParamName] === true) {
            params[moduleParamName] = { enabled: true };
          }
          if (
            typeof params[moduleParamName] === 'object'
            && !('enabled' in params[moduleParamName])
          ) {
            params[moduleParamName].enabled = true;
          }
          if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
        }
      });

      // Extend defaults with modules params
      var swiperParams = Utils.extend({}, defaults);
      swiper.useModulesParams(swiperParams);

      // Extend defaults with passed params
      swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = Utils.extend({}, swiper.params);
      swiper.passedParams = Utils.extend({}, params);

      // Save Dom lib
      swiper.$ = $;

      // Find el
      var $el = $(swiper.params.el);
      el = $el[0];

      if (!el) {
        return undefined;
      }

      if ($el.length > 1) {
        var swipers = [];
        $el.each(function (index, containerEl) {
          var newParams = Utils.extend({}, params, { el: containerEl });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }

      el.swiper = swiper;
      $el.data('swiper', swiper);

      // Find Wrapper
      var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));

      // Extend Swiper
      Utils.extend(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],

        // Classes
        classNames: [],

        // Slides
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],

        // isDirection
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical: function isVertical() {
          return swiper.params.direction === 'vertical';
        },
        // RTL
        rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        wrongRTL: $wrapperEl.css('display') === '-webkit-box',

        // Indexes
        activeIndex: 0,
        realIndex: 0,

        //
        isBeginning: true,
        isEnd: false,

        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,

        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,

        // Touch Events
        touchEvents: (function touchEvents() {
          var touch = ['touchstart', 'touchmove', 'touchend'];
          var desktop = ['mousedown', 'mousemove', 'mouseup'];
          if (Support.pointerEvents) {
            desktop = ['pointerdown', 'pointermove', 'pointerup'];
          } else if (Support.prefixedPointerEvents) {
            desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
          }
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2],
          };
          return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }()),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          formElements: 'input, select, option, textarea, button, video',
          // Last click time
          lastClickTime: Utils.now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined,
        },

        // Clicks
        allowClick: true,

        // Touches
        allowTouchMove: swiper.params.allowTouchMove,

        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        },

        // Images
        imagesToLoad: [],
        imagesLoaded: 0,

      });

      // Install Modules
      swiper.useModules();

      // Init
      if (swiper.params.init) {
        swiper.init();
      }

      // Return app instance
      return swiper;
    }

    if ( SwiperClass ) Swiper.__proto__ = SwiperClass;
    Swiper.prototype = Object.create( SwiperClass && SwiperClass.prototype );
    Swiper.prototype.constructor = Swiper;

    var staticAccessors = { extendedDefaults: { configurable: true },defaults: { configurable: true },Class: { configurable: true },$: { configurable: true } };

    Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic () {
      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides;
      var slidesGrid = swiper.slidesGrid;
      var swiperSize = swiper.size;
      var activeIndex = swiper.activeIndex;
      var spv = 1;
      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;
        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
        for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
          if (slides[i$1] && !breakLoop) {
            slideSize += slides[i$1].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
      } else {
        for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
          if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }
      return spv;
    };

    Swiper.prototype.update = function update () {
      var swiper = this;
      if (!swiper || swiper.destroyed) { return; }
      var snapGrid = swiper.snapGrid;
      var params = swiper.params;
      // Breakpoints
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      var translated;
      if (swiper.params.freeMode) {
        setTranslate();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit('update');
    };

    Swiper.prototype.changeDirection = function changeDirection (newDirection, needUpdate) {
      if ( needUpdate === void 0 ) needUpdate = true;

      var swiper = this;
      var currentDirection = swiper.params.direction;
      if (!newDirection) {
        // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
      }
      if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
        return swiper;
      }

      swiper.$el
        .removeClass(("" + (swiper.params.containerModifierClass) + currentDirection + " wp8-" + currentDirection))
        .addClass(("" + (swiper.params.containerModifierClass) + newDirection));

      if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        swiper.$el.addClass(((swiper.params.containerModifierClass) + "wp8-" + newDirection));
      }

      swiper.params.direction = newDirection;

      swiper.slides.each(function (slideIndex, slideEl) {
        if (newDirection === 'vertical') {
          slideEl.style.width = '';
        } else {
          slideEl.style.height = '';
        }
      });

      swiper.emit('changeDirection');
      if (needUpdate) { swiper.update(); }

      return swiper;
    };

    Swiper.prototype.init = function init () {
      var swiper = this;
      if (swiper.initialized) { return; }

      swiper.emit('beforeInit');

      // Set breakpoint
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }

      // Add Classes
      swiper.addClasses();

      // Create loop
      if (swiper.params.loop) {
        swiper.loopCreate();
      }

      // Update size
      swiper.updateSize();

      // Update slides
      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }

      // Set Grab Cursor
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }

      // Slide To Initial Slide
      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      }

      // Attach events
      swiper.attachEvents();

      // Init Flag
      swiper.initialized = true;

      // Emit
      swiper.emit('init');
    };

    Swiper.prototype.destroy = function destroy (deleteInstance, cleanStyles) {
      if ( deleteInstance === void 0 ) deleteInstance = true;
      if ( cleanStyles === void 0 ) cleanStyles = true;

      var swiper = this;
      var params = swiper.params;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;

      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }

      swiper.emit('beforeDestroy');

      // Init Flag
      swiper.initialized = false;

      // Detach events
      swiper.detachEvents();

      // Destroy loop
      if (params.loop) {
        swiper.loopDestroy();
      }

      // Cleanup styles
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');
        if (slides && slides.length) {
          slides
            .removeClass([
              params.slideVisibleClass,
              params.slideActiveClass,
              params.slideNextClass,
              params.slidePrevClass ].join(' '))
            .removeAttr('style')
            .removeAttr('data-swiper-slide-index')
            .removeAttr('data-swiper-column')
            .removeAttr('data-swiper-row');
        }
      }

      swiper.emit('destroy');

      // Detach emitter events
      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data('swiper', null);
        Utils.deleteProps(swiper);
      }
      swiper.destroyed = true;

      return null;
    };

    Swiper.extendDefaults = function extendDefaults (newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    };

    staticAccessors.extendedDefaults.get = function () {
      return extendedDefaults;
    };

    staticAccessors.defaults.get = function () {
      return defaults;
    };

    staticAccessors.Class.get = function () {
      return SwiperClass;
    };

    staticAccessors.$.get = function () {
      return $;
    };

    Object.defineProperties( Swiper, staticAccessors );

    return Swiper;
  }(SwiperClass));

  var Device$1 = {
    name: 'device',
    proto: {
      device: Device,
    },
    static: {
      device: Device,
    },
  };

  var Support$1 = {
    name: 'support',
    proto: {
      support: Support,
    },
    static: {
      support: Support,
    },
  };

  var Browser$1 = {
    name: 'browser',
    proto: {
      browser: Browser,
    },
    static: {
      browser: Browser,
    },
  };

  var Resize = {
    name: 'resize',
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        resize: {
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('beforeResize');
            swiper.emit('resize');
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('orientationchange');
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        // Emit resize
        win.addEventListener('resize', swiper.resize.resizeHandler);

        // Emit orientationchange
        win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        var swiper = this;
        win.removeEventListener('resize', swiper.resize.resizeHandler);
        win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
    },
  };

  var Observer = {
    func: win.MutationObserver || win.WebkitMutationObserver,
    attach: function attach(target, options) {
      if ( options === void 0 ) options = {};

      var swiper = this;

      var ObserverFunc = Observer.func;
      var observer = new ObserverFunc(function (mutations) {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (mutations.length === 1) {
          swiper.emit('observerUpdate', mutations[0]);
          return;
        }
        var observerUpdate = function observerUpdate() {
          swiper.emit('observerUpdate', mutations[0]);
        };

        if (win.requestAnimationFrame) {
          win.requestAnimationFrame(observerUpdate);
        } else {
          win.setTimeout(observerUpdate, 0);
        }
      });

      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
      });

      swiper.observer.observers.push(observer);
    },
    init: function init() {
      var swiper = this;
      if (!Support.observer || !swiper.params.observer) { return; }
      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();
        for (var i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      }
      // Observe container
      swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

      // Observe wrapper
      swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.observers.forEach(function (observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    },
  };

  var Observer$1 = {
    name: 'observer',
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false,
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        observer: {
          init: Observer.init.bind(swiper),
          attach: Observer.attach.bind(swiper),
          destroy: Observer.destroy.bind(swiper),
          observers: [],
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.observer.init();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.destroy();
      },
    },
  };

  var Virtual = {
    update: function update(force) {
      var swiper = this;
      var ref = swiper.params;
      var slidesPerView = ref.slidesPerView;
      var slidesPerGroup = ref.slidesPerGroup;
      var centeredSlides = ref.centeredSlides;
      var ref$1 = swiper.params.virtual;
      var addSlidesBefore = ref$1.addSlidesBefore;
      var addSlidesAfter = ref$1.addSlidesAfter;
      var ref$2 = swiper.virtual;
      var previousFrom = ref$2.from;
      var previousTo = ref$2.to;
      var slides = ref$2.slides;
      var previousSlidesGrid = ref$2.slidesGrid;
      var renderSlide = ref$2.renderSlide;
      var previousOffset = ref$2.offset;
      swiper.updateActiveIndex();
      var activeIndex = swiper.activeIndex || 0;

      var offsetProp;
      if (swiper.rtlTranslate) { offsetProp = 'right'; }
      else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }

      var slidesAfter;
      var slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
        slidesBefore = slidesPerGroup + addSlidesAfter;
      }
      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

      Utils.extend(swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: swiper.slidesGrid,
      });

      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      }

      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.css(offsetProp, (offset + "px"));
        }
        swiper.updateProgress();
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: (function getSlides() {
            var slidesToRender = [];
            for (var i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          }()),
        });
        onRendered();
        return;
      }
      var prependIndexes = [];
      var appendIndexes = [];
      if (force) {
        swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
      } else {
        for (var i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
          }
        }
      }
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (i$1 >= from && i$1 <= to) {
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(i$1);
          } else {
            if (i$1 > previousTo) { appendIndexes.push(i$1); }
            if (i$1 < previousFrom) { prependIndexes.push(i$1); }
          }
        }
      }
      appendIndexes.forEach(function (index) {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes.sort(function (a, b) { return b - a; }).forEach(function (index) {
        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
      });
      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
      onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
      var swiper = this;
      var params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      var $slideEl = params.renderSlide
        ? $(params.renderSlide.call(swiper, slide, index))
        : $(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
      if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
      if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
      return $slideEl;
    },
    appendSlide: function appendSlide(slides) {
      var swiper = this;
      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) { swiper.virtual.slides.push(slides[i]); }
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slides) {
      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var newActiveIndex = activeIndex + 1;
      var numberOfNewSlides = 1;

      if (Array.isArray(slides)) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) { swiper.virtual.slides.unshift(slides[i]); }
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        var cache = swiper.virtual.cache;
        var newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cache[cachedIndex];
        });
        swiper.virtual.cache = newCache;
      }
      swiper.virtual.update(true);
      swiper.slideTo(newActiveIndex, 0);
    },
    removeSlide: function removeSlide(slidesIndexes) {
      var swiper = this;
      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) { return; }
      var activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
          }
          if (slidesIndexes[i] < activeIndex) { activeIndex -= 1; }
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
        }
        if (slidesIndexes < activeIndex) { activeIndex -= 1; }
        activeIndex = Math.max(activeIndex, 0);
      }
      swiper.virtual.update(true);
      swiper.slideTo(activeIndex, 0);
    },
    removeAllSlides: function removeAllSlides() {
      var swiper = this;
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      swiper.virtual.update(true);
      swiper.slideTo(0, 0);
    },
  };

  var Virtual$1 = {
    name: 'virtual',
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        virtual: {
          update: Virtual.update.bind(swiper),
          appendSlide: Virtual.appendSlide.bind(swiper),
          prependSlide: Virtual.prependSlide.bind(swiper),
          removeSlide: Virtual.removeSlide.bind(swiper),
          removeAllSlides: Virtual.removeAllSlides.bind(swiper),
          renderSlide: Virtual.renderSlide.bind(swiper),
          slides: swiper.params.virtual.slides,
          cache: {},
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
        var overwriteParams = {
          watchSlidesProgress: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);

        if (!swiper.params.initialSlide) {
          swiper.virtual.update();
        }
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.virtual.update();
      },
    },
  };

  var Keyboard = {
    handle: function handle(event) {
      var swiper = this;
      var rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var kc = e.keyCode || e.charCode;
      // Directions locks
      if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40) || kc === 34)) {
        return false;
      }
      if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38) || kc === 33)) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return undefined;
      }
      if (swiper.params.keyboard.onlyInViewport && (kc === 33 || kc === 34 || kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
        var inView = false;
        // Check that swiper should be inside of visible area of window
        if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
          return undefined;
        }
        var windowWidth = win.innerWidth;
        var windowHeight = win.innerHeight;
        var swiperOffset = swiper.$el.offset();
        if (rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
        var swiperCoord = [
          [swiperOffset.left, swiperOffset.top],
          [swiperOffset.left + swiper.width, swiperOffset.top],
          [swiperOffset.left, swiperOffset.top + swiper.height],
          [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height] ];
        for (var i = 0; i < swiperCoord.length; i += 1) {
          var point = swiperCoord[i];
          if (
            point[0] >= 0 && point[0] <= windowWidth
            && point[1] >= 0 && point[1] <= windowHeight
          ) {
            inView = true;
          }
        }
        if (!inView) { return undefined; }
      }
      if (swiper.isHorizontal()) {
        if (kc === 33 || kc === 34 || kc === 37 || kc === 39) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if (((kc === 34 || kc === 39) && !rtl) || ((kc === 33 || kc === 37) && rtl)) { swiper.slideNext(); }
        if (((kc === 33 || kc === 37) && !rtl) || ((kc === 34 || kc === 39) && rtl)) { swiper.slidePrev(); }
      } else {
        if (kc === 33 || kc === 34 || kc === 38 || kc === 40) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if (kc === 34 || kc === 40) { swiper.slideNext(); }
        if (kc === 33 || kc === 38) { swiper.slidePrev(); }
      }
      swiper.emit('keyPress', kc);
      return undefined;
    },
    enable: function enable() {
      var swiper = this;
      if (swiper.keyboard.enabled) { return; }
      $(doc).on('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = true;
    },
    disable: function disable() {
      var swiper = this;
      if (!swiper.keyboard.enabled) { return; }
      $(doc).off('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = false;
    },
  };

  var Keyboard$1 = {
    name: 'keyboard',
    params: {
      keyboard: {
        enabled: false,
        onlyInViewport: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        keyboard: {
          enabled: false,
          enable: Keyboard.enable.bind(swiper),
          disable: Keyboard.disable.bind(swiper),
          handle: Keyboard.handle.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.keyboard.enabled) {
          swiper.keyboard.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.keyboard.enabled) {
          swiper.keyboard.disable();
        }
      },
    },
  };

  function isEventSupported() {
    var eventName = 'onwheel';
    var isSupported = eventName in doc;

    if (!isSupported) {
      var element = doc.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }

    if (!isSupported
      && doc.implementation
      && doc.implementation.hasFeature
      // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      && doc.implementation.hasFeature('', '') !== true
    ) {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
    }

    return isSupported;
  }
  var Mousewheel = {
    lastScrollTime: Utils.now(),
    event: (function getEvent() {
      if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
      return isEventSupported() ? 'wheel' : 'mousewheel';
    }()),
    normalize: function normalize(e) {
      // Reasonable defaults
      var PIXEL_STEP = 10;
      var LINE_HEIGHT = 40;
      var PAGE_HEIGHT = 800;

      var sX = 0;
      var sY = 0; // spinX, spinY
      var pX = 0;
      var pY = 0; // pixelX, pixelY

      // Legacy
      if ('detail' in e) {
        sY = e.detail;
      }
      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }
      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      }

      // side scrolling on FF with DOMMouseScroll
      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }

      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;

      if ('deltaY' in e) {
        pY = e.deltaY;
      }
      if ('deltaX' in e) {
        pX = e.deltaX;
      }

      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) { // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else { // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }

      // Fall-back if spin cannot be determined
      if (pX && !sX) {
        sX = (pX < 1) ? -1 : 1;
      }
      if (pY && !sY) {
        sY = (pY < 1) ? -1 : 1;
      }

      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY,
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      var swiper = this;
      swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      var swiper = this;
      swiper.mouseEntered = false;
    },
    handle: function handle(event) {
      var e = event;
      var swiper = this;
      var params = swiper.params.mousewheel;

      if (!swiper.mouseEntered && !params.releaseOnEdges) { return true; }

      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var delta = 0;
      var rtlFactor = swiper.rtlTranslate ? -1 : 1;

      var data = Mousewheel.normalize(e);

      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = data.pixelX * rtlFactor; }
          else { return true; }
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = data.pixelY; }
        else { return true; }
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }

      if (delta === 0) { return true; }

      if (params.invert) { delta = -delta; }

      if (!swiper.params.freeMode) {
        if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
          if (delta < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
              swiper.slideNext();
              swiper.emit('scroll', e);
            } else if (params.releaseOnEdges) { return true; }
          } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) { return true; }
        }
        swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
      } else {
        // Freemode or scrollContainer:
        if (swiper.params.loop) {
          swiper.loopFix();
        }
        var position = swiper.getTranslate() + (delta * params.sensitivity);
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;

        if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
        if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }

        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeModeSticky) {
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = Utils.nextTick(function () {
            swiper.slideToClosest();
          }, 300);
        }
        // Emit event
        swiper.emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.autoplay.stop(); }
        // Return page scroll on edge positions
        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) { return true; }
      }

      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      return false;
    },
    enable: function enable() {
      var swiper = this;
      if (!Mousewheel.event) { return false; }
      if (swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
      target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
      target.on(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = true;
      return true;
    },
    disable: function disable() {
      var swiper = this;
      if (!Mousewheel.event) { return false; }
      if (!swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.off(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = false;
      return true;
    },
  };

  var Mousewheel$1 = {
    name: 'mousewheel',
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarged: 'container',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        mousewheel: {
          enabled: false,
          enable: Mousewheel.enable.bind(swiper),
          disable: Mousewheel.disable.bind(swiper),
          handle: Mousewheel.handle.bind(swiper),
          handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
          handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
          lastScrollTime: Utils.now(),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); }
      },
    },
  };

  var Navigation = {
    update: function update() {
      // Update Navigation Buttons
      var swiper = this;
      var params = swiper.params.navigation;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          $prevEl.addClass(params.disabledClass);
        } else {
          $prevEl.removeClass(params.disabledClass);
        }
        $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          $nextEl.addClass(params.disabledClass);
        } else {
          $nextEl.removeClass(params.disabledClass);
        }
        $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    },
    onPrevClick: function onPrevClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop) { return; }
      swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop) { return; }
      swiper.slideNext();
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.navigation;
      if (!(params.nextEl || params.prevEl)) { return; }

      var $nextEl;
      var $prevEl;
      if (params.nextEl) {
        $nextEl = $(params.nextEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.nextEl === 'string'
          && $nextEl.length > 1
          && swiper.$el.find(params.nextEl).length === 1
        ) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }
      if (params.prevEl) {
        $prevEl = $(params.prevEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.prevEl === 'string'
          && $prevEl.length > 1
          && swiper.$el.find(params.prevEl).length === 1
        ) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on('click', swiper.navigation.onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on('click', swiper.navigation.onPrevClick);
      }

      Utils.extend(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;
      if ($nextEl && $nextEl.length) {
        $nextEl.off('click', swiper.navigation.onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off('click', swiper.navigation.onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    },
  };

  var Navigation$1 = {
    name: 'navigation',
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,

        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        navigation: {
          init: Navigation.init.bind(swiper),
          update: Navigation.update.bind(swiper),
          destroy: Navigation.destroy.bind(swiper),
          onNextClick: Navigation.onNextClick.bind(swiper),
          onPrevClick: Navigation.onPrevClick.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge: function toEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.navigation.destroy();
      },
      click: function click(e) {
        var swiper = this;
        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;
        if (
          swiper.params.navigation.hideOnClick
          && !$(e.target).is($prevEl)
          && !$(e.target).is($nextEl)
        ) {
          var isHidden;
          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }
          if (isHidden === true) {
            swiper.emit('navigationShow', swiper);
          } else {
            swiper.emit('navigationHide', swiper);
          }
          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      },
    },
  };

  var Pagination = {
    update: function update() {
      // Render || Update Pagination bullets/items
      var swiper = this;
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el;
      // Current/Total
      var current;
      var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
        if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
          current -= (slidesLength - (swiper.loopedSlides * 2));
        }
        if (current > total - 1) { current -= total; }
        if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      // Types
      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;
        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
          $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
            swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
            if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }
          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
        if ($el.length > 1) {
          bullets.each(function (index, bullet) {
            var $bullet = $(bullet);
            var bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(((params.bulletActiveClass) + "-main"));
              }
              if (bulletIndex === firstIndex) {
                $bullet
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev"))
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev-prev"));
              }
              if (bulletIndex === lastIndex) {
                $bullet
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next"))
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next-next"));
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);
            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(((params.bulletActiveClass) + "-main"));
            }
            $firstDisplayedBullet
              .prev()
              .addClass(((params.bulletActiveClass) + "-prev"))
              .prev()
              .addClass(((params.bulletActiveClass) + "-prev-prev"));
            $lastDisplayedBullet
              .next()
              .addClass(((params.bulletActiveClass) + "-next"))
              .next()
              .addClass(((params.bulletActiveClass) + "-next-next"));
          }
        }
        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
          var offsetProp = rtl ? 'right' : 'left';
          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
        }
      }
      if (params.type === 'fraction') {
        $el.find(("." + (params.currentClass))).text(params.formatFractionCurrent(current + 1));
        $el.find(("." + (params.totalClass))).text(params.formatFractionTotal(total));
      }
      if (params.type === 'progressbar') {
        var progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
      }
      if (params.type === 'custom' && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit('paginationRender', swiper, $el[0]);
      } else {
        swiper.emit('paginationUpdate', swiper, $el[0]);
      }
      $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    },
    render: function render() {
      // Render Container
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

      var $el = swiper.pagination.$el;
      var paginationHTML = '';
      if (params.type === 'bullets') {
        var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
      }
      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = "<span class=\"" + (params.currentClass) + "\"></span>"
          + ' / '
          + "<span class=\"" + (params.totalClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type !== 'custom') {
        swiper.emit('paginationRender', swiper.pagination.$el[0]);
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el) { return; }

      var $el = $(params.el);
      if ($el.length === 0) { return; }

      if (
        swiper.params.uniqueNavElements
        && typeof params.el === 'string'
        && $el.length > 1
        && swiper.$el.find(params.el).length === 1
      ) {
        $el = swiper.$el.find(params.el);
      }

      if (params.type === 'bullets' && params.clickable) {
        $el.addClass(params.clickableClass);
      }

      $el.addClass(params.modifierClass + params.type);

      if (params.type === 'bullets' && params.dynamicBullets) {
        $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
        swiper.pagination.dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }

      if (params.clickable) {
        $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
          e.preventDefault();
          var index = $(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop) { index += swiper.loopedSlides; }
          swiper.slideTo(index);
        });
      }

      Utils.extend(swiper.pagination, {
        $el: $el,
        el: $el[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var $el = swiper.pagination.$el;

      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
      if (params.clickable) {
        $el.off('click', ("." + (params.bulletClass)));
      }
    },
  };

  var Pagination$1 = {
    name: 'pagination',
    params: {
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function (number) { return number; },
        formatFractionTotal: function (number) { return number; },
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        modifierClass: 'swiper-pagination-', // NEW
        currentClass: 'swiper-pagination-current',
        totalClass: 'swiper-pagination-total',
        hiddenClass: 'swiper-pagination-hidden',
        progressbarFillClass: 'swiper-pagination-progressbar-fill',
        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
        clickableClass: 'swiper-pagination-clickable', // NEW
        lockClass: 'swiper-pagination-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        pagination: {
          init: Pagination.init.bind(swiper),
          render: Pagination.render.bind(swiper),
          update: Pagination.update.bind(swiper),
          destroy: Pagination.destroy.bind(swiper),
          dynamicBulletIndex: 0,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === 'undefined') {
          swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.pagination.destroy();
      },
      click: function click(e) {
        var swiper = this;
        if (
          swiper.params.pagination.el
          && swiper.params.pagination.hideOnClick
          && swiper.pagination.$el.length > 0
          && !$(e.target).hasClass(swiper.params.pagination.bulletClass)
        ) {
          var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
          if (isHidden === true) {
            swiper.emit('paginationShow', swiper);
          } else {
            swiper.emit('paginationHide', swiper);
          }
          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      },
    },
  };

  var Scrollbar = {
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var progress = swiper.progress;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;
      var params = swiper.params.scrollbar;

      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        if (Support.transforms3d) {
          $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
        } else {
          $dragEl.transform(("translateX(" + newPos + "px)"));
        }
        $dragEl[0].style.width = newSize + "px";
      } else {
        if (Support.transforms3d) {
          $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
        } else {
          $dragEl.transform(("translateY(" + newPos + "px)"));
        }
        $dragEl[0].style.height = newSize + "px";
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        swiper.scrollbar.timeout = setTimeout(function () {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }

      var scrollbar = swiper.scrollbar;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;

      $dragEl[0].style.width = '';
      $dragEl[0].style.height = '';
      var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

      var divider = swiper.size / swiper.virtualSize;
      var moveDivider = divider * (trackSize / swiper.size);
      var dragSize;
      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }

      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = dragSize + "px";
      } else {
        $dragEl[0].style.height = dragSize + "px";
      }

      if (divider >= 1) {
        $el[0].style.display = 'none';
      } else {
        $el[0].style.display = '';
      }
      if (swiper.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }
      Utils.extend(scrollbar, {
        trackSize: trackSize,
        divider: divider,
        moveDivider: moveDivider,
        dragSize: dragSize,
      });
      scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    },
    getPointerPosition: function getPointerPosition(e) {
      var swiper = this;
      if (swiper.isHorizontal()) {
        return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
      }
      return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
    },
    setDragPosition: function setDragPosition(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var $el = scrollbar.$el;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var dragStartPos = scrollbar.dragStartPos;

      var positionRatio;
      positionRatio = ((scrollbar.getPointerPosition(e)) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top']
        - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }

      var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;
      swiper.scrollbar.isTouched = true;
      swiper.scrollbar.dragStartPos = (e.target === $dragEl[0] || e.target === $dragEl)
        ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
      e.preventDefault();
      e.stopPropagation();

      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);

      clearTimeout(swiper.scrollbar.dragTimeout);

      $el.transition(0);
      if (params.hide) {
        $el.css('opacity', 1);
      }
      swiper.emit('scrollbarDragStart', e);
    },
    onDragMove: function onDragMove(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;

      if (!swiper.scrollbar.isTouched) { return; }
      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      swiper.emit('scrollbarDragMove', e);
    },
    onDragEnd: function onDragEnd(e) {
      var swiper = this;

      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $el = scrollbar.$el;

      if (!swiper.scrollbar.isTouched) { return; }
      swiper.scrollbar.isTouched = false;
      if (params.hide) {
        clearTimeout(swiper.scrollbar.dragTimeout);
        swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
          $el.css('opacity', 0);
          $el.transition(400);
        }, 1000);
      }
      swiper.emit('scrollbarDragEnd', e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    },
    enableDraggable: function enableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    disableDraggable: function disableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var $swiperEl = swiper.$el;
      var params = swiper.params.scrollbar;

      var $el = $(params.el);
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
        $el = $swiperEl.find(params.el);
      }

      var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
      if ($dragEl.length === 0) {
        $dragEl = $(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
        $el.append($dragEl);
      }

      Utils.extend(scrollbar, {
        $el: $el,
        el: $el[0],
        $dragEl: $dragEl,
        dragEl: $dragEl[0],
      });

      if (params.draggable) {
        scrollbar.enableDraggable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.disableDraggable();
    },
  };

  var Scrollbar$1 = {
    name: 'scrollbar',
    params: {
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        scrollbar: {
          init: Scrollbar.init.bind(swiper),
          destroy: Scrollbar.destroy.bind(swiper),
          updateSize: Scrollbar.updateSize.bind(swiper),
          setTranslate: Scrollbar.setTranslate.bind(swiper),
          setTransition: Scrollbar.setTransition.bind(swiper),
          enableDraggable: Scrollbar.enableDraggable.bind(swiper),
          disableDraggable: Scrollbar.disableDraggable.bind(swiper),
          setDragPosition: Scrollbar.setDragPosition.bind(swiper),
          getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
          onDragStart: Scrollbar.onDragStart.bind(swiper),
          onDragMove: Scrollbar.onDragMove.bind(swiper),
          onDragEnd: Scrollbar.onDragEnd.bind(swiper),
          isTouched: false,
          timeout: null,
          dragTimeout: null,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();
        swiper.scrollbar.setTranslate();
      },
      update: function update() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      resize: function resize() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        swiper.scrollbar.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.scrollbar.setTransition(duration);
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.destroy();
      },
    },
  };

  var Parallax = {
    setTransform: function setTransform(el, progress) {
      var swiper = this;
      var rtl = swiper.rtl;

      var $el = $(el);
      var rtlFactor = rtl ? -1 : 1;

      var p = $el.attr('data-swiper-parallax') || '0';
      var x = $el.attr('data-swiper-parallax-x');
      var y = $el.attr('data-swiper-parallax-y');
      var scale = $el.attr('data-swiper-parallax-scale');
      var opacity = $el.attr('data-swiper-parallax-opacity');

      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }

      if ((x).indexOf('%') >= 0) {
        x = (parseInt(x, 10) * progress * rtlFactor) + "%";
      } else {
        x = (x * progress * rtlFactor) + "px";
      }
      if ((y).indexOf('%') >= 0) {
        y = (parseInt(y, 10) * progress) + "%";
      } else {
        y = (y * progress) + "px";
      }

      if (typeof opacity !== 'undefined' && opacity !== null) {
        var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
        $el[0].style.opacity = currentOpacity;
      }
      if (typeof scale === 'undefined' || scale === null) {
        $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
      } else {
        var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
        $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      var progress = swiper.progress;
      var snapGrid = swiper.snapGrid;
      $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
        .each(function (index, el) {
          swiper.parallax.setTransform(el, progress);
        });
      slides.each(function (slideIndex, slideEl) {
        var slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
          .each(function (index, el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
      });
    },
    setTransition: function setTransition(duration) {
      if ( duration === void 0 ) duration = this.params.speed;

      var swiper = this;
      var $el = swiper.$el;
      $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
        .each(function (index, parallaxEl) {
          var $parallaxEl = $(parallaxEl);
          var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) { parallaxDuration = 0; }
          $parallaxEl.transition(parallaxDuration);
        });
    },
  };

  var Parallax$1 = {
    name: 'parallax',
    params: {
      parallax: {
        enabled: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        parallax: {
          setTransform: Parallax.setTransform.bind(swiper),
          setTranslate: Parallax.setTranslate.bind(swiper),
          setTransition: Parallax.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      init: function init() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTransition(duration);
      },
    },
  };

  var Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) { return 1; }
      var x1 = e.targetTouches[0].pageX;
      var y1 = e.targetTouches[0].pageY;
      var x2 = e.targetTouches[1].pageX;
      var y2 = e.targetTouches[1].pageY;
      var distance = Math.sqrt((Math.pow( (x2 - x1), 2 )) + (Math.pow( (y2 - y1), 2 )));
      return distance;
    },
    // Events
    onGestureStart: function onGestureStart(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
      if (!Support.gestures) {
        if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest('.swiper-slide');
        if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }
      gesture.$imageEl.transition(0);
      swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (Support.gestures) {
        zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
      }
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = (gesture.maxRatio - 1) + (Math.pow( ((zoom.scale - gesture.maxRatio) + 1), 0.5 ));
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = (params.minRatio + 1) - (Math.pow( ((params.minRatio - zoom.scale) + 1), 0.5 ));
      }
      gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    onGestureEnd: function onGestureEnd(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }
        if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
          return;
        }
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;
      if (zoom.scale === 1) { gesture.$slideEl = undefined; }
    },
    onTouchStart: function onTouchStart(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (image.isTouched) { return; }
      if (Device.android) { e.preventDefault(); }
      image.isTouched = true;
      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) { return; }

      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
        image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);
        if (swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      }
      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;

      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }

      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;

      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

      if (!image.isMoved && !zoom.isScaling) {
        if (
          swiper.isHorizontal()
          && (
            (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
            || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
          )
        ) {
          image.isTouched = false;
          return;
        } if (
          !swiper.isHorizontal()
          && (
            (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
            || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
          )
        ) {
          image.isTouched = false;
          return;
        }
      }
      e.preventDefault();
      e.stopPropagation();

      image.isMoved = true;
      image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
      image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

      if (image.currentX < image.minX) {
        image.currentX = (image.minX + 1) - (Math.pow( ((image.minX - image.currentX) + 1), 0.8 ));
      }
      if (image.currentX > image.maxX) {
        image.currentX = (image.maxX - 1) + (Math.pow( ((image.currentX - image.maxX) + 1), 0.8 ));
      }

      if (image.currentY < image.minY) {
        image.currentY = (image.minY + 1) - (Math.pow( ((image.minY - image.currentY) + 1), 0.8 ));
      }
      if (image.currentY > image.maxY) {
        image.currentY = (image.maxY - 1) + (Math.pow( ((image.currentY - image.maxY) + 1), 0.8 ));
      }

      // Velocity
      if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
      if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
      if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();

      gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTouchEnd: function onTouchEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      var momentumDurationX = 300;
      var momentumDurationY = 300;
      var momentumDistanceX = velocity.x * momentumDurationX;
      var newPositionX = image.currentX + momentumDistanceX;
      var momentumDistanceY = velocity.y * momentumDurationY;
      var newPositionY = image.currentY + momentumDistanceY;

      // Fix duration
      if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
      if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

      image.currentX = newPositionX;
      image.currentY = newPositionY;

      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

      gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTransitionEnd: function onTransitionEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');

        zoom.scale = 1;
        zoom.currentScale = 1;

        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    },
    // Toggle Zoom
    toggle: function toggle(e) {
      var swiper = this;
      var zoom = swiper.zoom;

      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoom.out();
      } else {
        // Zoom In
        zoom.in(e);
      }
    },
    in: function in$1(e) {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));

      var touchX;
      var touchY;
      var offsetX;
      var offsetY;
      var diffX;
      var diffY;
      var translateX;
      var translateY;
      var imageWidth;
      var imageHeight;
      var scaledWidth;
      var scaledHeight;
      var translateMinX;
      var translateMinY;
      var translateMaxX;
      var translateMaxY;
      var slideWidth;
      var slideHeight;

      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }

      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left;
        offsetY = gesture.$slideEl.offset().top;
        diffX = (offsetX + (slideWidth / 2)) - touchX;
        diffY = (offsetY + (slideHeight / 2)) - touchY;

        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;

        translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
        translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;

        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;

        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }

        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
      gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    out: function out() {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
      gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
      gesture.$slideEl = undefined;
    },
    // Attach/Detach Events
    enable: function enable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (zoom.enabled) { return; }
      zoom.enabled = true;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      }

      // Move image
      swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
    },
    disable: function disable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (!zoom.enabled) { return; }

      swiper.zoom.enabled = false;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      }

      // Move image
      swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
    },
  };

  var Zoom$1 = {
    name: 'zoom',
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed',
      },
    },
    create: function create() {
      var swiper = this;
      var zoom = {
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3,
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {},
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined,
        },
      };

      ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
        zoom[methodName] = Zoom[methodName].bind(swiper);
      });
      Utils.extend(swiper, {
        zoom: zoom,
      });

      var scale = 1;
      Object.defineProperty(swiper.zoom, 'scale', {
        get: function get() {
          return scale;
        },
        set: function set(value) {
          if (scale !== value) {
            var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
            var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
            swiper.emit('zoomChange', value, imageEl, slideEl);
          }
          scale = value;
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.zoom.enabled) {
          swiper.zoom.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.zoom.disable();
      },
      touchStart: function touchStart(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        var swiper = this;
        if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          swiper.zoom.toggle(e);
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          swiper.zoom.onTransitionEnd();
        }
      },
    },
  };

  var Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
      if ( loadInDuplicate === void 0 ) loadInDuplicate = true;

      var swiper = this;
      var params = swiper.params.lazy;
      if (typeof index === 'undefined') { return; }
      if (swiper.slides.length === 0) { return; }
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      var $slideEl = isVirtual
        ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]"))
        : swiper.slides.eq(index);

      var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
        $images = $images.add($slideEl[0]);
      }
      if ($images.length === 0) { return; }

      $images.each(function (imageIndex, imageEl) {
        var $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);

        var background = $imageEl.attr('data-background');
        var src = $imageEl.attr('data-src');
        var srcset = $imageEl.attr('data-srcset');
        var sizes = $imageEl.attr('data-sizes');

        swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function () {
          if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) { return; }
          if (background) {
            $imageEl.css('background-image', ("url(\"" + background + "\")"));
            $imageEl.removeAttr('data-background');
          } else {
            if (srcset) {
              $imageEl.attr('srcset', srcset);
              $imageEl.removeAttr('data-srcset');
            }
            if (sizes) {
              $imageEl.attr('sizes', sizes);
              $imageEl.removeAttr('data-sizes');
            }
            if (src) {
              $imageEl.attr('src', src);
              $imageEl.removeAttr('data-src');
            }
          }

          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
          $slideEl.find(("." + (params.preloaderClass))).remove();
          if (swiper.params.loop && loadInDuplicate) {
            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
              var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
              swiper.lazy.loadInSlide(originalSlide.index(), false);
            } else {
              var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
              swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
            }
          }
          swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
        });

        swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
      });
    },
    load: function load() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var swiperParams = swiper.params;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      var params = swiperParams.lazy;

      var slidesPerView = swiperParams.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = 0;
      }

      function slideExist(index) {
        if (isVirtual) {
          if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
            return true;
          }
        } else if (slides[index]) { return true; }
        return false;
      }
      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr('data-swiper-slide-index');
        }
        return $(slideEl).index();
      }

      if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
      if (swiper.params.watchSlidesVisibility) {
        $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function (elIndex, slideEl) {
          var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
          swiper.lazy.loadInSlide(index);
        });
      } else if (slidesPerView > 1) {
        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) { swiper.lazy.loadInSlide(i); }
        }
      } else {
        swiper.lazy.loadInSlide(activeIndex);
      }
      if (params.loadPrevNext) {
        if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
          var amount = params.loadPrevNextAmount;
          var spv = slidesPerView;
          var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
          // Next Slides
          for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
            if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); }
          }
          // Prev Slides
          for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
            if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); }
          }
        } else {
          var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
          if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }

          var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
          if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
        }
      }
    },
  };

  var Lazy$1 = {
    name: 'lazy',
    params: {
      lazy: {
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,

        elementClass: 'swiper-lazy',
        loadingClass: 'swiper-lazy-loading',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        lazy: {
          initialImageLoaded: false,
          load: Lazy.load.bind(swiper),
          loadInSlide: Lazy.loadInSlide.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      },
      init: function init() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
          swiper.lazy.load();
        }
      },
      scroll: function scroll() {
        var swiper = this;
        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
          swiper.lazy.load();
        }
      },
      resize: function resize() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      scrollbarDragMove: function scrollbarDragMove() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      transitionStart: function transitionStart() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
            swiper.lazy.load();
          }
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
          swiper.lazy.load();
        }
      },
    },
  };

  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

  var Controller = {
    LinearSpline: function LinearSpline(x, y) {
      var binarySearch = (function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      }());
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.
      var i1;
      var i3;

      this.interpolate = function interpolate(x2) {
        if (!x2) { return 0; }

        // Get the indexes of x1 and x3 (the array indexes before and after given x2):
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;

        // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
        return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
      };
      return this;
    },
    // xxx: for now i will just save one spline function to to
    getInterpolateFunction: function getInterpolateFunction(c) {
      var swiper = this;
      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop
          ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
          : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate: function setTranslate(setTranslate$1, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var multiplier;
      var controlledTranslate;
      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === 'slide') {
          swiper.controller.getInterpolateFunction(c);
          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out
          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }

        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
        }

        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var i;
      function setControlledTransition(c) {
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            Utils.nextTick(function () {
              c.updateAutoHeight();
            });
          }
          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) { return; }
            if (c.params.loop && swiper.params.controller.by === 'slide') {
              c.loopFix();
            }
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    },
  };
  var Controller$1 = {
    name: 'controller',
    params: {
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide', // or 'container'
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        controller: {
          control: swiper.params.controller.control,
          getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
          setTranslate: Controller.setTranslate.bind(swiper),
          setTransition: Controller.setTransition.bind(swiper),
        },
      });
    },
    on: {
      update: function update() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      setTranslate: function setTranslate(translate, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTranslate(translate, byController);
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTransition(duration, byController);
      },
    },
  };

  var a11y = {
    makeElFocusable: function makeElFocusable($el) {
      $el.attr('tabIndex', '0');
      return $el;
    },
    addElRole: function addElRole($el, role) {
      $el.attr('role', role);
      return $el;
    },
    addElLabel: function addElLabel($el, label) {
      $el.attr('aria-label', label);
      return $el;
    },
    disableEl: function disableEl($el) {
      $el.attr('aria-disabled', true);
      return $el;
    },
    enableEl: function enableEl($el) {
      $el.attr('aria-disabled', false);
      return $el;
    },
    onEnterKey: function onEnterKey(e) {
      var swiper = this;
      var params = swiper.params.a11y;
      if (e.keyCode !== 13) { return; }
      var $targetEl = $(e.target);
      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          swiper.a11y.notify(params.lastSlideMessage);
        } else {
          swiper.a11y.notify(params.nextSlideMessage);
        }
      }
      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          swiper.a11y.notify(params.firstSlideMessage);
        } else {
          swiper.a11y.notify(params.prevSlideMessage);
        }
      }
      if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
        $targetEl[0].click();
      }
    },
    notify: function notify(message) {
      var swiper = this;
      var notification = swiper.a11y.liveRegion;
      if (notification.length === 0) { return; }
      notification.html('');
      notification.html(message);
    },
    updateNavigation: function updateNavigation() {
      var swiper = this;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          swiper.a11y.disableEl($prevEl);
        } else {
          swiper.a11y.enableEl($prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          swiper.a11y.disableEl($nextEl);
        } else {
          swiper.a11y.enableEl($nextEl);
        }
      }
    },
    updatePagination: function updatePagination() {
      var swiper = this;
      var params = swiper.params.a11y;
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
          var $bulletEl = $(bulletEl);
          swiper.a11y.makeElFocusable($bulletEl);
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
        });
      }
    },
    init: function init() {
      var swiper = this;

      swiper.$el.append(swiper.a11y.liveRegion);

      // Navigation
      var params = swiper.params.a11y;
      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        swiper.a11y.makeElFocusable($nextEl);
        swiper.a11y.addElRole($nextEl, 'button');
        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        $nextEl.on('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        swiper.a11y.makeElFocusable($prevEl);
        swiper.a11y.addElRole($prevEl, 'button');
        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        $prevEl.on('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }

      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        $nextEl.off('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        $prevEl.off('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
  };
  var A11y = {
    name: 'a11y',
    params: {
      a11y: {
        enabled: true,
        notificationClass: 'swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        a11y: {
          liveRegion: $(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
        },
      });
      Object.keys(a11y).forEach(function (methodName) {
        swiper.a11y[methodName] = a11y[methodName].bind(swiper);
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.init();
        swiper.a11y.updateNavigation();
      },
      toEdge: function toEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updatePagination();
      },
      destroy: function destroy() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.destroy();
      },
    },
  };

  var History = {
    init: function init() {
      var swiper = this;
      if (!swiper.params.history) { return; }
      if (!win.history || !win.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      var history = swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues();
      if (!history.paths.key && !history.paths.value) { return; }
      history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        win.addEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (!swiper.params.history.replaceState) {
        win.removeEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    setHistoryPopState: function setHistoryPopState() {
      var swiper = this;
      swiper.history.paths = History.getPathValues();
      swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
    },
    getPathValues: function getPathValues() {
      var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) { return part !== ''; });
      var total = pathArray.length;
      var key = pathArray[total - 2];
      var value = pathArray[total - 1];
      return { key: key, value: value };
    },
    setHistory: function setHistory(key, index) {
      var swiper = this;
      if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
      var slide = swiper.slides.eq(index);
      var value = History.slugify(slide.attr('data-history'));
      if (!win.location.pathname.includes(key)) {
        value = key + "/" + value;
      }
      var currentState = win.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        win.history.replaceState({ value: value }, null, value);
      } else {
        win.history.pushState({ value: value }, null, value);
      }
    },
    slugify: function slugify(text) {
      return text.toString()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
      var swiper = this;
      if (value) {
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHistory = History.slugify(slide.attr('data-history'));
          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    },
  };

  var History$1 = {
    name: 'history',
    params: {
      history: {
        enabled: false,
        replaceState: false,
        key: 'slides',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        history: {
          init: History.init.bind(swiper),
          setHistory: History.setHistory.bind(swiper),
          setHistoryPopState: History.setHistoryPopState.bind(swiper),
          scrollToSlide: History.scrollToSlide.bind(swiper),
          destroy: History.destroy.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.history.initialized) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      },
    },
  };

  var HashNavigation = {
    onHashCange: function onHashCange() {
      var swiper = this;
      var newHash = doc.location.hash.replace('#', '');
      var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
      if (newHash !== activeSlideHash) {
        var newIndex = swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index();
        if (typeof newIndex === 'undefined') { return; }
        swiper.slideTo(newIndex);
      }
    },
    setHash: function setHash() {
      var swiper = this;
      if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
      if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
        win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || false));
      } else {
        var slide = swiper.slides.eq(swiper.activeIndex);
        var hash = slide.attr('data-hash') || slide.attr('data-history');
        doc.location.hash = hash || '';
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
      swiper.hashNavigation.initialized = true;
      var hash = doc.location.hash.replace('#', '');
      if (hash) {
        var speed = 0;
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHash = slide.attr('data-hash') || slide.attr('data-history');
          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
          }
        }
      }
      if (swiper.params.hashNavigation.watchState) {
        $(win).on('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.params.hashNavigation.watchState) {
        $(win).off('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
  };
  var HashNavigation$1 = {
    name: 'hash-navigation',
    params: {
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        hashNavigation: {
          initialized: false,
          init: HashNavigation.init.bind(swiper),
          destroy: HashNavigation.destroy.bind(swiper),
          setHash: HashNavigation.setHash.bind(swiper),
          onHashCange: HashNavigation.onHashCange.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.hashNavigation.initialized) {
          swiper.hashNavigation.setHash();
        }
      },
    },
  };

  /* eslint no-underscore-dangle: "off" */

  var Autoplay = {
    run: function run() {
      var swiper = this;
      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      var delay = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr('data-swiper-autoplay')) {
        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
      }
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = Utils.nextTick(function () {
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isBeginning) {
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isEnd) {
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      }, delay);
    },
    start: function start() {
      var swiper = this;
      if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
      if (swiper.autoplay.running) { return false; }
      swiper.autoplay.running = true;
      swiper.emit('autoplayStart');
      swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      var swiper = this;
      if (!swiper.autoplay.running) { return false; }
      if (typeof swiper.autoplay.timeout === 'undefined') { return false; }

      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = undefined;
      }
      swiper.autoplay.running = false;
      swiper.emit('autoplayStop');
      return true;
    },
    pause: function pause(speed) {
      var swiper = this;
      if (!swiper.autoplay.running) { return; }
      if (swiper.autoplay.paused) { return; }
      if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
      }
    },
  };

  var Autoplay$1 = {
    name: 'autoplay',
    params: {
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        autoplay: {
          running: false,
          paused: false,
          run: Autoplay.run.bind(swiper),
          start: Autoplay.start.bind(swiper),
          stop: Autoplay.stop.bind(swiper),
          pause: Autoplay.pause.bind(swiper),
          onTransitionEnd: function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            swiper.autoplay.paused = false;
            if (!swiper.autoplay.running) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.run();
            }
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
        }
      },
      beforeTransitionStart: function beforeTransitionStart(speed, internal) {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove() {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
      },
    },
  };

  var Fade = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = swiper.slides.eq(i);
        var offset = $slideEl[0].swiperSlideOffset;
        var tx = -offset;
        if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        var slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl
          .css({
            opacity: slideOpacity,
          })
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        slides.transitionEnd(function () {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFade = {
    name: 'effect-fade',
    params: {
      fadeEffect: {
        crossFade: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        fadeEffect: {
          setTranslate: Fade.setTranslate.bind(swiper),
          setTransition: Fade.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTransition(duration);
      },
    },
  };

  var Cube = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var rtl = swiper.rtlTranslate;
      var swiperSize = swiper.size;
      var params = swiper.params.cubeEffect;
      var isHorizontal = swiper.isHorizontal();
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var wrapperRotate = 0;
      var $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({ height: (swiperWidth + "px") });
        } else {
          $cubeShadowEl = $el.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
        }
        var slideAngle = slideIndex * 90;
        var round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        var tx = 0;
        var ty = 0;
        var tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + (round * 4 * swiperSize);
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = (3 * swiperSize) + (swiperSize * 4 * round);
        }
        if (rtl) {
          tx = -tx;
        }

        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }

        var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
        if (progress <= 1 && progress > -1) {
          wrapperRotate = (slideIndex * 90) + (progress * 90);
          if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); }
        }
        $slideEl.transform(transform);
        if (params.slideShadows) {
          // Set shadows
          var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
      }
      $wrapperEl.css({
        '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
      });

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
        } else {
          var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
          var multiplier = 1.5 - (
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
            + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
          );
          var scale1 = params.shadowScale;
          var scale2 = params.shadowScale / multiplier;
          var offset = params.shadowOffset;
          $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
        }
      }
      var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
      $wrapperEl
        .transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find('.swiper-cube-shadow').transition(duration);
      }
    },
  };

  var EffectCube = {
    name: 'effect-cube',
    params: {
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        cubeEffect: {
          setTranslate: Cube.setTranslate.bind(swiper),
          setTransition: Cube.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTransition(duration);
      },
    },
  };

  var Flip = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      var rtl = swiper.rtlTranslate;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        var offset = $slideEl[0].swiperSlideOffset;
        var rotate = -180 * progress;
        var rotateY = rotate;
        var rotateX = 0;
        var tx = -offset;
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }

        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

        if (swiper.params.flipEffect.slideShadows) {
          // Set shadows
          var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
        $slideEl
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var $wrapperEl = swiper.$wrapperEl;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        // eslint-disable-next-line
        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFlip = {
    name: 'effect-flip',
    params: {
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        flipEffect: {
          setTranslate: Flip.setTranslate.bind(swiper),
          setTransition: Flip.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTransition(duration);
      },
    },
  };

  var Coverflow = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      var slidesSizesGrid = swiper.slidesSizesGrid;
      var params = swiper.params.coverflowEffect;
      var isHorizontal = swiper.isHorizontal();
      var transform = swiper.translate;
      var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
      var rotate = isHorizontal ? params.rotate : -params.rotate;
      var translate = params.depth;
      // Each slide offset from center
      for (var i = 0, length = slides.length; i < length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideSize = slidesSizesGrid[i];
        var slideOffset = $slideEl[0].swiperSlideOffset;
        var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        var translateZ = -translate * Math.abs(offsetMultiplier);

        var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
        var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

        // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) { translateX = 0; }
        if (Math.abs(translateY) < 0.001) { translateY = 0; }
        if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
        if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
        if (Math.abs(rotateX) < 0.001) { rotateX = 0; }

        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
          if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
        }
      }

      // Set correct perspective for IE10
      if (Support.pointerEvents || Support.prefixedPointerEvents) {
        var ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = center + "px 50%";
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
    },
  };

  var EffectCoverflow = {
    name: 'effect-coverflow',
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        coverflowEffect: {
          setTranslate: Coverflow.setTranslate.bind(swiper),
          setTransition: Coverflow.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }

        swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTransition(duration);
      },
    },
  };

  var Thumbs = {
    init: function init() {
      var swiper = this;
      var ref = swiper.params;
      var thumbsParams = ref.thumbs;
      var SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Utils.extend(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        Utils.extend(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
      } else if (Utils.isObject(thumbsParams.swiper)) {
        swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        }));
        swiper.thumbs.swiperCreated = true;
      }
      swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    },
    onThumbClick: function onThumbClick() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) { return; }
      var clickedIndex = thumbsSwiper.clickedIndex;
      var clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) { return; }
      if (typeof clickedIndex === 'undefined' || clickedIndex === null) { return; }
      var slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        var currentIndex = swiper.activeIndex;
        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
          swiper.loopFix();
          // eslint-disable-next-line
          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }
        var prevIndex = swiper.slides.eq(currentIndex).prevAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
        var nextIndex = swiper.slides.eq(currentIndex).nextAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
        if (typeof prevIndex === 'undefined') { slideToIndex = nextIndex; }
        else if (typeof nextIndex === 'undefined') { slideToIndex = prevIndex; }
        else if (nextIndex - currentIndex < currentIndex - prevIndex) { slideToIndex = nextIndex; }
        else { slideToIndex = prevIndex; }
      }
      swiper.slideTo(slideToIndex);
    },
    update: function update(initial) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) { return; }

      var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
        ? thumbsSwiper.slidesPerViewDynamic()
        : thumbsSwiper.params.slidesPerView;

      if (swiper.realIndex !== thumbsSwiper.realIndex) {
        var currentThumbsIndex = thumbsSwiper.activeIndex;
        var newThumbsIndex;
        if (thumbsSwiper.params.loop) {
          if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
            thumbsSwiper.loopFix();
            // eslint-disable-next-line
            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          }
          // Find actual thumbs index to slide to
          var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
          var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
          if (typeof prevThumbsIndex === 'undefined') { newThumbsIndex = nextThumbsIndex; }
          else if (typeof nextThumbsIndex === 'undefined') { newThumbsIndex = prevThumbsIndex; }
          else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = currentThumbsIndex; }
          else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = nextThumbsIndex; }
          else { newThumbsIndex = prevThumbsIndex; }
        } else {
          newThumbsIndex = swiper.realIndex;
        }
        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
          }
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }

      // Activate thumbs
      var thumbsToActivate = 1;
      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }

      thumbsSwiper.slides.removeClass(thumbActiveClass);
      if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual) {
        for (var i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]")).addClass(thumbActiveClass);
        }
      } else {
        for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
          thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
        }
      }
    },
  };
  var Thumbs$1 = {
    name: 'thumbs',
    params: {
      thumbs: {
        swiper: null,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-container-thumbs',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        thumbs: {
          swiper: null,
          init: Thumbs.init.bind(swiper),
          update: Thumbs.update.bind(swiper),
          onThumbClick: Thumbs.onThumbClick.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        var ref = swiper.params;
        var thumbs = ref.thumbs;
        if (!thumbs || !thumbs.swiper) { return; }
        swiper.thumbs.init();
        swiper.thumbs.update(true);
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      update: function update() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        thumbsSwiper.setTransition(duration);
      },
      beforeDestroy: function beforeDestroy() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      },
    },
  };

  // Swiper Class

  var components = [
    Device$1,
    Support$1,
    Browser$1,
    Resize,
    Observer$1,
    Virtual$1,
    Keyboard$1,
    Mousewheel$1,
    Navigation$1,
    Pagination$1,
    Scrollbar$1,
    Parallax$1,
    Zoom$1,
    Lazy$1,
    Controller$1,
    A11y,
    History$1,
    HashNavigation$1,
    Autoplay$1,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    Thumbs$1
  ];

  if (typeof Swiper.use === 'undefined') {
    Swiper.use = Swiper.Class.use;
    Swiper.installModule = Swiper.Class.installModule;
  }

  Swiper.use(components);

  return Swiper;

}));


/***/ }),

/***/ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! swiper/dist/js/swiper.js */ "./node_modules/swiper/dist/js/swiper.js")):undefined}(this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=4)}([function(t,n){t.exports=e},function(e,t){e.exports=function(e,t,n,i,s,r){var o,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(o=e,a=e.default);var p="function"==typeof a?a.options:a;t&&(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0),n&&(p.functional=!0),s&&(p._scopeId=s);var l;if(r?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},p._ssrRegister=l):i&&(l=i),l){var c=p.functional,d=c?p.render:p.beforeCreate;c?(p._injectStyles=l,p.render=function(e,t){return l.call(t),d(e,t)}):p.beforeCreate=d?[].concat(d,l):[l]}return{esModule:o,exports:a,options:p}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),s=n.n(i),r=n(8),o=n(1),a=o(s.a,r.a,!1,null,null,null);t.default=a.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),s=n.n(i),r=n(7),o=n(1),a=o(s.a,r.a,!1,null,null,null);t.default=a.exports},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.install=t.swiperSlide=t.swiper=t.Swiper=void 0;var s=n(0),r=i(s),o=n(2),a=i(o),u=n(3),p=i(u),l=window.Swiper||r.default,c=p.default,d=a.default,f=function(e,t){t&&(p.default.props.globalOptions.default=function(){return t}),e.component(p.default.name,p.default),e.component(a.default.name,a.default)},h={Swiper:l,swiper:c,swiperSlide:d,install:f};t.default=h,t.Swiper=l,t.swiper=c,t.swiperSlide=d,t.install=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent&&this.$parent.options&&this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.update()}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(i),r=window.Swiper||s.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),i=1;i<arguments.length;i++){var s=arguments[i];if(null!=s)for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},writable:!0,configurable:!0});var o=["beforeDestroy","slideChange","slideChangeTransitionStart","slideChangeTransitionEnd","slideNextTransitionStart","slideNextTransitionEnd","slidePrevTransitionStart","slidePrevTransitionEnd","transitionStart","transitionEnd","touchStart","touchMove","touchMoveOpposite","sliderMove","touchEnd","click","tap","doubleTap","imagesReady","progress","reachBeginning","reachEnd","fromEdge","setTranslate","setTransition","resize"];t.default={name:"swiper",props:{options:{type:Object,default:function(){return{}}},globalOptions:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{swiper:null,classes:{wrapperClass:"swiper-wrapper"}}},ready:function(){this.swiper||this.mountInstance()},mounted:function(){if(!this.swiper){var e=!1;for(var t in this.classes)this.classes.hasOwnProperty(t)&&this.options[t]&&(e=!0,this.classes[t]=this.options[t]);e?this.$nextTick(this.mountInstance):this.mountInstance()}},activated:function(){this.update()},updated:function(){this.update()},beforeDestroy:function(){this.$nextTick(function(){this.swiper&&(this.swiper.destroy&&this.swiper.destroy(),delete this.swiper)})},methods:{update:function(){this.swiper&&(this.swiper.update&&this.swiper.update(),this.swiper.navigation&&this.swiper.navigation.update(),this.swiper.pagination&&this.swiper.pagination.render(),this.swiper.pagination&&this.swiper.pagination.update())},mountInstance:function(){var e=Object.assign({},this.globalOptions,this.options);this.swiper=new r(this.$el,e),this.bindEvents(),this.$emit("ready",this.swiper)},bindEvents:function(){var e=this,t=this;o.forEach(function(n){e.swiper.on(n,function(){t.$emit.apply(t,[n].concat(Array.prototype.slice.call(arguments))),t.$emit.apply(t,[n.replace(/([A-Z])/g,"-$1").toLowerCase()].concat(Array.prototype.slice.call(arguments)))})})}}}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swiper-container"},[e._t("parallax-bg"),e._v(" "),n("div",{class:e.classes.wrapperClass},[e._t("default")],2),e._v(" "),e._t("pagination"),e._v(" "),e._t("button-prev"),e._v(" "),e._t("button-next"),e._v(" "),e._t("scrollbar")],2)},s=[],r={render:i,staticRenderFns:s};t.a=r},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.slideClass},[e._t("default")],2)},s=[],r={render:i,staticRenderFns:s};t.a=r}])});

/***/ }),

/***/ "./node_modules/vue-image-lightbox-carousel/src/App.vue":
/*!**************************************************************!*\
  !*** ./node_modules/vue-image-lightbox-carousel/src/App.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_61e9b30f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=61e9b30f&scoped=true */ "./node_modules/vue-image-lightbox-carousel/src/App.vue?vue&type=template&id=61e9b30f&scoped=true");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./node_modules/vue-image-lightbox-carousel/src/App.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_61e9b30f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_61e9b30f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "61e9b30f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-image-lightbox-carousel/src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-image-lightbox-carousel/src/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./node_modules/vue-image-lightbox-carousel/src/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../cache-loader/dist/cjs.js??ref--13-0!../../babel-loader/lib!../../cache-loader/dist/cjs.js??ref--1-0!../../vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-image-lightbox-carousel/src/App.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-image-lightbox-carousel/src/App.vue?vue&type=template&id=61e9b30f&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vue-image-lightbox-carousel/src/App.vue?vue&type=template&id=61e9b30f&scoped=true ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_vue_loader_lib_loaders_templateLoader_js_ref_6_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_61e9b30f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../cache-loader/dist/cjs.js??ref--13-0!../../babel-loader/lib!../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../cache-loader/dist/cjs.js??ref--1-0!../../vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=61e9b30f&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-image-lightbox-carousel/src/App.vue?vue&type=template&id=61e9b30f&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_vue_loader_lib_loaders_templateLoader_js_ref_6_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_61e9b30f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_vue_loader_lib_loaders_templateLoader_js_ref_6_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_61e9b30f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-image-lightbox-carousel/src/assets/loading.gif":
/*!*************************************************************************!*\
  !*** ./node_modules/vue-image-lightbox-carousel/src/assets/loading.gif ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loading.fd42f6cb.gif";

/***/ }),

/***/ "./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue":
/*!**********************************************************************************************!*\
  !*** ./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VueImageLightboxCarousel_vue_vue_type_template_id_1884afde_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueImageLightboxCarousel.vue?vue&type=template&id=1884afde&scoped=true */ "./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=template&id=1884afde&scoped=true");
/* harmony import */ var _VueImageLightboxCarousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VueImageLightboxCarousel.vue?vue&type=script&lang=js */ "./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _VueImageLightboxCarousel_vue_vue_type_style_index_0_id_1884afde_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VueImageLightboxCarousel.vue?vue&type=style&index=0&id=1884afde&lang=css&scoped=true */ "./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=style&index=0&id=1884afde&lang=css&scoped=true");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VueImageLightboxCarousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _VueImageLightboxCarousel_vue_vue_type_template_id_1884afde_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _VueImageLightboxCarousel_vue_vue_type_template_id_1884afde_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1884afde",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueImageLightboxCarousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../cache-loader/dist/cjs.js??ref--13-0!../../../babel-loader/lib!../../../cache-loader/dist/cjs.js??ref--1-0!../../../vue-loader/lib??vue-loader-options!./VueImageLightboxCarousel.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueImageLightboxCarousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=style&index=0&id=1884afde&lang=css&scoped=true":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=style&index=0&id=1884afde&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueImageLightboxCarousel_vue_vue_type_style_index_0_id_1884afde_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-style-loader??ref--7-oneOf-1-0!../../../css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/src??ref--7-oneOf-1-2!../../../cache-loader/dist/cjs.js??ref--1-0!../../../vue-loader/lib??vue-loader-options!./VueImageLightboxCarousel.vue?vue&type=style&index=0&id=1884afde&lang=css&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=style&index=0&id=1884afde&lang=css&scoped=true");
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueImageLightboxCarousel_vue_vue_type_style_index_0_id_1884afde_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueImageLightboxCarousel_vue_vue_type_style_index_0_id_1884afde_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueImageLightboxCarousel_vue_vue_type_style_index_0_id_1884afde_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueImageLightboxCarousel_vue_vue_type_style_index_0_id_1884afde_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=template&id=1884afde&scoped=true":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=template&id=1884afde&scoped=true ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_vue_loader_lib_loaders_templateLoader_js_ref_6_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueImageLightboxCarousel_vue_vue_type_template_id_1884afde_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../cache-loader/dist/cjs.js??ref--13-0!../../../babel-loader/lib!../../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../../cache-loader/dist/cjs.js??ref--1-0!../../../vue-loader/lib??vue-loader-options!./VueImageLightboxCarousel.vue?vue&type=template&id=1884afde&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=template&id=1884afde&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_vue_loader_lib_loaders_templateLoader_js_ref_6_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueImageLightboxCarousel_vue_vue_type_template_id_1884afde_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_vue_loader_lib_loaders_templateLoader_js_ref_6_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueImageLightboxCarousel_vue_vue_type_template_id_1884afde_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-image-lightbox-carousel/src/main.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-image-lightbox-carousel/src/main.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./node_modules/vue-image-lightbox-carousel/src/App.vue");
/* harmony import */ var _components_VueImageLightboxCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/VueImageLightboxCarousel */ "./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue");
/* harmony import */ var vue_lazyload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-lazyload */ "./node_modules/vue-lazyload/vue-lazyload.esm.js");
/* harmony import */ var _assets_loading_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/loading.gif */ "./node_modules/vue-image-lightbox-carousel/src/assets/loading.gif");
/* harmony import */ var _assets_loading_gif__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_loading_gif__WEBPACK_IMPORTED_MODULE_4__);






vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_lazyload__WEBPACK_IMPORTED_MODULE_3__["default"], {
  preLoad: 1.3,
  loading: _assets_loading_gif__WEBPACK_IMPORTED_MODULE_4___default.a,
  attempt: 1
})

// if (document.querySelector('#my-strictly-unique-vue-image-lightbox-carousel')) {
//   Vue.component('VueImageLightboxCarousel', VueImageLightboxCarousel)

//   new Vue({
//     el: '#my-strictly-unique-vue-image-lightbox-carousel',
//     render: h => h(App)
//   })
// }

/* harmony default export */ __webpack_exports__["default"] = (_components_VueImageLightboxCarousel__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./node_modules/vue-popperjs/dist/css/vue-popper.css":
/*!***********************************************************!*\
  !*** ./node_modules/vue-popperjs/dist/css/vue-popper.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--7-oneOf-3-1!../../../postcss-loader/src??ref--7-oneOf-3-2!./vue-popper.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-popperjs/dist/css/vue-popper.css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4129faf1", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-popperjs/dist/js/vue-popper.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue-popperjs/dist/js/vue-popper.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :
  undefined;
}(this, (function (Popper) { 'use strict';

  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  //

  function on(element, event, handler) {
    if (element && event && handler) {
      document.addEventListener ? element.addEventListener(event, handler, false) : element.attachEvent('on' + event, handler);
    }
  }

  function off(element, event, handler) {
    if (element && event) {
      document.removeEventListener ? element.removeEventListener(event, handler, false) : element.detachEvent('on' + event, handler);
    }
  }

  var script = {
    props: {
      trigger: {
        type: String,
        default: 'hover',
        validator: function validator(value) {
          return ['click', 'hover'].indexOf(value) > -1;
        }
      },
      delayOnMouseOver: {
        type: Number,
        default: 10
      },
      delayOnMouseOut: {
        type: Number,
        default: 10
      },
      disabled: {
        type: Boolean,
        default: false
      },
      content: String,
      enterActiveClass: String,
      leaveActiveClass: String,
      boundariesSelector: String,
      reference: {},
      forceShow: {
        type: Boolean,
        default: false
      },
      dataValue: {
        default: null
      },
      appendToBody: {
        type: Boolean,
        default: false
      },
      visibleArrow: {
        type: Boolean,
        default: true
      },
      transition: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    },

    data: function data() {
      return {
        referenceElm: null,
        popperJS: null,
        showPopper: false,
        currentPlacement: '',
        popperOptions: {
          placement: 'bottom',
          computeStyle: {
            gpuAcceleration: false
          }
        }
      };
    },


    watch: {
      showPopper: function showPopper(value) {
        if (value) {
          this.$emit('show', this);
          if (this.popperJS) {
            this.popperJS.enableEventListeners();
          }
          this.updatePopper();
        } else {
          if (this.popperJS) {
            this.popperJS.disableEventListeners();
          }
          this.$emit('hide', this);
        }
      },


      forceShow: {
        handler: function handler(value) {
          this[value ? 'doShow' : 'doClose']();
        },

        immediate: true
      },

      disabled: function disabled(value) {
        if (value) {
          this.showPopper = false;
        }
      }
    },

    created: function created() {
      this.appendedArrow = false;
      this.appendedToBody = false;
      this.popperOptions = _extends(this.popperOptions, this.options);
    },
    mounted: function mounted() {
      this.referenceElm = this.reference || this.$slots.reference[0].elm;
      this.popper = this.$slots.default[0].elm;

      switch (this.trigger) {
        case 'click':
          on(this.referenceElm, 'click', this.doToggle);
          on(document, 'click', this.handleDocumentClick);
          break;
        case 'hover':
          on(this.referenceElm, 'mouseover', this.onMouseOver);
          on(this.referenceElm, 'focus', this.onMouseOver);
          on(this.popper, 'mouseover', this.onMouseOver);
          on(this.popper, 'focus', this.onMouseOver);
          on(this.referenceElm, 'mouseout', this.onMouseOut);
          on(this.referenceElm, 'blur', this.onMouseOut);
          on(this.popper, 'mouseout', this.onMouseOut);
          on(this.popper, 'blur', this.onMouseOut);
          break;
      }
    },


    methods: {
      doToggle: function doToggle() {
        if (!this.forceShow) {
          this.showPopper = !this.showPopper;
        }
      },
      doShow: function doShow() {
        this.showPopper = true;
      },
      doClose: function doClose() {
        this.showPopper = false;
      },
      doDestroy: function doDestroy() {
        if (this.showPopper) {
          return;
        }

        if (this.popperJS) {
          this.popperJS.destroy();
          this.popperJS = null;
        }

        if (this.appendedToBody) {
          this.appendedToBody = false;
          document.body.removeChild(this.popper.parentElement);
        }
      },
      createPopper: function createPopper() {
        var _this = this;

        this.$nextTick(function () {
          if (_this.visibleArrow) {
            _this.appendArrow(_this.popper);
          }

          if (_this.appendToBody && !_this.appendedToBody) {
            _this.appendedToBody = true;
            document.body.appendChild(_this.popper.parentElement);
          }

          if (_this.popperJS && _this.popperJS.destroy) {
            _this.popperJS.destroy();
          }

          if (_this.boundariesSelector) {
            var boundariesElement = document.querySelector(_this.boundariesSelector);

            if (boundariesElement) {
              _this.popperOptions.modifiers = _extends({}, _this.popperOptions.modifiers);
              _this.popperOptions.modifiers.preventOverflow = _extends({}, _this.popperOptions.modifiers.preventOverflow);
              _this.popperOptions.modifiers.preventOverflow.boundariesElement = boundariesElement;
            }
          }

          _this.popperOptions.onCreate = function () {
            _this.$emit('created', _this);
            _this.$nextTick(_this.updatePopper);
          };

          _this.popperJS = new Popper(_this.referenceElm, _this.popper, _this.popperOptions);
        });
      },
      destroyPopper: function destroyPopper() {
        off(this.referenceElm, 'click', this.doToggle);
        off(this.referenceElm, 'mouseup', this.doClose);
        off(this.referenceElm, 'mousedown', this.doShow);
        off(this.referenceElm, 'focus', this.doShow);
        off(this.referenceElm, 'blur', this.doClose);
        off(this.referenceElm, 'mouseout', this.onMouseOut);
        off(this.referenceElm, 'mouseover', this.onMouseOver);
        off(document, 'click', this.handleDocumentClick);

        this.showPopper = false;
        this.doDestroy();
      },
      appendArrow: function appendArrow(element) {
        if (this.appendedArrow) {
          return;
        }

        this.appendedArrow = true;

        var arrow = document.createElement('div');
        arrow.setAttribute('x-arrow', '');
        arrow.className = 'popper__arrow';
        element.appendChild(arrow);
      },
      updatePopper: function updatePopper() {
        this.popperJS ? this.popperJS.scheduleUpdate() : this.createPopper();
      },
      onMouseOver: function onMouseOver() {
        var _this2 = this;

        clearTimeout(this._timer);
        this._timer = setTimeout(function () {
          _this2.showPopper = true;
        }, this.delayOnMouseOver);
      },
      onMouseOut: function onMouseOut() {
        var _this3 = this;

        clearTimeout(this._timer);
        this._timer = setTimeout(function () {
          _this3.showPopper = false;
        }, this.delayOnMouseOut);
      },
      handleDocumentClick: function handleDocumentClick(e) {
        if (!this.$el || !this.referenceElm || this.elementContains(this.$el, e.target) || this.elementContains(this.referenceElm, e.target) || !this.popper || this.elementContains(this.popper, e.target)) {
          return;
        }

        this.$emit('documentClick', this);

        if (this.forceShow) {
          return;
        }

        this.showPopper = false;
      },
      elementContains: function elementContains(elm, otherElm) {
        if (typeof elm.contains === 'function') {
          return elm.contains(otherElm);
        }

        return false;
      }
    },

    destroyed: function destroyed() {
      this.destroyPopper();
    }
  };

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", [_c("transition", {
      attrs: {
        name: _vm.transition,
        "enter-active-class": _vm.enterActiveClass,
        "leave-active-class": _vm.leaveActiveClass
      },
      on: { "after-leave": _vm.doDestroy }
    }, [_c("span", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.disabled && _vm.showPopper,
        expression: "!disabled && showPopper"
      }],
      ref: "popper"
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.content))])], 2)]), _vm._v(" "), _vm._t("reference")], 2);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-64b9250b_0", { source: "\n.popper {\n  width: auto;\n  background-color: #fafafa;\n  color: #212121;\n  text-align: center;\n  padding: 2px;\n  display: inline-block;\n  border-radius: 3px;\n  position: absolute;\n  font-size: 14px;\n  font-weight: normal;\n  border: 1px #ebebeb solid;\n  z-index: 200000;\n  -moz-box-shadow: rgb(58, 58, 58) 0 0 6px 0;\n  -webkit-box-shadow: rgb(58, 58, 58) 0 0 6px 0;\n  box-shadow: rgb(58, 58, 58) 0 0 6px 0;\n}\n.popper .popper__arrow {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  position: absolute;\n  margin: 5px;\n}\n.popper[x-placement^=\"top\"] {\n  margin-bottom: 5px;\n}\n.popper[x-placement^=\"top\"] .popper__arrow {\n  border-width: 5px 5px 0 5px;\n  border-color: #fafafa transparent transparent transparent;\n  bottom: -5px;\n  left: calc(50% - 5px);\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.popper[x-placement^=\"bottom\"] {\n  margin-top: 5px;\n}\n.popper[x-placement^=\"bottom\"] .popper__arrow {\n  border-width: 0 5px 5px 5px;\n  border-color: transparent transparent #fafafa transparent;\n  top: -5px;\n  left: calc(50% - 5px);\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.popper[x-placement^=\"right\"] {\n  margin-left: 5px;\n}\n.popper[x-placement^=\"right\"] .popper__arrow {\n  border-width: 5px 5px 5px 0;\n  border-color: transparent #fafafa transparent transparent;\n  left: -5px;\n  top: calc(50% - 5px);\n  margin-left: 0;\n  margin-right: 0;\n}\n.popper[x-placement^=\"left\"] {\n  margin-right: 5px;\n}\n.popper[x-placement^=\"left\"] .popper__arrow {\n  border-width: 5px 0 5px 5px;\n  border-color: transparent transparent transparent #fafafa;\n  right: -5px;\n  top: calc(50% - 5px);\n  margin-left: 0;\n  margin-right: 0;\n}\n", map: { "version": 3, "sources": ["/Users/igor/projects/vue-popper/src/component/popper.js.vue"], "names": [], "mappings": ";AACA;EACA,YAAA;EACA,0BAAA;EACA,eAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,oBAAA;EACA,0BAAA;EACA,gBAAA;EACA,2CAAA;EACA,8CAAA;EACA,sCAAA;CACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,oBAAA;EACA,mBAAA;EACA,YAAA;CACA;AAEA;EACA,mBAAA;CACA;AAEA;EACA,4BAAA;EACA,0DAAA;EACA,aAAA;EACA,sBAAA;EACA,cAAA;EACA,iBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,4BAAA;EACA,0DAAA;EACA,UAAA;EACA,sBAAA;EACA,cAAA;EACA,iBAAA;CACA;AAEA;EACA,iBAAA;CACA;AAEA;EACA,4BAAA;EACA,0DAAA;EACA,WAAA;EACA,qBAAA;EACA,eAAA;EACA,gBAAA;CACA;AAEA;EACA,kBAAA;CACA;AAEA;EACA,4BAAA;EACA,0DAAA;EACA,YAAA;EACA,qBAAA;EACA,eAAA;EACA,gBAAA;CACA", "file": "popper.js.vue", "sourcesContent": ["<style>\n  .popper {\n    width: auto;\n    background-color: #fafafa;\n    color: #212121;\n    text-align: center;\n    padding: 2px;\n    display: inline-block;\n    border-radius: 3px;\n    position: absolute;\n    font-size: 14px;\n    font-weight: normal;\n    border: 1px #ebebeb solid;\n    z-index: 200000;\n    -moz-box-shadow: rgb(58, 58, 58) 0 0 6px 0;\n    -webkit-box-shadow: rgb(58, 58, 58) 0 0 6px 0;\n    box-shadow: rgb(58, 58, 58) 0 0 6px 0;\n  }\n\n  .popper .popper__arrow {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    position: absolute;\n    margin: 5px;\n  }\n\n  .popper[x-placement^=\"top\"] {\n    margin-bottom: 5px;\n  }\n\n  .popper[x-placement^=\"top\"] .popper__arrow {\n    border-width: 5px 5px 0 5px;\n    border-color: #fafafa transparent transparent transparent;\n    bottom: -5px;\n    left: calc(50% - 5px);\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .popper[x-placement^=\"bottom\"] {\n    margin-top: 5px;\n  }\n\n  .popper[x-placement^=\"bottom\"] .popper__arrow {\n    border-width: 0 5px 5px 5px;\n    border-color: transparent transparent #fafafa transparent;\n    top: -5px;\n    left: calc(50% - 5px);\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .popper[x-placement^=\"right\"] {\n    margin-left: 5px;\n  }\n\n  .popper[x-placement^=\"right\"] .popper__arrow {\n    border-width: 5px 5px 5px 0;\n    border-color: transparent #fafafa transparent transparent;\n    left: -5px;\n    top: calc(50% - 5px);\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  .popper[x-placement^=\"left\"] {\n    margin-right: 5px;\n  }\n\n  .popper[x-placement^=\"left\"] .popper__arrow {\n    border-width: 5px 0 5px 5px;\n    border-color: transparent transparent transparent #fafafa;\n    right: -5px;\n    top: calc(50% - 5px);\n    margin-left: 0;\n    margin-right: 0;\n  }\n</style>\n\n<template>\n  <span>\n    <transition :name=\"transition\" :enter-active-class=\"enterActiveClass\" :leave-active-class=\"leaveActiveClass\" @after-leave=\"doDestroy\">\n      <span\n        ref=\"popper\"\n        v-show=\"!disabled && showPopper\">\n        <slot>{{ content }}</slot>\n      </span>\n    </transition>\n    <slot name=\"reference\"></slot>\n  </span>\n</template>\n\n<script>\n  import Popper from 'popper.js';\n\n  function on(element, event, handler) {\n    if (element && event && handler) {\n      document.addEventListener ? element.addEventListener(event, handler, false) : element.attachEvent('on' + event, handler);\n    }\n  }\n\n  function off(element, event, handler) {\n    if (element && event) {\n      document.removeEventListener ? element.removeEventListener(event, handler, false) : element.detachEvent('on' + event, handler)\n    }\n  }\n\n  export default {\n    props: {\n      trigger: {\n        type: String,\n        default: 'hover',\n        validator: value => ['click', 'hover'].indexOf(value) > -1\n      },\n      delayOnMouseOver: {\n        type: Number,\n        default: 10,\n      },\n      delayOnMouseOut: {\n        type: Number,\n        default: 10,\n      },\n      disabled: {\n        type: Boolean,\n        default: false\n      },\n      content: String,\n      enterActiveClass: String,\n      leaveActiveClass: String,\n      boundariesSelector: String,\n      reference: {},\n      forceShow: {\n        type: Boolean,\n        default: false\n      },\n      dataValue: {\n        default: null,\n      },\n      appendToBody: {\n        type: Boolean,\n        default: false\n      },\n      visibleArrow: {\n        type: Boolean,\n        default: true\n      },\n      transition: {\n        type: String,\n        default: ''\n      },\n      options: {\n        type: Object,\n        default() {\n          return {};\n        }\n      }\n    },\n\n    data() {\n      return {\n        referenceElm: null,\n        popperJS: null,\n        showPopper: false,\n        currentPlacement: '',\n        popperOptions: {\n          placement: 'bottom',\n          computeStyle: {\n            gpuAcceleration: false\n          }\n        }\n      };\n    },\n\n    watch: {\n      showPopper(value) {\n        if (value) {\n          this.$emit('show', this);\n          if (this.popperJS) {\n            this.popperJS.enableEventListeners();\n          }\n          this.updatePopper();\n        } else {\n          if (this.popperJS) {\n            this.popperJS.disableEventListeners();\n          }\n          this.$emit('hide', this);\n        }\n      },\n\n      forceShow: {\n        handler(value) {\n          this[value ? 'doShow' : 'doClose']();\n        },\n        immediate: true\n      },\n\n      disabled(value) {\n        if (value) {\n          this.showPopper = false;\n        }\n      }\n    },\n\n    created() {\n      this.appendedArrow = false;\n      this.appendedToBody = false;\n      this.popperOptions = Object.assign(this.popperOptions, this.options);\n    },\n\n    mounted() {\n      this.referenceElm = this.reference || this.$slots.reference[0].elm;\n      this.popper = this.$slots.default[0].elm;\n\n      switch (this.trigger) {\n        case 'click':\n          on(this.referenceElm, 'click', this.doToggle);\n          on(document, 'click', this.handleDocumentClick);\n          break;\n        case 'hover':\n          on(this.referenceElm, 'mouseover', this.onMouseOver);\n          on(this.referenceElm, 'focus', this.onMouseOver);\n          on(this.popper, 'mouseover', this.onMouseOver);\n          on(this.popper, 'focus', this.onMouseOver);\n          on(this.referenceElm, 'mouseout', this.onMouseOut);\n          on(this.referenceElm, 'blur', this.onMouseOut);\n          on(this.popper, 'mouseout', this.onMouseOut);\n          on(this.popper, 'blur', this.onMouseOut);\n          break;\n      }\n    },\n\n    methods: {\n      doToggle() {\n        if (!this.forceShow) {\n          this.showPopper = !this.showPopper;\n        }\n      },\n\n      doShow() {\n        this.showPopper = true;\n      },\n\n      doClose() {\n        this.showPopper = false;\n      },\n\n      doDestroy() {\n        if (this.showPopper) {\n          return;\n        }\n\n        if (this.popperJS) {\n          this.popperJS.destroy();\n          this.popperJS = null;\n        }\n\n        if (this.appendedToBody) {\n          this.appendedToBody = false;\n          document.body.removeChild(this.popper.parentElement);\n        }\n      },\n\n      createPopper() {\n        this.$nextTick(() => {\n          if (this.visibleArrow) {\n            this.appendArrow(this.popper);\n          }\n\n          if (this.appendToBody && !this.appendedToBody) {\n            this.appendedToBody = true;\n            document.body.appendChild(this.popper.parentElement);\n          }\n\n          if (this.popperJS && this.popperJS.destroy) {\n            this.popperJS.destroy();\n          }\n\n          if (this.boundariesSelector) {\n            const boundariesElement = document.querySelector(this.boundariesSelector);\n\n            if (boundariesElement) {\n              this.popperOptions.modifiers = Object.assign({}, this.popperOptions.modifiers);\n              this.popperOptions.modifiers.preventOverflow = Object.assign({}, this.popperOptions.modifiers.preventOverflow);\n              this.popperOptions.modifiers.preventOverflow.boundariesElement = boundariesElement;\n            }\n          }\n\n          this.popperOptions.onCreate = () => {\n            this.$emit('created', this);\n            this.$nextTick(this.updatePopper);\n          };\n\n          this.popperJS = new Popper(this.referenceElm, this.popper, this.popperOptions);\n        });\n      },\n\n      destroyPopper() {\n        off(this.referenceElm, 'click', this.doToggle);\n        off(this.referenceElm, 'mouseup', this.doClose);\n        off(this.referenceElm, 'mousedown', this.doShow);\n        off(this.referenceElm, 'focus', this.doShow);\n        off(this.referenceElm, 'blur', this.doClose);\n        off(this.referenceElm, 'mouseout', this.onMouseOut);\n        off(this.referenceElm, 'mouseover', this.onMouseOver);\n        off(document, 'click', this.handleDocumentClick);\n\n        this.showPopper = false;\n        this.doDestroy();\n      },\n\n      appendArrow(element) {\n        if (this.appendedArrow) {\n          return;\n        }\n\n        this.appendedArrow = true;\n\n        const arrow = document.createElement('div');\n        arrow.setAttribute('x-arrow', '');\n        arrow.className = 'popper__arrow';\n        element.appendChild(arrow);\n      },\n\n      updatePopper() {\n        this.popperJS ? this.popperJS.scheduleUpdate() : this.createPopper();\n      },\n\n      onMouseOver() {\n        clearTimeout(this._timer);\n        this._timer = setTimeout(() => {\n          this.showPopper = true;\n        }, this.delayOnMouseOver);\n      },\n\n      onMouseOut() {\n        clearTimeout(this._timer);\n        this._timer = setTimeout(() => {\n          this.showPopper = false;\n        }, this.delayOnMouseOut);\n      },\n\n      handleDocumentClick(e) {\n        if (!this.$el || !this.referenceElm ||\n          this.elementContains(this.$el, e.target) ||\n          this.elementContains(this.referenceElm, e.target) ||\n          !this.popper || this.elementContains(this.popper, e.target)\n        ) {\n          return;\n        }\n\n        this.$emit('documentClick', this);\n\n        if (this.forceShow) {\n          return;\n        }\n\n        this.showPopper = false;\n      },\n\n      elementContains(elm, otherElm) {\n        if (typeof elm.contains === 'function') {\n          return elm.contains(otherElm);\n        }\n\n        return false;\n      }\n    },\n\n    destroyed() {\n      this.destroyPopper();\n    }\n  }\n</script>\n"] }, media: undefined });
  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/igor/projects/vue-popper/src/component/popper.js.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      var hook = void 0;
      if (style) {
        hook = function hook(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component;
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
        }
      }
    };
  }
  /* style inject SSR */

  var VuePopper = __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

  return VuePopper;

})));


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=style&index=0&id=1884afde&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=style&index=0&id=1884afde&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/src??ref--7-oneOf-1-2!../../../cache-loader/dist/cjs.js??ref--1-0!../../../vue-loader/lib??vue-loader-options!./VueImageLightboxCarousel.vue?vue&type=style&index=0&id=1884afde&lang=css&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-image-lightbox-carousel/src/components/VueImageLightboxCarousel.vue?vue&type=style&index=0&id=1884afde&lang=css&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4f3412be", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=0&id=10e59822&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=0&id=10e59822&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/src??ref--7-oneOf-1-2!../../../cache-loader/dist/cjs.js??ref--1-0!../../../vue-loader/lib??vue-loader-options!./VueUploadMultipleImage.vue?vue&type=style&index=0&id=10e59822&lang=css&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=0&id=10e59822&lang=css&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2f7ee3aa", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=1&id=10e59822&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=1&id=10e59822&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/src??ref--7-oneOf-1-2!../../../cache-loader/dist/cjs.js??ref--1-0!../../../vue-loader/lib??vue-loader-options!./VueUploadMultipleImage.vue?vue&type=style&index=1&id=10e59822&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=1&id=10e59822&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("319c60c0", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/locations/create.vue?vue&type=style&index=0&id=2429e0b2&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/admin/locations/create.vue?vue&type=style&index=0&id=2429e0b2&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&id=2429e0b2&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/locations/create.vue?vue&type=style&index=0&id=2429e0b2&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2f34f85c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/adapters/xhr.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/adapters/xhr.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/axios.js":
/*!********************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/axios.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/cancel/Cancel.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/cancel/Cancel.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/cancel/CancelToken.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/cancel/CancelToken.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/cancel/isCancel.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/cancel/isCancel.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/Axios.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/Axios.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/InterceptorManager.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/InterceptorManager.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/createError.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/createError.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/dispatchRequest.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/dispatchRequest.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/enhanceError.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/enhanceError.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/settle.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/settle.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/transformData.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/core/transformData.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/defaults.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/defaults.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node-libs-browser/mock/process.js */ "./node_modules/node-libs-browser/mock/process.js")))

/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/bind.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/bind.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/buildURL.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/buildURL.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/combineURLs.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/combineURLs.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/cookies.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/cookies.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/parseHeaders.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/spread.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/spread.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/utils.js":
/*!********************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/node_modules/axios/lib/utils.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/vue-upload-multiple-image/node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/src/App.vue":
/*!************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/src/App.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_4d01061a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=4d01061a */ "./node_modules/vue-upload-multiple-image/src/App.vue?vue&type=template&id=4d01061a");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./node_modules/vue-upload-multiple-image/src/App.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_4d01061a__WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_4d01061a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-upload-multiple-image/src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/src/App.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/src/App.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../cache-loader/dist/cjs.js??ref--13-0!../../babel-loader/lib!../../cache-loader/dist/cjs.js??ref--1-0!../../vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-upload-multiple-image/src/App.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/src/App.vue?vue&type=template&id=4d01061a":
/*!******************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/src/App.vue?vue&type=template&id=4d01061a ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_vue_loader_lib_loaders_templateLoader_js_ref_6_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4d01061a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../cache-loader/dist/cjs.js??ref--13-0!../../babel-loader/lib!../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../cache-loader/dist/cjs.js??ref--1-0!../../vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=4d01061a */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-upload-multiple-image/src/App.vue?vue&type=template&id=4d01061a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_vue_loader_lib_loaders_templateLoader_js_ref_6_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4d01061a__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_vue_loader_lib_loaders_templateLoader_js_ref_6_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4d01061a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue":
/*!******************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VueUploadMultipleImage_vue_vue_type_template_id_10e59822_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueUploadMultipleImage.vue?vue&type=template&id=10e59822&scoped=true */ "./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=template&id=10e59822&scoped=true");
/* harmony import */ var _VueUploadMultipleImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VueUploadMultipleImage.vue?vue&type=script&lang=js */ "./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _VueUploadMultipleImage_vue_vue_type_style_index_0_id_10e59822_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VueUploadMultipleImage.vue?vue&type=style&index=0&id=10e59822&lang=css&scoped=true */ "./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=0&id=10e59822&lang=css&scoped=true");
/* harmony import */ var _VueUploadMultipleImage_vue_vue_type_style_index_1_id_10e59822_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VueUploadMultipleImage.vue?vue&type=style&index=1&id=10e59822&lang=css */ "./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=1&id=10e59822&lang=css");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _VueUploadMultipleImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _VueUploadMultipleImage_vue_vue_type_template_id_10e59822_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _VueUploadMultipleImage_vue_vue_type_template_id_10e59822_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "10e59822",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueUploadMultipleImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../cache-loader/dist/cjs.js??ref--13-0!../../../babel-loader/lib!../../../cache-loader/dist/cjs.js??ref--1-0!../../../vue-loader/lib??vue-loader-options!./VueUploadMultipleImage.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueUploadMultipleImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=0&id=10e59822&lang=css&scoped=true":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=0&id=10e59822&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueUploadMultipleImage_vue_vue_type_style_index_0_id_10e59822_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-style-loader??ref--7-oneOf-1-0!../../../css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/src??ref--7-oneOf-1-2!../../../cache-loader/dist/cjs.js??ref--1-0!../../../vue-loader/lib??vue-loader-options!./VueUploadMultipleImage.vue?vue&type=style&index=0&id=10e59822&lang=css&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=0&id=10e59822&lang=css&scoped=true");
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueUploadMultipleImage_vue_vue_type_style_index_0_id_10e59822_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueUploadMultipleImage_vue_vue_type_style_index_0_id_10e59822_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueUploadMultipleImage_vue_vue_type_style_index_0_id_10e59822_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueUploadMultipleImage_vue_vue_type_style_index_0_id_10e59822_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=1&id=10e59822&lang=css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=1&id=10e59822&lang=css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueUploadMultipleImage_vue_vue_type_style_index_1_id_10e59822_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-style-loader??ref--7-oneOf-1-0!../../../css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/src??ref--7-oneOf-1-2!../../../cache-loader/dist/cjs.js??ref--1-0!../../../vue-loader/lib??vue-loader-options!./VueUploadMultipleImage.vue?vue&type=style&index=1&id=10e59822&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=style&index=1&id=10e59822&lang=css");
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueUploadMultipleImage_vue_vue_type_style_index_1_id_10e59822_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueUploadMultipleImage_vue_vue_type_style_index_1_id_10e59822_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueUploadMultipleImage_vue_vue_type_style_index_1_id_10e59822_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueUploadMultipleImage_vue_vue_type_style_index_1_id_10e59822_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=template&id=10e59822&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=template&id=10e59822&scoped=true ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_vue_loader_lib_loaders_templateLoader_js_ref_6_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueUploadMultipleImage_vue_vue_type_template_id_10e59822_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../cache-loader/dist/cjs.js??ref--13-0!../../../babel-loader/lib!../../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../../cache-loader/dist/cjs.js??ref--1-0!../../../vue-loader/lib??vue-loader-options!./VueUploadMultipleImage.vue?vue&type=template&id=10e59822&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue?vue&type=template&id=10e59822&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_vue_loader_lib_loaders_templateLoader_js_ref_6_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueUploadMultipleImage_vue_vue_type_template_id_10e59822_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_cache_loader_dist_cjs_js_ref_13_0_babel_loader_lib_index_js_vue_loader_lib_loaders_templateLoader_js_ref_6_cache_loader_dist_cjs_js_ref_1_0_vue_loader_lib_index_js_vue_loader_options_VueUploadMultipleImage_vue_vue_type_template_id_10e59822_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-upload-multiple-image/src/main.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-upload-multiple-image/src/main.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./node_modules/vue-upload-multiple-image/src/App.vue");
/* harmony import */ var _components_VueUploadMultipleImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/VueUploadMultipleImage */ "./node_modules/vue-upload-multiple-image/src/components/VueUploadMultipleImage.vue");




if (document.querySelector('#my-strictly-unique-vue-upload-multiple-image')) {
  vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('VueUploadMultipleImage', _components_VueUploadMultipleImage__WEBPACK_IMPORTED_MODULE_2__["default"])

  new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
    el: '#my-strictly-unique-vue-upload-multiple-image',
    render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"])
  })
}

/* harmony default export */ __webpack_exports__["default"] = (_components_VueUploadMultipleImage__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/assets/images/bus-marker-logo.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/bus-marker-logo.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bus-marker-logo.c4bddff2.svg";

/***/ }),

/***/ "./src/views/admin/locations/create.vue":
/*!**********************************************!*\
  !*** ./src/views/admin/locations/create.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_2429e0b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=2429e0b2&scoped=true */ "./src/views/admin/locations/create.vue?vue&type=template&id=2429e0b2&scoped=true");
/* harmony import */ var _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js */ "./src/views/admin/locations/create.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_id_2429e0b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&id=2429e0b2&scoped=true&lang=css */ "./src/views/admin/locations/create.vue?vue&type=style&index=0&id=2429e0b2&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_2429e0b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_2429e0b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2429e0b2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/admin/locations/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/admin/locations/create.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/views/admin/locations/create.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/locations/create.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/admin/locations/create.vue?vue&type=style&index=0&id=2429e0b2&scoped=true&lang=css":
/*!******************************************************************************************************!*\
  !*** ./src/views/admin/locations/create.vue?vue&type=style&index=0&id=2429e0b2&scoped=true&lang=css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_2429e0b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&id=2429e0b2&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/locations/create.vue?vue&type=style&index=0&id=2429e0b2&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_2429e0b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_2429e0b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_2429e0b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_2429e0b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/admin/locations/create.vue?vue&type=template&id=2429e0b2&scoped=true":
/*!****************************************************************************************!*\
  !*** ./src/views/admin/locations/create.vue?vue&type=template&id=2429e0b2&scoped=true ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_2429e0b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7428675c-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=2429e0b2&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7428675c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/admin/locations/create.vue?vue&type=template&id=2429e0b2&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_2429e0b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7428675c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_2429e0b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/admin/locations/mapStyle.json":
/*!*************************************************!*\
  !*** ./src/views/admin/locations/mapStyle.json ***!
  \*************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"featureType\":\"administrative.country\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"administrative.land_parcel\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"landscape.man_made\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.attraction\",\"elementType\":\"geometry\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.business\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.government\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.medical\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.medical\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"labels.text\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.place_of_worship\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.place_of_worship\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.place_of_worship\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.place_of_worship\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.school\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.sports_complex\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road.local\",\"stylers\":[{\"visibility\":\"off\"}]}]");

/***/ })

}]);
//# sourceMappingURL=8.js.map