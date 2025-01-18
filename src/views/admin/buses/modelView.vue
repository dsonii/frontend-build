<template>
  <div>
    <section class="tables">
      <div class="row">
        <div class="col-lg-12">
          <Breadcrumb :breadcrumbs="breadcrumbs" />
        </div>
        <div class="col-lg-12 grid-margin ">
          <vue-bootstrap4-table
            :rows="rows"
            :columns="columns"
            :total-rows="1"
            :classes="classes"
            :show-loader="showLoader"
            :config="config"
          >
          </vue-bootstrap4-table>
          <!--END EDIT modal--->
        </div>
      </div>
      <table class="table  table-bordered  table-striped styledClass">
        <tr>
          <td>Picture</td>
          <td>Registration</td>
          <td>Pollution</td>
          <td>Fitness</td>
          <td>Insurance</td>
          <td>Permit</td>
         </tr>
         <tr>
          <td><b-img
              class="img-fluid"
               width="150"
              height="50"
              :src="modalData.picture"
            ></b-img>
          </td>
          
          <td><b-img
              class="img-fluid"
               width="150"
              height="50"
              :src="modalData.certificate_registration"
            ></b-img
          ></td>

          <td><b-img
              class="img-fluid"
              width="150"
              height="50"
              :src="modalData.certificate_pollution"
            ></b-img
          ><br/>Exp.: {{ 
            dateFormatDate(
              modalData.certificate_pollution_expiry_date, 
              'Y-MM-DD'
            ) 
          }}</td>

          
          <td><b-img
              class="img-fluid"
               width="150"
              height="50"
              :src="modalData.certificate_fitness"
            ></b-img
          ><br/>Exp.: {{ 
            dateFormatDate(
              modalData.certificate_fitness_expiry_date, 
              'Y-MM-DD'
            ) 
          }}</td>
          
          <td><b-img
              class="img-fluid"
              width="150"
              height="50"
              :src="modalData.certificate_insurance"
            ></b-img
          ><br/>Exp.: {{ 
            dateFormatDate(
              modalData.certificate_insurance_expiry_date, 
              'Y-MM-DD'
            ) 
          }}</td>

          
          <td><b-img
              class="img-fluid"
              width="150"
              height="50"
              :src="modalData.certificate_permit"
            ></b-img
          ><br/>Exp.: {{ 
            dateFormatDate(
              modalData.certificate_permit_expiry_date, 
              'Y-MM-DD'
            ) 
          }}</td>
        </tr>
        </table>
    </section>
  </div>
</template>

<script>
import moment from "moment-timezone";
import { getDateFormat } from "../../../helpers/utils";
import VueBootstrap4Table from "vue-bootstrap4-table";

export default {
  name: "modelView",
  props: ["modalData"],
  data() {
    return {
      title: "",
      breadcrumbs: {
        title: "Vehicle Lists",
        b1: "Manage Vehicles",
        b2: "Vehicles",
        b3: "Index",
        link: false,
        name: "Vehicle lists",
      },
      showLoader: false,
      columns: [
        {
          label: "Vehicle Name",
          name: "vehicle_name",
          sort: false,
        },
        {
          label: "Max Seats",
          name: "max_seats",
          sort: false,
        },
        {
          label: "Reg No",
          name: "reg_no",
          sort: false,
        },
        {
          label: "Type",
          name: "type",
          sort: false,
        },
        {
          label: "Status",
          name: "status",
          sort: false,
        },
        {
          label: "Created By",
          name: "createdBy",
          sort: false,
        },
      ],
      rows: [{
          "vehicle_name": this.modalData.name,
          "max_seats": this.modalData.max_seats,
          "reg_no": this.modalData.reg_no,
          "type": this.modalData.type,
          "status": this.modalData.status,
          "createdBy": this.modalData.created_by
        }],
        config: {
        pagination: false,
        global_search:  {
            placeholder:  "Enter custom Search text",
            visibility:  false,
            case_sensitive:  false
        },
        show_refresh_button:  false,
        show_reset_button:  false,
        pagination_info:false,
        card_mode: false,
      },
      classes: {
        table: " table-bordered  table-striped",
      },
      modalEdit: false,
      modalView: false,
      modaloktitle: "",
    };
  },
  components: {
    VueBootstrap4Table
  },
  methods: {
    dateConvert(data) {
      return moment.utc(data).tz("Asia/Kolkata").format("LLL");
    },
    dateFormatDate(data, format) {
      return getDateFormat(data, format);
    },
  },
};
</script>

<style>
.styledClass img {
    border-radius: 0 !important;
    height: 100px !important;
    width: 200px !important;
}
</style>
