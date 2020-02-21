<template>
  <div class="bg-main-section">
    <v-container fluid>
      <v-col cols="12" sm="12" md="12" class="flex-mobile">
        <div class="bg-col">
          <h2>I've Fortgot My Password</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <p>You'll receive an E-mail with an new password</p>
            <v-btn :disabled="!valid"  color="primary" class="mr-4" @click="validate">Submit</v-btn>
          </v-form>
          <br />
          
          <router-link to="/signin">Go Back To Sign In Page</router-link>
          <br />
          <br />
          
        </div>
      </v-col>
    </v-container>
  </div>
</template>


<style scoped>
@media screen and (max-width: 960px) {
  .flex-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
  }
  .bg-main-section {
    padding: 1rem !important;
  }
  .bg-col {
    padding: 1rem !important;
  }
}

h2 {
  color: #264eee;
  font-family: Helvetica;
}
p {
  color: #264eee;
  font-family: Helvetica;  
}

a {
  text-decoration: none;
}
.bg-main-section {
  padding: 10rem;
  background-color: #f5f9ff;
  text-align: center;
}
.bg-col {
  background-color: #ffffff;
  padding: 10rem;
  border-radius: 10px;
}
</style>


<script>
export default {
  data: () => ({
    show1: false,
    password: "",
    valid: true,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    passwordRules: [v => !!v || "Password is required"],
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }
  }
};
</script>
