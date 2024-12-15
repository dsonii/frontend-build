<template lang="html">
  <section class="app-footer">
    <footer class="footer">
      <div class="container-fluid clearfix">
        <span
          class="text-muted text-center text-sm-left d-block d-sm-inline-block"
          >Copyright © <a href="/" target="_blank">{{ appName }} </a
          >{{ this.$year }}</span
        >
      </div>
    </footer>
  </section>
</template>

<script lang="js">
import { useApp } from "../../store/useApp";
import  { mapState } from "pinia";
export default {
  name: 'the-ferri-footer',
  computed:{
      ...mapState(useApp,['appName'])
  }
}
</script>

<style scoped lang="scss">
.app-footer {
}
</style>
