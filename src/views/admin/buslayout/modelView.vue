<template>
  <div>
    <section class="tables">
      <table class="table  table-bordered  table-striped">
        <tr>
          <td>Full Name</td>
          <td>Status</td>
          <td>Layout</td>
          <td>Max Seats</td>
          <td>Bus seats</td>
        </tr>
        <tr>
          <td>{{ modalData.name }}</td>
          <td>{{ modalData.status }}</td>
          <td>{{ modalData.layout }}</td>
          <td>{{ modalData.max_seats }}</td>
          <td>
            <div class="box-body row" id="layouts">
              <!----------- Left Row Start ---------->
              <div class="col-md-3 nopadding">
                <div class="row">
                  <div class="col-md-4 nopadding apps-container">
                    <div
                      class="col-md-12 nopadding app"
                      v-for="row in modalData.combine_seats[0]"
                      :key="row.bus"
                    >
                      <div :class="row.type"></div>
                      <span>{{ row.seat_no }}</span>
                    </div>
                  </div>
                  <div class="col-md-4 nopadding apps-container">
                    <div
                      class="col-md-12 nopadding app"
                      v-for="row in modalData.combine_seats[1]"
                      :key="row.bus"
                    >
                      <div :class="row.type"></div>
                      <span>{{ row.seat_no }}</span>
                    </div>
                  </div>
                  <div class="col-md-4 nopadding apps-container">
                    <div
                      class="col-md-12 nopadding app"
                      v-for="row in modalData.combine_seats[2]"
                      :key="row.bus"
                    >
                      <div :class="row.type"></div>
                      <span>{{ row.seat_no }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!----------- Left Row Start ---------->

              <!----------- Middle Row  ---------->
              <div class="col-md-2 nopadding"></div>
              <!----------- Middle Row  ---------->

              <!----------- Right Row Start ---------->
              <div class="col-md-3 nopadding">
                <div class="row">
                  <div class="col-md-4 nopadding apps-container">
                    <div
                      class="col-md-12 nopadding app"
                      v-for="row in modalData.combine_seats[3]"
                      :key="row.bus"
                    >
                      <div :class="row.type"></div>
                      <span>{{ row.seat_no }}</span>
                    </div>
                  </div>
                  <div class="col-md-4 nopadding apps-container">
                    <div
                      class="col-md-12 nopadding app"
                      v-for="row in modalData.combine_seats[4]"
                      :key="row.bus"
                    >
                      <div :class="row.type"></div>
                      <span>{{ row.seat_no }}</span>
                    </div>
                  </div>
                  <div class="col-md-4 nopadding apps-container">
                    <div
                      class="col-md-12 nopadding app"
                      v-for="row in modalData.combine_seats[5]"
                      :key="row.bus"
                    >
                      <div :class="row.type"></div>
                      <span>{{ row.seat_no }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!----------- Right Row Start ---------->
            </div>
          </td>
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

<style lang="scss" scoped>
#seat-numbers {
  color: green;
  font-weight: 700;
}
.box-body {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 10px;
}
.nopadding {
  padding: 0px !important;
}
.sleeper {
  background-image: url("../../../assets/seats/seat.png");
  background-repeat: no-repeat;
  width: 46px;
  margin-top: 10px;
  height: 41px;
}
</style>
