import Vue from "vue";
import App from "./App";
import { PiniaVuePlugin } from "pinia";
import VueRouter from "vue-router";
import router from "./router";
import pinia from "./store";
import BootstrapVue from "bootstrap-vue";
import Vuelidate from "vuelidate";
import JQuery from "jquery";
import VueSweetalert2 from "vue-sweetalert2";
import VueToast from "vue-toast-notification";
import VueGoodTablePlugin from "vue-good-table";
import VueMeta from "vue-meta";
import * as VueGoogleMaps from "vue2-google-maps";
import { ColorPicker, ColorPanel } from "one-colorpicker";
import VueLazyload from "vue-lazyload";
import VueCountryDropdown from "vue-country-dropdown";
import { useApp } from "./store/useApp";

// eslint-disable-next-line
let $ = JQuery

const options = {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674",
};

// import the styles

import "sweetalert2/dist/sweetalert2.min.css";
import "vue-good-table/dist/vue-good-table.css";
import "vue-toast-notification/dist/theme-sugar.css";
import "nprogress/nprogress.css";

Vue.use(BootstrapVue);
Vue.use(VueSweetalert2, options);
Vue.use(Vuelidate);
Vue.use(VueToast);
Vue.use(VueMeta);
Vue.use(VueLazyload);
Vue.use(VueCountryDropdown);

Vue.use(VueGoodTablePlugin);
Vue.use(ColorPanel);
Vue.use(ColorPicker);

//add router to pinia
Vue.use(PiniaVuePlugin);
Vue.use(pinia);

Vue.use(VueRouter);

const app = useApp();
Vue.use(VueGoogleMaps, {
  load: {
    key: app.googleKey
      ? app.googleKey
      : process.env.VUE_APP_GOOGLE_MAPS_API_KEY, //process.env.GOOGLE_MAPS_API_KEY,
    libraries: "places,directions", // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
    // region: "IN",
    language: "en",
  },
});

Vue.prototype.$year = new Date().getFullYear();

Vue.config.productionTip = true;

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
