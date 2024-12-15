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
    googleKey: "",
    dateFormat: "",
    timeFormat: "",
    defaultCurrency: "",
    defaultCountry: "",
  }),
  actions: {
    updateApp(obj) {
      this.appName = obj.appName;
      this.appShortName = obj.appShortName;
      this.appLogo = obj.appLogo;
      this.appEmail = obj.appEmail;
      this.appAddress = obj.appAddress;
      this.appPhone = obj.appPhone;
      this.defaultCountry = obj.defaultCountry;
      this.defaultCurrency = obj.defaultCurrency;
      this.timezone = obj.timezone;
      this.googleKey = obj.googleKey;
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
        this.googleKey = data.googleKey;
        this.dateFormat = data.dateFormat;
        this.timeFormat = data.timeFormat;
        this.defaultCountry = data.defaultCountry;
        this.defaultCurrency = data.defaultCurrency;
      } catch (error) {
        if (error?.response?.data?.message) {
          alert(error.response.data.message);
        } else alert(error.message);
      }
    },
  },
  persist: true,
});
