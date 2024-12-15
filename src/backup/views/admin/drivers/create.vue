<template>
  <div>
    <section class="tables">
      <div class="row">
        <Breadcrumb :breadcrumbs="breadcrumbs" />

        <customForm :formtype="formtype" />
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumb from "../../../components/breadcrumb";
import customForm from "../../../components/drivers/customform";
//const isPhone = (value) => /^\+?[0-9]+$/.test(value);

export default {
  name: "drivercreate",
  data() {
    return {
      formtype: false,
      breadcrumbs: {
        title: "Create Driver",
        b1: "Manage Drivers",
        b2: "Drivers",
        b3: "Index",
        link: true,
        name: "drivers",
      },
    };
  },
  components: {
    Breadcrumb,
    customForm,
  },
};
</script>

<style scoped lang="scss"></style>
