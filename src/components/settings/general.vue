<template>
  <div>
    <b-form @submit.prevent="updateGeneral">
      <input type="hidden" v-model="general.id" />
      <b-form-group
        label="Name"
        label-for="name-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          v-model.trim="$v.general.name.$model"
          placeholder="name"
          :class="{
            'is-invalid': submitted && $v.general.name.$error,
          }"
          :state="validateState('name')"
          readonly
        >
        </b-input>
        <div
          v-if="submitted && !$v.general.name.required"
          class="invalid-feedback"
        >
          name is required
        </div>
      </b-form-group>

      <b-form-group
        label="Logo"
        label-for="general-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <div v-if="!general.logo">
          <b-form-file
            id="general-input"
            accept="image/jpeg, image/png, image/jpg"
            placeholder="Choose a logo or drop it here..."
            @change="onFileChange($event, 'logo')"
          ></b-form-file>
        </div>
        <div v-else>
          <img class="img-fluid" :src="general.logo" width="150" height="150" />
          <button
            class="btn social-btn btn-rounded btn-danger mr-4"
            @click="removeImage('logo')"
          >
            <i class="mdi mdi-close"></i>
          </button>
        </div>
      </b-form-group>

      <b-form-group
        label="Email"
        label-for="email-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          v-model.trim="$v.general.email.$model"
          placeholder="Enter email address"
          :class="{
            'is-invalid': submitted && $v.general.email.$error,
          }"
          :state="validateState('email')"
          readonly
        >
        </b-input>
        <div
          v-if="submitted && !$v.general.email.required"
          class="invalid-feedback"
        >
          email address is required
        </div>
      </b-form-group>

      <b-form-group
        label="Address"
        label-for="address-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-textarea
          id="address-1-input"
          v-model.trim="general.address"
          placeholder="Enter address..."
          rows="5"
          max-rows="8"
          readonly
        ></b-form-textarea>
      </b-form-group>

      <b-form-group
        label="Phone Number"
        label-for="phone-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        readonly
      >
        <b-input
          v-model.trim="$v.general.phone.$model"
          placeholder="phone Number"
          :class="{
            'is-invalid': submitted && $v.general.phone.$error,
          }"
          :state="validateState('phone')"
          readonly
        >
        </b-input>

        <div
          v-if="submitted && !$v.general.phone.required"
          class="invalid-feedback"
        >
          phone number is required
        </div>
        <div class="invalid-feedback" v-if="!$v.general.phone.minLength">
          Name must have at least
          {{ $v.general.phone.$params.minLength.min }} letters.
        </div>
      </b-form-group>

      <b-form-group
        label="Default Country"
        label-for="default-country-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-select
          v-model="general.default_country"
          :options="countries"
          :class="{
            'is-invalid': submitted && $v.general.default_country.$error,
          }"
          :state="validateState('default_country')"
        >
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Please select default country --</b-form-select-option
            >
          </template>
        </b-form-select>
      </b-form-group>

      <b-form-group
        label="Default Currency"
        label-for="default-currency-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-select v-model="general.default_currency" :options="currencies">
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Please select default currency --</b-form-select-option
            >
          </template>
        </b-form-select>
      </b-form-group>

      <b-form-group
        label="Default Timezone"
        label-for="timezone-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <v-select
          label="tzCode"
          :filterable="true"
          :options="timezones"
          v-model="general.timezone"
        >
          <template slot="no-options"> type default timezone </template>

          <template slot="option" slot-scope="option">
            <div class="d-center">
              {{ option.tzCode }}
            </div>
          </template>
          <template slot="selected-option" slot-scope="option">
            <div class="selected d-center">
              {{ option.tzCode }}
            </div>
          </template>
        </v-select>
      </b-form-group>
      <b-form-group
        label="Date Format"
        label-for="date-format-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <v-select
          label="text"
          value="value"
          :filterable="true"
          :options="dateFormat"
          v-model="general.date_format"
        >
          <template slot="no-options"> type date format </template>
          <template slot="selected-option" slot-scope="option">
            <div class="selected d-center">
              {{ option.text }}
            </div>
          </template>
        </v-select>
      </b-form-group>

      <b-form-group
        label="Time Format"
        label-for="time-format-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <v-select
          label="text"
          value="value"
          :filterable="true"
          :options="timeFormat"
          v-model="general.time_format"
        >
          <template slot="no-options"> type time format </template>
          <template slot="selected-option" slot-scope="option">
            <div class="selected d-center">
              {{ option.text }}
            </div>
          </template>
        </v-select>
      </b-form-group>
      <b-form-group
        label="Google Key"
        label-for="googlekey-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input v-model="general.google_key" placeholder="google secret key">
        </b-input>
      </b-form-group>

      <b-form-group
        label="Tax (%)"
        label-for="tax-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          v-model.trim="$v.general.tax.$model"
          placeholder="Enter tax percent number"
          :class="{
            'is-invalid': submitted && $v.general.tax.$error,
          }"
          :state="validateState('tax')"
        >
        </b-input>

        <div
          v-if="submitted && !$v.general.tax.required"
          class="invalid-feedback"
        >
          tax is required
        </div>
        <div class="invalid-feedback" v-if="!$v.general.tax.minLength">
          Name must have at least
          {{ $v.general.tax.$params.minLength.min }} letters.
        </div>
      </b-form-group>

      <b-form-group
        label="Service Fee"
        label-for="fee-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          type="number"
          min="0"
          step="0.01"
          pattern="^\d+(?:\.\d{1,2})?$"
          v-model.trim="general.fee"
          placeholder="Enter fee"
        >
        </b-input>
      </b-form-group>
      <b-form-group
        label="Api Base Url"
        label-for="api-base-url-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          v-model="general.api_base_url"
          placeholder="Api Base Url"
          readonly
        >
        </b-input>
      </b-form-group>

      <b-form-group
        label="Background Location Update Interval (Millisecond)"
        label-for="api-base-url-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          type="number"
          min="1000"
          v-model="general.background_location_update_interval"
          placeholder="Background Location Update Interval "
        >
        </b-input>
      </b-form-group>

      <b-form-group
        label="Driver Online Location Update Interval (Millisecond)"
        label-for="api-base-url-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          type="number"
          min="1000"
          v-model="general.driver_online_location_update_interval"
          placeholder="Driver Online Location Update Interval"
        >
        </b-input>
      </b-form-group>

      <b-form-group
        label="Radius Range  for Stops Distance (Meters)"
        label-for="api-base-url-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          type="number"
          min="1000"
          v-model="general.max_distance"
          placeholder="max distance in (meters)"
        >
        </b-input>
      </b-form-group>
      <b-form-group
        label="Last Advance Booking time (Minutes)"
        label-for="pre-booking-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          type="number"
          min="30"
          v-model="general.prebooking_time"
          placeholder="pre booking in (minutes)"
        >
        </b-input>
      </b-form-group>

      <b-form-group class="col-md-6 offset-md-4">
        <b-button type="submit" class="btn btn-success btn-lg text-center">
          <b-spinner small v-if="submitted" label="Loading..."></b-spinner
          >Submit</b-button
        >
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import {
  settingService,
  countryService,
  currencyService,
} from "../../services";
import { mapActions } from "pinia";
import { useApp } from "../../store/useApp";
import { validationMixin } from "vuelidate";
import { required, numeric, email, minLength } from "vuelidate/lib/validators";
import timezones from "timezones-list";
import vSelect from "vue-select";
import "vue-select/src/scss/vue-select.scss";
import lodash from "lodash";
import dateFormat from "../../helpers/dateFormat.json";
import timeFormat from "../../helpers/timeFormat.json";

