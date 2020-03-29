<template>
  <v-app>
    <Navbar />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
  import Navbar from "./components/@menu/navbar";
  import Footer from "./components/@menu/footer/Footer.vue";

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