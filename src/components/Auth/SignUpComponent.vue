<template>
  <div class="bg-main-section">
    <v-container fluid>
      <v-col cols="12" sm="12" md="12" class="flex-mobile">
        <div class="bg-col">
          <h2>Sign Up</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn :disabled="!valid" x-large color="primary" class="mr-4" @click="validate">Sign Up</v-btn>
          </v-form>
          <br />
          <a href>I Don't Have An Account yet</a>
          <br />
          <br />
          <a href>Fortgot Password</a>
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
