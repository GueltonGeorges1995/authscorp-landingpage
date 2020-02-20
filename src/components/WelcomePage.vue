<template>
  <v-app>
    <Home />
    <News />
    <Welcome />
    <Footer />
  </v-app>
</template>

<script>
import Home from "./section1/Home";
import News from "./section2/News";
import Footer from "./footer/Footer";
import Welcome from "./welcome/Welcome";

export default {
  name: "WelcomePage",
  components: {
    Home,
    News,
    Footer,
    Welcome
  }
};
</script>



<style>
</style>
