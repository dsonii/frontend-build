import router from "./../router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
//add router to pinia

pinia.use(({ store }) => {
  return (store.$router = router);
});

export default pinia;
