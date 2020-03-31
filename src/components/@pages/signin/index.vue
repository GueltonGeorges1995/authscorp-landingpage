<template>
  <div class="bg-main-section">
    <v-container fluid>
      <v-col cols="12" sm="12" md="12" class="flex-mobile">
        <div class="bg-col">
          <h2 class="mb-4">Sign In</h2>
          <form ref="form" action="http://10.3.146.65:3030/webapi/auth/connect" authscorp @apiPrepare="err = null" @apiError="onError">
            <v-text-field v-model="email" outlined :rules="emailRules" label="E-mail" name="username" />

            <v-text-field
              outlined
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              name="password"
              @click:append="show1 = !show1"
            />

            <v-alert type="error" outlined class="text-left" :value="err !== null">{{err}}</v-alert>
            <v-btn :disabled="!valid" color="primary" class="mr-4" type="submit">Sign In</v-btn>
          </form>
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

<script>
  import AuthscorpLib from '../../../authscorp-lib'

  AuthscorpLib.init()

  export default {
    data: () => ({
      show1: false,
      password: "",
      valid: true,
      err: null,
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
      },
      onError(e) {
        e.preventDefault()
        this.err = e.error
      }
    }
  };

</script>

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
