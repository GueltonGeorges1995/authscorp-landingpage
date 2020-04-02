<template>
  <v-app>
    <Navbar />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>

  import Navbar from "./components/@menu/navbar";
  import Footer from "./components/@menu/footer";

  export default {
    name: "App",
    components: {
      Navbar,
      Footer
    },
    metaInfo: {
      title: 'Authscorp'
    }
  };

</script>

<style>

  a {
    text-decoration: none;
  }

</style>