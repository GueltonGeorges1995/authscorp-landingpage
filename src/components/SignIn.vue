<template>
  <v-app>
    <Navbar />
    <SignInComponent />
    <Footer />
  </v-app>
</template>
<style scoped>
</style>


<script>
import Navbar from "../components/section1/Navbar";
import Footer from "../components/footer/Footer";
import SignInComponent from './Auth/SignInComponent'
export default {
  name: "SignIn",
  components: {
    Navbar,
    Footer,
    SignInComponent,
  }
};
</script>