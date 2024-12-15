<template>
  <div>
    <vue-bootstrap4-table
      :rows="rows"
      :columns="columns"
      :config="config"
      @refresh-data="onRefreshData"
      @on-change-query="onChangeQuery"
      :total-rows="total_rows"
      :classes="classes"
      :show-loader="showLoader"
    >
      <template slot="card-header">
        <b-row>
          <b-col cols="6">
            <p class="float-left">
              Customer Name : {{ customer_details.firstname }}
              {{ customer_details.lastname }}
            </p>
          </b-col>
          <b-col cols="6">
            <p class="float-right">
              Customer Phone : +{{ customer_details.country_code }}
              {{ customer_details.phone }}
            </p>
          </b-col>
        </b-row>
      </template>

      <template slot="location" slot-scope="props">
        <b>Route Name :</b> {{ props.row.location.route_name }} <br />
        <b> Pickup :</b>
        {{ props.row.location.pickup_location }}<br />
        <b> Dropoff:</b>
        {{ props.row.location.drop_location }}
      </template>

      <template slot="date_time" slot-scope="props">
        {{ dateFormated(props.row.booking_date, dateFormat.value) }} <br />
        <small>{{ props.row.start_time }} - {{ props.row.drop_time }}</small
        >`
      </template>

      <template slot="stopping_points" slot-scope="props">
        <span>
          <small>{{ props.row.location.pickup_location }}</small> -
          <small> {{ props.row.location.drop_location }}</small></span
        ><br />

        <small
          >from <b>{{ props.row.location.route_name }}</b></small
        >
      </template>

      <template slot="payment_status" slot-scope="props">
        <span v-if="props.column.name == 'payment_status'">
          <b-badge
            variant="success"
            v-if="props.row.payment_status == 'Completed'"
            >Completed</b-badge
          >
          <b-badge
            variant="warning"
            v-else-if="props.row.payment_status == 'Processing'"
            >Processing</b-badge
          >
          <b-badge
            variant="info"
            v-else-if="props.row.payment_status == 'Pending'"
            >Pending</b-badge
          >
          <b-badge
            variant="danger"
            v-else-if="props.row.payment_status == 'Failed'"
            >Failed</b-badge
          >
        </span>
      </template>

      <template slot="action" slot-scope="props">
        <span
          v-if="
            props.column.name == 'action' &&
            (travel_status === 'COMPLETED' ||
              travel_status === 'ONBOARDED' ||
              travel_status === 'SCHEDULED')
          "
        >
          <b-button
            variant="outline-dark"
            size="sm"
            @click="viewRow(props.row)"
          >
            <i class="mdi mdi-eye"></i> Details</b-button
          >
        </span>
        <span v-else>-</span>
      </template>

      <template slot="vbt-action-buttons">
        <b-row>
          <b-col md="5" sm="5" lg="5"></b-col>
          <b-col md="4" sm="5" lg="4">
            <label>Booking Status Filters :</label>
            <b-form-select
              label="Booking Status Filters :"
              v-model="travel_status"
              :options="optionStatus"
              @change="loadItems"
              size="md"
            >
            </b-form-select>
          </b-col>
        </b-row>
      </template>
    </vue-bootstrap4-table>

    <!---START EDIT Modal--->
    <b-modal
      ref="myModalRefBookingHistory"
      size="xl"
      :ok-title="modaloktitle"
      @hidden="hideModal"
      @ok="handleOk"
    >
      <span v-if="modalView == true">
        <modalView :modalData="modalData"
      /></span>
    </b-modal>
    <!--END EDIT modal--->
  </div>
</template>

<script>
import { customerService } from "../../../services";
import VueBootstrap4Table from "vue-bootstrap4-table";
import { mapState } from "pinia";
import { useApp } from "../../../store/useApp";
import { getDateFormat } from "../../../helpers/utils";
import ModalView from "../../../components/bookings/ModalView.vue";

export default {
  data() {
    return {
      optionStatus: [
        {
          text: "Completed",
          value: "COMPLETED",
        },
        {
          text: "Scheduled",
          value: "SCHEDULED",
        },
        {
          text: "Onboarded",
          value: "ONBOARDED",
        },
        {
          text: "Expired",
          value: "EXPIRED",
        },
        {
          text: "Cancelled",
          value: "CANCELLED",
        },
      ],
      rows: [],
      columns: [
        {
          label: "PNR",
          name: "pnr_no",
          sort: true,
        },
        {
          label: "Date/Time",
          name: "date_time",
          sort: true,
        },
        {
          label: "Stop/Route",
          name: "stopping_points",
          sort: true,
        },
        {
          label: "Bus Name",
          name: "bus_name",
          //   filter: {
          //     type: "simple",
          //     placeholder: "Enter bus name",
          //   },
          sort: true,
        },
        {
          label: "Total Passengers",
          name: "passengers",
          sort: true,
        },

        {
          label: "Total Fare",
          name: "final_total_fare",
          sort: true,
        },

        {
          label: "Action",
          name: "action",
          sort: false,
        },
      ],
      config: {
        server_mode: true, // by default false
        loaderText: "Updating...", // by default 'Loading...'
        pagination: true,
        global_search: {
          placeholder: "Enter search customer histories",
          visibility: true,
          case_sensitive: false,
          showClearButton: false,
          searchOnPressEnter: false,
          searchDebounceRate: 1000,
        },
        per_page_options: [10, 20, 30, 50, 100],
        highlight_row_hover_color: "silver",
        highlight_row_hover: true,
        card_mode: true,
      },
      dropdowns: [],
      classes: {
        table: "table-bordered table-striped",
      },
      queryParams: {
        sort: [],
        filters: [],
        global_search: "",
        per_page: 10,
        page: 1,
      },
      sortType: "desc",
      sortBy: "createdAt",
      travel_status: "COMPLETED",
      total_rows: 0,
      showLoader: true,
      modalView: false,
      modalData: {},
      modaloktitle: "",
      customer_details: {},
    };
  },
  components: {
    VueBootstrap4Table,
    ModalView,
  },
  computed: {
    ...mapState(useApp, ["dateFormat", "timeFormat"]),
  },
  methods: {
    dateFormated(createdAt, format) {
      return getDateFormat(createdAt, format);
    },
    viewRow(data) {
      this.title = "Customer Booking History Details";
      this.modalView = true;
      this.modalEdit = false;
      this.modaloktitle = "Ok";
      this.$refs.myModalRefBookingHistory.show();
      this.modalData = data;
    },
    hideModal() {
      this.$refs.myModalRefBookingHistory.hide();
      this.modalEdit = false;
      this.modalView = false;
    },
    handleOk() {
      // Prevent modal from closing
      //  bvModalEvt.preventDefault();
      this.$refs.myModalRefBookingHistory.hide();
      this.modalEdit = false;
      this.modalView = false;
      // Trigger submit handler
    },
    loadItems() {
      this.showLoader = true;
      this.queryParams.travel_status = this.travel_status;
      this.queryParams.sortType = this.sortType;
      this.queryParams.sortBy = this.sortBy;
      customerService
        .bookingHistory(this.$route.params.userId, this.queryParams)
        .then((response) => {
          this.total_rows = response.data.totalRecords;
          this.rows = response.data.bookinghistories;
          this.showLoader = false;
          this.customer_details = response.data.customer_details;
        });
    },
    onRefreshData() {
      this.showLoader = true;
      this.loadItems();
    },
    onChangeQuery(queryParams) {
      queryParams.travel_status = this.travel_status;
      queryParams.sortType = this.sortType;
      queryParams.sortBy = this.sortBy;
      this.queryParams = queryParams;
      this.showLoader = true;
      this.loadItems();
    },
  },
  mounted() {
    this.loadItems();
  },
};
</script>

<style lang="scss" scoped></style>
