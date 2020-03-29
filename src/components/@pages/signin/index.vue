<template>
  <div class="bg-main-section">
    <v-container fluid>
      <v-col cols="12" sm="12" md="12" class="flex-mobile">
        <div class="bg-col">
          <h2 class="mb-4">Sign In</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="email" outlined :rules="emailRules" label="E-mail" required></v-text-field>

            <v-text-field
              outlined
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              @click:append="show1 = !show1"
            />

            <v-btn :disabled="!valid" color="primary" class="mr-4" to="/admin">Sign In</v-btn>
          </v-form>
          <br />
          
          <router-link to="/signup">I Don't Have An Account yet</router-link>
          <br />
          <br />
          <router-link to="/forgotpassword">I Have Forgot My Password</router-link>
          
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
