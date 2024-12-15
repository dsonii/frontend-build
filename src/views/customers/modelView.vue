<template>
  <div>
    <section class="tables">
      <b-container>
        <b-row>
          <b-col cols="4">Profile Picture</b-col>
          <b-col cols="8"
            ><b-img
              class="img-fluid"
              width="50"
              height="50"
              :src="modalData.ProfilePic"
            ></b-img
          ></b-col>
          <b-col cols="4">Full Name</b-col>
          <b-col cols="8">{{ modalData.fullname }} </b-col>

          <b-col cols="4">Gender</b-col>
          <b-col cols="8">{{ modalData.gender }} </b-col>

          <b-col cols="4">Email</b-col>
          <b-col cols="8">{{ modalData.email }} </b-col>

          <b-col cols="4">Phone</b-col>
          <b-col cols="8"
            >+{{ modalData.country_code }}{{ modalData.phone }}
          </b-col>
          <b-col cols="4">Refercode</b-col>
          <b-col cols="8">{{ modalData.refercode }} </b-col>

          <b-col cols="4">Wallet Balance</b-col>
          <b-col cols="8">{{ modalData.wallet_balance }} </b-col>
          <b-col cols="4">Status</b-col>
          <b-col cols="8">{{ modalData.status }}</b-col>

          <b-col cols="4">Created By</b-col>
          <b-col cols="8">{{ modalData.created_by }}</b-col>
        </b-row>
      </b-container>
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

<style></style>
