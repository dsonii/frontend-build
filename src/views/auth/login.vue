<template lang="html">
  <section class="login">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper auth">
        <div class="content-wrapper d-flex align-items-center login-half-bg">
          <div class="row w-100 flex-grow">
            <div class="col-xl-4 col-lg-6 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                  <img class="img" :src="appLogo" />
                </div>
                <h5 class="font-weight-light">Sign in to continue.</h5>
                <Login />

                <div class="float-right">
                  <router-link
                    target="_blank"
                    class="text-small forgot-password text-black mr-3"
                    to="/terms"
                    >Terms and condition</router-link
                  >

                  <router-link
                    target="_blank"
                    class="text-small forgot-password text-black mr-3"
                    to="/privacy-policy"
                    >Privacy policy</router-link
                  >
                </div>
              </div>

              <p class="footer-text text-center text-white">
                copyright © {{ this.$year }} {{ appName }}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </section>
</template>

<script lang="js">
import Login from '../../components/auth/Login';
import { useApp }  from "../../store/useApp"
import { mapState } from "pinia";
export default {
  name: 'login',
  components:{
      Login
  },
  mounted(){
    this.fetchApp();

  },
  computed:{
        ...mapState(useApp, ["appName","appLogo"]),
  },
  methods:{
    fetchApp(){
   const app = useApp()
      app.getApp();
    }
  }
}
</script>

<style scoped></style>
