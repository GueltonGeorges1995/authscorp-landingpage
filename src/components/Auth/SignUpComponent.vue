<template>
  <div class="bg-main-section">
    <v-container fluid>
      <v-col cols="12" sm="12" md="12" class="flex-mobile">
        <div class="bg-col">
          <h2>Sign Up</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name"  :rules="nameRules" label="Name" required></v-text-field>

            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="show1 ? 'text' : 'password'"
              
              label="Password"
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-text-field
              v-model="password2"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="show2 ? 'text' : 'password'"
              
              label="Password Verification"
              @click:append="show2 = !show2"
            ></v-text-field>
            

            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="You agree with our terms and conditions"
              required
            ></v-checkbox>

            <v-btn :disabled="!valid"  color="primary" class="mr-4" @click="validate">Sign Up</v-btn>
          </v-form>
           <br>
          
          <router-link to="/signin">I Already Have An Account</router-link>

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
    color: #264EEE;
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
    show2: false,
    password: '',
    password2: '',
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    passwordRules: [
      v => !!v || "Password is required",
    ],
    select: null,
    
    checkbox: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
  }
};
</script>
