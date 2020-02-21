<template>
  <v-app>
    <Navbar />
    <SignUpComponent />
    <Footer />
  </v-app>
</template>
<style scoped>
</style>


<script>
import Navbar from "../components/section1/Navbar";
import Footer from "../components/footer/Footer";
import SignUpComponent from './Auth/SignUpComponent'
export default {
  name: "SignUp",
  components: {
    Navbar,
    Footer,
    SignUpComponent,
  }
};
</script>