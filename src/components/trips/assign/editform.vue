<template>
  <div>
    <b-form @submit.prevent="updateAssign">
      <b-form-group
        label="Bus Schedule"
        label-for="name-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <multiselect
          v-model.trim="$v.form.route.$model"
          :class="{
            'is-invalid': submitted || $v.form.route.$error,
          }"
          :state="validateState('route')"
          :options="roptions"
          placeholder="start typing to search Route Name"
          label="route_name"
          track-by="id"
          :searchable="true"
          :loading="true"
          @search-change="fetchRoutes"
        >
          <template slot="option" slot-scope="props">
            <p v-if="props.option.route_name != ''">
              Route : {{ props.option.route_name }}
            </p>
            <p v-if="props.option.departure_time != ''">
              {{ momentFormat(props.option.departure_time, timeFormat.value) }}
              -
              {{ momentFormat(props.option.arrival_time, timeFormat.value) }}
            </p>
          </template>
          <template slot="noOptions"> No Route name found.</template>
          <template slot="noResult"> Route name searched not matched.</template>
        </multiselect>

        <b-form-invalid-feedback v-if="submitted || !$v.form.route.required">
          Route name is required
        </b-form-invalid-feedback>

        <!-- <b-form-select
          v-model.trim="$v.form.route.$model"
          :options="roptions"
          :class="{
            'is-invalid': submitted || $v.form.route.$error,
          }"
          :state="validateState('route')"
        >
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Please select an route --</b-form-select-option
            >
          </template>
        </b-form-select>
        <b-form-invalid-feedback v-if="submitted || !$v.form.route.required">
          route is required
        </b-form-invalid-feedback> -->
      </b-form-group>
      <b-form-group
        label="Driver"
        label-for="name-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <multiselect
          v-model.trim="$v.form.driver.$model"
          :class="{
            'is-invalid': submitted || $v.form.driver.$error,
          }"
          :state="validateState('driver')"
          :options="options"
          placeholder="type to drivers phone, name.."
          label="title"
          track-by="title"
          :searchable="true"
          :loading="submitted"
          @search-change="fetchDrivers"
        >
          <template slot="option" slot-scope="props">
            <b-img
              width="40"
              height="40"
              variant="primary"
              :src="props.option.picture"
            ></b-img>
            {{ props.option.title }} : +{{ props.option.country_code
            }}{{ props.option.phone }}
          </template>
          <template slot="noOptions"> No driver found.</template>
          <template slot="noResult"> Driver searched not matched.</template>
        </multiselect>
        <b-form-invalid-feedback v-if="submitted || !$v.form.driver.required">
          Driver name is required
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group
        label="Assistant"
        label-for="name-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <multiselect
          v-model.trim="$v.form.assistant.$model"
          :class="{
            'is-invalid': submitted || $v.form.assistant.$error,
          }"
          :state="validateState('assistant')"
          :options="aoptions"
          placeholder="type to assistants phone, name.."
          label="title"
          track-by="title"
          :searchable="true"
          :loading="submitted"
          @search-change="fetchAssistants"
        >
          <template slot="option" slot-scope="props">
            <b-img
              width="40"
              height="40"
              variant="primary"
              :src="props.option.picture"
            ></b-img>
            {{ props.option.title }} : +{{ props.option.country_code
            }}{{ props.option.phone }}
          </template>
          <template slot="noOptions"> No assistant found.</template>
          <template slot="noResult"> Assistant searched not matched.</template>
        </multiselect>
        <b-form-invalid-feedback
          v-if="submitted || !$v.form.assistant.required"
        >
          Assistant name is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        label="Date Time"
        label-for="name-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <date-picker
          :disabled-date="disabledBeforeTodayAndAfterAWeek"
          v-model="form.dates"
          multiple
          format="YYYY-MM-DD"
          value-type="format"
          placeholder="Please select the dates"
          :clearable="true"
          :inline="true"
        >
          <template v-slot:input="{ props }">
            <b-badge
              class="mr-1"
              variant="primary"
              v-for="value in props.value.split(',')"
              :key="value"
              >{{ value }}
            </b-badge>
          </template>
        </date-picker>
      </b-form-group>

      <b-form-group
        label="Travel Status"
        label-for="name-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-select
          v-model="form.trip_status"
          :options="traveloptions"
        ></b-form-select>
      </b-form-group>
      <b-form-group class="col-md-6 offset-md-5">
        <b-button type="submit" class="btn btn-lg btn-success text-center">
          <span
            class="pl-2 spinner-border spinner-border-sm"
            v-show="submitted"
          >
          </span
          >Submit</b-button
        >
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import {
  driverService,
  routeService,
  assignService,
  busScheduleService,
} from "../../../services";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
//import vSelect from "vue-select";
import lodash from "lodash";
//import "vue-select/src/scss/vue-select.scss";
//import { Datetime } from "vue-datetime";
//import "vue-datetime/dist/vue-datetime.css";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import Multiselect from "vue-multiselect";
import { mapState } from "pinia";
import { fetchUsers } from "../../../store/fetchUsers.js";
import { useApp } from "../../../store/useApp";
import { getDateFormat } from "../../../helpers/utils";
import moment from "moment-timezone";

