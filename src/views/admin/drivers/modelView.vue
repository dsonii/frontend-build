<template>
  <div>
    <section class="tables">
    <div class="table-scroll">
      <table class="table  table-bordered  table-striped styledClass">
        <tr>
          <td>Full Name</td>
          <td>Email Address</td>
          <td>Phone</td>
          <td>Profile Picture</td>
          <td>Licence</td>
          <td>Aadhaar No</td>
          <td>Police Verification</td>
          <td> Gender </td>
          <td> DOB </td>
          <td> Emergency Contact </td>
          <td> Permanent Address </td>
          <td> Temporary Address </td>
        </tr>
        <tr>
          <td>{{ modalData.firstname }} {{ modalData.lastname }}</td>
          <td>{{ modalData.email }}</td>
          <td>{{ modalData.phone }}</td>
          <td><a :href="`${modalData.picture}`" target="_blank">
            <b-img width="60" height="60" :src="modalData.picture"></b-img
            ></a></td>
          <td>
            <a :href="`${modalData.document_licence}`" target="_blank">
              <b-img width="60" height="60" :src="modalData.document_licence"></b-img>
            </a>
            <br/><br/>Exp.: {{ dateConvert(modalData.licence_expiry_date, 'Y-MM-DD') }}</td>
          <td><a :href="`${modalData.document_national_icard}`" target="_blank"><b-img width="60" height="60" :src="modalData.document_national_icard"></b-img
            ></a></td>
          <td><a :href="`${modalData.document_police_vertification}`" target="_blank">
            <b-img width="60" height="60" :src="modalData.document_police_vertification"></b-img
            ></a><br/><br/>
            Exp.: {{ dateConvert(modalData.police_vertification_expiry_date,
            'Y-MM-DD') }}
          </td>
          <td>{{ modalData.gender}} </td>
          <td> {{ dateConvert(modalData.dob,
            'Y-MM-DD') }} </td>
            <td> {{ modalData.emergency_number }}</td>
            <td> {{ modalData.permanent_address }}</td>
            <td> {{ modalData.temporary_address }}</td>
           
        </tr>
      </table>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useApp } from "../../../store/useApp";
import { getDateFormat } from "../../../helpers/utils";

export default {
  name: "modelView",
  props: ["modalData"],
  computed: { ...mapState(useApp, ["dateFormat", "timeFormat"]) },

  methods: {
    dateConvert(createdAt, format) {
      return getDateFormat(createdAt, format);
    },
  },
};
</script>

<style>
.styledClass img {
  width: 100% !important;
    object-fit: contain;
    height: 150px !important;
    border-radius: 0 !important;
}

.table-scroll {
  overflow-x: auto;
  max-width: 100%;
}
</style>
