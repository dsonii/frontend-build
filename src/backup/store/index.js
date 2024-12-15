import router from "./../router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";
// import { alert } from "./modules/alert";
// import { auth } from "./modules/auth.module";

// // Load Vuex
// Vue.use(Vuex);

// // Create store
// export default new Vuex.Store({
//   modules: {
//     alert,
//     auth,
//   },
//   plugins: [createPersistedState()],
// });

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
//add router to pinia

pinia.use(({ store }) => {
  return (store.$router = router);
});

export default pinia;
