<template>
  <div class="bg-main-section">
    <v-container fluid class="d-flex justify-center my-5">
      <v-col cols="12" sm="7" md="7" class="flex-mobile">
        <div class="bg-col">
          <v-row class="d-flex justify-center align-center">
            <h1 class="my-4">Welcome Back.</h1>
            <v-col cols="12" sm="8">
              <div class="d-flex justify-center align-center">
              <v-btn color="primary" x-large class="mb-10 signInGoogleBtn" style="position:relative; width: 100%">
                <div class="bg-img-btn">
                  <img class="img-btn" src="./image/google-img-btn.png" alt />
                </div>
                <div class="btn-text">
                      Sign in with google
                </div>
              </v-btn>
              </div>
              <div class="d-flex justify-center align-center">
                <div class="barre"></div>
                <p style="font-size:0.9em; color:black; font-weight:bold" class="mx-5 mt-2">Or, sign in with your email</p>
                <div class="barre"></div>
              </div>
            </v-col>
          </v-row>

          <form action="http://10.3.146.65:3030/webapi/auth/connect" authscorp @apiPrepare="err = null" @apiError="onError">
            <v-row class="d-flex justify-center">
              <v-col cols="12" sm="8" class="py-0 mt-6">
                <v-text-field v-model="email" outlined :rules="emailRules" label="Email address" name="username" />
              </v-col>
              <v-col cols="12" sm="8" class="py-0">
                <v-text-field
                  outlined
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="passwordRules"
                  :type="show1 ? 'text' : 'password'"
                  label="Enter password"
                  name="password"
                  @click:append="show1 = !show1"
                />
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center align-center">
              <v-col cols="12" sm="4" class="d-flex justify-center align-center py-0">
                <v-checkbox label="Keep me sign in"></v-checkbox>
              </v-col>
              <v-col cols="12" sm="4" class="d-flex justify-center align-center py-0">
                <router-link to="/forgotpassword">Forgot password ?</router-link>
              </v-col>
              <v-col cols="12" sm="8">
                <v-alert type="error" outlined class="text-left" :value="err !== null">{{err}}</v-alert>
                <v-btn :disabled="!valid" color="primary" class="signInBtn" x-large type="submit" style="width: 100%">Sign In</v-btn>
                <p class="mt-5">
                  Don't have an account ?
                  <router-link to="/signup">Sign up now</router-link>
                </p>
              </v-col>
            </v-row>
          </form>
        </div>
      </v-col>
    </v-container>
  </div>
</template>

<script>
  import AuthscorpLib from "../../../authscorp-lib";

  AuthscorpLib.init();

  export default {
    name: 'signin',
    data: () => ({
      show1: false,
      password: "",
      valid: true,
      err: null,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        // v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [v => !!v || "Password is required"]
    }),

    methods: {
      onError(e) {
        e.preventDefault();
        this.err = e.error;
      }
    }
  };
</script>

<style scoped>

p {
  color: gray;
}
.signInBtn {
  padding: 0 10rem;
  height: 60px;
}
.barre {
  background-color: gainsboro;
  height: 1px;
  width: 50px;
}
.bg-img-btn {
  width: 15%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 3px;
  position: absolute;
  top: -11px;
  left: -15px;
  z-index: 10;
}
.btn-text{
  display:flex;
  width:80%;
  }
.img-btn {
  height: 25px;
  width: 25px;
}

.signInGoogleBtn {
  display:flex;
  justify-content:flex-end;
  height: 60px;
}
h1 {
  font-size: 40px;
}

.bg-main-section {
  padding-left: 10rem;
  padding-right: 10rem;
  background-color: #f5f9ff;

}
.bg-col {
  background-color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 10px;
}

@media screen and (max-width: 960px) {
  .flex-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bg-main-section {
    padding: 1rem !important;
  }
  .bg-col {
    padding: 1rem !important;
  }
  .bg-img-btn {
    display: none !important;
  }
  h1 {
    font-size: xx-large !important;
  }
  .signInGoogleBtn {
  justify-content: center !important;
}
  .btn-text{
  display:flex;
  width:100%;
  }
}
@media (max-width: 575.98px) {
.btn-text{
  display:flex;
  width:100%;
  justify-content: center;
  }
  .signInGoogleBtn {
  justify-content: center !important;
}
}
</style>
