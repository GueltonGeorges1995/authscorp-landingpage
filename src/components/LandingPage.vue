<template>
  <v-app>
    <Home />
    <News />
    <Section3 />
    <Roadmap />
    <Pricing />
     <Section6 />  
    <Footer /> 
  </v-app>
</template>

<script>
import Home from "./section1/Home";
import News from "./section2/News";
import Section3 from "./section3/Section3";
import Roadmap from "./section4/Roadmap";
import Pricing from "./section5/Pricing";
import Section6 from "./section6/Section6";
import Footer from "./footer/Footer";


export default {
  name: "LandingPage",
  components: {
    Section3,
    Section6,
    Home,
    News,
    Footer,
    Roadmap,
    Pricing,
  }
};
</script>



<style>
</style>
