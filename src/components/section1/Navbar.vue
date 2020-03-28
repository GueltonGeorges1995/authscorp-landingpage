<template>
  <div>
    <v-app-bar flat color="white" app class="margin-x z-index-12">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up" />
      <v-toolbar-title class="logo">
        <router-link to="/" class="black--text"><img src="/img/logo.svg" height=42 style="vertical-align: bottom; margin-right: 10px;" /> AUTHSCORP</router-link>
      </v-toolbar-title>
      <v-spacer />
      <div class="hidden-sm-and-down">
        <v-btn text class="nav-item" color="primary">Product</v-btn>
        <v-btn text class="nav-item" color="secondary">About us</v-btn>
        <v-btn text class="nav-item" color="secondary">Support</v-btn>
        <v-btn text class="nav-item" color="secondary" href="/signin">Sign In</v-btn>
        <v-btn text class="nav-item" color="secondary" href="/signup">Sign Up</v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense>
        <v-list-item-group active-class="primary--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Product</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><router-link to="/" class="black--text">Home</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Product</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>About us</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Support</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><router-link to="/signin" class="black--text">Sign In</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><router-link to="/signup" class="black--text">Sign Up</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><router-link to="/welcome" class="black--text">Welcome</router-link></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
@media screen and (max-width: 960px) {
  .margin-x {
    padding: 0 !important;
  }
}

.black {
    color: black;
}
.nav-item {
  color: gray;
  font-family: Helvetica;
}
.active {
  color: #264eee;
}
.logo {
  font-family: Helvetica;
  color: dark !important;
}

.margin-x {
  padding: 0 5rem;
}

a {
  text-decoration: none;
  font-family: Helvetica;
}
.z-index-12 {
  z-index: 200 !important;
}
</style>

<script>
export default {
  data: () => ({
    drawer: false
  })
};
</script>


