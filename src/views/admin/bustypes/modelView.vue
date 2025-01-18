<template>
  <div>
    <section class="tables">
      <table class="table  table-bordered  table-striped">
        <tr>
          <td>Name</td>
          <td>Status</td>
        </tr>
        <tr>
          <td>{{ modalData.name }}</td>
          <td>{{ modalData.status }}</td>
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

<style lang="scss" scoped></style>
