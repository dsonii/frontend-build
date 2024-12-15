<template lang="html">
  <section class="login">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper auth">
        <div class="content-wrapper d-flex align-items-center login-half-bg">
          <div class="row w-100 flex-grow">
            <div class="col-xl-4 col-lg-6 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                  <img
                    class="img"
                    src="https://go-smart-shuttle.sgp1.cdn.digitaloceanspaces.com/settings/09576d95-6d4a-4b4e-a045-93faf1cfa7c6.png"
                  />
                </div>
                <h5 class="font-weight-light">Sign in to continue.</h5>
                <Login />
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </section>
  <!-- <section class="login">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div
          class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one"
        >
          <div class="row w-100">
            <div class="col-lg-4 mx-auto">
              <div class="auto-form-wrapper">
             
              </div>
              <p class="footer-text text-center text-white">
                copyright © {{ this.$year }} {{ this.$appName }}. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>

      </div>
  
    </div>
  </section>-->
</template>

<script lang="js">
import Login from '../../components/auth/Login';
import { useApp }  from "../../store/useApp"
export default {
  name: 'login',
  components:{
      Login
  },
  mounted(){
    this.fetchApp();
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
