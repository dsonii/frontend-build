<template>
  <div>
    <section class="tables">
      <div class="row">
        <Breadcrumb :breadcrumbs="breadcrumbs" />
        <div class="col-lg-4 offset-lg-4 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <createForm :formtype="formtype" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumb from "../../../components/breadcrumb";
import createForm from "../../../components/bustype/createform";
//const isPhone = (value) => /^\+?[0-9]+$/.test(value);

export default {
  name: "bustypecreate",
  data() {
    return {
      formtype: false,
      breadcrumbs: {
        title: "Create Vehicle type",
        b1: "Manage Vehicle types",
        b2: "Vehicle types",
        b3: "Index",
        link: true,
        name: "bustypes",
      },
    };
  },
  components: {
    Breadcrumb,
    createForm,
  },
};
</script>

<style scoped lang="scss"></style>
