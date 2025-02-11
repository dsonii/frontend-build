<template>
  <div>
    <section class="tables">
      <table class="table  table-bordered  table-striped styledClass">
        <tr>
          <td>Profile Picture</td>
          <td>Company Name</td>
          <td>Employee Code</td>
          <td>Full Name</td>
          <td>Gender</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Status</td>
          <td>Created By</td>
        </tr>
        <tr>
          <td><b-img
              class="img-fluid"
              width="50"
              height="50"
              :src="modalData.ProfilePic"
            ></b-img
          ></td>
          <td>{{ modalData.company }}</td>
          <td>{{ modalData.customer_code }}</td>
          <td>{{ modalData.fullname }}</td>
          <td>{{ modalData.gender }}</td>
          <td>{{ modalData.email }}</td>
          <td>+{{ modalData.country_code }}{{ modalData.phone }}</td>
          <td>{{ modalData.status }}</td>
          <td>{{ modalData.created_by }}</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
import moment from "moment-timezone";

export default {
  name: "modelView",
  props: ["modalData"],
  methods: {
    dateConvert(data) {
      return moment.utc(data).tz("Asia/Kolkata").format("LLL");
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
}</style>
