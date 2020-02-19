<template>
  <v-app>
    <Home />
     <News />
    <!-- <Section3 />
    <Roadmap />
    <Pricing />
    <Section6 />
    <Footer /> --> -->

    <!-- <Test /> -->
  </v-app>
</template>

<script>
import Home from "./components/section1/Home";
import News from "./components/section2/News";
// import Section3 from "./components/section3/Section3";
// import Roadmap from "./components/Roadmap";
// import Pricing from "./components/Pricing";
// import Section6 from "./components/section6/Section6";
// import Footer from "./components/footer/Footer";

// import Test from './components/Test';

export default {
  name: "App",
  components: {
    // Section3,
    // Section6,
    Home,
    News,
    // Footer,
    // Roadmap,
    // Pricing,
    // Test
  }
};
</script>



<style>
</style>
