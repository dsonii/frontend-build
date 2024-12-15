import { defineStore } from "pinia";
import { baseApi } from "../helpers/auth";

export const useApp = defineStore("useApp", {
  state: () => ({
    appName: "",
    appShortName: "",
    appLogo: "",
    appEmail: "",
    appAddress: "",
    appPhone: "",
    timezone: "",
    dateFormat: "",
    timeFormat: "",
  }),
  actions: {
    updateApp(obj) {
      this.appName = obj.appName;
      this.appShortName = obj.appShortName;
      this.appLogo = obj.appLogo;
      this.appEmail = obj.appEmail;
      this.appAddress = obj.appAddress;
      this.appPhone = obj.appPhone;
      this.timezone = obj.timezone;
      this.dateFormat = obj.dateFormat;
      this.timeFormat = obj.timeFormat;
    },
    async getApp() {
      try {
        const { data } = await baseApi.get("/settings/app/general");
        this.appName = data.appName;
        this.appShortName = data.appShortName;
        this.appLogo = data.appLogo;
        this.appEmail = data.appEmail;
        this.appAddress = data.appAddress;
        this.appPhone = data.appPhone;
        this.timezone = data.timezone;
        this.dateFormat = data.dateFormat;
        this.timeFormat = data.timeFormat;
      } catch (error) {
        if (error?.response?.data?.message) {
          alert(error.response.data.message);
        } else alert(error.message);
      }
    },
  },
  persist: true,
});
