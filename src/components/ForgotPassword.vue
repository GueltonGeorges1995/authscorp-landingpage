<template>
  <v-app>
    <Navbar />
    <ForgotPasswordComponent />
    <Footer />
  </v-app>
</template>
<style scoped>
</style>


<script>
import Navbar from "../components/section1/Navbar";
import Footer from "../components/footer/Footer";
import ForgotPasswordComponent from './Auth/ForgotPasswordComponent';
export default {
  name: "ForgotPassword",
  components: {
    Navbar,
    Footer,
    ForgotPasswordComponent
  }
};
</script>