export default {
  mixins: [validationMixin],
  name: "general",
  data() {
    return {
      submitted: false,
      timezones,
      general: {
        id: "",
        name: "",
        logo: "",
        email: "",
        address: "",
        phone: "",
        default_country: "",
        default_currency: "",
        timezone: "",
        date_format: "",
        time_format: "",
        google_key: "",
        tax: "",
        fee: "",
        api_base_url: "",
        background_location_update_interval: 1000,
        driver_online_location_update_interval: 1000,
        prebooking_time: 30,
        max_distance: 2000,
      },
      dateFormat,
      timeFormat,
      countries: [],
      currencies: [],
    };
  },
  components: {
    vSelect,
  },
  validations: {
    general: {
      name: { required },
      email: { required, email },
      phone: { numeric, minLength: minLength(10) },
      tax: { numeric, minLength: minLength(1) },
      default_country: { required },
    },
  },
  methods: {
    ...mapActions(useApp, ["updateApp"]),
    async loadCountries() {
      const response = await countryService.fetch();
      this.countries = response.data;
    },
    async fetchCurrency() {
      const response = await currencyService.fetch();
      this.currencies = response.data;
    },
    searchTimezone(search, loading) {
      if (search.length) {
        loading(true);
        this.search(loading, search, this);
      }
    },
    search: lodash.debounce(async (loading, search, vm) => {
      try {
        console.log("search : ", search);
        const foundTimezones = this.timezones.filter((timezone) => {
          const label = timezone.tzCode.toLowerCase();
          const query = search.toLowerCase();

          for (let i = 0; i < query.length; i++) {
            if (!label.includes(query[i])) {
              return false;
            }
          }
          return true;
        });
        console.log("foundTimezones", foundTimezones);
        if (foundTimezones.length > 0) {
          vm.options = foundTimezones;
        } else {
          vm.options = ""; // Return null if no matching labels are found
        }

        loading(false);
      } catch (err) {
        console.log("err", err);
      }
    }, 350),
    validateState(name) {
      const { $dirty, $error } = this.$v.general[name];
      return $dirty ? !$error : null;
    },
    onFileChange(e, fileTitle) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0], fileTitle);
    },
    createImage(file, fileTitle) {
      // var picture = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.general[fileTitle] = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (titlename) {
      this.general[titlename] = "";
    },
    async getSetting() {
      try {
        const response = await settingService.find("general");
        if (response.status) {
          this.general = response.data;
          // this.general.google_key = response.data.google_key.replace(
          //   /[a-zA-Z]/g,
          //   "X"
          // );
        }
      } catch (e) {
        console.log("params", e);
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 5000,
        });
      }
    },
    async updateGeneral() {
      try {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitted = false;
          return;
        }
        const response = await settingService.update(this.general.id, {
          type: "general",
          general: this.general,
        });
        if (response.status) {
          this.updateApp(response.data);
          this.submitted = false;
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 2000,
            // all of other options may go here
          });
        }
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 4000,
        });
      }
    },
  },
  mounted() {
    this.getSetting();
    this.loadCountries();
    this.fetchCurrency();
  },
};
</script>

<style lang="scss" scoped></style>
