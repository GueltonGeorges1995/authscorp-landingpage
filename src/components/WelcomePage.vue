<template>
  <v-app>
    <Home />
    <News />
    <Welcome />
  </v-app>
</template>

<script>
  import Home from "@pages/home/header";
  import News from "@pages/home/verify-user";
  import Welcome from "./welcome/Welcome";

  export default {
    name: "WelcomePage",
    components: {
      Home,
      News,
      Welcome,
    }
  };
</script>
