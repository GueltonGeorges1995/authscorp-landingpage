<template>
  <v-app>
    <Home />
    <News />
    <Welcome />
    <!-- <Welcome2 /> -->
    <Footer />
  </v-app>
</template>

<script>
import Home from "./section1/Home";
import News from "./section2/News";
import Footer from "./footer/Footer";
import Welcome from "./welcome/Welcome";
// import Welcome2 from './welcome/Welcome2';

export default {
  name: "WelcomePage",
  components: {
    Home,
    News,
    Footer,
    Welcome,
    // Welcome2,
  }
};
</script>



<style>
</style>
