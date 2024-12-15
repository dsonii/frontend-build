<template>
  <div>
    <section class="tables">
      <b-container>
        <b-row>
          <b-col cols="4">Ticket Number</b-col>
          <b-col cols="8">{{ modalData.ticket_no }} </b-col>

          <b-col cols="4">Firstname</b-col>
          <b-col cols="8">{{ modalData.firstname }} </b-col>

          <b-col cols="4">Lastname</b-col>
          <b-col cols="8">{{ modalData.lastname }} </b-col>

          <b-col cols="4">Email</b-col>
          <b-col cols="8">{{ modalData.email }} </b-col>

          <b-col cols="4">Mobile Number</b-col>
          <b-col cols="8">{{ modalData.phone }} </b-col>

          <b-col cols="4">Description</b-col>
          <b-col cols="8">{{ modalData.description }} </b-col>

          <b-col cols="4">Created At</b-col>
          <b-col cols="8">{{ modalData.createdAt }}</b-col>
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
