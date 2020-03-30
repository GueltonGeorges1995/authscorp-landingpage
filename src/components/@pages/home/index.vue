<template>
  <div>
    <home-header />
    <verify-user />
    <section3 />
    <roadmap />
    <pricing />
    <section6 />
  </div>
</template>

<script>
  import HomeHeader from "./header";
  import VerifyUser from "./verify-user";
  import Section3 from "./section3";
  import Roadmap from "./roadmap";
  import Pricing from "./pricing";
  import Section6 from "./section6";

  export default {
    name: "LandingPage",
    components: {
      HomeHeader,
      Section3,
      Section6,
      VerifyUser,
      Roadmap,
      Pricing,
    }
  };
</script>