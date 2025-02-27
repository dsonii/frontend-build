<template>
  <section class="tables">
    <div class="row">
      <div class="col-lg-12">
        <Breadcrumb :breadcrumbs="breadcrumbs" />
      </div>
      <div class="col-lg-12 grid-margin stretch-card">
        <vue-bootstrap4-table
          :rows="rows"
          :columns="columns"
          :config="config"
          @on-change-query="onChangeQuery"
          @refresh-data="onRefreshData"
          :total-rows="total_rows"
          :classes="classes"
          :show-loader="showLoader"
        >
          <template slot="empty-results"> No vehicle schedule found </template>
          <template slot="global-search-clear-icon">
            <i class="mdi mdi-account-search"></i>
          </template>

          
          <template slot="status" slot-scope="props">
            
            <span v-if="props.column.name == 'status'">
                <b-badge
                  variant="success"
                  v-if="props.row.status == 'Active'"
                  >Active</b-badge
                >
                <b-badge
                  variant="warning"
                  v-else-if="props.row.status == 'Inactive'"
                  >InActive</b-badge
                >
              </span>
          </template>

          <template slot="departure_to_arrival_time" slot-scope="props">
            {{ momentFormat(props.row.departure_time, timeFormat.value) }}
            to {{ momentFormat(props.row.arrival_time, timeFormat.value) }}
          </template>
          <template slot="createdAt" slot-scope="props">
            {{ momentFormat(props.row.createdAt, dateFormat.value) }}
          </template>

          <template slot="action" slot-scope="props">
            <span v-if="props.column.name == 'action'">
              <b-dropdown
                id="dropdown-left"
                text="Actions"
                variant="outline-info"
                class="m-2"
              >
                <b-dropdown-item @click="viewRow(props.row)">
                  <span class="text-dark">
                    <i class="mdi mdi-eye"></i> View
                  </span></b-dropdown-item
                >
                <b-dropdown-item :href="'#/bus-schedules/' + props.row.ids"
                  ><span class="text-primary">
                    <i class="mdi mdi-pencil"></i> Edit
                  </span></b-dropdown-item
                >
                <b-dropdown-item
                  @click.stop="deleteRow(props.row.ids, props.row.title)"
                  ><span class="text-danger">
                    <i class="mdi mdi-delete"></i> Delete
                  </span></b-dropdown-item
                >
              </b-dropdown>
            </span>
          </template>

          <template slot="paginataion-previous-button"> Previous </template>
          <template slot="paginataion-next-button"> Next </template>

          <template slot="vbt-action-buttons">
            <b-row class="btn-group float-left">
              <b-col md="5" sm="5" lg="5"></b-col>
              <b-col md="5" sm="5" lg="5">
                <label>Route Filters :</label>
                <b-form-select
                  label="Route Filters :"
                  v-model="routeId"
                  :options="optionRoutes"
                  @change="routeFilters"
                  size="md"
                >
                  <b-form-select-option :value="null"
                    >All Routes</b-form-select-option
                  >
                </b-form-select>
              </b-col>
            </b-row>
          </template>

          <template slot="vbt-action-buttons">
            <div
              class="btn-group float-right"
              role="group"
              aria-label="Basic example"
            >
                <router-link v-if="showMenue('bus.load')"
                  class="nav-link btn btn-success mr-2"
                  :to="{
                    path: '/bus-schedules/create',
                  }"
                  >Create</router-link
                >
              <download-excel
                class="btn btn-success"
                :data="excelDownload"
                :name="excelName"
              >
                Excel <i class="mdi mdi-file-excel-box"></i>
              </download-excel>
            </div>
          </template>
        </vue-bootstrap4-table>

        <!---START EDIT Modal--->
        <b-modal
          ref="myModalRefTimetable"
          :title="title"
          size="xl"
          :ok-title="modaloktitle"
          @hidden="hideModal"
          @ok="handleOk"
        >
          <span v-if="modalView == true"> <modalView :form="form" /></span>
        </b-modal>
        <!--END EDIT modal--->
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumb from "../../../components/breadcrumb";
import VueBootstrap4Table from "vue-bootstrap4-table";
import { busScheduleService, routeService } from "../../../services";
import modalView from "./modelView";
import { mapState } from "pinia";
import { useApp } from "../../../store/useApp";
import { getDateFormat } from "../../../helpers/utils";
import downloadExcel from "vue-json-excel";
import moment from "moment-timezone";
import { useAuth } from "../../../store/useAuth.js";
export default {
  name: "timetable",
  data() {
    return {
      breadcrumbs: {
        title: "Vehicle Schedules",
        b1: "Manage Vehicle Schedules",
        b2: "Vehicle Schedules",
        b3: "Index",
        link: false,
        name: "bus-schedules",
      },
      optionRoutes: [],
      routeId: null,
      options: [
        { text: "Active", value: "Active" },
        { text: "Inactive", value: "Inactive" },
      ],
      columns: [
        {
          label: "Route",
          name: "route_name",
          sort: true,
        },
        {
          label: "Vehicle",
          name: "bus_name",
          sort: true,
        },
        {
          label: "Departure to Arriving",
          name: "departure_to_arrival_time",
          sort: true,
        },
        {
          label: "Operations",
          name: "start_to_end",
          sort: true,
        },
        {
          label: "Status",
          name: "status",
          sort: true,
        },
        {
          label: "CreatedAt",
          name: "createdAt",
        },
        { label: "Action", name: "action", sort: false },
      ],
      rows: [],
      config: {
        server_mode: true, // by default false
        loaderText: "Updating...", // by default 'Loading...'
        pagination: true,
        global_search: {
          placeholder: "Enter search vehicle schedules",
          visibility: true,
          case_sensitive: false,
          showClearButton: false,
          searchOnPressEnter: false,
          searchDebounceRate: 1000,
        },
        per_page_options: [10, 20, 30, 50, 100],
        highlight_row_hover_color: "silver",
        // card_title: "Vue Bootsrap 4 advanced table",
        card_mode: true,
        show_refresh_button: false,
        show_reset_button: false,
      },
      dropdowns: [],
      classes: {
        table: "table-striped table-bordered",
      },
      queryParams: {
        sort: [],
        // filters: [],
        global_search: "",
        per_page: 10,
        page: 1,
      },
      total_rows: 0,
      showLoader: false,
      modalEdit: false,
      modalView: false,
      modaloktitle: "",
      title: "",
      form: [],
    };
  },
  components: {
    Breadcrumb,
    VueBootstrap4Table,
    modalView,
    downloadExcel,
  },
  computed: {
    ...mapState(useAuth,['isAuth', 'getRolePermissionsArr']),
    ...mapState(useApp, ["dateFormat", "timeFormat"]),
    excelDownload() {
      return busScheduleService.tranform(this.rows);
    },
    excelName() {
      return this.breadcrumbs.title + "_" + moment().local().unix();
    },
  },
  methods: {
    showMenue(data) {
      if (this.getRolePermissionsArr.length > 0) {
        if (this.getRolePermissionsArr.includes(data)) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    momentFormat(createdAt, format) {
      return getDateFormat(createdAt, format);
    },
    async loadRoutes() {
      const response = await routeService.load();
      if (response.status) {
        this.optionRoutes = response.data;
      }
    },
    viewRow(data) {
      this.title = "Timetable Details";
      this.modalView = true;
      this.modalEdit = false;
      this.modaloktitle = "Ok";
      this.$refs.myModalRefTimetable.show();
      this.form = data;
    },
    deleteRow(id) {
      try {
        this.$swal
          .fire({
            title: `Are you sure you want to delete?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          })
          .then((result) => {
            if (result.isConfirmed) {
              busScheduleService.remove(id).then((response) => {
                if (
                  typeof response.data === "object" &&
                  response.data.status === 403
                ) {
                  this.$swal.fire(response.data.message, "", "error");
                  this.$toast.open({
                    message: response.data.message,
                    type: "error",
                    position: "top-right",
                    duration: 3000,
                    // all of other options may go here
                  });
                  this.showLoader = false;
                } else if (response.status) {
                  this.$swal.fire("Deleted!", response.message, "success");
                  this.$toast.open({
                    message: response.message,
                    type: "success",
                    position: "top-right",
                    duration: 3000,
                    // all of other options may go here
                  });
                  this.showLoader = true;
                  this.loadItems();
                }
              });
            }
          });
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 5000,
        });
      }
    },
    hideModal() {
      this.$refs.myModalRefRoute.hide();
      this.modalEdit = false;
      this.modalView = false;
    },
    handleOk() {
      // Prevent modal from closing
      this.$refs.myModalRefRoute.hide();
      this.modalEdit = false;
      this.modalView = false;
      // Trigger submit handler
    },
    updateStatus(status, id) {
      busScheduleService.status(id, { status }).then((response) => {
        if (response.status) {
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 3000,
          });
        } else {
          this.$toast.open({
            message: response.message,
            type: "danger",
            position: "top-right",
            duration: 3000,
          });
        }
      });
    },
    onChangeQuery(queryParams) {
      this.queryParams = queryParams;
      this.showLoader = true;
      this.loadItems();
    },
    onRefreshData() {
      this.showLoader = true;
      this.loadItems();
    },
    routeFilters() {
      this.queryParams.routeId = this.routeId;
      this.showLoader = true;
      this.loadItems();
    },
    loadItems() {
      busScheduleService.getAll(this.queryParams).then((response) => {
        this.total_rows = response.data.totalRecords;
        this.rows = response.data.busschedules;
        this.showLoader = false;
      });
    },
  },
  mounted() {
    this.loadItems();
    this.loadRoutes();
  },
};
</script>

<style lang="scss" scoped></style>
