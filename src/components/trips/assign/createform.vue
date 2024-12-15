<template>
  <div>
    <b-form @submit.prevent="createAssign">
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
          :loading="submitted"
          @search-change="fetchRoutes"
        >
          <template slot="option" slot-scope="props">
            <p>Route : {{ props.option.route_name }}</p>
            <p>
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
      </b-form-group>
      <b-form-group
        label="Driver"
        label-for="name-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <!-- <b-form-input
          v-model.trim="$v.form.driver.$model"
          list="drivers-list"
          placeholder=" type to drivers phone, name.. "
          @input="fetchDrivers"
          :class="{
            'is-invalid': submitted || $v.form.driver.$error,
          }"
          :state="validateState('driver')"
        ></b-form-input>
        <b-datalist id="drivers-list">
          <option v-for="option in options" :key="option">
            {{ option.title }}
          </option>
        </b-datalist>

        <b-form-invalid-feedback v-if="submitted || !$v.form.driver.required">
          Driver name is required
        </b-form-invalid-feedback> -->

        <multiselect
          v-model.trim="$v.form.driver.$model"
          :class="{
            'is-invalid': submitted || $v.form.driver.$error,
          }"
          :state="validateState('driver')"
          :options="options"
          placeholder="start typing to drivers phone, name.."
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

        <!-- <v-select
          @search="fetchDrivers"
          label="type"
          :filterable="false"
          :options="options"
          v-model="form.driver"
          required
        >
          <template slot="no-options"> type to drivers phone, name.. </template>

          <template slot="option" slot-scope="option">
            <div class="d-center">
              {{ option.title }}
            </div>
          </template>
          <template slot="selected-option" slot-scope="option">
            <div class="selected d-center">
              {{ option.title }}
            </div>
          </template>

          <template #search="{ attributes, events }">
            <input
              class="vs__search"
              :required="!form.driver"
              v-bind="attributes"
              v-on="events"
            />
          </template>
        </v-select> -->
      </b-form-group>
      <b-form-group
        label="Assistant"
        label-for="name-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <!-- <b-form-input
          v-model.trim="form.assistant"
          list="assistants-list"
          placeholder=" type to assistant phone, name.. "
          @input="fetchAssistants"
        ></b-form-input>
        <b-datalist id="assistants-list">
          <option
            v-for="option in aoptions"
            :key="option"
            @click="selectDriver(option.id)"
          >
            {{ option.title }}
          </option>
        </b-datalist> -->
        <!-- 
        <b-form-invalid-feedback
          v-if="submitted || !$v.form.assistant.required"
        >
          Assistant name is required
        </b-form-invalid-feedback> 
        
        
           :class="{
            'is-invalid': submitted || $v.form.assistant.$error,
          }"
          :state="validateState('assistant')"
        -->

        <multiselect
          v-model.trim="$v.form.assistant.$model"
          :class="{
            'is-invalid': submitted || $v.form.assistant.$error,
          }"
          :state="validateState('assistant')"
          :options="aoptions"
          placeholder="start typing to assistants phone, name.."
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

        <!-- <v-select
          multiple
          @search="fetchAssistants"
          :filterable="false"
          :options="aoptions"
          v-model="form.assistant"
        >
          <template slot="no-options">
            type to assistants phone, name..
          </template>

          <template slot="option" slot-scope="option">
            <div class="d-center">
              {{ option.title }}
            </div>
          </template>
          <template slot="selected-option" slot-scope="option">
            <div class="selected d-center">
              {{ option.title }}
            </div>
          </template>
        </v-select> -->
      </b-form-group>

      <b-form-group
        label="Dates"
        label-for="name-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <!-- <Datetime
          v-model="form.date_time"
          type="datetime"
          title="Date Time"
          input-class="form-control"
          :value-zone="timezone"
          :zone="timezone"
          class="theme-ferri"
          :format="{
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
          }"
          :phrases="{ ok: 'Continue', cancel: 'Exit' }"
          :week-start="7"
          auto
          required="Please select date and time is required"
        ></Datetime> -->

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

        <!-- <b-form-invalid-feedback
          v-if="submitted || !$v.form.date_time.required"
        >
          Please select date and time is required
        </b-form-invalid-feedback> -->
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
  assignService,
  busScheduleService,
} from "../../../services";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
// import vSelect from "vue-select";
import lodash from "lodash";
// import "vue-select/src/scss/vue-select.scss";
//import { Datetime } from "vue-datetime";
//import "vue-datetime/dist/vue-datetime.css";
import moment from "moment-timezone";
import { mapState } from "pinia";
import { fetchUsers } from "../../../store/fetchUsers.js";
import { useApp } from "../../../store/useApp";

import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import Multiselect from "vue-multiselect";
import { getDateFormat } from "../../../helpers/utils";

//console.log(startDate);

export default {
  mixins: [validationMixin],
  name: "createform",
  data() {
    return {
      submitted: false,
      loading: false,
      options: [],
      aoptions: [],
      roptions: [],
      form: {
        route: null,
        driver: "",
        assistant: "",
        dates: [],
      },
      minDatetime: "",
      maxDatetime: "",
    };
  },
  validations: {
    form: {
      route: { required },
      driver: { required },
      assistant: { required },
      //date_time: { required },
    },
  },
  computed: {
    ...mapState(fetchUsers, ["getUser"]),
    ...mapState(useApp, ["timezone", "dateFormat", "timeFormat"]),
  },
  components: {
    // vSelect,
    // Datetime,
    DatePicker,
    Multiselect,
  },
  mounted() {
    this.form.dates = this.currentDate();
  },
  methods: {
    currentDate: () => [moment().format("YYYY-MM-DD")],
    momentFormat(createdAt, format) {
      return getDateFormat(createdAt, format);
    },
    selectDriver(id) {
      this.form.driver = id;
    },
    disabledBeforeTodayAndAfterAWeek(date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // Check if today is Friday (5) or Saturday (6)
      //  const isFridayOrSaturday = today.getDay() === 5 || today.getDay() === 6;
      //   (isFridayOrSaturday && (date.getDay() === 5 || date.getDay() === 6))
      const current_date =
        date < today ||
        date > new Date(today.getTime() + 30 * 24 * 3600 * 1000);

      console.log("current_date", current_date);
      return current_date;
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    fetchRoutes(search, loading) {
      this.search3(loading, search, this);
    },
    fetchDrivers(search, loading) {
      if (search.length) {
        // loading(true);
        let type = "driver";
        this.search(loading, search, type, this);
      }
    },
    fetchAssistants(search, loading) {
      if (search.length) {
        // loading(true);
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
    async createAssign() {
      try {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitted = false;
          return;
        }

        this.form.adminId = this.getUser.id; // admin Id
        const reponse = await assignService.create(this.form);
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
        } else {
          this.submitted = false;
          this.$toast.open({
            message: reponse.message,
            type: "error",
            position: "top-right",
            duration: 3000,
            // all of other options may go here
          });
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
