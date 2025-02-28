<template>
  <div>
    <section class="tables">
      <div class="row">
        <div class="col-lg-12">
          <Breadcrumb :breadcrumbs="breadcrumbs" />
        </div>
        <div class="col-lg-8 offset-lg-2 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <b-form @submit.prevent="updateCustomer">

              <b-form-group
                  label="Company Name"
                  label-for="company-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-input
                    id="company-input"
                    v-model.trim="form.company"
                    type="text"
                    placeholder="Enter company name"
                    :class="{
                      'is-invalid': submitted || $v.form.company.$error,
                    }"
                    :state="validateState('company')"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    v-if="submitted || !$v.form.company.required"
                    class="invalid-feedback"
                  >
                    company name is required
                  </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                  label="Employee Code"
                  label-for="customer-code-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-input
                    id="customer-code-input"
                    v-model.trim="form.customer_code"
                    type="text"
                    placeholder="Enter Employee code"
                    :class="{
                      'is-invalid': submitted || $v.form.customer_code.$error,
                    }"
                    :state="validateState('customer_code')"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    v-if="submitted || !$v.form.customer_code.required"
                    class="invalid-feedback"
                  >
                  Employee code name is required
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                  label="First name"
                  label-for="firstname-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-input
                    id="firstname-input"
                    v-model.trim="form.firstname"
                    type="text"
                    placeholder="Enter first name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Last name"
                  label-for="lastname-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-input
                    id="lastname-input"
                    v-model.trim="form.lastname"
                    type="text"
                    placeholder="Enter last name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Email Address"
                  label-for="email-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-input
                    id="email-input"
                    v-model.trim="$v.form.email.$model"
                    type="email"
                    placeholder="Enter email address"
                    :class="{
                      'is-invalid': submitted && $v.form.email.$error,
                    }"
                    :state="validateState('email')"
                  ></b-form-input>
                 
                </b-form-group>
                <b-form-group
                  label="Country code"
                  label-for="country-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-select
                    v-model.trim="$v.form.country_code.$model"
                    :options="countries"
                    :class="{
                      'is-invalid': submitted && $v.form.country_code.$error,
                    }"
                    :state="validateState('country_code')"
                  >
                    <template #first>
                      <b-form-select-option
                        class="text-sm"
                        :value="null"
                        disabled
                        >-- Please select an country code
                        --</b-form-select-option
                      >
                    </template>
                  </b-form-select>
                  <b-form-invalid-feedback
                    v-if="submitted || !$v.form.country_code.required"
                    class="invalid-feedback"
                  >
                    country code is required
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                  label="Phone Number"
                  label-for="phone-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-input
                    id="phone-input"
                    v-model.trim="form.phone"
                    placeholder="Enter phone number"
                    :class="{
                      'is-invalid': submitted || $v.form.phone.$error,
                    }"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    v-if="submitted || !$v.form.phone.required"
                    class="invalid-feedback"
                  >
                    mobile number is required
                  </b-form-invalid-feedback>
                  <b-form-invalid-feedback v-if="!$v.form.phone.minLength">
                    mobile number must have at least
                    {{ $v.form.phone.$params.minLength.min }} letters.
                  </b-form-invalid-feedback>

                  <b-form-invalid-feedback v-if="!$v.form.phone.maxLength">
                    mobile number must have at least
                    {{ $v.form.phone.$params.maxLength.max }} letters.
                  </b-form-invalid-feedback>
                  <b-form-invalid-feedback v-if="!$v.form.phone.uniquePhone">
                    Phone number already exists.
                  </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                  label="Time"
                  label-for="time-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                ><b-form-input
                    id="time-input"
                    v-model.trim="$v.form.time_for_user.$model"
                    type="time"
                    placeholder="Enter time"
                    :class="{
                      'is-invalid': submitted || $v.form.time_for_user.$error,
                    }"
                    :state="validateState('time_for_user')"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    v-if="submitted || !$v.form.time_for_user.required"
                    class="invalid-feedback"
                  >
                    Time is required
                  </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                  label="Status "
                  label-for="status-input"
                  invalid-feedback="status is required"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-radio-group
                    :options="options"
                    v-model="form.status"
                    name="status"
                  ></b-form-radio-group>
                </b-form-group>

                <div v-show="showroute">
                <b-form-group
                label="Pickup Location"
                label-for="title-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
              >
                <multiselect
                  v-model.trim="form.pickup_location[0].location"
                  :options="locationOptions"
                  placeholder="Pickup Location"
                  label="title"
                  track-by="title"
                  :searchable="true"
                  :loading="submitted"
                  @search-change="fetchLocations"
                >
                  <template slot="option" slot-scope="props">
                    {{ props.option.title }}
                  </template>
                  <template slot="noOptions">
                    No stop found.</template
                  >
                  <template slot="noResult">
                    stop searched not matched.</template
                  >
                </multiselect>
              </b-form-group>

              <b-form-group
                label="Drop Location"
                label-for="title-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
              >
                <multiselect
                  v-model.trim="form.drop_location[0].location"
                  :options="locationOptions"
                  placeholder="Drop Location"
                  label="title"
                  track-by="title"
                  :searchable="true"
                  :loading="submitted"
                  @search-change="fetchLocations"
                  @select="onDropLocationSelect"
                >
                  <template slot="option" slot-scope="props">
                    {{ props.option.title }}
                  </template>
                  <template slot="noOptions">
                    No stop found.</template
                  >
                  <template slot="noResult">
                    stop searched not matched.</template
                  >
                </multiselect>
              </b-form-group>

                <b-form-group
                  label="Route"
                  label-for="route-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-select
                    v-model.trim="$v.form.route.$model"
                    :options="routeOption"
                    :class="{
                      'is-invalid': submitted && $v.form.route.$error,
                    }"
                    :state="validateState('route')"
                    @change="getBuses"
                  >
                    <template #first>
                      <b-form-select-option
                        class="text-sm"
                        :value="null"
                        disabled
                        >-- Please select an Route
                        --</b-form-select-option
                      >
                    </template>
                  </b-form-select>
                </b-form-group>


                <b-form-group
                  label="Vehicle"
                  label-for="bus-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-select
                    v-model.trim="$v.form.bus.$model"
                    :options="buses"
                    :class="{
                      'is-invalid': submitted && $v.form.bus.$error,
                    }"
                    :state="validateState('bus')"
                    @change="getAvaialbleSeats"
                  >
                    <template #first>
                      <b-form-select-option
                        class="text-sm"
                        :value="null"
                        disabled
                        >-- Please select an Vehicle
                        --</b-form-select-option
                      >
                    </template>
                  </b-form-select>
                </b-form-group>


                <b-form-group
                  label="Seat"
                  label-for="seat-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-select
                    v-model.trim="$v.form.seat.$model"
                    :options="seats"
                    :class="{
                      'is-invalid': submitted && $v.form.seat.$error,
                    }"
                    :state="validateState('seat')"
                  >
                    <template #first>
                      <b-form-select-option
                        class="text-sm"
                        :value="null"
                        disabled
                        >-- Please select an Seat
                        --</b-form-select-option
                      >
                    </template>
                  </b-form-select>
                </b-form-group>
                <div v-show="show">
                  <b-form-group
                    label="Return Route"
                    label-for="returnroute-input"
                    label-cols-sm="4"
                    label-cols-lg="3"
                    content-cols-sm
                    content-cols-lg="7"
                  >
                  <b-form-select
                    v-model.trim="$v.form.return_route.$model"
                    :options="return_routeOption"
                    :class="{
                      'is-invalid': submitted && $v.form.return_route.$error,
                    }"
                    :state="validateState('return_route')"
                    @change="getReturnBuses"
                  >
                    <template #first>
                      <b-form-select-option
                        class="text-sm"
                        :value="null"
                        disabled
                        >-- Please select an Route
                        --</b-form-select-option
                      >
                    </template>
                  </b-form-select>
                  </b-form-group>

                  <b-form-group
                    label="Return Vehicle"
                    label-for="returnbus-input"
                    label-cols-sm="4"
                    label-cols-lg="3"
                    content-cols-sm
                    content-cols-lg="7"
                  >
                    <b-form-select
                      v-model.trim="$v.form.return_bus.$model"
                      :options="return_buses"
                      :class="{
                        'is-invalid': submitted && $v.form.return_bus.$error,
                      }"
                      :state="validateState('return_bus')"
                      @change="getReturnAvaialbleSeats"
                    >
                      <template #first>
                        <b-form-select-option
                          class="text-sm"
                          :value="null"
                          disabled
                          >-- Please select an Vehicle
                          --</b-form-select-option
                        >
                      </template>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group
                    label="Return Seat"
                    label-for="returnseat-input"
                    label-cols-sm="4"
                    label-cols-lg="3"
                    content-cols-sm
                    content-cols-lg="7"
                  >
                    <b-form-select
                      v-model.trim="$v.form.return_seat.$model"
                      :options="return_seats"
                      :class="{
                        'is-invalid': submitted && $v.form.return_seat.$error,
                      }"
                      :state="validateState('return_seat')"
                    >
                      <template #first>
                        <b-form-select-option
                          class="text-sm"
                          :value="null"
                          disabled
                          >-- Please select an Seat
                          --</b-form-select-option
                        >
                      </template>
                    </b-form-select>
                  </b-form-group>
                </div>
                <b-form-group
                  label="Is Return?"
                  label-for="return-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                ><b-form-checkbox
                id="checkbox-1"
                v-model="$v.form.has_return.$model"
                name="checkbox-1"
                value="1"
                unchecked-value="0"
                @change='isReturn()'
              >
              </b-form-checkbox>
            </b-form-group>
            </div>
              <div class="d-flex justify-content-center ">
                <input v-if="showroute == false"
                  name="addpd"
                  @click="addnewbooking"
                  class="btn btn-outline-primary mb-4"
                  type="button"
                  value="+ Create new default booking"
                />
                <input v-if="showroute == true"
                  name="addpd"
                  @click="addnewbooking"
                  class="btn btn-outline-primary mb-4"
                  type="button"
                  value="+ Reset default booking"
                />
              </div>
                <b-form-group class="col-md-6 offset-md-4">
                  <b-button
                    type="submit"
                    class="btn btn-lg btn-success text-center"
                  >
                    <span
                      class="pl-2 spinner-border spinner-border-sm"
                      v-show="submitted"
                    >
                    </span
                    >Update</b-button
                  >
                </b-form-group>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumb from "../../components/breadcrumb";
