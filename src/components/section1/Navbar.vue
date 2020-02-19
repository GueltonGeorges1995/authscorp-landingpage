<template>
  <div>
    <v-app-bar flat color="white" app class="margin-x">
      <v-app-bar-nav-icon flat @click="drawer = !drawer" class="hidden-md-and-up" />
      <v-toolbar-title class="logo">AUTHSCORP</v-toolbar-title>
      <v-spacer />
      <div class="hidden-sm-and-down">
        <v-btn text class="nav-item" color="primary">Product</v-btn>
        <v-btn text class="nav-item" color="secondary">Download</v-btn>
        <v-btn text class="nav-item" color="secondary">Support</v-btn>
        <v-btn text class="nav-item" color="secondary">Contact</v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Product</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Download</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Support</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="bluuue">Contact</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
@media screen and (max-width: 960px) {
  .margin-x {
    margin: 0 !important;
  }
}

.nav-item {
  color: gray;
  /* margin: 0 2.5rem; */
  font-family: Helvetica;
}
.active {
  color: #264eee;
}
.logo {
  font-family: Helvetica;
}

.margin-x {
  margin: 0 5rem;
}

a {
  text-decoration: none;
  font-family: Helvetica;
}
</style>

<script>
export default {
  data: () => ({
    drawer: false
  })
};
</script>