export default {
  mixins: [validationMixin],
  name: "editform",
  data() {
    return {
      submitted: false,
      loading: false,
      options: [],
      aoptions: [],
      roptions: [],
      traveloptions: [
        { value: "ASSIGNED", text: "ASSIGNED" },
        { value: "EXPIRED", text: "EXPIRED" },
        { value: "COMPLETED", text: "COMPLETED" },
        { value: "NOTSTARTED", text: "NOTSTARTED" },
        { value: "RIDING", text: "RIDING" },
      ],
      form: {
        route: null,
        driver: {},
        assistant: {},
        dates: "",
        trip_status: "",
      },
    };
  },
  validations: {
    form: {
      route: { required },
      driver: { required },
      assistant: { required },
    },
  },
  computed: {
    ...mapState(fetchUsers, ["getUser"]),
    ...mapState(useApp, ["timezone", "dateFormat", "timeFormat"]),
  },
  components: {
    Multiselect,
    DatePicker,
  },
  methods: {
    momentFormat(createdAt, format) {
      return getDateFormat(createdAt, format);
    },
    getLastDate() {
      if (this.form.dates.length > 0) {
        const earliestDate = this.form.dates.reduce((earliest, current) => {
          return new Date(current) < new Date(earliest)
            ? new Date(current)
            : new Date(earliest);
        }, new Date(this.form.dates[0]));
        return earliestDate;
      }
    },
    disabledBeforeTodayAndAfterAWeek(date) {
      const today = this.getLastDate() ? this.getLastDate() : new Date();
      today.setHours(0, 0, 0, 0);

      return (
        date < today || date > new Date(today.getTime() + 30 * 24 * 3600 * 1000)
      );
    },
    async getBookingAssign() {
      try {
        const response = await assignService.find(this.$route.params.id);
        if (response && response.status) {
          response.data.dates = response.data.dates.map((v) =>
            moment(v).tz(this.timezone).format("YYYY-MM-DD")
          );
          this.form = response.data;
          this.getLastDate();
        }
      } catch (e) {
        console.log("params", e);
        this.$toast.open({
          message: e.message,
          type: "error",
          position: "top-right",
          duration: 5000,
        });
      }
    },
    async loadRoutes() {
      const { items } = await routeService.dataRoutes();
      this.roptions = items;
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    fetchDrivers(search, loading) {
      if (search.length) {
        let type = "driver";
        this.search(loading, search, type, this);
      }
    },
    fetchRoutes(search, loading) {
      this.search3(loading, search, this);
    },
    fetchAssistants(search, loading) {
      if (search.length) {
        let type = "assistant";
        this.search2(loading, search, type, this);
      }
    },
    search: lodash.debounce(async (loading, search, type, vm) => {
      try {
        const response = await driverService.q({
          type: type,
          search: search,
        });
        vm.options = response.items;
      } catch (err) {
        console.log("err", err);
        // this.$toast.open({
        //   message: err,
        //   type: "error",
        //   position: "top-right",
        //   duration: 5000,
        // });
      }
    }, 350),
    search2: lodash.debounce(async (loading, search, type, vm) => {
      try {
        const response = await driverService.q({
          type: type,
          search: search,
        });
        vm.aoptions = response.items;
      } catch (err) {
        console.log("err", err);
        // this.$toast.open({
        //   message: err,
        //   type: "error",
        //   position: "top-right",
        //   duration: 5000,
        // });
      }
    }, 350),
    search3: lodash.debounce(async (loading, search, vm) => {
      try {
        const { data } = await busScheduleService.q({
          search: search,
        });
        vm.roptions = data;
      } catch (err) {
        console.log("err", err);
      }
    }, 350),
    async updateAssign() {
      try {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitted = false;
          return;
        }

        this.form.adminId = this.getUser.id; // admin Id
        const reponse = await assignService.update(
          this.$route.params.id,
          this.form
        );
        if (reponse.status) {
          this.submitted = false;
          this.$toast.open({
            message: reponse.message,
            type: "success",
            position: "top-right",
            duration: 3000,
            // all of other options may go here
          });
          setTimeout(
            () =>
              this.$router.push({
                path: `/trips/assign/list`,
              }),
            3000
          );
        }
      } catch (e) {
        this.$toast.open({
          message: e + "dfsdf",
          type: "error",
          position: "top-right",
          duration: 5000,
        });
      }
    },
  },
  mounted() {
    this.loadRoutes();
    this.getBookingAssign();
  },
};
</script>

<style scoped>
.mx-datepicker {
  width: 540px !important;
}
.mx-datepicker
  .mx-datepicker-main
  .mx-datepicker-content
  .mx-datepicker-body
  .mx-calendar-panel-date {
  width: 540px;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
