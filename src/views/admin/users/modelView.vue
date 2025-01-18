<template>
  <div>
    <section class="tables">
      <table class="table  table-bordered  table-striped">
        <tr>
          <td>Full Name</td>
          <td>Email Address</td>
          <td>Phone</td>
          <td>Status</td>
          <td>Profile Picture</td>
          <td>Created By</td>
        </tr>
        <tr>
          
          <td>{{ modalData.fullname }}</td>
          <td>{{ modalData.email }}</td>
          <td>{{ modalData.phone }}</td>
          <td><b-badge
              :variant="modalData.is_active == 'Active' ? 'success' : 'danger'"
              >{{ modalData.is_active }}</b-badge
            ></td>
         <td><b-img
              class="img-fluid"
              width="50"
              height="50"
              :src="modalData.ProfilePic"
            ></b-img
          ></td>
          <td>{{
            dateConvert(
              modalData.createdAt,
              `${dateFormat.value} ${timeFormat.value}`
            )
          }}</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useApp } from "../../../store/useApp";
import { getDateFormat } from "../../../helpers/utils";

export default {
  name: "modelView",
  data() {
    return {
      mainProps: {
        center: true,
        fluidGrow: false,
        blank: true,
        blankColor: "#bbb",
        width: 80,
        height: 80,
        class: "my-2",
      },
    };
  },
  props: ["modalData"],
  computed: { ...mapState(useApp, ["dateFormat", "timeFormat"]) },

  methods: {
    dateConvert(createdAt, format) {
      return getDateFormat(createdAt, format);
    },
  },
};
</script>

<style></style>