import { validationMixin } from "vuelidate";
import { required, email, numeric, minLength, maxLength } from "vuelidate/lib/validators";

import { customerService, locationService, routeService, buslayoutService } from "../../services";
import lodash from "lodash";
import Multiselect from "vue-multiselect";

export default {
  name: "customeredit",
  mixins: [validationMixin],
  data() {
    return {
      show:false,
      showroute:false,
      breadcrumbs: {
        title: "Edit Employee",
        b1: "Manage Employee",
        b2: "Employee",
        b3: "Index",
        link: true,
        name: "customer",
      },
      locationOptions: [],
      loading: false,
      form: {
        id: "",
        company: "",
        customer_code: "",
        firstname: "",
        lastname: "",
        gender: "",
        country_code: "91",
        phone: "",
        email: "",
        time_for_user: "",
        is_active: "",
        busScheduleId: "",
        refercode: "",
        pickup_location: [
          {
            location: [{}],
          },
        ],
        drop_location: [
            {
              location: [{}],
            }
        ],
        route: null,
        bus: null,
        seat: null,
        return_route: null,
        return_bus: null,
        return_seat: null,
        has_return:"",
      },
      options: [
        { text: "Active", value: "true" },
        { text: "Inactive", value: "false", default: true },
      ],
      submitted: false,
      countries: [],
      routeOption: [],
      return_routeOption: [],
      buses: [],
      return_buses: [],
      seats: [],
      return_seats: [],
      gender_options: [
        { text: "Male", value: "Male", default: 'Male' },
        { text: "Female", value: "Female"},
      ],
      isLoading: false,
    };
  },
  validations: {
    form: {
      company: { required },
      customer_code: { required },
      firstname: { required },
      lastname: { required },
      email: { email },
      phone: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10),
        async uniquePhone(value) {
          if (value === "") return true;

          const { status } = await customerService.isExists({ phone: value, id: this.$route.params.id });
          return status;
        },
      },
      country_code: { required },
      gender: { required },
      route: {},
      bus: {},
      seat: {},
      time_for_user: {},
      busScheduleId: {},
      refercode: {},
      has_return: {},
      return_route: {},
      return_bus: {},
      return_seat: {},
    },
  },
  components: {
    Breadcrumb,
    Multiselect
  },
  mounted() {
    this.getcustomer();
    this.loadCountries();
  },
  methods: {
    addnewbooking: function() {
      if (this.showroute == true) {
        this.showroute = false;
        this.form.pickup_location[0].location = "";
        this.form.drop_location[0].location = "";
        this.route = "";
        this.bus = "";
        this.seat = "";
        this.return_route = "";
        this.return_bus = "";
        this.return_seat = "";
        this.show = false;
      } else {
        this.showroute = true;
      }
    },
    isReturn: function () {
      if (this.form.has_return == 1) {
        this.show = true;
        this.searchReturnRoute();
      } else {
        this.show = false;
      }
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    async loadCountries() {
      this.countries =  [{text:"India (+91)",value:"91", default:true}];
    },
    async getcustomer() {
      try {
        const response = await customerService.find(this.$route.params.id);
        if (response.status) {
          this.form.company = response.data.company;
          this.form.customer_code = response.data.customer_code;
          this.form.firstname = response.data.firstname;
          this.form.lastname = response.data.lastname;
          this.form.gender = response.data.gender;
          this.form.email = response.data.email;
          this.form.phone = response.data.phone;
          this.form.id = response.data.id;
          this.form.refercode = response.data.refercode;
          this.form.country_code = response.data.country_code;
          this.form.status = response.data.status;
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
    fetchLocations(search, loading) {
      if (search.length) {
        let type = "PD";
        this.search(loading, search, type, this);
      }
    },
    search: lodash.debounce(async (loading, search, type, vm) => {
      try {
        const response = await locationService.searchLocation({
          type: type,
          search: search,
        });
        vm.locationOptions = response.items;
      } catch (err) {
        this.$toast.open({
          message: err,
          type: "error",
          position: "top-right",
          duration: 5000,
        });
      }
    }, 350),
    searchReturnRoute () {
      routeService.searchRoute({
        drop_lat:this.form.pickup_location[0].location.coordinates[1],
        drop_long:this.form.pickup_location[0].location.coordinates[0],
        pickup_lat:this.form.drop_location[0].location.coordinates[1],
        pickup_long:this.form.drop_location[0].location.coordinates[0],
      }).then((response) => {
        this.return_routeOption = response.data;
      });
    },
    onDropLocationSelect () {
      routeService.searchRoute({
        pickup_lat:this.form.pickup_location[0].location.coordinates[1],
        pickup_long:this.form.pickup_location[0].location.coordinates[0],
        drop_lat:this.form.drop_location[0].location.coordinates[1],
        drop_long:this.form.drop_location[0].location.coordinates[0],
      }).then((response) => {
        this.routeOption = response.data;
      });
      
    },
    getBuses () {
      if (this.routeOption.length > 0) {
        for (let i = 0; i < this.routeOption.length; i++) {
          if (this.routeOption[i].value == this.form.route) {
            this.buses = [{"text":this.routeOption[i].bus_details.name, "value": this.routeOption[i].route_busId}]
          }
        }
      }
    },
    getReturnBuses () {
      if (this.return_routeOption.length > 0) {
        for (let i = 0; i < this.return_routeOption.length; i++) {
          if (this.return_routeOption[i].value == this.form.return_route) {
            this.return_buses = [{"text":this.return_routeOption[i].bus_details.name, "value": this.return_routeOption[i].route_busId}]
          }
        }
      }
    },
    getAvaialbleSeats () {
      let busScheduleId = "";
      if (this.routeOption.length > 0) {
        for (let i = 0; i < this.routeOption.length; i++) {
          if (this.routeOption[i].value == this.form.route) {
            busScheduleId = this.routeOption[i].busScheduleId;
            this.form.busScheduleId = this.routeOption[i].busScheduleId;
          }
        }
      }

      buslayoutService.searchSeat(this.form.bus, busScheduleId).then((response) => {
        this.seats = response.data;
      });
    },
    getReturnAvaialbleSeats () {
      let returnBusScheduleId = "";
      if (this.return_routeOption.length > 0) {
        for (let i = 0; i < this.return_routeOption.length; i++) {
          if (this.return_routeOption[i].value == this.form.return_route) {
            returnBusScheduleId = this.return_routeOption[i].busScheduleId;
            this.form.return_busScheduleId = this.return_routeOption[i].busScheduleId;
          }
        }
      }
      buslayoutService.searchSeat(this.form.bus, returnBusScheduleId).then((response) => {
        this.return_seats = response.data;
      });
    },
    async updateCustomer() {
      try {
        this.submitted = true;
        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }

        const response = await customerService.update(
          this.$route.params.id,
          this.form
        );
        if (response.status) {
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 2000,
            // all of other options may go here
          });
          setTimeout(
            () =>
              this.$router.push({
                path: `/customers`,
              }),
            2000
          );
        }
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 5000,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>