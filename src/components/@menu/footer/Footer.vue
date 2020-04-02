<template>
  <div>
    <div class="bg-section">
      <v-container>
        <div class="bg-blue">
          <div class="square1footer mobile-none"></div>
          <div class="square2footer mobile-none"></div>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="6" class="flex-center">
                <h2>Subscribe our newsletter and get useful information every week</h2>
              </v-col>
              <v-col cols="12" sm="12" md="6" class="flex-center">
                <div class="bg-input">
                  <form ref="form" action="/api/news/subscribe" method="POST" @apiSuccess="onSuccess" @apiError="onError">
                    <input type="email" name="email" placeholder="Enter your email" class="padding-left" />
                        <v-btn color="d-inline primary white--text" style="margin-left:-70px" type="submit"><v-icon>mdi-arrow-right</v-icon></v-btn>
                   </form>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-container>
    </div>
    <div class="margin-bottom">
      <v-container>
        <v-row class="center-mobile">
          <v-col cols="0" sm="0" md="1"></v-col>
          <v-col cols="12" sm="12" md="2" class="nav-bottom inline">
            <v-btn color="white" class="social-btn">
              <v-icon color="#979EA5">fab fa-telegram-plane</v-icon>
              <span class="ml-2">Telegram</span>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="12" md="2" class="nav-bottom inline">
            <v-btn color="white" class="social-btn">
              <v-icon color="#979EA5">fab fa-reddit-alien</v-icon>
                <span class="ml-2">Subredit</span>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="12" md="2" class="nav-bottom inline">
            <v-btn color="primary" class="white--text social-btn">
              <v-icon color="#fff">fab fa-slack</v-icon>
                <span class="ml-2">Slack</span>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="12" md="2" class="nav-bottom inline">
            <v-btn color="white" class="social-btn">
              <v-icon color="#979EA5">fab fa-linkedin</v-icon>
                <span class="ml-2">Linkedin</span>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="12" md="2" class="nav-bottom inline">
            <v-btn color="white" class="social-btn">
              <v-icon color="#979EA5">fab fa-twitter</v-icon>
                <span class="ml-2">Twitter</span>
            </v-btn>
          </v-col>
          <v-col cols="0" sm="0" md="1"></v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  methods:{
   
    onSuccess(apiData) {
      this.$refs.form.reset();
      console.log(apiData);
    },
    onError($e) {
      console.error($e.error);
    }
  }
}
</script>


<style scoped>
@media screen and (max-width: 960px) {
  .mobile-none {
    display: none;
  }
  .center-mobile {
      text-align: center;
      
  }
  .inline {
      display: inline !important;
  }
  h2 {
      font-size: 15px !important;
      line-height: 15px !important;
  }
  .bg-blue {
      padding: 2rem !important;
  }
}
.square1footer {
  transform: rotate(-45deg);
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.06) 100%
  );
  width: 400px;
  height: 550px;
  position: absolute;
  right: -75px;
  top: -230px;
}
.square2footer {
  transform: rotate(-45deg);
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  width: 423px;
  height: 625px;
  position: absolute;
  right: 0px;
  top: -230px;
}

.bg-section {
  background-image: linear-gradient(#f5f9ff, #f5f9ff 50%, #fff 50%);
}
.bg-blue {
  background: #264eee;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 5rem;
  background-size: 100% 50%;
  position: relative;
  overflow: hidden;
}
h2 {
  font-size: 27px;
  color: #ffffff;
  line-height: 48px;
}
input {
  background: #ffffff;
  border: 1px solid #e6e8f6;
  border-radius: 7px;
  font-size: 17px;
  color: #979ea5;
  letter-spacing: 0;
  /* z-index: 200; */
  height: 3.5rem;
  width: 20rem;
}

.bg-input {
  /* z-index: 1; */
  padding: 1rem;
  background: rgba(245, 249, 255, 0.1);
  border-radius: 5px;
  display: inline-block;
  position: relative;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-button {
  position: absolute;
  left: 275px;
  border-radius: 30px;
  top: 21px;
}
.nav-bottom {
  display: flex;
  justify-content: space-between;
}
.social-btn {
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.margin-bottom {
  margin-bottom: 2rem;
}

.padding-left {
  padding-left: 10px;
}
</style>


